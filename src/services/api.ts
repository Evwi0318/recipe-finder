const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube: string;
  [key: string]: string | null;
};

async function fetchMeals(path: string): Promise<Meal[]> {
  const response = await fetch(`${BASE_URL}/${path}`);
  const data = await response.json();
  return data.meals ?? [];
}

export function searchMeals(query: string) {
  return fetchMeals(`search.php?s=${query}`);
}

export async function getMeal(id: string) {
  const meals = await fetchMeals(`lookup.php?i=${id}`);
  return meals[0];
}
