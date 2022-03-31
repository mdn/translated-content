---
title: Node.parentElement
slug: Web/API/Node/parentElement
tags:
  - API
  - DOM
  - Noeuds
  - Propriétés
  - parent
translation_of: Web/API/Node/parentElement
---
{{APIRef("DOM")}}La propriété en lecture seule **`Node.parentElement`** renvoie le parent du noeud DOM ({{domxref("Element")}}) ou **`null`** si ce dernier n'a pas de parent ou si le parent n'est pas un {{domxref("Element")}} du DOM.

## Syntaxe

    parentElement = node.parentElement

**`parentElement`** référence l'élément parent d'un nœud (**`node`**). C'est toujours un objet {{domxref("Element")}} du DOM ou `null`.

## Exemple

```js
if (node.parentElement) {
    node.parentElement.style.color = "red";
}
```

## Compatibilité des navigateurs

Sur quelques navigateurs, la propriété `parentElement` est seulement définie sur les noeuds qui sont eux-mêmes des {{domxref("Element")}}. En particulier, elle n'est pas définie sur les noeuds texte.

{{Compat("api.Node.parentElement")}}

## Spécifications

- {{spec("http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#parent-element", "DOM Level 4: Node.parentElement", "WD")}}

## Voir aussi

- {{domxref("Node.parentNode")}}
