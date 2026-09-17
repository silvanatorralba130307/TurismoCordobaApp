import { useRouter } from 'expo-router';
import { useState } from 'react';

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  
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
});