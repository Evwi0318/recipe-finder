import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Loader } from "@/components/Loader";
import { colors } from "@/constants/theme";
import { getIngredients, getMeal, Meal } from "@/services/api";

export default function RecipeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal>();

  useEffect(() => {
    getMeal(id).then(setMeal);
  }, [id]);

  if (!meal) return <Loader />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
