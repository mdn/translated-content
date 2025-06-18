---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
---

{{APIRef("HTML DOM")}}

La interfaz HTMLMediaElement añade a {{domxref("HTMLElement")}} las propiedades y métodos necesarios para soportar las capacidades básicas relacionadas con los medios de comunicación que son comunes en audio y vídeo. Los elementos {{domxref("HTMLVideoElement")}} y {{domxref("HTMLAudioElement")}} heredan esta interfaz.

{{InheritanceDiagram(600, 120)}}

## Properties

Esta interfaz también hereda propiedades de sus antepasados {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}} y {{domxref("EventTarget")}}.

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Un {{domxref("AudioTrackList")}} que lista los {{domxref("AudioTrack")}} objetos contenidos en el elemento.
- {{domxref("HTMLMediaElement.autoplay")}}

  - : Un {{jsxref("Booleano")}} que refleja el [`autoplay`](/es/docs/Web/HTML/Element/video#autoplay). Atributo HTML, que indica si la reproducción debe comenzar automáticamente tan pronto como haya suficiente material disponible para hacerlo sin interrupción.

    > [!NOTE]
    > Los sitios que reproducen automáticamente audio (o vídeos con una pista de audio) pueden ser una experiencia desagradable para los usuarios, por lo que deben evitarse en la medida de lo posible. Si debe ofrecer la funcionalidad de autojuego, debe hacer que se active (requiriendo que el usuario lo habilite específicamente). Sin embargo, esto puede ser útil a la hora de crear elementos multimedia cuya fuente se establecerá más adelante, bajo el control del usuario.

- {{domxref("HTMLMediaElement.buffered")}} {{readonlyinline}}
  - : Devuelve un objeto {{domxref("TimeRanges")}} que indica los rangos de la fuente de medios que el navegador ha almacenado en el búfer (si existe) en el momento en que se accede a la propiedad almacenada en el búfer.
- {{domxref("HTMLMediaElement.controller")}}
  - : Es un objeto {{domxref("MediaController")}} que representa el controlador de medios asignado al elemento, o nulo si no se asigna ninguno.
- {{domxref("HTMLMediaElement.controls")}}
  - : Es un {{jsxref('booleano')}} que refleja el [`controles`](/es/docs/Web/HTML/Element/vídeo#controles)\[1]. Atributo HTML, que indica si deben visualizarse las posiciones de la interfase de usuario para controlar el recurso.
- {{domxref("HTMLMediaElement.controlsList")}} {{readonlyinline}}
  - : Devuelve un {{domxref("DOMTokenList")}} que ayuda al agente de usuario a seleccionar qué controles mostrar en el elemento multimedia cuando el agente de usuario muestra su propio conjunto de controles. La DOMTokenList toma uno o más de los tres valores posibles: nodownload, nofullscreen y noremoteplayback.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : Es un {{domxref("DOMString")}} que indica la configuración CORS para este elemento multimedia.
- {{domxref("HTMLMediaElement.currentSrc")}} {{readonlyinline}}
  - : Devuelve un {{domxref("DOMString")}} con la URL absoluta del recurso multimedia elegido.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : Es un doble indicador del tiempo de reproducción actual en segundos. Fijar este valor busca que los medios de comunicación se adapten a los nuevos tiempos.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : Es un {{jsxref('booleano')}} que refleja el [`silenciado`](/es/docs/Web/HTML/Element/video#silenciado). Atributo HTML, que indica si la salida de audio del elemento multimedia debe silenciarse de forma predeterminada.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : Es un doble que indica la velocidad de reproducción predeterminada del material.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : Es un {{jsxref('Booleano')}} que establece o devuelve el estado de reproducción remota, indicando si el elemento multimedia puede tener una interfaz de reproducción remota.
- {{domxref("HTMLMediaElement.duration")}} {{readonlyinline}}
  - : Devuelve un doble indicando la longitud del material en segundos, o 0 si no hay datos de material disponibles.
- {{domxref("HTMLMediaElement.ended")}} {{readonlyinline}}
  - : Devuelve un {{jsxref('Booleano')}} que indica si el elemento multimedia ha terminado de reproducirse.
- {{domxref("HTMLMediaElement.error")}} {{readonlyinline}}
  - : Returns a {{domxref("MediaError")}} object for the most recent error, or `null` if there has not been an error.
- {{domxref("HTMLMediaElement.loop")}}
  - : Is a {{jsxref('Boolean')}} that reflects the [`loop`](/es/docs/Web/HTML/Element/video#loop) HTML attribute, which indicates whether the media element should start over when it reaches the end.
- {{domxref("HTMLMediaElement.mediaGroup")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`mediagroup`](/es/docs/Web/HTML/Element/video#mediagroup) HTML attribute, which indicates the name of the group of elements it belongs to. A group of media elements shares a common {{domxref('MediaController')}}.
- {{domxref("HTMLMediaElement.mediaKeys")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("MediaKeys")}} object or `null`. MediaKeys is a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.
- {{domxref("HTMLMediaElement.mozAudioCaptured")}} {{readonlyinline}} {{non-standard_inline}}
  - : Returns a {{jsxref('Boolean')}}. Related to audio stream capture.
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{non-standard_inline}}
  - : Is a `double` that provides access to the fragment end time if the media element has a fragment URI for `currentSrc`, otherwise it is equal to the media duration.
- {{domxref("HTMLMediaElement.mozFrameBufferLength")}} {{non-standard_inline}} {{deprecated_inline}}

  - : Is a `unsigned long` that indicates the number of samples that will be returned in the framebuffer of each `MozAudioAvailable` event. This number is a total for all channels, and by default is set to be the number of channels \* 1024 (e.g., 2 channels \* 1024 samples = 2048 total).

    The `mozFrameBufferLength` property can be set to a new value for lower latency, larger amounts of data, etc. The size given _must_ be a number between 512 and 16384. Using any other size results in an exception being thrown. The best time to set a new length is after the [loadedmetadata](/es/docs/Web/API/HTMLMediaElement/loadedmetadata_event) event fires, when the audio info is known, but before the audio has started or `MozAudioAvailable` events have begun firing.

- {{domxref("HTMLMediaElement.mozSampleRate")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a `double` representing the number of samples per second that will be played. For example, 44100 samples per second is the sample rate used by CD audio.
- {{domxref("HTMLMediaElement.muted")}}
  - : Is a {{jsxref('Boolean')}} that determines whether audio is muted. `true` if the audio is muted and `false` otherwise.
- {{domxref("HTMLMediaElement.networkState")}} {{readonlyinline}}
  - : Returns a `unsigned short` (enumeration) indicating the current state of fetching the media over the network.
- {{domxref("HTMLMediaElement.paused")}} {{readonlyinline}}
  - : Returns a {{jsxref('Boolean')}} that indicates whether the media element is paused.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : Is a `double` that indicates the rate at which the media is being played back.
- {{domxref("HTMLMediaElement.played")}} {{readonlyinline}}
  - : Returns a {{domxref('TimeRanges')}} object that contains the ranges of the media source that the browser has played, if any.
- {{domxref("HTMLMediaElement.preload")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`preload`](/es/docs/Web/HTML/Element/video#preload) HTML attribute, indicating what data should be preloaded, if any. Possible values are: `none`, `metadata`, `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}} {{non-standard_inline}}
  - : Is a {{jsxref('Boolean')}} that determines if the pitch of the sound will be preserved. If set to `false`, the pitch will adjust to the speed of the audio. This is implemented with prefixes in Firefox (`mozPreservesPitch`) and WebKit (`webkitPreservesPitch`).
- {{domxref("HTMLMediaElement.readyState")}} {{readonlyinline}}
  - : Returns a `unsigned short` (enumeration) indicating the readiness state of the media.
- {{domxref("HTMLMediaElement.seekable")}} {{readonlyinline}}
  - : Returns a {{domxref('TimeRanges')}} object that contains the time ranges that the user is able to seek to, if any.
- {{domxref("HTMLMediaElement.seeking")}} {{readonlyinline}}
  - : Returns a {{jsxref('Boolean')}} that indicates whether the media is in the process of seeking to a new position.
- {{domxref("HTMLMediaElement.sinkId")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("DOMString")}} that is the unique ID of the audio device delivering output, or an empty string if it is using the user agent default. This ID should be one of the `MediaDeviceInfo.deviceid` values returned from {{domxref("MediaDevices.enumerateDevices()")}}, `id-multimedia`, or `id-communications`.
- {{domxref("HTMLMediaElement.src")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`src`](/es/docs/Web/HTML/Element/video#src) HTML attribute, which contains the URL of a media resource to use.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : Is a {{domxref('MediaStream')}} representing the media to play or that has played in the current `HTMLMediaElement`, or `null` if not assigned.
- {{domxref("HTMLMediaElement.textTracks")}} {{readonlyinline}}
  - : Returns the list of {{domxref("TextTrack")}} objects contained in the element.
- {{domxref("HTMLMediaElement.videoTracks")}} {{readonlyinline}}

  - : Returns the list of {{domxref("VideoTrack")}} objects contained in the element.

    > [!NOTE]
    > Gecko sólo soporta la reproducción de una sola pista, y el análisis de los metadatos de las pistas sólo está disponible para los medios con el formato de contenedor Ogg.

- {{domxref("HTMLMediaElement.volume")}}
  - : Is a `double` indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).

### Event handlers

- {{domxref("HTMLMediaElement.onencrypted")}}

  - : Sets the {{domxref('EventHandler')}} called when the media is encrypted.

- {{domxref("HTMLMediaElement.onwaitingforkey")}}
  - : Sets the {{domxref('EventHandler')}} called when playback is blocked while waiting for an encryption key.

## Obsolete attributes

These attributes are obsolete and should not be used, even if a browser still supports them.

- {{domxref("HTMLMediaElement.initialTime")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a `double` that indicates the initial playback position in seconds.
- {{domxref("HTMLMediaElement.mozChannels")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a `double` representing the number of channels in the audio resource (e.g., `2` for stereo).

### Obsolete event handlers

- {{domxref("HTMLMediaElement.onmozinterruptbegin")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Sets the [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) called when the media element is interrupted because of the Audio Channel manager. This was Firefox-specific, having been implemented for Firefox OS, and was removed in Firefox 55.
- {{domxref("HTMLMediaElement.onmozinterruptend")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Sets the {{domxref('EventHandler')}} called when the interruption is concluded. This was Firefox-specific, having been implemented for Firefox OS, and was removed in Firefox 55.

## Methods

_This interface also inherits methods from its ancestors {{domxref("HTMLElement")}}, {{domxref('Element')}}, {{domxref('Node')}}, and {{domxref('EventTarget')}}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : Adds a text track (such as a track for subtitles) to a media element.
- {{domxref("HTMLMediaElement.captureStream()")}} {{experimental_inline}}
  - : Returns {{domxref("MediaStream")}}, captures a stream of the media content.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : Determines whether the specified media type can be played back.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : Directly seeks to the given time.
- {{domxref("HTMLMediaElement.load()")}}
  - : Resets the media to the beginning and selects the best available source from the sources provided using the [`src`](/es/docs/Web/HTML/Element/video#src) attribute or the {{HTMLElement("source")}} element.
- {{domxref("HTMLMediaElement.mozCaptureStream()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{non-standard_inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{non-standard_inline}}
  - : Returns {{jsxref('Object')}}, which contains properties that represent metadata from the playing media resource as `{key: value}` pairs. A separate copy of the data is returned each time the method is called. This method must be called after the [loadedmetadata](/es/docs/Web/API/HTMLMediaElement/loadedmetadata_event) event fires.
- {{domxref("HTMLMediaElement.pause()")}}
  - : Pauses the media playback.
- {{domxref("HTMLMediaElement.play()")}}
  - : Begins playback of the media.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{non-standard_inline}} {{experimental_inline}}
  - : Seeks to the next frame in the media. This non-standard, experimental method makes it possible to manually drive reading and rendering of media at a custom speed, or to move through the media frame-by-frame to perform filtering or other operations.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{experimental_inline}}
  - : Returns {{jsxref("Promise")}}. Sets the {{domxref("MediaKeys")}} keys to use when decrypting media during playback.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{experimental_inline}}
  - : Sets the ID of the audio device to use for output and returns a {{jsxref("Promise")}}. This only works when the application is authorized to use the specified device.

## Obsolete methods

These methods are obsolete and should not be used, even if a browser still supports them.

- {{domxref("HTMLMediaElement.mozLoadFrom()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : This method, available only in Mozilla's implementation, loads data from another media element. This works similarly to `load()` except that instead of running the normal resource selection algorithm, the source is simply set to the `other` element's `currentSrc`. This is optimized so this element gets access to all of the `other` element's cached and buffered data; in fact, the two elements share downloaded data, so data downloaded by either element is available to both.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- References

  - {{HTMLElement("video")}} and {{HTMLElement("audio")}} HTML elements.
  - {{domxref("HTMLVideoElement")}} and {{domxref("HTMLAudioElement")}} interfaces, derived from `HTMLMediaElement`.

- Articles

  - [Using HTML5 audio and video](/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - [Media formats supported by the audio and video elements](/es/docs/Web/Media/Formats)
  - [Web Audio API](/es/docs/Web/API/Web_Audio_API)
