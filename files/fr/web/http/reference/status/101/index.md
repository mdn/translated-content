---
title: 101 Switching Protocol
slug: Web/HTTP/Reference/Status/101
original_slug: Web/HTTP/Status/101
---

Le code de réponse HTTP **`101 Switching Protocol`** indique le protocole sur lequel le serveur a basculé, comme demandé par le client via l'en-tête de requête [`Upgrade`](/fr/docs/Web/HTTP/Reference/Headers/Upgrade).

Le serveur envoie alors une réponse avec un en-tête de réponse [`Upgrade`](/fr/docs/Web/HTTP/Reference/Headers/Upgrade) qui indique le nouveau protocole utilisé. Ce processus est décrit dans l'article [Mécanisme de mise à jour du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Mécanisme de mise à jour du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [WebSockets](/fr/docs/Web/API/WebSockets_API)
- [`Upgrade`](/fr/docs/Web/HTTP/Reference/Headers/Upgrade)
- [`426 Upgrade Required`](/fr/docs/Web/HTTP/Reference/Status/426)
