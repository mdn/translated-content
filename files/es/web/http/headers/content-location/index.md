---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
---

{{HTTPSidebar}}

La cabecera **`Content-Location`** indica una ubicación alternativa para los datos devueltos. Su principal uso es indicar la URL de un recurso transmitido y que ha resultado de una [negociación de contenido](/es/docs/Web/HTTP/Content_negotiation).

Las cabeceras {{HTTPHeader("Location")}} y `Content-Location` son diferentes. `Location` indica la URL de una redirección, mientras que `Content-Location` indica la URL directa a ser utilizada para acceder al recurso, sin necesidad de realizar [negociación de contenido](/es/docs/Web/HTTP/Content_negotiation) en el futuro. Mientras que `Location` es una cabecera asociada con la respuesta, `Content-Location` está asociada con los datos devueltos. Esta distinción puede parecer abstracta sin ver algunos [ejemplos](#Examples).

| Header type                           | {{Glossary("Entity header")}} |
| ------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}} | no                            |

## Sintaxis

```
Content-Location: <url>
```

## Directivas

- \<url>
  - : Una URL [relativa](/es/docs/Learn/Common_questions/What_is_a_URL#Examples_of_relative_URLs) o [absoluta](/es/docs/Learn/Common_questions/What_is_a_URL#Examples_of_absolute_URLs) (a la URL de la petición).

## Ejemplos

### Solicitando datos de un servidor en distintos formatos

Suponga que la API de un sitio web puede devolver datos en los formatos {{glossary("JSON")}}, {{glossary("XML")}}, o [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Si la URL de un documento particular se encuentra en `https://example.com/documents/foo`, el sitio web podría retornar distintas URLs en la cabecera `Content-Location` dependiendo de la cabecera {{HTTPHeader("Accept")}} enviada en la petición:

| Request header                        | Response header                         |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Estas URLs son ejemplos — el sitio web podría servir los distintos tipos de ficheros con cualquier patrón de URL que desee, por ejemplo, por medio de un [parámetro en la query](/es/docs/Web/API/HTMLHyperlinkElementUtils/search): `/documents/foo?format=json`, `/documents/foo?format=xml`, y así sucesivamente.

De esa forma el cliente podrÍa recordar que la versión en formato JSON está disponible en esa URL particular, saltándose el paso de la negociación de contenido la próxima vez que solicite ese documento.

El servidor podría también considerar otras cabeceras de [negociación de contenido](/es/docs/Web/HTTP/Content_negotiation), tales como {{HTTPHeader("Accept-Language")}}.

### Apuntando a un nuevo documento (HTTP 201 Created)

Suponga que está creando una nueva entrada de un blog, a través de la API del sitio web:

```
PUT /new/post
Host: example.com
Content-Type: text/markdown

# Mi primera entrada de blog!

Hice esto a través de la API de `example.com`'. Espero que funcione.
```

El sitio devuelve un mensaje genérico de éxito confirmando que el post ha sido publicado. El servidor especifica donde se encuentra la nueva entrada utilizando `Content-Location`:

```
HTTP/1.1 201 Created
Content-Type: text/plain; charset=utf-8
Content-Location: /my-first-blog-post

✅ Success!
```

### Indicating the URL of a transaction's result

Digamos que tiene un formulario [`<form>`](/es/docs/Web/HTML/Element/form) para el envío de dinero a otro usuario de un sitio web.

```html
<form action="/enviar-pago" method="post">
  <p>
    <label
      >A quien desea enviar dinero?
      <input type="text" name="destinatario" />
    </label>
  </p>

  <p>
    <label
      >Cuanto dinero?
      <input type="number" name="cantidad" />
    </label>
  </p>

  <button type="submit">Enviar dinero</button>
</form>
```

Cuando el formulario es enviado, el sitio web genera un recibo o comprobante de la transacción. El servidor podría utilizar la cabecera `Content-Location` para indicar la URL de ese comprobante para un acceso futuro.

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /mis-recibos/38

<!doctype html>
(Lots of HTML…)

<p>Ha enviado $38.00 a UsuarioFicticio.</p>

(Lots more HTML…)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTTPHeader("Location")}}
