import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "./api";

const KEY = "favorites";

export async function getFavorites(): Promise<Meal[]> {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}

export async function toggleFavorite(meal: Meal) {
  const favorites = await getFavorites();
  const isSaved = favorites.some((item) => item.idMeal === meal.idMeal);

  const updated = isSaved
    ? favorites.filter((item) => item.idMeal !== meal.idMeal)
    : [...favorites, meal];

  await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  return !isSaved;
}
