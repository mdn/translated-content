---
title: 101 Switching Protocol
slug: Web/HTTP/Status/101
tags:
  - Code de statut
  - HTTP
  - Informatif
  - Reference
  - WebSockets
translation_of: Web/HTTP/Status/101
---
{{HTTPSidebar}}

Le code de réponse HTTP **`101 Switching Protocol`** indique que le protocole a changé, comme demandé par le client via l'en-tête {{HTTPHeader("Upgrade")}}.

Le serveur envoie alors une réponse avec un en-tête {{HTTPHeader("Upgrade")}} qui indique le nouveau protocole utilisé.

## Statut

    101 Switching Protocol

## Exemples

Les changements de protocole peuvent être utilisés avec [WebSockets](/fr/docs/WebSockets).

    HTTP/1.1 101 Switching Protocols
    Upgrade: websocket
    Connection: Upgrade

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "101 Switching Protocol" , "6.2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [WebSockets](/fr/docs/WebSockets)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}}` Upgrade Required`
