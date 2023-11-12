---
title: ImageCapture
slug: Web/API/ImageCapture
---

{{APIRef("MediaStream Image")}}

A interface **`ImageCapture`** da [MediaStream Image Capture API](/pt-BR/docs/Web/API/MediaStream_Image_Capture_API) fornece métodos para permitir a captura de images ou fotos de uma câmera ou de um dispositivo fotográfico. É fornecido uma interface para capturar images de um dispositive fotográfico referenciado por meio de um {{domxref("MediaStreamTrack")}} válido.

## Construtor

- {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}}
  - : Cria um novo objeto `ImageCapture` que pode ser usado para capturar quadros estáticos (fotos) de um determinado {{domxref ("MediaStreamTrack")}} que representa um fluxo de vídeo.

## Propriedades

- {{domxref("ImageCapture.track")}} {{readonlyinline}}
  - : Retorna uma referência ao {{domxref ("MediaStreamTrack")}} passado ao construtor.

## Métodos

A interface do `ImageCapture` é baseada em {{domxref ("EventTarget")}}}, portanto inclui os métodos definidos por essa interface e os listados abaixo.

- {{domxref("ImageCapture.takePhoto()")}}
  - : Faz uma única exposição usando o dispositivo de captura de vídeo que busca um {{domxref ("MediaStreamTrack")}} e retorna um {{jsxref ("Promise")}} que resolve com um {{domxref ("Blob")}} que contém o dados.
- {{domxref("ImageCapture.getPhotoCapabilities()")}}
  - : Retorna um {{jsxref ("Promise")}} que resolve com um objeto {{domxref ("PhotoCapabilities")}} que contém os intervalos de opções de configuração disponíveis.
- {{domxref("ImageCapture.getPhotoSettings()")}}
  - : Retorna um {{jsxref ("Promise")}} que é resolvido com um objeto {{domxref ("PhotoSettings")}} que contém as definições de configuração de foto atuais.
- {{domxref("ImageCapture.grabFrame()")}}
  - : Tira uma captura instantânea do vídeo ao vivo em um {{domxref ("MediaStreamTrack")}}, retornando um {{domxref ("ImageBitmap")}}, se for bem-sucedido.

## Exemplo

O código a seguir foi retirado do [Chrome's Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html). Como o `ImageCapture` requer algum lugar para capturar uma imagem, o exemplo abaixo começa com o dispositivo de mídia de um dispositivo (em outras palavras, uma câmera).

Este exemplo mostra, aproximadamente, um {{domxref ("MediaStreamTrack")}} extraído do {{domxref ("MediaStream")}} de um dispositivo. A faixa é usada para criar um objeto `ImageCapture`, para que seja possível chamar `takePhoto()` e `grabFrame()`. Por fim, mostra como aplicar os resultados dessas chamadas a um objeto de tela.

```js
var imageCapture;

function onGetUserMediaButtonClick() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((mediaStream) => {
      document.querySelector("video").srcObject = mediaStream;

      const track = mediaStream.getVideoTracks()[0];
      imageCapture = new ImageCapture(track);
    })
    .catch((error) => console.log(error));
}

function onGrabFrameButtonClick() {
  imageCapture
    .grabFrame()
    .then((imageBitmap) => {
      const canvas = document.querySelector("#grabFrameCanvas");
      drawCanvas(canvas, imageBitmap);
    })
    .catch((error) => console.log(error));
}

function onTakePhotoButtonClick() {
  imageCapture
    .takePhoto()
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      const canvas = document.querySelector("#takePhotoCanvas");
      drawCanvas(canvas, imageBitmap);
    })
    .catch((error) => console.log(error));
}

/* Utils */

function drawCanvas(canvas, img) {
  canvas.width = getComputedStyle(canvas).width.split("px")[0];
  canvas.height = getComputedStyle(canvas).height.split("px")[0];
  let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  canvas
    .getContext("2d")
    .drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      x,
      y,
      img.width * ratio,
      img.height * ratio,
    );
}

document.querySelector("video").addEventListener("play", function () {
  document.querySelector("#grabFrameButton").disabled = false;
  document.querySelector("#takePhotoButton").disabled = false;
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
