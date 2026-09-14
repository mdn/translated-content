---
title: "HTMLTableElement : méthode deleteTHead()"
short-title: deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`deleteTHead()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime le premier élément {{HTMLElement("thead")}} enfant d'un tableau ({{HTMLElement("table")}}) donné, s'il en existe un.

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
const table = document.querySelector("table");
table.deleteTHead();
```

### Résultat

{{EmbedLiveSample("Examples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.createTHead()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteCaption()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
