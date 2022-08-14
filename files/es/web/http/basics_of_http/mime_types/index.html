---
title: Tipos MIME
slug: Web/HTTP/Basics_of_HTTP/MIME_types
tags:
  - Cabecera de solicitud
  - Guide
  - HTTP
  - Meta
  - Tipos MIME
  - Tipos de contenido
  - application/json
translation_of: Web/HTTP/Basics_of_HTTP/MIME_types
---
<div>{{HTTPSidebar}}</div>

<p>El <strong>tipo Extensiones multipropósito de Correo de Internet (MIME)</strong> es una forma estandarizada de indicar la naturaleza y el formato de un documento, archivo o conjunto de datos. Está definido y estandarizado en <a href="https://tools.ietf.org/html/rfc6838">IETF RFC 6838</a>. La <a href="https://www.iana.org/">Autoridad de Números Asignados de Internet (IANA)</a> es el organismo oficial responsable de realizar un seguimiento de todos los tipos MIME oficiales, y puede encontrar la lista más actualizada y completa en la página de <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">tipos de medios (Media Types)</a>.</p>

<p>Los navegadores a menudo usan el tipo MIME (y no la extensión de archivo) para determinar cómo procesará un documento; por lo tanto, es importante que los servidores estén configurados correctamente para adjuntar el tipo MIME correcto al encabezado del objeto de respuesta.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<h3 id="Estructura_general">Estructura general</h3>

<pre class="syntaxbox">tipo/subtipo</pre>

<p>La estructura de un tipo MIME es muy simple; consiste en un tipo y un subtipo, dos cadenas, separadas por un <code>'/'</code>. No se permite espacio. El <em>tipo </em>representa la categoría y puede ser de tipo <em>discreto </em>o <em>multiparte</em>. El <em>subtipo </em>es específico para cada tipo.</p>

<p>Un tipo MIME no distingue entre mayúsculas y minúsculas, pero tradicionalmente se escribe todo en minúsculas.</p>

<h3 id="Tipos_discretos">Tipos discretos</h3>

<pre class="syntaxbox">text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/octet-stream
…</pre>

<p>Los tipos <em>discretos </em>indican la categoría del documento, puede ser uno de los siguientes:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Tipo</th>
   <th scope="col">Descripción</th>
   <th scope="col">Ejemplo de subtipos típicos</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>text</code></td>
   <td>Representa cualquier documento que contenga texto y es teóricamente legible por humanos</td>
   <td><code>text/plain</code>, <code>text/html</code>, <code>text/css, text/javascript</code></td>
  </tr>
  <tr>
   <td><code>image</code></td>
   <td>Representa cualquier tipo de imagen. Los videos no están incluidos, aunque las imágenes animadas (como el gif animado) se describen con un tipo de imagen.</td>
   <td><code>image/gif</code>, <code>image/png</code>, <code>image/jpeg</code>, <code>image/bmp</code>, <code>image/webp</code></td>
  </tr>
  <tr>
   <td><code>audio</code></td>
   <td>Representa cualquier tipo de archivos de audio</td>
   <td><code>audio/midi</code>, <code>audio/mpeg, audio/webm, audio/ogg, audio/wav</code></td>
  </tr>
  <tr>
   <td><code>video</code></td>
   <td>Representa cualquier tipo de archivos de video</td>
   <td><code>video/webm</code>, <code>video/ogg</code></td>
  </tr>
  <tr>
   <td><code>application</code></td>
   <td>Representa cualquier tipo de datos binarios.</td>
   <td><code>application/octet-stream</code>, <code>application/pkcs12</code>, <code>application/vnd.mspowerpoint</code>, <code>application/xhtml+xml</code>, <code>application/xml</code>,  <code>application/pdf</code></td>
  </tr>
 </tbody>
</table>

<p>Para documentos de texto sin subtipo específico, se debe usar <code>text/plain</code>. De forma similar, para los documentos binarios sin subtipo específico o conocido, se debe usar <code>application/octet-stream</code>.</p>

<h3 id="Tipos_multiparte">Tipos multiparte</h3>

<pre class="syntaxbox">multipart/form-data
multipart/byteranges</pre>

<p id="sect1">Los tipos de <em>partes múltiples </em>indican una categoría de documento que está rota en distintas partes, a menudo con diferentes tipos de MIME. Es una forma de representar un documento compuesto. Con la excepción de <code>multipart/form-data</code>, que se utilizan en relación con <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms">formularios HTML</a> y el método {{HTTPMethod("POST")}}, y <code>multipart/byteranges</code>, que se utilizan junto con el mensaje de estado de <code>Contenido Parcial</code> {{HTTPStatus("206")}} para enviar solo un subconjunto de un documento completo, HTTP no maneja documentos multiparte de una manera específica: el mensaje simplemente se transmite al navegador (que probablemente propondrá una ventana Guardar como, sin saber cómo mostrar el documento en línea.)</p>

<h2 id="Tipos_MIME_importantes_para_desarrolladores_Web">Tipos MIME importantes para desarrolladores Web</h2>

<h3 id="applicationoctet-stream"><code>application/octet-stream</code></h3>

<p>Este es el valor predeterminado para un archivo binario. Como realmente significa un <em>archivo binario desconocido</em>, los navegadores generalmente no lo ejecutan automáticamente, o incluso preguntan si debería ejecutarse. Lo tratan como si el encabezado {{HTTPHeader("Content-Disposition")}} se configurara con el valor <code>attachment</code> y proponen un archivo 'Guardar como'.</p>

<h3 id="textplain"><code>text/plain</code></h3>

<p>Este es el valor predeterminado para los archivos de texto. Incluso si realmente significa un archivo textual desconocido, los navegadores asumen que pueden mostrarlo.</p>

<div class="note">
<p>Tenga en cuenta que <code>text/plain</code> no significa <em>cualquier tipo de datos textuales</em>. Si esperan un tipo específico de datos textuales, probablemente no lo considerarán una coincidencia. Específicamente, si descargan un archivo de texto sin formato <code>text/plain</code> de un elemento {{HTMLElement("link")}} que declara archivos CSS, no lo reconocerán como un archivo CSS válido si se presenta con <code>text/plain</code>. Se debe usar el tipo MIME CSS <code>text/css</code>.</p>
</div>

<h3 id="textcss"><code>text/css</code></h3>

<p>Todos los archivos CSS que deban interpretarse como tales en una página web <strong>deben </strong>ser de los archivos de <code>text/css</code>. A menudo, los servidores no reconocen los archivos con el sufijo <code>.css</code> como archivos CSS y los envían con tipo MIME <code>text/plain</code> o <code>application/octet-stream</code>: en estos casos, la mayoría de los navegadores no los reconocerán como archivos CSS y serán ignorado silenciosamente. Se debe prestar especial atención en servir los archivos CSS con el tipo correcto.</p>

<h3 id="texthtml"><code>text/html</code></h3>

<p>Todo el contenido HTML debe ser servido con este tipo. Los tipos MIME alternativos para XHTML, como <code>application/xml+html</code>, son en su mayoría inútiles hoy en día (HTML5 unificó estos formatos).</p>

<h3 id="Tipos_de_imágenes">Tipos de imágenes</h3>

<p>Solo un puñado de tipos de imágenes son ampliamente reconocidos y se consideran seguros para la Web, listos para usar en una página Web:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Tipo MIME</th>
   <th scope="col">Tipo de imagen</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>image/gif</code></td>
   <td>Imágenes GIF (compresión sin pérdida, reemplazada por PNG)</td>
  </tr>
  <tr>
   <td><code>image/jpeg</code></td>
   <td>Imágenes JPEG</td>
  </tr>
  <tr>
   <td><code>image/png</code></td>
   <td>Imágenes PNG</td>
  </tr>
  <tr>
   <td><code>image/svg+xml</code></td>
   <td>Imágenes SVG (imágenes vectoriales)</td>
  </tr>
 </tbody>
</table>



<p>Existe una discusión para agregar WebP (<code>image/webp</code>) a esta lista, pero como cada tipo de imagen nuevo aumentará el tamaño de una base de código, esto puede presentar nuevos problemas de seguridad, por lo que los proveedores de navegadores son cautelosos al aceptarlo.</p>

<p>Se pueden encontrar otros tipos de imágenes en documentos Web. Por ejemplo, muchos navegadores admiten tipos de imágenes de iconos para favicones o similares. En particular, las imágenes ICO son compatibles en este contexto con el tipo MIME <code>image/x-icon</code>.</p>



<h3 id="Tipos_de_audio_y_video">Tipos de audio y video</h3>

<p>Al igual que las imágenes, HTML no define un conjunto de tipos soportados para usar con los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}}, por lo que solo un grupo relativamente pequeño de ellos puede ser utilizado en la web. Los <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats">formatos de medios compatibles con los elementos de audio y video HTML</a> explican tanto los códecs como los formatos de contenedor que se pueden usar.</p>

<p>El tipo MIME de dichos archivos representa principalmente los formatos de contenedor y los más comunes en un contexto web son:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Tipo MIME</th>
   <th scope="col">Tipo de audio o video</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>audio/wave</code><br>
    <code>audio/wav</code><br>
    <code>audio/x-wav</code><br>
    <code>audio/x-pn-wav</code></td>
   <td>Un archivo de audio en formato de contenedor WAVE. El códec de audio PCM (códec WAVE  "1") a menudo es compatible, pero otros códecs tienen soporte más limitado (si lo hay).</td>
  </tr>
  <tr>
   <td><code>audio/webm</code></td>
   <td>Un archivo de audio en formato de contenedor WebM. Vorbis y Opus son los códecs de audio más comunes.</td>
  </tr>
  <tr>
   <td><code>video/webm</code></td>
   <td>Un archivo de video, posiblemente con audio, en el formato de contenedor de WebM. VP8 y VP9 son los códecs de video más comunes utilizados en él; Vorbis y Opus los códecs de audio más comunes.</td>
  </tr>
  <tr>
   <td><code>audio/ogg</code></td>
   <td>Un archivo de audio en el formato de contenedor OGG. Vorbis es el códec de audio más común utilizado en dicho contenedor.</td>
  </tr>
  <tr>
   <td><code>video/ogg</code></td>
   <td>Un archivo de video, posiblemente con audio, en el formato de contenedor OGG. Theora es el códec de video habitual utilizado en él; Vorbis es el códec de audio habitual.</td>
  </tr>
  <tr>
   <td><code>application/ogg</code></td>
   <td>Un archivo de audio o video usando el formato de contenedor OGG. Theora es el códec de video habitual utilizado en él; Vorbis es el códec de audio más común.</td>
  </tr>
 </tbody>
</table>

<h3 id="multipartform-data"><code>multipart/form-data</code></h3>

<p>El tipo de datos <code>multipart/form-data</code> se puede usar al enviar el contenido de un <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms">formulario HTML</a> completo desde el navegador al servidor. Como formato de documento multiparte, consta de diferentes partes, delimitadas por un límite (una cadena que comienza con un doble guión <code>'--'</code>). Cada parte es una entidad en sí misma, con sus propios encabezados HTTP, {{HTTPHeader("Content-Disposition")}} y {{HTTPHeader("Content-Type")}} para los campos de carga de archivos, y los más comunes ({{HTTPHeader("Content-Length")}} es ignorado ya que la línea límite se usa como delimitador).</p>

<pre class="syntaxbox">Content-Type: multipart/form-data; boundary=unaCadenaDelimitadora
(otros encabezados asociados con el documento multiparte como un todo)

--unaCadenaDelimitadora
Content-Disposition: form-data; name="miArchivo"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--unaCadenaDelimitadora
Content-Disposition: form-data; name="miCampo"

(data)
--unaCadenaDelimitadora
(más subpartes)
--unaCadenaDelimitadora--

</pre>

<p>El siguiente formulario:</p>

<pre class="brush: html">&lt;form action="http://localhost:8000/" method="post" enctype="multipart/form-data"&gt;
  &lt;input type="text" name="miCampoDeTexto"&gt;
  &lt;input type="checkbox" name="miCheckBox"&gt;Checado&lt;/input&gt;
  &lt;input type="file" name="miArchivo"&gt;
  &lt;button&gt;Enviar el archivo&lt;/button&gt;
&lt;/form&gt;</pre>

<p>enviará este mensaje:</p>

<pre>POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="miCampoDeTexto"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="miCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="miArchivo"; filename="prueba.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--

</pre>

<h3 id="multipartbyteranges"><code>multipart/byteranges</code></h3>

<p>El tipo MIME <code>multipart/byteranges</code> se usa en el contexto del envío de respuestas parciales al navegador. Cuando se envía el código de estado de <code>Contenido Parcial</code> {{HTTPStatus("206")}}, este tipo MIME se usa para indicar que el documento está compuesto de varias partes, una para cada rango solicitado. Al igual que otros tipos de varias partes, {{HTTPHeader("Content-Type")}} usa la directiva <code>boundary</code> para definir la cadena delimitadora. Cada una de las diferentes partes tiene un encabezado {{HTTPHeader("Content-Type")}} con el tipo real del documento y un {{HTTPHeader("Content-Range")}} con el rango que representan.</p>

<pre><code>HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" /&gt;
    &lt;meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--</code></pre>

<h2 id="Importancia_de_establecer_el_tipo_MIME_correcto">Importancia de establecer el tipo MIME correcto</h2>

<p>La mayoría de los servidores web envían recursos de tipo desconocido utilizando el tipo MIME predeterminado <code>application/octet-stream</code>. Por razones de seguridad, la mayoría de los navegadores no permiten establecer una acción predeterminada personalizada para dichos recursos, lo que obliga al usuario a almacenarlo en el disco para usarlo. Algunas configuraciones de servidor incorrectas que se ven con frecuencia ocurren con los siguientes tipos de archivos:</p>

<ul>
 <li>
  <p>Archivos con codificación RAR. En este caso, lo ideal sería establecer el tipo verdadero de los archivos codificados; esto a menudo no es posible (ya que puede no ser conocido por el servidor y estos archivos pueden contener varios recursos de diferentes tipos). En este caso, al configurar el servidor para que envíe el tipo MIME <code>application/x-rar-compressed</code>, los usuarios no habrán definido una acción predeterminada útil para ellos.</p>
 </li>
 <li>
  <p>Archivos de audio y video. Solo los recursos con el tipo MIME correcto serán reconocidos y reproducidos en elementos {{ HTMLElement("video") }} o {{ HTMLElement("audio") }}. Asegúrese de <a href="https://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements">usar el tipo correcto para audio y video</a>.</p>
 </li>
 <li>
  <p>Tipos de archivos propietarios. Preste especial atención al servir un tipo de archivo propietario. Evite el uso de <code>application/octet-stream</code> ya que no será posible un manejo especial: la mayoría de los navegadores no permiten definir un comportamiento predeterminado (como "Abrir en Word") para este tipo genérico MIME.</p>
 </li>
</ul>

<h2 id="Olfateo_MIME_sniffing">Olfateo MIME (sniffing)</h2>

<p>En ausencia de un tipo MIME, o en algunos otros casos en los que un cliente cree que están configurados incorrectamente, los navegadores pueden realizar el rastreo MIME, que es adivinar el tipo MIME correcto mirando el recurso. Cada navegador realiza esto de manera diferente y bajo diferentes circunstancias. Hay algunas preocupaciones de seguridad con esta práctica, ya que algunos tipos MIME representan el contenido ejecutable y otros no. Los servidores pueden bloquear el rastreo de MIME enviando el {{HTTPHeader("X-Content-Type-Options")}} a lo largo de {{HTTPHeader("Content-Type")}}.</p>

<h2 id="Otros_métodos_de_transporte_de_tipo_de_documento">Otros métodos de transporte de tipo de documento</h2>

<p>Los tipos MIME no son la única forma de transmitir la información del tipo de documento:</p>

<ul>
 <li>Los sufijos de nombre a veces se usan, especialmente en los sistemas de Microsoft Windows. No todos los sistemas operativos consideran significativos estos sufijos (especialmente Linux y Mac OS), y al igual que un tipo MIME externo, no hay garantía de que sean correctos.</li>
 <li>Números mágicos. La sintaxis de los diferentes tipos de archivos permite la inferencia del tipo de archivo al observar la estructura. P.ej. cada archivo GIF comienza con el valor hexadecimal 47 49 46 38 39 [GIF89] o archivos PNG con 89 50 4E 47 [.PNG]. No todos los tipos de archivos tienen números mágicos, por lo que este tampoco es un sistema 100% confiable.</li>
</ul>



<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types">Configurar correctamente los tipos MIME del servidor</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats">Formatos de medios compatibles con los elementos de audio y video HTML</a></li>
 <li>
  <p><a href="https://www.iana.org/assignments/media-types/application/json">https://www.iana.org/assignments/media-types/application/json</a></p>
 </li>
</ul>
