---
title: Node.normalize()
slug: Web/API/Node/normalize
translation_of: Web/API/Node/normalize
---

{{APIRef("DOM")}}

Метод **`Node.normalize()`** преобразует указанный узел и все его под-деревья в "нормализованный" вид. В нормализованном под-дереве нет ни пустых, ни смежных текстовых узлов.

## Синтаксис

```
element.normalize();
```

## Пример

```js
var wrapper = document.createElement("div");

wrapper.appendChild( document.createTextNode("Part 1 ") );
wrapper.appendChild( document.createTextNode("Part 2 ") );

// At this point, wrapper.childNodes.length === 2
// wrapper.childNodes[0].textContent === "Part 1 "
// wrapper.childNodes[1].textContent === "Part 2 "

wrapper.normalize();

// Now, wrapper.childNodes.length === 1
// wrapper.childNodes[0].textContent === "Part 1 Part 2 "
```

## Спецификация

- [DOM Level 2 Core: Node.normalize](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-normalize)

## Смотрите также

- [`Text.splitText`](/ru/docs/DOM/Text.splitText)
