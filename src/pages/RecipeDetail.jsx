import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import recipes from '../data/recipes.json'
import { useFavorites } from '../contexts/FavoritesContext.jsx'

function Img({ src, alt }) {
  const onError = (e) => { e.currentTarget.src = '/placeholder.svg' }
  return <img src={src} alt={alt} onError={onError} className="h-72 w-full rounded-2xl object-cover" />
}

export default function RecipeDetail() {
  const { id } = useParams()
  const recipe = useMemo(() => recipes.find(r => String(r.id) === String(id)), [id])
  const { add, remove, isFavorite } = useFavorites()

  if (!recipe) {
    return (
      <section className="py-16 text-center">
        <p className="text-stone-600">Recipe not found.</p>
        <Link to="/" className="mt-4 inline-flex text-emerald-700 underline">Back to home</Link>
      </section>
    )
  }

  const fav = isFavorite(recipe.id)

  return (
    <section className="py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Img src={recipe.image} alt={recipe.name} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-stone-800">{recipe.name}</h1>
          <p className="mt-2 text-stone-600">{recipe.description}</p>
          <div className="mt-4 flex gap-3">
            {!fav ? (
              <button className="btn btn-primary" onClick={() => add(recipe.id)}>Add to Favorites</button>
            ) : (
              <button className="btn btn-outline" onClick={() => remove(recipe.id)}>Remove from Favorites</button>
            )}
            <Link to="/" className="btn btn-outline">Back</Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card p-5">
              <h2 className="text-lg font-semibold text-stone-800">Ingredients</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-stone-700">
                {recipe.ingredients.map((ing, i) => (<li key={i}>{ing}</li>))}
              </ul>
            </div>
            <div className="card p-5">
              <h2 className="text-lg font-semibold text-stone-800">Instructions</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-stone-700">
                {recipe.instructions.map((step, i) => (<li key={i}>{step}</li>))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}