import { Stack } from "expo-router/stack";
import { Themes } from "../assets/Themes";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Themes.colors.background,
        },
        headerTintColor: "#ffff",
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    ></Stack>
  );
}
