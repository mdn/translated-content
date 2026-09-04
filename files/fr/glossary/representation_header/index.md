---
title: En-tête de représentation
slug: Glossary/Representation_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **en-tête de représentation** est un [en-tête HTTP](/fr/docs/Glossary/HTTP_header) qui décrit la _représentation_ particulière de la ressource envoyée dans un corps de message HTTP.

Les représentations sont différentes formes d'une ressource particulière.
Par exemple, les mêmes données peuvent être formatées avec un type de média particulier tel que XML ou JSON, localisées dans une langue écrite ou une région géographique particulière, et/ou compressées ou autrement encodées pour la transmission.
La ressource sous-jacente est la même dans chaque cas, mais sa représentation est différente.

Bien que les représentations soient différentes formes de ressources, elles peuvent elles-mêmes être transmises sous diverses formes&nbsp;: des trames de message HTTP (voir par exemple {{HTTPHeader("Transfer-Encoding")}} de HTTP/1.1), un flux particulier d'octets (voir par exemple {{HTTPHeader("Content-Range")}}) dérivé de la _représentation sélectionnée_.

Les clients précisent les formats qu'ils préfèrent recevoir lors de la [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) (utilisant des en-têtes `Accept-*`), et les en-têtes de représentation indiquent au client le format de la _représentation sélectionnée_ qu'il a effectivement reçue.

Les en-têtes de représentation peuvent être présents à la fois dans les messages de requête et de réponse HTTP.
S'ils sont envoyés en réponse à une requête `HEAD`, ils décrivent le contenu du corps qui _serait_ sélectionné si la ressource était réellement demandée.

Les en-têtes de représentation incluent&nbsp;:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validateurs utilisés dans les [requêtes conditionnelles](/fr/docs/Web/HTTP/Guides/Conditional_requests), tels que&nbsp;:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Les en-têtes de représentation ne sont pas exclusifs par rapport aux {{Glossary("Content header", "en-têtes de contenu")}}.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Content header", "En-tête de contenu")}}
- [RFC 9110, section 3.2&nbsp;: Représentations <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#representations)
- [Liste de tous les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- Les en-têtes HTTP {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- Les en-têtes HTTP {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
