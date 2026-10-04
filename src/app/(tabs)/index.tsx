import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput, View } from "react-native";
import { RecipeList } from "@/components/RecipeList";
import { colors } from "@/constants/theme";
import { Meal, searchMeals } from "@/services/api";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  async function search() {
    setLoading(true);
    try {
      setMeals(await searchMeals(query));
    } catch {
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={search}
        placeholder="Search recipes..."
        returnKeyType="search"
      />
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 40 }} />
      ) : (
        <RecipeList meals={meals} emptyText="No recipes found" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 16,
    marginBottom: 0,
    padding: 14,
    fontSize: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
});
