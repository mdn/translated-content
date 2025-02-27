---
title: En-tête de représentation
slug: Glossary/Representation_header
l10n:
  sourceCommit: f4f8e2f18ccf19a0bee59e1fe78753e276b98232
---

{{GlossarySidebar}}

Un **en-tête de représentation** est un [en-tête HTTP](/fr/docs/Glossary/HTTP_header) qui décrit la _représentation_ particulière de la ressource envoyée dans un corps de message HTTP.

Les représentations sont différentes formes d'une ressource particulière.
Par exemple, les mêmes données peuvent être formatées avec un type de média particulier tel que XML ou JSON, localisées dans une langue écrite ou une région géographique particulière, et/ou compressées ou autrement encodées pour la transmission.
La ressource sous-jacente est la même dans chaque cas, mais sa représentation est différente.

Les clients précisent les formats qu'ils préfèrent recevoir lors de la [négociation de contenu](/fr/docs/Web/HTTP/Content_negotiation) (utilisant des en-têtes `Accept-*`), et les en-têtes de représentation indiquent au client le format de la _représentation sélectionnée_ qu'il a effectivement reçue.

Les en-têtes de représentation peuvent être présents à la fois dans les messages de requête et de réponse HTTP.
S'ils sont envoyés en réponse à une requête `HEAD`, ils décrivent le contenu du corps qui _serait_ sélectionné si la ressource était réellement demandée.

Les en-têtes de représentation incluent&nbsp;:

- [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type),
- [`Content-Encoding`](/fr/docs/Web/HTTP/Headers/Content-Encoding),
- [`Content-Language`](/fr/docs/Web/HTTP/Headers/Content-Language),
- [`Content-Location`](/fr/docs/Web/HTTP/Headers/Content-Location).

## Voir aussi

- [Section 3 de la RFC 7231 sur les représentations (en anglais)](https://datatracker.ietf.org/doc/html/rfc7231#section-3)
- [Liste de tous les en-têtes HTTP](/fr/docs/Web/HTTP/Headers)
- [En-tête de charge utile](/fr/docs/Glossary/Payload_header)
- [En-tête d'entité](/fr/docs/Glossary/Entity_header)
- [`Digest`](/fr/docs/Web/HTTP/Headers/Content-Digest)
- [`Want-Digest`](/fr/docs/Web/HTTP/Headers/Want-Content-Digest)
