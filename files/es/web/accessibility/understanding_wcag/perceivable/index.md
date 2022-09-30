---
title: Perceivable
slug: Web/Accessibility/Understanding_WCAG/Perceivable
translation_of: Web/Accessibility/Understanding_WCAG/Perceivable
original_slug: Web/Accesibilidad/Understanding_WCAG/Perceivable
---
<p class="summary">Este artículo ofrece consejos prácticos sobre cómo hacer que tu sitio web cumpla con los criterios de <strong>Percepción</strong> de WCAG 2.0 y 2.1. Los estados perceptivos que los usuarios deben poder reconocer utilizando alguno de sus sentidos.</p>

<div class="note">
<p><strong>Nota</strong>: Para leer las definiciones de la W3C sobre Percepción y las guías para cumplir con los criterios dirígete a <a href="https://www.w3.org/TR/WCAG21/#perceivable">Principle 1: Perceivable - Information and user interface components must be presentable to users in ways they can perceive.</a></p>
</div>

<h2 id="Pauta_1.1_—_Dar_alternativas_de_texto_para_contenido_no_textual.">Pauta 1.1 — Dar alternativas de texto para contenido no textual.</h2>

<p>La clave aquí es convertir el texto a otros formatos que puedan ser entendidos por personas con otras capacidades; ya sea si utilizan un screen-reader, zoom o un lector de braille. El contenido no textual se refiere a elementos multimedia como imágenes, audio y vídeo.</p>

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
   <td colspan="1" rowspan="5">1.1.1 Alternativas textuales  (A)</td>
   <td>Toda imagen que sea útil para el usuario debe tener un texto alternativo.</td>
   <td><a href="/en-US/docs/Learn/Accessibility/HTML#Text_alternatives">Texto alternativo.</a></td>
  </tr>
  <tr>
   <td>
    <p>Las imágenes complejas o gráficos deben tener una alternativa accesible, ya sea en al misma página o en una externa. Utiliza un elemento de link en vez del atributo <code>longdesc</code>.</p>
   </td>
   <td>
    <p>Una alternativa textual o una tabla puede resolverlo (ver <a href="/en-US/docs/Learn/HTML/Tables/Advanced">HTML table advanced features and accessibility</a> y <a href="/en-US/docs/Learn/Accessibility/HTML#Other_text_alternative_mechanisms">Other text alternative mechanisms</a> para leer sobre el argumento en contra de <code>longdesc</code>.</p>
   </td>
  </tr>
  <tr>
   <td>El contenido multimedia (por ejemlo, audio o vídeo) debería tener por lo menos una descripción accesible disponible (captions o similar).</td>
   <td>
    <p>Ver <a href="/en-US/docs/Learn/Accessibility/HTML#Text_alternatives">alternativas de texto</a> para opciones de captions, y <a href="/en-US/docs/Learn/Accessibility/Multimedia#Audio_transcripts">Audio transcripts</a>, <a href="/en-US/docs/Learn/Accessibility/Multimedia#Video_text_tracks">Video text tracks</a> o <a href="/en-US/docs/Learn/Accessibility/Multimedia#Other_multimedia_content">Other multimedia content</a> para otras alternativas.</p>
   </td>
  </tr>
  <tr>
   <td>Los elementos de interfaz como botones o elementos de formulario deberán tener <code>label</code>s que describan su propósito.</td>
   <td>Deberás asegurarte de que los botones describan su función (por ejemplo, <code>&lt;button&gt;Subir imagen&lt;/button&gt;</code>). Para más información ver <a href="/en-US/docs/Learn/Accessibility/HTML#UI_controls">UI controls</a>.</td>
  </tr>
  <tr>
   <td>
    <p>Implementa elementos decorativos (imágenes o vídeos) de manera que sea invisibles para lectores de pantalla, de esta forma evitarás confundir a estos usuarios.</p>
   </td>
   <td>
    <p>Las imágenes decorativas deben ser implementadas utilizando la propiedad <code>background-image</code><em>. </em>Si debes incluir una imagen con la etiqueta {{htmlelement("img")}} deberás agregarle un atributo <code>alt</code> vacío, de otra manera los lectores de pantalla podrían leerlo.</p>

    <p>Si incluyes un vídeo o audio en tu sitio que se reproduce automáticamente intenta de que sea lo menos molesto posible. No hagas que se vea ni actúe como contenido y provee una forma de apagarlo.</p>
   </td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Nota</strong>: Ver también <a href="https://www.w3.org/TR/WCAG21/#text-alternatives">WCAG description for Guideline 1.1: Text alternatives</a>.</p>
</div>

<h2 id="Pauta_1.2_—_Proporcionar_alternativas_para_los_medios_tempo-dependientes.">Pauta 1.2 — Proporcionar alternativas para los medios tempo-dependientes.</h2>

<p>Los medios tempo-dependientes se refieren a multimedia con una duración (audio y vídeo, por ejemplo). Ten en cuenta que si este contenido multimedia funciona como una alternativa a un contenido textual no necesitas proveer otra alternavtiva.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Criterio de éxito</th>
   <th scope="col">Cómo cumplir</th>
   <th scope="col">Recursos prácticos</th>
  </tr>
  <tr>
   <td colspan="1" rowspan="1">1.2.1 Provee alternativas para multimedia de solo audio o solo vídeo (A)</td>
   <td>A transcript should be provided for prerecorded audio-only media, and a transcript or audio description should be provided for prerecorded video-only media (i.e. silent video).</td>
   <td>See <a href="/en-US/docs/Learn/Accessibility/Multimedia#Audio_transcripts">Audio transcripts</a> for transcript information. No audio description tutorial available as yet.</td>
  </tr>
  <tr>
   <td colspan="1">1.2.2 Provee captions para los vídeos (A)</td>
   <td>You should provide captions for video presented on the web, e.g. HTML5 video. This is for the benefit of people who can't hear the audio part of the video.</td>
   <td>See <a href="/en-US/docs/Learn/Accessibility/Multimedia#Video_text_tracks">Video text tracks</a> for HTML5 video captions, and <a href="/en-US/docs/Learn/Accessibility/Multimedia#Other_multimedia_content">Other multimedia content</a> for other technologies. See also <a href="https://support.google.com/youtube/answer/2734796?hl=en">Add your own subtitles &amp; closed captions</a> (YouTube).</td>
  </tr>
  <tr>
   <td colspan="1">
    <p>1.2.3 Provee texto alternativo o una descripción para el audio del vídeo (A)</p>
   </td>
   <td>You should provide text transcripts or audio descriptions for video presented on the web, e.g. HTML5 video. This is for the benefit of people who can't see the visual part of the video, and don't get the full content from the audio alone.</td>
   <td>See <a href="/en-US/docs/Learn/Accessibility/Multimedia#Audio_transcripts">Audio transcripts</a> for transcript information. No audio description tutorial available as yet.</td>
  </tr>
  <tr>
   <td colspan="1">1.2.4 Provee captions para audio en vivo (AA)</td>
   <td>You should provide synchronized captions for all live multimedia that contains audio (e.g. video conferences, live audio broadcasts.)</td>
   <td> </td>
  </tr>
  <tr>
   <td colspan="1">1.2.5 Provee descripciones de adio para vídeo pre-grabado (AA)</td>
   <td>Audio descriptions should be provided for prerecorded video, but only where the existing audio does not convey the full meaning expressed by the video.</td>
   <td> </td>
  </tr>
  <tr>
   <td colspan="1">1.2.6 Provee lenguaje de signos equivalente a el audio pre-grabado (AAA)</td>
   <td>An equivalent sign language video should be provided for any prerecorded content containing audio.</td>
   <td> </td>
  </tr>
  <tr>
   <td colspan="1">1.2.7 Provee un vídeo extendido con descripciones de audio (AAA)</td>
   <td>Where audio descriptions cannot be provided (see 1.2.5) due to video timing issues (e.g. there are no suitable pauses in the content in which to insert the audio descriptions), an alternative version of the video should be provided that includes inserted pauses (and audio descriptions).</td>
   <td> </td>
  </tr>
  <tr>
   <td colspan="1">1.2.8 Provee una alternativa para los elementos multimedia pre-grabados (AAA)</td>
   <td>For all content that features video, a descriptive text transcript should be provided, for example a script of the movie you are watching. This is for the benefit of hearing impaired viewers who cannot hear the content.</td>
   <td>See <a href="/en-US/docs/Learn/Accessibility/Multimedia#Audio_transcripts">Audio transcripts</a> for transcript information.</td>
  </tr>
  <tr>
   <td colspan="1">1.2.9 Provee una transcripción para el audio en vivo (AAA)</td>
   <td>For any live audio content being broadcast, a descriptive text should be provided, for example a script of the play or musical you are listening to. This is for the benefit of hearing impaired viewers who cannot hear the content.</td>
   <td>See <a href="/en-US/docs/Learn/Accessibility/Multimedia#Audio_transcripts">Audio transcripts</a> for transcript information.</td>
  </tr>
 </thead>
</table>

<div class="note">
<p><strong>Nota</strong>: Ver también la descripción de <a href="https://www.w3.org/TR/WCAG21/#time-based-media">WCAG Guideline 1.2: Time-based Media: Provide alternatives for time-based media</a>.</p>
</div>

<h2 id="Pauta_1.3_—_Crear_contenido_que_pueda_presentarse_de_diferentes_formas">Pauta 1.3 — Crear contenido que pueda presentarse de diferentes formas</h2>

<p>Esta pauta hace referencia a la posibilidad de que todo contenido pueda ser consumido de distintas formas, adaptándose a las necesidades del usuario.</p>

««Tabla»»

<div class="note">
<p><strong>Nota</strong>: Ver también la descripción de WCAG: <a href="https://www.w3.org/TR/WCAG21/#adaptable">Guideline 1.3: Adaptable: Create content that can be presented in different ways without losing information or structure.</a></p>
</div>

<h2 id="Pauta_1.4_Facilitar_a_los_usuarios_ver_y_oír_el_contenido_incluyendo_la_separación_entre_el_primer_plano_y_el_fondo">Pauta 1.4: Facilitar a los usuarios ver y oír el contenido, incluyendo la separación entre el primer plano y el fondo</h2>

<p>Esta pauta tiene como objetivo la creación de contenido que sea fácil de diferenciar del fondo y otras decoraciones. El ejemplo clásico es sobre color (tanto en relación al contraste como utilizarlo para transmitir información), pero aplica también en otras situaciones.</p>

««Tabla»»

<div class="note">
<p><strong>Nota</strong>: Ver también la descripción de WCAG: <a href="https://www.w3.org/TR/WCAG21/#distinguishable">Guideline 1.4: Distinguishable: Make it easier for users to see and hear content including separating foreground from background.</a><a href="https://www.w3.org/TR/WCAG21/#distinguishable">.</a></p>
</div>
