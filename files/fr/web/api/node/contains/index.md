---
title: Node.contains
slug: Web/API/Node/contains
tags:
  - API
  - DOM
  - Filiation
  - Méthodes
  - Noeuds
translation_of: Web/API/Node/contains
---
{{APIRef("DOM")}}La méthode **`Node.contains()`** renvoie une valeur {{jsxref("Boolean")}} (_booléenne_) indiquant si un nœud est un descendant d'un nœud donné, c'est-à-dire le nœud lui-même, l'un de ses enfants directs ({{domxref("Node.childNodes", "childNodes")}}), l'un des enfants directs des enfants, et ainsi de suite.

## Syntaxe

    node.contains( otherNode )

## Exemple

Cette fonction vérifie si un élément est dans le corps de la page. Comme `contains` est inclusif, déterminer si le corps est contenu en lui-même n'est pas le but de `isInPage,` donc ce cas renvoie `false`.

```js
function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}
```

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("DOM WHATWG", "#dom-node-contains", "Node.contains()")}} | {{Spec2("DOM WHATWG")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Node.contains")}}

## Voir aussi

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
