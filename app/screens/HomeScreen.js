import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import ButtonPrimary from "../components/ButtonPrimary";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Americanízate 🇺🇸</Text>
      <Text style={styles.subtitle}>
        Aprende lo esencial para adaptarte a la vida en Estados Unidos.
      </Text>

      <View style={styles.buttons}>
        <ButtonPrimary 
          label="Recursos Útiles" 
          onPress={() => router.push("/(tabs)/recursos")} 
        />

        <ButtonPrimary 
          label="Guía Legal" 
          onPress={() => router.push("/(tabs)/legal")} 
        />
      </View>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  buttons: {
    marginTop: 20,
    width: "100%",
  },
});
