---
title: Window.scrollY
slug: Web/API/Window/scrollY
---

{{APIRef("CSSOM View")}}

**`scrollY`** — свойство только для чтения интерфейса {{domxref("Window")}}. Возвращает число пикселей, на которое документ пролистали в данный момент по вертикали. В современных браузерах это значение является точным числом субпикселей, что означает отсутствие необходимости в полном значении количества пикселей. Вы можете получить количество пикселей, пролистанных по горизонтали с помощью свойства {{domxref("Window.scrollX", "scrollX")}}.

## Синтаксис

```
var y = window.scrollY
```

### Значение

Возвращаемое значение является числом с плавающей точкой двойной точности, показывающее количество пикселей в документе, которые были пролистаны на данный момент от начальной позиции, где положительное значение означает, что контент был пролистан наверх. Если документ был просматривается на устройстве с возможностью вычислять точное число субпикселей, то возвращаемое значение также является точным количеством субпикселей и может иметь десятичную часть. Если контент не был пролистан ни в одну из сторон по Y, то `scrollY` = 0.

> **Примечание:** Если вам нужно получить целочисленное значение, используйте {{jsxref("Math.round()")}} для округления.

Говоря технически, то `scrollY` возвращает Y-координату от верхнего края текущего окна просмотра ({{Glossary("viewport")}}). Если окна просмотра нет, то возвращаемое значение = 0.

## Пример

```js
// проверить и перейти ко второй странице
if (window.scrollY) {
  window.scroll(0, 0); // Обнулите позицию пролистывания на левый верхний угол документа.
}

window.scrollByPages(1);
```

## Примечания

Применяйте данное свойство для проверки, был ли пролистан документ, когда используете похожие функции для работы с пролистыванием, такие как {{domxref("window.scrollBy", "scrollBy()")}}, {{domxref("window.scrollByLines", "scrollByLines()")}}, or {{domxref("window.scrollByPages", "scrollByPages()")}}.

Свойство `pageYOffset` - другое название свойства `scrollY` :

```
window.pageYOffset == window.scrollY; // всегда верно
```

Для кросс-браузерной совместимости используйте `window.pageYOffset` вместо `window.scrollY`. **Кроме того**, старые версии Internet Explorer (<9) не поддерживают оба свойства. Для работы в Internet Explorer необходимо использовать нестандарные свойства. Пример полностью совместимого со всеми браузерами кода:

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

var x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
  ? document.documentElement.scrollLeft
  : document.body.scrollLeft;
var y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
  ? document.documentElement.scrollTop
  : document.body.scrollTop;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("window.scrollX")}}
