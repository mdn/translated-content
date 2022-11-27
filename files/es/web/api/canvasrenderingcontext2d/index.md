---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
---

{{APIRef}}

La interfaz **`CanvasRenderingContext2D`** proporciona el contexto de renderizado 2D para la superficie de dibujo de un elemento {{ HTMLElement("canvas") }}.

Para obtener un objeto de esta interfaz, llama a {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} en un `<canvas>`, proporcionando "2d" como argumento:

```js
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
```

Una vez que tengas el contexto de renderizado 2D para un canvas, podrás dibujar en ella. Por ejemplo:

```js
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 55, 50);
```

Mira las propiedades y métodos en la barra lateral. El [tutorial de canvas](/es/docs/Web/API/Canvas_API/Tutorial) tiene más información, ejemplos y recursos también.

## Dibujando rectángulos

Hay 3 métodos que inmediatamente dibujan rectángulos en el bitmap.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Establece todos los píxeles del rectangulo definido por los puntos _(x, y)_ y tamaños _(ancho, alto)_ a negro transparente, borrando cualquier contenido previo.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Dibuja un rectángulo relleno en la posición _(x, y)_ cuyo tamaño está determinado por la anchura y la altura.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Dibuja un rectángulo que tiene como posición inicial _(x, y)_ con un ancho w y altura h sobre el canvas, utilizando el estilo de trazo actual.

## Dibujando texto

Los siguientes métodos se proporcionan para dibujar texto. Mira también el objeto {{domxref("TextMetrics")}} para propiedades de texto.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Dibuja (llena) un texto dado en una posición (x, y) dada.
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Dibuja (trazas) un texto dado en una posición (x, y) dada.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Devuelve el objeto {{domxref("TextMetrics")}}.

## Los estilos de línea

Los siguientes métodos y propiedades controlan como las líneas son dibujadas.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Ancho de líneas. Por defecto `1.0`
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Tipo de terminaciones en el final de las líneas. Posibles valores: `butt` (defecto), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Define el tipo de esquinas donde dos líneas se encuentran. Pislbes valores: `round`, `bevel`, `miter` (defecto).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Relación límite angular. Defecto `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Devuelve la matriz patrón de trazos actual que contiene un número de par de números no negativos.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Establece el patrón de trazos linea actual.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Especifica donde inicia una gama de instrumentos en una línea.

## Estilos de texto

Las siguientes propiedades control como el texto es presentado.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Ajuste de fuente. Valor por defecto `10px sans-serif`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Text alignment setting. Possible values: `start` (default), `end`, `left`, `right` or `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Baseline alignment setting. Possible values: `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Directionality. Possible values: `ltr, rtl`, `inherit` (default).

## Estilo del relleno y de los bordes

Fill styling es utilizado para estilizar los colores del relleno y los bordes de las formas.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Utilizado para dar color al relleno de las formas. Color por defecto `#000` (negro).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Utilizado para dar color al borde de las formas. Color por defecto `#000` (negro).

## Degradados y patrones

- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Creates a linear gradient along the line given by the coordinates represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Creates a radial gradient along the line given by the coordinates represented by the parameters.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Creates a pattern using the specified image (a {{domxref("CanvasImageSource")}}). It repeats the source in the directions specified by the repetition argument. This method returns a {{domxref("CanvasPattern")}}.

## Sombras

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Especifica el efecto de desenfoque. Predeterminado `0`
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Color de la sombra. Predeterminado totalmente transparente negro.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Distancia horizontal del desplazamiento de la sombra. Predeterminado 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Distancia vertical del desplazamiento de la sombra. Predeterminado 0.

## Paths

The following methods can be used to manipulate paths of objects.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Causes the point of the pen to move back to the start of the current sub-path. It tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Moves the starting point of a new sub-path to the **(x, y)** coordinates.
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Connects the last point in the subpath to the `x, y` coordinates with a straight line.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Adds a cubic Bézier curve to the path. It requires three points. The first two points are control points and the third one is the end point. The starting point is the last point in the current path, which can be changed using `moveTo()` before creating the Bézier curve.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Adds a quadratic Bézier curve to the current path.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Adds an arc to the path which is centered at _(x, y)_ position with radius _r_ starting at _startAngle_ and ending at _endAngle_ going in the given direction by _anticlockwise_ (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Adds an arc to the path with the given control points and radius, connected to the previous point by a straight line.
- {{domxref("CanvasRenderingContext2D.ellipse()")}} {{experimental_inline}}
  - : Adds an ellipse to the path which is centered at _(x, y)_ position with the radii _radiusX_ and _radiusY_ starting at _startAngle_ and ending at _endAngle_ going in the given direction by _anticlockwise_ (defaulting to clockwise).
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Creates a path for a rectangle at _position (x, y)_ with a size that is determined by _width_ and _height_.

## Drawing paths

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Fills the subpaths with the current fill style.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Strokes the subpaths with the current stroke style.
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : If a given element is focused, this method draws a focus ring around the current path.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}
  - : Scrolls the current path or a given path into the view.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Creates a clipping path from the current sub-paths. Everything drawn after `clip()` is called appears inside the clipping path only. For an example, see [Clipping paths](/es/docs/Web/API/Canvas_API/Tutorial/Compositing) in the Canvas tutorial.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Reports whether or not the specified point is contained in the current path.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Reports whether or not the specified point is inside the area contained by the stroking of a path.

## Transformations

Objects in the `CanvasRenderingContext2D` rendering context have a current transformation matrix and methods to manipulate it. The transformation matrix is applied when creating the current default path, painting text, shapes and {{domxref("Path2D")}} objects. The methods listed below remain for historical and compatibility reasons as {{domxref("SVGMatrix")}} objects are used in most parts of the API nowadays and will be used in the future instead.

- {{domxref("CanvasRenderingContext2D.currentTransform")}}
  - : Current transformation matrix ({{domxref("SVGMatrix")}} object).
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Adds a rotation to the transformation matrix. The angle argument represents a clockwise rotation angle and is expressed in radians.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Adds a scaling transformation to the canvas units by x horizontally and by y vertically.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Adds a translation transformation by moving the canvas and its origin x horzontally and y vertically on the grid.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multiplies the current transformation matrix with the matrix described by its arguments.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Resets the current transform to the identity matrix, and then invokes the `transform()` method with the same arguments.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}} {{experimental_inline}}
  - : Resets the current transform by the identity matrix.

## Compositing

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Alpha value that is applied to shapes and images before they are composited onto the canvas. Default `1.0` (opaque).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : With `globalAlpha` applied this sets how shapes and images are drawn onto the existing bitmap.

## Drawing images

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.

## Pixel manipulation

See also the {{domxref("ImageData")}} object.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Creates a new, blank {{domxref("ImageData")}} object with the specified dimensions. All of the pixels in the new object are transparent black.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Returns an {{domxref("ImageData")}} object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at _(sx, sy)_ and has an _sw_ width and _sh_ height.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Paints data from the given {{domxref("ImageData")}} object onto the bitmap. If a dirty rectangle is provided, only the pixels from that rectangle are painted.

## Image smoothing

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}
  - : Image smoothing mode; if disabled, images will not be smoothed if scaled.

## The canvas state

The `CanvasRenderingContext2D` rendering context contains a variety of drawing style states (attributes for line styles, fill styles, shadow styles, text styles). The following methods help you to work with that state:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Saves the current drawing style state using a stack so you can revert any change you make to it using `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Restores the drawing style state to the last element on the 'state stack' saved by `save()`.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : A read-only back-reference to the {{domxref("HTMLCanvasElement")}}. Might be {{jsxref("null")}} if it is not associated with a {{HTMLElement("canvas")}} element.

## Hit regions

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
  - : Adds a hit region to the canvas.
- {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}
  - : Removes the hit region with the specified `id` from the canvas.
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}
  - : Removes all hit regions from the canvas.

## Non-standard APIs

### Blink and WebKit

Most of these APIs are [deprecated and will be removed in the future](https://code.google.com/p/chromium/issues/detail?id=363198).

- {{non-standard_inline}} `CanvasRenderingContext2D.clearShadow()`
  - : Removes all shadow settings like {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.drawImageFromRect()`
  - : This is redundant with an equivalent overload of `drawImage`.
- {{non-standard_inline}} `CanvasRenderingContext2D.setAlpha()`
  - : Use {{domxref("CanvasRenderingContext2D.globalAlpha")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setCompositeOperation()`
  - : Use {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineWidth()`
  - : Use {{domxref("CanvasRenderingContext2D.lineWidth")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineJoin()`
  - : Use {{domxref("CanvasRenderingContext2D.lineJoin")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineCap()`
  - : Use {{domxref("CanvasRenderingContext2D.lineCap")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setMiterLimit()`
  - : Use {{domxref("CanvasRenderingContext2D.miterLimit")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setStrokeColor()`
  - : Use {{domxref("CanvasRenderingContext2D.strokeStyle")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setFillColor()`
  - : Use {{domxref("CanvasRenderingContext2D.fillStyle")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.setShadow()`
  - : Use {{domxref("CanvasRenderingContext2D.shadowColor")}} and {{domxref("CanvasRenderingContext2D.shadowBlur")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDash`
  - : Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDashOffset`
  - : Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitImageSmoothingEnabled`
  - : Use {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} instead.

### Blink only

- {{non-standard_inline}} `CanvasRenderingContext2D.getContextAttributes()`
  - : Inspired by the same `WebGLRenderingContext` method it returns an `Canvas2DContextAttributes` object that contains the attributes "storage" to indicate which storage is used ("persistent" by default) and the attribute "alpha" (`true` by default) to indicate that transparency is used in the canvas.
- {{non-standard_inline}} `CanvasRenderingContext2D.isContextLost()`
  - : Inspired by the same `WebGLRenderingContext` method it returns `true` if the Canvas context has been lost, or `false` if not.

### WebKit only

- {{non-standard_inline}} `CanvasRenderingContext2D.webkitBackingStorePixelRatio`
  - : The backing store size in relation to the canvas element. See [High DPI Canvas](http://www.html5rocks.com/en/tutorials/canvas/hidpi/).
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitGetImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitPutImageDataHD`
  - : Intended for HD backing stores, but removed from canvas specifications.

<!---->

### Gecko only

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.filter")}}
  - : CSS and SVG filters as Canvas APIs. Likely to be standardized in a new version of the specification.

#### Prefixed APIs

- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransform`
  - : Sets or gets the current transformation matrix, see {{domxref("CanvasRenderingContext2D.currentTransform")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransformInverse`
  - : Sets or gets the current inversed transformation matrix.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).
- {{non-standard_inline}} `CanvasRenderingContext2D.mozImageSmoothingEnabled`
  - : See {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDash`
  - : An array which specifies the lengths of alternating dashes and gaps. Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDashOffset`
  - : Specifies where to start a dash array on a line. Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozTextStyle`
  - : Introduced in in Gecko 1.9, deprecated in favor of the {{domxref("CanvasRenderingContext2D.font")}} property.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDrawText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.strokeText()")}} or {{domxref("CanvasRenderingContext2D.fillText()")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozMeasureText()`
  - : This method was introduced in Gecko 1.9 and is unimplemented starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.measureText()")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozPathText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozTextAlongPath()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.

#### Internal APIs (chrome-context only)

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.asyncDrawXULElement()")}}
  - : Renders a region of a XUL element into the `canvas`.
- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.drawWindow()")}}
  - : Renders a region of a window into the `canvas`. The contents of the window's viewport are rendered, ignoring viewport clipping and scrolling.
- {{non-standard_inline}} `CanvasRenderingContext2D.demote()`
  - : This causes a context that is currently using a hardware-accelerated backend to fallback to a software one. All state should be preserved.

### Internet Explorer

- {{non-standard_inline}} `CanvasRenderingContext2D.msFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat("api.CanvasRenderingContext2D")}}

## See also

- {{domxref("HTMLCanvasElement")}}
