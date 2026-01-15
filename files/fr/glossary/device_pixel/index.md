---
title: Pixel matériel (device pixel)
slug: Glossary/Device_pixel
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **pixel matériel** (<i lang="en">device pixel</i> en anglais) est la plus petite unité physique d'affichage capable d'afficher une couleur complète indépendamment de ses voisines. C'est la plus petite unité physique d'un écran (comme un moniteur ou l'écran d'un téléphone mobile), aussi appelée _pixel matériel_ ou _pixel physique_. Chaque pixel matériel est un point individuel qui compose l'affichage. Les pixels matériels sont fixes et ne s'adaptent pas en fonction de la zone d'affichage (<i lang="en">viewport</i> en anglais) ou du CSS.

Un pixel matériel dépend de la densité, variant selon la résolution de l'écran. Le _device-pixel-ratio_ est le rapport entre la résolution en pixels matériels physiques et la résolution en pixels CSS pour l'affichage. Il diffère généralement d'un {{Glossary("CSS pixel", "pixel CSS")}}, qui est une longueur absolue définie comme exactement 1/96e de 1 pouce CSS. Les appareils considérés comme Hi-DPI ont plus d'un pixel matériel par pixel CSS dans la même zone physique, tandis que les appareils à faible DPI ont un ratio inférieur à 1 pour 1.

## Voir aussi

- Le type de donnée CSS {{CSSxRef("&lt;resolution&gt;")}}
- La fonctionnalité @media CSS {{CSSxRef("@media/resolution", "resolution")}}
- La propriété CSS {{CSSxRef("image-resolution")}}
- L'API {{DOMxRef("Window.devicePixelRatio")}}
