import { ActivityIndicator } from "react-native";
import { colors } from "@/constants/theme";

export function Loader() {
  return <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 40 }} />;
}
