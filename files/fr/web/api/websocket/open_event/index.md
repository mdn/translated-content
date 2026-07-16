---
title: "WebSocket : évènement open"
short-title: open
slug: Web/API/WebSocket/open_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

L'évènement `open` de l'interface {{DOMxRef("WebSocket")}} est déclenché lorsqu'une connexion avec une `WebSocket` est ouverte.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("open", (event) => { })

onopen = (event) => { }
```

## Type d'évènement

Un objet générique {{DOMxRef("Event")}}.

## Exemples

```js
// Crée une connexion WebSocket
const socket = new WebSocket("ws://localhost:8080");

// La connexion est ouverte
socket.addEventListener("open", (event) => {
  socket.send("Coucou serveur !");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket&nbsp;: évènement `close`](/fr/docs/Web/API/WebSocket/close_event)
- [WebSocket&nbsp;: évènement `error`](/fr/docs/Web/API/WebSocket/error_event)
- [WebSocket&nbsp;: évènement `message`](/fr/docs/Web/API/WebSocket/message_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
