---
title: API de Media Capture and Streams (Media Stream)
slug: Web/API/Media_Capture_and_Streams_API
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{DefaultAPISidebar("Media Capture and Streams")}}

La API de **Media Capture and Streams**, a menudo llamada **API de Media Streams** o **API de MediaStream**, está relacionada con [WebRTC](/es/docs/Web/API/WebRTC_API) y permite la transmisión de datos de audio y video.

Proporciona las interfaces y los métodos para trabajar con los flujos y con las pistas que los componen, las restricciones asociadas a los formatos de datos, las funciones de callback de éxito y de error cuando se usan los datos de forma asíncrona, y los eventos que se disparan durante el proceso.

## Conceptos y uso

La API se basa en la manipulación de un objeto {{domxref("MediaStream")}} que representa un flujo de datos de audio o video. Puedes ver un ejemplo en [Obtener el flujo multimedia](/es/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos#demostración).

Un `MediaStream` consta de cero o más objetos {{domxref("MediaStreamTrack")}} que representan distintas **pistas** de audio o video. Cada `MediaStreamTrack` puede tener uno o más **canales**. El canal representa la unidad más pequeña de un flujo multimedia, como la señal de audio asociada a un altavoz específico, por ejemplo el _izquierdo_ o el _derecho_ en una pista de audio estéreo.

Los objetos `MediaStream` tienen una sola **entrada** y una sola **salida**. Un objeto `MediaStream` generado por {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} se denomina _local_ y tiene como fuente de entrada una de las cámaras o micrófonos del usuario. Un `MediaStream` no local puede representar un elemento multimedia como {{HTMLElement("video")}} o {{HTMLElement("audio")}}, un flujo procedente de la red y obtenido mediante la API {{domxref("RTCPeerConnection")}} de WebRTC, o un flujo creado con el {{domxref("MediaStreamAudioDestinationNode")}} de la [API de Web Audio](/es/docs/Web/API/Web_Audio_API).

La salida del objeto `MediaStream` está vinculada a un **consumidor**, que puede ser un elemento multimedia como {{HTMLElement("audio")}} o {{HTMLElement("video")}}, la API {{domxref("RTCPeerConnection")}} de WebRTC o un {{domxref("MediaStreamAudioSourceNode")}} de la [API de Web Audio](/es/docs/Web/API/Web_Audio_API).

## Interfaces

En estos artículos de referencia encontrarás la información fundamental que necesitas conocer sobre cada una de las interfaces que componen la API de Media Capture and Streams.

- {{domxref("CanvasCaptureMediaStreamTrack")}}
- {{domxref("InputDeviceInfo")}}
- {{domxref("MediaDeviceInfo")}}
- {{domxref("MediaDevices")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("OverconstrainedError")}}

## Eventos

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
- {{domxref("MediaStreamTrack/ended_event", "ended")}}
- {{domxref("MediaStreamTrack/mute_event", "mute")}}
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
- {{domxref("MediaStreamTrack/unmute_event", "unmute")}}

## Guías y tutoriales

El artículo [Capacidades, restricciones y configuración](/es/docs/Web/API/Media_Capture_and_Streams_API/Constraints) explica los conceptos de **restricciones** y **capacidades**, así como la configuración multimedia, e incluye un [Probador de restricciones](/es/docs/Web/API/Media_Capture_and_Streams_API/Constraints) con el que puedes experimentar con los resultados de aplicar distintos conjuntos de restricciones a las pistas de audio y video que proceden de los dispositivos de entrada A/V de la computadora (como la cámara web y el micrófono).

El artículo [Tomar fotos fijas con getUserMedia()](/es/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) muestra cómo usar [`getUserMedia()`](/es/docs/Web/API/MediaDevices/getUserMedia) para acceder a la cámara de una computadora o de un teléfono móvil que sea compatible con `getUserMedia()` y tomar una foto con ella.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [WebRTC](/es/docs/Web/API/WebRTC_API): la página de introducción a la API.
- [Tomar fotos fijas con WebRTC](/es/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos): una demostración y un tutorial sobre el uso de `getUserMedia()`.
