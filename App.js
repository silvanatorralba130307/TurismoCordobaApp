import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

import DestinationCard from "./components/DestinationCard";
import { destinations } from "./data/destinations";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#214E3A" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.appName}>Turismo Córdoba</Text>
          <Text style={styles.subtitle}>
            Descubrí destinos increíbles de nuestra provincia
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Destinos destacados</Text>

          <Text style={styles.intro}>
            Conocé algunos de los lugares más atractivos de Córdoba y empezá a
            planificar tu próxima escapada.
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
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Proyecto ABP · Unidad I
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F3",
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#214E3A",
    paddingTop: 54,
    paddingHorizontal: 22,
    paddingBottom: 28,
  },
  appName: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#E2EFE7",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 6,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 22,
  },
  sectionTitle: {
    color: "#1F2D25",
    fontSize: 24,
    fontWeight: "bold",
  },
  intro: {
    color: "#5C675F",
    fontSize: 15,
    lineHeight: 21,
    marginTop: 7,
    marginBottom: 18,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  footerText: {
    color: "#7A837E",
    fontSize: 13,
  },
});
