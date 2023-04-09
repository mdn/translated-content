---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
---

{{APIRef("Canvas API")}}

La interfaz **`HTMLCanvasElement`** provee propiedades y métodos para manipular la capa de presentación de los elementos de tipo canvas. La interfaz `HTMLCanvasElement` también hereda las propiedades y métodos de la interfaz {{domxref("HTMLElement")}} .

## Propiedades

_Hereda propiedades de la interfaz padre,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.height")}}
  - : Un entero positivo que se asocia al atributo HTML {{htmlattrxref("height", "canvas")}} del elemento {{HTMLElement("canvas")}} interpretada en píxeles CSS. Cuando el atributo no está especificado, o si este se inicializa a un valor inválido, como un negativo, el valor 150 es usado por defecto.
- {{domxref("HTMLCanvasElement.mozOpaque")}} {{non-standard_inline}}
  - : Un {{jsxref("Boolean")}} asociado al atributo HTML {{htmlattrxref("moz-opaque", "canvas")}} del elemento {{HTMLElement("canvas")}} . Proporciona al canvas una forma de saber si la transparencia será considerada un factor. Si el canvas conoce que no hay transparencia, el desempeño de renderezación será optimizado.
- {{domxref("HTMLCanvasElement.width")}}
  - : Un entero positivo asociado al atributo HTML {{htmlattrxref("width", "canvas")}} del elemento canvas {{HTMLElement("canvas")}} interpretado en píxeles CSS. Cuando el atributo no está especificado, o si se inicializa a un valor inválido, como un negativo, se utiliza el valor 300 por defecto.

## Métodos

_Herada métodos de la interfaz padre,_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLCanvasElement.captureStream()")}} {{experimental_inline}}
  - : Retorna un {{domxref("CanvasCaptureMediaStream")}} que es una captura de video en tiempo real, de la superficie del canvas.
- {{domxref("HTMLCanvasElement.getContext()")}}
  - : Retorna el contexto del dibujado del canvas, o bien null(nulo) si el ID de contexto no está soportado. Un contexto de dibujo, te permite dibujar sobre el canvas. Llamando al método getContext con el parámetro `"2d"` retorna un objeto {{domxref("CanvasRenderingContext2D")}} , mientras que el llamarlo con el parámetroca `"experimental-webgl"` (o `"webgl"`) retorna un objeto {{domxref("WebGLRenderingContext")}} . Este tipo de contexto sólo está disponible en navegadores que implementen [WebGL](/es/docs/Web/WebGL).
- {{domxref("HTMLCanvasElement.toDataURL()")}}
  - : Retorna una data-URL conteniendo una representación de la imagen en el formato especificado por el tipo de parámetro(png por defecto). La imagen de retorno se encuentra a una resolución de 96dpi.
- {{domxref("HTMLCanvasElement.toBlob()")}}
  - : Crea un objeto {{domxref("Blob")}} representando la imagen contenida en el canvas; este archivo puede ser cacheado en disco o bien almacenado en memoria, lo cual dependerá del "user-agent"(especificación del navegador).
- {{domxref("HTMLCanvasElement.mozGetAsFile()")}} {{non-standard_inline}} {{deprecated_inline}}

  - : Retorna un objeto {{domxref("File")}} representando una imagen contenida en el canvas; este archivo es del tipo memory-based, con su nombre especificado. Si el tipo no se especifica, el tipo usado por defecto es `image/png`.

    > **Nota:** Sólo puede ser invocado desde Chrome.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Elementos HTML implementando esta interfaz: {{HTMLElement("canvas")}}.
