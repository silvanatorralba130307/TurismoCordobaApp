import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';
import { useFavoritesStore } from '../store/favoritesStore';

export default function FavoritesScreen() {
  const router = useRouter();

  const favoriteIds = useFavoritesStore(
    (state) => state.favoriteIds
  );

  const favoriteDestinations = destinations.filter(
    (destination) => favoriteIds.includes(destination.id)
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favoriteDestinations}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Text style={styles.title}>
              Mis favoritos
            </Text>

            <Text style={styles.subtitle}>
              Destinos que marcaste como favoritos.
            </Text>
          </View>
        }
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
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Todavía no agregaste destinos a favoritos.
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

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#244c3a',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 22,
  },

  emptyText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 40,
  },
});