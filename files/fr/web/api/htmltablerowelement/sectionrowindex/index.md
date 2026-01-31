---
title: "HTMLTableRowElement : propriété sectionRowIndex"
short-title: sectionRowIndex
slug: Web/API/HTMLTableRowElement/sectionRowIndex
l10n:
  sourceCommit: 502544e192e1bc8d05453f88eb00e8bfde705c65
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`sectionRowIndex`** de l'interface {{DOMxRef("HTMLTableRowElement")}} représente la position d'une ligne dans la section courante ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}} ou {{HTMLElement("tfoot")}}).

## Valeur

L'index de la ligne, ou `-1` si la ligne ne fait pas partie de la section.

## Exemples

Cet exemple utilise JavaScript pour afficher le numéro de chaque ligne du `tbody`.

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
const rows = document.querySelectorAll("tbody tr");

rows.forEach((row) => {
  const z = document.createElement("td");
  z.textContent = `(ligne n°${row.sectionRowIndex})`;
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

- La propriété {{DOMxRef("HTMLTableRowElement.rowIndex")}}
