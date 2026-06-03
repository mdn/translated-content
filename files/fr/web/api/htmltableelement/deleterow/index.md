---
title: "HTMLTableElement : méthode deleteRow()"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

La méthode **`deleteRow()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime une ligne spécifique ({{HTMLElement("tr")}}) d'un tableau ({{HTMLElement("table")}}) donné.

## Syntaxe

```js-nolint
deleteRow(index)
```

### Paramètres

- `index`
  - : `index` est un entier représentant la ligne à supprimer.
    Cependant, l'index spécial `-1` peut être utilisé pour supprimer la toute dernière ligne d'un tableau.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée si `index` est supérieur ou égal au nombre de lignes disponibles ou est une valeur négative autre que `-1`.

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
let table = document.querySelector("table");

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

- La méthode {{DOMxRef("HTMLTableSectionElement.deleteRow()")}}
