---
title: "HTMLTableElement : propriété tHead"
short-title: tHead
slug: Web/API/HTMLTableElement/tHead
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

La propriété **`tHead`** de l'interface {{DOMxRef("HTMLTableElement")}} représente le premier élément {{HTMLElement("thead")}} enfant de l'élément {{HTMLElement("table")}} donné, ou `null` s'il n'existe pas un tel élément.

## Valeur

Un objet {{DOMxRef("HTMLTableSectionElement")}} (qui est toujours un `thead`) ou `null`.

Cette propriété peut être assignée, ce qui entraîne la suppression du premier élément HTML {{HTMLElement("thead")}} enfant existant, le cas échéant, et l'insertion de la valeur donnée, si elle n'est pas `null`, juste avant le premier enfant qui n'est ni un {{HTMLElement("caption")}} ni un {{HTMLElement("colgroup")}}, ou en tant que dernier enfant s'il n'existe pas un tel élément. Par conséquent, définir `null` a le même effet que d'appeler {{DOMxRef("HTMLTableElement.deleteTHead", "deleteTHead()")}}. Si la valeur assignée n'est pas un {{DOMxRef("HTMLTableSectionElement")}} ou `null`, une {{JSxRef("TypeError")}} est levée&nbsp;; sinon, si ce n'est pas un élément HTML {{HTMLElement("thead")}} ou `null`, une `HierarchyRequestError` {{DOMxRef("DOMException")}} est levée.

## Exemples

```js
if (table.tHead) {
  // Faire quelque-chose avec le thead
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableElement.caption")}}
- La propriété {{DOMxRef("HTMLTableElement.tBodies")}}
- La propriété {{DOMxRef("HTMLTableElement.tFoot")}}
- La méthode {{DOMxRef("HTMLTableElement.createTHead()")}}
- La méthode {{DOMxRef("HTMLTableElement.deleteTHead()")}}
