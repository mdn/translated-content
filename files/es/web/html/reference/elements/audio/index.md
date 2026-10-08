---
title: "`<audio>`: elemento HTML para incrustar audio"
short-title: <audio>
slug: Web/HTML/Reference/Elements/audio
l10n:
  sourceCommit: d1aa0dbd7441564e6ce8f6706c2022a2e1912d8c
---

El elemento [HTML](/es/docs/Web/HTML) **`<audio>`** se usa para incrustar contenido de sonido en documentos. Puede contener una o más fuentes de audio, representadas mediante el atributo `src` o el elemento {{HTMLElement("source")}}: el navegador elegirá la más adecuada.
También puede usarse como destino de contenido multimedia en streaming, usando un {{domxref("MediaStream")}}.

{{InteractiveExample("HTML Demo: &lt;audio&gt;", "tabbed-standard")}}

```html interactive-example
<figure>
  <figcaption>Escucha al T-Rex:</figcaption>
  <audio controls src="/shared-assets/audio/t-rex-roar.mp3"></audio>
  <a href="/shared-assets/audio/t-rex-roar.mp3"> Descargar audio </a>
</figure>
```

```css interactive-example
figure {
  margin: 0;
}
```

El ejemplo anterior muestra el uso básico del elemento `<audio>`.
Igual que con el elemento {{htmlelement("img")}}, incluimos en el atributo `src` la ruta del contenido multimedia que queremos incrustar. También podemos añadir otros atributos para indicar, por ejemplo, si queremos que se reproduzca automáticamente y en bucle, o si queremos mostrar los controles de audio predeterminados del navegador.

El contenido entre las etiquetas de apertura y cierre `<audio></audio>` se muestra como una alternativa en los navegadores que no son compatibles con el elemento.

## Atributos

Los atributos de este elemento incluyen los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `autoplay`
  - : Un atributo booleano: si se especifica, el audio empezará a reproducirse automáticamente en cuanto sea posible, sin esperar a que todo el archivo de audio termine de descargarse.

    > [!NOTE]
    > Los sitios que reproducen automáticamente audio (o videos con una pista de audio) pueden ser una experiencia desagradable para los usuarios, por lo que se deben evitar siempre que sea posible.
    > Si necesitas ofrecer la reproducción automática, haz que sea opcional (exigiendo que el usuario la habilite específicamente).
    > Sin embargo, puede ser útil al crear elementos multimedia cuya fuente se establecerá más adelante, bajo el control del usuario.
    > Consulta nuestra [guía de reproducción automática](/es/docs/Web/Media/Guides/Autoplay) para obtener más información sobre cómo usarla correctamente.

    > [!NOTE]
    > El audio con el atributo [`loading="lazy"`](#loading) establecido no empezará a descargarse ni a reproducirse automáticamente hasta que sus controles estén cerca del viewport o dentro de él. El audio con carga diferida sin el atributo `controls` no se reproducirá automáticamente.

- `controls`
  - : Si este atributo está presente, el navegador ofrecerá controles para que el usuario pueda gestionar la reproducción del audio, como el volumen, la búsqueda dentro de la pista y la pausa o reanudación de la reproducción.

- `controlslist`
  - : Cuando se especifica, el atributo [`controlslist`](https://wicg.github.io/controls-list/explainer.html) ayuda al navegador a elegir qué controles mostrar en el elemento `audio` siempre que el navegador muestre su propio conjunto de controles (es decir, cuando se especifica el atributo `controls`).

    Los valores permitidos son `nodownload`, `nofullscreen` y `noremoteplayback`.

- [`crossorigin`](/es/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Este atributo [enumerado](/es/docs/Glossary/Enumerated) indica si se debe usar CORS para obtener el archivo de audio correspondiente. Los [recursos con CORS habilitado](/es/docs/Web/HTML/How_to/CORS_enabled_image) pueden reutilizarse en el elemento {{HTMLElement("canvas")}} sin quedar _contaminados_. Los valores permitidos son:
    - `anonymous`
      - : Envía una solicitud de origen cruzado sin credenciales. Es decir, envía la cabecera HTTP `Origin:` sin cookie, sin certificado X.509 y sin autenticación HTTP Basic. Si el servidor no proporciona credenciales al sitio de origen (al no establecer la cabecera HTTP `Access-Control-Allow-Origin:`), el recurso quedará _contaminado_ y su uso restringido.
    - `use-credentials`
      - : Envía una solicitud de origen cruzado con credenciales. Es decir, envía la cabecera HTTP `Origin:` con una cookie, un certificado, o con autenticación HTTP Basic. Si el servidor no da credenciales al sitio de origen (mediante la cabecera HTTP `Access-Control-Allow-Credentials:`), el recurso quedará _contaminado_ y su uso, restringido.

    Si no está presente, el recurso se obtiene sin una solicitud CORS (es decir, sin enviar la cabecera HTTP `Origin:`), lo que impide su uso no contaminado en elementos {{HTMLElement('canvas')}}. Si el valor no es válido, se trata como si se hubiera usado la palabra clave enumerada **anonymous**. Consulta los [atributos de configuración de CORS](/es/docs/Web/HTML/Reference/Attributes/crossorigin) para más información.

- `disableremoteplayback`
  - : Un atributo booleano que sirve para desactivar la reproducción remota en dispositivos conectados mediante tecnologías por cable (HDMI, DVI, etc.) o inalámbricas (Miracast, Chromecast, DLNA, AirPlay, etc.). Consulta la propuesta de [especificación de la Remote Playback API](https://w3c.github.io/remote-playback/#the-disableremoteplayback-attribute) para más información.

    En Safari, puedes usar [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) como alternativa de respaldo.

- `loading` {{experimental_inline}}
  - : Indica cómo debe cargar el audio el navegador:
    - `eager`
      - : Carga el audio de inmediato, independientemente de si en ese momento se encuentra dentro del viewport visible (este es el valor predeterminado).
    - `lazy`
      - : Aplaza la carga del audio hasta que los controles llegan a una distancia calculada del viewport, según lo defina el navegador.

        > [!NOTE]
        > Para que los elementos de audio se intersecten visiblemente con el viewport, tienen que ser visibles. Los navegadores usan el atributo `controls` para hacer visibles los elementos de audio, por lo que es necesario para la carga diferida. El audio con carga diferida sin el atributo `controls` no se cargará.

        La carga diferida evita consumir el ancho de banda de red y almacenamiento necesario para gestionar el audio hasta que existe una certeza razonable de que será necesario. Esto mejora el rendimiento en la mayoría de los casos de uso habituales.

        Es posible que el audio con carga diferida situado en el viewport visual aún no se haya descargado cuando se dispara el evento {{domxref("Window.load_event", "load")}} de `Window`. Esto se debe a que el evento se dispara basándose únicamente en el audio de carga inmediata: el audio de carga diferida no se considera aunque esté dentro del viewport visual al cargar la página inicialmente.

        La carga solo se aplaza cuando JavaScript está habilitado. Es una medida contra el rastreo: si un agente de usuario admitiera la carga diferida con los scripts deshabilitados, un sitio podría seguir averiguando la posición aproximada de desplazamiento de un usuario a lo largo de la sesión; para ello, bastaría con colocar estratégicamente elementos de audio en el código de la página de modo que el servidor pudiera registrar cuántas solicitudes de audio se hacen y cuándo.

        > [!NOTE]
        > El atributo `loading="lazy"` también afecta al atributo [`autoplay`](#autoplay), tal como se describe en esa sección de esta página.

- `loop`
  - : Un atributo booleano: si se especifica, el reproductor de audio volverá automáticamente al principio al llegar al final del audio.

- `muted`
  - : Un atributo booleano que indica la configuración predeterminada de silencio del audio. Si se establece, el audio se reproducirá inicialmente en silencio. Su valor predeterminado es `false`, lo que significa que el audio se oirá cuando se reproduzca.

    > [!NOTE]
    > Para reactivar el sonido, establecer `muted="false"` no funciona: el audio se silenciará siempre que el atributo esté presente. Hay que eliminar el atributo por completo.

- `preload`
  - : Este atributo {{Glossary("enumerated", "enumerado")}} tiene como finalidad ofrecer al navegador una pista sobre lo que el autor cree que dará lugar a la mejor experiencia de usuario. Puede tener uno de los siguientes valores:
    - `none`: indica que el audio no debe precargarse.
    - `metadata`: indica que solo se obtienen los metadatos del audio (por ejemplo, la duración).
    - `auto`: indica que se puede descargar el archivo de audio completo, aunque no se espere que el usuario lo utilice.
    - _cadena vacía_: sinónimo del valor `auto`.

    El valor predeterminado varía según el navegador. La especificación aconseja establecerlo en `metadata`.

    > [!NOTE]
    >
    > - En el audio con el atributo [`loading="lazy"`](#loading), el comportamiento de `preload` solo se aplica cuando los controles del audio están cerca del viewport o dentro de él.
    > - El atributo `autoplay` tiene prioridad sobre `preload`. Si se especifica `autoplay`, es evidente que el navegador necesitará empezar a descargar el audio para reproducirlo.
    > - La especificación no obliga al navegador a respetar el valor de este atributo; se trata de una simple sugerencia.

- `src`
  - : La URL del audio que se va a incrustar. Está sujeta a los [controles de acceso HTTP](/es/docs/Web/HTTP/Guides/CORS). Es opcional: en su lugar, puedes usar el elemento {{htmlelement("source")}} dentro del bloque de audio para especificar el audio que se va a incrustar.

## Eventos

- {{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}} {{Deprecated_Inline}}
  - : El búfer de entrada de un {{DOMxRef("ScriptProcessorNode")}} está listo para ser procesado.
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : El navegador puede reproducir el contenido multimedia, pero estima que no se han cargado suficientes datos para reproducirlo hasta el final sin tener que detenerse para almacenar más contenido en el búfer.
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : El navegador estima que puede reproducir el contenido multimedia hasta el final sin detenerse para almacenar contenido en el búfer.
- {{domxref("OfflineAudioContext/complete_event", "complete")}}
  - : Ha finalizado el renderizado de un {{DOMxRef("OfflineAudioContext")}}.
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : Se ha actualizado el atributo `duration`.
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : El contenido multimedia ha quedado vacío; por ejemplo, este evento se envía si el contenido ya se había cargado (o cargado parcialmente) y se llama al método {{domxref("HTMLMediaElement.load")}} para volver a cargarlo.
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : La reproducción se ha detenido porque se ha llegado al final del contenido multimedia.
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : Ha terminado de cargarse el primer fotograma del contenido multimedia.
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : Se han cargado los metadatos.
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : Se dispara cuando el navegador ha empezado a cargar el recurso.
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : La reproducción ha sido pausada.
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : Ha comenzado la reproducción.
- {{domxref("HTMLMediaElement.playing_event", 'playing')}}
  - : La reproducción está lista para empezar después de haberse pausado o retrasado por falta de datos.
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : Ha cambiado la velocidad de reproducción.
- {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
  - : Se ha completado una operación de _búsqueda_.
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : Ha comenzado una operación de _búsqueda_.
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : El agente de usuario está intentando obtener datos multimedia, pero inesperadamente los datos no llegan.
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : Se ha suspendido la carga de datos multimedia.
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : Se ha actualizado el tiempo indicado por el atributo `currentTime`.
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : Ha cambiado el volumen.
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : La reproducción se ha detenido por una falta temporal de datos.

## Notas de uso

No todos los navegadores admiten los mismos [tipos de archivo](/es/docs/Web/Media/Guides/Formats/Containers) y [códecs de audio](/es/docs/Web/Media/Guides/Formats/Audio_codecs); puedes ofrecer varias fuentes dentro de elementos {{htmlelement("source")}} anidados, y el navegador usará la primera que reconozca:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Descarga el audio en <a href="myAudio.mp3" download="myAudio.mp3">MP3</a> o
    en <a href="myAudio.ogg" download="myAudio.ogg">OGG</a>.
  </p>
</audio>
```

La fuente de audio puede configurarse con cualquier [URL](/es/docs/Web/URI) válida, incluidas las URL HTTP(S) y las [Data URL](/es/docs/Web/URI/Reference/Schemes/data). Si usas URL HTTP(S), ten en cuenta que el comportamiento de la caché del navegador influirá en la frecuencia con la que se solicita el archivo al servidor. Las Data URL incrustan los datos de audio directamente en el HTML, lo que puede ser útil para archivos de audio pequeños, pero no se recomienda para los grandes porque aumenta el tamaño del archivo HTML.

Al utilizar elementos {{htmlelement("source")}}, el navegador intenta cargar cada fuente de forma secuencial. Si una fuente falla (por ejemplo, por una URL no válida o un formato no compatible), se intenta cargar la siguiente, y así sucesivamente. Cuando han fallado todas las fuentes, se dispara un evento `error` en el elemento `<audio>`; los eventos `error` no se disparan en cada elemento `<source>` individual.

También puedes usar la [Web Audio API](/es/docs/Web/API/Web_Audio_API) para generar y manipular directamente transmisiones de audio desde código JavaScript, en lugar de transmitir archivos de audio ya existentes. Puedes asignar a [`srcObject`](/es/docs/Web/API/HTMLMediaElement/srcObject) un objeto {{domxref("MediaStream")}} desde JavaScript. Esto se usa habitualmente para transmisiones de audio en directo o para el procesamiento de audio en tiempo real.

```js
const audioElement = document.querySelector("audio");
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    audioElement.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error al acceder al micrófono", error);
  });
```

Ten en cuenta que las fuentes `MediaStream` tienen limitaciones: no permiten búsquedas y solo admiten un conjunto limitado de códecs.

Ofrecemos una [guía completa y detallada de los tipos de archivo multimedia](/es/docs/Web/Media/Guides/Formats) y de los [códecs de audio que pueden usarse en ellos](/es/docs/Web/Media/Guides/Formats/Audio_codecs). También está disponible [una guía de los códecs de video compatibles](/es/docs/Web/Media/Guides/Formats/Video_codecs).

Otras notas de uso:

- Si no especificas el atributo `controls`, el reproductor de audio no incluirá los controles predeterminados del navegador. Aun así, puedes crear tus propios controles personalizados con JavaScript y la API {{domxref("HTMLMediaElement")}}.
- Para que puedas controlar con precisión tu contenido de audio, los `HTMLMediaElement` disparan muchos [eventos](/es/docs/Web/API/HTMLMediaElement#eventos) distintos. Esto también permite supervisar el proceso de obtención del audio para detectar errores o saber cuándo hay suficiente contenido disponible para empezar a reproducirlo o manipularlo.
- Los elementos `<audio>` no pueden tener subtítulos o leyendas asociados de la misma manera que los elementos `<video>`. Consulta [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/), de Ian Devlin, para obtener información útil y algunas soluciones alternativas.
- Para probar el contenido alternativo en navegadores que sí admiten el elemento, puedes sustituir `<audio>` por un elemento inexistente como `<notanaudio>`.

Una buena fuente general de información sobre el uso de `<audio>` en HTML es el tutorial para principiantes [Video y audio HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Estilos con CSS

El elemento `<audio>` no tiene una representación visual propia a menos que se especifique el atributo `controls`; en ese caso, se muestran los controles predeterminados del navegador.

Por defecto, los controles tienen un valor {{cssxref("display")}} igual a `inline`, y muchas veces conviene cambiarlo a `block` para controlar mejor el posicionamiento y la maquetación, salvo que quieras que queden dentro de un bloque de texto o algo similar.

Puedes dar estilo a los controles predeterminados con propiedades que afectan al bloque como una sola unidad; por ejemplo, puedes aplicarles {{cssxref("border")}}, {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, etc. Sin embargo, no puedes dar estilo a los componentes individuales del reproductor de audio (por ejemplo, cambiar el tamaño de los botones o los iconos, la fuente, etc.), y los controles varían según el navegador.

Para lograr una apariencia coherente en todos los navegadores, tendrás que crear controles personalizados; estos pueden definirse y darles estilo como quieras y, después, usar JavaScript junto con la API {{domxref("HTMLMediaElement")}} para implementar su funcionalidad.

El artículo sobre los conceptos básicos de estilo para reproductores de video [Video player styling basics](/es/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics) ofrece algunas técnicas útiles; aunque está redactado en el contexto de `<video>`, gran parte es igualmente aplicable a `<audio>`.

### Detectar la adición y eliminación de pistas

Puedes detectar cuándo se añaden o se eliminan pistas de un elemento `<audio>` mediante los eventos {{domxref("AudioTrackList/addtrack_event", "addtrack")}} y {{domxref("AudioTrackList/removetrack_event", "removetrack")}}. Sin embargo, estos eventos no se envían directamente al propio elemento `<audio>`. En su lugar, se envían al objeto de lista de pistas del {{domxref("HTMLMediaElement")}} del elemento `<audio>` que corresponde al tipo de pista añadida al elemento:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Una {{domxref("AudioTrackList")}} que contiene todas las pistas de audio del elemento multimedia. Puedes añadir a este objeto un detector de eventos para `addtrack` que te avise cuando se añadan nuevas pistas de audio al elemento.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Añade un detector de eventos `addtrack` a este objeto {{domxref("VideoTrackList")}} para que te informe cuando se añadan pistas de video al elemento.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Añade un detector de eventos `addtrack` a esta {{domxref("TextTrackList")}} para recibir una notificación cuando se añadan nuevas pistas de texto al elemento.

> [!NOTE]
> Aunque se trata de un elemento `<audio>`, sigue teniendo listas de pistas de video y de texto, y de hecho puede usarse para presentar video, aunque las implicaciones para la interfaz de usuario pueden resultar extrañas.

Por ejemplo, para detectar cuándo se añaden o se eliminan pistas de audio de un elemento `<audio>`, puedes usar un código como este:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Este código monitorea la adición y eliminación de pistas de audio en el elemento y llama a una función hipotética de un editor de pistas para registrar o eliminar la pista en la lista de pistas disponibles del editor.

También puedes usar {{domxref("EventTarget.addEventListener", "addEventListener()")}} para escuchar los eventos {{domxref("AudioTrackList/addtrack_event", "addtrack")}} y {{domxref("AudioTrackList/removetrack_event", "removetrack")}}.

## Accesibilidad

El audio con diálogo hablado debe ofrecer tanto subtítulos como transcripciones que describan con precisión su contenido. Los subtítulos, que se especifican mediante [WebVTT](/es/docs/Web/API/WebVTT_API), permiten que las personas con discapacidad auditiva entiendan el contenido de una grabación de audio mientras se reproduce; por otro lado, las transcripciones permiten a quienes necesitan más tiempo revisar el contenido de la grabación a un ritmo y en un formato que les resulten cómodos.

Si se usan servicios de subtitulado automático, es importante revisar el contenido generado para asegurarse de que represente con exactitud el audio original.

El elemento `<audio>` no admite WebVTT directamente. Tendrás que buscar una biblioteca o un framework que ofrezca esa capacidad, o escribir tú mismo el código para mostrar los subtítulos. Una opción es reproducir tu audio utilizando un elemento {{HTMLElement("video")}}, que sí admite WebVTT.

Además del diálogo hablado, los subtítulos y las transcripciones también deberían identificar la música y los efectos de sonido que transmiten información importante, como la emoción y el tono. Por ejemplo, en el siguiente WebVTT, observa el uso de corchetes para indicar el tono y transmitir matices emocionales al espectador; esto puede ayudar a transmitir el ambiente que, de otro modo, proporcionarían la música, los sonidos no verbales, los efectos de sonido esenciales, etc.

<!-- cSpell:ignore switchwatch Swisswatch -->

```plain
1
00:00:00 --> 00:00:45
[Música techno enérgica]

2
00:00:46 --> 00:00:51
¡Bienvenido al podcast de Time Keeper! En este episodio, ¿qué es un Swisswatch y cómo se distingue de un reloj de pulsera suizo?

16
00:00:52 --> 00:01:02
[Riendo] ¡Perdón! Quiero decir: ¿qué reloj de pulsera es un reloj suizo?
```

También es una buena práctica proporcionar algún contenido (como el enlace de descarga directa) como alternativa para los espectadores que usan un navegador que no admite el elemento `<audio>`:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Descarga el audio en <a href="myAudio.mp3">MP3</a> o en
    <a href="myAudio.ogg" download="myAudio.ogg">OGG</a>.
  </p>
</audio>
```

- [Formato Web Video Text Tracks (WebVTT)](/es/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, explicaciones de la pauta 1.2](/es/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#pauta_1.2_—_proporcionar_alternativas_para_los_medios_tempo-dependientes)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Ejemplos

### Uso básico

El siguiente ejemplo muestra el uso básico del elemento `<audio>` para reproducir un archivo OGG. Se reproducirá automáticamente debido al atributo `autoplay` (si la página tiene permiso para ello) e incluye además contenido alternativo.

```html
<!-- Reproducción de audio básica -->
<audio src="AudioTest.ogg" autoplay>
  <a href="AudioTest.ogg" download="AudioTest.ogg">Descargar audio OGG</a>.
</audio>
```

Para saber cuándo funciona la reproducción automática, cómo obtener permiso para usarla y cómo y cuándo es apropiado hacerlo, consulta nuestra [guía de reproducción automática](/es/docs/Web/Media/Guides/Autoplay).

### Elemento \<audio> con elemento \<source>

Este ejemplo especifica qué pista de audio incrustar usando el atributo `src` en un elemento `<source>` anidado, en lugar de hacerlo directamente en el elemento `<audio>`. Siempre es útil incluir el tipo MIME del archivo en el atributo `type`, ya que así el navegador puede saber al instante si puede reproducir ese archivo y, en caso contrario, no pierde tiempo con él.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  <a href="foo.wav" download="foo.wav">Descargar audio WAV</a>.
</audio>
```

### \<audio> con varios elementos \<source>

Este ejemplo incluye varios elementos `<source>`. El navegador intenta cargar el primer elemento fuente (Opus) si puede reproducirlo; si no, pasa al segundo (Vorbis) y, por último, al MP3:

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Guides/Content_categories#contenido_de_flujo"
          >Contenido de flujo</a
        >, contenido de frase, contenido incrustado. Si tiene un atributo
        <a href="#controls"><code>controls</code></a>: contenido interactivo y
        contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        Si el elemento tiene un atributo <a href="#src"><code>src</code></a>:
        cero o más elementos {{HTMLElement("track")}} seguidos de contenido
        transparente que no contenga elementos multimedia
        <code>&lt;audio&gt;</code> ni {{HTMLElement("video")}}.<br />En caso
        contrario: cero o más elementos {{HTMLElement("source")}} seguidos de
        cero o más elementos {{HTMLElement("track")}} seguidos de contenido
        transparente que no contenga elementos multimedia
        <code>&lt;audio&gt;</code> ni {{HTMLElement("video")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>Ninguna: las etiquetas de apertura y de cierre son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
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
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Tecnologías multimedia de la web](/es/docs/Web/Media)
  - [Formatos de contenedor multimedia (tipos de archivo)](/es/docs/Web/Media/Guides/Formats/Containers)
  - [Guía de los códecs de audio usados en la web](/es/docs/Web/Media/Guides/Formats/Audio_codecs)

- [Web Audio API](/es/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Área de aprendizaje: video y audio HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Conceptos básicos de audio multinavegador](/es/docs/Web/Media/Guides/Audio_and_video_delivery/Cross-browser_audio_basics)
