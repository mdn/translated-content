---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
---

{{APIRef("Canvas API")}}

Метод **`HTMLCanvasElement.getContext()`** возвращает контекст рисования на холсте, или {{jsxref("null")}}, если идентификатор контекста не определён.

## Синтаксис

```
canvas.getContext(contextType, contextAttributes);
```

### Параметры

- contextType

  - : {{domxref("DOMString")}}, содержащий идентификатор контекста, определяющий контекст рисования, связанный с холстом. Возможные значения:

    - `"2d`", ведущий к созданию объекта {{domxref("CanvasRenderingContext2D")}}, представляющий двумерный контекст.
    - `"webgl"` (или `"experimental-webgl"`), который будет создавать объект {{domxref("WebGLRenderingContext")}}, представляющий трёхмерный контекст. Этот контекст доступен только в браузерах, которые реализуют {{domxref("WebGL")}} первой версии (OpenGL ES 2.0).
    - "`webgl2`" (или "`experimental-webgl2`"), который будет создавать объект {{domxref("WebGL2RenderingContext")}}, представляющий трёхмерный контекст. Этот контекст доступен только в браузерах, которые реализуют {{domxref("WebGL")}} второй версии (OpenGL ES 3.0). {{experimental_inline}}
    - `"bitmaprenderer",` который позволит создать {{domxref("ImageBitmapRenderingContext")}}, обеспечивающий только функции для замены содержимого холста с заданным {{domxref("ImageBitmap")}}.

    Примечание: Идентификаторы "`experimental-webgl`" или "`experimental-webgl2`" используются в новых реализациях WebGL. Эти реализации не достигли испытательного набора на соответствие или ситуация с графическими драйверами на платформе ещё не стабильна The [Khronos Group](https://www.khronos.org/) certifies WebGL implementations under certain [conformance rules](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : Вы можете использовать несколько атрибутов контекста при создании контекста рендеринга, например:

    ```js
    canvas.getContext("webgl", { antialias: false, depth: false });
    ```

    2d атрибуты контекста:

    - **`alpha`**: Логическое значение, означающее, есть ли у холста альфа-канал. Значение `false` говорит браузеру, что фон холста непрозрачный, что может ускорить рисование прозрачного содержимого и изображений.
    - {{non-standard_inline}} (Gecko only) **`willReadFrequently`**: Boolean that indicates whether or not a lot of read-back operations are planned. This will force the use of a software (instead of hardware accelerated) 2D canvas and can save memory when calling {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} frequently. This option is only available, if the flag `gfx.canvas.willReadFrequently.enable` is set to `true` (which, by default, is only the case for B2G/Firefox OS).
    - {{non-standard_inline}} (Blink only) **`storage`**: String that indicates which storage is used ("persistent" by default).

    Атрибуты контекста WebGL:

    - **`alpha`**: Boolean that indicates if the canvas contains an alpha buffer.
    - **`depth`**: Boolean that indicates that the drawing buffer has a depth buffer of at least 16 bits.
    - **`stencil`**: Boolean that indicates that the drawing buffer has a stencil buffer of at least 8 bits.
    - **`antialias`**: Boolean that indicates whether or not to perform anti-aliasing.
    - **`premultipliedAlpha`**: Boolean that indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha.
    - **`preserveDrawingBuffer`**: If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
    - **`failIfMajorPerformanceCaveat`**: Boolean that indicates if a context will be created if the system performance is low.

### Возвращаемое значение

{{domxref("RenderingContext")}}, который представляет собой

- {{domxref("CanvasRenderingContext2D")}} для `"2d"`,
- {{domxref("WebGLRenderingContext")}} для `"webgl"` и `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} для `"webgl2"` и `"experimental-webgl2"`, или
- {{domxref("ImageBitmapRenderingContext")}} для `"bitmaprenderer"`.

Если contextType не соответствует возможному контексту рисунка, то возвращается null.

## Примеры

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

You can get a `2d` context of the canvas with the following code:

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { ... }
```

Now you have the [2D rendering context](/ru/docs/Web/API/CanvasRenderingContext2D) for a canvas and you can draw within it.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- {{domxref("OffscreenCanvas.getContext()")}}
- Available rendering contexts: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}} and {{domxref("WebGL2RenderingContext")}} and {{domxref("ImageBitmapRenderingContext")}}.
