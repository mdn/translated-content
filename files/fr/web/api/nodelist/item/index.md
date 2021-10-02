---
title: NodeList.item()
slug: Web/API/NodeList/item
tags:
  - API
  - DOM
  - Liste
  - Méthodes
  - Noeuds
translation_of: Web/API/NodeList/item
---
{{APIRef("DOM")}}

Renvoie un noeud depuis une [`NodeList`](/en-US/docs/Web/API/NodeList) par l'index. Cette méthode ne lance pas d'exceptions tant que vous fournissez des arguments. Une valeur `null` est renvoyée si l'index est hors des limites et une `TypeError` est lancée si aucun argument n'est fourni.

## Syntaxe

    nodeItem = nodeList.item(index)

- `nodeList` est une `NodeList`. Elle est généralement obtenue à partir d'une autre propriété ou méthode DOM, telle que [childNodes](/en-US/docs/Web/API/Node/childNodes).
- `index` est l'index du noeud à chercher. L'index commence à zéro.
- `nodeItem` est le numéro d'`index` du noeud dans la `nodeList` retourné par la méthode `item`.

## Syntaxe alternative

JavaScript propose également une syntaxe semblable à un tableau pour obtenir un élément d'une liste de nœuds par index :

    nodeItem = nodeList[index]

## Exemple

```js
var tables = document.getElementsByTagName("table");
var firstTable = tables.item(1); // ou simplement tables[1] - renvoie le second tableau dans DOM
```

## Spécification

[DOM Level 1 Core: NodeList.item()](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-item)

[DOM Level 2 Core: NodeList.item()](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-844377136)

## Compatibilité des navigateurs

{{Compat("api.NodeList.item")}}
