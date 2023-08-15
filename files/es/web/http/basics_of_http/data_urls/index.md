---
title: Datos URIs
slug: Web/HTTP/Basics_of_HTTP/Data_URLs
---

{{HTTPSidebar}}

**Datos URIs**, URLs prefijados con los datos`:` esquema, permiten a los creadores de contenido incorporar pequeños archivos en linea en los documentos.

## Sintaxis

Los datos URIs se componen de cuatro partes a: un prefijo (`data:`), un tipo MIME que indica el tipo de datos, un token `base64` opcional no textual, y los datos en si:

```
data:[<mediatype>][;base64],<data>
```

El `mediatype` es una cadena de tipo MIME, por ejemplo `'image/jpeg'` para un archivo de imagen JPEG. si se omite, será por defecto `text/plain;charset=US-ASCII`

Si el dato es textual, solo tiene que insertar el texto (utilizando las entidades o escapes adecuados en función del tipo de documento). Por otra parte, puedes especificar base-64 para insertar datos binarios codificados en base-64.

Algunos ejemplos:

- `data:,Hello%2C%20World!`
  - : Datos simples text/plain
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D`
  - : versión codificada en base64-encoded de las anteriores
- `data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E`
  - : Un documento HTML con `<h1>Hello, World!</h1>`
- `data:text/html,<script>alert('hi');</script>`
  - : Un documento HTML que ejecuta una alerta Javascript. Tenga en cuenta que se requiere la etiqueta script de cierre.

## Codificación de datos en formato base64

Esto se puede hacer fácilmente desde la línea de comandos usando `uuencode`, una utilidad disponible en sistemas Linux y Mac OS X:

```bash
uuencode -m infile remotename
```

El parámetro `infile` es el nombre para el archivo que desees decodificar en formato base64, y `remotename` es el nombre remoto para el archivo, que no se utilizará realmente en los datos de las URLs.

La salida será similar a esto:

```
xbegin-base64 664 test
YSBzbGlnaHRseSBsb25nZXIgdGVzdCBmb3IgdGV2ZXIK
====
```

El URI de datos utilizará los datos codificados después de la cabezera inicial.

### En la pagina Web, usando JavaScript

Las Web tiene APIs primitivas para codificar o decodificar en base64: [codificación y decodificación Base64](/es/docs/Web/JavaScript/Base64_encoding_and_decoding).

## Problemas comunes

Esta sección describe los problemas que comunmente ocurren cuando se crean o se usan los datos URIs.

- Sintaxis
  - : El formato de los datos URIs es muy simple, pero es facil olvidarse de poner una coma antes del segmento de la "data", o para codificar incorrectamente los datos en formato base64.
- Formateando en HTML
  - : Un dato URI provee un archivo dentro de un archivo, que potenciamente puede ser muy amplia con relación con el ancho del documento de cierre. Como una URL, los datos se les puede dar formato con espacios en blanco (avance de línea, pestaña, o espacios), pero hay cuestiones prácticas que se plantean [cuando se usa codificación base64](http://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12).
- Limitaciones de longitud
  - : Aunque Firefox soporta con URIs de datos de longitud esencialmente ilimitada, los navegadores no están obligados a apoyar cualquier longitud máxima de datos en particular. Por ejemplo, el navegador Opera 11 limita las URIs de datos cerca de los 65000 caracteres.
- Falta de control de errores
  - : Los parametros no válidos en los medios de comunicación, o errores ortográficos cuando se especifiquen `'base64'`, se ignoran, pero no se proporciona ningún error.
- No hay soporte para consulta de cadenas, etc.

  - : Las partes de datos de URIs de datos son opácos, por lo que un intento de utilizar una cadena de consulta (parametros específicos de página, con la sintaxis `<url>?parameter-data`) con un URIs de datos que se acaba de incluir la cadena de consulta en los datos de la URI que representa. Por ejemplo:

    ```
    data:text/html,lots of text...<p><a name%3D"bottom">bottom</a>?arg=val
    ```

    Esto representa un recurso HTML cuyo contenido es:

    ```
    lots of text...<p><a name="bottom">bottom</a>?arg=val
    ```

## Especificaciones

| Especificación  | Título                 |
| --------------- | ---------------------- |
| {{RFC("2397")}} | The "data" URL scheme" |

## Compatibilidad del navegador

{{compat}}

## Ver también

- [Base64 codificación y decodificación](/es/docs/Web/JavaScript/Base64_encoding_and_decoding)
- {{domxref("WindowBase64.atob","atob()")}}
- {{domxref("WindowBase64.btoa","btoa()")}}
- [CSS `url()`](/es/docs/Web/CSS/uri)
- [URI](/es/docs/URI)
