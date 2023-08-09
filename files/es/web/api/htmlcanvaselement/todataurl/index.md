---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
---

{{APIRef("Canvas API")}}

El método **`HTMLCanvasElement.toDataURL()`** devuelve un [data URI](/es/docs/Web/HTTP/data_URIs) el cual contiene una representación de la imagen en el formato especificado por el parámetro `type` (por defecto es [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). La imagen obtenida tendrá una resolución de 96 dpi.

- Si la altura o anchura del canvas es `0`, devuelve un string con `"data:,"`
- Si el tipo solicitado no es `image/png` pero el valor devuelto empieza por `data:image/png`, entonces el formato especificado no esta soportado.
- Chrome también soporta el tipo `image/webp`.

## Sintaxis

```
canvas.toDataURL(tipo, opcionesCodificación);
```

### Parámetros

- `tipo`{{optional_inline}}
  - : Un {{domxref("DOMString")}} indicando el formato de la imagen. El tipo por defecto es `image/png`.
- `opcionesCodificación`{{optional_inline}}
  - : Un {{jsxref("Number")}} entre `0` y `1` indicando la calidad de la imagen si el tipo solicitado es `image/jpeg` o `image/webp`.
    Si este argumento es cualquier otra cosa, se usa el valor por defecto de la imagen. El valor por defecto es `0.92`. Otros argumentos se ignoran.

### Valor devuelto

Un {{domxref("DOMString")}} que contiene el valor [data URI](/es/docs/Web/HTTP/data_URIs).

## Ejemplos

Dado un elemento {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Puedes obtener el data-URL del canvas con las siguientes líneas:

```js
var canvas = document.getElementById("canvas");
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Establecer la calidad de imagen con jpegs

```js
var fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Ejemplo: Cambiar imágenes dinámicamente

Se puede usar esta técnica junto con los eventos del mouse para cambiar las imágenes de manera dinámica (escala de grises versus color en este ejemplo):

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description of my picture" />
```

#### JavaScript

```
window.addEventListener('load', quitarColor);

function verImgEnColor() {
  this.style.display = 'none';
  this.nextSibling.style.display = 'inline';
}

function verImgEnGris() {
  this.previousSibling.style.display = 'inline';
  this.style.display = 'none';
}

function quitarColor() {
  var aImages = document.getElementsByClassName('escalagrises'),
      nImgsLen = aImages.length,
      oCanvas = document.createElement('canvas'),
      oCtx = oCanvas.getContext('2d');
  for (var nWidth, nHeight, oImgData, oGrayImg, nPixel, aPix, nPixLen, nImgId = 0; nImgId < nImgsLen; nImgId++) {
    var oColorImg = aImages[nImgId];
    nWidth = oColorImg.offsetWidth;
    nHeight = oColorImg.offsetHeight;
    oCanvas.width = nWidth;
    oCanvas.height = nHeight;
    oCtx.drawImage(oColorImg, 0, 0);
    oImgData = oCtx.getImageData(0, 0, nWidth, nHeight);
    aPix = oImgData.data;
    nPixLen = aPix.length;
    for (nPixel = 0; nPixel < nPixLen; nPixel += 4) {
      aPix[nPixel + 2] = aPix[nPixel + 1] = aPix[nPixel] = (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
    }
    oCtx.putImageData(oImgData, 0, 0);
    oGrayImg = new Image();
    oGrayImg.src = oCanvas.toDataURL();
    oGrayImg.onmouseover = verImgEnColor;
    oColorImg.onmouseout = verImgEnGris;
    oCtx.clearRect(0, 0, nWidth, nHeight);
    oColorImg.style.display = "none";
    oColorImg.parentNode.insertBefore(oGrayImg, oColorImg);
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La interfaz que lo define, {{domxref("HTMLCanvasElement")}}.
- [Data URIs](/es/docs/Web/HTTP/data_URIs) en la referencía [HTTP](/es/docs/Web/HTTP).
