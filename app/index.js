import { View } from "react-native";
import { Link, Stack } from "expo-router";
import { Button } from "react-native-web";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Overview" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/details.js">Go to Details</Link>
      <Button href="/details" >teste</Button>
    </View>
  );
}