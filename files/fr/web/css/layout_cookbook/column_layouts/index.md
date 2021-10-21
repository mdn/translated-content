---
title: Disposition en colonnes
slug: Web/CSS/Layout_cookbook/Column_layouts
tags:
  - CSS
  - Guide
  - Multi-col
  - flexbox
  - grid
translation_of: Web/CSS/Layout_cookbook/Column_layouts
original_slug: Web/CSS/Layout_cookbook/Disposition_en_colonnes
---
{{CSSRef}}

Vous aurez souvent à créer des dispositions organisées en colonnes. CSS fournit différentes méthodes pour parvenir à de telles dispositions. Les grilles CSS ou les boîtes flexibles ou encore les dispositions multi-colonnes peuvent être utilisées et choisir l'une de ces méthodes dépend de ce que l'on veut obtenir. Dans ce guide, nous verrons ces différentes options.

![three different styles of layouts which have two columns in the container.](cookbook-multiple-columns.png)

## Prérequis

Il existe plusieurs « motifs » qu'on peut vouloir réaliser avec des colonnes :

- Un fil continu qui se divise en colonne, à la façon d'un journal papier.
- Une seule ligne d'éléments divisée en colonnes qui ont la même hauteur.
- Plusieurs lignes et colonnes qui sont alignées.

## Les « recettes »

Selon le scénario souhaité, on utilisera différentes méthodes de disposition.

### Un fil continu de contenu - Disposition multi-colonnes

En créant des colonnes avec une disposition multi-colonne, le texte pourra former un flux continu qui remplira chacune des colonnes à la suite des autres. Les colonnes auront toutes la même taille et il ne sera pas possible de cibler une colonne en particulier ou le contenu d'une colonne en particulier.

L'espacement entre les colonnes peut être géré avec la propriété {{cssxref("column-gap")}} et il est possible d'ajouter une ligne de délimitation grâce à {{cssxref("column-rule")}}.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-multicol.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-multicol--download.html)

On utilisera une disposition multi-colonnes lorsque :

- On souhaite organiser le texte à la façon d'un journal imprimé
- On a un ensemble de petits éléments qu'on souhaite fragmenter en colonnes
- Il n'est pas nécessaire de cibler une colonne en particulier pour des raisons de mise en forme.

### Une seule ligne fragmentée en cellules de même taille — Utilisation des boîtes flexibles

Les boîtes flexibles peuvent être utilisées afin de diviser du contenu en colonnes grâce à la propriété {{cssxref("flex-direction")}} utilisée avec la valeur `row`. Toutefois, une boîte flexible cible les éléments à l'intérieur du conteneur flexible et placera chaque enfant direct dans une nouvelle colonne. On a donc un comportement différent de celui vu précédemment avec les multi-colonnes.

À l'heure actuelle, il n'existe pas de méthode qui permette de créer une ligne entre les objets flexibles et la prise en charge des navigateurs pour les propriétés {{cssxref("column-gap")}} et {{cssxref("row-gap")}} est limitée. Pour créer un espace entre les éléments, il faudra donc utiliser une marge.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-flexbox--download.html)

Les boîtes flexibles peuvent également être utilisées afin de créer des dispositions où les objets flexibles « passent à la ligne » en utilisant la propriété {{cssxref("flex-wrap")}} et la valeur `wrap` sur le conteneur.  Les nouvelles lignes répartiront l'espace pour cette ligne uniquement, il n'y aura pas d'alignement d'une ligne à l'autre (comme on peut le voir dans l'exemple qui suit). C'est pour cette raison qu'on décrit les boîtes flexibles comme étant une méthode de disposition sur une seul dimension : cette méthode permet de contrôler la disposition en ligne ou en colonne mais pas de gérer les deux à la fois.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox-wrapping.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-flexbox-wrapping--download.html)

On utilisera les boîtes flexibles pour :

- Organiser des lignes ou colonnes d'objets indépendantes
- Aligner les objets sur l'axe orthogonal au sens de lecture
- Les cas où l'alignement d'une ligne sur l'autre n'est pas important

### Aligner des objets en lignes et colonnes — Utilisation d'une grille

Si on souhaite organiser des objets sur des lignes et sur des colonnes, alors on choisira une grille CSS. La disposition à l'aide d'une grille permet d'organiser les éléments fils d'un contener de la même façon que les boîtes flexibles mais on peut également aligner les lignes et les colonnes. Aussi, si les boîtes flexibles sont une méthode unidimensionnelle, les grilles CSS permettent de jouer sur les deux dimensions.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-grid.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/columns-grid--download.html)

On utiliser les grilles CSS lorsque :

- On a des éléments/objets à organiser sur plusieurs lignes et colonnes
- On souhaite pouvoir aligner les éléments sur les deux axes

## Compatibilité des navigateurs

Les différentes méthodes évoquées plus haut peuvent disposer d'une prise en charge différente selon les navigateurs, se référer à chacun des tableaux suivant pour plus de détails sur la prise en charge de chaque propriété.

### column-width

{{Compat("css.properties.column-width")}}

### column-rule

{{Compat("css.properties.column-rule")}}

### flex

{{Compat("css.properties.flex")}}

### flex-wrap

{{Compat("css.properties.flex-wrap")}}

### grid-template-columns

{{Compat("css.properties.grid-template-columns")}}

## Voir aussi

- [Guide pour les dispositions multi-colonnes](/fr/docs/Web/CSS/CSS_Columns)
- [Guide pour les boîtes flexibles (_flexbox_)](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Guide pour les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout)
