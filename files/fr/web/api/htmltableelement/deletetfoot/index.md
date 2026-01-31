---
title: "HTMLTableElement : méthode deleteTFoot()"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

La méthode **`deleteTFoot()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime l'élément HTML {{HTMLElement("tfoot")}} d'un tableau ({{HTMLElement("table")}}) donné.

## Syntaxe

```js-nolint
deleteTFoot()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple utilise JavaScript pour supprimer le pied d'un tableau.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>541</td>
    </tr>
    <tr>
      <td>Jim</td>
      <td>225</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Moyenne</th>
      <td>383</td>
    </tr>
  </tfoot>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTFoot();
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
