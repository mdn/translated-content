---
title: "HTMLTableElement : propriété tFoot"
short-title: tFoot
slug: Web/API/HTMLTableElement/tFoot
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La propriété **`tFoot`** de l'interface {{DOMxRef("HTMLTableElement")}} représente le premier élément {{HTMLElement("tfoot")}} enfant de l'élément {{HTMLElement("table")}} donné, ou `null` s'il n'existe pas un tel élément.

## Valeur

Un objet {{DOMxRef("HTMLTableSectionElement")}} (qui est toujours un `tfoot`) ou `null`.

Cette propriété peut être assignée, ce qui entraîne la suppression du premier élément HTML {{HTMLElement("tfoot")}} enfant existant, le cas échéant, et l'insertion de la valeur donnée, si elle n'est pas `null`, en tant que dernier enfant. Par conséquent, définir `null` a le même effet que d'appeler {{DOMxRef("HTMLTableElement.deleteTFoot", "deleteTFoot()")}}. Si la valeur assignée n'est pas un {{DOMxRef("HTMLTableSectionElement")}} ou `null`, une {{JSxRef("TypeError")}} est levée&nbsp;; sinon, si ce n'est pas un élément HTML {{HTMLElement("tfoot")}} ou `null`, une `HierarchyRequestError` {{DOMxRef("DOMException")}} est levée.

## Exemples

```js
if (table.tFoot) {
  // Faire quelque-chose avec le tfoot
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableElement.caption")}}
- La propriété {{DOMxRef("HTMLTableElement.tBodies")}}
- La propriété {{DOMxRef("HTMLTableElement.tHead")}}
- La méthode {{DOMxRef("HTMLTableElement.createTFoot()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
