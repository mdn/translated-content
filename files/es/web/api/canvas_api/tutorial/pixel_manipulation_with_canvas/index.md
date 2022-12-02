---
title: Pixel manipulation with canvas
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
original_slug: Web/Guide/HTML/Canvas_tutorial/Pixel_manipulation_with_canvas
---

{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}

Hasta ahora, no habíamos mirado los píxeles reales de nuestro _canvas_. Con el objeto `ImageData`, puedes leer y escribir directamente un _array_ de datos para manipular píxeles.

También veremos cómo se puede controlar el suavizado de la imagen (antialiasing) y cómo guardar imágenes de tu _canvas_.

## El objeto `ImageData`

El objeto {{domxref("ImageData")}} representa los datos pixelados subyacentes de un área de un objeto lienzo. Contiene los siguientes atributos de sólo lectura:

- `width`
  - : El ancho de la imagen en píxeles.
- `height`
  - : La altura de la imagen en píxeles.
- `data`
  - : Un objeto {{jsxref("Uint8ClampedArray")}} que representa un array unidimensional, contiene información en formato RGBA, con valores desde `0` hasta `255` (incluído).

La propiedad `data` devuelve un {{jsxref("Uint8ClampedArray")}}, al que se puede acceder para ver los datos originales del pixel; cada pixel está representado por cuatro valores (rojo, verde, azul, y alfa, en ese orden; esto es, formato "RGBA"). Cada componente de color se representa con un valor entero entre 0 y 255. Dentro del array, cada componente ocupa un índice consecutivo, comenzando con 0 desde el punto superior izquierdo, continuando de izquierda a derecha y de arriba hacia abajo, a través del array.

El {{jsxref("Uint8ClampedArray")}} contiene `alto` × `ancho` × 4 bytes de datos, con valores de índice en el rango entre 0 y (`alto` × `ancho` × 4)-1.

Por ejemplo, para leer el valor del componente azul del pixel en la columna 200, fila 50 de una imagen, deberías hacer lo siguiente:

blueComponent = imageData.data\[((50 \* (imageData.width \* 4)) + (200 \* 4)) + 2];

Si se le da un conjunto de coordenadas (X e Y), puede que termine haciendo algo así:

```js
var xCoord = 50;
var yCoord = 100;
var canvasWidth = 1024;

function getColorIndicesForCoord(x, y, width) {
  var red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
}

var colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);

var redIndex = colorIndices[0];
var greenIndex = colorIndices[1];
var blueIndex = colorIndices[2];
var alphaIndex = colorIndices[3];

var redForCoord = imageData.data[redIndex];
var greenForCoord = imageData.data[greenIndex];
var blueForCoord = imageData.data[blueIndex];
var alphaForCoord = imageData.data[alphaIndex];
```

O, en ES6 sería algo así:

```js
const xCoord = 50;
const yCoord = 100;
const canvasWidth = 1024;

const getColorIndicesForCoord = (x, y, width) => {
  const red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
};

const colorIndices = getColorIndicesForCoord(xCoord, yCoord, canvasWidth);

const [redIndex, greenIndex, blueIndex, alphaIndex] = colorIndices;
```

You may also access the size of the pixel array in bytes by reading the `Uint8ClampedArray.length` attribute:

```js
var numBytes = imageData.data.length;
```

## Creando un objeto `ImageData`

Para crear un objeto nuevo y vacío tipo `ImageData`, debes usar el método {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}}. Hay dos versiones del método `createImageData()`:

```js
var myImageData = ctx.createImageData(width, height);
```

Esto crea un nuevo objeto `ImageData` con las dimensiones especificadas. Todos los pixels tienen valor correspondiente a negro - transparente (0,0,0,0).

También puedes crear un nuevo objeto `ImageData` con las mismas dimensiones que otro objeto, especificado por `anotherImageData`. Los píxels del nuevo objeto tienen valor negro - transparente. **¡Esto no es una copia de los datos de la imagen!**

```js
var myImageData = ctx.createImageData(anotherImageData);
```

## Getting the pixel data for a context

To obtain an `ImageData` object containing a copy of the pixel data for a canvas context, you can use the `getImageData()` method:

```js
var myImageData = ctx.getImageData(left, top, width, height);
```

This method returns an `ImageData` object representing the pixel data for the area of the canvas whose corners are represented by the points (`left`, `top`), (`left+width`, `top`), (`left`, `top+height`), and (`left+width`, `top+height`). The coordinates are specified in canvas coordinate space units.

> **Nota:** Any pixels outside the canvas are returned as transparent black in the resulting `ImageData` object.

This method is also demonstrated in the article [Manipulating video using canvas](/es/docs/Web/API/Canvas_API/Manipulating_video_using_canvas).

### A color picker

In this example we are using the [getImageData()](/es/docs/Web/API/CanvasRenderingContext2D/getImageData)method to display the color under the mouse cursor. For this, we need the current position of the mouse with `layerX` and `layerY`, then we look up the pixel data on that position in the pixel array that [getImageData()](/es/docs/Web/API/CanvasRenderingContext2D/getImageData) provides us. Finally, we use the array data to set a background color and a text in the `<div>` to display the color.

```html hidden
<canvas id="canvas" width="300" height="227" style="float:left"></canvas>
<div id="color" style="width:200px;height:50px;float:left"></div>
```

```js
var img = new Image();
img.src = 'rhino.jpg';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};
var color = document.getElementById('color');
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  color.style.background =  rgba;
  color.textContent = rgba;
}
canvas.addEventListener('mousemove', pick);
```

{{ EmbedLiveSample('A_color_picker', 610, 240) }}

## Painting pixel data into a context

You can use the[putImageData()](/es/docs/Web/API/CanvasRenderingContext2D/putImageData)method to paint pixel data into a context:

```js
ctx.putImageData(myImageData, dx, dy);
```

The `dx` and `dy` parameters indicate the device coordinates within the context at which to paint the top left corner of the pixel data you wish to draw.

For example, to paint the entire image represented by `myImageData` to the top left corner of the context, you can simply do the following:

```js
ctx.putImageData(myImageData, 0, 0);
```

### Grayscaling and inverting colors

In this example we iterate over all pixels to change their values, then we put the modified pixel array back to the canvas using [putImageData()](/es/docs/Web/API/CanvasRenderingContext2D/putImageData). The invert function simply subtracts each color from the max value 255. The grayscale function simply uses the average of red, green and blue. You can also use a weighted average, given by the formula `x = 0.299r + 0.587g + 0.114b`, for example. See [Grayscale](http://en.wikipedia.org/wiki/Grayscale) on Wikipedia for more information.

```html hidden
<canvas id="canvas" width="300" height="227"></canvas>
<div>
  <input id="grayscalebtn" value="Grayscale" type="button">
  <input id="invertbtn" value="Invert" type="button">
</div>
```

```js
var img = new Image();
img.src = 'rhino.jpg';
img.onload = function() {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  var invert = function() {
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var grayscale = function() {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var invertbtn = document.getElementById('invertbtn');
  invertbtn.addEventListener('click', invert);
  var grayscalebtn = document.getElementById('grayscalebtn');
  grayscalebtn.addEventListener('click', grayscale);
}
```

{{ EmbedLiveSample('Grayscaling_and_inverting_colors', 330, 270) }}

## Zooming and anti-aliasing

With the help of the {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} method, a second canvas and the {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} property, we are able to zoom into our picture and see the details.

We get the position of the mouse and crop an image of 5 pixels left and above to 5 pixels right and below. Then we copy that one over to another canvas and resize the image to the size we want it to. In the zoom canvas we resize a 10×10 pixel crop of the original canvas to 200×200.

```js
zoomctx.drawImage(canvas,
                  Math.abs(x - 5), Math.abs(y - 5),
                  10, 10, 0, 0, 200, 200);
```

Because anti-aliasing is enabled by default, we might want to disable the smoothing to see clear pixels. You can toggle the checkbox to see the effect of the `imageSmoothingEnabled` property (which needs prefixes for different browsers).

###### Zoom example

```html hidden
<canvas id="canvas" width="300" height="227"></canvas>
<canvas id="zoom" width="300" height="227"></canvas>
<div>
<label for="smoothbtn">
  <input type="checkbox" name="smoothbtn" checked="checked" id="smoothbtn">
  Enable image smoothing
</label>
</div>
```

```js
var img = new Image();
img.src = 'rhino.jpg';
img.onload = function() {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var zoomctx = document.getElementById('zoom').getContext('2d');

  var smoothbtn = document.getElementById('smoothbtn');
  var toggleSmoothing = function(event) {
    zoomctx.imageSmoothingEnabled = this.checked;
    zoomctx.mozImageSmoothingEnabled = this.checked;
    zoomctx.webkitImageSmoothingEnabled = this.checked;
    zoomctx.msImageSmoothingEnabled = this.checked;
  };
  smoothbtn.addEventListener('change', toggleSmoothing);

  var zoom = function(event) {
    var x = event.layerX;
    var y = event.layerY;
    zoomctx.drawImage(canvas,
                      Math.abs(x - 5),
                      Math.abs(y - 5),
                      10, 10,
                      0, 0,
                      200, 200);
  };

  canvas.addEventListener('mousemove', zoom);
}
```

{{ EmbedLiveSample('Zoom_example', 620, 490) }}

## Guardando las imágenes

The {{domxref("HTMLCanvasElement")}} provides a `toDataURL()` method, which is useful when saving images. It returns a [data URI](/es/docs/Web/HTTP/data_URIs) containing a representation of the image in the format specified by the `type` parameter (defaults to [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). The returned image is in a resolution of 96 dpi.

- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}
  - : Default setting. Creates a PNG image.
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}
  - : Creates a JPG image. Optionally, you can provide a quality in the range from 0 to 1, with one being the best quality and with 0 almost not recognizable but small in file size.

Once you have generated a data URI from you canvas, you are able to use it as the source of any {{HTMLElement("image")}} or put it into a hyper link with a [download attribute](/es/docs/Web/HTML/Element/a#attr-download) to save it to disc, for example.

You can also create a {{domxref("Blob")}} from the canvas.

- {{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(callback, type, encoderOptions)")}}
  - : Creates a `Blob` object representing the image contained in the canvas.

## See also

- {{domxref("ImageData")}}
- [Manipulating video using canvas](/es/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Canvas, images and pixels – by Christian Heilmann](https://codepo8.github.io/canvas-images-and-pixels/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}
