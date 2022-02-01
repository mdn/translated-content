---
title: Encabezado de solicitud incluido en la lista segura de CORS
slug: Glossary/CORS-safelisted_request_header
tags:
  - CORS
  - Fetch
translation_of: Glossary/CORS-safelisted_request_header
---

Un [encabezado de solicitud incluido en la lista segura de CORS](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)
es uno de los siguientes [encabezados HTTP](/en-US/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}},
- {{HTTPHeader("Accept-Language")}},
- {{HTTPHeader("Content-Language")}},
- {{HTTPHeader("Content-Type")}}.

Cuando contenga solo estos encabezados (y valores que cumplan con los requisitos adicionales establecidos a continuación),
una solicitud no necesita enviar una {{glossary("preflight request", "solicitud de verificación previa")}} en el contexto de [CORS](/en-US/docs/Glossary/CORS).

Puede incluir en la lista segura más encabezados usando el encabezado {{HTTPHeader("Access-Control-Allow-Headers")}}
y también enumerar los encabezados anteriores allí para eludir las siguientes restricciones adicionales:

#### Restricciones adicionales

Los encabezados incluidos en la lista segura de CORS también deben cumplir los siguientes
requisitos para ser un encabezado de solicitud valido:

- Para {{HTTPHeader("Accept-Language")}} y {{HTTPHeader("Content-Language")}}:
  solo puede tener valores que constan de `0-9`, `A-Z`, `a-z`, espacio o `*,-.;=`.
- Para {{HTTPHeader("Accept")}} y {{HTTPHeader("Content-Type")}}:
  no puede contener un encabezado byte `_CORS-unsafe`: `0x00-0x1F` (excepto `0x09 (HT)`, que está permitido), `"():<>?@[\]{}`, y `0x7F (DEL)`.
- Para {{HTTPHeader("Content-Type")}}: debe tener un tipo MIME de su valor analizado (ignorando los parámetros) de `application/x-www-form-urlencoded`, `multipart/form-data`, o `text/plain`.
- Para cualquier encabezado: la longitud del valor no puede ser superior a 128.

## Véase también

- {{Glossary("Forbidden header name", "Nombre de encabezado prohibido")}}
