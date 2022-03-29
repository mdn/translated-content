---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
browser-compat: api.MediaStreamAudioSourceNode
translation_of: Web/API/MediaStreamAudioSourceNode
original_slug: Web/API/MediaStreamAudioSourceNode
---
{{APIRef("Web Audio API")}}

La interfaz **`MediaStreamAudioSourceNode`** es un tipo de {{domxref("AudioNode")}} que funciona como una fuente de audio cuyo contenido multimedia se recibe de un {{domxref("MediaStream")}} obtenido mediante WebRTC o las API de captura y transmisión de medios.

Este medio podría venir de un micrófono (a través de {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}) o de un compañero remoto en una llamada WebRTC (usando pistas de audio {{domxref("RTCPeerConnection")}}).

Un `MediaStreamAudioSourceNode` no tiene entradas y exactamente una salida, y se crea mediante el método {{domxref("AudioContext.createMediaStreamSource()")}}.

`MediaStreamAudioSourceNode` toma el audio del _primer_ {{domxref("MediaStreamTrack")}} cuyo valor de atributo {{domxref("MediaStreamTrack.kind", "kind")}} es `audio`. Consulte {{anch("Orden de pistas")}} para obtener más información sobre el orden de las pistas.

El número de canales emitidos por el nodo coincide con el número de pistas encontradas en la pista de audio seleccionada

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Número de entradas</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Número de salidas</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Conteo de canales</th>
      <td>
        definido por el primer audio {{domxref("MediaStreamTrack")}} pasado al método {{domxref("AudioContext.createMediaStreamSource()")}} que lo creó.
      </td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "new MediaStreamAudioSourceNode()")}}
  - : Crea una nueva instancia de objeto `MediaStreamAudioSourceNode` con las opciones especificadas.

## Propiedades

_Además de las siguientes propiedades, `MediaStreamAudioSourceNode` hereda las propiedades de su padre, {{domxref("AudioNode")}}_.

- {{domxref("MediaStreamAudioSourceNode.mediaStream", "mediaStream")}} {{ReadOnlyInline}}
  - : El {{domxref("MediaStream")}} utilizado al construir este `MediaStreamAudioSourceNode`.

## Métodos

_Hereda los métodos de su padre, {{domxref("AudioNode")}}_.

## Excepciones

- `InvalidStateError` {{domxref("DOMException")}}
  - : Se lanza si la transmisión especificada por el parámetro `mediaStream` no contiene ninguna pista de audio.

## Notas de uso

### Orden de pistas

En la interfaz `MediaStreamTrackAudioSourceNode`, el orden de las pistas de audio en la transmisión se determina tomando las pistas cuyo valor del atributo {{domxref("MediaStreamTrack.kind", "kind")}} es `audio` y luego clasificando las pistas por el valor de su propiedad {{domxref("MediaStreamTrack.id", "id")}}, en orden de código Unicode (esencialmente, en orden alfabético o lexicográfico, para los ID que son cadenas alfanuméricas simples).

La **primera** pista, entonces, es la pista cuyo `id` aparece primero cuando los ID de las pistas están todas ordenadas por código Unicode.

Sin embargo, es importante tener en cuenta que la regla que establece este orden se agregó mucho después de que esta interfaz se introdujera por primera vez en [Web Audio API](/es/docs/Web/API/Web_Audio_API). Como tal, no se puede confiar fácilmente en la coincidencia de orden entre dos navegadores o versiones de navegador.

La interfaz {{domxref("MediaStreamTrackAudioSourceNode")}} es similar a `MediaStreamAudioSourceNode`, pero evita este problema al permitirle especificar qué pista desea usar.

## Ejemplo

Consulte [`AudioContext.createMediaStreamSource()`](/es/docs/Web/API/AudioContext/createMediaStreamSource#example) para obtener un código de ejemplo que usa este objeto.

## Especicaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando la API Web Audio](/es/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/es/docs/Web/API/WebRTC_API)
- [API de captura de medios y transmisiones (Media Streams)](/es/docs/Web/API/Media_Streams_API)
- {{domxref("MediaStreamTrackAudioSourceNode")}}

