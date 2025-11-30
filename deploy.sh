#!/usr/bin/env bash
set -e

# RUTAS (ajusta si cambian algún día)
QUARTZ_REPO="/Users/marcelosotaminga/Documents/proyectos-github/mi-quartz"
PAGES_REPO="/Users/marcelosotaminga/Documents/proyectos-github/marchelo2212.github.io"

echo "🧭 Cambiando a repo Quartz..."
cd "$QUARTZ_REPO"

echo "🌿 Cambiando a rama v4..."
git checkout v4

echo "🔍 Revisando cambios locales en Quartz..."
if [ -n "$(git status --porcelain)" ]; then
  echo "📌 Hay cambios locales en Quartz. Haciendo commit..."
  git add .
  git commit -m "Cambios locales en Quartz antes de deploy"
else
  echo "✅ No hay cambios locales en Quartz."
fi

echo "⬇️  Haciendo pull de los cambios que envió Quartz Syncer..."
git pull --rebase origin v4

echo "🧱 Generando sitio con Quartz..."
npx quartz build

echo "📦 Copiando resultado al repo de GitHub Pages..."
rm -rf "$PAGES_REPO"/*
cp -R public/* "$PAGES_REPO"/

echo "📤 Haciendo commit y push en marchelo2212.github.io..."
cd "$PAGES_REPO"
git add .
git commit -m "Deploy automático desde deploy.sh" || echo "ℹ️ No hay cambios nuevos para commitear en Pages."
git push

echo "✅ Deploy completado. Revisa https://marchelo2212.github.io"
