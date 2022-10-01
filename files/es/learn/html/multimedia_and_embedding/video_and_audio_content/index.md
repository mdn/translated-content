---
title: Contenido de audio y video
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
translation_of: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

Ahora que estamos cómodos añadiendo imágenes simples a una página web, el siguiente paso será empezar a agregar reproductores de audio y video a tu documento HTML. En este artículo veremos cómo hacerlo con los elementos {{htmlelement("video")}} y {{htmlelement("audio")}}; luego terminaremos viendo como agregar subtítulos a nuestros videos.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Conocimientos básicos de computación,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >programas básicos instalados</a
        >, conocimiento básico de
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabajo con archivos</a
        >, familiaridad con los fundamentos de HTML (como está cubierto en
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Empezando con HTML</a
        >) e
        <a href="/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >Imágenes en HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender como incrustar contenido de audio y video en una página web, y
        agregar subtítulos a los videos.
      </td>
    </tr>
  </tbody>
</table>

## Audio y video en la web

Los desarrolladores web han querido usar audio y video en la web por mucho tiempo, desde comienzos del 2000 cuando empezamos a tener un ancho de banda suficientemente rápido para soportar cualquier tipo de video (los archivos de video son mucho más grandes que texto o imágenes). En los inicios, las tecnologías web nativas como HTML no tenían el soporte para incrustar audio y video en la Web, tecnologías privadas (o basadas en plugins) como [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) (y después, [Silverlight](https://en.wikipedia.org/wiki/Microsoft_Silverlight)) se convirtieron populares para manipular este tipo de contenido. Este tipo de tecnología funcionó bien, pero tenía ciertos problemas, incluídos el no trabajar bien con las características de HTML/CSS, problemas de seguridad y problemas de accesibilidad.

Una solución nativa podría resolver mucho de esto si es implementado correctamente. Afortunadamente, unos pocos años después la especificación {{glossary("HTML5")}} tenía tales características agregadas, con los elementos {{htmlelement("video")}} y {{htmlelement("audio")}}, y algo nuevo {{Glossary("JavaScript")}} {{Glossary("API","APIs")}} para controlar estos. No veremos Javascript aquí — solo los fundamentos básicos que se pueden lograr con HTML.

No te enseñaremos como crear archivos de audio y video — eso requiere un conocimiento completamente diferente. Por el contrario, te proporcionamos [archivos de audio y video de muestra con códigos de ejemplo](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content) para que tu mismo experimentes, en caso de que no puedas conseguirlos por ti mismo.

> **Nota:** **Observación**: Antes de empezar, también deberías saber que hay un puñado de OVPs (proveedores de video online) como [YouTube](https://www.youtube.com/), [Dailymotion](http://www.dailymotion.com) y [Vimeo](https://vimeo.com/), y proveedores de audio como [Soundcloud](https://soundcloud.com/). Tales compañías ofrecen una conveniente fácil forma de hospedar y consumir videos, y que no tienes que preocuparte sobre el enorme ancho de banda que se consume. Los OVPs normalmente usan código prefabricado para incrustar video/audio en tus sitios web; si usas ese camino, puedes evitar algunas dificultates que discutimos en este artículo. Discutiremos este tipo de servicios un poco más en el siguiente artículo.

### El elemento \<video>

El elemento {{htmlelement("video")}} nos permite incrustar video fácilmente. Un ejemplo muy simple luce como lo siguiente:

```html
<video src="rabbit320.webm" controls>
  <p>Tu navegador no soporta HTML5 video. Aquí está el <a href="rabbit320.webm">enlace del video</a>.</p>
</video>
```

Las características a notar son:

- {{htmlattrxref("src","video")}}
  - : De la misma manera que para el elemento [`<img>`](/es/docs/Web/HTML/Element/img), el atributo `src` (source) contiene una ruta al video que deseas incrustar. Funciona de la misma manera.
- {{htmlattrxref("controls","video")}}
  - : Los usuarios deben ser capaces de controlar la reproducción de video y audio (esto es especialmente crítico en personas que padecen [epilepsia](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology)). Se debe utilizar el atributo `controls` para incluir la interfaz de control del browser, o construir la nuestra utilizando la [JavaScript API](/es/docs/Web/API/HTMLMediaElement) apropiada. Como mínimo la interfaz debe incluir una manera de empezar y terminar la reproducción, y ajustar el volumen.
- El párrafo dentro de la etiqueta `<video>`
  - : Se lo llama **fallback content** (contenido de reserva) — y será mostrado si el browser desde el que se está accediendo a la página no soporta el elemento `<video>`, permitiéndonos proveer un fallback para browsers más antiguos. Puede ser de la manera que se quiera; en este caso proporcionamos un link directo al archivo de video, por lo que el usuario puede al menos acceder de alguna manera, independientemente del browser que esté usando.

El video incrustado se verá así:

![A simple video player showing a video of a small white rabbit](https://mdn.mozillademos.org/files/12794/simple-video.png)

Puedes [probar el ejemplo](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) aquí (también el [código fuente](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)).

### Uso de formatos múltiples para mejorar la compatibilidad

Hay un problema con el ejemplo de arriba, que quizás hayas notado si trataste de acceder al [ejemplo en línea](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) con un navegador como Safari o Internet Explorer. ¡El video no funciona! Esto es porque diferentes navegadores soportan diferentes formatos de video (y audio).

#### Contenidos de un archivo de medios

Repasemos la terminología rápidamente. Formatos como MP3, MP4 y WebM son llamados **formatos contenedores**. Estos contienen diferentes partes que componen toda la canción o video — como una pista de audio y una pista de video (en el caso del video), y metadatos para describir los contenidos que se presentan, qué codecs se usan para codificar sus canales, etcétera.

Un archivo WebM contiene una película que tiene una pista principal de video y otra pista con un ángulo alternativo, junto con audio en inglés y español, además de una pista con comentarios en inglés, lo que puede ser conceptualizado en el siguiente diagrama. También se incluyeron pistas de texto que contienen los subtítulos de la película en inglés, español y para el comentario.

![](https://mdn.mozillademos.org/files/16898/ContainersAndTracks.svg)

Las pistas de audio y video dentro del contenedor mantienen los datos en un formato adecuado para el codec usado para codificar ese medio. Se usan diferentes formatos para pistas de audio versus de video. Cada pista de audio es codificada usando un codec de audio mientras que las pistas de video son codificadas (como probablemente ya has adivinado) usando un codec de video. Así como hemos hablado previamente, diferentes navegadores soportan diferentras formatos de audio y video, y diferentes formatos contenedores (como MP3, MP4 y WebM, que pueden contener diferentes tipos de video y audio).

Por ejemplo:

- Un WebM usualmente contiene paquetes de Ogg Vorbis audio con VP8/VP9 video. Soportado principalmente por Firefox y Chrome.
- Un MP4 contiene a menudo paquetes AAC o audio MP3 con videos H.264. Principalmente soportados en Internet Explorer y Safari.
- El antiguo contenedor Ogg suele usar audio Ogg Vorbis y video Ogg Theora. Es principalmente soportado por Firefox y Chrome, pero básicamente ha sido reemplazado por el formato WebM de mejor calidad.

Un reproductor de audio tenderá a reproducir directamente un track de audio. Por ejemplo un archivo MP3 u Ogg. No necesitan contenedores.

> **Nota:** No es tan simple como se ve en nuestra [tabla de compatibilidad de codecs audio-video](/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility). Además, muchos browsers de plataformas móviles pueden reproducir un formato no soportado entregándoselo al reproductor multimedia del sistema subyacente para que lo reproduzca. Pero esto servirá por ahora.

Los formatos anteriores existen para comprimir los archivos de audio y video volviéndolos manejables (el tamaño sin comprimir es muy grande). Los browsers contienen diferentes **{{Glossary("Codec","Codecs")}}**, como Vorbis o H.264, los cuales son usados para convertir el sonido y video comprimidos en binario y viceversa. Pero desafortunadamente, como indicamos antes, no todos los browsers soportan los mismos codecs, por lo tanto, habrá que proveer varios archivos para cada producción multimedia. Si te falta el codec correcto para decodificar el medio, simplemente no se reproducirá.

> **Nota:** Debes estar preguntándote por qué sucede esto. El **MP3** (para audio) y el **MP4/H.264** (para video) son ampliamente compatibles y de buena calidad, sin embargo, también están patentados — sus patentes cubren MP3 al menos hasta 2017 y a H.264 hasta 2027, lo que significa que los browsers que no tienen la patente tienen que pagar grandes sumas de dinero para soportar estos formatos. Además, mucha gente no permite el software con restricciones, por estar a favor de formatos abiertos. Por todo esto es que tenemos que proveer múltiples formatos para los diferentes browsers.

Está bien, ¿pero cómo lo hacemos? Miremos el siguiente [ejemplo actualizado (](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)[pruébalo en vivo aquí](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)), o acá:

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Su navegador no soporta video HTML5. Aquí hay un <a href="rabbit320.mp4">enlace al video</a>.</p>
</video>
```

Tomamos el atributo `src` del tag `<video>` y en su lugar incluimos elementos separados {{htmlelement("source")}} que apuntan a sus propias fuentes. En este caso el browser irá a los elementos `<source>` y reproducirá el primero de los elementos que el codec soporte. Incluir fuentes WebM y MP4 debería bastar para reproducir el video en la mayoría de los browsers en estos días.

Cada elemento `<source>` tambien tiene un atributo `type` . Esto es opcional, pero se recomienda que se incluyan, ya que contienen {{glossary("MIME type","MIME types")}} de los archivos de vídeo y los navegadores pueden leerlos y omitir inmediatamente los vídeos que no tienen. Si no estan incluidos, los navegadores cargarán e intentarán reproducir cada archivo hasta que encuentren uno que funcione, lo que llevará aún más tiempo y recursos.

> **Nota:** Nuestro [articulo sobre soporte de formatos multimedia](/es/docs/Web/HTML/Supported_media_formats) contiene algunos de los habituales {{glossary("MIME type","MIME types")}}.

### Otras características de la etiqueta \<video>

Hay varias otras características que puede incluir en un vídeo HTML5. Eche un vistazo a nuestro tercer ejemplo, a continuación.

```html
<video controls width="400" height="400"
       autoplay loop muted
       poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

Esto nos dará un resultado que se parece a esto:

![A video player showing a poster image before it plays. The poster image says HTML5 video example, OMG hell yeah!](https://mdn.mozillademos.org/files/12796/extra-video-features.png)Las nuevas características son:

- {{htmlattrxref("width","video")}} y {{htmlattrxref("height","video")}}
  - : Puede controlar el tamanño con estos atributos o con [CSS](/es/docs/Glossary/CSS). En ambos casos, los vídeos mantienen su relación **anchura - altura nativa**. Si la relación de aspecto no se mantiene con los tamañis establecidos, el vídeo crecerá para rellenar el espacio horizontalmente y el el espacio sin rellenar sólo recibirá un color de fondo sólido de forma predeterminada.
- {{htmlattrxref("autoplay","video")}}
  - : Hace que el audio o el vídeo empiece a reproducirse de inmediato, mientras se carga el resto de la página. Le aconsejamos que no utilice vídeo (o audio) de reproducción automática en sus sitios, ya que los usuarios pueden encontralo molesto.
- {{htmlattrxref("loop","video")}}
  - : Hace que el vídeo (o audio) comience a reproducirse cada vez que finaliza.Esto puede en ocasiones resultar molesto, así que utilizalo solo si es realmente necesario.
- {{htmlattrxref("muted","video")}}
  - : Hace que los medios se reproduzcan con el sonido apagado de forma predeterminada.
- {{htmlattrxref("poster","video")}}
  - : La URL de una imagen que se mostrará antes de reproducir el vídeo. Está destinado a ser utilizado para una pantalla de presentación o pantalla publicitaria (miniatura del vídeo).
- {{htmlattrxref("preload","video")}}

  - : Se utiliza para almacenar en búfer archivos grandes; Puede tomar uno de estos tres valores:

    - `"none"` no almacena el archivo en el búfer
    - `"auto"` almacena el archivo multimedia
    - `"metadata"` almacena solo los metadatos del archivo

Puedes encontrar el ejemplo anterior disponible en [play live on Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (también [see the source code](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Tenga en cuenta que hemos incluido el atributo `autoplay` en la versión en vivo — Si el vídeo comienza a reproducirse tan pronto como se cargue la página no podrá ver la miniatura!

### El elemento \<audio>

El elemento {{htmlelement("audio")}} funciona exactamente de la misma forma que el elemento {{htmlelement("video")}}, con algunas pequeñas diferencias como se describe a continuación. Un ejemplo típico podría ser así:

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
</audio>
```

Esto produce algo como lo siguiente en un navegador:

![A simple audio player with a play button, timer, volume control, and progress bar](https://mdn.mozillademos.org/files/12798/audio-player.png)

> **Nota:** Puedes [reproducir este ejemplo de audio](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html) en Github (también, puedes ver el [código fuente del reproductor de audio](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html).)

Esto ocupa menos espacio que un reproductor de video, ya que no hay un componente visual; solo necesita mostrar los controles para reproducir el audio. Otras diferencias con respecto al video HTML5 son las siguentes:

- El elemento {{htmlelement("audio")}} no soporta los atributos `width`/`height` — de nuevo, no hay un componente visual,por no que no hay nada a lo que asignar un width o height (ancho o alto).
- Tampoco es compatible con el atributo `poster` — de nuevo , no hay componente visual.

Además de esto, `<audio>` admite las mismas características que `<video>` — revisa las secciones anteriores para obtener más información sobre ellas.

### Reinicio de la reproducción multimedia

En cualquier momento, puede restablecer los medios al principio—incluyendo el proceso de selección de la mejor fuente de medios, si se especifica más de una usando {{HTMLElement("source")}} elementos—llamando al elemento {{domxref("HTMLMediaElement.load", "load()")}} method:

```js
var mediaElem = document.getElementById("my-media-element");
mediaElem.load();
```

### Detecting track addition and removal

You can monitor the track lists within a media element to detect when tracks are added to or removed from the element's media. For example, you can watch for the {{event("addtrack")}} event being fired on the associated {{domxref("AudioTrackList")}} object (retrieved via {{domxref("HTMLMediaElement.audioTracks")}}) to be informed when audio tracks are added to the media:

```js
var mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function(event) {
  audioTrackAdded(event.track);
}
```

Encontraras mas documentacion acerca de esto en nuestra {{domxref("TrackEvent")}} documentacion.

## Displaying video text tracks

Now we'll discuss a slightly more advanced concept that is really useful to know about. Many people can't or don't want to hear the audio/video content they find on the Web, at least at certain times. For example:

- Many people have auditory impairments (more commonly known as hard of hearing, or deaf) so can't hear the audio.
- Others may not be able to hear the audio because they are in noisy environments (like a crowded bar when a sports game is being shown) or might not want to disturb others if they are in a quiet place (like a library.)
- People who don't speak the language of the video might want a text transcript or even translation to help them understand the media content.

Wouldn't it be nice to be able to provide these people with a transcript of the words being spoken in the audio/video? Well, thanks to HTML5 video you can, with the [WebVTT](/es/docs/Web/API/Web_Video_Text_Tracks_Format) format and the {{htmlelement("track")}} element.

> **Nota:** "Transcribe" means "to write down spoken words as text." The resulting text is a "transcript."

WebVTT is a format for writing text files containing multiple strings of text along with metadata such as what time in the video you want each text string to be displayed, and even limited styling/positioning information. These text strings are called **cues**, and you can display different types for different purposes, the most common being:

- subtitles
  - : Translations of foreign material, for people who don't understand the words spoken in the audio.
- captions
  - : Synchronized transcriptions of dialog or descriptions of significant sounds, to let people who can't hear the audio understand what is going on.
- timed descriptions
  - : Text for conversion into audio, to serve people with visual impairments.

A typical WebVTT file will look something like this:

```
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

...
```

To get this displayed along with the HTML media playback, you need to:

1. Save it as a `.vtt` file in a sensible place.
2. Link to the `.vtt` file with the {{htmlelement("track")}} element. `<track>` should be placed within `<audio>` or `<video>`, but after all `<source>` elements. Use the {{htmlattrxref("kind","track")}} attribute to specify whether the cues are `subtitles`, `captions`, or `descriptions`. Further, use {{htmlattrxref("srclang","track")}} to tell the browser what language you have written the subtitles in.

Here's an example:

```html
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```

This will result in a video that has subtitles displayed, kind of like this:

![Video player with stand controls such as play, stop, volume, and captions on and off. The video playing shows a scene of a man holding a spear-like weapon, and a caption reads "Esta hoja tiene pasado oscuro."](https://mdn.mozillademos.org/files/7887/video-player-with-captions.png)

For more details, please read [Adding captions and subtitles to HTML5 video](/en-US/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). You can [find the example](http://iandevlin.github.io/mdn/video-player-with-captions/) that goes along with this article on Github, written by Ian Devlin (see the [source code](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions) too.) This example uses some JavaScript to allow users to choose between different subtitles. Note that to turn the subtitles on, you need to press the "CC" button and select an option — English, Deutsch, or Español.

> **Nota:** Text tracks also help you with {{glossary("SEO")}}, since search engines especially thrive on text. Text tracks even allow search engines to link directly to a spot partway through the video.

### Active learning: Embedding your own audio and video

For this active learning, we'd (ideally) like you to go out into the world and record some of your own video and audio — most phones these days allow you to record audio and video very easily, and provided you can transfer it on to your computer, you can use it. You may have to do some conversion to end up with a WebM and MP4 in the case of video, and an MP3 and Ogg in the case of audio, but there are enough programs out there to allow you to do this without too much trouble, such as [Miro Video Converter](http://www.mirovideoconverter.com/) and [Audacity](https://sourceforge.net/projects/audacity/). We'd like you to have a go!

If you are unable to source any video or audio, then you can feel free to use our [sample audio and video files](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content) to carry out this exercise. You can also use our sample code for reference.

We would like you to:

1. Save your audio and video files in a new directory on your computer.
2. Create a new HTML file in the same directory, called `index.html`.
3. Add `<audio>` and `<video>` elements to the page; make them display the default browser controls.
4. Give both of them `<source>` elements so that browsers will find the audio format they support best and load it. These should include `type` attributes.
5. Give the `<video>` element a poster that will be displayed before the video starts to be played. Have fun creating your own poster graphic.

For an added bonus, you could try researching text tracks, and work out how to add some captions to your video.

## Summary

And that's a wrap; we hope you had fun playing with video and audio in web pages! In the next article, we'll look at other ways of embedding content on the Web, using technologies like {{htmlelement("iframe")}} and {{htmlelement("object")}}.

## See also

- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- {{htmlelement("source")}}
- {{htmlelement("track")}}
- [Adding captions and subtitles to HTML5 video](/en-US/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Audio and Video delivery](/es/docs/Web/Apps/Fundamentals/Audio_and_video_delivery): A LOT of detail about putting audio and video onto web pages using HTML and JavaScript.
- [Audio and Video manipulation](/es/docs/Web/Apps/Fundamentals/Audio_and_video_manipulation): A LOT of detail about manipulating audio and video using JavaScript (for example adding filters.)
- Automated options to [translate multimedia](http://www.inwhatlanguage.com/blog/translate-video-audio/).

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

## In this module

- [Images in HTML](/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Video and audio content](/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [From \<object> to \<iframe> — other embedding technologies](/es/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Adding vector graphics to the Web](/es/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Responsive images](/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla splash page](/es/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
