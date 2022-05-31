---
title: Positionnement
slug: Web/SVG/Tutorial/Positions
tags:
  - Débutant
  - SVG
  - SVG:Tutoriel
translation_of: Web/SVG/Tutorial/Positions
original_slug: Web/SVG/Tutoriel/Positionnement
---
{{ PreviousNext("SVG/Tutoriel/Premiers_pas", "SVG/Tutoriel/Formes_de_base") }}

### La grille

Pour chaque élément, SVG utilise un ensemble de coordonnées aussi appelé grille assez similaire à ce qui est utilisé dans [canvas](/fr/HTML/Canvas "fr/HTML/Canvas") (et par tout un tas d'autres routines de dessin informatique). Dans le cas présent, le point en haut à gauche est considéré comme le point (0,0) ou point d'origine. Le positionnement est ensuite mesuré en pixel, depuis le coin supérieur gauche. Les valeurs positives de x vont vers la droite, les valeurs positives de y vont vers le bas. Notez que tout ceci est un peu contraire à la géométrie que l'on vous a enseignée. Ici, le positionnement fonctionne de la même manière que pour les éléments HTML.

![](canvas_default_grid.png)

#### Exemple

```html
<rect x="0" y="0" width="100" height="100" />
```

L'élément précédent définit un rectangle dans le coin supérieur gauche de l'écran, d'une taille de 100px par 100px.

### Qu'est ce qu'un pixel ?

Dans le cas le plus basique, un pixel dans un document SVG correspond à un pixel du périphérique de sortie, à savoir l'écran. Mais le SVG ne serait pas "scalable", c'est-à-dire évolutif, s'il n'y avait qu'une seule possibilité de gérer ce comportement. Tout comme les tailles de police absolues et relatives en CSS, SVG peut définir des unités absolues (avec des identifiants dimensionnels comme le "pt" ou encore le "cm") ou encore des unités dites définies par l'utilisateur, qui ne disposent pas de ces identifiants et correspondent à des nombres ordinaires.

Par défaut, l'unité utilisateur correspond à l'unité de l'écran. Pour modifier ce comportement de manière explicite, il existe plusieurs méthodes en SVG. Commençons par l'élément racine `svg` :

```html
<svg width="100" height="100">
```

La déclaration suivante crée un élément SVG d'une taille de 100px par 100px. Ici, une unité utilisateur correspond à l'unité de l'écran.

```html
<svg width="200" height="200" viewBox="0 0 100 100">
```

L'image SVG suivante fait 200px par 200px. Toutefois, l'attribut `viewBox` définit que cet élément de 200 par 200 commence au point (0,0) et s'étend sur une grille de 100 unités sur 100 unités vers la droite et vers le bas de l'écran. 100 unités représentant 200 pixels, chaque unité vaut deux pixels : cela permet de doubler la taille de l'image.

La transformation des coordonnées réelles de l'écran en coordonnées personnalisées à l'aide d'un viewport permet de créer un **système de coordonnées utilisateur**. Celui-ci pourra pivoter, être zoomé, rendu oblique ou encore permettra de retourner une image. Par défaut, le système de coordonnées de l'utilisateur fait correspondre un pixel utilisateur à un pixel écran.

Cependant, le périphérique peut décider lui-même ce qui correspond à un pixel.

Les tailles dans le fichier SVG ayant des unités spécifiques, tels que les "in" et les "cm", sont ensuite calculées de manière à les faire apparaître avec une échelle de 1:1 dans l'image résultante.

Pour illustrer cette explication, rien de tel qu'une petite citation tirée des spécifications SVG 1.1 :

> \[…] imaginons que le user agent peut déterminer à partir de son environnement que "1px" correspond à "0.2822222mm" (c'est-à-dire 90dpi). Ainsi, pour le traitement de chaque élément SVG : \[…] "1cm" équivaut à "35.43307px" (et donc à 35.43307 unités utilisateur)

{{ PreviousNext("SVG/Tutoriel/Premiers_pas", "SVG/Tutoriel/Formes_de_base") }}
