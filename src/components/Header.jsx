import { Link, NavLink } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext.jsx'

export default function Header() {
  const { favorites } = useFavorites()

  return (
    <header className="relative isolate">
      <div className="absolute inset-x-0 -top-24 -z-10 overflow-hidden blur-3xl">
        <div className="mx-auto h-48 max-w-7xl bg-gradient-to-r from-emerald-300/40 via-teal-200/40 to-sky-200/40 opacity-60" />
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-content-center font-bold">RD</div>
          <span className="text-lg font-extrabold tracking-tight text-stone-800">Filipino Food Finder</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <NavLink to="/" className={({isActive}) => `btn btn-outline ${isActive ? 'bg-stone-100' : ''}`}>Recipes</NavLink>
          <NavLink to="/favorites" className={({isActive}) => `btn btn-outline relative ${isActive ? 'bg-stone-100' : ''}`}>
            Favorites
            <span className="ml-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">{favorites.length}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}