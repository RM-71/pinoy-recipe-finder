import { Link } from 'react-router-dom'

function Img({ src, alt }) {
  const onError = (e) => { e.currentTarget.src = '/placeholder.svg' }
  return <img src={src} alt={alt} onError={onError} className="h-44 w-full rounded-t-2xl object-cover" loading="lazy" />
}

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="card overflow-hidden group">
      <div className="relative">
        <Img src={recipe.image} alt={recipe.name} />
        <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-stone-800 mb-1 clamp-2">{recipe.name}</h3>
        <p className="text-sm text-stone-500 clamp-2">{recipe.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-stone-500">{recipe.ingredients.length} ingredients</span>
          <span className="text-xs rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-700 ring-1 ring-emerald-200">View Recipe</span>
        </div>
      </div>
    </Link>
  )
}