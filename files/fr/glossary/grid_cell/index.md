---
title: Cellule de grille
slug: Glossary/Grid_Cell
tags:
  - CSS
  - Glossaire
  - Grilles
translation_of: Glossary/Grid_Cell
original_slug: Glossaire/Cellule_de_grille
---
Dans une [Grille CSS](/fr/docs/Web/CSS/CSS_Grid_Layout), une **cellule de grille** est la plus petite unité de la grille CSS. Elle est un espace entre 4 intersections {{glossary("grid lines","lignes de grille")}} et conceptuellement assimilable à une cellule de tableau.

![Diagram showing an individual cell on the grid.](1_grid_cell.png)

Si vous ne placez pas d'éléments à l'aide de l'une des méthodes de placement de grille, les enfants directs du conteneur de grille seront placés un dans chaque cellule individuelle par l'algorithme de placement automatique. Les {{glossary("Grid Tracks", "pistes")}}  de ligne ou colonne supplémentaire seront créées par la création des cellules nécessaires pour contenir tous les éléments.

Dans l'exemple, nous avons créé une grille de trois colonnes. Les cinq éléments sont placés dans des cellules de la grille le long d'une rangée initiale de trois cellules de la grille, puis par l'ajout d'une nouvelle ligne pour les deux autres.

## Exemple

```css hidden
* {box-sizing: border-box;}

.wrapper {
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: #fff4e6;
}

.wrapper > div {
    border: 2px solid #ffa94d;
    border-radius: 5px;
    background-color: #ffd8a8;
    padding: 1em;
    color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 100px;
}
```

```html
<div class="wrapper">
   <div>One</div>
   <div>Two</div>
   <div>Three</div>
   <div>Four</div>
   <div>Five</div>
</div>
```

{{ EmbedLiveSample('Exemple', '300', '280') }}

## En apprendre plus

### Références de propriété

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}

### En lire plus

- Guide des grilles CSS : _[Les concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base)_
- [Définition des cellules de grille dans la spécification CSS](https://drafts.csswg.org/css-grid/#grid-track-concept) (en)
