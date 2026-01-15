---
title: grid-auto-flow
slug: Web/CSS/Reference/Properties/grid-auto-flow
original_slug: Web/CSS/grid-auto-flow
---

{{CSSRef}}

La propriété **`grid-auto-flow`** permet de contrôler la façon dont fonctionne l'algorithme de placement automatique. Celui-ci définit exactement comme les objets placés automatiquement s'inscrivent dans la grille.

{{InteractiveExample("CSS Demo: grid-auto-flow")}}

```css interactive-example-choice
grid-auto-flow: row;
```

```css interactive-example-choice
grid-auto-flow: column;
```

```css interactive-example-choice
grid-auto-flow: row dense;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element > div:nth-child(1) {
  grid-column: auto / span 2;
}

#example-element > div:nth-child(2) {
  grid-column: auto / span 2;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* Valeurs globales */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: unset;
```

Cette propriété peut prendre deux formes :

- la première avec un seul mot-clé parmi : `row`, `column` ou `dense`
- la seconde avec deux mots-clés : `row dense` ou `column dense`.

### Valeurs

- `row`
  - : Les éléments sont organisés en remplissant chacune des lignes au fur et à mesure, quitte à en ajouter si besoin. Si aucune valeur entre `row` ou `column` n'est fournie, `row` sera la valeur par défaut.
- `column`
  - : Les éléments sont organisés en remplissant chacune des colonnes au fur et à mesure, quitte à en ajouter si besoin.
- `dense`
  - : L'algorithme de placement automatique utilisera une méthode de « regroupement dense » où il essaie de remplir les trous dans la grille si des éléments plus petits arrivent ensuite. De fait, on peut obtenir une impression de désordre alors qu'il s'agit simplement du comblement des espaces libres.

    Si cette valeur est absente, le moteur utilisera un algorithme simple qui ne fait que se déplacer vers l'avant, sans revenir vers les espaces vides. De cette façon, les éléments apparaitront nécessairement dans l'ordre mais pourront laisser des trous.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
#grid {
  height: 200px;
  width: 200px;
  display: grid;
  grid-gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column; /* ou 'row', 'row dense', 'column dense' */
}

#item1 {
  background-color: lime;
  grid-row-start: 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}

#item4 {
  grid-column-start: 2;
  background-color: red;
}

#item5 {
  background-color: aqua;
}
```

### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="direction" onchange="changeGridAutoFlow()">
  <option value="column">column</option>
  <option value="row">row</option>
</select>
<input id="dense" type="checkbox" onchange="changeGridAutoFlow()" />
<label for="dense">dense</label>
```

### JavaScript

```js
function changeGridAutoFlow() {
  var grid = document.getElementById("grid");
  var direction = document.getElementById("direction");
  var dense = document.getElementById("dense");
  var gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "200px", "230px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid")}}
- [Guide : le placement automatique sur la grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- Tutoriel vidéo : [Introduction au placement automatique sur la grille et à l'ordre des éléments (en anglais)](https://gridbyexample.com/video/series-auto-placement-order/)
