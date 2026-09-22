---
title: Disposition de grille CSS
short-title: Disposition de grille
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

Le module de **disposition de grille CSS** excelle à diviser une page en régions principales ou à définir la relation en termes de taille, de position et d'empilement entre les parties d'un contrôle construit à partir de primitives HTML.

Comme les tableaux, la disposition de grille permet à un·e auteur·ice d'aligner des éléments en colonnes et en incises. Cependant, de nombreuses mises en page sont soit possibles, soit plus faciles avec la grille CSS qu'elles ne l'étaient avec les tableaux. Par exemple, les éléments enfants d'un conteneur en grille peuvent se positionner de manière à se chevaucher et à se superposer, de manière similaire aux éléments positionnés en CSS.

## La disposition de grille en action

L'exemple montre une grille avec trois pistes en colonnes pour laquelle les nouvelles lignes créées mesurent au moins 100 pixels et ont au plus la taille automatique (définie par leur contenu). Les éléments sont placés sur la grille grâce aux numéros des lignes horizontales et verticales.

```html hidden
<div class="enveloppe">
  <div class="un">Un</div>
  <div class="deux">Deux</div>
  <div class="trois">Trois</div>
  <div class="quatre">Quatre</div>
  <div class="cinq">Cinq</div>
  <div class="six">Six</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}
.enveloppe {
  max-width: 940px;
  margin: 0 auto;
}
.enveloppe > div {
  border: 2px solid rgb(233 171 88);
  border-radius: 5px;
  background-color: rgb(233 171 88 / 50%);
  padding: 1em;
  color: #d9480f;
}
.enveloppe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.un {
  grid-column: 1 / 3;
  grid-row: 1;
}
.deux {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.trois {
  grid-column: 1;
  grid-row: 2 / 5;
}
.quatre {
  grid-column: 3;
  grid-row: 3;
}
.cinq {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{EmbedLiveSample("La disposition de grille en action", "100%", 460)}}

Cet exemple animé utilise {{CSSxRef("display")}}, {{CSSxRef("grid-template-columns")}}, {{CSSxRef("grid-template-rows")}} et {{CSSxRef("gap")}} pour créer la grille, et {{CSSxRef("grid-column")}} et {{CSSxRef("grid-row")}} pour positionner les éléments dans la grille. Pour voir et modifier le HTML et le CSS utilisés, cliquez sur «&nbsp;Exécuter&nbsp;» en haut à droite de l'exemple.

## Référence

### Propriétés

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} (raccourcie)
- {{CSSxRef("grid")}} (raccourcie)
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} (raccourcie)
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} (raccourcie)
- {{CSSxRef("grid-area")}} (raccourcie)

### Fonctions

- {{CSSxRef("repeat()")}}
- {{CSSxRef("minmax()")}}
- {{CSSxRef("fit-content()")}}

### Types de donnée et valeurs

- {{CSSxRef("&lt;flex&gt;")}} (unité `fr`)

### Termes et définitions du glossaire

- {{Glossary("Grid", "Grille")}}
- {{Glossary("Grid areas", "Zones de grille")}}
- {{Glossary("Grid axis", "Axes de la grille")}}
- {{Glossary("Grid cell", "Cellule de la grille")}}
- {{Glossary("Grid column", "Colonne de la grille")}}
- {{Glossary("Grid container", "Conteneur de la grille")}}
- {{Glossary("Grid lines", "Lignes de la grille")}}
- {{Glossary("Grid row", "Ligne de la grille")}}
- {{Glossary("Grid tracks", "Pistes de la grille")}}
- {{Glossary("Gutters", "Gouttières")}}

## Guides

- [Concepts de base de la disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Un aperçu des différentes fonctionnalités offertes par le module de disposition en grille CSS.

- [Relation de la disposition en grille avec d'autres méthodes de disposition](/fr/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Comment la disposition en grille s'articule avec d'autres fonctionnalités CSS, y compris les boîtes flexibles, les éléments positionnés absolument et `display: contents`.

- [Disposition en grille utilisant le placement basé sur les lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Les lignes de la grille et comment positionner les éléments par rapport à ces lignes, y compris les propriétés `grid-area`, les numéros de ligne négatifs, le chevauchement de plusieurs cellules et la création de gouttières de grille.

- [Zones de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Positionner les éléments de la grille en utilisant des zones de modèle nommées.

- [Disposition en grille utilisant des lignes de grille nommées](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Combiner les noms et les tailles de pistes&nbsp;; positionner les éléments de la grille en définissant des lignes de grille nommées et des zones de modèle.

- [Placement automatique dans la disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Comment la grille positionne les éléments qui ne déclarent aucune propriété de placement.

- [Aligner les éléments dans une disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Aligner, justifier et centrer les éléments de la grille le long des deux axes d'une disposition en grille.

- [Grilles, valeurs logiques et modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Examiner l'interaction entre la disposition en grille CSS, l'alignement des boîtes et les modes d'écriture, ainsi que les propriétés et valeurs logiques et physiques CSS.

- [Disposition en grille et accessibilité](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Examiner comment la disposition en grille CSS peut à la fois favoriser et nuire à l'accessibilité.

- [Réaliser des dispositions courantes avec des grilles](/fr/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Quelques dispositions différentes qui présentent les techniques utilisables lors de la conception de dispositions en grille CSS, notamment l'utilisation de {{CSSxRef("grid-template-areas")}}, d'un système de grille flexible à 12 colonnes et d'une liste de produits utilisant le placement automatique.

- [Sous-grille](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Ce que fait la sous-grille, avec les cas d'utilisation et les modèles de conception auxquels elle répond.

- [Disposition en voies de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_lanes)
  - : Détails sur la disposition en voies de grille et son utilisation.

- [Alignement des boîtes dans une disposition en grille CSS](/fr/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Fonctionnement de l'alignement des boîtes dans le contexte d'une disposition en grille.

## Fonctionnalités associées

Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)

- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("justify-content")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("justify-self")}}
- {{CSSxRef("place-content")}}
- {{CSSxRef("place-items")}}
- {{CSSxRef("place-self")}}

Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)

- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("row-gap")}}

Le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)

- {{CSSxRef("aspect-ratio")}}
- {{CSSxRef("box-sizing")}}
- {{CSSxRef("height")}}
- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}
- {{CSSxRef("width")}}
- Le type de donnée {{CSSxRef("ratio")}}
- La valeur {{CSSxRef("min-content")}}
- La valeur {{CSSxRef("max-content")}}
- La valeur {{CSSxRef("fit-content")}}
- La fonction {{CSSxRef("fit-content()")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [de disposition en boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
- [Exemples de grille <sup>(angl.)</sup>](https://gridbyexample.com/)
- [Référence de la grille CSS <sup>(angl.)</sup>](https://tympanus.net/codrops/css_reference/grid/) sur Codrops
- [Outils de développement Firefox&nbsp;: inspecteur de grille <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [Terrain de jeu de la grille CSS <sup>(angl.)</sup>](https://mozilladevelopers.github.io/playground/css-grid/)
- [Jardin de la grille CSS <sup>(angl.)</sup>](https://cssgridgarden.com/) — Un jeu pour apprendre la grille CSS
