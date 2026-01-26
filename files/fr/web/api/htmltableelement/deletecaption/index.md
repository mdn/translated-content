---
title: "HTMLTableElement : méthode deleteCaption()"
short-title: deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

La méthode **`deleteCaption()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime l'élément HTML {{HTMLElement("caption")}} d'un tableau ({{HTMLElement("table")}}) donné. S'il n'y a pas d'élément `<caption>` associé au tableau, cette méthode ne fait rien.

## Syntaxe

```js-nolint
deleteCaption()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple utilise JavaScript pour supprimer la légende d'un tableau.

### HTML

```html
<table>
  <caption>
    Cette légende sera supprimée&nbsp;!
  </caption>
  <tbody>
    <tr>
      <td>Cellule 1.1</td>
      <td>Cellule 1.2</td>
    </tr>
    <tr>
      <td>Cellule 2.1</td>
      <td>Cellule 2.2</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteCaption();
```

### Résultat

{{EmbedLiveSample("Examples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
