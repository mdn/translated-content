---
title: Créer des formes à partir des boîtes
slug: Web/CSS/CSS_Shapes/From_box_values
tags:
  - Boîtes
  - CSS
  - CSS Shapes
  - Formes CSS
  - Guide
translation_of: Web/CSS/CSS_Shapes/From_box_values
original_slug: Web/CSS/CSS_Shapes/Créer_formes_boîtes
---
{{CSSRef}}

Une méthode permettant de créer des formes consiste à utiliser les valeurs provenant du modèle de boîte CSS. Dans cet article, nous verrons comment les utiliser.

Les [valeurs de boîte](https://drafts.csswg.org/css-shapes-1/#shapes-from-box-values) qui sont autorisées pour les formes sont :

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

Les valeurs `border-radius` sont également prises en charge et on peut donc avoir une forme qui possède une bordure arrondie.

## Le modèle de boîte CSS

Les valeurs énumérées ci-avant correspondent aux différentes boîtes du modèle de boîte CSS. En CSS, une boîte possède un contenu (_content_), du remplissage (_padding_), une bordure (_border_) ainsi qu'une marge (_margin_).

![The Box Model consists of the margin, border, padding and content boxes.](box-model.png)

En utilisant une de ces valeurs, il est possible de suivre le contour d'une de ces zones. Dans les exemples qui suivent, on utilise un élément qui possède du remplissage, une bordure et une marge afin d'observer l'impact de ces différentes valeurs pour la définition d'une forme et le comportement du contenu alentour.

### `margin-box`

La valeur `margin-box` correspond à la forme de la boîte de marge et suit le bord extérieur de la marge en prenant en compte les coins arrondis de la forme si {{cssxref("border-radius")}} a été utilisé sur l'élément.

Dans l'exemple suivant, on a un élément circulaire mauve qui est un élément {{htmlelement("div")}} avec une hauteur, une largeur et une couleur d'arrière-plan. La propriété `border-radius` a été utilisée afin de créer le cercle avec `border-radius: 50%`. L'élément ayant une marge, on peut voir le contenu évoluer autour de cette forme circulaire en prenant la marge en compte.

{{EmbedGHLiveSample("css-examples/shapes/box/margin-box.html", '100%', 800)}}

### `border-box`

La valeur `border-box` correspond à la forme définie par le bord extérieur de la bordure. La forme épouse la bordure et les éventuels arrondis qui lui sont appliqués. Un élément possède toujours une bordure même si {{cssxref("border")}} n'a pas explicitement été utilisé. Si c'est le cas, `border-box` sera équivalent à `padding-box` et la forme suivra le bord extérieur de la boîte de remplissage.

Avec l'exemple qui suit, on peut voir que le texte suit désormais les lignes créées par la bordure. Vous pouvez modifier la taille de cette bordure pour voir le déplacement du contenu autour.

{{EmbedGHLiveSample("css-examples/shapes/box/border-box.html", '100%', 800)}}

### `padding-box`

La valeur `padding-box` correspond à la forme définie par le bord extérieur de la boîte de remplissage (_padding_). La forme suit les règles d'arrondies appliquées à la bordure. Si aucun remplissage n'est appliqué, `padding-box` sera équivalent à `content-box`.

{{EmbedGHLiveSample("css-examples/shapes/box/padding-box.html", '100%', 800)}}

### `content-box`

La valeur `content-box` correspond à la forme définie par le bord extérieur de la boîte de contenu. Chaque coin possède un rayon de courbure qui est le maximum entre `0` et `border-radius − border-width − padding`. Cela signifie qu'il est impossible d'avoir une valeur négative pour cette boîte.

{{EmbedGHLiveSample("css-examples/shapes/box/content-box.html", '100%', 800)}}

> **Note :** Pour en savoir plus sur le modèle de boîte CSS, voir [cet article](/en-US/docs/Learn/CSS/Building_blocks/The_box_model).

## Quand utiliser les valeurs de boîte

Les valeurs correspondant aux boîtes permettent de créer des formes simplement. Toutefois, cela ne fonctionne que pour des formes simples, définies en partie avec la propriété `border-radius`. Les exemples ci-avant montrent un tel cas d'utilisation (on crée une forme circulaire grâce à cette propriété).

Malgré cela, il est possible de créer des effets intéressants en n'utilisant que cette technique. Pour ce dernier exemple, on a deux éléments qui flottent à droite et à gauche et on leur affecte une valeur `border-radius` de 100% dans la direction la plus proche du texte.

{{EmbedGHLiveSample("css-examples/shapes/box/bottom-margin-box.html", '100%', 800)}}

Pour obtenir des formes plus complexes, il faudra utiliser les valeurs de [type `<basic-shape>` (les formes simples)](/fr/docs/Web/CSS/CSS_Shapes/Basic_Shapes) ou [définir une forme à partir d'une image](/fr/docs/Web/CSS/CSS_Shapes/Shapes_From_Images), tel que nous le verrons dans les autres guides de cette section.
