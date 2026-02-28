---
title: "HTMLTableElement : méthode deleteTHead()"
short-title: deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La méthode **`deleteTHead()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime l'élément HTML {{HTMLElement("thead")}} d'un tableau ({{HTMLElement("table")}}) donné.

## Syntaxe

```js-nolint
deleteTHead()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple utilise JavaScript pour supprimer l'en-tête d'un tableau.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Métier</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>Plombier</td>
    </tr>
    <tr>
      <td>Jim</td>
      <td>Couvreur</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTHead();
```

### Résultat

{{EmbedLiveSample("Examples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
