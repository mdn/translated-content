---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
tags:
  - Code de statut
  - Erreur
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/412
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`412`\*\***` Precondition Failed`\*\* indique que l'accès à la ressource visée a été refusé. Cela arrive avec les requêtes conditionnelles lorsque les méthodes utilisées ne sont pas  {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} et que la condition définie par les en-têtes  {{HTTPHeader("If-Unmodified-Since")}} ou {{HTTPHeader("If-None-Match")}} n'est pas respectée. Dans ce cas, la requête, généralement un téléversement ou une modification d'une ressource, ne peut être appliquée et ce code de réponse d'erreur est renvoyé.

## Statut

    412 Precondition Failed

## Spécifications

| Spécification                                                        | Titre                                                        |
| -------------------------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "412 Precondition Failed" , "4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilité des navigateurs

{{Compat("http/status", "412")}}

## Voir aussi

- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
