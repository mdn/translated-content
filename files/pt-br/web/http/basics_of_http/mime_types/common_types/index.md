---
title: Lista Incompleta de tipos MIME
slug: Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
---

{{HTTPSidebar}}

Abaixo uma lista de tipos de MIME, associadas por tipos de documentos, ordenados por suas extensões comuns.

Há dois tipo MIME que são importantes para tipos padrões:

- `text/plain` é o tipo padrão para arquivos de texto. Um arquivo de texto deve ser legível para um ser humano, e não deve conter dados binários.
- `application/octet-stream` É um tipo padrão para todos outros casos. Um tipo de arquivo desconhecido deveria usar este tipo. Navegadores tomarão mais cuidado ao manipular esses arquivos, tentando proteger o usuário e prevenir comportamentos perigosos.

IANA é o registrador official de tipos de mídia MIME e mantém uma [lista de todos tipos oficiais de MIME](http://www.iana.org/assignments/media-types/media-types.xhtml). Esta tabela lista alguns tipos de MIME importantes para a Web.

| Extensão       | Tipo do documento                                                                                      | Tipo MIME                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| `.aac`         | Arquivo de audio AAC                                                                                   | `audio/aac`                                                                                  |
| `.abw`         | Documento [AbiWord](https://en.wikipedia.org/wiki/AbiWord)                                             | `application/x-abiword`                                                                      |
| `.arc`         | Archive document (multiple files embedded)                                                             | `application/octet-stream`                                                                   |
| `.avi`         | Arquivo de audio e vídeo Intercalar AVI                                                                | `video/x-msvideo`                                                                            |
| `.azw`         | Formato eBook do Amazon Kindle                                                                         | `application/vnd.amazon.ebook`                                                               |
| `.bin`         | Qualquer tipo de dados binários                                                                        | `application/octet-stream`                                                                   |
| `.bz`          | Arquivo compactado BZip                                                                                | `application/x-bzip`                                                                         |
| `.bz2`         | Arquivo compactado BZip2                                                                               | `application/x-bzip2`                                                                        |
| `.csh`         | C-Shell script                                                                                         | `application/x-csh`                                                                          |
| `.css`         | Cascading Style Sheets (CSS)                                                                           | `text/css`                                                                                   |
| `.csv`         | Comma-separated values (CSV)                                                                           | `text/csv`                                                                                   |
| `.doc`         | Microsoft Word                                                                                         | `application/msword`                                                                         |
| `.eot`         | MS Embedded OpenType fonts                                                                             | `application/vnd.ms-fontobject`                                                              |
| `.epub`        | Electronic publication (EPUB)                                                                          | `application/epub+zip`                                                                       |
| `.gif`         | Graphics Interchange Format (GIF)                                                                      | `image/gif`                                                                                  |
| `.htm .html`   | HyperText Markup Language (HTML)                                                                       | `text/html`                                                                                  |
| `.ico`         | Icon format                                                                                            | `image/x-icon`                                                                               |
| `.ics`         | iCalendar format                                                                                       | `text/calendar`                                                                              |
| `.jar`         | Java Archive (JAR)                                                                                     | `application/java-archive`                                                                   |
| `.jpeg` `.jpg` | JPEG images                                                                                            | `image/jpeg`                                                                                 |
| `.js`          | JavaScript (ECMAScript)                                                                                | `application/javascript`                                                                     |
| `.json`        | JSON format                                                                                            | `application/json`                                                                           |
| `.mid` `.midi` | Musical Instrument Digital Interface (MIDI)                                                            | `audio/midi`                                                                                 |
| `.mpeg`        | MPEG Video                                                                                             | `video/mpeg`                                                                                 |
| `.mpkg`        | Apple Installer Package                                                                                | `application/vnd.apple.installer+xml`                                                        |
| `.odp`         | OpenDocument presentation document                                                                     | `application/vnd.oasis.opendocument.presentation`                                            |
| `.ods`         | OpenDocument spreadsheet document                                                                      | `application/vnd.oasis.opendocument.spreadsheet`                                             |
| `.odt`         | OpenDocument text document                                                                             | `application/vnd.oasis.opendocument.text`                                                    |
| `.oga`         | OGG audio                                                                                              | `audio/ogg`                                                                                  |
| `.ogv`         | OGG video                                                                                              | `video/ogg`                                                                                  |
| `.ogx`         | OGG                                                                                                    | `application/ogg`                                                                            |
| `.otf`         | OpenType font                                                                                          | `font/otf`                                                                                   |
| `.png`         | Portable Network Graphics                                                                              | `image/png`                                                                                  |
| `.pdf`         | Adobe [Portable Document Format](https://acrobat.adobe.com/us/en/why-adobe/about-adobe-pdf.html) (PDF) | `application/pdf`                                                                            |
| `.ppt`         | Microsoft PowerPoint                                                                                   | `application/vnd.ms-powerpoint`                                                              |
| `.rar`         | RAR archive                                                                                            | `application/x-rar-compressed`                                                               |
| `.rtf`         | Rich Text Format (RTF)                                                                                 | `application/rtf`                                                                            |
| `.sh`          | Bourne shell script                                                                                    | `application/x-sh`                                                                           |
| `.svg`         | Scalable Vector Graphics (SVG)                                                                         | `image/svg+xml`                                                                              |
| `.swf`         | [Small web format](https://en.wikipedia.org/wiki/SWF) (SWF) or Adobe Flash document                    | `application/x-shockwave-flash`                                                              |
| `.tar`         | Tape Archive (TAR)                                                                                     | `application/x-tar`                                                                          |
| `.tif .tiff`   | Tagged Image File Format (TIFF)                                                                        | `image/tiff`                                                                                 |
| `.ts`          | Typescript file                                                                                        | `application/typescript`                                                                     |
| `.ttf`         | TrueType Font                                                                                          | `font/ttf`                                                                                   |
| `.vsd`         | Microsoft Visio                                                                                        | `application/vnd.visio`                                                                      |
| `.wav`         | Waveform Audio Format                                                                                  | `audio/x-wav`                                                                                |
| `.weba`        | WEBM audio                                                                                             | `audio/webm`                                                                                 |
| `.webm`        | WEBM video                                                                                             | `video/webm`                                                                                 |
| `.webp`        | WEBP image                                                                                             | `image/webp`                                                                                 |
| `.woff`        | Web Open Font Format (WOFF)                                                                            | `font/woff`                                                                                  |
| `.woff2`       | Web Open Font Format (WOFF)                                                                            | `font/woff2`                                                                                 |
| `.xhtml`       | XHTML                                                                                                  | `application/xhtml+xml`                                                                      |
| `.xls .xlsx`   | Microsoft Excel                                                                                        | `application/vnd.ms-excel application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| `.xml`         | `XML`                                                                                                  | `application/xml`                                                                            |
| `.xul`         | XUL                                                                                                    | application/vnd.mozilla.xul+xml                                                              |
| `.zip`         | ZIP archive                                                                                            | `application/zip`                                                                            |
| `.3gp`         | [3GPP](https://en.wikipedia.org/wiki/3GP_and_3G2) audio/video container                                | `video/3gpp` `audio/3gpp` if it doesn't contain video                                        |
| `.3g2`         | [3GPP2](https://en.wikipedia.org/wiki/3GP_and_3G2) audio/video container                               | `video/3gpp2` `audio/3gpp2` if it doesn't contain video                                      |
| `.7z`          | [7-zip](https://en.wikipedia.org/wiki/7-Zip) archive                                                   | `application/x-7z-compressed`                                                                |
