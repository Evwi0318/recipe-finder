import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RecipeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Recipe {id}</Text>
    </View>
  );
}
