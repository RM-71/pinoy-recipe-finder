# Pinoy_Recipe_Finder

A modern React application with Progressive Web App (PWA) capabilities built with Vite.

## 🚀 Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with modern hooks
- 🎨 **Tailwind** - Styling framework
- 🛣️ **React Router** - Client-side routing
- 📱 **PWA Ready** - Installable, offline-capable app
- 🔄 **Auto-updates** - Service worker with auto-update functionality
- 📊 **Caching Strategy** - Smart caching for better performance
- 📦 **Additional Packages**: axios, react-icons, react-hook-form, yup, formik, moment

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 📱 PWA Features

### Installation
- **Desktop**: Look for the install icon in the address bar or use the "Install App" button
- **Mobile**: Use "Add to Home Screen" option in your browser menu

### Offline Support
This app works offline thanks to service worker caching:
- Static assets are cached automatically
- API responses are cached with NetworkFirst strategy
- Fallback pages for offline scenarios

### PWA Checklist

- ✅ Web App Manifest configured
- ✅ Service Worker registered
- ✅ HTTPS ready (required for PWA)
- ✅ Responsive design
- ⚠️ Test on actual devices
- ⚠️ Test offline functionality

## 📁 Project Structure

## 🎨 Styling

This project uses **Tailwind** for styling:

- Classes are available globally
- Configuration in `vite.config.js`
- Customize in `src/index.css`

Built using React + Vite + PWA
