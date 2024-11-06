---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
---

{{APIRef("Canvas API")}}

El método **`HTMLCanvasElement.getContext()`** retorna un contexto de dibujo en el lienzo, o {{jsxref("null")}} si el identificador del contexto no está soportado.

## Sintaxis

```
canvas.getContext(contextType, contextAttributes);
```

### Parámetros

- contextType

  - : Es una {{domxref("DOMString")}} que contiene el identificador del contexto que define el contexto de dibujo asociado a el lienzo. Los posibles valores son:

    - `"2d`", dando lugar a la creación de un objeto {{domxref("CanvasRenderingContext2D")}} que representa un contexto de renderizado de dos dimensiones.
    - `"webgl"` (o `"experimental-webgl"`) el cual creará un objeto {{domxref("WebGLRenderingContext")}} que representa un contexto de renderizado de tres dimensiones. Este contexto sólo está disponible en navegadores que implementan [WebGL](/es/docs/Web/WebGL) version 1 (OpenGL ES 2.0).
    - "`webgl2`" (o "`experimental-webgl2`") el cual creará un objeto {{domxref("WebGL2RenderingContext")}} que representa un contexto de renderizado de tres dimensiones. Este contexto sólo está disponible en navegadores que implementan [WebGL](/es/docs/Web/WebGL) version 2 (OpenGL ES 3.0). {{experimental_inline}}
    - `"bitmaprenderer"` el cuál creará un {{domxref("ImageBitmapRenderingContext")}} que únicamente provee funcionalidad para remplazar el contenido del lienzo con un {{domxref("ImageBitmap")}} dado.

    Nota: Los identificadores "`experimental-webgl`" o "`experimental-webgl2`" son usados en nuevas implementaciones de WebGL. Estas implementaciones no han logrado aprobar el conjunto de pruebas de conformidad o la situación de los controladores gráficos en la plataforma no es estable aun. [Khronos Group](https://www.khronos.org/) certifica las implementaciones de WebGL bajo ciertas [reglas de conformidad](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : Puedes usar varios atributos al momento de crear tu contexto de renderizado. Por ejemplo:

    ```js
    canvas.getContext("webgl", { antialias: false, depth: false });
    ```

    Atributos del contexto 2d:

    - **`alpha`**: Booleano que indica si el lienzo contiene canal alfa. Si es asignado falso, el naveagdor sabe que el fondo siempre es opaco, lo cual puede acelerar el dibujado de contenido transparente e imágenes.
    - {{non-standard_inline}} (Gecko únicamente) **`willReadFrequently`**: Booleano que indica si muchas operaciones de read-back están planeadas o no. Esto forzará el uso de software (en lugar de aceleración de hardware) y puede ahorrar memoria al llamar {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} constantemente. Esta opción solo está disponible si `gfx.canvas.willReadFrequently.enable` es verdadero(lo cual solo está asignado por defecto en B2G/Firefox OS).
    - {{non-standard_inline}} (Blink únicamente) **`storage`**: Cadena que indica si el almacenamiento es usado ("persistent" por defecto).

    Atributos del contexto WebGL:

    - **`alpha`**: Booleano que indica si el lienzo contiene un buffer alfa.
    - **`depth`**: Booleano que indica si el buffer de dibujo tiene un buffer de profundidad de al menos 16 bits.
    - **`stencil`**: Booleano que indica si el buffer de dibujo tiene un stencil de al menos 8 bits.
    - **`antialias`**: Booleano que indica si se debe aplicar anti-aliasing.
    - **`premultipliedAlpha`**: Booleano que indica que el compositor de páginas asumirá que el buffer de dibujo contiene colores con alfa premultiplicado.
    - **`preserveDrawingBuffer`**: Si es verdadero los buffers no se limpiarán y mantendrán sus valores hasta que el autor los limpie o los sobreescriba.
    - **`failIfMajorPerformanceCaveat`**: Booleano que indica si un contexto será creado si el rendimiento del sistema es bajo.

### Valor de retorno

Un {{domxref("RenderingContext")}} que puede ser:

- {{domxref("CanvasRenderingContext2D")}} para `"2d"`,
- {{domxref("WebGLRenderingContext")}} para`"webgl"` y `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} para `"webgl2"` y `"experimental-webgl2"`, o
- {{domxref("ImageBitmapRenderingContext")}} para `"bitmaprenderer"`.

Si _contextType_ no corresponde con un posible contexto de dibujo retorna null.

## Ejemplos

Dado este elemento {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Puedes obtener un contexto 2d del canvas con el código siguiente:

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log(ctx); // CanvasRenderingContext2D { ... }
```

Ahora tienes el [contexto de renderizado 2D](/es/docs/Web/API/CanvasRenderingContext2D) para un canvas y puedes dibujar en él.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- {{domxref("OffscreenCanvas.getContext()")}}
- Available rendering contexts: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}} and {{domxref("WebGL2RenderingContext")}} and {{domxref("ImageBitmapRenderingContext")}}.
