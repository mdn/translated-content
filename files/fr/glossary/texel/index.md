---
title: Texel
slug: Glossary/Texel
tags:
  - 3D
  - Glossaire
  - Texel
  - Texture
  - dessin
  - graphique
translation_of: Glossary/Texel
original_slug: Glossaire/Texel
---
Un **Texel** est un pixel unique dans une carte de texture, qui est une image qui est utilisée (en tout ou en partie) comme image présentée sur la surface d'un polygone dans une image rendue en part) 3D. Il ne doit pas être confondu avec le pixel qui est l'unité d'espace de l'écran. C'est l'une des principales différences entre Texel et pixels, les pixels sont des données d'image. Les composants Texel sont constitués de données subjecives, ils peuvent donc être une image aussi bien qu'une carte de profondeur.

Le processus de mappage des Texel appropriés à leurs points correspondants sur un polygone est appelé **texture mapping**, qui est une étape du processus de rendu d'une image 3D pour l'affichage. Le texture mapping est généralement effectué avant d'éclairer la scène; cependant, dans WebGL, l'éclairage est effectué dans le cadre du processus de texture mapping.

Les textures sont caractérisées par des collections de Texel, comme la façon dont les images sont caractérisées par des collections de pixels. Lors du texture mapping, le moteur de rendu mappe Texel sur les pixels appropriés.

## Apprendre plus

### Culture générale

- {{interwiki("wikipedia", "Texel (graphics)")}} sur Wikipédia

### En savoir plus

- [Utilisation de textures dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Éclairage dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animation de textures dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
