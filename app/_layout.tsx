import "../global.css";

import * as React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "~/lib/useColorScheme";
import { DARK_THEME, LIGHT_THEME } from "~/lib/constants";
import Header from "~/components/navigation/Header";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            header: () => <Header hideBack />,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth/login"
          options={{
            headerBackTitle: "Back",
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="auth/register"
          options={{
            headerBackTitle: "Back",
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="auth/forgot-password"
          options={{
            headerBackTitle: "Back",
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
