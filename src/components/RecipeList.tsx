import { Image } from "expo-image";
import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";
import { Meal } from "@/services/api";

type Props = {
  meals: Meal[];
  emptyText: string;
};

export function RecipeList({ meals, emptyText }: Props) {
  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.idMeal}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text style={styles.empty}>{emptyText}</Text>}
      renderItem={({ item }) => (
        <Link href={`/recipe/${item.idMeal}`} asChild>
          <Pressable style={styles.card}>
            <Image source={item.strMealThumb} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.strMeal}</Text>
              <Text style={styles.meta}>
                {item.strCategory} · {item.strArea}
              </Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 12,
  },
  empty: {
    textAlign: "center",
    color: colors.muted,
    marginTop: 40,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  meta: {
    fontSize: 13,
    color: colors.muted,
  },
});
