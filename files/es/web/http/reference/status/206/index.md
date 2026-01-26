---
title: 206 Partial Content
slug: Web/HTTP/Reference/Status/206
original_slug: Web/HTTP/Status/206
---

El codigo de respuesta con estado exitoso HTTP **`206 Partial Content`** indica que la solicitud se ha realizado con exito y el cuerpo contiene los rangos solicitados de la data, como esta descrito en la cabecera {{HTTPHeader("Range")}} de la solicitud.

Si solo hay un rango, el {{HTTPHeader("Content-Type")}} de toda la respuesta es asignada a un tipo de documento, y un {{HTTPHeader("Content-Range")}} es provisto.

Si muchos rangos son retornados, el {{HTTPHeader("Content-Type")}} es asignado a `multipart/byteranges` y cada fragmento cubre un rango, con {{HTTPHeader("Content-Range")}} y {{HTTPHeader("Content-Type")}} describiendolo .

## Status

```
206 Partial Content
```

## Ejemplos

Una respuesta conteniendo un solo rango:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes of partial image data ...
```

Una respuesta conteniendo varios rangos:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...the first range...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...the second range
--String_separator--
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
