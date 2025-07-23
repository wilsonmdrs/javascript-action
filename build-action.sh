#!/bin/bash

set -e

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building GitHub Action with ncc..."
npx ncc build src/index.js -o dist

echo "✅ Build complete! Output in ./dist"