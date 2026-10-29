import { useRouter } from 'expo-router';
import { useState } from 'react';
import * as Location from 'expo-location';

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context';

import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';

const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [nearestDestination, setNearestDestination] = useState<string | null>(null);
  const router = useRouter();

  const getCurrentLocation = async () => {
  const { status } =
    await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    alert('Necesitamos permiso para acceder a tu ubicación.');
    return;
  }

  const location = await Location.getCurrentPositionAsync({});

  const userLatitude = location.coords.latitude;
const userLongitude = location.coords.longitude;

const destinationsWithDistance = destinations.map((destination) => ({
  ...destination,
  distance: calculateDistance(
    userLatitude,
    userLongitude,
    destination.latitude,
    destination.longitude
  ),
}));

const nearest = destinationsWithDistance.reduce((previous, current) =>
  current.distance < previous.distance ? current : previous
);

setNearestDestination(
  `${nearest.name} - ${nearest.distance.toFixed(1)} km`
);
};
  
  
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Turismo Córdoba</Text>

        <Text style={styles.subtitle}>
          Descubrí destinos increíbles de nuestra provincia
        </Text>
      </View>
    <FlatList
  data={filteredDestinations}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
  <DestinationCard
  name={item.name}
  region={item.region}
  description={item.description}
  image={item.image}
  onPress={() =>
    router.push({
      pathname: '/explore',
      params: { id: item.id.toString() },
    })
  }
/>
)}
  contentContainerStyle={styles.content}
  showsVerticalScrollIndicator={false}
  ListHeaderComponent={
    <>
      <Text style={styles.sectionTitle}>Destinos destacados</Text>

      <Text style={styles.sectionDescription}>
        Conocé algunos de los lugares más elegidos para disfrutar de la
        naturaleza, la cultura y los paisajes de Córdoba.
      </Text>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={getCurrentLocation}
>
      <Text style={styles.locationButtonText}>
       📍 Destinos cerca de mí
      </Text>
      </TouchableOpacity>
      {nearestDestination && (
  <Text style={styles.nearestDestinationText}>
    Destino más cercano: {nearestDestination}
  </Text>
)}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar destino..."
        value={search}
        onChangeText={setSearch}
      />
    </>
  }
  ListEmptyComponent={
    <Text style={styles.emptyText}>
      No se encontraron destinos.
    </Text>
  }
/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f5',
  },

  header: {
    backgroundColor: '#245b46',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 22,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitle: {
    fontSize: 15,
    color: '#dcebe5',
    marginTop: 6,
  },

  content: {
    padding: 18,
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#244c3a',
    marginBottom: 6,
  },

  sectionDescription: {
    fontSize: 14,
    color: '#606c66',
    lineHeight: 20,
    marginBottom: 15,
  },

  searchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd8d2',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#606c66',
    marginTop: 20,
  },

  locationButton: {
  backgroundColor: '#244c3a',
  paddingVertical: 14,
  paddingHorizontal: 16,
  borderRadius: 12,
  marginBottom: 12,
  alignItems: 'center',
},

locationButtonText: {
  color: '#ffffff',
  fontSize: 16,
  fontWeight: '600',
},

nearestDestinationText: {
  fontSize: 16,
  color: '#244c3a',
  fontWeight: '600',
  marginBottom: 12,
  textAlign: 'center',
},
});