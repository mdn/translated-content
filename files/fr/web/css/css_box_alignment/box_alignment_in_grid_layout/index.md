---
title: L'alignement des boîtes avec une grille CSS
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
---

{{CSSRef}}

Le module de spécification sur [l'alignement des boîtes (<i lang="en">Box Alignment</i>)](/fr/docs/Web/CSS/CSS_Box_Alignment) détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes avec [les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout).

Cette page détaille les aspects spécifiques relatifs à l'alignement et aux grilles. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir [la page principale sur cette spécification](/fr/docs/Web/CSS/CSS_Box_Alignment).

## Exemple simple

Dans l'exemple qui suit, on utilise une disposition en grille et le conteneur possède un espace restant après avoir disposé les pistes à largeur fixe le long de l'axe en ligne. L'espace restant est distribué grâce à la propriété `justify-content`. Le long de l'axe secondaire (l'axe de bloc), les éléments sont alignés au sein de leurs zones avec la propriété `align-items`. Le premier objet surcharge la valeur fournie par `align-items` en utilisant `align-self` avec la valeur `center`.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Axes de la grille

La grille est une méthode de disposition sur deux dimensions.

L'axe en ligne correspond à l'axe selon lequel les mots d'une phrase sont écrits pour le mode d'écriture utilisé. Ainsi, pour une langue écrite horizontalement (comme le français ou l'arabe), l'axe en ligne sera horizontal. Pour les modes d'écriture verticaux, cet axe sera vertical.

![Une situation où l'axe en ligne est horizontal.](inline_axis.png)

Pour aligner des éléments selon l'axe en ligne, on utilisera les propriétés commençant par `justify-`&nbsp;: [`justify-content`](/fr/docs/Web/CSS/justify-content), [`justify-items`](/fr/docs/Web/CSS/justify-items) et [`justify-self`](/fr/docs/Web/CSS/justify-self).

L'axe de bloc est orthogonal à l'axe en ligne et évolue dans le sens où les blocs sont affichés sur la page (en français, par exemple, les paragraphes sont disposés de haut en bas en suivant l'axe de bloc).

Pour aligner des éléments sur l'axe de bloc, on utilisera les propriétés commençant par `align-`&nbsp;: [`align-content`](/fr/docs/Web/CSS/align-content), [`align-items`](/fr/docs/Web/CSS/align-items) et [`align-self`](/fr/docs/Web/CSS/align-self).

![Une situation où l'axe de bloc est vertical.](block_axis.png)

## Alignement individuel

- [`justify-self`](/fr/docs/Web/CSS/justify-self)
- [`align-self`](/fr/docs/Web/CSS/align-self)
- [`place-self`](/fr/docs/Web/CSS/place-self)
- [`justify-items`](/fr/docs/Web/CSS/justify-items)
- [`align-items`](/fr/docs/Web/CSS/align-items)
- [`place-items`](/fr/docs/Web/CSS/place-items)

Ces propriétés permettent d'aligner individuellement chacun des éléments au sein de leur zone de grille. Les propriétés `align-items` et `justify-items` sont appliquées au conteneur de grille et définissent `align-self` et `justify-self` pour l'ensemble des sujets d'alignement. Cela signifie qu'on peut indiquer un alignement global au niveau du conteneur puis surcharger cette règle au cas par cas si besoin en utilisant `align-self` ou `justify-self` sur les éléments souhaités.

Les valeurs initiales pour `align-self` et `justify-self` sont `stretch`. Aussi, l'objet sera étiré sur toute la zone de grille qui lui est dédié. Une exception est apportée à cette règle lorsque l'élément possède des proportions intrinsèques (une image par exemple)&nbsp;; dans ce cas, l'élément est aligné avec `start` sur les deux axes et l'élément n'est pas déformé.

## Alignement du contenu

- [`justify-content`](/fr/docs/Web/CSS/justify-content)
- [`align-content`](/fr/docs/Web/CSS/align-content)
- [`place-content`](/fr/docs/Web/CSS/place-content)

Ces propriétés indiquent comment aligner les pistes de la grille lorsqu'il reste de l'espace à répartir. Ce scénario se produit uniquement si la somme des tailles des pistes est inférieure à la taille du conteneur de grille.

## Gouttières et versions historiques des propriétés préfixées

- [`row-gap`](/fr/docs/Web/CSS/row-gap)
- [`column-gap`](/fr/docs/Web/CSS/column-gap)
- [`gap`](/fr/docs/Web/CSS/gap)

La spécification sur les grilles contenait initialement les définitions des propriétés [`grid-row-gap`](/fr/docs/Web/CSS/row-gap), [`grid-column-gap`](/fr/docs/Web/CSS/column-gap) et [`grid-gap`](/fr/docs/Web/CSS/gap). Les définitions de ces propriétés ont depuis été déplacées dans le module de spécification <i lang="en">Box Alignment</i> et ont respectivement été renommées en [`row-gap`](/fr/docs/Web/CSS/row-gap), [`column-gap`](/fr/docs/Web/CSS/column-gap) et [`gap`](/fr/docs/Web/CSS/gap). Ainsi, elles peuvent être utilisées pour d'autres méthodes de disposition où les gouttières sont pertinentes.

Les propriétés sans préfixe `grid-` ont été implémentées plus tard par les navigateurs. Afin d'assurer une meilleure compatibilité, vous pouvez doubler les propriétés afin d'utiliser les deux versions.

## Référence

### Propriétés CSS

- [`justify-content`](/fr/docs/Web/CSS/justify-content)
- [`align-content`](/fr/docs/Web/CSS/align-content)
- [`place-content`](/fr/docs/Web/CSS/place-content)
- [`justify-items`](/fr/docs/Web/CSS/justify-items)
- [`align-items`](/fr/docs/Web/CSS/align-items)
- [`place-items`](/fr/docs/Web/CSS/place-items)
- [`justify-self`](/fr/docs/Web/CSS/justify-self)
- [`align-self`](/fr/docs/Web/CSS/align-self)
- [`place-self`](/fr/docs/Web/CSS/place-self)
- [`row-gap`](/fr/docs/Web/CSS/row-gap)
- [`column-gap`](/fr/docs/Web/CSS/column-gap)
- [`gap`](/fr/docs/Web/CSS/gap)

### Termes du glossaire

- [Axe secondaire](/fr/docs/Glossary/Cross_Axis)
- [Axe principal](/fr/docs/Glossary/Main_Axis)

## Guides

- [Aligner les boîtes dans une disposition en grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)

## Ressources externes

- [Alignement pour les grilles, les boîtes flexibles et les boîtes (en anglais)](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
