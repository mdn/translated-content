---
title: Texel
slug: Glossary/Texel
l10n:
  sourceCommit: 90f3b0ec3c27814f0571d062f69e4fdbe5546f93
---

En graphisme 3D, un **texel** (abréviation de «&nbsp;texture pixel&nbsp;») est un élément individuel d'une texture. Une texture se compose d'une grille de texels, tout comme une image matricielle se compose d'une grille de [pixels](/fr/docs/Glossary/Pixel). Les textures sont rendues sur des surfaces 3D pour transmettre des qualités telles que la couleur, la profondeur et la réflectivité. Plusieurs textures peuvent être superposées pour créer des effets de surface complexes.

**La cartographie de texture** associe les points sur la surface d'un modèle aux positions dans une texture, généralement par l'intermédiaire de coordonnées de texture (également appelées coordonnées UV) assignées aux sommets des polygones. Lors du rendu, ces coordonnées sont interpolées sur le polygone et servent à échantillonner la texture. L'emplacement d'échantillonnage d'un fragment peut se trouver entre les centres des texels, ou son empreinte dans l'espace de texture peut couvrir plusieurs texels. **Le filtrage de texture** détermine comment les valeurs des texels sont sélectionnées ou combinées lors de _l'agrandissement_ ou de la _réduction_ d'une texture.

Dans les API graphiques programmables telles que [WebGL](/fr/docs/Glossary/WebGL), l'échantillonnage des textures et les calculs d'éclairage sont contrôlés par des programmes d'ombrage (<i lang="en">shader</i> en anglais) et peuvent être effectués ensemble dans le même programme d'ombrage.

## Voir aussi

- [Texel](<https://fr.wikipedia.org/wiki/Texel_(infographie)>) sur Wikipédia
- [Cartographie de texture](<https://fr.wikipedia.org/wiki/Texture_(image_de_synth%C3%A8se)>) sur Wikipédia
- [Filtrage de texture <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Texture_filtering) sur Wikipédia
- [Utilisation de textures dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Éclairage dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animation de textures dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
