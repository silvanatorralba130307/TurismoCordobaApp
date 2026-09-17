import { useEffect, useState } from 'react';

import { SymbolView } from 'expo-symbols';

import { useLocalSearchParams, useRouter } from 'expo-router';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { destinations } from '../data/destinations';
import {
  isDestinationFavorite,
  toggleDestinationFavorite,
} from '../data/favorites';

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
  if (id) {
    setIsFavorite(isDestinationFavorite(Number(id)));
  }
}, [id]);
  
  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
  onPress={() => {
  const newFavoriteState = toggleDestinationFavorite(
    destination.id
  );

  setIsFavorite(newFavoriteState);
}}
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

{destination.placesToVisit.map((place) => (
  <Text key={place} style={styles.listItem}>
    • {place}
  </Text>
))}

<Text style={styles.sectionTitle}>
  Actividades
</Text>

{destination.activities.map((activity) => (
  <Text key={activity} style={styles.listItem}>
    • {activity}
  </Text>
))}
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

});