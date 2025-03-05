---
title: Element.clientWidth
slug: Web/API/Element/clientWidth
---

{{APIRef("DOM")}}

Свойство **`Element.clientWidth`** равно 0 для инлайн элементов и элементов без CSS; для всех остальных равняется ширине элемента в пикселях, включая padding, но исключая ширину рамки (border), внешние отступы (margin), и вертикальную полосу прокрутки (если она есть).

> [!NOTE]
> Это свойство округляет реальное значение до целого. Если вам нужно дробное значение, используйте {{ domxref("element.getBoundingClientRect()") }}.

## Синтаксис

```
var intElemClientWidth = element.clientWidth;
```

`intElemClientWidth` - целое число, соответствующее значению `clientWidth` элемента `element` в пикселях. Свойство `clientWidth` только для чтения.

## Пример

![Пример элемента с большими отступами, границей и полем. clientWidth — это внутренняя ширина элемента, включая его отступы и исключая поля, границы и вертикальную полосу прокрутки.](dimensions-client.png)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("HTMLElement.offsetWidth")}}
- {{domxref("Element.scrollWidth")}}
- [Determining the dimensions of elements](/ru/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
