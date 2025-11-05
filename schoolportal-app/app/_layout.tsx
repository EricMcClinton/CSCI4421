// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="tab/index" options={{ title: "Home" }} />
      <Stack.Screen name="tab/details" options={{ title: "Details" }} />
      <Stack.Screen
        name="tab/modal"
        options={{ presentation: "modal", title: "Quick Action" }}
      />
    </Stack>
  );
}
