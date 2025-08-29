import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const FavoritesContext = createContext()

const STORAGE_KEY = 'favorites'

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const value = useMemo(() => ({
    favorites,
    add: (id) => setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id])),
    remove: (id) => setFavorites((prev) => prev.filter(x => x !== id)),
    isFavorite: (id) => favorites.includes(id)
  }), [favorites])

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}