---
title: "HTMLTableElement : méthode insertRow()"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`insertRow()`** de l'interface {{DOMxRef("HTMLTableElement")}} crée un élément {{HTMLElement("tr")}}, l'insère à la position définie dans la collection {{DOMxRef("HTMLTableElement.rows", "rows")}} et le retourne. Si la collection `rows` est vide et que le tableau ne possède également aucun élément HTML {{HTMLElement("tbody")}}, un élément `<tbody>` est d'abord créé et inséré.

Cette méthode crée et insère l'élément directement, sans nécessiter d'appels séparés à des méthodes telles que {{DOMxRef("Document.createElement()")}}, {{DOMxRef("Node.insertBefore()")}}, et {{DOMxRef("Node.appendChild()")}}.

Pour insérer explicitement une ligne dans une section spécifique, utilisez {{DOMxRef("HTMLTableSectionElement.insertRow()")}}.

## Syntaxe

```js-nolint
insertRow()
insertRow(index)
```

### Paramètres

- `index` {{Optional_Inline}}
  - : L'indice de la nouvelle ligne dans la collection {{DOMxRef("HTMLTableElement.rows", "rows")}}. Si `index` vaut `-1` ou est égal au nombre de lignes, la ligne est ajoutée comme dernière ligne. Si `index` est omis, sa valeur par défaut est `-1`.

    Si `rows` est vide, la nouvelle ligne est ajoutée au dernier élément `<tbody>` (un élément est créé s'il n'en existe pas). Sinon, la nouvelle ligne est insérée immédiatement avant la ligne à `index`, ou ajoutée au parent de la dernière ligne si la nouvelle ligne doit devenir la dernière ligne. La nouvelle ligne est insérée dans le même parent que la ligne de référence, elle peut donc être insérée directement dans le `<table>` ou dans n'importe quel élément de section de tableau (`<thead>`, `<tbody>` ou `<tfoot>`).

### Valeur de retour

Un objet {{DOMxRef("HTMLTableRowElement")}} qui référence la nouvelle ligne.

### Exceptions

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée si `index` est supérieur au nombre de lignes ou inférieur à `-1`.

## Exemples

Cet exemple utilise `insertRow(-1)` pour ajouter une nouvelle ligne à un tableau.

On utilise ensuite {{DOMxRef("HTMLTableRowElement.insertCell()")}} pour insérer une nouvelle cellule dans la nouvelle ligne. Enfin, on ajoute du texte à la cellule avec {{DOMxRef("Document.createTextNode()")}} et {{DOMxRef("Node.appendChild()")}}.

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
  const tableRef = document.getElementById(tableID);

  // Insérer une ligne à la fin du tableau
  const newRow = tableRef.insertRow(-1);

  // Insérer une cellule dans la ligne à l'indice 0
  const newCell = newRow.insertCell(0);

  // Ajouter un nœud texte à la cellule
  const newText = document.createTextNode("Nouvelle ligne inférieure");
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
- La méthode {{DOMxRef("HTMLTableSectionElement.insertRow()")}}
