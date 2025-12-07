import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonPrimary({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 6,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
