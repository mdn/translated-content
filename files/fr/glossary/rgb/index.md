---
title: RVB
slug: Glossary/RGB
l10n:
  sourceCommit: 5ba55a6939c0aaf988fc4d34ad7e51c52373a2a6
---

_Rouge-Vert-Bleu_ (**RVB**) est un modèle de couleur qui représente les couleurs comme des mélanges de trois composantes (ou canaux) sous-jacentes&nbsp;: _rouge_, _vert_ et _bleu_. Ce modèle décrit une couleur par une séquence de trois nombres (généralement entre 0,0 et 1,0, ou entre 0 et 255). Chaque nombre représente l'intensité (ou la contribution) différente de chaque couleur primaire dans la détermination de la couleur finale.

Une valeur RVB seule n'a pas de signification. C'est le modèle de couleur qui définit comment les trois composantes interagissent dans un {{Glossary("color space", "espace colorimétrique")}} pour définir une couleur. Graphiquement, un point dans une grille ou un cube tridimensionnel représente une couleur. Chaque dimension (ou axe) correspond à un canal différent. Le modèle de couleur RVB est donc un système de coordonnées _cubique_ ou _cartésien_ de l'espace colorimétrique sous-jacent.

![Le modèle de couleur RVB représenté comme un cube avec les axes rouge, vert et bleu](rgb_color_cube.png)

Pour le web, l'espace colorimétrique sous-jacent d'une valeur RVB est _sRGB_ (Standard RGB), et chaque composante RVB est un nombre compris entre 0 et 1.

Notez que `sRGB` est l'un des [nombreux espaces colorimétriques RVB](/fr/docs/Glossary/Color_space#espaces_de_couleur_rgb). D'autres espaces colorimétriques RVB, comme l'espace _Adobe RGB_, peuvent représenter un {{Glossary("gamut", "espace de couleurs")}} plus large que l'espace _sRGB_. Les coordonnées dans _sRGB_ et _Adobe RGB_ sont différentes.

Il existe de nombreuses façons de décrire les composantes RVB d'une couleur. En {{Glossary("CSS")}}, elles peuvent être représentées de différentes manières&nbsp;: en notation [hexadécimale](/fr/docs/Web/CSS/Reference/Values/hex-color) comme un entier 24 bits unique (par exemple, `#add8e6` correspond à un bleu clair) ou en notation fonctionnelle avec {{CSSxRef("color_value/rgb")}} utilisant trois valeurs en pourcentage ou des nombres allant de `0` à `255` (par exemple, `rgb(46 139 87)` correspond à du vert). CSS prend aussi en charge les espaces colorimétriques `srgb`, `srgb-linear`, `a98-rgb` et `prophoto-rgb` pour la fonction {{CSSxRef("color_value/color")}}.

RVB n'est pas le seul modèle de couleur pouvant représenter l'{{Glossary("color space", "espace colorimétrique")}} `sRGB`. Des systèmes de coordonnées cylindriques comme les modèles de couleur [`HSL`](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) (_teinte-saturation-luminosité_) ou [`HWB`](/fr/docs/Web/CSS/Reference/Values/color_value/hwb) (_teinte-blancheur-noirceur_) sont aussi utilisés pour représenter une couleur `sRGB` sur le web.

## Voir aussi

- Le type de donnée CSS {{CSSxRef("&lt;color&gt;")}}
- [ColorAide&nbsp;: espace colorimétrique sRGB <sup>(angl.)</sup>](https://facelessuser.github.io/coloraide/colors/srgb/)
- [Modèle de couleur RVB](https://fr.wikipedia.org/wiki/Rouge-vert-bleu) sur Wikipédia
- [Espace colorimétrique sRGB](https://fr.wikipedia.org/wiki/SRGB) sur Wikipédia
- [Espace colorimétrique Adobe RGB](https://fr.wikipedia.org/wiki/Adobe_RGB) sur Wikipédia
