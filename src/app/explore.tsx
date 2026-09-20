import { useQuery } from '@tanstack/react-query';

import { useEffect, useRef } from 'react';

import { SymbolView } from 'expo-symbols';

import { useLocalSearchParams, useRouter } from 'expo-router';

import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { destinations } from '../data/destinations';

import {
  fetchWeather,
  getWeatherDescription,
} from '../services/weather';

import { useFavoritesStore } from '../store/favoritesStore';

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const favoriteIds = useFavoritesStore(
  (state) => state.favoriteIds
);

const toggleFavorite = useFavoritesStore(
  (state) => state.toggleFavorite
);

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  const openHotels = () => {
    if (!destination) return;

  const query = `hoteles mejor valorados en ${destination.name}`;

  Linking.openURL(
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
  );
};

const openRestaurants = () => {
  if (!destination) return;

  const query = `restaurantes mejor valorados en ${destination.name}`;

  Linking.openURL(
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
  );
};

const openPlace = (place: string) => {
  if (!destination) return;

  const query = `${place}, ${destination.name}, Córdoba`;

  Linking.openURL(
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
  );
};

  useEffect(() => {
  scrollRef.current?.scrollTo({
    y: 0,
    animated: false,
  });
}, [destination?.id]);

const {
  data: weather,
  isLoading: weatherLoading,
  error: weatherError,
} = useQuery({
  queryKey: ['weather', destination?.id],
  queryFn: () =>
    fetchWeather(
      destination!.latitude,
      destination!.longitude
    ),
  enabled: !!destination,
});

  const isFavorite = destination
  ? favoriteIds.includes(destination.id)
  : false;

  if (!destination) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Detalle del destino</Text>

          <Text style={styles.emptyText}>
            Seleccioná un destino desde la pantalla de inicio.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={destination.image}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            {destination.name}
          </Text>

          <Text style={styles.region}>
            {destination.region}
          </Text>
          <TouchableOpacity

  style={styles.favoriteButton}

  onPress={() => toggleFavorite(destination.id)}

  activeOpacity={0.8}
>
  {isFavorite ? (
  <Text style={styles.favoriteHeart}>♥</Text>
) : (
  <SymbolView
    name={{
      ios: 'heart',
      android: 'favorite_border',
      web: 'favorite_border',
    }}
    size={28}
    tintColor="#4d8b6e"
  />
)}

  <Text style={styles.favoriteText}>
    {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
  </Text>

</TouchableOpacity>
          <Text style={styles.description}>
            {destination.description}
          </Text>
          <Text style={styles.sectionTitle}>
  Lugares para visitar
</Text>

{destination.placesToVisit.map((place, index) => (
  <TouchableOpacity
    key={index}
    onPress={() => openPlace(place)}
  >
    <Text style={styles.listItem}>
      📍 {place}
    </Text>
  </TouchableOpacity>
))}

<Text style={styles.sectionTitle}>
  Actividades
</Text>

{destination.activities.map((activity) => (
  <Text key={activity} style={styles.listItem}>
    • {activity}
  </Text>
))}

<Text style={styles.sectionTitle}>
  Servicios cercanos
</Text>

<TouchableOpacity
  style={styles.serviceButton}
  onPress={openHotels}
>
  <Text style={styles.serviceButtonText}>
    🏨 Buscar hospedajes
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.serviceButton}
  onPress={openRestaurants}
>
  <Text style={styles.serviceButtonText}>
    🍽️ Dónde comer
  </Text>
</TouchableOpacity>

<Text style={styles.sectionTitle}>
  Clima actual
</Text>

{weatherLoading && (
  <ActivityIndicator size="large" />
)}

{weatherError && (
  <Text style={styles.weatherError}>
    No se pudo obtener el clima en este momento.
  </Text>
)}

{weather && (
  <View style={styles.weatherContainer}>
    <Text style={styles.weatherCondition}>
      {getWeatherDescription(weather.weatherCode)}
    </Text>
    <Text style={styles.weatherTemperature}>
      {Math.round(weather.temperature)} °C
    </Text>

    <Text style={styles.weatherText}>
      Sensación térmica: {Math.round(weather.apparentTemperature)} °C
    </Text>

    <Text style={styles.weatherText}>
      Viento: {weather.windSpeed} km/h
    </Text>
  </View>
)}

          <TouchableOpacity
  style={styles.backButton}
  onPress={() => router.push('/')}
  activeOpacity={0.8}
>
  <Text style={styles.backButtonText}>
    Volver al inicio
  </Text>
</TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f5',
  },

  image: {
    width: '100%',
    height: 280,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#244c3a',
  },

  region: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4d8b6e',
    marginTop: 6,
  },

  description: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 24,
    marginTop: 18,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  emptyTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#244c3a',
    marginBottom: 10,
  },

  emptyText: {
    fontSize: 16,
    color: '#606c66',
    textAlign: 'center',
  },

  backButton: {
    backgroundColor: '#245b46',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },

backButtonText: {
  color: '#ffffff',
  fontSize: 16,
  fontWeight: '600',
},

favoriteButton: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  marginTop: 16,
},

favoriteText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#244c3a',
},


favoriteHeart: {
  fontSize: 32,
  color: '#c62828',
  lineHeight: 32,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#244c3a',
  marginTop: 22,
  marginBottom: 8,
},

listItem: {
  fontSize: 15,
  color: '#555555',
  lineHeight: 23,
  marginBottom: 4,
},

weatherContainer: {
  backgroundColor: '#ffffff',
  padding: 16,
  borderRadius: 12,
  marginTop: 5,
  marginBottom: 10,
},

weatherCondition: {
  fontSize: 18,
  fontWeight: '600',
  color: '#244c3a',
  marginBottom: 8,
},

weatherTemperature: {
  fontSize: 28,
  fontWeight: 'bold',
  color: '#244c3a',
  marginBottom: 8,
},

weatherText: {
  fontSize: 15,
  color: '#555555',
  marginBottom: 5,
},

weatherError: {
  fontSize: 15,
  color: '#a33a3a',
  marginTop: 5,
  marginBottom: 10,
},

serviceButton: {
  backgroundColor: '#244c3a',
  paddingVertical: 14,
  paddingHorizontal: 16,
  borderRadius: 12,
  marginTop: 5,
  marginBottom: 10,
  alignItems: 'center',
},

serviceButtonText: {
  color: '#ffffff',
  fontSize: 16,
  fontWeight: '600',
},

});