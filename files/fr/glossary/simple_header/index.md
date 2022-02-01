---
title: En-tête simple
slug: Glossary/Simple_header
tags:
  - CORS
  - En-têtes
  - Glossaire
  - HTTP
translation_of: Glossary/Simple_header
original_slug: Glossaire/En-tête_simple
---
Un _en-tête simple_ (ou en-tête de requête sécurisé CORS) est l'un des [en-têtes HTTP](/fr/docs/HTTP/Headers) suivants :

- {{HTTPHeader("Accept")}},
- {{HTTPHeader("Accept-Language")}},
- {{HTTPHeader("Content-Language")}},
- {{HTTPHeader("Content-Type")}} avec un type MIME de sa valeur analysée (ignorant les paramètres) et l'un des `application/x-www-form-urlencoded`, `multipart/form-data` ou `text/plain`.

Ou l'un de ces en-têtes d'indication de client :

- {{HTTPHeader("DPR")}}
- {{HTTPHeader("Downlink")}}
- {{HTTPHeader("Save-Data")}}
- {{HTTPHeader("Viewport-Width")}}
- {{HTTPHeader("Width")}}

Lorsqu'elles ne contiennent que de simples en-têtes, les requêtes sont réputées simples et n'ont pas besoin d'envoyer une {{glossary("preflight request","requête de pré-vérification")}} dans le contexte de [CORS](/fr/docs/Glossaire/CORS).

## En apprendre plus

- [En-têtes HTTP](/fr/docs/HTTP/Headers)
- {{Glossary("Simple response header","En-tête de réponse simple")}}
- {{Glossary("Forbidden header name","Nom d'en-tête interdit")}}
- {{Glossary("Request header","En-tête de requête")}}
