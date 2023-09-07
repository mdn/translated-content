---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
---

{{APIRef("Canvas API")}}

O método **`HTMLCanvasElement.toDataURL()`** retorna uma [data URI](/pt-BR/docs/Web/HTTP/data_URIs), contendo uma representação da imagem no formato especificado pelo parâmetro `type` (por padrão, esse valor é [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)). A resolução da imagem retornada é de 96 dpi.

- Se a altura ou largura do canvas for `0`, será retornada a string `"data:,"`.
- Se o tipo solicitado não for `image/png`, mas o valor retornado começa com `data:image/png`, então o tipo da requisição não é suportado.
- O Chrome também suporta o tipo `image/webp`.

## Sintaxe

```
canvas.toDataURL(type, encoderOptions);
```

### Parâmetros

- `type` {{optional_inline}}
  - : Uma {{domxref("DOMString")}} indicando o formato da imagem. Por padrão, o formato definido é `image/png`.
- `encoderOptions` {{optional_inline}}
  - : Um {{jsxref("Number")}} entre `0` e `1`, indicando a qualidade da imagem solicitada pelo tipo `image/jpeg` ou `image/webp`.
    Se esse argumento for outro valor que não de `0` a `1`, então o valor padrão (`0.92)` será usado. Outros valores serão ignorados.

### Valor retornado

Uma {{domxref("DOMString")}} contendo a [data URI](/pt-BR/docs/Web/HTTP/data_URIs) solicitada.

## Exemplos

Dado este elemento {{HTMLElement("canvas")}}:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Você poderá capturar a data-URL do canvas com as seguintes linhas:

```js
var canvas = document.getElementById("canvas");
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Defindo a qualidade de imagens jpeg

```js
var fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Exemplo: Alterando imagens dinamicamente

Você poderá utilizar esta técnica em associação com os eventos do mouse para alterar dinamicamente uma imagem (escala de cinza vs. cor, neste exemplo):

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Description of my picture" />
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
  var aImages = document.getElementsByClassName("grayscale"),
    nImgsLen = aImages.length,
    oCanvas = document.createElement("canvas"),
    oCtx = oCanvas.getContext("2d");
  for (
    var nWidth, nHeight, oImgData, oGrayImg, nPixel, aPix, nPixLen, nImgId = 0;
    nImgId < nImgsLen;
    nImgId++
  ) {
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
      aPix[nPixel + 2] =
        aPix[nPixel + 1] =
        aPix[nPixel] =
          (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
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

## Especificações

| Specification                                                                                     | Status                   | Comment                                                                        |
| ------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "scripting.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName('HTML5 W3C')}}                 |
| {{SpecName('HTML5.1', "scripting-1.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}}   | {{Spec2('HTML5.1')}}     |                                                                                |
| {{SpecName('HTML5 W3C', "scripting-1.html#dom-canvas-todataurl", "HTMLCanvasElement.toDataURL")}} | {{Spec2('HTML5 W3C')}}   | Snapshot of the {{SpecName('HTML WHATWG')}} containing the initial definition. |

## Compatibilidade com navegadores

{{Compat("api.HTMLCanvasElement.toDataURL")}}

## Veja também

- A interface que a define, {{domxref("HTMLCanvasElement")}}.
- [Data URIs](/pt-BR/docs/Web/HTTP/data_URIs) na referência [HTTP](/pt-BR/docs/Web/HTTP).
