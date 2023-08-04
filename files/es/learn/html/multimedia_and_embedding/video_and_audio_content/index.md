---
title: Contenido de audio y video
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
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
          href="/es/Learn/Getting_started_with_the_web/Installing_basic_software"
          >programas básicos instalados</a
        >, conocimiento básico de
        <a
          href="/es/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabajo con archivos</a
        >, familiaridad con los fundamentos de HTML (como está cubierto en
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Empezando con HTML</a
        >) e
        <a href="/es/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
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

> **Nota:** Antes de empezar, también deberías saber que hay un puñado de OVPs (proveedores de video online) como [YouTube](https://www.youtube.com/), [Dailymotion](http://www.dailymotion.com) y [Vimeo](https://vimeo.com/), y proveedores de audio como [Soundcloud](https://soundcloud.com/). Tales compañías ofrecen una conveniente fácil forma de hospedar y consumir videos, y que no tienes que preocuparte sobre el enorme ancho de banda que se consume. Los OVPs normalmente usan código prefabricado para incrustar video/audio en tus sitios web; si usas ese camino, puedes evitar algunas dificultades que discutimos en este artículo. Discutiremos este tipo de servicios un poco más en el siguiente artículo.

### El elemento \<video>

El elemento {{htmlelement("video")}} nos permite incrustar video fácilmente. Un ejemplo muy simple luce como lo siguiente:

```html
<video src="rabbit320.webm" controls>
  <p>
    Tu navegador no soporta HTML5 video. Aquí está el
    <a href="rabbit320.webm">enlace del video</a>.
  </p>
</video>
```

Las características a notar son:

- [`src`](/es/docs/Web/HTML/Element/video#src)
  - : De la misma manera que para el elemento [`<img>`](/es/docs/Web/HTML/Element/img), el atributo `src` (source) contiene una ruta al video que deseas incrustar. Funciona de la misma manera.
- [`controls`](/es/docs/Web/HTML/Element/video#controls)
  - : Los usuarios deben ser capaces de controlar la reproducción de video y audio (esto es especialmente crítico en personas que padecen [epilepsia](https://en.wikipedia.org/wiki/Epilepsy#Epidemiology)). Se debe utilizar el atributo `controls` para incluir la interfaz de control del browser, o construir la nuestra utilizando la [JavaScript API](/es/docs/Web/API/HTMLMediaElement) apropiada. Como mínimo la interfaz debe incluir una manera de empezar y terminar la reproducción, y ajustar el volumen.
- El párrafo dentro de la etiqueta `<video>`
  - : Se lo llama **fallback content** (contenido de reserva) — y será mostrado si el browser desde el que se está accediendo a la página no soporta el elemento `<video>`, permitiéndonos proveer un fallback para browsers más antiguos. Puede ser de la manera que se quiera; en este caso proporcionamos un link directo al archivo de video, por lo que el usuario puede al menos acceder de alguna manera, independientemente del browser que esté usando.

El video incrustado se verá así:

![Un sencillo reproductor de vídeo que muestra un vídeo de un pequeño conejo blanco](simple-video.png)

Puedes [probar el ejemplo](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) aquí (también el [código fuente](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)).

### Uso de formatos múltiples para mejorar la compatibilidad

Hay un problema con el ejemplo de arriba, que quizás hayas notado si trataste de acceder al [ejemplo en línea](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html) con un navegador como Safari o Internet Explorer. ¡El video no funciona! Esto es porque diferentes navegadores soportan diferentes formatos de video (y audio).

#### Contenidos de un archivo de medios

Repasemos la terminología rápidamente. Formatos como MP3, MP4 y WebM son llamados **formatos contenedores**. Estos contienen diferentes partes que componen toda la canción o video — como una pista de audio y una pista de video (en el caso del video), y metadatos para describir los contenidos que se presentan, qué codecs se usan para codificar sus canales, etcétera.

Un archivo WebM contiene una película que tiene una pista principal de video y otra pista con un ángulo alternativo, junto con audio en inglés y español, además de una pista con comentarios en inglés, lo que puede ser conceptualizado en el siguiente diagrama. También se incluyeron pistas de texto que contienen los subtítulos de la película en inglés, español y para el comentario.

![](containersandtracks.png)

Las pistas de audio y video dentro del contenedor mantienen los datos en un formato adecuado para el codec usado para codificar ese medio. Se usan diferentes formatos para pistas de audio versus de video. Cada pista de audio es codificada usando un codec de audio mientras que las pistas de video son codificadas (como probablemente ya has adivinado) usando un codec de video. Así como hemos hablado previamente, diferentes navegadores soportan diferentras formatos de audio y video, y diferentes formatos contenedores (como MP3, MP4 y WebM, que pueden contener diferentes tipos de video y audio).

Por ejemplo:

- Un WebM usualmente contiene paquetes de Ogg Vorbis audio con VP8/VP9 video. Soportado principalmente por Firefox y Chrome.
- Un MP4 contiene a menudo paquetes AAC o audio MP3 con videos H.264. Principalmente soportados en Internet Explorer y Safari.
- El antiguo contenedor Ogg suele usar audio Ogg Vorbis y video Ogg Theora. Es principalmente soportado por Firefox y Chrome, pero básicamente ha sido reemplazado por el formato WebM de mejor calidad.

Un reproductor de audio tenderá a reproducir directamente un track de audio. Por ejemplo un archivo MP3 u Ogg. No necesitan contenedores.

> **Nota:** No es tan simple como se ve en nuestra [tabla de compatibilidad de codecs audio-video](/es/docs/Web/HTML/Supported_media_formats#Browser_compatibility). Además, muchos browsers de plataformas móviles pueden reproducir un formato no soportado entregándoselo al reproductor multimedia del sistema subyacente para que lo reproduzca. Pero esto servirá por ahora.

Los formatos anteriores existen para comprimir los archivos de audio y video volviéndolos manejables (el tamaño sin comprimir es muy grande). Los browsers contienen diferentes **{{Glossary("Codec","Codecs")}}**, como Vorbis o H.264, los cuales son usados para convertir el sonido y video comprimidos en binario y viceversa. Pero desafortunadamente, como indicamos antes, no todos los browsers soportan los mismos codecs, por lo tanto, habrá que proveer varios archivos para cada producción multimedia. Si te falta el codec correcto para decodificar el medio, simplemente no se reproducirá.

> **Nota:** Debes estar preguntándote por qué sucede esto. El **MP3** (para audio) y el **MP4/H.264** (para video) son ampliamente compatibles y de buena calidad, sin embargo, también están patentados — sus patentes cubren MP3 al menos hasta 2017 y a H.264 hasta 2027, lo que significa que los browsers que no tienen la patente tienen que pagar grandes sumas de dinero para soportar estos formatos. Además, mucha gente no permite el software con restricciones, por estar a favor de formatos abiertos. Por todo esto es que tenemos que proveer múltiples formatos para los diferentes browsers.

Está bien, ¿pero cómo lo hacemos? Miremos el siguiente [ejemplo actualizado](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html) ([pruébalo en vivo aquí](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)):

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Su navegador no soporta video HTML5. Aquí hay un
    <a href="rabbit320.mp4">enlace al video</a>.
  </p>
</video>
```

Tomamos el atributo `src` del tag `<video>` y en su lugar incluimos elementos separados {{htmlelement("source")}} que apuntan a sus propias fuentes. En este caso el browser irá a los elementos `<source>` y reproducirá el primero de los elementos que el codec soporte. Incluir fuentes WebM y MP4 debería bastar para reproducir el video en la mayoría de los browsers en estos días.

Cada elemento `<source>` tambien tiene un atributo `type` . Esto es opcional, pero se recomienda que se incluyan, ya que contienen {{glossary("MIME type","MIME types")}} de los archivos de vídeo y los navegadores pueden leerlos y omitir inmediatamente los vídeos que no tienen. Si no estan incluidos, los navegadores cargarán e intentarán reproducir cada archivo hasta que encuentren uno que funcione, lo que llevará aún más tiempo y recursos.

> **Nota:** Nuestro [articulo sobre soporte de formatos multimedia](/es/docs/Web/HTML/Supported_media_formats) contiene algunos de los habituales {{glossary("MIME type","MIME types")}}.

### Otras características de la etiqueta \<video>

Hay varias otras características que puede incluir en un vídeo HTML5. Eche un vistazo a nuestro tercer ejemplo, a continuación.

```html
<video
  controls
  width="400"
  height="400"
  autoplay
  loop
  muted
  poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    Su navegador no soporta vídeo HTML5. Este es un
    <a href="rabbit320.mp4">enlace al vídeo</a> alternativo.
  </p>
</video>
```

Esto nos dará un resultado que se parece a esto:

![Un reproductor de vídeo que muestra una imagen de cartel antes de reproducirse. La imagen del cartel dice Extra video fetures example, Lovely rabbit video](poster_screenshot_updated.png)

Las nuevas características son:

- [`width`](/es/docs/Web/HTML/Element/video#width) y [`height`](/es/docs/Web/HTML/Element/video#height)
  - : Puede controlar el tamanño con estos atributos o con [CSS](/es/docs/Glossary/CSS). En ambos casos, los vídeos mantienen su relación **anchura - altura nativa**. Si la relación de aspecto no se mantiene con los tamañis establecidos, el vídeo crecerá para rellenar el espacio horizontalmente y el el espacio sin rellenar sólo recibirá un color de fondo sólido de forma predeterminada.
- [`autoplay`](/es/docs/Web/HTML/Element/video#autoplay)
  - : Hace que el audio o el vídeo empiece a reproducirse de inmediato, mientras se carga el resto de la página. Le aconsejamos que no utilice vídeo (o audio) de reproducción automática en sus sitios, ya que los usuarios pueden encontralo molesto.
- [`loop`](/es/docs/Web/HTML/Element/video#loop)
  - : Hace que el vídeo (o audio) comience a reproducirse cada vez que finaliza.Esto puede en ocasiones resultar molesto, así que utilizalo solo si es realmente necesario.
- [`muted`](/es/docs/Web/HTML/Element/video#muted)
  - : Hace que los medios se reproduzcan con el sonido apagado de forma predeterminada.
- [`poster`](/es/docs/Web/HTML/Element/video#poster)
  - : La URL de una imagen que se mostrará antes de reproducir el vídeo. Está destinado a ser utilizado para una pantalla de presentación o pantalla publicitaria (miniatura del vídeo).
- [`preload`](/es/docs/Web/HTML/Element/video#preload)

  - : Se utiliza para almacenar en búfer archivos grandes; Puede tomar uno de estos tres valores:

    - `"none"` no almacena el archivo en el búfer
    - `"auto"` almacena el archivo multimedia
    - `"metadata"` almacena solo los metadatos del archivo

Puedes encontrar el ejemplo anterior disponible en [reproducir en directo en Github](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html) (también [vea el código fuente](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html).) Tenga en cuenta que hemos incluido el atributo `autoplay` en la versión en vivo — Si el vídeo comienza a reproducirse tan pronto como se cargue la página no podrá ver la miniatura!

### El elemento \<audio>

El elemento {{htmlelement("audio")}} funciona exactamente de la misma forma que el elemento {{htmlelement("video")}}, con algunas pequeñas diferencias como se describe a continuación. Un ejemplo típico podría ser así:

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    Su navegador no es compatible con audio HTML5. Aquí hay un
    <a href="viper.mp3">enlace al audio</a> en su lugar.
  </p>
</audio>
```

Esto produce algo como lo siguiente en un navegador:

![Un sencillo reproductor de audio con botón de reproducción, temporizador, control de volumen y barra de progreso](audio-player.png)

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

### Detección de la adición y eliminación de pistas

Puede monitorear las listas de pistas dentro de un elemento multimedia para detectar cuando se añaden o eliminan pistas del elemento multimedia. Por ejemplo, puede ver si se activa el evento [`addtrack`](/es/docs/Web/Reference/Events/addtrack) en el objeto {{domxref("AudioTrackList")}} asociado (recuperado a través de {{domxref("HTMLMediaElement.audioTracks")}}) para saber cuándo se añaden pistas de audio al contenido multimedia:

```js
var mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function (event) {
  audioTrackAdded(event.track);
};
```

Encontraras mas documentación acerca de esto en nuestra {{domxref("TrackEvent")}} documentación.

## Visualización de pistas de texto en vídeo

Ahora hablaremos de un concepto un poco más avanzado que es realmente útil conocer. Muchas personas no pueden o no quieren escuchar el contenido de audio/vídeo que encuentran en la Web, al menos en determinados momentos. Por ejemplo:

- Muchas personas tienen deficiencias auditivas (más comúnmente conocidas como sordos o con dificultades auditivas), por lo que no pueden oír el audio.
- Otras no pueden oír el audio porque se encuentran en ambientes ruidosos (como un bar abarrotado cuando se retransmite un partido deportivo) o porque no quieren molestar a los demás si están en un lugar tranquilo (como una biblioteca).
- Las personas que no hablan el idioma del vídeo pueden querer una transcripción de texto o incluso una traducción que les ayude a entender el contenido multimedia.

¿No estaría bien poder ofrecer a estas personas una transcripción de las palabras que se pronuncian en el audio/vídeo? Pues bien, gracias al vídeo HTML5 se puede, con el formato [WebVTT](/es/docs/Web/API/Web_Video_Text_Tracks_Format) y el elemento {{htmlelement("track")}}.

> **Nota:** "Transcribir" significa "escribir palabras habladas como texto". El texto resultante es una "transcripción".

WebVTT es un formato para escribir archivos de texto que contienen múltiples cadenas de texto junto con metadatos tales como en qué momento del vídeo desea que se muestre cada cadena de texto, e incluso información limitada de estilo/posicionamiento. Estas cadenas de texto se llaman **cues**, y se pueden mostrar diferentes tipos para diferentes propósitos, siendo los más comunes:

- subtítulos
  - : Traducciones de material extranjero, para personas que no entienden las palabras pronunciadas en el audio.
- leyendas
  - : transcripciones sincronizadas de diálogos o descripciones de sonidos significativos, para que las personas que no pueden oír el audio entiendan lo que está pasando.
- descripciones temporizadas
  - : Texto para convertir en audio, al servicio de las personas con deficiencias visuales.

Un archivo WebVTT típico tendrá este aspecto:

```
WEBVTT

1
00:00:22.230 --> 00:00:24.606
Este es el primer subtítulo.

2
00:00:30.739 --> 00:00:34.074
Este es el segundo.

...
```

Para que esto se muestre junto con la reproducción multimedia HTML, es necesario:

1. Guárdelo como archivo `.vtt` en un lugar adecuado.
2. Enlace el archivo `.vtt` con el elemento {{htmlelement("track")}}. `<track>` debe colocarse dentro de `<audio>` o `<video>`, pero después de todos los elementos `<source>`. Utilice el atributo [`kind`](/es/docs/Web/HTML/Element/track#kind) para especificar si las pistas son "subtítulos", " leyendas" o "descripciones". Además, utilice [`srclang`](/es/docs/Web/HTML/Element/track#srclang) para indicar al navegador en qué idioma ha escrito los subtítulos.

He aquí un ejemplo:

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" />
</video>
```

El resultado será un vídeo con subtítulos, como éste:

![Reproductor de vídeo con controles como play, stop, volumen y activación y desactivación de subtítulos. El vídeo que se reproduce muestra una escena de un hombre sosteniendo un arma parecida a una lanza, y una leyenda que dice "Esta hoja tiene pasado oscuro".](video-player-with-captions.png)

Para más detalles, lee [Añadir subtítulos a vídeos HTML5](/es/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video). Puedes [encontrar el ejemplo](http://iandevlin.github.io/mdn/video-player-with-captions/) que acompaña a este artículo en Github, escrito por Ian Devlin (consulta también el [código fuente](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions).) Este ejemplo utiliza algo de JavaScript para permitir a los usuarios elegir entre diferentes subtítulos. Ten en cuenta que para activar los subtítulos, tienes que pulsar el botón "CC" y seleccionar una opción: English, Deutsch o Español.

> **Nota:** Las pistas de texto también te ayudan con {{glossary("SEO")}}, ya que a los motores de búsqueda les gusta especialmente el texto. Las pistas de texto incluso permiten a los motores de búsqueda enlazar directamente con un punto del vídeo.

### Aprendizaje activo: Incorpora tu propio audio y vídeo

Para este aprendizaje activo, nos gustaría (idealmente) que salieras al mundo y grabaras algo de tu propio vídeo y audio: la mayoría de los teléfonos de hoy en día permiten grabar audio y vídeo muy fácilmente, y siempre que puedas transferirlo a tu ordenador, puedes utilizarlo. Es posible que tengas que hacer alguna conversión para acabar con un WebM y un MP4 en el caso del vídeo, y un MP3 y un Ogg en el caso del audio, pero existen suficientes programas que te permitirán hacerlo sin demasiados problemas, como [Miro Video Converter](http://www.mirovideoconverter.com/) y [Audacity](https://sourceforge.net/projects/audacity/). Nos gustaría que lo intentaras.

Si no puedes obtener ningún vídeo o audio, puedes utilizar nuestros [archivos de audio y vídeo de muestra](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content) para realizar este ejercicio. También puedes utilizar nuestro código de ejemplo como referencia.

Nos gustaría que

1. Guardes tus archivos de audio y vídeo en un directorio nuevo de tu ordenador.
2. Crees un nuevo archivo HTML en el mismo directorio, llamado `index.html`.
3. Añade los elementos `<audio>` y `<video>` a la página; haz que muestren los controles por defecto del navegador.
4. Dales a ambos elementos `<source>` para que los navegadores encuentren el formato de audio que mejor soportan y lo carguen. Estos deben incluir atributos `type`.
5. Asigna al elemento `<video>` un cartel que se mostrará antes de que empiece a reproducirse el vídeo. Diviértete creando tu propio cartel gráfico.

Si lo deseas, puedes buscar pistas de texto y averiguar cómo añadir algunas leyendas a tu vídeo.

## Resumen

Y con esto terminamos; ¡esperamos que te hayas divertido jugando con vídeo y audio en páginas web! En el próximo artículo, veremos otras formas de incrustar contenido en la Web, utilizando tecnologías como {{htmlelement("iframe")}} y {{htmlelement("object")}}.

## Ver también

- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- {{htmlelement("source")}}
- {{htmlelement("track")}}
- [Añadir subtítulos a vídeos HTML5](/es/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Transmisión de audio y vídeo](/es/docs/Web/Apps/Fundamentals/Audio_and_video_delivery): Un montón de detalles sobre cómo poner audio y vídeo en páginas web usando HTML y JavaScript.
- [Manipulación de audio y vídeo](/es/docs/Web/Apps/Fundamentals/Audio_and_video_manipulation): Un montón de detalles sobre la manipulación de audio y vídeo utilizando JavaScript (por ejemplo, la adición de filtros.)
- Opciones automatizadas para [traducir multimedia](http://www.inwhatlanguage.com/blog/translate-video-audio/).

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}
