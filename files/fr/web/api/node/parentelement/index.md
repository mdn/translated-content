---
title: Node.parentElement
slug: Web/API/Node/parentElement
---

{{APIRef("DOM")}}La propriété en lecture seule **`Node.parentElement`** renvoie le parent du noeud DOM ({{domxref("Element")}}) ou **`null`** si ce dernier n'a pas de parent ou si le parent n'est pas un {{domxref("Element")}} du DOM.

## Syntaxe

```js
parentElement = node.parentElement;
```

**`parentElement`** référence l'élément parent d'un nœud (**`node`**). C'est toujours un objet {{domxref("Element")}} du DOM ou `null`.

## Exemple

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Node.parentNode")}}
