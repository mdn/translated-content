---
title: Cabecera de respuesta
slug: Glossary/Response_header
translation_of: Glossary/Response_header
---
Una **cabecera de respuesta** (en inglés _response header_) es una {{Glossary("HTTP header")}} que puede ser usada en una respuesta HTTP y que no tiene que ver con el contenido del mensaje. Las cabeceras de respuesta, como {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} o {{HTTPHeader("Server")}} son usadas para dar un contexto más detallado de la respuesta.

No todas las cabeceras que aparecen en una respuesta son categorizada como *cabeceras de respuesta* por la especificación. Por ejemplo, la cabecera {{HTTPHeader("Content-Type")}} es una {{glossary("representation header")}} indicando el tipo original de datos en el cuerpo del mensaje de respuesta (previo a que la codificación en la cabecera de representación {{HTTPHeader("Content-Encoding")}} sea aplicada). Sin embargo, en un mensaje de respuesta, "conversacionalmente" todas las cabeceras son usualmente llamadas como cabeceras de respuesta.

A continuación se muestra algunas cabeceras de respuesta y representación luego de una petición {{HTTPMethod("GET")}}.

```plain
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## Véase también

- [Listado de cabeceras HTTP](/es/docs/Web/HTTP/Headers)
- [Glosario](/es/docs/Glossary)

  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP header")}}
  - {{Glossary("Fetch metadata response header")}}
  - {{Glossary("Request header")}}
