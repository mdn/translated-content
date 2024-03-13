---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
---

{{APIRef("DOM")}}

**`Element.getElementsByClassName()`** метод возвращает объект {{domxref("HTMLCollection")}}, содержащий в себе все дочерние элементы, которые имеют заданные имена классов. Если вызван на объекте document, будут возвращены все элементы, содержащиеся в документе.

Так же, как метод {{domxref("Document.getElementsByClassName", "Document.getElementsByClassName()")}} действует на весь документ; это вернёт элементы, которые являются потомками корневого элемента, содержащие в себе указанные классы.

Syntax

```
var elements = element.getElementsByClassName(names);
```

- **elements** — {{ domxref("HTMLCollection") }} содержащий найденные элементы
- **names** — строка, содержащая в себе имена классов; имена разделяются пробелами
- _element_ — любой {{domxref("Element")}} в документе (в котором осуществляется выборка)

## Examples

Получить все элементы с классом test:

```js
element.getElementsByClassName("test");
```

Получить все элементы с классами test и red:

```js
element.getElementsByClassName("red test");
```

Получить все элементы с классом test, которые находятся в элементе с id main:

```js
document.getElementById("main").getElementsByClassName("test");
```

Мы так же можем использовать все методы из {{jsxref("Array.prototype")}} на любом {{ domxref("HTMLCollection") }} путём передачи `HTMLCollection` в метод как значение _this_. Так мы найдём все {{HTMLElement("div")}} элементы, которые имеют класс test:

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "div";
  },
);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
