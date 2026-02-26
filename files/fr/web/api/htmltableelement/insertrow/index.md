---
title: "HTMLTableElement : méthode insertRow()"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

La méthode **`insertRow()`** de l'interface {{DOMxRef("HTMLTableElement")}} insère une nouvelle ligne ({{HTMLElement("tr")}}) dans un tableau ({{HTMLElement("table")}}) donné et retourne une référence vers la nouvelle ligne.

Si une table possède plusieurs éléments HTML {{HTMLElement("tbody")}}, par défaut, la nouvelle ligne est insérée dans le dernier `<tbody>`. Pour insérer la ligne dans une section spécifique, utilisez {{DOMxRef("HTMLTableSectionElement.insertRow()")}}.

> [!NOTE]
> `insertRow()` insère la ligne directement dans la table. La ligne n'a pas besoin d'être ajoutée séparément comme cela aurait été le cas si {{DOMxRef("Document.createElement()")}} avait été utilisé pour créer le nouvel élément `<tr>`.

## Syntaxe

```js-nolint
insertRow()
insertRow(index)
```

{{DOMxRef("HTMLTableElement")}} est une référence à un élément HTML {{HTMLElement("table")}}.

### Paramètres

- `index` {{Optional_Inline}}
  - : L'indice de la nouvelle ligne. Si `index` vaut `-1` ou est égal au nombre de lignes, la ligne est ajoutée comme dernière ligne. Si `index` est omis, sa valeur par défaut est `-1`.

### Valeur de retour

Un objet {{DOMxRef("HTMLTableRowElement")}} qui référence la nouvelle ligne.

### Exceptions

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée si `index` est supérieur au nombre de lignes.

## Exemples

Cet exemple utilise `insertRow(-1)` pour ajouter une nouvelle ligne à un tableau.

On utilise ensuite {{DOMxRef("HTMLTableRowElement.insertCell()")}} pour insérer une nouvelle cellule dans la nouvelle ligne. (Pour être valide en HTML, un `<tr>` doit avoir au moins un élément `<td>`.) Enfin, on ajoute du texte à la cellule avec {{DOMxRef("Document.createTextNode()")}} et {{DOMxRef("Node.appendChild()")}}.

### HTML

```html
<table id="mon-tableau">
  <tbody>
    <tr>
      <td>Ligne 1</td>
    </tr>
    <tr>
      <td>Ligne 2</td>
    </tr>
    <tr>
      <td>Ligne 3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // Récupérer une référence à la table
  let tableRef = document.getElementById(tableID);

  // Insérer une ligne à la fin du tableau
  let newRow = tableRef.insertRow(-1);

  // Insérer une cellule dans la ligne à l'indice 0
  let newCell = newRow.insertCell(0);

  // Ajouter un nœud texte à la cellule
  let newText = document.createTextNode("Nouvelle ligne inférieure");
  newCell.appendChild(newText);
}

// Appeler addRow() avec l'ID de la table
addRow("mon-tableau");
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableRowElement.insertCell()")}}
