---
title: "`<video>`: elemento HTML para incrustar video"
short-title: <video>
slug: Web/HTML/Reference/Elements/video
l10n:
  sourceCommit: d1aa0dbd7441564e6ce8f6706c2022a2e1912d8c
---

El elemento **`<video>`** de [HTML](/es/docs/Web/HTML) incrusta en el documento un reproductor multimedia compatible con la reproducción de vídeo. También puedes usar `<video>` para contenido de audio, pero el elemento {{HTMLElement("audio")}} puede ofrecer una experiencia de usuario más adecuada.

{{InteractiveExample("HTML Demo: &lt;video&gt;", "tabbed-standard")}}

```html interactive-example
<video controls width="250">
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />

  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />

  Descarga el vídeo en formato
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  o
  <a href="/shared-assets/videos/flower.mp4">MP4</a>.
</video>
```

El ejemplo anterior muestra cómo usar el elemento `<video>`. Al igual que con el elemento {{htmlelement("img")}}, incluimos la ruta al recurso multimedia que queremos mostrar dentro del atributo `src`; también podemos añadir otros atributos para indicar información como el ancho y el alto del vídeo, si debe reproducirse automáticamente y en bucle, o si deben mostrarse los controles de vídeo predeterminados del navegador, entre otras opciones.

El contenido que se encuentra entre las etiquetas de apertura y cierre `<video></video>` se muestra como alternativa en los navegadores que no admiten el elemento.

## Atributos

Al igual que el resto de los elementos HTML, este elemento admite los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Un atributo booleano; si se especifica, el vídeo comienza a reproducirse automáticamente en cuanto es posible, sin detenerse para terminar de cargar los datos.

    > [!NOTE]
    > Los navegadores modernos bloquean la reproducción automática de audio (o de vídeos con una pista de audio sin silenciar), ya que los sitios que reproducen audio de forma automática pueden resultar una experiencia desagradable para los usuarios. Consulta nuestra [guía sobre la reproducción automática](/es/docs/Web/Media/Guides/Autoplay) para obtener más información sobre cómo usar correctamente el autoplay.

    Para desactivar la reproducción automática del vídeo, `autoplay="false"` no funciona; el vídeo se reproducirá automáticamente si el atributo está presente en la etiqueta `<video>`, sea cual sea su valor. Para eliminar la reproducción automática, hay que eliminar el atributo por completo.

    > [!NOTE]
    > Los vídeos que tienen establecido el atributo [`loading="lazy"`](#loading) no comenzarán a descargarse ni a reproducirse automáticamente hasta que el elemento esté cerca del viewport o dentro de él.

- `controls`
  - : Si este atributo está presente, el navegador ofrecerá controles que permiten manejar la reproducción del vídeo, incluidos el volumen, el desplazamiento y la pausa o reanudación de la reproducción.
- `controlslist`
  - : El atributo [`controlslist`](https://wicg.github.io/controls-list/explainer.html), cuando se especifica, ayuda al navegador a decidir qué controles mostrar para el elemento `video` siempre que el navegador muestre su propio conjunto de controles (es decir, cuando se especifica el atributo `controls`).

    Los valores permitidos son `nodownload`, `nofullscreen` y `noremoteplayback`.

    Usa el atributo [`disablepictureinpicture`](#disablepictureinpicture) si quieres desactivar el modo Picture-in-Picture (y su control).

- [`crossorigin`](/es/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Este atributo [enumerado](/es/docs/Glossary/Enumerated) indica si se debe usar CORS para obtener el vídeo relacionado. Los [recursos habilitados con CORS](/es/docs/Web/HTML/How_to/CORS_enabled_image) pueden reutilizarse en el elemento {{HTMLElement("canvas")}} sin quedar _contaminados_. Los valores permitidos son:
    - `anonymous`
      - : Envía una solicitud entre orígenes sin una credencial. Es decir, envía la cabecera HTTP `Origin:` sin cookies, sin certificado X.509 y sin realizar autenticación HTTP básica. Si el servidor no otorga credenciales al sitio de origen (al no establecer la cabecera HTTP `Access-Control-Allow-Origin:`), el recurso quedará _contaminado_ y su uso se verá restringido.
    - `use-credentials`
      - : Envía una solicitud entre orígenes con una credencial. Es decir, envía la cabecera HTTP `Origin:` con una cookie, un certificado o realizando autenticación HTTP básica. Si el servidor no otorga credenciales al sitio de origen (mediante la cabecera HTTP `Access-Control-Allow-Credentials:`), el recurso quedará _contaminado_ y su uso se verá restringido.

    Cuando no está presente, el recurso se obtiene sin una solicitud CORS (es decir, sin enviar la cabecera HTTP `Origin:`), lo que impide su uso sin contaminar en elementos {{HTMLElement('canvas')}}. Si el valor no es válido, se trata como si se hubiera usado la palabra clave enumerada `anonymous`. Consulta [Atributos de configuración de CORS](/es/docs/Web/HTML/Reference/Attributes/crossorigin) para más información.

- `disablepictureinpicture`
  - : Evita que el navegador sugiera un menú contextual de Picture-in-Picture o que solicite el modo Picture-in-Picture automáticamente en algunos casos.
- `disableremoteplayback`
  - : Un atributo booleano que se usa para desactivar la reproducción remota en dispositivos conectados mediante tecnologías cableadas (HDMI, DVI, etc.) e inalámbricas (Miracast, Chromecast, DLNA, AirPlay, etc.).

    En Safari, puedes usar [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) como alternativa.

- `height`
  - : La altura del área de visualización del vídeo, en [píxeles CSS](https://drafts.csswg.org/css-values/#px) (solo valores absolutos; [sin porcentajes](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

- `loading` {{experimental_inline}}
  - : Indica cómo debe cargar el vídeo el navegador (incluida cualquier imagen de póster):
    - `eager`
      - : Carga el vídeo de inmediato, esté o no dentro del viewport visible en ese momento (este es el valor predeterminado).
    - `lazy`
      - : Retrasa la carga del vídeo hasta que alcanza una distancia calculada respecto al viewport, según lo definido por el navegador.

        La carga diferida (lazy loading) evita el consumo de ancho de banda de red y almacenamiento necesario para gestionar el vídeo hasta que sea razonablemente seguro que se va a necesitar. Esto mejora el rendimiento en la mayoría de los casos de uso habituales.

        Aunque se recomienda especificar explícitamente los atributos [`width`](#width) y [`height`](#height) en todos los vídeos para evitar saltos de diseño (layout shift), esto es especialmente importante en los vídeos con carga diferida. Los vídeos con carga diferida nunca se cargarán si no intersecan con la parte visible de un elemento, incluso si su carga provocara dicha intersección, porque los vídeos no cargados tienen un `width` y un `height` de `0`. Esto genera una experiencia de usuario todavía más negativa cuando el contenido visible en el viewport se reacomoda mientras el usuario lo está leyendo.

        Es posible que los vídeos con carga diferida ubicados en el viewport visual aún no sean visibles cuando se dispare el evento {{domxref("Window.load_event", "load")}} de la ventana. Esto se debe a que el evento se dispara en función de los vídeos con carga inmediata (eager); los vídeos con carga diferida no se tienen en cuenta aunque se encuentren dentro del viewport visual en la carga inicial de la página.

        La carga solo se retrasa cuando JavaScript está activado. Se trata de una medida contra el rastreo, ya que si un agente de usuario admitiera la carga diferida con la ejecución de scripts desactivada, seguiría siendo posible que un sitio rastreara la posición aproximada de desplazamiento a lo largo de una sesión, colocando los vídeos de forma estratégica en el marcado de la página para que un servidor pudiera registrar cuántos vídeos se solicitan y cuándo.

        > [!NOTE]
        > El atributo `loading="lazy"` también afecta a los atributos [`autoplay`](#autoplay), [`poster`](#poster) y [`preload`](#preload), tal como se describe en cada una de esas secciones de la página.

- `loop`
  - : Un atributo booleano; si se especifica, el navegador volverá automáticamente al inicio al llegar al final del vídeo.

- `muted`
  - : Un atributo booleano que indica la configuración predeterminada de silencio para el audio del video. Si se establece, el audio estará silenciado inicialmente. Su valor predeterminado es `false`, lo que significa que se escuchará el audio al reproducir el vídeo.

    > [!NOTE]
    > Para activar el sonido, establecer `muted="false"` no funcionará; el audio permanecerá silenciado si el atributo está presente. Para desactivar el silencio, es necesario eliminar el atributo por completo.

- `playsinline`
  - : Un atributo booleano que indica que el vídeo debe reproducirse "en línea", es decir, dentro del área de reproducción del elemento. Ten en cuenta que la ausencia de este atributo _no_ implica que el vídeo siempre se vaya a reproducir en pantalla completa.

- `poster`
  - : Una URL de la imagen que se mostrará mientras se descarga el vídeo. Si no se especifica este atributo, no se muestra nada hasta que el primer fotograma esté disponible, entonces, ese primer fotograma se muestra como imagen de póster.

    > [!NOTE]
    > Los vídeos con el atributo [`loading="lazy"`](#loading) establecido solo descargarán el recurso `poster` cuando el vídeo esté cerca del viewport o dentro de él.

- `preload`
  - : Este atributo {{Glossary("enumerated", "enumerado")}} tiene como objetivo sugerir al navegador qué contenido debería cargarse antes de reproducir el video para ofrecer la mejor experiencia de usuario. Puede tener uno de los siguientes valores:
    - `none`: indica que el vídeo no debe precargarse.
    - `metadata`: indica que solo se obtienen los metadatos del vídeo (por ejemplo, la duración).
    - `auto`: indica que se puede descargar el archivo de vídeo completo, incluso si no se espera que el usuario vaya a usarlo.
    - _cadena vacía_: es un sinónimo del valor `auto`.

    El valor predeterminado varía según el navegador. La especificación recomienda establecerlo en `metadata`.

    > [!NOTE]
    >
    > - Los vídeos que tengan configurado el atributo [`loading="lazy"`](#loading) solo aplicarán el comportamiento de `preload` cuando el vídeo esté cerca del viewport o dentro de él.
    > - El atributo `autoplay` tiene prioridad sobre `preload`. Si se especifica `autoplay`, el navegador obviamente necesitará comenzar a descargar el vídeo para poder reproducirlo.
    > - La especificación no obliga al navegador a seguir el valor de este atributo; es solo una sugerencia.

- `src`
  - : La URL del vídeo que se va a incrustar. Es opcional; en su lugar, puedes usar el elemento {{HTMLElement("source")}} dentro del bloque de vídeo para especificar el vídeo que se va a incrustar.
- `width`
  - : La anchura del área de visualización del vídeo, en [píxeles CSS](https://drafts.csswg.org/css-values/#px) (solo valores absolutos; [sin porcentajes](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Eventos

- {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}} {{Deprecated_Inline}}
  - : El búfer de entrada de un {{DOMxRef("ScriptProcessorNode")}} está listo para ser procesado.
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : El navegador puede reproducir el contenido multimedia, pero calcula que no se han cargado suficientes datos para reproducirlo hasta el final sin tener que detenerse para almacenar más contenido en el búfer.
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : El navegador calcula que puede reproducir el contenido multimedia hasta el final sin detenerse para almacenar contenido en el búfer.
- {{domxref("OfflineAudioContext.complete_event", "complete")}}
  - : Finaliza la renderización de un {{DOMxRef("OfflineAudioContext")}}.
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : Se ha actualizado el atributo `duration`.
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : El contenido multimedia se ha vaciado; por ejemplo, este evento se envía si el contenido multimedia ya se había cargado (total o parcialmente) y se llama al método [`load()`](/es/docs/Web/API/HTMLMediaElement/load) para volver a cargarlo.
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : La reproducción se ha detenido porque se alcanzó el final del contenido multimedia.
- {{domxref("HTMLMediaElement.error_event", 'error')}}
  - : Se ha producido un error al obtener los datos multimedia, o el tipo de recurso no es un formato multimedia compatible.
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : Ha terminado de cargarse el primer fotograma del contenido multimedia.
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : Los metadatos han sido cargados.
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : Se dispara cuando el navegador ha comenzado a cargar el recurso.
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : La reproducción se ha pausado.
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : La reproducción ha comenzado.
- {{domxref("HTMLMediaElement.playing_event", 'playing')}}
  - : La reproducción está lista para comenzar tras haber estado pausada o retrasada por falta de datos.
- {{domxref("HTMLMediaElement.progress_event", 'progress')}}
  - : Se dispara periódicamente mientras el navegador carga un recurso.
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : La velocidad de reproducción ha cambiado.
- {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
  - : Ha finalizado una operación de _búsqueda_.
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : Ha comenzado una operación de _búsqueda_.
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : El agente de usuario está intentando obtener datos multimedia, pero estos no llegan de forma inesperada.
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : Se ha suspendido la carga de datos multimedia.
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : Se ha actualizado el tiempo indicado por el atributo `currentTime`.
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : El volumen ha cambiado.
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : La reproducción se ha detenido debido a una falta temporal de datos.

## Notas de uso

No todos los navegadores admiten los mismos formatos de vídeo; puedes proporcionar varias fuentes dentro de elementos {{htmlelement("source")}} anidados, y el navegador usará entonces la primera que sea capaz de interpretar.

```html
<video controls>
  <source src="myVideo.webm" type="video/webm" />
  <source src="myVideo.mp4" type="video/mp4" />
  <p>
    Tu navegador no admite vídeo HTML. En su lugar, aquí tienes un
    <a href="myVideo.mp4" download="myVideo.mp4">enlace al vídeo</a>.
  </p>
</video>
```

Al utilizar elementos {{htmlelement("source")}}, el navegador intenta cargar cada fuente de forma secuencial. Si una fuente falla (por ejemplo, debido a una URL no válida o a un formato no admitido), se intenta con la siguiente, y así sucesivamente. Se dispara un evento `error` en el elemento `<video>` después de que hayan fallado todas las fuentes; los eventos `error` no se disparan en cada elemento `<source>` individual.

Ofrecemos una [guía completa y detallada sobre los tipos de archivo multimedia](/es/docs/Web/Media/Guides/Formats) y la [guía de códecs de vídeo admitidos](/es/docs/Web/Media/Guides/Formats/Video_codecs). También está disponible una guía sobre los [códecs de audio que se pueden usar junto a ellos](/es/docs/Web/Media/Guides/Formats/Audio_codecs).

Otras notas de uso:

- Si no especificas el atributo `controls`, el vídeo no incluirá los controles predeterminados del navegador; puedes crear tus propios controles personalizados usando JavaScript y la API {{domxref("HTMLMediaElement")}}. Consulta [Crear un reproductor de vídeo multiplataforma](/es/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player) para más detalles.
- Para permitir un control preciso sobre tu contenido de vídeo (y audio), los `HTMLMediaElement` disparan muchos [eventos](/es/docs/Web/API/HTMLMediaElement#eventos) diferentes. Además de ofrecer capacidad de control, estos eventos te permiten monitorizar el progreso tanto de la descarga como de la reproducción del contenido multimedia, así como su estado y posición de reproducción.
- Puedes usar la propiedad {{cssxref("object-position")}} para ajustar la posición del vídeo dentro del marco del elemento, y la propiedad {{cssxref("object-fit")}} para controlar cómo se ajusta el tamaño del vídeo para encajar en el marco.
- Para mostrar subtítulos junto con tu vídeo, puedes usar algo de JavaScript junto con el elemento {{htmlelement("track")}} y el formato [WebVTT](/es/docs/Web/API/WebVTT_API). Consulta [Añadir subtítulos a vídeos HTML](/es/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) para más información.
- Puedes reproducir archivos de audio usando un elemento `<video>`. Esto puede resultar útil, por ejemplo, si necesitas reproducir audio junto con una transcripción [WebVTT](/es/docs/Web/API/WebVTT_API), ya que el elemento {{HTMLElement("audio")}} no permite subtítulos mediante WebVTT.
- Para probar el contenido alternativo en navegadores que admiten el elemento, puedes reemplazar `<video>` por un elemento inexistente como `<notavideo>`.

Una buena fuente general de información sobre el uso de `<video>` en HTML es el tutorial para principiantes [Vídeo y audio HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Estilo con CSS

El elemento `<video>` es un elemento reemplazado — su valor de {{cssxref("display")}} es `inline` de forma predeterminada — pero su ancho y alto predeterminados en el viewport quedan definidos por el vídeo que se está incrustando.

No existen consideraciones especiales para aplicar estilos a `<video>`; una estrategia habitual es asignarle un valor `display` de `block` para facilitar su posicionamiento, tamaño, etc., y luego proporcionar la información de estilo y diseño que se necesite. [Fundamentos de estilo de un reproductor de vídeo](/es/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) ofrece algunas técnicas de estilo útiles.

### Añadir subtítulos y otras pistas de texto sincronizadas

Las pistas de texto sincronizadas para subtítulos, subtítulos ocultos, encabezados de capítulo, etc., pueden añadirse de forma declarativa anidando el elemento {{HTMLElement("track")}}.
Las pistas se especifican con el formato [Web Video Text Tracks File Format (WebVTT)](/es/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format) (archivos `.vtt`).

Por ejemplo, el siguiente código HTML incluye el archivo "captions.vtt", que se utilizará para superponer subtítulos ocultos al vídeo si el usuario los activa.

```html
<video controls src="video.webm">
  <track default kind="captions" src="captions.vtt" />
</video>
```

También se pueden añadir pistas de texto temporizado mediante programación usando la [WebVTT API](/es/docs/Web/API/WebVTT_API).

### Detectar la adición y eliminación de pistas

Puedes detectar cuándo se añaden o se eliminan pistas de un elemento `<video>` usando los eventos {{domxref("VideoTrackList/addtrack_event", "addtrack")}} y {{domxref("VideoTrackList/removetrack_event", "removetrack")}}. Sin embargo, estos eventos no se envían directamente al propio elemento `<video>`.
En su lugar, se envían al objeto de la lista de pistas dentro del {{domxref("HTMLMediaElement")}} del elemento `<video>` que corresponde al tipo de pista que se añadió al elemento:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Un {{domxref("AudioTrackList")}} que contiene todas las pistas de audio del elemento multimedia.
    Añade un detector de eventos `addtrack` a este objeto para recibir una notificación cuando se añadan nuevas pistas de audio al elemento.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Un {{domxref("VideoTrackList")}} que contiene todas las pistas de vídeo del elemento multimedia.
    Añade un detector de eventos `addtrack` a este objeto para recibir una notificación cuando se añadan pistas de vídeo al elemento.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Un {{domxref("TextTrackList")}} que contiene todas las pistas de texto del elemento multimedia (usadas para subtítulos, subtítulos ocultos, etc.).
    Añade un detector de eventos `addtrack` a este objeto para recibir una notificación cuando se añadan pistas de texto al elemento.

Por ejemplo, para detectar cuándo se añaden o se eliminan pistas de audio de un elemento `<video>`, puedes usar un código como este:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Este código detecta cuándo se añaden o se eliminan pistas de audio del elemento, y llama a una función hipotética en un editor de pistas para registrar y eliminar la pista de la lista de pistas disponibles del editor.

También puedes usar {{domxref("EventTarget.addEventListener", "addEventListener()")}} para escuchar los eventos {{domxref("VideoTrackList/addtrack_event", "addtrack")}} y {{domxref("VideoTrackList/removetrack_event", "removetrack")}}.

### Compatibilidad del servidor con video

Si el tipo MIME del vídeo no está configurado correctamente en el servidor, es posible que el vídeo no se muestre o que aparezca un recuadro gris con una X (si JavaScript está activado).

Si usas el servidor web Apache para servir vídeos WebM, puedes solucionar este problema añadiendo las extensiones del tipo de archivo de vídeo al tipo MIME `video/webm` (la extensión de archivo WebM más común es `.webm`). Para ello, edita el archivo `mime.types` en `/etc/apache` o usa la directiva de configuración `AddType` en `httpd.conf`:

```plain
AddType video/webm .webm
```

Es posible que tu proveedor de alojamiento web ofrezca una interfaz sencilla para cambiar la configuración de tipos MIME de las nuevas tecnologías, hasta que se produzca de forma natural una actualización global.

## Accesibilidad

Los vídeos deben ofrecer tanto subtítulos como transcripciones que describan su contenido con precisión (consulta [Añadir subtítulos a vídeos HTML](/es/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) para más información sobre cómo implementarlos). Los subtítulos permiten que las personas con pérdida auditiva comprendan el contenido de audio de un vídeo mientras se está reproduciendo, mientras que las transcripciones permiten que quienes necesitan más tiempo puedan revisar el contenido de audio al ritmo y en el formato que les resulte más cómodo.

Cabe destacar que, aunque puedes subtitular contenido de solo audio, únicamente puedes hacerlo cuando reproduces ese audio dentro de un elemento `<video>`, ya que el área de vídeo del elemento es la que se usa para mostrar los subtítulos. Este es uno de los escenarios especiales en los que resulta útil reproducir audio dentro de un elemento de vídeo.

Si se usan servicios de subtitulado automático, es importante revisar el contenido generado para asegurarte de que representa fielmente el vídeo original.

Además del diálogo hablado, los subtítulos y las transcripciones también deben identificar la música y los efectos de sonido que transmiten información importante. Esto incluye la emoción y el tono:

```plain
14
00:03:14 --> 00:03:18
[Música de rock dramática]

15
00:03:19 --> 00:03:21
[susurrando] ¿Qué es eso a lo lejos?

16
00:03:22 --> 00:03:24
Es… es un…

16 00:03:25 --> 00:03:32
[Golpes fuertes]
[Vajilla resonando]
```

Los subtítulos no deben obstruir el sujeto principal del vídeo. Se pueden posicionar usando [la configuración de cue `align` de VTT](/es/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format).

- [Web Video Text Tracks Format (WebVTT)](/es/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [Explicaciones de la Pauta 1.2 de MDN Understanding WCAG](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#pauta_1.2_—_proporcionar_alternativas_para_los_medios_tempo-dependientes)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Ejemplos

### Fuente única

Este ejemplo reproduce un vídeo al activarse, proporcionando al usuario los controles de vídeo predeterminados del navegador para manejar la reproducción.

#### HTML

```html
<!-- Ejemplo básico de vídeo -->
<!-- 'Big Buck Bunny', con licencia CC 3.0 de Blender Foundation. Alojado en archive.org -->
<!-- Póster de peach.blender.org -->
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Lo sentimos, tu navegador no admite vídeos incrustados, pero no te preocupes,
  puedes
  <a href="https://archive.org/details/BigBuckBunny_124">descargarlo</a>
  y verlo con tu reproductor de vídeo favorito.
</video>
```

#### Resultado

{{EmbedLiveSample('Fuente única', '', '400')}}

Hasta que el vídeo comienza a reproducirse, se muestra en su lugar la imagen indicada en el atributo `poster`. Si el navegador no admite la reproducción de vídeo, se muestra el texto alternativo.

### Varias fuentes

Este ejemplo se basa en el anterior, ofreciendo tres fuentes distintas para el contenido multimedia; esto permite ver el vídeo independientemente de los códecs de vídeo que admita el navegador.

#### HTML

```html
<!-- Uso de varias fuentes como alternativas para una etiqueta de vídeo -->
<!-- 'Elephants Dream' de Orange Open Movie Project Studio, con licencia CC-3.0, alojado en archive.org -->
<!-- Póster alojado en Wikimedia -->
<video
  width="620"
  controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi" />
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4" />

  Lo sentimos, tu navegador no admite vídeos incrustados, pero no te preocupes,
  puedes
  <a
    href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    download="ed_1024_512kb.mp4">
    descargar el MP4
  </a>
  y verlo con tu reproductor de vídeo favorito.
</video>
```

#### Resultado

{{EmbedLiveSample('Varias fuentes', '', '400')}}

Primero se intenta con AVI. Si no se puede reproducir, se intenta con [MP4](/es/docs/Web/Media/Guides/Formats/Containers). Se muestra un mensaje alternativo si no se admite el elemento de vídeo, pero no si fallan todas las fuentes.

Algunos tipos de archivo multimedia te permiten proporcionar información más específica mediante el parámetro [`codecs`](/es/docs/Web/Media/Guides/Formats/codecs_parameter) como parte de la cadena de tipo del archivo. Por ejemplo, `video/webm; codecs="vp8, vorbis"` indica que el archivo es un vídeo [WebM](/es/docs/Web/Media/Guides/Formats/Containers) que usa [VP8](/es/docs/Web/Media/Guides/Formats/Video_codecs) para el vídeo y [Vorbis](/es/docs/Web/Media/Guides/Formats/Audio_codecs) para el audio.

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories">Categorías de contenido</a>
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo">Contenido de flujo</a>, contenido de frase, contenido incrustado. Si tiene el atributo <a href="#controls"><code>controls</code></a>: contenido interactivo y contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <p>
          Si el elemento tiene un atributo <a href="#src"><code>src</code></a>: cero o más elementos {{HTMLElement("track")}}, seguidos de contenido transparente que no contenga elementos multimedia, es decir, ni {{HTMLElement("audio")}} ni <code>&lt;video&gt;</code>.
        </p>
        <p>
          En caso contrario: cero o más elementos {{HTMLElement("source")}}, seguidos de cero o más elementos {{HTMLElement("track")}}, seguidos de contenido transparente que no contenga elementos multimedia, es decir, ni {{HTMLElement("audio")}} ni <code>&lt;video&gt;</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>Ninguna; tanto la etiqueta de apertura como la de cierre son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Elementos primarios permitidos</th>
      <td>Cualquier elemento que acepte contenido incrustado.</td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Sin rol correspondiente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td><a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLVideoElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Guía de tipos y formatos multimedia en la web](/es/docs/Web/Media/Guides/Formats)
  - [Formatos de contenedor multimedia (tipos de archivo)](/es/docs/Web/Media/Guides/Formats/Containers)
  - [Guía de códecs de vídeo web](/es/docs/Web/Media/Guides/Formats/Video_codecs)
  - [Guía de códecs de audio web](/es/docs/Web/Media/Guides/Formats/Audio_codecs)

- Posicionar y ajustar el tamaño de la imagen dentro de su marco: {{cssxref("object-position")}} y {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Vídeo y audio HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipular vídeo mediante canvas](/es/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Configurar servidores para contenido multimedia Ogg](/es/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
