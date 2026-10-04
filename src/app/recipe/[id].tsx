import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { Loader } from "@/components/Loader";
import { colors } from "@/constants/theme";
import { getIngredients, getMeal, Meal } from "@/services/api";
import { getFavorites, toggleFavorite } from "@/services/favorites";

export default function RecipeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal>();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getMeal(id).then(setMeal);
    getFavorites().then((favorites) => setIsFavorite(favorites.some((item) => item.idMeal === id)));
  }, [id]);

  if (!meal) return <Loader />;

  const handleFavorite = async () => {
    setIsFavorite(await toggleFavorite(meal));
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable onPress={handleFavorite}>
              <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={26} color={colors.primary} />
            </Pressable>
          ),
        }}
      />
      <Image source={meal.strMealThumb} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.meta}>
        {meal.strCategory} · {meal.strArea}
      </Text>

      <Text style={styles.heading}>Ingredients</Text>
      {getIngredients(meal).map((item, index) => (
        <Text key={index} style={styles.text}>
          • {item}
        </Text>
      ))}

      <Text style={styles.heading}>Instructions</Text>
      <Text style={styles.text}>{meal.strInstructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginTop: 8,
  },
  meta: {
    fontSize: 14,
    color: colors.muted,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginTop: 16,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
});
