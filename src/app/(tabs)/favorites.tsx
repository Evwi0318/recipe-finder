import { RecipeList } from "@/components/RecipeList";

export default function FavoritesScreen() {
  return <RecipeList meals={[]} emptyText="No favorites yet" />;
}
