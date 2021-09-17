---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/413
---
{{HTTPSidebar}}

Le code de statut de réponse **`413 Payload Too Large`** indique que la taille de l'entité fournie par la requête est supérieure aux limites définies par le serveur. Le serveur peut alors choisir de fermer la connexion ou de renvoyer un en-tête {{HTTPHeader("Retry-After")}}.

## Statut

    413 Payload Too Large

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "413 Payload Too Large" , "6.5.11")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
