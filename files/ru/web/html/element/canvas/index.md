---
title: <canvas>
slug: Web/HTML/Element/canvas
---

{{HTMLSidebar}}

**HTML `<canvas>` Элемент** может быть использован для отрисовки графики через скрипты (обычно используется [JavaScript](/ru/docs/Web/JavaScript)). Например, его можно использовать для отрисовки графиков, делать композиции фото или даже выполнять анимации. Вы можете (и должны) дать альтернативное содержание внутри блока `<canvas>`. Этот контент будет рендерится в обоих браузерах, в старых которые не поддерживают canvas и в браузерах с отключённым JavaScript.

Больше статей о canvas [canvas topic page](/ru/docs/Web/API/Canvas_API).

| [Content categories](/ru/docs/Web/HTML/Content_categories) | [Flow content](/ru/docs/Web/HTML/Content_categories#flow_content), [phrasing content](/ru/docs/Web/HTML/Content_categories#phrasing_content), [embedded content](/ru/docs/Web/HTML/Content_categories#embedded_content), palpable content.                                                                                                    |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | Transparent но без [interactive content](/ru/docs/Web/HTML/Content_categories#interactive_content) descendants except(соглашаться?) для {{HTMLElement("a")}} элементы, {{HTMLElement("button")}} элементы, {{HTMLElement("input")}} элементы как [`type`](/ru/docs/Web/HTML/Element/input#type) атрибут is `checkbox`, `radio`, или `button`. |
| Tag omission                                               | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                                                                                                                                                                              |
| Permitted parent elements                                  | Any element that accepts [phrasing_content](/ru/docs/Web/HTML/Content_categories#phrasing_content).                                                                                                                                                                                                                                           |
| DOM interface                                              | {{domxref("HTMLCanvasElement")}}                                                                                                                                                                                                                                                                                                              |

## Атрибуты

Этот элемент включает [global attributes](/ru/docs/Web/HTML/Global_attributes).

- `height`
  - : Высота в координатном пространстве в CSS пикселях. По умолчанию 150.
- `moz-opaque` {{non-standard_inline}}
  - : Дай холсту знать будет ли фактором или нет полупрозрачность. Если холст знает что нет полупрозрачности, производительность рисования может быть оптимизирована.
- `width`
  - : Ширина в координатном пространстве в CSS пикселях. По умолчанию 300.

## Описание

### Обязательно `</canvas>` тег

В отличии от {{HTMLElement("img")}} элемента, {{HTMLElement("canvas")}} элемент **требует** закрытия тега (`</canvas>`).

### Определение размеров холста

Отображаемый размер холста может быть изменён используя stylesheet. Изображение масштабируется при рендеринге, чтобы соответствовать стилю размер. Если ваш рендеринг кажется искажённым, попытайтесь указать ваши атрибуты ширины и высоты точно в атрибутах `<canvas>`, и не используя CSS.

## Примеры

```html
<canvas id="canvas" width="300" height="300">
  Извините, ваш браузер нет поддерживает&lt;canvas&gt; элемент.
</canvas>
```

Если ваш холст не использует transparency, установите `moz-opaque` атрибут на canvas теге. Это информация может быть использована для оптимизации рендеринга. Однако, этот атрибут не был стандартизирован и работает только в браузерах основанных на движках рендеринга Mozilla .

```html
<canvas id="mycanvas" moz-opaque></canvas>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [MDN canvas portal](/ru/docs/Web/API/Canvas_API)
- [Canvas tutorial](/ru/docs/Web/API/Canvas_API/Tutorial)
- [Canvas cheat sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
- [Canvas-related demos](/ru/docs/Web/Demos_of_open_web_technologies)
- [Canvas introduction by Apple](https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html)
