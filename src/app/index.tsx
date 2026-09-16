import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Turismo Córdoba</Text>

        <Text style={styles.subtitle}>
          Descubrí destinos increíbles de nuestra provincia
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Destinos destacados</Text>

        <Text style={styles.sectionDescription}>
          Conocé algunos de los lugares más elegidos para disfrutar de la
          naturaleza, la cultura y los paisajes de Córdoba.
        </Text>

        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            name={destination.name}
            region={destination.region}
            description={destination.description}
            image={destination.image}
          />
        ))}
      </ScrollView>
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
    marginBottom: 20,
  },
});