---
title: "Document: метод createRange()"
slug: Web/API/Document/createRange
l10n:
  sourceCommit: 73016bea54a98f70dc2aaad0724d0d421ef9839c
---

{{APIRef("DOM")}}

Метод **`Document.createRange()`** возвращает новый объект {{domxref("Range")}}.

## Синтаксис

```js-nolint
createRange()
```

### Параметры

Нет.

### Возвращаемое значение

Созданный объект {{domxref("Range")}}.

## Примеры

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## Примечания

После того, как `Range` создан, необходимо задать его граничные точки, прежде чем можно будет использовать большинство его методов.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
