---
title: "HTMLTableCellElement : propriété colSpan"
short-title: colSpan
slug: Web/API/HTMLTableCellElement/colSpan
l10n:
  sourceCommit: 2406bfdc031740afbd500a1fc953a76a4b7f8484
---

{{APIRef("HTML DOM")}}

La propriété **`colSpan`** de l'interface {{DOMxRef("HTMLTableCellElement")}} représente le nombre de colonnes que cette cellule doit couvrir&nbsp;; cela permet à la cellule d'occuper l'espace sur plusieurs colonnes du tableau. Elle reflète l'attribut [`colspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan).

## Valeur

Un nombre positif représentant le nombre de colonnes.

> [!NOTE]
> Lors de la définition d'une nouvelle valeur, celle-ci est _bornée_ à la valeur strictement positive la plus proche.

## Exemples

Cet exemple propose deux boutons pour modifier la portée de colonnes de la première cellule du corps du tableau.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Colonne 1</th>
      <th>Colonne 2</th>
      <th>Colonne 3</th>
      <th>Colonne 4</th>
      <th>Colonne 5</th>
      <th>Colonne 6</th>
      <th>Colonne 7</th>
      <th>Colonne 8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
  </tbody>
</table>
<button id="increase">Augmenter l'étendue</button>
<button id="decrease">Diminuer l'étendue</button>
<div>La première cellule s'étend sur <output>2</output> colonne(s).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
// Récupère les éléments d'interface concernés
const cell = document.querySelectorAll("tbody tr td")[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.colSpan += 1;

  // Met à jour l'affichage
  output.textContent = cell.colSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.colSpan -= 1;

  // Met à jour l'affichage
  output.textContent = cell.colSpan;
});
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 175)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableCellElement.rowSpan")}}
- La propriété {{DOMxRef("HTMLTableColElement.span")}}
