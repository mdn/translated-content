---
title: Nom d'en-tête interdit
slug: Glossary/Forbidden_header_name
tags:
  - En-têtes
  - Fetch
  - Glossaire
  - HTTP
  - Interdit
translation_of: Glossary/Forbidden_header_name
original_slug: Glossaire/Forbidden_header_name
---
**Un nom d'en-tête interdit** est un nom d'[en-tête HTTP](/fr/docs/HTTP/Headers) qui ne peut être modifié par programmation, spécifiquement, un nom d'en-tête de **requête** HTTP (contraste avec {{Glossary("Forbidden response header name","Nom d'en-tête de réponse interdit")}}).

Les modifications de ces en-têtes sont interdites pour que l'agent utilisateur garde un total contrôle sur eux. Les noms commençant par \``Sec-`\` sont réservés à la création de nouveaux en-têtes à l'abri des {{glossary("API","API")}} utilisant [Fetch](/fr/docs/Web/API/Fetch_API) qui accordent aux développeurs le contrôle des en-têtes, tels que {{domxref("XMLHttpRequest")}}.

Les noms d'en-tête interdits commencent avec `Proxy-` ou `Sec-`, ou se composent de l'un d'eux :

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

> **Note :** L'en-tête `User-Agent` n'est plus interdit, [conformément à la spécification](https://fetch.spec.whatwg.org/#terminology-headers) — voir la liste des noms d'en-tête interdit (implémentée dans Firefox 43), et peut donc maintenant être défini dans un objet [en-tête](/fr/docs/Web/API/Headers) Fetch, via XHR [setRequestHeader()](/fr/docs/Web/API/XMLHttpRequest#setRequestHeader%28%29), etc.
