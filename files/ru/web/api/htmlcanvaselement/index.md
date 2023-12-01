---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
---

{{APIRef("Canvas API")}}

Интерфейс **`HTMLCanvasElement`** предоставляет свойства и методы для управления расположением и представлением элементов canvas. Он также наследует свойства и методы интерфейса {{domxref("HTMLElement")}}.

## Свойства

_Наследуются от родителя,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : Положительное целое число, отражающее HTML-атрибут [`height`](/ru/docs/Web/HTML/Element/canvas#height) элемента {{HTMLElement("canvas")}} (воспринимается в пикселях CSS). Если атрибут не определён или имеет некорректное значение (например отрицательное), используется значение по умолчанию `— 150`.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}}
  - : Объект {{jsxref("Boolean")}}, отражающий HTML-атрибут [`moz-opaque`](/ru/docs/Web/HTML/Element/canvas#moz-opaque) элемента {{HTMLElement("canvas")}}. Сообщает холсту, будет ли присутствовать прозрачность. Если холсту известно, что прозрачность не используется, отрисовка может быть оптимизирована.
- {{domxref("HTMLCanvasElement.width")}}
  - : Положительное целое число, отражающее HTML-атрибут [`width`](/ru/docs/Web/HTML/Element/canvas#width) элемента {{HTMLElement("canvas")}} (воспринимается в пикселях CSS). Если атрибут не определён или имеет некорректное значение (например отрицательное), используется значение по умолчанию `— 300`.
- {{domxref("HTMLCanvasElement.mozPrintCallback")}}{{non-standard_inline}}
  - : Is a `function` that is Initially null, Web content can set this to a JavaScript function that will be called if the page is printed. This function can then redraw the canvas at a higher resolution that is suitable for the printer being used. [See this blog post.](https://blog.mozilla.org/labs/2012/09/a-new-way-to-control-printing-output/)

## Методы

_Наследуются от родителя,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : Возвращает {{domxref("CanvasCaptureMediaStream")}} — поток видео, которое захватывается в реальном времени с поверхности холста.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Возвращает связный с холстом контекст, который позволяет рисовать на холсте. Если context ID не поддерживается, возвращает null. Вызов getContext с параметром `"2d"` возвращает объект {{domxref("CanvasRenderingContext2D")}}, тогда так вызов с параметром `"experimental-webgl"` (или `"webgl"`) возвращает объект {{domxref("WebGLRenderingContext")}}. Этот контекст поддерживается только в браузерах, в которых реализован [WebGL](/ru/docs/Web/WebGL).
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Возвращает data-URL, который содержит представление картинки в формате. указанном в параметре `type` (по умолчанию `png`). Возвращаемая картинка имеет разрешение 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Создаёт объект {{domxref("Blob")}}, представляющий картинку, которая содержится в холсте. Этот файл может быть кеширован на диске или сохранён в памяти на усмотрение user agent.
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} {{experimental_inline}}
  - : Передаёт управление объекту {{domxref("OffscreenCanvas")}}, либо в main thread либо в worker.
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Возвращает объект {{domxref("File")}} представляющий картинку, которая содержится в холсте. This file is a memory-based file, with the specified `name`. Если тип не указан, используется `image/png`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("canvas")}}.
