---
title: Document.createRange
slug: Web/API/Document/createRange
---

{{APIRef("DOM")}}

Retourne un objet {{domxref("Range")}}.

## Syntaxe

```js
range = document.createRange();
```

`range` devient un objet {{domxref("Range")}}.

## Exemple

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## Notes

Une fois un objet `Range` créé, il est nécessaire de spécifier les limites de départ et de fin avant de pouvoir utiliser la plupart des méthodes.

## Spécification

- [DOM Level 2 Range: DocumentRange.createRange](https://www.w3.org/TR/2000/REC-DOM-Level-2-Traversal-Range-20001113/ranges.html#Level-2-DocumentRange-idl)
