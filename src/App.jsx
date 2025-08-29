import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import RecipeDetail from './pages/RecipeDetail.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-display">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
      <footer className="mt-16 border-t border-stone-200 py-10 text-center text-sm text-stone-500">
        Built for Filipino classics.
      </footer>
    </div>
  )
}