import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DestinationCard({
  name,
  region,
  description,
  image,
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.information}>
        <Text style={styles.region}>{region.toUpperCase()}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 190,
  },
  information: {
    padding: 16,
  },
  region: {
    color: "#3D7B5C",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.6,
    marginBottom: 5,
  },
  name: {
    color: "#1F2D25",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#59635D",
    fontSize: 15,
    lineHeight: 21,
  },
});
