---
title: Tipos MIME
slug: Web/HTTP/Guides/MIME_types
original_slug: Web/HTTP/MIME_types
---

El **tipo Extensiones multipropósito de Correo de Internet (MIME)** es una forma estandarizada de indicar la naturaleza y el formato de un documento, archivo o conjunto de datos. Está definido y estandarizado en [IETF RFC 6838](https://tools.ietf.org/html/rfc6838). La [Autoridad de Números Asignados de Internet (IANA)](https://www.iana.org/) es el organismo oficial responsable de realizar un seguimiento de todos los tipos MIME oficiales, y puede encontrar la lista más actualizada y completa en la página de [tipos de medios (Media Types)](https://www.iana.org/assignments/media-types/media-types.xhtml).

Los navegadores a menudo usan el tipo MIME (y no la extensión de archivo) para determinar cómo procesará un documento; por lo tanto, es importante que los servidores estén configurados correctamente para adjuntar el tipo MIME correcto al encabezado del objeto de respuesta.

## Sintaxis

### Estructura general

```
tipo/subtipo
```

La estructura de un tipo MIME es muy simple; consiste en un tipo y un subtipo, dos cadenas, separadas por un `'/'`. No se permite espacio. El _tipo_ representa la categoría y puede ser de tipo _discreto_ o _multiparte_. El _subtipo_ es específico para cada tipo.

Un tipo MIME no distingue entre mayúsculas y minúsculas, pero tradicionalmente se escribe todo en minúsculas.

### Tipos discretos

```
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/octet-stream
…
```

Los tipos _discretos_ indican la categoría del documento, puede ser uno de los siguientes:

| Tipo          | Descripción                                                                                                                                                | Ejemplo de subtipos típicos                                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | Representa cualquier documento que contenga texto y es teóricamente legible por humanos                                                                    | `text/plain`, `text/html`, `text/css, text/javascript`                                                                                          |
| `image`       | Representa cualquier tipo de imagen. Los videos no están incluidos, aunque las imágenes animadas (como el gif animado) se describen con un tipo de imagen. | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`                                                                               |
| `audio`       | Representa cualquier tipo de archivos de audio                                                                                                             | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav`                                                                                    |
| `video`       | Representa cualquier tipo de archivos de video                                                                                                             | `video/webm`, `video/ogg`                                                                                                                       |
| `application` | Representa cualquier tipo de datos binarios.                                                                                                               | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

Para documentos de texto sin subtipo específico, se debe usar `text/plain`. De forma similar, para los documentos binarios sin subtipo específico o conocido, se debe usar `application/octet-stream`.

### Tipos multiparte

```
multipart/form-data
multipart/byteranges
```

Los tipos de _partes múltiples_ indican una categoría de documento que está rota en distintas partes, a menudo con diferentes tipos de MIME. Es una forma de representar un documento compuesto. Con la excepción de `multipart/form-data`, que se utilizan en relación con [formularios HTML](/es/docs/Learn_web_development/Extensions/Forms) y el método {{HTTPMethod("POST")}}, y `multipart/byteranges`, que se utilizan junto con el mensaje de estado de `Contenido Parcial` {{HTTPStatus("206")}} para enviar solo un subconjunto de un documento completo, HTTP no maneja documentos multiparte de una manera específica: el mensaje simplemente se transmite al navegador (que probablemente propondrá una ventana Guardar como, sin saber cómo mostrar el documento en línea.)

## Tipos MIME importantes para desarrolladores Web

### `application/octet-stream`

Este es el valor predeterminado para un archivo binario. Como realmente significa un _archivo binario desconocido_, los navegadores generalmente no lo ejecutan automáticamente, o incluso preguntan si debería ejecutarse. Lo tratan como si el encabezado {{HTTPHeader("Content-Disposition")}} se configurara con el valor `attachment` y proponen un archivo 'Guardar como'.

### `text/plain`

Este es el valor predeterminado para los archivos de texto. Incluso si realmente significa un archivo textual desconocido, los navegadores asumen que pueden mostrarlo.

> [!NOTE]
> Tenga en cuenta que `text/plain` no significa _cualquier tipo de datos textuales_. Si esperan un tipo específico de datos textuales, probablemente no lo considerarán una coincidencia. Específicamente, si descargan un archivo de texto sin formato `text/plain` de un elemento {{HTMLElement("link")}} que declara archivos CSS, no lo reconocerán como un archivo CSS válido si se presenta con `text/plain`. Se debe usar el tipo MIME CSS `text/css`.

### `text/css`

Todos los archivos CSS que deban interpretarse como tales en una página web **deben** ser de los archivos de `text/css`. A menudo, los servidores no reconocen los archivos con el sufijo `.css` como archivos CSS y los envían con tipo MIME `text/plain` o `application/octet-stream`: en estos casos, la mayoría de los navegadores no los reconocerán como archivos CSS y serán ignorado silenciosamente. Se debe prestar especial atención en servir los archivos CSS con el tipo correcto.

### `text/html`

Todo el contenido HTML debe ser servido con este tipo. Los tipos MIME alternativos para XHTML, como `application/xml+html`, son en su mayoría inútiles hoy en día (HTML5 unificó estos formatos).

### Tipos de imágenes

Solo un puñado de tipos de imágenes son ampliamente reconocidos y se consideran seguros para la Web, listos para usar en una página Web:

| Tipo MIME       | Tipo de imagen                                             |
| --------------- | ---------------------------------------------------------- |
| `image/gif`     | Imágenes GIF (compresión sin pérdida, reemplazada por PNG) |
| `image/jpeg`    | Imágenes JPEG                                              |
| `image/png`     | Imágenes PNG                                               |
| `image/svg+xml` | Imágenes SVG (imágenes vectoriales)                        |

Existe una discusión para agregar WebP (`image/webp`) a esta lista, pero como cada tipo de imagen nuevo aumentará el tamaño de una base de código, esto puede presentar nuevos problemas de seguridad, por lo que los proveedores de navegadores son cautelosos al aceptarlo.

Se pueden encontrar otros tipos de imágenes en documentos Web. Por ejemplo, muchos navegadores admiten tipos de imágenes de iconos para favicones o similares. En particular, las imágenes ICO son compatibles en este contexto con el tipo MIME `image/x-icon`.

### Tipos de audio y video

Al igual que las imágenes, HTML no define un conjunto de tipos soportados para usar con los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}}, por lo que solo un grupo relativamente pequeño de ellos puede ser utilizado en la web. Los [formatos de medios compatibles con los elementos de audio y video HTML](/es/docs/Web/Media/Formats) explican tanto los códecs como los formatos de contenedor que se pueden usar.

El tipo MIME de dichos archivos representa principalmente los formatos de contenedor y los más comunes en un contexto web son:

| Tipo MIME                                               | Tipo de audio o video                                                                                                                                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | Un archivo de audio en formato de contenedor WAVE. El códec de audio PCM (códec WAVE "1") a menudo es compatible, pero otros códecs tienen soporte más limitado (si lo hay).                     |
| `audio/webm`                                            | Un archivo de audio en formato de contenedor WebM. Vorbis y Opus son los códecs de audio más comunes.                                                                                            |
| `video/webm`                                            | Un archivo de video, posiblemente con audio, en el formato de contenedor de WebM. VP8 y VP9 son los códecs de video más comunes utilizados en él; Vorbis y Opus los códecs de audio más comunes. |
| `audio/ogg`                                             | Un archivo de audio en el formato de contenedor OGG. Vorbis es el códec de audio más común utilizado en dicho contenedor.                                                                        |
| `video/ogg`                                             | Un archivo de video, posiblemente con audio, en el formato de contenedor OGG. Theora es el códec de video habitual utilizado en él; Vorbis es el códec de audio habitual.                        |
| `application/ogg`                                       | Un archivo de audio o video usando el formato de contenedor OGG. Theora es el códec de video habitual utilizado en él; Vorbis es el códec de audio más común.                                    |

### `multipart/form-data`

El tipo de datos `multipart/form-data` se puede usar al enviar el contenido de un [formulario HTML](/es/docs/Learn_web_development/Extensions/Forms) completo desde el navegador al servidor. Como formato de documento multiparte, consta de diferentes partes, delimitadas por un límite (una cadena que comienza con un doble guión `'--'`). Cada parte es una entidad en sí misma, con sus propios encabezados HTTP, {{HTTPHeader("Content-Disposition")}} y {{HTTPHeader("Content-Type")}} para los campos de carga de archivos, y los más comunes ({{HTTPHeader("Content-Length")}} es ignorado ya que la línea límite se usa como delimitador).

```
Content-Type: multipart/form-data; boundary=unaCadenaDelimitadora
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
```

El siguiente formulario:

```html
<form action="http://localhost:8000/" method="post" enctype="multipart/form-data">
  <input type="text" name="miCampoDeTexto">
  <input type="checkbox" name="miCheckBox">Checado</input>
  <input type="file" name="miArchivo">
  <button>Enviar el archivo</button>
</form>
```

enviará este mensaje:

```
POST / HTTP/1.1
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
```

### `multipart/byteranges`

El tipo MIME `multipart/byteranges` se usa en el contexto del envío de respuestas parciales al navegador. Cuando se envía el código de estado de `Contenido Parcial` {{HTTPStatus("206")}}, este tipo MIME se usa para indicar que el documento está compuesto de varias partes, una para cada rango solicitado. Al igual que otros tipos de varias partes, {{HTTPHeader("Content-Type")}} usa la directiva `boundary` para definir la cadena delimitadora. Cada una de las diferentes partes tiene un encabezado {{HTTPHeader("Content-Type")}} con el tipo real del documento y un {{HTTPHeader("Content-Range")}} con el rango que representan.

```
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## Importancia de establecer el tipo MIME correcto

La mayoría de los servidores web envían recursos de tipo desconocido utilizando el tipo MIME predeterminado `application/octet-stream`. Por razones de seguridad, la mayoría de los navegadores no permiten establecer una acción predeterminada personalizada para dichos recursos, lo que obliga al usuario a almacenarlo en el disco para usarlo. Algunas configuraciones de servidor incorrectas que se ven con frecuencia ocurren con los siguientes tipos de archivos:

- Archivos con codificación RAR. En este caso, lo ideal sería establecer el tipo verdadero de los archivos codificados; esto a menudo no es posible (ya que puede no ser conocido por el servidor y estos archivos pueden contener varios recursos de diferentes tipos). En este caso, al configurar el servidor para que envíe el tipo MIME `application/x-rar-compressed`, los usuarios no habrán definido una acción predeterminada útil para ellos.
- Archivos de audio y video. Solo los recursos con el tipo MIME correcto serán reconocidos y reproducidos en elementos {{ HTMLElement("video") }} o {{ HTMLElement("audio") }}. Asegúrese de [usar el tipo correcto para audio y video](/es/docs/Web/Media/Formats).
- Tipos de archivos propietarios. Preste especial atención al servir un tipo de archivo propietario. Evite el uso de `application/octet-stream` ya que no será posible un manejo especial: la mayoría de los navegadores no permiten definir un comportamiento predeterminado (como "Abrir en Word") para este tipo genérico MIME.

## Olfateo MIME (sniffing)

En ausencia de un tipo MIME, o en algunos otros casos en los que un cliente cree que están configurados incorrectamente, los navegadores pueden realizar el rastreo MIME, que es adivinar el tipo MIME correcto mirando el recurso. Cada navegador realiza esto de manera diferente y bajo diferentes circunstancias. Hay algunas preocupaciones de seguridad con esta práctica, ya que algunos tipos MIME representan el contenido ejecutable y otros no. Los servidores pueden bloquear el rastreo de MIME enviando el {{HTTPHeader("X-Content-Type-Options")}} a lo largo de {{HTTPHeader("Content-Type")}}.

## Otros métodos de transporte de tipo de documento

Los tipos MIME no son la única forma de transmitir la información del tipo de documento:

- Los sufijos de nombre a veces se usan, especialmente en los sistemas de Microsoft Windows. No todos los sistemas operativos consideran significativos estos sufijos (especialmente Linux y Mac OS), y al igual que un tipo MIME externo, no hay garantía de que sean correctos.
- Números mágicos. La sintaxis de los diferentes tipos de archivos permite la inferencia del tipo de archivo al observar la estructura. P.ej. cada archivo GIF comienza con el valor hexadecimal 47 49 46 38 39 [GIF89] o archivos PNG con 89 50 4E 47 [.PNG]. No todos los tipos de archivos tienen números mágicos, por lo que este tampoco es un sistema 100% confiable.

## Ver también

- [Configurar correctamente los tipos MIME del servidor](/es/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
- [Formatos de medios compatibles con los elementos de audio y video HTML](/es/docs/Web/Media/Formats)
- <https://www.iana.org/assignments/media-types/application/json>
