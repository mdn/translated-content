---
title: En-tête de requête sûr pour le CORS
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un [en-tête de requêtes sûr pour le CORS (<i lang="en">CORS-safelisted request header</i>)](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) est l'un des [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) suivants&nbsp;:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Lorsqu'une requête ne contient que ces en-têtes (et répond aux critères indiqués après), il n'y a pas besoin d'une {{Glossary('preflight request', 'requête préalable (<i lang="en">preflight request</i>)')}} dans le contexte du {{Glossary("CORS")}}..

Il est possible d'indiquer d'autres en-têtes comme sûrs à l'aide de l'en-tête {{HTTPHeader("Access-Control-Allow-Headers")}}. `Access-Control-Allow-Headers` permet également de lister les en-têtes précédents pour contourner les restrictions supplémentaires décrites ensuite.

## Restrictions supplémentaires

Les en-têtes sûr pour le CORS doivent également respecter ces critères&nbsp;:

- Les valeurs pour {{HTTPHeader("Accept-Language")}} et {{HTTPHeader("Content-Language")}} ne peuvent contenir que les caractères `0-9`, `A-Z`, `a-z`, espace ou `*,-.;=`.
- {{HTTPHeader("Accept")}} et {{HTTPHeader("Content-Type")}} ne peuvent pas contenir un octet d'en-tête non-sûr&nbsp;: `0x00-0x1F` (exception faite de `0x09 (HT)` qui est autorisé), `"():<>?@[\]{}`, et `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} doit être un type MIME qui (lorsqu'on ignore les paramètres) vaut `application/x-www-form-urlencoded`, ou `multipart/form-data`, ou `text/plain`.
- La valeur de {{HTTPHeader("Range")}} doit être un seul intervalle d'octets sous la forme `bytes=[0-9]+-[0-9]*`. Voir la documentation de {{HTTPHeader("Range")}} pour plus de détails.
- Pour n'importe quel en-tête, la longueur de la valeur ne peut excéder 128.

## Voir aussi

- Termes de glossaire associés&nbsp;:
  - {{Glossary("CORS-safelisted response header", "En-tête de réponse sûr pour le CORS")}}
  - {{Glossary("Forbidden request header", "Nom d'en-tête interdit")}}
  - {{Glossary("Request header", "En-tête de requête")}}
