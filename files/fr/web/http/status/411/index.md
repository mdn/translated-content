---
title: 411 Length Required
slug: Web/HTTP/Status/411
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/411
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`411`\*\***` Length Required`\*\* indique que le serveur refuse d'accepter la requête si celle-ci ne contient pas d'en-tête {{HTTPHeader("Content-Length")}}.

On notera que, selon la spécification, lors de l'envoi de données en plusieurs fragments, l'en-tête `Content-Length` est absent et il est nécessaire d'ajouter la longueur du fragment courant au format hexadécimal. Pour plus de détails, se référer à la page sur l'en-tête {{HTTPHeader("Transfer-Encoding")}}.

## Statut

    411 Length Required

## Spécifications

| Spécification                                                    | Titre                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "411 Length Required" , "6.5.10")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
