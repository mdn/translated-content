---
title: Nom d'en-tête interdit
slug: Glossary/Forbidden_request_header
original_slug: Glossary/Forbidden_header_name
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Un nom d'en-tête interdit** est un nom d'[en-tête HTTP](/fr/docs/Web/HTTP/Reference/Headers) qui ne peut être modifié par programmation, spécifiquement, un nom d'en-tête de requête HTTP (contraste avec {{Glossary("Forbidden response header name", "Nom d'en-tête de réponse interdit")}}).

Les modifications de ces en-têtes sont interdites pour que l'agent utilisateur garde un total contrôle sur eux.
Par exemple, l'en-tête {{HTTPHeader("Date")}} est un en-tête de requête interdit, donc ce code ne peut pas définir le champ `Date` du message&nbsp;:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Les noms commençant par `Sec-` sont réservés à la création de nouveaux en-têtes protégés des {{Glossary("API")}} qui donnent aux développeur·euse·s le contrôle sur les en-têtes, comme {{DOMxRef("Window/fetch", "fetch()")}}.
Les en-têtes interdits sont l'un des suivants&nbsp;:

- `Accept-Charset`
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Permissions-Policy")}}
- En-tête `Proxy-`
- En-tête `Sec-`
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}
- `X-HTTP-Method`, mais uniquement lorsqu'il contient un nom de méthode interdit ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, mais uniquement lorsqu'il contient un nom de méthode interdit
- `X-Method-Override`, mais uniquement lorsqu'il contient un nom de méthode interdit

> [!NOTE]
> L'en-tête {{HTTPHeader("User-Agent")}} était auparavant interdit, mais ne l'est plus. Cependant, Chrome ignore toujours silencieusement cet en-tête dans les requêtes Fetch (voir [Chromium bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Bien que l'en-tête {{HTTPHeader("Referer")}} soit listé comme interdit [dans la spécification <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#forbidden-request-header), l'agent utilisateur n'en garde pas le contrôle total et l'en-tête peut être modifié par programmation. Par exemple, lors de l'utilisation de [`fetch()`](/fr/docs/Web/API/Window/fetch), l'en-tête {{HTTPHeader("Referer")}} peut être modifié par programmation via l'option [`referrer`](/fr/docs/Web/API/RequestInit#referrer).

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Forbidden response header name", "Nom d'en-tête de réponse interdit")}}
