---
title: "HTMLTableRowElement : propriété rowIndex"
short-title: rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
l10n:
  sourceCommit: e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`rowIndex`** de l'interface {{DOMxRef("HTMLTableRowElement")}} représente la position d'une ligne dans l'ensemble du {{HTMLElement("table")}}.

Même lorsque les éléments HTML {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}} sont dans le désordre dans le HTML, les navigateurs affichent le tableau dans le bon ordre. Les lignes sont donc comptées de `<thead>` à `<tbody>`, puis de `<tbody>` à `<tfoot>`.

## Valeur

L'index de la ligne, ou `-1` si la ligne ne fait pas partie d'un tableau.

## Exemples

Cet exemple utilise JavaScript pour afficher le numéro de chaque ligne dans un tableau.

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
      <td>Oranges</td>
      <td>8 €</td>
    </tr>
    <tr>
      <td>Filet de boeuf</td>
      <td>20 €</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>30 €</td>
    </tr>
  </tfoot>
</table>
```

### JavaScript

```js
const rows = document.querySelectorAll("tr");

rows.forEach((row) => {
  const z = document.createElement("td");
  z.textContent = `(ligne n°${row.rowIndex})`;
  row.appendChild(z);
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableRowElement.sectionRowIndex")}}
