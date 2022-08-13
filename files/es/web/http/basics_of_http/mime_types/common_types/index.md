---
title: Lista completa de tipos MIME
slug: Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
tags:
  - Archivos
  - Audio
  - HTTP
  - MIME
  - Referencia
  - Texto
  - Tipos
  - Tipos MIME
  - Tipos de archivo
  - Video
translation_of: Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
---
<div>{{HTTPSidebar}}</div>

<p><span class="short_text" id="result_box" lang="es"><span>Aquí está una lista completa de</span></span> tipos de MIME, asociados por tipo de documentos y  ordenados por su extensión común.</p>

<p>Dos tipos primarios de MIME son importantes para el rol de tipos por defecto:</p>

<ul>
 <li><code>text/plain</code> es el valor por defecto para los archivos textuales. Un archivo textual debe ser legible y no puede contener datos binarios.</li>
 <li><code>application/octet-stream</code> es el valor por defecto para todos los demás casos. Un tipo de archivo desconocido debe usar este tipo. Los navegadores tienen un cuidado particular cuando manipulan estos archivos, tratando de proteger al usuario previéndo comportamientos peligrosos.</li>
</ul>

<p>IANA es el registro oficial de los tipos de media MIME y mantiene una <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">lista oficial de todos los tipos de MIME</a>. Esta tabla, lista algunos de los tipos de MIME importantes para la web:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Extensión</th>
   <th scope="col">Tipo de documento</th>
   <th scope="col">Tipo de MIME</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>.aac</code></td>
   <td>Archivo de audio AAC</td>
   <td><code>audio/aac</code></td>
  </tr>
  <tr>
   <td><code>.abw</code></td>
   <td>Documento <a href="https://en.wikipedia.org/wiki/AbiWord">AbiWord</a></td>
   <td><code>application/x-abiword</code></td>
  </tr>
  <tr>
   <td><code>.arc</code></td>
   <td>Documento de Archivo (múltiples archivos incrustados)</td>
   <td><code>application/octet-stream</code></td>
  </tr>
  <tr>
   <td><code>.avi</code></td>
   <td>AVI: Audio Video Intercalado</td>
   <td><code>video/x-msvideo</code></td>
  </tr>
  <tr>
   <td><code>.azw</code></td>
   <td>Formato  eBook Amazon Kindle </td>
   <td><code>application/vnd.amazon.ebook</code></td>
  </tr>
  <tr>
   <td><code>.bin</code></td>
   <td>Cualquier tipo de datos binarios</td>
   <td><code>application/octet-stream</code></td>
  </tr>
  <tr>
   <td><code>.bz</code></td>
   <td>Archivo BZip</td>
   <td><code>application/x-bzip</code></td>
  </tr>
  <tr>
   <td><code>.bz2</code></td>
   <td>Archivo BZip2</td>
   <td><code>application/x-bzip2</code></td>
  </tr>
  <tr>
   <td><code>.csh</code></td>
   <td>Script C-Shell</td>
   <td><code>application/x-csh</code></td>
  </tr>
  <tr>
   <td><code>.css</code></td>
   <td>Hojas de estilo (CSS)</td>
   <td><code>text/css</code></td>
  </tr>
  <tr>
   <td><code>.csv</code></td>
   <td>Valores separados por coma (CSV)</td>
   <td><code>text/csv</code></td>
  </tr>
  <tr>
   <td><code>.doc</code></td>
   <td>Microsoft Word</td>
   <td><code>application/msword</code></td>
  </tr>
  <tr>
   <td><code>.epub</code></td>
   <td>Publicación Electrónica (EPUB)</td>
   <td><code>application/epub+zip</code></td>
  </tr>
  <tr>
   <td><code>.gif</code></td>
   <td>Graphics Interchange Format (GIF)</td>
   <td><code>image/gif</code></td>
  </tr>
  <tr>
   <td><code>.htm<br>
    .html</code></td>
   <td>Hipertexto (HTML)</td>
   <td><code>text/html</code></td>
  </tr>
  <tr>
   <td><code>.ico</code></td>
   <td>Formato Icon</td>
   <td><code>image/x-icon</code></td>
  </tr>
  <tr>
   <td><code>.ics</code></td>
   <td>Formato iCalendar</td>
   <td><code>text/calendar</code></td>
  </tr>
  <tr>
   <td><code>.jar</code></td>
   <td>Archivo Java (JAR)</td>
   <td><code>application/java-archive</code></td>
  </tr>
  <tr>
   <td><code>.jpeg</code><br>
    <code>.jpg</code></td>
   <td>Imágenes JPEG</td>
   <td><code>image/jpeg</code></td>
  </tr>
  <tr>
   <td><code>.js</code></td>
   <td>JavaScript (ECMAScript)</td>
   <td><code>application/javascript</code></td>
  </tr>
  <tr>
   <td><code>.json</code></td>
   <td>Formato JSON</td>
   <td><code>application/json</code></td>
  </tr>
  <tr>
   <td><code>.mid</code><br>
    <code>.midi</code></td>
   <td>Interfaz Digital de Instrumentos Musicales (MIDI)</td>
   <td><code>audio/midi</code></td>
  </tr>
  <tr>
   <td><code>.mpeg</code></td>
   <td>Video MPEG</td>
   <td><code>video/mpeg</code></td>
  </tr>
  <tr>
   <td><code>.mpkg</code></td>
   <td>Paquete de instalación de Apple</td>
   <td><code>application/vnd.apple.installer+xml</code></td>
  </tr>
  <tr>
   <td><code>.odp</code></td>
   <td>Documento de presentación de OpenDocument</td>
   <td><code>application/vnd.oasis.opendocument.presentation</code></td>
  </tr>
  <tr>
   <td><code>.ods</code></td>
   <td>Hoja de Cálculo OpenDocument</td>
   <td><code>application/vnd.oasis.opendocument.spreadsheet</code></td>
  </tr>
  <tr>
   <td><code>.odt</code></td>
   <td>Documento de texto OpenDocument</td>
   <td><code>application/vnd.oasis.opendocument.text</code></td>
  </tr>
  <tr>
   <td><code>.oga</code></td>
   <td>Audio OGG</td>
   <td><code>audio/ogg</code></td>
  </tr>
  <tr>
   <td><code>.ogv</code></td>
   <td>Video OGG</td>
   <td><code>video/ogg</code></td>
  </tr>
  <tr>
   <td><code>.ogx</code></td>
   <td>OGG</td>
   <td><code>application/ogg</code></td>
  </tr>
  <tr>
   <td><code>.pdf</code></td>
   <td>Adobe <a href="https://acrobat.adobe.com/us/en/why-adobe/about-adobe-pdf.html">Portable Document Format</a> (PDF)</td>
   <td><code>application/pdf</code></td>
  </tr>
  <tr>
   <td><code>.ppt</code></td>
   <td>Microsoft PowerPoint</td>
   <td><code>application/vnd.ms-powerpoint</code></td>
  </tr>
  <tr>
   <td><code>.rar</code></td>
   <td>Archivo RAR</td>
   <td><code>application/x-rar-compressed</code></td>
  </tr>
  <tr>
   <td><code>.rtf</code></td>
   <td>Formato de Texto Enriquecido (RTF)</td>
   <td><code>application/rtf</code></td>
  </tr>
  <tr>
   <td><code>.sh</code></td>
   <td>Script Bourne shell</td>
   <td><code>application/x-sh</code></td>
  </tr>
  <tr>
   <td><code>.svg</code></td>
   <td>Gráficos Vectoriales (SVG)</td>
   <td><code>image/svg+xml</code></td>
  </tr>
  <tr>
   <td><code>.swf</code></td>
   <td><a href="https://en.wikipedia.org/wiki/SWF">Small web format</a> (SWF) o Documento Adobe Flash</td>
   <td><code>application/x-shockwave-flash</code></td>
  </tr>
  <tr>
   <td><code>.tar</code></td>
   <td>Aerchivo Tape (TAR)</td>
   <td><code>application/x-tar</code></td>
  </tr>
  <tr>
   <td><code>.tif<br>
    .tiff</code></td>
   <td>Formato de archivo de imagen etiquetado (TIFF)</td>
   <td><code>image/tiff</code></td>
  </tr>
  <tr>
   <td><code>.ttf</code></td>
   <td>Fuente TrueType</td>
   <td><code>font/ttf</code></td>
  </tr>
  <tr>
   <td><code>.vsd</code></td>
   <td>Microsft Visio</td>
   <td><code>application/vnd.visio</code></td>
  </tr>
  <tr>
   <td><code>.wav</code></td>
   <td>Formato de audio de forma de onda (WAV)</td>
   <td><code>audio/x-wav</code></td>
  </tr>
  <tr>
   <td><code>.weba</code></td>
   <td>Audio WEBM</td>
   <td><code>audio/webm</code></td>
  </tr>
  <tr>
   <td><code>.webm</code></td>
   <td>Video WEBM</td>
   <td><code>video/webm</code></td>
  </tr>
  <tr>
   <td><code>.webp</code></td>
   <td>Imágenes WEBP</td>
   <td><code>image/webp</code></td>
  </tr>
  <tr>
   <td><code>.woff</code></td>
   <td>Formato de fuente abierta web (WOFF)</td>
   <td><code>font/woff</code></td>
  </tr>
  <tr>
   <td><code>.woff2</code></td>
   <td>Formato de fuente abierta web (WOFF)</td>
   <td><code>font/woff2</code></td>
  </tr>
  <tr>
   <td><code>.xhtml</code></td>
   <td>XHTML</td>
   <td><code>application/xhtml+xml</code></td>
  </tr>
  <tr>
   <td><code>.xls</code></td>
   <td>Microsoft Excel</td>
   <td><code>application/vnd.ms-excel</code></td>
  </tr>
  <tr>
   <td><code>.xml</code></td>
   <td><code>XML</code></td>
   <td><code>application/xml</code></td>
  </tr>
  <tr>
   <td><code>.xul</code></td>
   <td>XUL</td>
   <td><code>application/vnd.mozilla.xul+xml</code></td>
  </tr>
  <tr>
   <td><code>.zip</code></td>
   <td>Archivo ZIP</td>
   <td><code>application/zip</code></td>
  </tr>
  <tr>
   <td><code>.3gp</code></td>
   <td>Contenedor de audio/video <a href="https://en.wikipedia.org/wiki/3GP_and_3G2">3GPP</a></td>
   <td><code>video/3gpp</code><br>
    <code>audio/3gpp</code> if it doesn't contain video</td>
  </tr>
  <tr>
   <td><code>.3g2</code></td>
   <td>Contenedor de audio/video <a href="https://en.wikipedia.org/wiki/3GP_and_3G2">3GPP2</a></td>
   <td><code>video/3gpp2</code><br>
    <code>audio/3gpp2</code> if it doesn't contain video</td>
  </tr>
  <tr>
   <td><code>.7z</code></td>
   <td>Archivo <a href="https://en.wikipedia.org/wiki/7-Zip">7-zip</a></td>
   <td><code>application/x-7z-compressed</code></td>
  </tr>
 </tbody>
</table>
