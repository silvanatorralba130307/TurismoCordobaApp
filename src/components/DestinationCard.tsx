import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

type DestinationCardProps = {
  name: string;
  region: string;
  description: string;
  image: ImageSourcePropType;
};

export default function DestinationCard({
  name,
  region,
  description,
  image,
}: DestinationCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.region}>{region}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 190,
  },

  content: {
    padding: 15,
  },

  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#244c3a',
  },

  region: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4d8b6e',
    marginTop: 4,
  },

  description: {
    fontSize: 14,
    color: '#555555',
    marginTop: 10,
    lineHeight: 20,
  },
});