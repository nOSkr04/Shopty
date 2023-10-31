/* eslint-disable react/react-in-jsx-scope */
import { DarkTheme,  NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";
import { BottomSheetNavigator } from "./bottom-sheet-navigator";
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
    theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
      <BottomSheetNavigator/>
    </NavigationContainer>
  );
}