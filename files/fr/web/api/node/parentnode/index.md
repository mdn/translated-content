---
title: element.parentNode
slug: Web/API/Node/parentNode
tags:
  - API
  - DOM
  - Noeuds
  - Propriétés
  - parent
translation_of: Web/API/Node/parentNode
---
{{APIRef("DOM")}}

La propriété en lecture seule **parentNode** renvoie le parent du nœud spécifié dans l'arborescence de DOM.

## Syntaxe

    parentNode = node.parentNode

`parentNode` est l'élément parent du nœud courant. Le parent d'un élément est un nœud `Element`, un nœud `Document` ou un nœud `DocumentFragment`.

## Exemple

```js
if (node.parentNode) {
  // supprime un noeud  de l'arbre,
  // sauf s'il a déjà été supprimé
  node.parentNode.removeChild(node);
}
```

## Notes

Les [nœuds](/fr/docs/Web/API/Node/nodeType) `Document` et `DocumentFragment` ne peuvent jamais avoir de parent, alors `parentNode` retournera toujours `null`.

Il renvoie également `null` si le nœud vient d'être créé et n'est pas encore attaché à l'arbre.

## Compatibilité des navigateurs

{{Compat("api.Node.parentNode")}}

## Spécification

- [DOM Level 2 Core: Node.parentNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1060184317)
- [DOM Level 3 Core: Node.parentNode](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1060184317)

## Voir aussi

- {{Domxref("Node.firstChild")}}
- {{Domxref("Node.lastChild")}}
- {{Domxref("Node.childNodes")}}
- {{Domxref("Node.nextSibling")}}
- {{Domxref("Node.parentElement")}}
- {{Domxref("Node.previousSibling")}}
- {{Domxref("Node.removeChild")}}
