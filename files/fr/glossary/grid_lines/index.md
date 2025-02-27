---
title: Ligne de grille (line)
slug: Glossary/Grid_Lines
---

{{GlossarySidebar}}

Les **lignes de grille** sont créées avec la définition des {{glossary("Grid Tracks", "pistes")}} (_tracks_) dans la grille explicite pour [une grille CSS](/fr/docs/Web/CSS/CSS_grid_layout). Dans l'exemple suivant, est présentée une grille qui a 3 pistes de colonnes et 2 pistes de lignes. Cela nous donne 4 lignes de colonnes _(column lines_) et 3 lignes de lignes _(row lines)_.

## Exemple

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

{{ EmbedLiveSample('Exemple', '500', '250') }}

Les lignes peuvent être adressées en utilisant leur numéro de ligne. Dans une langue de gauche à droite telle que l'anglais, la ligne de colonne 1 sera sur la gauche de la grille, la ligne de ligne 1 en haut. Les chiffres des lignes respectent le [mode d'écriture](/fr/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes) du document et ainsi, dans une langue écrite de droite à gauche par exemple, la ligne de colonne 1 sera sur la droite de la grille. L'image ci-dessous montre les numéros de ligne de la grille, en supposant que la langue est écrite de gauche à droite.

![Diagram showing the grid with lines numbered.](1_diagram_numbered_grid_lines.png)

Les lignes sont également créées dans la grille implicite lorsque des pistes implicites sont créées pour contenir les éléments placés en dehors de la grille explicite, mais ces lignes ne peuvent pas être adressées avec un nombre.

## Placement des éléments sur la grille par numéro de ligne

Après avoir créé une grille, vous pouvez placer des éléments sur la grille par numéro de ligne. Dans l'exemple suivant, l'élément est positionné de la ligne de colonne 1 à la ligne de colonne 3 et de la ligne de ligne 1 à la ligne de ligne 3.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

{{ EmbedLiveSample('Placement_des_éléments_sur_la_grille_par_numéro_de_ligne', '500', '250') }}

## Nommage des lignes

Les lignes créées dans la grille explicite peuvent être nommées, en ajoutant le nom entre crochets avant ou après les informations de dimensionnement de la piste. Lorsque vous placez un objet, vous pouvez utiliser ces noms à la place du numéro de ligne, comme illustré ci-dessous.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
```

{{ EmbedLiveSample('Nommage_des_lignes', '500', '250') }}

## Voir aussi

### Références de propriété

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### Further reading

- Guide des grilles CSS : _[Les concepts de base des grilles CSS](/fr/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)_
- Guide des grilles CSS : _[Places les éléments sur les lignes d'une grille CSS](/fr/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)_
- Guide des grilles CSS : _[Utiliser des lignes nommées sur une grille](/fr/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)_
- Guide des grilles CSS : _[Les grilles CSS, valeurs logiques et modes d'écriture](/fr/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)_
- [Définition des lignes de grille dans la spécification des grilles CSS](https://drafts.csswg.org/css-grid/#grid-line-concept)
