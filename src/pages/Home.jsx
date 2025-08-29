import { useState } from "react";
import recipes from "../data/recipes.json";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar"; // Add this import

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter(recipe =>
    (recipe.name || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-800">Explore classic Filipino recipes</h1>
        <div className="mt-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((r) => <RecipeCard key={r.id} recipe={r} />)}
        {filteredRecipes.length === 0 && (
          <div className="col-span-full text-center text-stone-500">No recipes match your search.</div>
        )}
      </div>
    </section>
  )
}