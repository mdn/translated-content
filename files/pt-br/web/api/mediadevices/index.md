---
title: MediaDevices
slug: Web/API/MediaDevices
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

As interfaces **`MediaDevices`** proporcionam accesso aos dispositivos de entrada de midia conectados, como câmeras e microfones, bem como compartilhamento de tela. Essencialmente, isso te permite obter acesso a qualquer mídia gerada pelo hardware.

## Propriedades

_As mesmas propriedades de {{domxref("EventTarget")}}._

### Manipuladores de Evento

- {{ domxref("MediaDevices.ondevicechange") }}
  - : O manipulador de evento para o evento {{event("devicechange")}}. Esse evento é entregue ao objeto `MediaDevices` quando uma entrada de mídia ou dispositivo de saída é conectado ou removido do computador do usuário.

## Métodos

_Mesmos métodos de {{domxref("EventTarget")}}._

- {{ domxref("EventTarget.addEventListener()") }}
  - : Registra um manipulador de eventos para um tipo específico de evento.
- {{ domxref("MediaDevices.enumerateDevices()") }}
  - : Obtém um array de informações sobre a entrada de midia e dispositivos de saída disponíveis no sistema.
- {{domxref("MediaDevices.getSupportedConstraints()")}}
  - : Retorna um objeto consoante com {{domxref("MediaTrackSupportedConstraints")}} indicando quais propriedades restritivas são suportadas na interface {{domxref("MediaStreamTrack")}}. Veja [Capacidades e restrições](/pt-BR/docs/Web/API/Media_Streams_API#capabilities_and_constraints) para aprender mais sobre restrições e como usá-las.
- {{ domxref("MediaDevices.getUserMedia()") }}
  - : Após a permissão do usuário (pedida através de um prompt), liga a câmera, microfone e/ou a tramissão de tela no sistema e fornece uma {{domxref("MediaStream")}} contendo uma faixa de vídeo e/ou áudio com a entrada.
- {{ domxref("EventTarget.removeEventListener()") }}
  - : Remove um escutador de evento.

## Exemplo

```js
"use strict";

// Coloca as variáveis no escopo global para torná-las disponível para o Console do navegador.
var video = document.querySelector("video");
var constraints = (window.constraints = {
  audio: false,
  video: true,
});
var errorElement = document.querySelector("#errorMsg");

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    var videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log("Using video device: " + videoTracks[0].label);
    stream.onremovetrack = function () {
      console.log("Stream ended");
    };
    window.stream = stream; // torna as variáveis disponíveis para o Console do navegador
    video.srcObject = stream;
  })
  .catch(function (error) {
    if (error.name === "ConstraintNotSatisfiedError") {
      errorMsg(
        "A resolução " +
          constraints.video.width.exact +
          "x" +
          constraints.video.width.exact +
          " px não é suportada pelo seu dispositivo.",
      );
    } else if (error.name === "PermissionDeniedError") {
      errorMsg(
        "As permissões para usar sua câmera e microfone não foram fornecidas. " +
          "Você precisa permitir o acesso da página aos seus dispositivos para " +
          "que a demo funcione.",
      );
    }
    errorMsg("getUserMedia error: " + error.name, error);
  });

function errorMsg(msg, error) {
  errorElement.innerHTML += "<p>" + msg + "</p>";
  if (typeof error !== "undefined") {
    console.error(error);
  }
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Media Capture and Streams API](/pt-BR/docs/Web/API/Media_Streams_API): A API desta interface faz parte..
- [WebRTC API](/pt-BR/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Retorna uma referência para um objeto `MediaDevices` que pode ser usado para acessar dispositivos.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) Captura de vídeo e playback em HTML5 usando _MediaDevices_ e a _MediaStream Recording API_ ([código no GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): Aplicação web de laboratório de linguagem de vídeo HTML5 usando _MediaDevices_ e _MediaStream Recording API_ para gravação de video ([código no GitHub](https://github.com/chrisjohndigital/OpenLang))
