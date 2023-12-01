---
title: Selection.getRangeAt()
slug: Web/API/Selection/getRangeAt
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Метод **`Selection.getRangeAt()`** возвращает объект диапазона, который представляет один из диапазонов, выделенного на данный момент.

## Синтаксис

```
range = sel.getRangeAt(index)
```

### Параметры

- _`range`_
  - : Объект {{domxref("Range")}}, который будет возвращён.
- _`index`_
  - : Индекс диапазона, начинающийся с нуля, который необходимо вернуть. Отрицательное значение или значение выше или равное {{domxref("Selection.rangeCount")}} приведёт к ошибке.

## Примеры

```js
var ranges = [];

sel = window.getSelection();

for (var i = 0; i < sel.rangeCount; i++) {
  ranges[i] = sel.getRangeAt(i);
}
/* Каждый элемент в массиве диапазонов является
 * объектом диапазона, который представляет
 * один из диапазонов текущего выделения */
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Selection")}}, интерфейс, к которому принадлежит метод.
- [Tree Selection](/ru/docs/XUL_Tutorial/Tree_Selection) (для метода `getRangeAt()` в интерфейсе `nsITreeSelection`)
