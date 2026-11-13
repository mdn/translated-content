---
title: "HTMLTableElement : méthode deleteCaption()"
short-title: deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La méthode **`deleteCaption()`** de l'interface {{DOMxRef("HTMLTableElement")}} supprime le premier élément {{HTMLElement("caption")}} enfant d'un tableau ({{HTMLElement("table")}}) donné, s'il en existe un.

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
    Cette légende est supprimée&nbsp;!
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
const table = document.querySelector("table");
table.deleteCaption();
```

### Résultat

{{EmbedLiveSample("Examples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTableElement.createCaption()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTHead()")}}
