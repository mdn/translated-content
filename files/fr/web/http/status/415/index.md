---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/415
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`415 Unsupported Media Type`** indique que le serveur refuse la requête car le format de la charge utile (_payload_) n'est pas pris en charge.

Le problème de format peut être causé par les valeurs des en-têtes [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type) ou [`Content-Encoding`](/fr/docs/Web/HTTP/Headers/Content-Encoding) dans la requête ou, plus directement, à cause de l'inspection des données.

## Statut

    415 Unsupported Media Type

## Spécifications

| Spécification                                                                | Titre                                                         |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type)
- [`Content-Encoding`](/fr/docs/Web/HTTP/Headers/Content-Encoding)
- [`Accept`](/fr/docs/Web/HTTP/Headers/Accept)
