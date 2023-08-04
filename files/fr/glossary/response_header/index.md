---
title: En-tête de réponse
slug: Glossary/Response_header
---

Un **en-tête de réponse** est un {{glossary("header","en-tête HTTP")}} qui peut être utilisé dans une réponse HTTP et qui ne concerne pas le contenu du message. Les en-têtes de réponse comme {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} ou {{HTTPHeader("Server")}} sont utilisés pour donner un contexte plus détaillé de la réponse.

Tous les en-têtes apparaissant dans une réponse ne sont pas des _en-têtes de réponse_. Par exemple, l'en-tête {{HTTPHeader("Content-Length")}} est un {{glossary("Entity header","en-tête d'entité")}} faisant référence à la taille du coprs du message de requête. Cependant, ces requêtes d'entité sont généralement appelées en-têtes de réponses dans un tel contexte.

Le code suivant montre quelques en-têtes de réponse après une requête {{HTTPMethod("GET")}}. Notez qu'à strictement parler, les en-têtes {{HTTPHeader("Content-Encoding")}} et {{HTTPHeader("Content-Type")}} sont des {{glossary("Entity header","en-têtes d'entité")}} :

```
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

## Voir aussi

### Savoir technique

- [Liste de tous les en-têtes HTTP](/fr/docs/HTTP/Headers)
