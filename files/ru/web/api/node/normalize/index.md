---
title: Node.normalize()
slug: Web/API/Node/normalize
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

wrapper.appendChild(document.createTextNode("Part 1 "));
wrapper.appendChild(document.createTextNode("Part 2 "));

// At this point, wrapper.childNodes.length === 2
// wrapper.childNodes[0].textContent === "Part 1 "
// wrapper.childNodes[1].textContent === "Part 2 "

wrapper.normalize();

// Now, wrapper.childNodes.length === 1
// wrapper.childNodes[0].textContent === "Part 1 Part 2 "
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`Text.splitText`](/ru/docs/DOM/Text.splitText)
