---
title: Perceivable
slug: Web/Accessibility/Understanding_WCAG/Perceivable
---

{{AccessibilitySidebar}}

Este artículo ofrece consejos prácticos sobre cómo hacer que tu sitio web cumpla con los criterios de **Percepción** de WCAG 2.0 y 2.1. Los estados perceptivos que los usuarios deben poder reconocer utilizando alguno de sus sentidos.

> [!NOTE]
> Para leer las definiciones de la W3C sobre Percepción y las guías para cumplir con los criterios dirígete a [Principle 1: Perceivable - Information and user interface components must be presentable to users in ways they can perceive.](https://www.w3.org/TR/WCAG21/#perceivable)

## Pauta 1.1 — Dar alternativas de texto para contenido no textual

La clave aquí es convertir el texto a otros formatos que puedan ser entendidos por personas con otras capacidades; ya sea si utilizan un screen-reader, zoom o un lector de braille. El contenido no textual se refiere a elementos multimedia como imágenes, audio y vídeo.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Criterio de éxito</th>
      <th scope="col">Cómo cumplir</th>
      <th scope="col">Recursos prácticos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="5">1.1.1 Alternativas textuales (A)</td>
      <td>
        Toda imagen que sea útil para el usuario debe tener un texto
        alternativo.
      </td>
      <td>
        <a href="/es/docs/Learn/Accessibility/HTML#Text_alternatives"
          >Texto alternativo.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <p>
          Las imágenes complejas o gráficos deben tener una alternativa
          accesible, ya sea en al misma página o en una externa. Utiliza un
          elemento de link en vez del atributo <code>longdesc</code>.
        </p>
      </td>
      <td>
        <p>
          Una alternativa textual o una tabla puede resolverlo (ver
          <a href="/es/docs/Learn/HTML/Tables/Advanced"
            >HTML table advanced features and accessibility</a
          >
          y
          <a
            href="/es/docs/Learn/Accessibility/HTML#Other_text_alternative_mechanisms"
            >Other text alternative mechanisms</a
          >
          para leer sobre el argumento en contra de <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        El contenido multimedia (por ejemlo, audio o vídeo) debería tener por lo
        menos una descripción accesible disponible (captions o similar).
      </td>
      <td>
        <p>
          Ver
          <a href="/es/docs/Learn/Accessibility/HTML#Text_alternatives"
            >alternativas de texto</a
          >
          para opciones de captions, y
          <a href="/es/docs/Learn/Accessibility/Multimedia#Audio_transcripts"
            >Audio transcripts</a
          >,
          <a href="/es/docs/Learn/Accessibility/Multimedia#Video_text_tracks"
            >Video text tracks</a
          >
          o
          <a
            href="/es/docs/Learn/Accessibility/Multimedia#Other_multimedia_content"
            >Other multimedia content</a
          >
          para otras alternativas.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Los elementos de interfaz como botones o elementos de formulario deberán
        tener <code>label</code>s que describan su propósito.
      </td>
      <td>
        Deberás asegurarte de que los botones describan su función (por ejemplo,
        <code>&#x3C;button>Subir imagen&#x3C;/button></code>). Para más
        información ver
        <a href="/es/docs/Learn/Accessibility/HTML#UI_controls"
          >UI controls</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        <p>
          Implementa elementos decorativos (imágenes o vídeos) de manera que sea
          invisibles para lectores de pantalla, de esta forma evitarás confundir
          a estos usuarios.
        </p>
      </td>
      <td>
        <p>
          Las imágenes decorativas deben ser implementadas utilizando la
          propiedad <code>background-image</code><em>. </em>Si debes incluir una
          imagen con la etiqueta {{htmlelement("img")}} deberás agregarle
          un atributo <code>alt</code> vacío, de otra manera los lectores de
          pantalla podrían leerlo.
        </p>
        <p>
          Si incluyes un vídeo o audio en tu sitio que se reproduce
          automáticamente intenta de que sea lo menos molesto posible. No hagas
          que se vea ni actúe como contenido y provee una forma de apagarlo.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ver también [WCAG description for Guideline 1.1: Text alternatives](https://www.w3.org/TR/WCAG21/#text-alternatives).

## Pauta 1.2 — Proporcionar alternativas para los medios tempo-dependientes

Los medios tempo-dependientes se refieren a multimedia con una duración (audio y vídeo, por ejemplo). Ten en cuenta que si este contenido multimedia funciona como una alternativa a un contenido textual no necesitas proveer otra alternavtiva.

| Criterio de éxito                                                             | Cómo cumplir                                                                                                                                                                                                                                                                                    | Recursos prácticos                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.2.1 Provee alternativas para multimedia de solo audio o solo vídeo (A)      | A transcript should be provided for prerecorded audio-only media, and a transcript or audio description should be provided for prerecorded video-only media (i.e. silent video).                                                                                                                | See [Audio transcripts](/es/docs/Learn/Accessibility/Multimedia#Audio_transcripts) for transcript information. No audio description tutorial available as yet.                                                                                                                                                                                                |
| 1.2.2 Provee captions para los vídeos (A)                                     | You should provide captions for video presented on the web, e.g. HTML5 video. This is for the benefit of people who can't hear the audio part of the video.                                                                                                                                     | See [Video text tracks](/es/docs/Learn/Accessibility/Multimedia#Video_text_tracks) for HTML5 video captions, and [Other multimedia content](/es/docs/Learn/Accessibility/Multimedia#Other_multimedia_content) for other technologies. See also [Add your own subtitles & closed captions](https://support.google.com/youtube/answer/2734796?hl=en) (YouTube). |
| 1.2.3 Provee texto alternativo o una descripción para el audio del vídeo (A)  | You should provide text transcripts or audio descriptions for video presented on the web, e.g. HTML5 video. This is for the benefit of people who can't see the visual part of the video, and don't get the full content from the audio alone.                                                  | See [Audio transcripts](/es/docs/Learn/Accessibility/Multimedia#Audio_transcripts) for transcript information. No audio description tutorial available as yet.                                                                                                                                                                                                |
| 1.2.4 Provee captions para audio en vivo (AA)                                 | You should provide synchronized captions for all live multimedia that contains audio (e.g. video conferences, live audio broadcasts.)                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                               |
| 1.2.5 Provee descripciones de adio para vídeo pre-grabado (AA)                | Audio descriptions should be provided for prerecorded video, but only where the existing audio does not convey the full meaning expressed by the video.                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                               |
| 1.2.6 Provee lenguaje de signos equivalente a el audio pre-grabado (AAA)      | An equivalent sign language video should be provided for any prerecorded content containing audio.                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                               |
| 1.2.7 Provee un vídeo extendido con descripciones de audio (AAA)              | Where audio descriptions cannot be provided (see 1.2.5) due to video timing issues (e.g. there are no suitable pauses in the content in which to insert the audio descriptions), an alternative version of the video should be provided that includes inserted pauses (and audio descriptions). |                                                                                                                                                                                                                                                                                                                                                               |
| 1.2.8 Provee una alternativa para los elementos multimedia pre-grabados (AAA) | For all content that features video, a descriptive text transcript should be provided, for example a script of the movie you are watching. This is for the benefit of hearing impaired viewers who cannot hear the content.                                                                     | See [Audio transcripts](/es/docs/Learn/Accessibility/Multimedia#Audio_transcripts) for transcript information.                                                                                                                                                                                                                                                |
| 1.2.9 Provee una transcripción para el audio en vivo (AAA)                    | For any live audio content being broadcast, a descriptive text should be provided, for example a script of the play or musical you are listening to. This is for the benefit of hearing impaired viewers who cannot hear the content.                                                           | See [Audio transcripts](/es/docs/Learn/Accessibility/Multimedia#Audio_transcripts) for transcript information.                                                                                                                                                                                                                                                |

> [!NOTE]
> Ver también la descripción de [WCAG Guideline 1.2: Time-based Media: Provide alternatives for time-based media](https://www.w3.org/TR/WCAG21/#time-based-media).

## Pauta 1.3 — Crear contenido que pueda presentarse de diferentes formas

Esta pauta hace referencia a la posibilidad de que todo contenido pueda ser consumido de distintas formas, adaptándose a las necesidades del usuario.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Criterios de éxito</th>
      <th scope="col">Cómo cumplir</th>
      <th scope="col">Recursos prácticos</th>
    </tr>
    <tr>
      <td colspan="1" rowspan="1">1.3.1 Info and relationships (A)</td>
      <td>
        <p>Any content structure — or visual relationship made between content — can also be determined
          programmatically, or be inferred from text description. The main situations in which this is
          relevant are:</p>
        <ul>
          <li>Text labels and the form elements they describe are associated unambiguously using the
            {{htmlelement("label")}} element, which can be picked up by screenreaders, etc.</li>
          <li>Image alt text — content images should have text available that clearly describes the image's
            contents, which can be programmatically associated with it (e.g. <code>alt</code> text), or
            otherwise is easy to associate (e.g. describes it and is sat right next to it). This should
            means that the full meaning can still be inferred even if you can't see the image.</li>
          <li>Lists — if the order of list items is important, and ordered list should be used
            ({{htmlelement("ol")}}).</li>
        </ul>
      </td>
      <td>The whole of
        <p><a href="/es/docs/Learn/Accessibility/HTML">HTML: A good basis for accessibility</a> is packed
          with information about this, but you should particularly refer to <a
            href="/es/docs/Learn/Accessibility/HTML#Good_semantics">Good semantics</a>, <a
            href="/es/docs/Learn/Accessibility/HTML#UI_controls">UI controls</a>, and <a
            href="/es/docs/Learn/Accessibility/HTML#Text_alternatives">Text alternatives</a>.</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">1.3.2 Meaningful content sequence (A)</td>
      <td>A sensible, logical reading order should be easy to determine for any content, even if it is visually
        presented in an unusual way. The order should be made obvious by use of correct semantic elements (e.g.
        headings, paragraphs), with CSS being used to create any unusual layout styles, irrespective of the
        markup.</td>
      <td>Again, refer to <a href="/es/docs/Learn/Accessibility/HTML">HTML: A good basis for accessibility</a>.
      </td>
    </tr>
    <tr>
      <td colspan="1">1.3.3 Sensory characteristics (A)</td>
      <td>
        <p>Instructions for operating controls or understanding content do not rely on a single sense — this may
          prove inaccessible to people with a disability related to that sense, or a device that does not
          support that sense. So for example:</p>
        <ul>
          <li>"Click the round button to continue" — The button should be clearly labelled so that it is
            obvious that it is the button you need to press. If there are multiple buttons, make sure there
            are all clearly labelled to distinguish their function.</li>
          <li>"Listen to the audio instructions for guidance" — This is obviously problematic — audio will be
            inaccessible to those with heading impairments, whereas text can be read, but also spoken by a
            screenreader if required.</li>
          <li>"Swipe from the right hand side of the screen to reveal the menu" — some users might not be able
            to swipe the screen, either due to disability or because their device does not support touch. An
            alternative should be provided, such as a keyboard shortcut or button that can be activated by
            keyboard or other means.</li>
        </ul>
        <div class="note">
          <p><strong>Note</strong>: Conveying instructions solely by color is related, but covered in a
            different guideline — 1.4.1.</p>
        </div>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td colspan="1">1.3.4 Orientation (AA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added
            in 2.1</a></em></td>
      <td>Content does not restrict its view and operation to a single display orientation, such as portrait or
        landscape, unless a specific display orientation is essential.</td>
      <td>
        <p><a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html">Understanding Orientation</a>
        </p>
      </td>
    </tr>
    <tr>
      <td colspan="1">1.3.5 Identify Input Purpose (AA) <em><a
            href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
      <td>
        <p> </p>
        <p>Follow the list of <a href="https://www.w3.org/TR/WCAG21/#input-purposes">53 input fields</a> to
          programmatically identify the purpose of a field. </p>
      </td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html">Understanding Identify
          Input Purpose</a></td>
    </tr>
    <tr>
      <td colspan="1">1.3.6 Identify Purpose (AAA) <em><a
            href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
      <td>In content implemented using markup languages, the purpose of User Interface Components, icons, and
        regions can be programmatically determined.</td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html">Understanding Identify
          Purpose</a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ver también la descripción de WCAG: [Guideline 1.3: Adaptable: Create content that can be presented in different ways without losing information or structure.](https://www.w3.org/TR/WCAG21/#adaptable)

## Pauta 1.4: Facilitar a los usuarios ver y oír el contenido, incluyendo la separación entre el primer plano y el fondo

Esta pauta tiene como objetivo la creación de contenido que sea fácil de diferenciar del fondo y otras decoraciones. El ejemplo clásico es sobre color (tanto en relación al contraste como utilizarlo para transmitir información), pero aplica también en otras situaciones.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Criterios de éxito</th>
      <th scope="col">Cómo cumplir</th>
      <th scope="col">Recursos prácticos</th>
    </tr>
    <tr>
      <td colspan="1" rowspan="1">1.4.1 Use of color (A)</td>
      <td>
        <p>Color should not be solely relied upon to convey information — for example, in forms you should never mark
          required fields purely with a color (like red). Instead (or as well as), something like an asterisk with a
          label of "required" would be more appropriate.</p>
      </td>
      <td>See <a href="/es/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast">Color and color
          contrast</a> and <a href="/es/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form#Multiple_labels">Multiple
          labels</a>.</td>
    </tr>
    <tr>
      <td colspan="1">1.4.2 Audio controls (A)</td>
      <td>For any audio that plays for longer than three seconds, accessible controls should be provided to play and
        pause the audio/video, and mute/adjust volume.</td>
      <td>Use native <code>&lt;button&gt;</code>s to provide accessible keyboard controls, as shown in <a
          href="/es/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics">Video player
          syling basics</a>.</td>
    </tr>
    <tr>
      <td colspan="1">1.4.3 Minimum contrast (AA)</td>
      <td>
        <p>The color contrast between background and foreground content should be at a minimum level to ensure
          legibility:</p>
        <ul>
          <li>Text and its background should have a contrast ratio of at least 4.5.1.</li>
          <li>Heading (or just larger) text should have a ratio of at least 3.1. Larger text is defined as at least
            18pt, or 14pt bold.</li>
        </ul>
      </td>
      <td>See <a href="/es/docs/Learn/Accessibility/CSS_and_JavaScript#Color_and_color_contrast">Color and color
          contrast</a>.</td>
    </tr>
    <tr>
      <td colspan="1">1.4.4 Resize text (AA)</td>
      <td>The page should be readable and usable when the text size is doubled. This means that designs should be
        responsive, so that when the text size is increased, the content is still accessible.</td>
      <td> </td>
    </tr>
    <tr>
      <td colspan="1">1.4.5 Images of text (AA)</td>
      <td>Images should NOT be used to present content where text would do the job. For example, if an image is mostly
        textual, it could be represented using text as well as images.</td>
      <td> </td>
    </tr>
    <tr>
      <td colspan="1">1.4.6 Enhanced contrast (AAA)</td>
      <td>
        <p>This follows, and builds on, criterion 1.4.3.</p>
        <ul>
          <li>Text and its background should have a contrast ratio of at least 7.1.</li>
          <li>Heading (or just larger) text should have a ratio of at least 4.5.1. Larger text is defined as at least
            18pt, or 14pt bold.</li>
        </ul>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td colspan="1">1.4.7 Low or no background audio (AAA)</td>
      <td>Prerecorded audio recordings that primarily feature speech should have minimal background noise, so the
        content can be easily understood.</td>
      <td> </td>
    </tr>
    <tr>
      <td colspan="1">1.4.8 Visual presentation (AAA)</td>
      <td>
        <p>For text content presentation, the following should be true:</p>
        <ul>
          <li>Foreground and background colors should be user-selectable.</li>
          <li>Text blocks should be no wider than 80 characters (or glyphs), for maximum readability.</li>
          <li>Text should not be fully justified (e.g. <code>text-align: justify;</code>)</li>
          <li>line height should be at least 1.5 times the text size within paragraphs (e.g.
            <code>line-height: 1.5;</code>), and at least 2.25 times the text size between paragraphs (e.g.
            <code>padding: 2.25rem;</code>)</li>
          <li>When the text size is doubled, the content should not need to be scrolled.</li>
        </ul>
      </td>
      <td> </td>
    </tr>
    <tr>
      <td colspan="1">1.4.9 Images of text (No Exception) (AAA)</td>
      <td>Text should not be presented as part of an image unless it is purely decoration (i.e. it does not convey any
        content), or cannot be presented in any other way.</td>
      <td> </td>
    </tr>
    <tr>
      <td colspan="1">1.4.10 Reflow (AA) <em><a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in
            2.1</a></em></td>
      <td>
        <ul>
          <li>No horizontal scrolling for right-to-left languages (like English) or left-to-right languages (like
            Arabic) </li>
          <li>No vertical scrolling for top-to-bottom languages (like Japanese)</li>
          <li>Except for parts of the content which require two-dimensional layout for usage or meaning (like a large
            data table).</li>
        </ul>
      </td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html">Understanding Reflow</a></td>
    </tr>
    <tr>
      <td colspan="1">1.4.11 Non-Text Contrast(AA) <em><a
            href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
      <td>Minimum color contrast ratio of 3 to 1 for user interface components and graphical objects. </td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">Understanding Non-Text
          Contrast</a></td>
    </tr>
    <tr>
      <td colspan="1">1.4.12 Text Spacing (AA) <em><a
            href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
      <td>
        <p>No loss of content or functionality occurs when the following styles are applied: </p>
        <ul>
          <li>Line height (line spacing) to at least 1.5 times the font size;</li>
          <li>Spacing following paragraphs to at least 2 times the font size;</li>
          <li>Letter spacing (tracking) to at least 0.12 times the font size;</li>
          <li>Word spacing to at least 0.16 times the font size.</li>
        </ul>
      </td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html">Understanding Text Spacing</a></td>
    </tr>
    <tr>
      <td colspan="1">1.4.13 Content on Hover or Focus (AA) <em><a
            href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">added in 2.1</a></em></td>
      <td>
        <p>Additional content appear and disappear in coordination with hover and keyboard focus, this success criterion
          specifies three conditions that must be met:</p>
        <ul>
          <li>dismissable (can be closed/removed)</li>
          <li>hoverable (the additional content does not disappear when the pointer is over it) </li>
          <li>persistent (the additional content does not disappear without user action)</li>
        </ul>
      </td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html">Understanding Content on
          Hover or Focus</a></td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Ver también la descripción de WCAG: [Guideline 1.4: Distinguishable: Make it easier for users to see and hear content including separating foreground from background.](https://www.w3.org/TR/WCAG21/#distinguishable)[.](https://www.w3.org/TR/WCAG21/#distinguishable)
