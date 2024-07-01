---
title: Liste des types MIME communs
slug: Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
---

{{HTTPSidebar}}

Voici une liste de types MIME, associés par type et ordonnée par extension.

Il existe deux types MIME principaux qui jouent un rôle important en terme de types par défaut :

- `text/plain` est le type MIME par défaut pour les fichiers texte. Un fichier texte doit pouvoir être lu par un utilisateur et ne pas contenir de données binaires.
- `application/octet-stream` est le type MIME par défaut dans tous les autres cas. Un fichier de type inconnu doit être associé à ce type MIME. Les navigateurs traiteront les fichiers associés à ce type MIME de façon particulière pour protéger au maximum l'utilisateur des éventuels risques de sécurité.

L'IANA constitue le registre officiel pour l'ensemble des types MIME et maintient une liste exhaustive à l'adresse suivante : <https://www.iana.org/assignments/media-types/media-types.xhtml>. La table ci-dessous se focalise sur les types MIME importants dans le cadre du Web, **elle n'est donc pas exhaustive :**

| Extension      | Type de document                                                                                | Type MIME                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `.aac`         | fichier audio AAC                                                                               | `audio/aac`                                                                      |
| `.abw`         | document [AbiWord](https://fr.wikipedia.org/wiki/AbiWord)                                       | `application/x-abiword`                                                          |
| `.arc`         | archive (contenant plusieurs fichiers)                                                          | `application/octet-stream`                                                       |
| `.avi`         | AVI : Audio Video Interleave                                                                    | `video/x-msvideo`                                                                |
| `.azw`         | format pour eBook Amazon Kindle                                                                 | `application/vnd.amazon.ebook`                                                   |
| `.bin`         | n'importe quelle donnée binaire                                                                 | `application/octet-stream`                                                       |
| `.bmp`         | Images bitmap Windows OS/2                                                                      | `image/bmp`                                                                      |
| `.bz`          | archive BZip                                                                                    | `application/x-bzip`                                                             |
| `.bz2`         | archive BZip2                                                                                   | `application/x-bzip2`                                                            |
| `.csh`         | script C-Shell                                                                                  | `application/x-csh`                                                              |
| `.css`         | fichier Cascading Style Sheets (CSS)                                                            | `text/css`                                                                       |
| `.csv`         | fichier Comma-separated values (CSV)                                                            | `text/csv`                                                                       |
| `.doc`         | Microsoft Word                                                                                  | `application/msword`                                                             |
| `.docx`        | Microsoft Word (OpenXML)                                                                        | `application/vnd.openxmlformats-officedocument.wordprocessingml.document`        |
| `.eot`         | police MS Embedded OpenType                                                                     | `application/vnd.ms-fontobject`                                                  |
| `.epub`        | fichier Electronic publication (EPUB)                                                           | `application/epub+zip`                                                           |
| `.gif`         | fichier Graphics Interchange Format (GIF)                                                       | `image/gif`                                                                      |
| `.htm .html`   | fichier HyperText Markup Language (HTML)                                                        | `text/html`                                                                      |
| `.ico`         | icône                                                                                           | `image/x-icon`                                                                   |
| `.ics`         | élément iCalendar                                                                               | `text/calendar`                                                                  |
| `.jar`         | archive Java (JAR)                                                                              | `application/java-archive`                                                       |
| `.jpeg` `.jpg` | image JPEG                                                                                      | `image/jpeg`                                                                     |
| `.js`          | JavaScript (ECMAScript)                                                                         | `application/javascript`                                                         |
| `.json`        | donnée au format JSON                                                                           | `application/json`                                                               |
| `.mid` `.midi` | fichier audio Musical Instrument Digital Interface (MIDI)                                       | `audio/midi`                                                                     |
| `.mpeg`        | vidéo MPEG                                                                                      | `video/mpeg`                                                                     |
| `.mpkg`        | paquet Apple Installer                                                                          | `application/vnd.apple.installer+xml`                                            |
| `.odp`         | présentation OpenDocument                                                                       | `application/vnd.oasis.opendocument.presentation`                                |
| `.ods`         | feuille de calcul OpenDocument                                                                  | `application/vnd.oasis.opendocument.spreadsheet`                                 |
| `.odt`         | document texte OpenDocument                                                                     | `application/vnd.oasis.opendocument.text`                                        |
| `.oga`         | fichier audio OGG                                                                               | `audio/ogg`                                                                      |
| `.ogv`         | fichier vidéo OGG                                                                               | `video/ogg`                                                                      |
| `.ogx`         | OGG                                                                                             | `application/ogg`                                                                |
| `.otf`         | police OpenType                                                                                 | `font/otf`                                                                       |
| `.png`         | fichier Portable Network Graphics                                                               | `image/png`                                                                      |
| `.pdf`         | Adobe Portable Document Format (PDF)                                                            | `application/pdf`                                                                |
| `.ppt`         | présentation Microsoft PowerPoint                                                               | `application/vnd.ms-powerpoint`                                                  |
| `.pptx`        | présentation Microsoft PowerPoint (OpenXML)                                                     | `application/vnd.openxmlformats-officedocument.presentationml.presentation`      |
| `.rar`         | archive RAR                                                                                     | `application/x-rar-compressed`                                                   |
| `.rtf`         | Rich Text Format (RTF)                                                                          | `application/rtf`                                                                |
| `.sh`          | script shell                                                                                    | `application/x-sh`                                                               |
| `.svg`         | fichier Scalable Vector Graphics (SVG)                                                          | `image/svg+xml`                                                                  |
| `.swf`         | fichier [Small web format](https://fr.wikipedia.org/wiki/Small_Web_Format) (SWF) ou Adobe Flash | `application/x-shockwave-flash`                                                  |
| `.tar`         | fichier d'archive Tape Archive (TAR)                                                            | `application/x-tar`                                                              |
| `.tif .tiff`   | image au format Tagged Image File Format (TIFF)                                                 | `image/tiff`                                                                     |
| `.ts`          | fichier Typescript                                                                              | `application/typescript`                                                         |
| `.ttf`         | police TrueType                                                                                 | `font/ttf`                                                                       |
| `.vsd`         | Microsoft Visio                                                                                 | `application/vnd.visio`                                                          |
| `.wav`         | Waveform Audio Format                                                                           | `audio/x-wav`                                                                    |
| `.weba`        | fichier audio WEBM                                                                              | `audio/webm`                                                                     |
| `.webm`        | fichier vidéo WEBM                                                                              | `video/webm`                                                                     |
| `.webp`        | image WEBP                                                                                      | `image/webp`                                                                     |
| `.woff`        | police Web Open Font Format (WOFF)                                                              | `font/woff`                                                                      |
| `.woff2`       | police Web Open Font Format (WOFF)                                                              | `font/woff2`                                                                     |
| `.xhtml`       | XHTML                                                                                           | `application/xhtml+xml`                                                          |
| `.xls`         | Microsoft Excel                                                                                 | `application/vnd.ms-excel`                                                       |
| `.xlsx`        | Microsoft Excel (OpenXML)                                                                       | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`              |
| `.xml`         | `XML`                                                                                           | `application/xml`                                                                |
| `.xul`         | XUL                                                                                             | `application/vnd.mozilla.xul+xml`                                                |
| `.zip`         | archive ZIP                                                                                     | `application/zip`                                                                |
| `.3gp`         | conteneur audio/vidéo [3GPP](https://fr.wikipedia.org/wiki/3GP)                                 | `video/3gpp` `audio/3gpp` dans le cas où le conteneur ne comprend pas de vidéo   |
| `.3g2`         | conteneur audio/vidéo [3GPP2](https://fr.wikipedia.org/wiki/3GP)                                | `video/3gpp2` `audio/3gpp2` dans le cas où le conteneur ne comprend pas de vidéo |
| `.7z`          | archive [7-zip](https://fr.wikipedia.org/wiki/7-Zip)                                            | `application/x-7z-compressed`                                                    |
