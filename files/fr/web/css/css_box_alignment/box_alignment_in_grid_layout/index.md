---
title: L'alignement des boîtes avec une grille CSS
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout
tags:
  - CSS
  - CSS Grid
  - Grilles CSS
  - Guide
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout
original_slug: Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_grille
---
{{CSSRef}}

Le module de spécification _[Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)_ détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes avec [les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout). Cette page détaille les aspects spécifiques relatifs à l'alignement et aux grilles. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir [la page principale sur cette spécification](/fr/docs/Web/CSS/CSS_Box_Alignment).

## Exemple simple

Dans l'exemple qui suit, on utilise une disposition en grille et le conteneur possède un espace restant après avoir disposé les pistes à largeur fixe le long de l'axe en ligne. L'espace restant est distribué grâce à la propriété `justify-content`. Le long de l'axe secondaire, les éléments sont alignés au sein de leurs zones avec la propriété `align-items`. Le premier objet surcharge la valeur fournie par `align-items` en utilisant `align-self` avec la valeur `center`.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Axes de la grille

La grille est une méthode de disposition sur deux dimensions.

L'axe en ligne correspond à l'axe selon lequel les mots d'une phrase sont écrits pour le mode d'écriture utilisé. Ainsi, pour une langue écrite horizontalement (comme le français ou l'arabe), l'axe en ligne sera horizontal. Pour les modes d'écriture verticaux, cet axe sera vertica.

![](inline_axis.png)

Pour aligner des éléments selon l'axe en ligne, on utilisera les propriétés commençant par `justify-` : {{cssxref("justify-content")}}, {{cssxref("justify-items")}} et {{cssxref("justify-self")}}.

L'axe de bloc est orthogonal à l'axe en ligne et évolue dans le sens où les blocs sont affichés sur la page (en français, par exemple, les blocs sont disposés de bas en haut).

Pour aligner des éléments sur l'axe de bloc, on utilisera les propriétés commençant par `align-` : {{cssxref("align-content")}}, {{cssxref("align-items")}} et {{cssxref("align-self")}}.

![](block_axis.png)

## Alignement individuel

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Ces propriétés permettent d'aligner individuellement chacun des éléments au sein de leur zone de grille. Les propriétés `align-items` et `justify-items` sont appliquées au conteneur de grille et définissent `align-self` et `justify-self` pour l'ensemble des sujets d'alignement. Cela signifie qu'on peut indiquer un alignement global au niveau du conteneur puis surcharger cette règle au cas par cas si besoin en utilisant `align-self` ou `justify-self` sur les éléments souhaités.

Les valeurs initiales pour `align-self` et `justify-self` sont `stretch`. Aussi, l'objet sera étiré sur toute la zone de grille qui lui est dédié. Une exception est apportée à cette règle lorsque l'élément possède des proportions intrinsèques (une image par exemple) ; dans ce cas, l'élément est aligné avec `start`sur les deux axes et l'élément n'est pas déformé.

## Alignement du contenu

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Ces propriétés indiquent comment aligner les pistes de la grille lorsqu'il reste de l'espace à répartir. Ce scénario se produit uniquement si la somme des tailles des pistes est inférieure à la taille du conteneur de grille.

## Gouttières et versions préfixées des propriétés

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("gap")}}

La spécification sur les grilles contenaient initialement les définitions des propriétés {{cssxref("row-gap")}}, {{cssxref("grid-column-gap")}} et {{cssxref("gap")}}. Les définitions de ces propriétés ont depuis été déplacées dans le module de spécification _Box Alignment_ et ont respectivement été renommées en {{cssxref("row-gap")}}, {{cssxref("column-gap")}} et {{cssxref("gap")}}. Ainsi, elles peuvent être utilisées pour d'autres méthodes de disposition où les gouttières sont pertinentes.

À l'heure actuelle (juin 2018), seul Microsoft Edge prend en charge les versions non-préfixées pour ces propriétés. Il vaut donc mieux utiliser les deux versions (avec puis sans préfixe `grid-`) afin d'assurer une meilleure compatibilité.

## Référence

### Propriétés CSS

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}t
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Termes du glossaire

- [Axe secondaire](/fr/docs/Glossary/Cross_Axis)
- [Axe principal](/fr/docs/Glossary/Main_Axis)

## Guides

- [Aligner les boîtes dans une disposition en grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)

## Ressources externes

- [Anti-sèche pour l'alignement des boîtes (en anglais)](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)
- [Alignement pour les grilles, les boîtes flexibles et les boîtes (en anglais)](https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/)
- [Quelques pensées sur les implémentations partielles de _Box Alignment_ (en anglais)](https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/)
