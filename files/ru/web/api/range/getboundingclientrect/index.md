---
title: Range.getBoundingClientRect
slug: Web/API/Range/getBoundingClientRect
---

{{ ApiRef("Range") }}{{SeeCompatTable}}

Метод **`Range.getBoundingClientRect()`** возвращает объект {{ domxref("ClientRect") }}, соответствующий фрагменту документа, на основе которого создан объект Range; это прямоугольник, непосредственно обрамляющий объединение прямоугольников для каждого элемента фрагмента документа.

## Синтаксис

```
boundingRect = range.getBoundingClientRect()
```

## Пример

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
rect = range.getBoundingClientRect();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [The DOM interfaces index](/ru/docs/DOM/DOM_Reference)
