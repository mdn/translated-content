---
title: Positionnement
slug: Web/SVG/Tutorials/SVG_from_scratch/Positions
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes")}}

Dans cet article, nous examinons comment <i lang="en">Scalable Vector Graphics</i> (<abbr>SVG</abbr>) représente les positions et tailles des objets dans un contexte de dessin, y compris le système de coordonnées et ce que signifie une mesure en «&nbsp;pixel&nbsp;» dans un contexte évolutif.

### La grille

Pour chaque élément, SVG utilise un système de coordonnées ou une **grille** similaire à celle utilisée par [canvas](/fr/docs/Web/API/Canvas_API) (et par de nombreuses autres routines de dessin informatique). Le coin supérieur gauche du document est considéré comme le point (0,0), ou point d'origine. Les positions sont alors mesurées en pixels à partir du coin supérieur gauche, la direction positive de x allant vers la droite, et celle de y vers le bas.

![Grille de coordonnées X, Y avec un carré bleu au centre.](canvas_default_grid.png)

Notez que cela diffère légèrement de la façon dont on vous apprend à tracer des graphes étant enfant (l'axe y est inversé). Cependant, c'est la même manière dont les éléments HTML sont positionnés (par défaut, les documents LTR sont considérés, et non les documents RTL qui positionnent X de droite à gauche).

#### Exemple

L'élément

```html
<rect x="0" y="0" width="100" height="100" />
```

définit un rectangle dans le coin supérieur gauche qui s'étend sur 100px vers la droite et 100px vers le bas.

### Qu'est ce qu'un pixel ?

Dans le cas le plus basique, un pixel dans un document SVG correspond à un pixel du périphérique de sortie, à savoir l'écran. Mais le SVG ne serait pas "scalable", c'est-à-dire évolutif, s'il n'y avait qu'une seule possibilité de gérer ce comportement. Tout comme les tailles de police absolues et relatives en CSS, SVG peut définir des unités absolues (avec des identifiants dimensionnels comme le "pt" ou encore le "cm") ou encore des unités dites définies par l'utilisateur·ice, qui ne disposent pas de ces identifiants et correspondent à des nombres ordinaires.

Par défaut, l'unité utilisateur correspond à l'unité de l'écran. Pour modifier ce comportement de manière explicite, il existe plusieurs méthodes en SVG. Commençons par l'élément racine `svg`&nbsp;:

```html
<svg width="100" height="100">…</svg>
```

La déclaration suivante crée un élément SVG d'une taille de 100px par 100px. Ici, une unité utilisateur correspond à l'unité de l'écran.

```html
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

L'image SVG suivante fait 200px par 200px. Toutefois, l'attribut `viewBox` définit que cet élément de 200 par 200 commence au point (0,0) et s'étend sur une grille de 100 unités sur 100 unités vers la droite et vers le bas de l'écran. 100 unités représentant 200 pixels, chaque unité vaut deux pixels&nbsp;: cela permet de doubler la taille de l'image.

La transformation des coordonnées réelles de l'écran en coordonnées personnalisées à l'aide d'un viewport permet de créer un **système de coordonnées utilisateur**. Celui-ci pourra pivoter, être zoomé, rendu oblique ou encore permettra de retourner une image. Par défaut, le système de coordonnées de l'utilisateur·ice fait correspondre un pixel utilisateur à un pixel écran.

Cependant, le périphérique peut décider lui-même ce qui correspond à un pixel.

Les tailles dans le fichier SVG ayant des unités spécifiques, tels que les `in` et les `cm`, sont ensuite calculées de manière à les faire apparaître avec une échelle de 1:1 dans l'image résultante.

Pour illustrer cette explication, rien de tel qu'une petite citation tirée des spécifications SVG 1.1&nbsp;:

> \[…] imaginons que le user agent peut déterminer à partir de son environnement que «&nbsp;1px&nbsp;» correspond à «&nbsp;0.2822222mm&nbsp;» (c'est-à-dire 90dpi). Ainsi, pour le traitement de chaque élément SVG&nbsp;: \[…] «&nbsp;1cm&nbsp;» équivaut à «&nbsp;35.43307px&nbsp;» (et donc à 35.43307 unités utilisateur)

{{PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes")}}
