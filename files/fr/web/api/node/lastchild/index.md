---
title: element.lastChild
slug: Web/API/Node/lastChild
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Node.lastChild`** renvoie le dernier enfant du noeud. Si son parent est un élément, l'enfant est généralement un noeud élément, texte ou commentaire. Elle renvoie `null` s'il n'y a aucun enfant.

## Syntaxe

```js
var childNode = node.lastChild;
```

## Exemple

```js
var tr = document.getElementById("row1");
var corner_td = tr.lastChild;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
