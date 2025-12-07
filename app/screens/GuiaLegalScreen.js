import { View, Text, StyleSheet } from "react-native";

export default function GuiaLegalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guía Legal 🇺🇸</Text>
      <Text style={styles.subtitle}>
        Información básica sobre procesos migratorios y derechos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
  },
});
