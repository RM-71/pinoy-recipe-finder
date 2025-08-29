import { useMemo } from 'react'
import recipes from '../data/recipes.json'
import { useFavorites } from '../contexts/FavoritesContext.jsx'
import RecipeCard from '../components/RecipeCard.jsx'

export default function Favorites() {
  const { favorites } = useFavorites()
  const favRecipes = useMemo(() => recipes.filter(r => favorites.includes(r.id)), [favorites])

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-800">Your Favorites</h1>
        <p className="mt-2 text-stone-600">All the dishes you’ve saved for later.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {favRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
        {favRecipes.length === 0 && (
          <div className="col-span-full text-center text-stone-500">No favorites yet. Go add some delicious picks!</div>
        )}
      </div>
    </section>
  )
}