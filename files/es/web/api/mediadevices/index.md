---
title: MediaDevices
slug: Web/API/MediaDevices
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Media Capture and Streams")}}

La interfaz **`MediaDevices`** brinda acceso a dispositivos de entrada de medios conectados, como cámaras y micrófonos, así como a compartir pantalla. En esencia, le permite obtener acceso a cualquier fuente de hardware de datos multimedia.

{{InheritanceDiagram}}

## Propiedades de instancia

_Hereda las propiedades de su interfaz padre, {{domxref("EventTarget")}}._

## Métodos de instancia

_Hereda métodos de su interfaz padre, {{domxref("EventTarget")}}._

- {{ domxref("MediaDevices.enumerateDevices", "enumerateDevices()") }}
  - : Obtiene una matriz de información sobre los dispositivos de entrada y salida de medios disponibles en el sistema.
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : Devuelve un objeto conforme a {{domxref("MediaTrackSupportedConstraints")}} que indica qué propiedades restringibles se admiten en la interfaz {{domxref("MediaStreamTrack")}}. Consulte la [API de transmisión de medios](/es/docs/Web/API/Media_Capture_and_Streams_API/Constraints) para obtener más información sobre las restricciones y cómo usarlas.
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : Solicita al usuario que seleccione una pantalla o parte de una pantalla (como una ventana) para capturar como {{domxref("MediaStream")}} para compartir o grabar. Devuelve una promesa que se resuelve en un `MediaStream`.
- {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}
  - : Con el permiso del usuario a través de un aviso, enciende una cámara y/o un micrófono en el sistema y proporciona un {{domxref("MediaStream")}} que contiene una pista de video y/o una pista de audio con la entrada.
- {{domxref("MediaDevices.selectAudioOutput", "selectAudioOutput()") }} {{Experimental_Inline}}
  - : Pide al usuario que seleccione un dispositivo de salida de audio específico.

## Eventos

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : Se activa cuando un dispositivo de entrada o salida de medios se conecta o retira de la computadora del usuario.

## Ejemplo

```js
// Coloque las variables en el ámbito global para que estén disponibles
// en la consola del navegador.
const video = document.querySelector("video");
const constraints = {
  audio: false,
  video: true,
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    const videoTracks = stream.getVideoTracks();
    console.log("Tengo transmisión con las restricciones:", constraints);
    console.log(`Usando el dispositivo de vídeo: ${videoTracks[0].label}`);
    stream.onremovetrack = () => {
      console.log("Transmisión finalizada");
    };
    video.srcObject = stream;
  })
  .catch((error) => {
    if (error.name === "OverconstrainedError") {
      console.error(
        `La resolución ${constraints.video.width.exact}x${constraints.video.height.exact} px no es compatible con su dispositivo.`,
      );
    } else if (error.name === "NotAllowedError") {
      console.error(
        "Debe otorgar permiso a esta página para acceder a su cámara y micrófono.",
      );
    } else {
      console.error(`getUserMedia error: ${error.name}`, error);
    }
  });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API de transmisión y captura de medios](/es/docs/Web/API/Media_Capture_and_Streams_API): La API de la que forma parte esta interfaz.
- [API de captura de pantalla](/es/docs/Web/API/Screen_Capture_API): La API que define el método {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}.
- [API WebRTC](/es/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Devuelve una referencia a un objeto `MediaDevices` que se puede usar para acceder a los dispositivos.
- [CameraCaptureJS](https://github.com/chrisjohndigital/CameraCaptureJS): Captura y reproducción de video HTML usando `MediaDevices` y la API de grabación de MediaStream
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): Aplicación web de laboratorio de lenguaje de video HTML que utiliza `MediaDevices` y la API de grabación de MediaStream para la grabación de video
