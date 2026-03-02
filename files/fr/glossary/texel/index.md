---
title: Texel
slug: Glossary/Texel
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En graphisme 3D, un **texel** est un pixel unique à l'intérieur d'une texture. Les _textures_ sont des images affichées sur la surface d'un polygone dans une image 3D rendue. Une texture se caractérise par un ensemble de texels, tout comme une image se caractérise par un ensemble de pixels.

Un pixel dans un fichier d'image matricielle est une série de bits contenant des données de couleur, et parfois des données d'opacité, qui sont associées aux pixels d'affichage sur un périphérique de sortie comme un écran d'ordinateur. Lorsqu'un pixel appartient à une image utilisée comme ressource de texture, il est appelé «&nbsp;pixel de texture&nbsp;» ou abrégé en «&nbsp;texel&nbsp;». Au lieu d'être associé directement à des pixels d'écran, les données d'un texel sont associées à une position dans l'espace de coordonnées de l'objet 3D modélisé. Les textures servent à transmettre la couleur et d'autres propriétés de surface comme la profondeur et la réflectivité. Plusieurs textures peuvent être superposées pour créer des effets de surface complexes.

Le processus d'association des texels appropriés à leurs points correspondants sur un polygone s'appelle le **cartographie de texture**. La cartographie (<i lang="en">mapping</i> en anglais) de texture est une étape du processus de rendu d'une image 3D pour l'affichage. Lorsque la grille de texels source et la grille de pixels de destination ne coïncident pas, un **filtrage de texture** supplémentaire est appliqué pour lisser les pixels texturés obtenus (texture _d'agrandissement_ ou _de réduction_). Le résultat final du rendu est une projection 2D aplatie du modèle 3D, où la texture a été «&nbsp;enroulée&nbsp;» autour du modèle.

Pendant le processus de rendu, la cartographie de texture est généralement effectuée avant l'éclairage de la scène&nbsp;; cependant, dans WebGL, l'éclairage est réalisé dans le cadre de la cartographie de texture.

## Voir aussi

- [Texel](<https://fr.wikipedia.org/wiki/Texel_(infographie)>) sur Wikipédia
- [Cartographie de texture](<https://fr.wikipedia.org/wiki/Texture_(image_de_synth%C3%A8se)>) sur Wikipédia
- [Filtrage de texture <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Texture_filtering) sur Wikipédia
- [Utilisation de textures dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Éclairage dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animation de textures dans WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
