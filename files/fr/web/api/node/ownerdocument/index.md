---
title: "Node : propriété ownerDocument"
short-title: ownerDocument
slug: Web/API/Node/ownerDocument
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

La propriété en lecture seule **`ownerDocument`** de l'interface {{DOMxRef("Node")}} retourne l'objet document de niveau supérieur pour ce nœud.

## Valeur

Un objet {{DOMxRef("Document")}} qui est l'objet de niveau supérieur dans lequel tous les nœuds enfants sont créés.

Si cette propriété est utilisée sur un nœud qui est lui-même un document, la valeur est `null`.

## Exemples

```js
// Étant donné un nœud "p", obtient le premier enfant HTML de l'objet
// document

const d = p.ownerDocument;
const html = d.documentElement;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
