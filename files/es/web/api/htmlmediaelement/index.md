---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("HTML DOM")}}

La interfaz **`HTMLMediaElement`** añade a {{domxref("HTMLElement")}} las propiedades y métodos necesarios para admitir las capacidades básicas relacionadas con los medios, comunes tanto al audio como al vídeo.

Los elementos {{domxref("HTMLVideoElement")}} y {{domxref("HTMLAudioElement")}} heredan esta interfaz.

{{InheritanceDiagram}}

## Propiedades de instancia

_Esta interfaz también hereda propiedades de sus antecesores {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} y {{domxref("EventTarget")}}._

- {{domxref("HTMLMediaElement.audioTracks")}} {{ReadOnlyInline}}
  - : Un {{domxref("AudioTrackList")}} que enumera los objetos {{domxref("AudioTrack")}} contenidos en el elemento.
- {{domxref("HTMLMediaElement.autoplay")}}
  - : Un valor booleano que refleja el atributo HTML [`autoplay`](/es/docs/Web/HTML/Reference/Elements/video#autoplay), que indica si la reproducción debe comenzar automáticamente en cuanto haya suficiente contenido multimedia disponible para hacerlo sin interrupciones.

    > [!NOTE]
    > Reproducir audio automáticamente cuando el usuario no lo espera ni lo desea es una mala experiencia de usuario y debe evitarse en la mayoría de los casos, aunque existen excepciones. Consulta la [guía de reproducción automática para las API de medios y Web Audio](/es/docs/Web/Media/Guides/Autoplay) para obtener más información. Ten en cuenta que los navegadores pueden ignorar las solicitudes de reproducción automática, así que asegúrate de que tu código no dependa de que la reproducción automática funcione.

- {{domxref("HTMLMediaElement.buffered")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("TimeRanges")}} que indica los intervalos de la fuente multimedia que el navegador ha almacenado en el búfer (si los hay) en el momento en que se accede a la propiedad `buffered`.
- {{domxref("HTMLMediaElement.controls")}}
  - : Un booleano que refleja el atributo HTML [`controls`](/es/docs/Web/HTML/Reference/Elements/video#controls), que indica si deben mostrarse los elementos de la interfaz de usuario para controlar el recurso.
- {{domxref("HTMLMediaElement.controlsList")}}
  - : Devuelve un {{domxref("DOMTokenList")}} que ayuda al agente de usuario a seleccionar qué controles mostrar en el elemento multimedia siempre que dicho agente muestre su propio conjunto de controles. El `DOMTokenList` acepta uno o más de tres valores posibles: `nodownload`, `nofullscreen` y `noremoteplayback`.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : Una cadena que indica la [configuración de CORS](/es/docs/Web/HTML/Reference/Attributes/crossorigin) para este elemento multimedia.
- {{domxref("HTMLMediaElement.currentSrc")}} {{ReadOnlyInline}}
  - : Devuelve una cadena con la URL absoluta del recurso multimedia elegido.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : Un valor de punto flotante de doble precisión que indica el tiempo de reproducción actual en segundos; si el contenido multimedia no ha comenzado a reproducirse y no se ha desplazado, este valor es el tiempo de reproducción inicial del contenido. Al establecer este valor, el contenido multimedia se desplaza al nuevo tiempo. El tiempo se especifica en relación con la línea de tiempo del contenido multimedia.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : Un booleano que refleja el atributo HTML [`muted`](/es/docs/Web/HTML/Reference/Elements/video#muted), que indica si la salida de audio del elemento multimedia debe silenciarse de forma predeterminada.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : Un `double` que indica la velocidad de reproducción predeterminada del contenido multimedia.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : Un booleano que establece o devuelve el estado de reproducción remota, e indica si el elemento multimedia puede tener una interfaz de reproducción remota.
- {{domxref("HTMLMediaElement.duration")}} {{ReadOnlyInline}}
  - : Un valor de punto flotante de doble precisión de solo lectura que indica la duración total del contenido multimedia en segundos. Si no hay datos multimedia disponibles, el valor devuelto es `NaN`. Si el contenido multimedia tiene una duración indefinida (como una transmisión en vivo, el contenido de una llamada WebRTC o similar), el valor es `Infinity`.
- {{domxref("HTMLMediaElement.ended")}} {{ReadOnlyInline}}
  - : Devuelve un booleano que indica si el elemento multimedia ha terminado de reproducirse.
- {{domxref("HTMLMediaElement.error")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("MediaError")}} correspondiente al error más reciente, o `null` si no se ha producido ningún error.
- {{domxref("HTMLMediaElement.loading")}} {{experimental_inline}}
  - : Una cadena que indica si el navegador debe cargar el contenido multimedia de inmediato (`eager`) o cuando sea necesario (`lazy`). Consulta los atributos HTML [`<video loading>`](/es/docs/Web/HTML/Reference/Elements/video#loading) y [`<audio loading>`](/es/docs/Web/HTML/Reference/Elements/audio#loading) para obtener más información.
- {{domxref("HTMLMediaElement.loop")}}
  - : Un booleano que refleja el atributo HTML [`loop`](/es/docs/Web/HTML/Reference/Elements/video#loop), que indica si el elemento multimedia debe comenzar de nuevo cuando llega al final.
- {{domxref("HTMLMediaElement.mediaKeys")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Devuelve un objeto {{domxref("MediaKeys")}}, que es un conjunto de claves que el elemento puede usar para descifrar los datos multimedia durante la reproducción. Si no hay ninguna clave disponible, puede ser `null`.
- {{domxref("HTMLMediaElement.muted")}}
  - : Un booleano que determina si el audio está silenciado. `true` si el audio está silenciado y `false` en caso contrario.
- {{domxref("HTMLMediaElement.networkState")}} {{ReadOnlyInline}}
  - : Devuelve un `unsigned short` (enumeración) que indica el estado actual de la obtención del contenido multimedia a través de la red.
- {{domxref("HTMLMediaElement.paused")}} {{ReadOnlyInline}}
  - : Devuelve un booleano que indica si el elemento multimedia está en pausa.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : Un `double` que indica la velocidad a la que se está reproduciendo el contenido multimedia.
- {{domxref("HTMLMediaElement.played")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref('TimeRanges')}} que contiene los intervalos de la fuente multimedia que el navegador ha reproducido, si los hay.
- {{domxref("HTMLMediaElement.preload")}}
  - : Una cadena que refleja el atributo HTML [`preload`](/es/docs/Web/HTML/Reference/Elements/video#preload), que indica qué datos deben precargarse, si corresponde. Los valores posibles son: `none`, `metadata` y `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}}
  - : Un valor booleano que determina si se conservará el tono del sonido. Si se establece en `false`, el tono se ajustará a la velocidad del audio.
- {{domxref("HTMLMediaElement.readyState")}} {{ReadOnlyInline}}
  - : Devuelve un `unsigned short` (enumeración) que indica el estado de preparación del contenido multimedia.
- {{domxref("HTMLMediaElement.remote")}} {{ReadOnlyInline}}
  - : Devuelve una instancia del objeto {{domxref("RemotePlayback")}} asociada al elemento multimedia.
- {{domxref("HTMLMediaElement.seekable")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref('TimeRanges')}} que contiene los intervalos de tiempo a los que el usuario puede desplazarse, si los hay.
- {{domxref("HTMLMediaElement.seeking")}} {{ReadOnlyInline}}
  - : Devuelve un booleano que indica si el contenido multimedia está en proceso de desplazarse a una nueva posición.
- {{domxref("HTMLMediaElement.sinkId")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Devuelve una cadena que representa el ID único del dispositivo de audio de salida, o una cadena vacía si se está usando el dispositivo de audio predeterminado del agente de usuario.
- {{domxref("HTMLMediaElement.src")}}
  - : Una cadena que refleja el atributo HTML [`src`](/es/docs/Web/HTML/Reference/Elements/video#src), que contiene la URL del recurso multimedia que se va a usar.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : Un objeto que actúa como fuente del contenido multimedia asociado con el `HTMLMediaElement`, o `null` si no se ha asignado.
- {{domxref("HTMLMediaElement.textTracks")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref('TextTrackList')}} que contiene la lista de objetos {{domxref("TextTrack")}} incluidos en el elemento.
- {{domxref("HTMLMediaElement.videoTracks")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref('VideoTrackList')}} que contiene la lista de objetos {{domxref("VideoTrack")}} incluidos en el elemento.
- {{domxref("HTMLMediaElement.volume")}}
  - : Un `double` que indica el volumen de audio, de 0.0 (silencio) a 1.0 (máximo).

## Propiedades obsoletas

Estas propiedades son obsoletas y no deben usarse, aunque un navegador todavía las admita.

- {{domxref("HTMLMediaElement.controller")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Un objeto {{domxref("MediaController")}} que representa el controlador multimedia asignado al elemento, o `null` si no hay ninguno asignado.
- {{domxref("HTMLMediaElement.mediaGroup")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Una cadena que refleja el atributo HTML `mediagroup`, que indica el nombre del grupo de elementos al que pertenece. Un grupo de elementos multimedia comparte un mismo {{domxref('MediaController')}}.
- `HTMLMediaElement.mozAudioCaptured` {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Devuelve un booleano. Relacionado con la captura de flujos de audio.
- `HTMLMediaElement.mozFragmentEnd` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Un `double` que proporciona acceso al tiempo final del fragmento si el elemento multimedia tiene un URI de fragmento para `currentSrc`; en caso contrario, es igual a la duración del contenido multimedia.

## Métodos de instancia

_Esta interfaz también hereda métodos de sus antecesores {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} y {{domxref("EventTarget")}}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : Añade un nuevo objeto {{domxref("TextTrack")}} (como una pista para subtítulos) a un elemento multimedia. Se trata únicamente de una interfaz programática y no afecta al DOM.
- {{domxref("HTMLMediaElement.captureStream()")}}
  - : Devuelve un {{domxref("MediaStream")}} y captura un flujo del contenido multimedia.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : Dada una cadena que especifica un tipo de medio MIME (que puede incluir el [parámetro `codecs`](/es/docs/Web/Media/Guides/Formats/codecs_parameter)), `canPlayType()` devuelve la cadena `probably` si el contenido multimedia debería poder reproducirse, `maybe` si no hay suficiente información para determinar si se reproducirá o no, o una cadena vacía si el contenido multimedia no se puede reproducir.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : Busca rápidamente el tiempo especificado con baja precisión.
- {{domxref("HTMLMediaElement.getStartDate()")}}
  - : Devuelve un objeto {{jsxref("Date")}} que representa la fecha y hora reales correspondientes al inicio del contenido multimedia. En el caso de las transmisiones en vivo, este es el momento en que la emisión comenzó en el servidor, que puede ser anterior al momento en que el usuario empezó a verla.
- {{domxref("HTMLMediaElement.load()")}}
  - : Reinicia el contenido multimedia al principio y selecciona la mejor fuente disponible entre las proporcionadas mediante el atributo [`src`](/es/docs/Web/HTML/Reference/Elements/video#src) o el elemento {{HTMLElement("source")}}.
- {{domxref("HTMLMediaElement.pause()")}}
  - : Pausa la reproducción del contenido multimedia.
- {{domxref("HTMLMediaElement.play()")}}
  - : Inicia la reproducción del contenido multimedia.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Se desplaza al siguiente fotograma del contenido multimedia. Este método experimental y no estándar permite controlar manualmente la lectura y el renderizado del contenido multimedia a una velocidad personalizada, o recorrerlo fotograma a fotograma para realizar filtrados u otras operaciones.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{SecureContext_Inline}}
  - : Devuelve una {{jsxref("Promise")}}. Establece las claves {{domxref("MediaKeys")}} que se usarán para descifrar el contenido multimedia durante la reproducción.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{SecureContext_Inline}}
  - : Establece el ID del dispositivo de audio que se usará para la salida y devuelve una {{jsxref("Promise")}}. Esto solo funciona cuando la aplicación está autorizada a usar el dispositivo especificado.

## Métodos obsoletos

_Estos métodos son obsoletos y no deben usarse, aunque un navegador todavía los admita._

- {{domxref("HTMLMediaElement.captureStream", "HTMLMediaElement.mozCaptureStream()")}} {{Non-standard_Inline}}
  - : El equivalente con prefijo de Firefox de {{domxref("HTMLMediaElement.captureStream()")}}. Consulta su [compatibilidad con navegadores](/es/docs/Web/API/HTMLMediaElement/captureStream) para más información.
- `HTMLMediaElement.mozCaptureStreamUntilEnded()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Un método no estándar y obsoleto para capturar el flujo hasta su finalización.
- `HTMLMediaElement.mozGetMetadata()` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Devuelve un {{jsxref('Object')}} que contiene propiedades que representan los metadatos del recurso multimedia en reproducción, en forma de pares `{clave: valor}`. Cada vez que se llama al método, se devuelve una copia independiente de los datos. Este método debe llamarse después de que se dispare el evento [`loadedmetadata`](/es/docs/Web/API/HTMLMediaElement/loadedmetadata_event).

## Eventos

_Hereda eventos de su padre, {{domxref("HTMLElement")}}_.

Escucha estos eventos mediante {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- {{domxref("HTMLMediaElement.abort_event", 'abort')}}
  - : Se dispara cuando el recurso no se cargó por completo, pero no como resultado de un error.
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : Se dispara cuando el agente de usuario puede reproducir el contenido multimedia, pero calcula que **no** se han cargado suficientes datos para reproducirlo hasta el final sin tener que detenerse para seguir almacenando contenido en el búfer.
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : Se dispara cuando el agente de usuario puede reproducir el contenido multimedia y calcula que se han cargado suficientes datos para reproducirlo hasta el final sin tener que detenerse para seguir almacenando contenido en el búfer.
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : Se dispara cuando se ha actualizado la propiedad de duración.
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : Se dispara cuando el contenido multimedia queda vacío; por ejemplo, cuando ya se había cargado (o cargado parcialmente) y se llama al método {{domxref("HTMLMediaElement.load()")}} para volver a cargarlo.
- {{domxref("HTMLMediaElement.encrypted_event", 'encrypted')}}
  - : Se dispara cuando se encuentran datos de inicialización en el contenido multimedia que indican que está cifrado.
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : Se dispara cuando la reproducción se detiene al llegar al final del contenido multimedia (\<audio> o \<video>), o porque ya no hay más datos disponibles.
- {{domxref("HTMLMediaElement.error_event", 'error')}}
  - : Se dispara cuando el recurso no se pudo cargar debido a un error.
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : Se dispara cuando termina de cargarse el primer fotograma del contenido multimedia.
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : Se dispara cuando se han cargado los metadatos.
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : Se dispara cuando el navegador comienza a cargar un recurso.
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : Se dispara cuando se procesa una solicitud para pausar la reproducción y la actividad entra en su estado de pausa, lo que ocurre normalmente cuando se llama al método {{domxref("HTMLMediaElement.pause()")}} del elemento multimedia.
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : Se dispara cuando la propiedad `paused` cambia de `true` a `false`, como resultado del método {{domxref("HTMLMediaElement.play()")}} o del atributo `autoplay`.
- {{domxref("HTMLMediaElement.playing_event", "playing")}}
  - : Se dispara cuando la reproducción está lista para comenzar tras haber estado pausada o retrasada por falta de datos.
- {{domxref("HTMLMediaElement.progress_event", "progress")}}
  - : Se dispara periódicamente mientras el navegador carga un recurso.
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : Se dispara cuando cambia la velocidad de reproducción.
- {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
  - : Se dispara cuando finaliza una operación de desplazamiento.
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : Se dispara cuando comienza una operación de desplazamiento.
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : Se dispara cuando el agente de usuario intenta obtener datos multimedia, pero estos no llegan de forma inesperada.
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : Se dispara cuando se suspende la carga de los datos multimedia.
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : Se dispara cuando se actualiza el tiempo indicado por la propiedad {{domxref("HTMLMediaElement.currentTime", "currentTime")}}.
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : Se dispara cuando ha cambiado el volumen.
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : Se dispara cuando la reproducción se detiene debido a una falta temporal de datos.
- {{domxref("HTMLMediaElement.waitingforkey_event", 'waitingforkey')}}
  - : Se dispara cuando la reproducción se bloquea inicialmente a la espera de una clave.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

### Referencias

- Elementos HTML {{HTMLElement("video")}} y {{HTMLElement("audio")}}
- Interfaces {{domxref("HTMLVideoElement")}} y {{domxref("HTMLAudioElement")}}, derivadas de `HTMLMediaElement`

### Guías

- [Tecnologías multimedia web](/es/docs/Web/Media)
- Área de aprendizaje: [Audio y vídeo HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Guía de tipos y formatos multimedia](/es/docs/Web/Media/Guides/Formats)
- [Gestión de problemas de compatibilidad multimedia en contenido web](/es/docs/Web/Media/Guides/Formats/Support_issues)
