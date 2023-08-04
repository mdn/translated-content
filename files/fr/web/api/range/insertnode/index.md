---
title: Range.insertNode()
slug: Web/API/Range/insertNode
---

{{ApiRef("DOM")}}

La méthode **`Range.insertNode()`** insère un nœud au début du {{domxref("Range")}}.

Le nouveau nœud est inséré au point de départ du `Range`. Si le nouveau nœud est sur le point d'être ajouté à un {{domxref("Node")}} texte, ce `Node` est coupé en deux au point d'insertion, et l'insertion se fait entre les deux nœuds texte.

Si le nouveau nœud est un fragment de document, les enfants du fragment sont insérés à la place.

## Syntaxe

```js
range.insertNode(newNode);
```

### Paramètres

- _newNode_
  - : Le {{domxref("Node")}} à insérer au début du `range`.

## Exemple

```js
range = document.createRange();
newNode = document.createElement("p");
newNode.appendChild(document.createTextNode("New Node Inserted Here"));
range.selectNode(document.getElementsByTagName("div").item(0));
range.insertNode(newNode);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'index des interfaces DOM](/fr/docs/Web/API/Document_Object_Model)
