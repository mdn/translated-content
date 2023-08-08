---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
---

{{HTTPSidebar}}

En una respuesta HTTP regular, el encabezado **`Content-Disposition`** indica si el contenido se espera que se muestre en línea en el navegador, esto es, como una o como parte de una página web, o como un archivo adjunto, que se puede descargar y guardar localmente.

En un cuerpo `multipart/form-data`, el encabezado general **`Content-Disposition`** puede ser utilizado en la subparte de un cuerpo multipartes para dar información acerca del campo al que aplica. La subparte es delimitada por el _boundary_ (límite) definido en el encabezado {{HTTPHeader("Content-Type")}}. Cuando se utiliza en el propio cuerpo, `Content-Disposition` no tiene efecto.

El encabezado `Content-Disposition` está definido en el contexto de mensajes MIME para correos electrónicos, pero sólo un subconjuto de los parámetros posibles aplican a formularios HTTP y peticiones {{HTTPMethod("POST")}}. Sólo el valor `form-data`, como las directivas opcionales `name` and `filename`, pueden ser utilizadas en el contexto HTTP.

| Tipo de encabezado                    | {{Glossary("Response header")}} (para el cuerpo principal) {{Glossary("General header")}} (para una subparte de un cuerpo multipartes) |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                                                                                                                     |

## Sintaxis

### Como encabezado de respuesta para cuerpo principal

El primer parámetro en el contexto HTTP o es `inline` (valor predeterminado, indicando que puede ser mostrado dentro de una página web, o como la página web) o `attachment` (indicando que será descargado; la mayoría de los navegadores mostrando un diálogo 'Guardar como', prellenado con el valor del parámetro `filename`, en caso de estar presente).

```
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

### Como encabezado para un cuerpo multipartes

El primer parámetro en el contexto HTTP siempre es `form-data`; parámetros adicionales son insensibles a mayúsculas y tienen argumentos que usan sintaxis de textos entre comillas después del signo de `'='`. Múltiples parámetros se separan por punto y coma (`';'`).

```
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Directivas

- `name`
  - : Es seguida de un texto que contiene el nombre del campo de HTML en el formulario a la que el contenido de la subparte refiere. Cuando se usan múltiples archivos en el mismo campo (por ejemplo, el atributo [`multiple`](/es/docs/Web/HTML/Element/input#multiple) de un elemento `{{HTMLElement("input","&lt;input type=file&gt;")}}`), puede haber varias subpartes con el mismo nombre.
    Un `name` con valor de `'_charset_'` indica que la parte no es un campo HTML, sino el conjunto de caracteres predeterminado para partes sin información explícita sobre su conjunto de caracteres.
- `filename`
  - : Es seguida de un texto que contiene el nombre original del archivo transmitido. Siempre es opcional y no debe ser utilizado a ciegas por la aplicación: información sobre la ruta debe ser despojada, y se debe realizar una conversión a las reglas del sistema de archivos del servidor. Este parámetro provee mayormente información indicativa. Cuando se usa en combinación con `Content-Disposition: attachment`, es utilizado como el nombre de archivo predeterminado en caso de que se presente al usuario un diálogo de 'Guardar como'.
- `filename*`
  - : Los parámetros `filename` y `filename*` difieren únicamente en que `filename*` utiliza encodeado definido en [RFC 5987](https://tools.ietf.org/html/rfc5987). Cuando ambos están presentes en un valor de campo de encabezado simple, `filename*` es preferido sobre `filename` cuando ambos están presentes y entendidos.

## Ejemplos

Una respuesta generando el diálogo 'Guardar como':

```
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="genial.html"
Content-Length: 22

<HTML>Guárdame!</HTML>
```

Este archivo simple de HTML será guardado como una descarga regular en lugar de mostrarse en el navegador. La mayoría de los navegadores propondrá guardarlo como `genial.html` ya que es el nombre (predeterminado).

Un ejemplo de un formulario HTML, publicado usando el formato `multipart/form-data` que hace uso del encabezado `Content-Disposition`:

```
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="campo1"

valor1
--boundary
Content-Disposition: form-data; name="campo2"; filename="ejemplo.txt"

valor2
--boundary--
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Notas de compatibilidad

- Firefox 5 maneja el encabezado de respuesta HTTP `Content-Disposition` más efectivamente si ambos parámetros `filename` y `filename*` están presentes; observa todos los nombres presentes, usando el parámetro `filename*` si uno está disponible, incluso si el parámetro `filename` está incluido antes. Previamente, el primer parámetro en encontrarse sería usado, de este modo se previene el uso de un nombre más apropiado. Mira [Error 588781 en Firefox](https://bugzil.la/588781).

## Ver también

- [Formularios HTML](/es/docs/Web/Guide/HTML/Forms)
- El {{HTTPHeader("Content-Type")}} definiendo el límite de un cuerpo multipartes.
- La interfaz {{domxref("FormData")}} usada para manipular datos de formulario para uso en la API {{domxref("XMLHttpRequest")}}.
