---
title: Range.collapsed
slug: Web/API/Range/collapsed
---

{{ APIRef("DOM") }}

Доступное только для чтения свойство **`Range.collapsed`** возвращает флаг {{domxref("Boolean")}}, который указывает, в одной ли и той же позиции находятся начало и конец диапазона {{domxref("Range")}}. Оно возвращает `true`, если начало и конец граничных точек диапазона {{domxref("Range")}} являются одной и той же точкой в DOM, `false` – в противном случае.

Свёрнутый диапазон {{domxref("Range")}} является пустым, не имеет содержимого, определяет единую точку в древе DOM. Для того, чтобы свернуть диапазон, смотрите метод {{domxref("Range.collapse()")}}.

## Syntax

```
isCollapsed = range.collapsed;
```

## Example

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
isCollapsed = range.collapsed;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/ru/docs/DOM/DOM_Reference)
