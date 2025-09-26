---
title: En-tête de requête sûr pour le CORS
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 4e8db9b4072e90e349f3c18b2c6edfe898cfe6a2
---

{{GlossarySidebar}}

Un [en-tête de requêtes sûr pour le CORS (<i lang="en">CORS-safelisted request header</i>)](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) est l'un des [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) suivants&nbsp;:

- [`Accept`](/fr/docs/Web/HTTP/Reference/Headers/Accept)
- [`Accept-Language`](/fr/docs/Web/HTTP/Reference/Headers/Accept-Language)
- [`Content-Language`](/fr/docs/Web/HTTP/Reference/Headers/Content-Language)
- [`Content-Type`](/fr/docs/Web/HTTP/Reference/Headers/Content-Type)
- [`Range`](/fr/docs/Web/HTTP/Headers/Range)

Lorsqu'une requête ne contient que ces en-têtes (et répond aux critères indiqués après), il n'y a pas besoin d'une [requête préalable (<i lang="en">preflight request</i>)](/fr/docs/Glossary/Preflight_request) dans le contexte du [CORS](/fr/docs/Glossary/CORS).

Il est possible d'indiquer d'autres en-têtes comme sûrs à l'aide de l'en-tête [`Access-Control-Allow-Headers`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Headers). `Access-Control-Allow-Headers` permet également de lister les en-têtes précédents pour contourner les restrictions supplémentaires décrites ensuite.

## Restrictions supplémentaires

Les en-têtes sûr pour le CORS doivent également respecter ces critères&nbsp;:

- Les valeurs pour [`Accept-Language`](/fr/docs/Web/HTTP/Reference/Headers/Accept-Language) et [`Content-Language`](/fr/docs/Web/HTTP/Reference/Headers/Content-Language) ne peuvent contenir que les caractères `0-9`, `A-Z`, `a-z`, espace ou `*,-.;=`.
- [`Accept`](/fr/docs/Web/HTTP/Reference/Headers/Accept) et [`Content-Type`](/fr/docs/Web/HTTP/Reference/Headers/Content-Type) ne peuvent pas contenir un octet d'en-tête non-sûr&nbsp;: `0x00-0x1F` (exception faite de `0x09 (HT)` qui est autorisé), `"():<>?@[\]{}`, et `0x7F (DEL)`.
- [`Content-Type`](/fr/docs/Web/HTTP/Reference/Headers/Content-Type) doit être un type MIME qui (lorsqu'on ignore les paramètres) vaut `application/x-www-form-urlencoded`, ou `multipart/form-data`, ou `text/plain`.
- La valeur de [`Range`](/fr/docs/Web/HTTP/Headers/Range) doit être un seul intervalle d'octets sous la forme `bytes=[0-9]+-[0-9]*`. Voir la documentation de [`Range`](/fr/docs/Web/HTTP/Headers/Range) pour plus de détails.
- Pour n'importe quel en-tête, la longueur de la valeur ne peut excéder 128.

## Voir aussi

- [En-tête de réponse sûr pour le CORS](/fr/docs/Glossary/CORS-safelisted_response_header)
- [Nom d'en-tête interdit](/fr/docs/Glossary/Forbidden_request_header)
- [En-tête de requête](/fr/docs/Glossary/Request_header)
