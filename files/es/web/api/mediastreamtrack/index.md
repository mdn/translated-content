---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
---

{{APIRef("WebRTC")}}

## Sumario

La interfaz **`MediaStream`** representa un flujo de contenido de los medios. Un flujo consiste en gran cantidad de _tracks_, como pistas de audio o video.

## Propiedades

- {{domxref("MediaStreamTrack.enabled")}}
  - : Es un valor Booleano con un valor de `true` si la pista está habilitada, que se permite para renderizar el fujo fuente del medio; o `false` si está desactivado, ue no está rederizando el flujo de la fuente de medios que el silencio y la oscuridad. Si la pista se ha desconectado, este valor puede ser cambiado, pero no tiene más efecto.
- {{domxref("MediaStreamTrack.id")}} {{readonlyInline}}
  - : Retorna un {{domxref("DOMString")}} que contiene un identificador único (GUID) para la pista; que es generado por le navegador.
- {{domxref("MediaStreamTrack.kind")}} {{readonlyInline}}
  - : Retorna un {{domxref("DOMString")}} se establece en `"audio"` si la pista es un audio y para `"video"`, si es una pista de video. Este no cambia si la pista se disociada de su fuente.
- {{domxref("MediaStreamTrack.label")}} {{readonlyInline}}
  - : Retorna un {{domxref("DOMString")}} que contiene una etiqueta agente-asignado por el usuario que identifica la fuente de la pista, como en `"internal microphone"`. La cadena puede dejarse vacío y está vacía, siempre y cuando ninguna fuente haya sido conectada. Cuando la pista está disociada de la fuente, la etiqueta no cambia.
- {{domxref("MediaStreamTrack.muted")}} {{readonlyInline}}
  - : Retorna un valor booleano con un valor de `true` si la pista esta silenciada, de lo contrario `false`.
- {{domxref("MediaStreamTrack.readonly")}} {{readonlyInline}}
  - : Retona un valor Booleano con un valor de `true` si la pista es de solo lectura ( una fuente de archivo de vídeo o una cámara que los ajustes no puedan ser modificados), de lo contrario `false`.
- {{domxref("MediaStreamTrack.readyState")}} {{readonlyInline}}

  - : Retorna un valor enumerado dando el estado de la pista. Este toma uno de los siguientes valores:

    - `"live"` el cual indica que una entrada es conectada y hace de esta el mejor esfuerzo en proveer datos en tiempo real. En este caso, la salida de datos puede ser cambiada a on u off usando el atributo `MediaStreamTrack.enabled`.
    - `"ended"` este indica que la entrada no esta obteniendo algun dato mas y negará proporcionar nuevos datos.

- {{domxref("MediaStreamTrack.remote")}} {{readonlyInline}}
  - : retorna un booleano con un valor de verdadero si la pista es originada por {{domxref("RTCPeerConnection")}}, falso a cualquier otro.

### Disparador de eventos

- {{domxref("MediaStreamTrack.onstarted")}}
  - : Es un contenedor [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) de la acción a realizar cuando el evento [`started`](/es/docs/Web/Reference/Events/started) es disparado sobre el objeto, que es cuando un objeto {{domxref("MediaStreamTrack")}} es añadido.
- {{domxref("MediaStreamTrack.onmute")}}
  - : Es un contenedor [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) de la acción ha realizar cuando un evento [`mute`](/es/docs/Web/Reference/Events/mute) es disparado sobre el objeto, que es cuando la transmición es terminada.
- {{domxref("MediaStreamTrack.onunmute")}}
  - : Es un contenedor [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) de la acción ha realizar cuando un evento [`unmute`](/es/docs/Web/Reference/Events/unmute) es disparado sobre el objeto, que es cuando un objeto {{domxref("MediaStreamTrack")}} es removido por este.
- {{domxref("MediaStreamTrack.onoverconstrained")}}
  - : Es un contenedor [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) de la acción ha realizar cuando un objeto [`overconstrained`](/es/docs/Web/Reference/Events/overconstrained) es disparado sobre el objeto, que es cuando un objeto {{domxref("MediaStreamTrack")}} es removido por este.
- {{domxref("MediaStreamTrack.oneended")}}
  - : Es un contenedor [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) de la acción ha realizar cuando un evento [`ended`](</es/docs/Web/Reference/Events/ended_(MediaStream)>) es disparado sobre el objeto, que es cuando un objeto {{domxref("MediaStreamTrack")}} es removido por este.

## Métodos

- {{domxref("MediaStreamTrack.getConstraints()")}}
  - : Empty
- {{domxref("MediaStreamTrack.applyConstraints()")}}
  - : Empty
- {{domxref("MediaStreamTrack.getSettings()")}}
  - : Empty
- {{domxref("MediaStreamTrack.getCapabilities()")}}
  - : Empty
- {{domxref("MediaStreamTrack.clone()")}}
  - : Empty
- {{domxref("MediaStreamTrack.stop()")}}
  - : Detiene la reproducción del origen asociado a la pista, pero el origen y la pista son desasociados. El estado de la pista es un conjunto de `ended`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver támbien

- [Using the MediaStream API](/es/docs/WebRTC/MediaStream_API)
