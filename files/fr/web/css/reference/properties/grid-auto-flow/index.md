---
title: grid-auto-flow
slug: Web/CSS/Reference/Properties/grid-auto-flow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`grid-auto-flow`** contrôle le fonctionnement de l'algorithme de placement automatique, en définissant précisément la façon dont les éléments placés automatiquement sont intégrés dans la grille.

{{InteractiveExample("Démonstration CSS&nbsp;: grid-auto-flow")}}

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
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
      <div>Quatre</div>
      <div>Cinq</div>
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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element > div:nth-child(1) {
  grid-column: auto / span 2;
}

#example-element > div:nth-child(2) {
  grid-column: auto / span 2;
}
```

> [!NOTE]
> La propriété `masonry-auto-flow` a été retirée de la [disposition en maçonnerie](/fr/docs/Web/CSS/Guides/Grid_layout/Masonry_layout) CSS au profit de `grid-auto-flow`.
> Voir [csswg-drafts #10231 <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/10231) pour plus de détails.

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
grid-auto-flow: revert;
grid-auto-flow: revert-layer;
grid-auto-flow: unset;
```

Cette propriété peut prendre deux formes&nbsp;:

- la première avec un seul mot-clé parmi `row`, `column` ou `dense`
- la seconde avec deux mots-clés `row dense` ou `column dense`.

### Valeurs

- `row`
  - : Les éléments sont organisés en remplissant chacune des lignes au fur et à mesure, quitte à en ajouter si besoin. Si aucune valeur entre `row` ou `column` n'est fournie, `row` sera la valeur par défaut.
- `column`
  - : Les éléments sont organisés en remplissant chacune des colonnes au fur et à mesure, quitte à en ajouter si besoin.
- `dense`
  - : L'algorithme de compartimentation «&nbsp;dense&nbsp;» tente de remplir les trous plus tôt dans la grille, si des éléments plus petits arrivent ensuite. Cela peut amener des éléments à apparaître hors ordre, lorsque cela permet de remplir les trous laissés par des éléments plus grands.

    Si cette valeur est omise, un algorithme «&nbsp;creux&nbsp;» est utilisé, où l'algorithme de placement ne se déplace que «&nbsp;vers l'avant&nbsp;» dans la grille lors du placement des éléments, sans jamais revenir en arrière pour remplir les trous. Cela garantit que tous les éléments placés automatiquement apparaissent «&nbsp;dans l'ordre&nbsp;», même si cela laisse des trous qui auraient pu être comblés par des éléments arrivant plus tard.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le placement automatique sur la grille

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="direction">
  <option value="column">column</option>
  <option value="row">row</option>
</select>
<input id="dense" type="checkbox" />
<label for="dense">dense</label>
```

#### CSS

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

```js hidden
function changeGridAutoFlow() {
  const grid = document.getElementById("grid");
  const direction = document.getElementById("direction");
  const dense = document.getElementById("dense");
  let gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}

const selectElem = document.querySelector("select");
const inputElem = document.querySelector("input");
selectElem.addEventListener("change", changeGridAutoFlow);
inputElem.addEventListener("change", changeGridAutoFlow);
```

#### Résultat

{{EmbedLiveSample("Définir le placement automatique sur la grille", 200, 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-auto-rows")}}
- La propriété {{CSSxRef("grid-auto-columns")}}
- La propriété {{CSSxRef("grid")}}
- [Le placement automatique sur la grille](/fr/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
- Vidéo&nbsp;: [Introduction au placement automatique sur la grille et à l'ordre des éléments <sup>(angl.)</sup>](https://gridbyexample.com/video/series-auto-placement-order/)
