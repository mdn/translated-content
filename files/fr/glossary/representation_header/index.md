---
title: Représentation d'en-tête
slug: Glossary/Representation_header
tags:
  - Glossaire
  - WebMechanics
---
Une **représentation d'en-tête,** est un {{glossary("HTTP_header", "HTTP header")}} qui décrit la _représentation_ particulière de la ressource envoyée dans un corps de message HTTP.

Les représentations sont différentes formes d'une ressource particulière.
Par exemple, les mêmes données peuvent être formatées en tant que type de support particulier tel que XML ou JSON, localisées dans une langue écrite ou une région géographique particulière, et/ou compressées ou autrement codées pour la transmission.
La ressource sous-jacente est la même dans chaque cas, mais sa représentation est différente.

Les clients précisent les formats qu'ils préfèrent envoyés lors de la [négociation de contenu](/en-US/docs/Web/HTTP/Content_negotiation) (utilisant des en-têtes `Accept-*`), et les en-têtes de représentation indiquent au client le format de la _représentation sélectionnée_ qu'il a effectivement reçue.

Les en-têtes de représentation peuvent être présents à la fois dans les messages de requête et de réponse HTTP.
S'ils sont envoyés en réponse à une requête `HEAD`, ils décrivent le contenu du corps qui _serait_ sélectionné si la ressource était réellement demandée.

Les en-têtes de représentation incluent: {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Language")}}, et {{HTTPHeader("Content-Location")}}.

## Voir aussi

- [RFC 7231, section 3: Representations](https://datatracker.ietf.org/doc/html/rfc7231#section-3)
- [Liste de tous les en-têtes HTTP](/en-US/docs/Web/HTTP/Headers)
- {{Glossary("Payload header")}}
- {{glossary("Entity header")}}
- {{HTTPHeader("Digest")}}/ {{HTTPHeader("Want-Digest")}}
