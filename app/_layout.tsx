import { CombinedDarkTheme } from "@/theme";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <ApolloProvider client={client}>
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
          <Stack>
            <Stack.Screen
              name="index"
              options={{ headerTitle: "SpaceX Launches" }}
            />
            <Stack.Screen
              name="[id]"
              options={{
                headerTitle: "Details",
                presentation: "modal",
              }}
            />
          </Stack>
        </SafeAreaView>
      </ApolloProvider>
    </PaperProvider>
  );
}
