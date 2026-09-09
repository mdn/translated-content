---
title: "HTMLTableElement : propriété caption"
short-title: caption
slug: Web/API/HTMLTableElement/caption
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La propriété **`caption`** de l'interface {{DOMxRef("HTMLTableElement")}} représente le premier élément {{HTMLElement("caption")}} enfant du tableau ({{HTMLElement("table")}}) donné, ou `null` si aucun élément de ce type n'existe.

## Valeur

Un objet {{DOMxRef("HTMLTableCaptionElement")}} ou `null`.

Cette propriété peut être assignée, ce qui entraîne la suppression du premier élément {{HTMLElement("caption")}} enfant existant, le cas échéant, et l'insertion de la valeur donnée, si elle n'est pas `null`, comme premier enfant. Par conséquent, définir `null` a le même effet que d'appeler {{DOMxRef("HTMLTableElement.deleteCaption", "deleteCaption()")}}. Si la valeur assignée n'est pas un {{DOMxRef("HTMLTableCaptionElement")}} ou `null`, une {{JSxRef("TypeError")}} est levée.

## Exemples

```js
if (table.caption) {
  // On peut alors faire quelque chose avec la légende du tableau
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableElement.tBodies")}}
- La propriété {{DOMxRef("HTMLTableElement.tFoot")}}
- La propriété {{DOMxRef("HTMLTableElement.tHead")}}
- La méthode {{DOMxRef("HTMLTableElement.createCaption()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteCaption()")}}
