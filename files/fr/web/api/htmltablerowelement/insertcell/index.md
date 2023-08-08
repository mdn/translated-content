---
title: HTMLTableRowElement.insertCell()
slug: Web/API/HTMLTableRowElement/insertCell
---

{{APIRef("HTML DOM")}}

La méthode **`HTMLTableRowElement.insertCell()`** insère une nouvelle cellule ({{HtmlElement("td")}}) dans une ligne de tableau ({{HtmlElement("tr")}}) et renvoie une référence sur cette cellule.

> **Note :** `insertCell()` insère la cellule directement dans la ligne. La cellule n'a pas besoin d'être ajoutée séparément comme cela serait le cas si {{domxref("Document.createElement()")}} avait été utilisé pour créer le nouvel élément `<td>`.

## Syntaxe

```js
var newCell = HTMLTableRowElement.insertCell(index);
```

{{domxref("HTMLTableRowElement")}} est une référence sur un élément HTML {{HtmlElement("tr")}}.

### Paramètres

- `index` {{optional_inline}}
  - : `index` est l'index de cellule de la nouvelle cellule. Si `index` est `-1` ou égal au nombre actuel de cellules, la nouvelle cellule est ajoutée à la fin la ligne. Si `index` est supérieur au nombre de cellules, une exception `IndexSizeError` sera levée. Si `index` est omis, la valeur sera `-1` par défaut.

### Valeur de retour

`newCell` est une {{domxref("HTMLTableCellElement")}} qui fait référence à la nouvelle cellule.

## Exemple

Cet exemple utilise {{domxref("HTMLTableElement.insertRow()")}} pour ajouter une nouvelle ligne à une table.

Nous utilisons ensuite `insertCell(0)` pour insérer une nouvelle cellule dans la nouvelle ligne (pour être du HTML valide, un `<tr>` doit avoir au moins un élément `<td>`). Enfin, nous ajoutons du texte à la cellule en utilisant {{domxref("Document.createTextNode()")}} et {{domxref("Node.appendChild()")}}.

### HTML

```html
<table id="my-table">
  <tr>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Row 2</td>
  </tr>
  <tr>
    <td>Row 3</td>
  </tr>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // Obtient une référence sur la table
  let tableRef = document.getElementById(tableID);

  // Insère une ligne à la fin de la table
  let newRow = tableRef.insertRow(-1);

  // Insère une cellule dans la ligne à l’index 0
  let newCell = newRow.insertCell(0);

  // Ajoute un nœud texte à la cellule
  let newText = document.createTextNode("New bottom row");
  newCell.appendChild(newText);
}

// Appelle addRow() avec l’ID de la table
addRow("my-table");
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLTableElement.insertRow()")}}
- L'élément HTML représentant les cellules&nbsp;: {{domxref("HTMLTableCellElement")}}
