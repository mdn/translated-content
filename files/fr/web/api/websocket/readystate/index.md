---
title: "WebSocket : propriété readyState"
short-title: readyState
slug: Web/API/WebSocket/readyState
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`readyState`** de l'interface {{DOMxRef("WebSocket")}} retourne l'état courant de la connexion {{DOMxRef("WebSocket")}}.

## Valeur

Un nombre correspondant à l'une des quatre constantes d'état définies sur l'interface {{DOMxRef("WebSocket")}}&nbsp;:

- `WebSocket.CONNECTING` (0)
  - : Le socket a été créé. La connexion n'est pas encore ouverte.
- `WebSocket.OPEN` (1)
  - : La connexion est ouverte et prête à communiquer.
- `WebSocket.CLOSING` (2)
  - : La connexion est en cours de fermeture.
- `WebSocket.CLOSED` (3)
  - : La connexion est fermée ou n'a pas pu être ouverte.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
