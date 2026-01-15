---
title: 101 Switching Protocol
slug: Web/HTTP/Reference/Status/101
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut HTTP de [réponse informative](/fr/docs/Web/HTTP/Reference/Status#réponses_informatives) **`101 Switching Protocols`** indique le protocole sur lequel un serveur a basculé.
Le protocole est défini dans l'en-tête de requête {{HTTPHeader("Upgrade")}} reçu d'un client.

Le serveur envoie alors une réponse avec un en-tête de réponse {{HTTPHeader("Upgrade")}} qui indique le nouveau protocole utilisé. Ce processus est décrit dans l'article [Mécanisme de mise à jour du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Statut

```http
101 Switching Protocols
```

## Exemples

### Basculement de protocole vers WebSockets

L'exemple suivant montre comment le basculement de protocole peut être utilisé avec [WebSockets](/fr/docs/Web/API/WebSockets_API).
Un·e client·e envoie une requête HTTP {{HTTPMethod("GET")}} avec un en-tête {{HTTPHeader("Upgrade")}} qui doit également être listé dans l'en-tête {{HTTPHeader("Connection")}}.
Le serveur accepte de basculer de protocole, retournant une réponse 101 signifiant que la connexion est passée de HTTP à WebSocket.
À ce stade, le client et le serveur peuvent commencer à échanger des données WebSocket.
Des informations sur la manière de définir les en-têtes `Sec-WebSocket-*` pour la négociation de l'initialisation sont disponibles dans [En-têtes spécifiques à WebSocket](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#en-têtes_propres_à_websocket).

```http
GET /notifications HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
```

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Mécanisme de mise à jour du protocole](/fr/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [WebSockets](/fr/docs/Web/API/WebSockets_API)
- L'en-tête HTTP {{HTTPHeader("Upgrade")}}
- Le code de statut {{HTTPStatus("426", "426 Upgrade Required")}}
