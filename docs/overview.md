# Overview

## Product
Vacancy Map App — фронт на Vercel, бэкенд на Render. Домен: vacancy-map-app.vercel.app (основной), our-hr.tech (подключен).

## Repos
- Frontend: vacancy-map-app
- Backend: vacancy-map-api

## Environments
- Front: Vercel
  - VITE_API_BASE_URL: https://vacancy-map-api.onrender.com
  - VITE_MSW: off (prod), on (dev)
- Backend: Render
  - PORT: 3000
  - CORS_ORIGIN: https://vacancy-map-app.vercel.app, https://our-hr.tech, http://localhost:5173, http://localhost:5174

## URLs
- Front (prod): vacancy-map-app.vercel.app, our-hr.tech
- API (prod): https://vacancy-map-api.onrender.com
- Local front: http://localhost:5173 (5174)
- Local API: http://localhost:3000

## Features
- Pages: / (Home), /test, /clients
- Health check via /health

## Run locally
- Front: npm run dev
- API: npm run dev

## Deploy
- Front: push to GitHub → Vercel auto-deploy
- API: push to GitHub → Render auto-deploy
