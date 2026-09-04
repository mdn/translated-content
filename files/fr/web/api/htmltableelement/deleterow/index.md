---
title: "HTMLTableElement : méthode deleteRow()"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`deleteRow()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime une ligne spécifique ({{HTMLElement("tr")}}) d'un tableau ({{HTMLElement("table")}}) donné.

## Syntaxe

```js-nolint
deleteRow(index)
```

### Paramètres

- `index`
  - : L'index de la ligne à supprimer dans la collection {{DOMxRef("HTMLTableElement.rows", "rows")}}. Si `index` est `-1`, la dernière ligne est supprimée.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée si `index` est supérieur ou égal au nombre de lignes ou est inférieur à `-1`.

## Exemples

Cet exemple utilise JavaScript pour supprimer la deuxième ligne d'un tableau.

### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Cellule 1.1</td>
      <td>Cellule 1.2</td>
      <td>Cellule 1.3</td>
    </tr>
    <tr>
      <td>Cellule 2.1</td>
      <td>Cellule 2.2</td>
      <td>Cellule 2.3</td>
    </tr>
    <tr>
      <td>Cellule 3.1</td>
      <td>Cellule 3.2</td>
      <td>Cellule 3.3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");

// Supprimer la deuxième ligne
table.deleteRow(1);
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableRowElement.deleteCell()")}}
- La méthode {{DOMxRef("HTMLTableSectionElement.deleteRow()")}}
