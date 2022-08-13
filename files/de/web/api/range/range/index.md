---
title: Range()
slug: Web/API/Range/Range
translation_of: Web/API/Range/Range
---
{{ APIRef("DOM") }}{{seeCompatTable}}

Der **`Range()`** Konstrukteur gibt ein neu generiertes Objekt wieder, wessen Start und Ende das globale {{domxref("Document")}} Objekt ist.

## Syntax

    range = new Range()

## Beispiele

```js
range = new Range();
endNode = document.getElementsByTagName("p").item(3);
endOffset = document.getElementsByTagName("p").item(3).childNodes.length;
range.setEnd(endNode,endOffset);
```

## Spezifikationen

| Spezifikation                                                                | Status                           | Kommentar           |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#dom-range', 'Range.Range()')}} | {{Spec2('DOM WHATWG')}} | Initial definition. |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [The DOM interfaces index](/de/docs/DOM/DOM_Reference)
- [Document.createRange()](/de/docs/Web/API/Document/createRange)
