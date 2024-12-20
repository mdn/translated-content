---
title: Lista completa de tipos MIME
slug: Web/HTTP/MIME_types/Common_types
original_slug: Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
---

{{HTTPSidebar}}

Aquí está una lista completa de tipos de MIME, asociados por tipo de documentos y ordenados por su extensión común.

Dos tipos primarios de MIME son importantes para el rol de tipos por defecto:

- `text/plain` es el valor por defecto para los archivos textuales. Un archivo textual debe ser legible y no puede contener datos binarios.
- `application/octet-stream` es el valor por defecto para todos los demás casos. Un tipo de archivo desconocido debe usar este tipo. Los navegadores tienen un cuidado particular cuando manipulan estos archivos, tratando de proteger al usuario previéndo comportamientos peligrosos.

IANA es el registro oficial de los tipos de media MIME y mantiene una [lista oficial de todos los tipos de MIME](https://www.iana.org/assignments/media-types/media-types.xhtml). Esta tabla, lista algunos de los tipos de MIME importantes para la web:

| Extensión      | Tipo de documento                                                                                      | Tipo de MIME                                            |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `.aac`         | Archivo de audio AAC                                                                                   | `audio/aac`                                             |
| `.abw`         | Documento [AbiWord](https://en.wikipedia.org/wiki/AbiWord)                                             | `application/x-abiword`                                 |
| `.arc`         | Documento de Archivo (múltiples archivos incrustados)                                                  | `application/octet-stream`                              |
| `.avi`         | AVI: Audio Video Intercalado                                                                           | `video/x-msvideo`                                       |
| `.azw`         | Formato eBook Amazon Kindle                                                                            | `application/vnd.amazon.ebook`                          |
| `.bin`         | Cualquier tipo de datos binarios                                                                       | `application/octet-stream`                              |
| `.bz`          | Archivo BZip                                                                                           | `application/x-bzip`                                    |
| `.bz2`         | Archivo BZip2                                                                                          | `application/x-bzip2`                                   |
| `.csh`         | Script C-Shell                                                                                         | `application/x-csh`                                     |
| `.css`         | Hojas de estilo (CSS)                                                                                  | `text/css`                                              |
| `.csv`         | Valores separados por coma (CSV)                                                                       | `text/csv`                                              |
| `.doc`         | Microsoft Word                                                                                         | `application/msword`                                    |
| `.epub`        | Publicación Electrónica (EPUB)                                                                         | `application/epub+zip`                                  |
| `.gif`         | Graphics Interchange Format (GIF)                                                                      | `image/gif`                                             |
| `.htm .html`   | Hipertexto (HTML)                                                                                      | `text/html`                                             |
| `.ico`         | Formato Icon                                                                                           | `image/x-icon`                                          |
| `.ics`         | Formato iCalendar                                                                                      | `text/calendar`                                         |
| `.jar`         | Archivo Java (JAR)                                                                                     | `application/java-archive`                              |
| `.jpeg` `.jpg` | Imágenes JPEG                                                                                          | `image/jpeg`                                            |
| `.js`          | JavaScript (ECMAScript)                                                                                | `application/javascript`                                |
| `.json`        | Formato JSON                                                                                           | `application/json`                                      |
| `.mid` `.midi` | Interfaz Digital de Instrumentos Musicales (MIDI)                                                      | `audio/midi`                                            |
| `.mpeg`        | Video MPEG                                                                                             | `video/mpeg`                                            |
| `.mpkg`        | Paquete de instalación de Apple                                                                        | `application/vnd.apple.installer+xml`                   |
| `.odp`         | Documento de presentación de OpenDocument                                                              | `application/vnd.oasis.opendocument.presentation`       |
| `.ods`         | Hoja de Cálculo OpenDocument                                                                           | `application/vnd.oasis.opendocument.spreadsheet`        |
| `.odt`         | Documento de texto OpenDocument                                                                        | `application/vnd.oasis.opendocument.text`               |
| `.oga`         | Audio OGG                                                                                              | `audio/ogg`                                             |
| `.ogv`         | Video OGG                                                                                              | `video/ogg`                                             |
| `.ogx`         | OGG                                                                                                    | `application/ogg`                                       |
| `.pdf`         | Adobe [Portable Document Format](https://acrobat.adobe.com/us/en/why-adobe/about-adobe-pdf.html) (PDF) | `application/pdf`                                       |
| `.ppt`         | Microsoft PowerPoint                                                                                   | `application/vnd.ms-powerpoint`                         |
| `.rar`         | Archivo RAR                                                                                            | `application/x-rar-compressed`                          |
| `.rtf`         | Formato de Texto Enriquecido (RTF)                                                                     | `application/rtf`                                       |
| `.sh`          | Script Bourne shell                                                                                    | `application/x-sh`                                      |
| `.svg`         | Gráficos Vectoriales (SVG)                                                                             | `image/svg+xml`                                         |
| `.swf`         | [Small web format](https://en.wikipedia.org/wiki/SWF) (SWF) o Documento Adobe Flash                    | `application/x-shockwave-flash`                         |
| `.tar`         | Aerchivo Tape (TAR)                                                                                    | `application/x-tar`                                     |
| `.tif .tiff`   | Formato de archivo de imagen etiquetado (TIFF)                                                         | `image/tiff`                                            |
| `.ttf`         | Fuente TrueType                                                                                        | `font/ttf`                                              |
| `.vsd`         | Microsft Visio                                                                                         | `application/vnd.visio`                                 |
| `.wav`         | Formato de audio de forma de onda (WAV)                                                                | `audio/x-wav`                                           |
| `.weba`        | Audio WEBM                                                                                             | `audio/webm`                                            |
| `.webm`        | Video WEBM                                                                                             | `video/webm`                                            |
| `.webp`        | Imágenes WEBP                                                                                          | `image/webp`                                            |
| `.woff`        | Formato de fuente abierta web (WOFF)                                                                   | `font/woff`                                             |
| `.woff2`       | Formato de fuente abierta web (WOFF)                                                                   | `font/woff2`                                            |
| `.xhtml`       | XHTML                                                                                                  | `application/xhtml+xml`                                 |
| `.xls`         | Microsoft Excel                                                                                        | `application/vnd.ms-excel`                              |
| `.xml`         | `XML`                                                                                                  | `application/xml`                                       |
| `.xul`         | XUL                                                                                                    | `application/vnd.mozilla.xul+xml`                       |
| `.zip`         | Archivo ZIP                                                                                            | `application/zip`                                       |
| `.3gp`         | Contenedor de audio/video [3GPP](https://en.wikipedia.org/wiki/3GP_and_3G2)                            | `video/3gpp` `audio/3gpp` if it doesn't contain video   |
| `.3g2`         | Contenedor de audio/video [3GPP2](https://en.wikipedia.org/wiki/3GP_and_3G2)                           | `video/3gpp2` `audio/3gpp2` if it doesn't contain video |
| `.7z`          | Archivo [7-zip](https://en.wikipedia.org/wiki/7-Zip)                                                   | `application/x-7z-compressed`                           |
