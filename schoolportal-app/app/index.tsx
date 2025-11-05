// app/index.tsx
import { Redirect } from "expo-router";

export default function Index() {
  // Redirect the root path to /tab (your home screen)
  return <Redirect href="tab" />;

}
