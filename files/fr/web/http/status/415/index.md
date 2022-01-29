---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
translation_of: Web/HTTP/Status/415
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`415 Unsupported Media Type`** indique que le serveur refuse la requête, car le format de la charge utile (<i lang="en">payload</i>) n'est pas pris en charge.

Le problème de format peut être causé par les valeurs des en-têtes [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) ou [`Content-Encoding`](/fr/docs/Web/HTTP/Headers/Content-Encoding) dans la requête ou, plus directement, à cause de l'inspection des données.

## Statut

```
415 Unsupported Media Type
```

## Spécifications

| Spécification                                                                | Titre                                                         |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [RFC 7231, section 6.5.13: 415 Unsupported Media Type](https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13) | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type)
- [`Content-Encoding`](/fr/docs/Web/HTTP/Headers/Content-Encoding)
- [`Accept`](/fr/docs/Web/HTTP/Headers/Accept)
