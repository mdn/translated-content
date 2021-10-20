---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/429
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`429 Too Many Requests`** indique que l'utilisateur a envoyé trop de requêtes en un temps donné.

Un en-tête {{HTTPHeader("Retry-After")}} peut être inclus dans cette réponse afin d'indiquer le temps à attendre pour effectuer une nouvelle requête.

## Statut

    429 Too Many Requests

## Exemple

    HTTP/1.1 429 Too Many Requests
    Content-Type: text/html
    Retry-After: 3600

## Spécifications

| Spécification                                                | Titre                        |
| ------------------------------------------------------------ | ---------------------------- |
| {{RFC("6585", "429 Too Many Requests" , "4")}} | Additional HTTP Status Codes |

## Voir aussi

- {{HTTPHeader("Retry-After")}}
