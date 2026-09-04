---
title: "HTMLTableCellElement : propriété rowSpan"
short-title: rowSpan
slug: Web/API/HTMLTableCellElement/rowSpan
l10n:
  sourceCommit: 2406bfdc031740afbd500a1fc953a76a4b7f8484
---

{{APIRef("HTML DOM")}}

La propriété **`rowSpan`** de l'interface {{DOMxRef("HTMLTableCellElement")}} représente le nombre de lignes que cette cellule doit couvrir&nbsp;; cela permet à la cellule d'occuper l'espace sur plusieurs lignes du tableau. Elle reflète l'attribut [`rowspan`](/fr/docs/Web/HTML/Reference/Elements/td#colspan).

## Valeur

Un nombre positif représentant le nombre de lignes. Si la valeur est `0`, cela signifie toutes les lignes restantes de la colonne.

> [!NOTE]
> Lors de la définition d'une nouvelle valeur, toute valeur différente de 0 est _bornée_ à la valeur strictement positive la plus proche.

## Exemples

Cet exemple propose deux boutons pour modifier la portée de lignes de la première cellule du corps du tableau.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Colonne 1</th>
      <th>Colonne 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td rowspan="2">2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
<button id="increase">Augmenter l'étendue</button>
<button id="decrease">Diminuer l'étendue</button>
<div>
  La deuxième cellule de la première colonne s'étend sur
  <output>2</output> ligne(s).
</div>
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
const row = document.querySelectorAll("tbody tr")[1];
const cell = row.cells[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.rowSpan += 1;

  // Met à jour l'affichage
  output.textContent = cell.rowSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.rowSpan -= 1;

  // Met à jour l'affichage
  output.textContent = `${cell.rowSpan === 0 ? "toutes les" : cell.rowSpan}`;
});
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableCellElement.colSpan")}}
- La propriété {{DOMxRef("HTMLTableColElement.span")}}
