---
title: En-tête de requête
slug: Glossary/Request_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **en-tête de requête** est un {{Glossary("HTTP header", "en-tête HTTP")}} qui peut être utilisé dans une requête HTTP pour fournir des informations sur le contexte de la requête, afin que le serveur puisse adapter la réponse. Par exemple, les en-têtes {{HTTPHeader("Accept", "Accept-*")}} indiquent les formats autorisés et préférés pour la réponse. D'autres en-têtes peuvent servir à fournir des informations d'authentification (par exemple {{HTTPHeader("Authorization")}}), à contrôler la mise en cache, ou à transmettre des informations sur l'agent utilisateur·ice ou le référent, etc.

Tous les en-têtes pouvant apparaître dans une requête ne sont pas qualifiés d'_en-têtes de requête_ par la spécification. Par exemple, l'en-tête {{HTTPHeader("Content-Type")}} est qualifié d'{{Glossary("representation header", "en-tête de représentation")}}.

De plus, {{Glossary("CORS")}} définit un sous-ensemble d'en-têtes de requête comme {{Glossary('CORS-safelisted request header', 'en-têtes simples')}}, des en-têtes de requête toujours considérés comme autorisés et qui ne sont pas explicitement listés dans les réponses aux requêtes {{Glossary("preflight request", "préliminaires")}}.

Le message HTTP ci-dessous montre quelques en-têtes de requête après une requête {{HTTPMethod("GET")}}&nbsp;:

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

## Voir aussi

- [Liste de tous les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- [RFC 9110, section 6.3&nbsp;: Champs d'en-tête <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#header.fields)
