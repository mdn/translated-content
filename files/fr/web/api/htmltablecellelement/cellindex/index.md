---
title: "HTMLTableCellElement : propriété cellIndex"
short-title: cellIndex
slug: Web/API/HTMLTableCellElement/cellIndex
l10n:
  sourceCommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`cellIndex`** de l'interface {{DOMxRef("HTMLTableCellElement")}} représente la position d'une cellule dans sa ligne ({{HTMLElement("tr")}}). La première cellule a un indice de `0`.

## Valeur

Retourne l'indice de la cellule, ou `-1` si la cellule ne fait partie d'aucune ligne.

## Exemples

Cet exemple ajoute un libellé à tous les numéros de cellule de la première ligne du `tbody`.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Article</th>
      <th>Prix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bananes</td>
      <td>2 €</td>
    </tr>
    <tr>
      <td>Riz</td>
      <td>2,5 €</td>
    </tr>
  </tbody>
</table>
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
const rows = document.querySelectorAll("tbody tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (cell #${cell.cellIndex})`;
}
```

### Résultat

{{EmbedLiveSample("Examples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
