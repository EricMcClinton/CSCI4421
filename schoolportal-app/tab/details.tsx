import { View, Text, StyleSheet } from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Details</Text>
      <Text>
        Put a Student assignments list, or Teacher announcements, etc. here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  h1: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
});
