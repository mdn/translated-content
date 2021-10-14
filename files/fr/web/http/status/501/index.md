---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
tags:
  - Code de statut
  - Erreur serveur
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/501
---
{{HTTPSidebar}}

Le code de réponse HTTP d'erreur serveur **`501`\*\***` Not Implemented`\*\* indique que la méthode de la requête n'est pas prise en charge par le serveur et qu'elle ne peut donc pas être prise en compte. Les serveurs doivent nécessairement prendre en charge les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}} (pour lesquelles ils ne doivent donc pas renvoyer ce code).

Une erreur 501 ne peut pas être corrigée via le client (c'est-à-dire le navigateur dans la plupart des cas). Il est nécessaire que cela soit corrigé sur le serveur web.

> **Note :** Par défaut, une réponse 501 peut être mise en cache.

## Statut

    501 Not Implemented

## Spécifications

| Specification                                                    | Title                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "501 Not Implemented" , "6.6.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "501")}}
