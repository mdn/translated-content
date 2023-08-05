---
title: Element.clientLeft
slug: Web/API/Element/clientLeft
---

{{ APIRef("DOM") }}Ширина от левого края элемента в пикселях. При наличии overflow заключает в себя ширину от вертикального scrollbar для письма справа налево.

`clientLeft` не включает в себя ни левый padding ни margin с той же стороны. `clientLeft` только для чтения.

[Gecko](en/Gecko)-based applications support `clientLeft` starting with Gecko 1.9 ([Firefox 3](en/Firefox_3), implemented in {{ Bug(111207) }}). This property is not supported in Firefox 2 and earlier.

Когда [`layout.scrollbar.side`](http://kb.mozillazine.org/Layout.scrollbar.side) значение установлено от 1 до 3 и направление текста справа налево, **то вертикальный scrollbar будет спозиционирован слева** и как следствие будет вычислен clientLeft.

> **Примечание:** Это свойство округлит значение к целому числу. Если нужно дробное значение используйте {{ domxref("element.getBoundingClientRect()") }}.

## Syntax

```
var left = element.clientLeft;
```

## Example

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
