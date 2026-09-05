---
title: "HTMLTableElement : méthode deleteTFoot()"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`deleteTFoot()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime le premier élément {{HTMLElement("tfoot")}} enfant d'un tableau ({{HTMLElement("table")}}) donné, s'il en existe un.

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
const table = document.querySelector("table");
table.deleteTFoot();
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.createTFoot()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteCaption()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTHead()")}}
