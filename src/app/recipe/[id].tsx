import { useLocalSearchParams } from 'expo-router';
import { EmptyState } from '@/components/EmptyState';

export default function RecipeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <EmptyState icon="restaurant-outline" title="Recipe" message={`Recipe id: ${id}`} />;
}
