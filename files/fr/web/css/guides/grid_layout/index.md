---
title: Grilles CSS (CSS Grid)
slug: Web/CSS/Guides/Grid_layout
original_slug: Web/CSS/CSS_grid_layout
---

Le module **_CSS Grid layout_** (modèle de disposition en grille) est un module de la spécification CSS qui permet de créer des mises en page en divisant l'espace d'affichage en régions utilisables par une application ou en définissant des relations de taille, position et d'empilement entre les éléments HTML.

Comme les tableaux, la grille permet d'aligner des éléments sous forme de colonnes et de lignes mais à la différence des tableaux, la grille n'a pas de structure de contenu. Ainsi, on peut créer de nombreuses mises en page qui n'auraient pas été possibles avec les tableaux. Ainsi, les éléments fils d'un conteneur en grille peuvent être positionnés afin qu'ils se chevauchent ou qu'ils se comportent comme des éléments positionnés.

## Un exemple simple

Dans l'exemple qui suit, on montre comment utiliser une grille avec trois pistes en colonnes pour laquelle les nouvelles lignes créées mesureront au moins 100 pixels et auront au plus la taille automatique (définie par leur contenu). Les éléments sont placés sur la grille grâce aux numéros des lignes horizontales et verticales.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233, 171, 88);
  border-radius: 5px;
  background-color: rgba(233, 171, 88, 0.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">Un</div>
  <div class="two">Deux</div>
  <div class="three">Trois</div>
  <div class="four">Quatre</div>
  <div class="five">Cinq</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{EmbedLiveSample("Un_exemple_simple", "100%", "440")}}

## Référence

### Propriétés CSS

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Fonctions CSS

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### Types de donnée CSS

{{cssxref("&lt;flex&gt;")}}

### Termes définis dans le glossaire

- [Grille](/fr/docs/Glossary/Grid)
- [Lignes](/fr/docs/Glossaire/Grid_Lines)
- [Pistes](/fr/docs/Glossaire/Grid_Tracks)
- [Cellules](/fr/docs/Glossaire/Grid_Cell)
- [Zones](/fr/docs/Glossaire/Grid_Areas)
- [Gouttières](/fr/docs/Glossary/Gutters)
- [Axe](/fr/docs/Glossaire/Grid_Axis)
- [Ligne horizontale](/fr/docs/Glossaire/Grid_Rows)
- [Colonnes](/fr/docs/Glossaire/Grid_Column)

## Guides

- [Les concepts de base](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Placer les éléments sur les lignes d'une grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Le modèle de grille et les autres modèles de disposition](/fr/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
- [Utiliser des lignes nommées sur une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
- [Définir des zones sur une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [Le placement automatique sur une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- [L'alignement des boîtes avec les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
- [Les grilles CSS, les valeurs logiques et les modes d'écriture](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [Les grilles CSS et l'accessibilité](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility)
- [Les grilles CSS et l'amélioration progressive](/fr/docs/Web/CSS/Guides/Grid_layout)
- [Construire des dispositions courantes avec des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
- [Les sous-grilles (_subgrid_)](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid)

## Ressources externes

- [Des exemples créés par Jen Simmons (en anglais)](https://labs.jensimmons.com/)
- [Les grilles CSS par l'exemple - un ensemble d'exemples et de tutoriels (en anglais)](https://gridbyexample.com/)
- [La référence Codrops sur les grilles CSS (en anglais)](https://tympanus.net/codrops/css_reference/grid/)
- [L'inspecteur de grille dans les outils de développement Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [Le bac à sable CSS Grid (en anglais)](https://mozilladevelopers.github.io/playground/)
- [Les grilles CSS et Internet Explorer 11](https://tomrothe.de/posts/css_grid_and_ie11.html) ([prothèse - _polyfill_](https://github.com/motine/css_grid_annotator))

## Spécifications

{{Specifications}}
