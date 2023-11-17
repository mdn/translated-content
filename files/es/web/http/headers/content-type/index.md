---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
---

{{HTTPSidebar}}

**`Content-Type`** es la propiedad de cabecera (header) usada para indicar el {{Glossary("MIME type","media type")}} del recurso.

`Content-Type` dice al cliente que tipo de contenido será retornado. Los navegadores rastrearán `MIME` en algunos casos y no seguirán necesariamente el valor de este encabezado; para evitar este comportamiento, el encabezado {{HTTPHeader("X-Content-Type-Options")}} se puede establecer en `nosniff`.

En solicitudes (tales como {{HTTPMethod("POST")}} o {{HTTPMethod("PUT")}}), el cliente indica al servidor que tipo de dato es enviado actualmente.

| Header type                                                               | {{Glossary("Entity header")}} |
| ------------------------------------------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}}                                     | no                            |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | si                            |

## Sintaxis

```
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## Directivas

- `media-type`
  - : El [MIME type](/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types) de el recurso o el dato.
- charset
  - : La codificación de caracteres.
- boundary
  - : Para entidades de tipo _multipart_ la directiva `boundary` es obligatoria. Ella consiste en una secuencia de 1 a 70 caracteres de un conjunto conocido por su robustez en pasarelas de correo electrónico, y no pueden terminar con espacios en blanco. Es usada para encapsular los limites de los mensajes de múltiples partes.

## Ejemplos

### `Content-Type` in HTML forms

En una solicitud {{HTTPMethod("POST")}} , que resulta del envio de un formulario html, el `Content-Type` de la solicitud es especificado como un atributo `enctype` del elemento {{HTMLElement("form")}} .

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

La solicitud se visualiza algo como esto (si tienes poco interes en los headers omite esto)

```
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

---------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
---------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
---------------------------974767299852498929531610575
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Más sobre

- {{HTTPHeader("Accept")}} and {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
