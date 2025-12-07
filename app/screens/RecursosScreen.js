import { View, Text, StyleSheet } from "react-native";

export default function RecursosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recursos útiles 🇺🇸</Text>
      <Text style={styles.subtitle}>
        Documentos, servicios, apoyo y herramientas para inmigrantes.
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
