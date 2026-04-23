---
title: En-tête de réponse
slug: Glossary/Response_header
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

Un **en-tête de réponse** est un {{Glossary("HTTP header", "en-tête HTTP")}} qui peut être utilisé dans une réponse HTTP et qui ne concerne pas le contenu du message. Les en-têtes de réponse, comme {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} ou {{HTTPHeader("Server")}}, servent à fournir un contexte plus détaillé sur la réponse.

Tous les en-têtes présents dans une réponse ne sont pas catégorisés comme _en-têtes de réponse_ par la spécification. Par exemple, l'en-tête {{HTTPHeader("Content-Type")}} est un {{Glossary("representation header", "en-tête de représentation")}} indiquant le type original des données dans le corps du message de réponse (avant l'encodage appliqué par l'en-tête de représentation {{HTTPHeader("Content-Encoding")}}). Cependant, dans l'usage courant, tous les en-têtes d'une réponse sont généralement appelés en-têtes de réponse.

L'exemple suivant montre quelques en-têtes de réponse et de représentation après une requête {{HTTPMethod("GET")}}&nbsp;:

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
ETag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: my-key=my value; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## Voir aussi

- [Liste de tous les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Representation header", "En-tête de représentation")}}
  - {{Glossary("HTTP header", "En-tête HTTP")}}
  - {{Glossary("Request header", "En-tête de requête")}}
