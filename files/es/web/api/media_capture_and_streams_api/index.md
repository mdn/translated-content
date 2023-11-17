---
title: API de MediaStream
slug: Web/API/Media_Capture_and_Streams_API
---

{{SeeCompatTable}}

La API de proceso **_MediaStream_**, a veces llamada _Media Stream API_ o _Stream API_, es parte de la norma [WebRTC](/es/docs/WebRTC) y describe un flujo de datos de audio o video, los métodos para trabajar con ellos, las limitaciones asociadas con este tipo de datos, las respuestas de error y éxito al usar los datos asincrónicamente y los eventos que se disparan durante el proceso.

## Conceptos Básicos

La API está basada sobre la manipulación de un objeto {{domxref("MediaStream")}} que representa un flujo de datos de audio o video. Generalmente, un objeto `MediaStream` es una simple cadena URL que puede ser usada para referirse a datos almacenados en un {{domxref("Archivo")}} DOM o un objeto {{domxref("Blob")}} creado con {{domxref("window.URL.createObjectURL()")}}, como se lo describe en[**Obtener el video**](/es/docs/WebRTC/taking_webcam_photos#Get_the_video).

Un `MediaStream` está compuesto por más objetos [\[i\]](#_edn1){{domxref("MediaStreamTrack")}} que representan varias **pistas** de audio o video. Cada `MediaStreamTrack` puede tener uno o más **canales**. El canal representa la unidad menor de un flujo de medio, como una señal de audio asociada a un parlante específico, como el _izquierdo_ o el _derecho_ en una pista de audio estéreo.

Los objetos `MediaStream` poseen una sola **entrada** y **salida[**\[ii\]**](#edn2).** Un objeto `MediaStream` creado con [**getUserMedia()**](/es/docs/Web/API/Navigator.getUserMedia?redirectlocale=en-US&redirectslug=WebRTC%2Fnavigator.getUserMedia) se denomina _local_ y tiene como origen de entrada una de las cámaras o micrófonos del usuario. Un MediaStream no local puede estar representando un elemento de medio como {{HTMLElement("video")}} o {{HTMLElement("audio")}}, un flujo originado en la red y obtenido a través de la [\[iii\]](#_edn3)[_**PeerConnection API**_](/es/docs/WebRTC/PeerConnection_API) o un flujo creado con la [**API de Audio Web**](/es/docs/Web_Audio_API) [\[iv\]](#edn4){{domxref("MediaStreamAudioSourceNode")}}. La salida de un objeto `MediaStream` está enlazada a un **consumidor.** El mismo puede ser un elemento de medio como `<audio> o <video>`, la [**PeerConnection API**](/es/docs/WebRTC/PeerConnection_API) de WebRTC o una [**API de Audio Web**](/es/docs/Web_Audio_API) [\[v\]](#_edn5){{domxref("MediaStreamAudioDestinationNode")}}.

## Referencia

- [`addtrack`](/es/docs/Web/Reference/Events/addtrack) (event)
- {{domxref("AudioStreamTrack")}}
- {{domxref("BlobEvent")}}
- {{domxref("BlobEventInit")}}
- [`ended (MediaStream)`](/es/docs/Web/Reference/Events/ended "MediaStream") (event)
- [`ended (MediaStreamTrack)`](/es/docs/Web/Reference/Events/ended "MediaStreamTrack") (event)
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamConstraints")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaStreamTrackList")}}
- {{domxref("MediaTrackConstraints")}}
- [`muted`](/es/docs/Web/Reference/Events/muted) (event)
- {{domxref("NavigatorUserMedia")}}
- {{domxref("NavigatorUserMediaError")}}
- [`overconstrained`](/es/docs/Web/Reference/Events/overconstrained) (event)
- [`removetrack`](/es/docs/Web/Reference/Events/removetrack) (event)
- [`started`](/es/docs/Web/Reference/Events/started) (event)
- [`unmuted`](/es/docs/Web/Reference/Events/unmuted) (event)
- {{domxref("URL")}}
- {{domxref("VideoStreamTrack")}}

## Pista de MediaStream

Una _MediaStreamTrack_ puede ser de dos tipos, de audio o video, y representa el origen del medio, como una cámara.

### Atributos

- `enabled`: Boolean
  - : True si la pista sigue asociada a su fuente.
- `id`: DOMString, read-only
  - : Un _globally unique identifier_ (GUID) que describe la pista de medios.
- `kind`: DOMString, read-only
  - : El **audio** o **video** para la pista de origen.
- `label`: DOMString, read-only
  - : Una cadena de tipo usuario-asignada que identifica la pista de origen, como en "internal microphone."
- `onended`: EventHandler
  - : Maneja el evento finalizado cuando se lo activa en el objeto MediaStreamTrack.
- `onmute`: EventHandler
  - : Maneja el evento mudo del objeto MediaStreamTrack.
- `onoverconstrained`: EventHandler
  - : Maneja el evento superrestricto cuando se lo activa en el objeto MediaStreamTrack.
- `onstarted`: EventHandler
  - : Maneja el evento iniciado cuando se lo activa en el objeto MediaStreamTrack.
- `onunmute`: EventHandler
  - : Manjea el evento sin enmudecer cuando se lo activa en el objeto MediaStreamTrack.
- `readyState`: unsigned short, read-only

  - : Valores para la pista lista:

    - live - la pista está activa; la salida se puede activar _on_ y _off_ con el atributo habilitado.
    - muted - el origen del medio subyacente de la pista no puede proveer temporalmente datos en tiempo real.

- `sourceId`: DOMString, read-only
  - : La identidad de este origen que es único para esta aplicación y persistente. Se recomienda una GUID pero no es obligatoria.
- `sourceType`: SourceTypeEnum, read-only
  - : Contiene el tipo de información del origen, si es que existe.

### Eventos

- `started`: Event
  - : El objeto MediaStreamTrack no es más "new" en el readyState.
- `muted`: Event
  - : El origen del objeto MediaStreamTrack no puede proveer datos temporalmente.
- `unmuted`: Event
  - : El origen del objeto MediaStreamTrack a recomenzado a proveer datos
- `overconstrained`: Event
  - : El origen del objeto MediaStreamTrack no puede ser confugurado para que encaje en las restricciones impuestas por la pista. Esto podría ocurrir con la altura en el caso de un video, entre otras posibilidades.
- `ended`: Event

  - : El origen del objeto MediaStreamTrack no proveerá datos; puede ocurrir por lo siguiente:

    - el usuario a deshabilitado los permisos de la aplicación
    - el dispositivo de origen está desconectado
    - el _peer_ remoto no transmite datos
    - se llamó el método stop()

### appendConstraint()

Agrega la restricción al final de la lista. Esto sólo es un método para añadir restricciones optativas.

- Parámetros

  - : constraintName **DOMString**, required.

    constraintValue **Primitive (DOMString, float, etc.)** or **MinMaxConstraint**, required.

- Devuelve
  - : void
- Excepciones
  - : None.

### applyConstraints()

Aplica una lista de opciones optativas a la pista. Sobrescribe cualquier otra restricción optativa ya existente en la pista.

- **Parámetros**
  - : constraints **MediaTrackConstraints**, required.
- Devuelve
  - : void
- Excepciones
  - : None.

### constraints()

Devuelte todas las [\[i\]](#_edn1)restricciones en la pista, obligatorias y optativas. Si tanto `mandatory` u `optional` no tienen restricciones, ese campo será `undefined`. Si ninguno tiene restricciones, entonces `constraints()` devolverá `null.`

- Parámetros
  - : None.
- Devuelve
  - : **MediaTrackConstraints** or **null**
- Excepciones
  - : None.

### getConstraint()

Trae una restricción específica, por nombre, de la pista. Este método puede devolver una de varias posibilidades:

- Si su restricción no existe, devuelve `null.`
- Si no provee true para parámetro optativo `mandatory` y su búsqueda resulta en más de una restricción, este método devolverá una lista. Cada ítem de la lista será el nombre de la búsqueda así como su valor o un objeto `MinMaxConstraint`. La lista se agrupa con la entrada 0º como la más importante y cada entrada posterior es progresivamente menos importante.
- Si provee `True` al parámetro `mandatory` y su búsqueda es miembro del `MediaTrackConstraintSet` de la pista, este método devuelve su valor primitivo o su `MinMaxConstraint`, cualquiera que aplique al caso.

<!---->

- Parámetros

  - : constraintName **DOMString**, required.

    mandatory **boolean**, optional, default false.

- Devuelve
  - : Any of the possibilities mentioned above.
- Excepciones
  - : None.

\--

### stop()

Detiene permanentemente la creación de datos para las pistas y remueve las referencias a los orígines.

- Parámetros
  - : None.
- Devuelve
  - : Void.
- Excepciones
  - : None.

## Lista de pistas de MediaStream

Un MediaStream tiene dos objetos MediaStreamTrackList, uno para la pista de video y otro para la de audio.

| Atributo      | Tipo                     | Descripción                      |
| ------------- | ------------------------ | -------------------------------- |
| length        | unsigned long, read-only | El número de pistas en la lista. |
| onaddtrack    | EventHandler             | Maneja el evento addtrack.       |
| onremovetrack | EventHandler             | Maneja el evento removetrack.    |

### Eventos

| Evento      | Interfaz              | Descripción                                  |
| ----------- | --------------------- | -------------------------------------------- |
| addtrack    | MediaStreamTrackEvent | Se agregó una MediaStreamTrack a la lista.   |
| removetrack | MediaStreamTrackEvent | Se removió una MediaStreamTrack de la lista. |

### add()

Agrega una MediaStreamTrack a la lista de pistas.

- Parámetros
  - : MediaStreamTrack **track**, required.
- Devuelve
  - : Void.
- Excepciones
  - : INVALID_STATE_ERR if the stream is finished (all tracks have ended).

### item()

Devuelve la MediaStreamTrack al valor de índice (index) especificado.

- Parámetros
  - : unsigned long **index**, required.
- Devuelve
  - : MediaStreamTrack
- Excepciones
  - : None.

### Remove()

Remueve una MediaStreamTrack de la lista de pistas.

- Parámetros
  - : MediaStreamTrack **track**, required.
- Devuelve
  - : Void.
- Excepciones
  - : INVALID_STATE_ERR if the stream is finished (all tracks have ended).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [WebRTC](/es/docs/WebRTC) - la página de introducción a la API
- [getUserMedia()](/es/docs/WebRTC/navigator.getUserMedia)
- [Taking webcam photos](/es/docs/WebRTC/taking_webcam_photos) - un tutorial para usar getUserMedia()
