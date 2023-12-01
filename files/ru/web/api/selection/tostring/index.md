---
title: Selection.toString()
slug: Web/API/Selection/toString
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Метод **`Selection.toString()`** возвращает строку, содержащуюся в выделенном объекте, т.е. выделенный текст.

## Syntax

```
str = sel.toString()
```

### Return value

- _`str`_ — это строка, содержащаяся в выделении.

### Parameters

_None (отсутствуют)._

## Description

Этот метод возвращает выделенный текст.

В [JavaScript](en/JavaScript), этот метод вызывается автоматически, когда функция, которой он передаётся, требует строку:

```js
alert(window.getSelection()); // What is called
alert(window.getSelection().toString()); // What is actually being effectively called.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Selection")}}, the interface it belongs to.
