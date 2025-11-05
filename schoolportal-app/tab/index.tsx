import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>School Portal — Home</Text>

      {/* Replace this box with your Part 2 prototype UI components */}
      <View style={styles.prototypeBox}>
        <Text style={styles.prototypeText}>
          Your Project 2 prototype UI goes here
        </Text>
        <Text style={styles.subtle}>
          (Teacher • Student • Admin tiles, etc.)
        </Text>
      </View>

      {/* Click #1: stateful action */}
      <Pressable style={styles.button} onPress={() => setCount((c) => c + 1)}>
        <Text style={styles.buttonText}>Increment Counter ({count})</Text>
      </Pressable>

      {/* Click #2: navigation action */}
      <Link href="details" asChild>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Open Details Screen →</Text>
        </Pressable>
      </Link>

      {/* Bonus: a modal (optional 3rd click) */}
      <Link href="modal" asChild>
        <Pressable style={styles.linkOnly}>
          <Text style={styles.linkText}>Open Quick Action Modal</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center" },
  prototypeBox: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
  },
  prototypeText: { fontSize: 16, fontWeight: "600" },
  subtle: { opacity: 0.6, marginTop: 4 },
  button: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "700" },
  secondaryButton: {
    borderWidth: 1,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryText: { fontWeight: "600" },
  linkOnly: { paddingVertical: 6, alignItems: "center" },
  linkText: { textDecorationLine: "underline" },
});
