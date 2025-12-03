---
title: Cellule de grille
slug: Glossary/Grid_Cell
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Dans une [grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout), une **cellule de grille** est la plus petite unité de la grille. C'est l'espace créé entre 4 intersections de {{Glossary("grid lines", "lignes de grille")}}. D'une certaine façon, une cellule de grille est assimilable à une cellule de tableau.

![Un diagramme mettant en avant une cellule de grille en bleu turquoise en haut à gauche d'une grille de 3 colonnes par 2 lignes.](1_grid_cell.png)

Si vous ne placez pas d'éléments à l'aide de l'une des méthodes de placement de grille, les enfants directs du conteneur de grille seront placés individuellement dans chaque cellule de la grille par l'algorithme de placement automatique. Des {{Glossary("grid tracks", "pistes de ligne ou de colonne")}} supplémentaires seront créées afin d'obtenir suffisamment de cellules pour contenir tous les éléments.

## Exemple

Dans l'exemple, nous avons créé une grille de trois colonnes. Les cinq éléments sont placés dans des cellules de la grille le long d'une rangée initiale de trois cellules de la grille, puis par l'ajout d'une nouvelle ligne pour les deux autres.

```css hidden
* {
  box-sizing: border-box;
}

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
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
```

```html
<div class="wrapper">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
</div>
```

{{EmbedLiveSample('Exemple', '300', '280')}}

## Voir aussi

- Les propriétés CSS portant sur les cellules de grille&nbsp;:
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-auto-columns")}}
- [Les concepts de base des grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Définition des cellules de grille dans la spécification CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-grid/#grid-track-concept)
