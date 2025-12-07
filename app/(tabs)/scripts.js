import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ScriptsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scripts</Text>

      <Text style={styles.paragraph}>
        Aquí podrás ejecutar scripts internos, ver logs, y realizar pruebas. 
      </Text>

      {/* Puedes agregar más componentes aquí */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
  },
});
