---
title: 101 Switching Protocol
slug: Web/HTTP/Status/101
translation_of: Web/HTTP/Status/101
---
{{HTTPSidebar}}

Le code de réponse HTTP **`101 Switching Protocol`** indique le protocole sur lequel le serveur a basculé, comme demandé par le client via l'en-tête de requête [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade).

Le serveur envoie alors une réponse avec un en-tête de réponse [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade) qui indique le nouveau protocole utilisé. Ce processus est décrit dans l'article [Mécanisme de mise à jour du protocole](/fr/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Statut

```
101 Switching Protocol
```

## Exemples

Les changements de protocole peuvent être utilisés avec [WebSockets](/fr/docs/Web/API/WebSockets_API).

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| [RFC 7231, section 6.2.2: 101 Switching Protocol](https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2) | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- [Mécanisme de mise à jour du protocole](/fr/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/fr/docs/Web/API/WebSockets_API)
- [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade)
- [`426 Upgrade Required`](/fr/docs/Web/HTTP/Status/426)