---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
tags:
  - API
  - Canvas
  - DataURI erstellen
  - HTMLCanvasElement
  - Method
  - Methode(2)
  - Referenz
translation_of: Web/API/HTMLCanvasElement/toDataURL
---
{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.toDataURL()`**-Methode gibt eine Repräsentation des Bildes als [data URI](/de/docs/Web/HTTP/data_URIs) zurück. Das gewünschte Format wird mit den angegebenen Parametern definiert (standardmäßig [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). Das zurückgegebene Bild besitzt eine Auflösung von 96 dpi.

- Wenn die Höhe oder die Breite des Canvas 0 ist, wird der String `"data:,"` zurückgegeben.
- Wenn die Art der Anfrage nicht `image/png` ist, aber der zurückgegebene Wert mit `data:image/png` beginnt, dann wird die Anfrage nicht unterstützt.
- Chrome unterstützt außerdem den Typ `image/webp`.

## Syntax

    canvas.toDataURL(type, encoderOptions);

### Parameter

- `type` {{optional_inline}}
  - : Ein Parameter vom Typ {{domxref("DOMString")}} bestimmt das Bild-Format. Der Standard type ist `image/png`.
- `encoderOptions` {{optional_inline}}
  - : Ein Parameter vom Typ {{jsxref("Number")}} zwischen `0` und `1` gibt die Bildqualität an, wenn der Anfragetyp `image/jpeg`oder `image/webp ist`.
    Wenn das Argument irgend etwas anderes enthält, wird der Standardwert für die Bildqualität verwendet. Der Standardwert liegt bei `0.92`. Andere Argumente werden ignoriert.

### Rückgabewerte

Ein Rückgabewert vom Typ {{domxref("DOMString")}} beinhaltet die angefragte [data URI](/de/docs/Web/HTTP/data_URIs).

## Beispiele

Es ist folgendes {{HTMLElement("canvas")}} Element gegeben:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Mit den folgenden Zeilen erhalten Sie die data-URL des Canvas:

```js
var canvas = document.getElementById("canvas");
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Die Bildqualität für jpegs einstellen

```js
var fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Beispiel: Dynamisches Ändern von Bildern

Sie können diese Technik in Verbindung mit Maus-Events nutzen, um dynamisch Bilder abzuändern (in diesem Beispiel schwarz-weiß und farbig):

#### HTML

```html
<img class="schwarz-weiss" src="myPicture.png" alt="Beschreibung meines Bildes" />
```

#### JavaScript

```js
window.addEventListener("load", removeColors);

function showColorImg() {
  this.style.display = "none";
  this.nextSibling.style.display = "inline";
}

function showGrayImg() {
  this.previousSibling.style.display = "inline";
  this.style.display = "none";
}

function removeColors() {
  var aImages = document.getElementsByClassName("schwarz-weiss"),
      nImgsLen = aImages.length,
      oCanvas = document.createElement("canvas"),
      oCtx = oCanvas.getContext("2d");
  for (var nWidth, nHeight, oImgData, oGrayImg, nPixel, aPix, nPixLen, nImgId = 0; nImgId < nImgsLen; nImgId++) {
    oColorImg = aImages[nImgId];
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
    oGrayImg.onmouseover = showColorImg;
    oColorImg.onmouseout = showGrayImg;
    oCtx.clearRect(0, 0, nWidth, nHeight);
    oColorImg.style.display = "none";
    oColorImg.parentNode.insertBefore(oGrayImg, oColorImg);
  }
}
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                           | Kommentare                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML WHATWG')}} | Keine Änderungen seit letztem Schnappschuss, {{SpecName('HTML5 W3C')}}               |
| {{SpecName('HTML5.1', "scripting-1.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML5.1')}}     |                                                                                             |
| {{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML5 W3C')}}     | Schnappschuss von {{SpecName('HTML WHATWG')}} beinhaltet ursprüngliche Definition. |

## Browser-Kompatiblität

{{Compat}}

## Schauen Sie auch unter

- Das Interface definiert, {{domxref("HTMLCanvasElement")}}.
- [Data URIs](/de/docs/Web/HTTP/data_URIs) in der [HTTP](/de/docs/Web/HTTP) Referenz.
