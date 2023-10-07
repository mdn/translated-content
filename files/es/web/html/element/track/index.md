---
title: "<track>: El elemento pista de texto incrustado"
slug: Web/HTML/Element/track
---

{{HTMLSidebar}}

El elemento [HTML](/es/docs/Web/HTML) **`<track>`** se utiliza como elemento hijo de los elementos multimedia, {{HTMLElement("audio")}} y {{HTMLElement("video")}}. Le permite especificar pistas de texto cronometradas (o datos basados en el tiempo), por ejemplo, para manejar subtítulos automáticamente. Las pistas están formateadas en [formato WebVTT](/es/docs/Web/API/WebVTT_API) (archivos `.vtt`): _Web Video Text Tracks_ (pistas de texto de video web).

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/Guide/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Ninguno, es un {{Glossary("empty element","elemento vacío")}}</td>
    </tr>
    <tr>
      <th scope="row">Omisión de la etiqueta</th>
      <td>
        Como es un elemento vacío, la etiqueta de inicio debe estar presente y
        no debe tener la etiqueta de cierre.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        <p>
          Un elemento multimedia, {{HTMLElement("audio")}} o
          {{HTMLElement("video")}}.
        </p>
      </td>
    </tr>
    <tr>
        <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Sin rol correspondiente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>No se permite <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `default`
  - : Este atributo indica que la pista debe habilitarse a menos que las preferencias del usuario indiquen que otra pista es más apropiada. Esto solo se puede usar en un elemento `track` por elemento multimedia.
- `kind`

  - : Cómo debe usarse la pista de texto. Si se omite, el tipo predeterminado es `subtitles`. Si el atributo contiene un valor no válido, utilizará `metadata` (las versiones de Chrome anteriores a la 52 trataron un valor no válido como `subtitles`). Se permiten las siguientes palabras clave:

    - `subtitles`

      - Los subtítulos proporcionan traducción de contenido que el espectador no puede entender. Por ejemplo, habla o texto que no está en inglés en una película en inglés.
      - Los subtítulos pueden contener contenido adicional, generalmente información de fondo adicional. Por ejemplo, el texto al comienzo de las películas de Star Wars, o la fecha, la hora y la ubicación de una escena.

    - `captions`

      - Los subtítulos ofrecen una transcripción y posiblemente una traducción del audio.
      - Puede incluir información no verbal importante, como pistas musicales o efectos de sonido. Puede indicar la fuente de la señal (por ejemplo, música, texto, personaje).
      - Adecuado para usuarios sordos o cuando el sonido está silenciado.

    - `descriptions`

      - Descripción textual del contenido del video.
      - Apto para usuarios ciegos o cuando no se puede ver el vídeo.

    - `chapters`

      - Los títulos de los capítulos están destinados a ser utilizados cuando el usuario navega por el recurso multimedia.

    - `metadata`

      - Pistas utilizadas por los _scripts_. No visible para el usuario.

- `label`
  - : Un título legible por el usuario de la pista de texto que utiliza el navegador cuando enumera las pistas de texto disponibles.
- `src`
  - : Dirección de la pista (archivo `.vtt`). Debe ser una URL válida. Este atributo debe especificarse y su valor de URL debe tener el mismo origen que el documento, a menos que el elemento principal {{HTMLElement("audio")}} o {{HTMLElement("video")}} del elemento `track` tenga un atributo de [origen cruzado](/es/docs/Web/HTML/Attributes/crossorigin).
- `srclang`
  - : Idioma del texto de la pista. Debe ser una etiqueta de idioma [BCP 47](https://r12a.github.io/app-subtags/) válida. Si el atributo `kind` se establece en `subtitles`, se debe definir `srclang`.

## Notas de uso

### Tipos de datos de pista

El tipo de datos que `track` agrega a los medios se establece en el atributo `kind`, que puede tomar valores de `subtitles`, `captions`, `descriptions`, `chapters` o `metadata`. El elemento apunta a un archivo de origen que contiene texto cronometrado que el navegador expone cuando el usuario solicita datos adicionales.

Un elemento multimedia no puede tener más de un `track` con el mismo `kind`, `srclang` y `label`.

### Detectar cambios de señal

El {{domxref("TextTrack")}} subyacente, indicado por la propiedad {{domxref("HTMLTrackElement.track", "track")}}, recibe un evento `cuechange` cada vez que se cambia la señal actual. Esto sucede incluso si la pista no está asociada con un elemento multimedia.

Si la pista _está_ asociada con un elemento de medios, usando el elemento {{HTMLElement("track")}} como elemento hijo del elemento {{HTMLElement("audio")}} o {{HTMLElement("video")}}, el evento `cuechange` también se envía a {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

## Ejemplos

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  ...
</video>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Formato de pista de texto WebVTT](/es/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
