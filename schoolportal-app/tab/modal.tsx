import { View, Text, StyleSheet } from "react-native";

export default function QuickModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Quick Action</Text>
      <Text>This could be an announcement composer or a confirmation.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  h1: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
});
