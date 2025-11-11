---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetTop`** - свойство элемента доступно только для чтения, возвращает расстояние текущего элемента по отношению к верхней части {{domxref("HTMLelement.offsetParent","offsetParent")}} узла.

## Синтаксис

```js
topPos = element.offsetTop;
```

### Параметры

- `topPos` - `это количество пикселей на которые делается отступ сверху, отсносительно родительского элемента.`

## Пример

```js
var d = document.getElementById("div1");
var topPos = d.offsetTop;

if (topPos > 10) {
  // объект имеет отступ больше
  // чем 10 пикселей относительно своего родителя
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
