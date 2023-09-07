---
title: HTMLElement.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
---

{{ APIRef("HTML DOM") }}

Свойство **`HTMLElement.offsetWidth`** возвращает ширину элемента. Как правило, `offsetWidth` — это значение, включающее горизонтальный отступ элемента, ширину вертикального скроллбара (если он есть) и CSS ширину.

## Синтаксис

```
var offsetWidth = element.offsetWidth;
```

`offsetWidth` — свойство только для чтения

> **Примечание:** Это свойство возвращает целочисленное значение. Если вам требуется дробное значение, используйте {{ domxref("element.getBoundingClientRect()") }}.

## Пример

![Image:Dimensions-offset.png](/@api/deki/files/186/=Dimensions-offset.png)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining the dimensions of elements](/ru/docs/Determining_the_dimensions_of_elements)
