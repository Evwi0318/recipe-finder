import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { RecipeList } from "@/components/RecipeList";
import { Meal } from "@/services/api";
import { getFavorites } from "@/services/favorites";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  useFocusEffect(
    useCallback(() => {
      getFavorites().then(setFavorites);
    }, [])
  );

  return <RecipeList meals={favorites} emptyText="No favorites yet" />;
}
