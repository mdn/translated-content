---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/426
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`426 Upgrade Required`** indique que le serveur refuse de réaliser la requête en utilisant le protocole actuel mais qu'il sera peut-être disposé à le faire après que le client augmente la version du protocole utilisé.

Avec cette réponse, le serveur renvoie un en-tête {{HTTPHeader("Upgrade")}} pour indiquer le(s) protocole(s) requis.

## Statut

    426 Upgrade Required

## Exemples

    HTTP/1.1 426 Upgrade Required
    Upgrade: HTTP/3.0
    Connection: Upgrade
    Content-Length: 53
    Content-Type: text/plain

    This service requires use of the HTTP/3.0 protocol

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "426 Upgrade Required" , "6.5.15")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocol`
