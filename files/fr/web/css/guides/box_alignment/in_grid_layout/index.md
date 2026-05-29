---
title: L'alignement des boîtes avec une grille CSS
short-title: En disposition de grille
slug: Web/CSS/Guides/Box_alignment/In_grid_layout
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Le module [d'alignement de boîte](/fr/docs/Web/CSS/Guides/Box_alignment) détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous voyons comment fonctionne l'alignement des boîtes avec [les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout).

Comme ce guide vise à détailler les aspects spécifiques aux grilles CSS et à l'alignement des boîtes, il doit être lu en conjonction avec le guide [aperçu de l'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment/Overview), qui détaille les fonctionnalités communes de l'alignement des boîtes dans différentes méthodes de mise en page.

## Exemple simple

Dans cet exemple utilisant [la disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts), il y a un espace supplémentaire dans le {{Glossary("grid container", "conteneur de grille")}} après avoir disposé les pistes à largeur fixe le long de l'axe en ligne {{Glossary("main axis", "axe principal")}}. Cet espace est distribué à l'aide de {{CSSxRef("justify-content")}}. Sur l'axe de bloc {{Glossary("cross axis", "axe secondaire")}}, l'alignement des éléments à l'intérieur de leurs zones de grille est contrôlé avec {{CSSxRef("align-items")}}. Le premier élément remplace la valeur de `align-items` définie sur le groupe en définissant {{CSSxRef("align-self")}} sur `center`.

```html live-sample___grid-align-items
<div class="box">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois <br />a <br />du <br />texte <br />supplémentaire</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-align-items
body {
  font-family: sans-serif;
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-align-items
.box {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-align-items", "", 200)}}

## Axes de la grille

En tant que méthode de disposition bidimensionnelle, lorsqu'on travaille avec la disposition en grille, nous avons toujours deux axes sur lesquels aligner nos éléments. Nous avons accès à toutes les propriétés d'alignement des boîtes pour nous aider à y parvenir.

L'axe en ligne est l'axe qui correspond à la direction dans laquelle les mots d'une phrase s'écoulent dans le mode d'écriture utilisé. Ainsi, dans une langue horizontale comme l'anglais ou l'arabe, la direction en ligne est horizontale. Si vous êtes dans un mode d'écriture vertical, l'axe en ligne est vertical.

![Une situation où l'axe en ligne est horizontal.](inline_axis.png)

Pour aligner des éléments dans l'axe en ligne, vous utilisez les propriétés qui commencent par `justify-`&nbsp;: {{CSSxRef("justify-content")}}, {{CSSxRef("justify-items")}} et {{CSSxRef("justify-self")}}.

L'axe de bloc croise l'axe en ligne dans la direction où les blocs sont affichés sur la page — par exemple, les paragraphes en français sont affichés les uns en dessous des autres verticalement. C'est la dimension de bloc.

Pour aligner des éléments sur l'axe de bloc, vous utilisez les propriétés qui commencent par `align-`&nbsp;: {{CSSxRef("align-content")}}, {{CSSxRef("align-items")}} et {{CSSxRef("align-self")}}.

![Une situation où l'axe de bloc est vertical.](block_axis.png)

## Alignement individuel

Ces propriétés permettent d'aligner l'élément à l'intérieur de la zone de grille dans laquelle il est placé&nbsp;:

- {{CSSxRef("justify-self")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("place-self")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("place-items")}}

Les propriétés `*-items`, `align-items` et `justify-items`, sont appliquées au conteneur de grille et définissent l'alignement pour tous les éléments de la grille en tant que groupe. Les propriétés `*-self`, `align-self` et `justify-self`, sont appliquées aux éléments de la grille. Cela signifie que vous pouvez définir l'alignement pour tous les éléments de la grille, puis remplacer l'alignement de certains éléments en appliquant les propriétés `align-self` ou `justify-self` aux règles des éléments individuels.

La valeur initiale pour `align-items` et `justify-items` est `stretch`, et la valeur initiale pour `align-self` et `justify-self` est `auto`, de sorte que l'élément s'étend sur toute la zone de la grille. L'exception à cette règle est lorsque l'élément a un {{Glossary("aspect ratio", "rapport d'aspect")}} intrinsèque, par exemple une image. Dans ce cas, l'élément est aligné sur `start` dans les deux dimensions afin que l'image ne soit pas déformée.

## Alignement du contenu

Ces propriétés permettent d'aligner les pistes de la grille lorsqu'il reste de l'espace à répartir&nbsp;:

- {{CSSxRef("justify-content")}}
- {{CSSxRef("align-content")}}
- {{CSSxRef("place-content")}}

Ce scénario se produit uniquement si la somme des tailles des pistes est inférieure à la taille du conteneur de grille.

## Gouttières et versions historiques des propriétés préfixées

Ces propriétés définissent l'espacement entre les éléments de la grille à l'intérieur d'un conteneur de grille&nbsp;:

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}

La spécification de la grille contenait initialement la définition des propriétés {{CSSxRef("row-gap", "grid-row-gap")}}, {{CSSxRef("column-gap", "grid-column-gap")}} et {{CSSxRef("gap", "grid-gap")}}. Celles-ci ont depuis été déplacées dans la spécification Box Alignment et aliasées à {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}}, et {{CSSxRef("gap")}}. Cela permet de les utiliser pour d'autres méthodes de disposition où un espace entre les éléments est pertinent.

## Voir aussi

- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- [Aperçu de l'alignement de boîte](/fr/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Alignement de boîte dans des boîtes flexibles](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Alignement de boîte dans une disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Alignement de boîte pour les dispositions en bloc, positionnées en absolu et les tableaux](/fr/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
- [Aligner les éléments dans une disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
