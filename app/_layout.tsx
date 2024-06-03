import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { CustomHeader } from "@/components/custom-header";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { Platform, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const isAndroid = Platform.OS === "android";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ header: () => <CustomHeader /> }}
          />
          <Stack.Screen
            name="(modal)/filter"
            options={{
              presentation: Platform.OS === "android" ? "modal" : "card",
              headerTitle: "Filter",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: Colors.lightGrey },
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="close-outline"
                    size={26}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
