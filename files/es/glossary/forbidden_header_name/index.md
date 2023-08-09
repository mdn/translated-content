---
title: Nombre de encabezado prohibido
slug: Glossary/Forbidden_header_name
---

Un nombre de encabezado prohibido es un nombre de [encabezado HTTP](/es/docs/Web/HTTP/Headers) que no se puede modificar mediante programación; específicamente, un nombre de encabezado de HTTP **solicitud** HTTP.

Contrasta con el {{Glossary("Forbidden response header name")}}.

La modificación de estas cabeceras está prohibida, por lo que el agente de usuario mantiene el control total sobre ellos. Los nombres que comienzan con `Sec-` están reservados para crear nuevos encabezados seguros a partir de las {{glossary("API","APIs")}} que usan [Fetch](/es/docs/Web/API/Fetch_API) que otorgan a los desarrolladores control sobre las cabeceras, como {{domxref("XMLHttpRequest")}}.

Los nombres de encabezado prohibidos comienzan con `Proxy-` or `Sec-`, o se componen de uno de estos:

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Host`
- `Keep-Alive`
- `Origin`
- `Proxy-`
- `Sec-`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

> **Nota:** El encabezado `User-Agent` ya no está prohibido, [según la especificación](https://fetch.spec.whatwg.org/#terminology-headers) — vea la lista de nombres prohibidos de encabezado (esta fue implementada en Firefox 43), por lo que ahora puede establecerse en un objecto Fetch {{domxref("Headers")}}, a través de XHR {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}, etc.
