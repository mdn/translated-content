---
title: "Node : propriété parentNode"
short-title: parentNode
slug: Web/API/Node/parentNode
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

La propriété en lecture seule **`parentNode`** de l'interface {{DOMxRef("Node")}} retourne le parent du nœud défini dans l'arborescence DOM.

Les [nœuds](/fr/docs/Web/API/Node/nodeType) `Document` et `DocumentFragment` ne peuvent jamais avoir de parent, donc `parentNode` retourne toujours `null`.
Il retourne également `null` si le nœud vient d'être créé et n'est pas encore attaché à l'arbre. {{DOMxRef("Node.parentElement")}}, en revanche, ne retourne que des nœuds `Element`.

## Valeur

Un objet {{DOMxRef("Node")}} qui est le parent du nœud actuel. Le parent d'un élément est un nœud `Element`, un nœud `Document` ou un nœud `DocumentFragment`.

## Exemples

### Utiliser `parentNode`

Cet exemple supprime un nœud de l'arbre, sauf s'il n'est pas déjà dans l'arbre.

```js
if (noeud.parentNode) {
  noeud.parentNode.removeChild(noeud);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.firstChild")}}
- La propriété {{DOMxRef("Node.lastChild")}}
- La propriété {{DOMxRef("Node.childNodes")}}
- La propriété {{DOMxRef("Node.nextSibling")}}
- La propriété {{DOMxRef("Node.parentElement")}}
- La propriété {{DOMxRef("Node.previousSibling")}}
- La propriété {{DOMxRef("Node.removeChild")}}
