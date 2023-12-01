---
title: Элемент.scrollTop
slug: Web/API/Element/scrollTop
---

{{ APIRef("DOM") }}

`Свойство scrollTop` считывает или устанавливает количество пикселей, прокрученных от верха элемента. `scrollTop` измеряет дистанцию от верха элемента до верхней точки видимого контента. Когда контент элемента не создаёт вертикальную прокрутку, его `scrollTop` равно `0`.

## Синтаксис

```
//Получаем количество прокрученных пикселей
var  intElemScrollTop = someElement.scrollTop;
```

_После выполнения этого кода, _`intElemScrollTop` - целое число пикселей, на которое контент {{domxref("element")}} был прокручен от верха.

```
// Устанавливаем количество прокрученных пикселей
element.scrollTop = intValue;
```

`scrollTop` может быть любым целым числом, с определёнными оговорками:

- Если элемент не может быть прокручен (т.е. у него нет переполнения или если элемент **не прокручиваем**), `scrollTop` устанавливается в `0`.
- Если значение меньше `0`, `scrollTop` устанавливается в `0`.
- Если установлено значение больше, чем максимум прокручиваемого контента, `scrollTop` устанавливается в максимум.

## Пример

padding-top

Бла-бла-бла, бла-бла-бла.Бла-бла-бла, бла-бла-бла.Бла-бла-бла, бла-бла-бла.

Кот Василий ел картошку.Бла-бла-бла, бла-бла-бла.Бла-бла-бла, бла-бла-бла.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

![Image:scrollTop.png](/@api/deki/files/842/=ScrollTop.png)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Ссылки

- [W3C Draft CSSOM View Module](http://dev.w3.org/csswg/cssom-view/#dom-element-scrolltop)
- [MSDN's scrollTop definition](<http://msdn.microsoft.com/en-us/library/ms534618(VS.85).aspx>)
- [MSDN's Measuring Element Dimension and Location](<http://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
