---
title: "WebSocket : évènement message"
short-title: message
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

L'évènement `message` de l'interface {{DOMxRef("WebSocket")}} est déclenché lorsque des données sont reçues avec une `WebSocket`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MessageEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Exemples

```js
// Crée une connexion WebSocket
const socket = new WebSocket("ws://localhost:8080");

// Écoute les différents messages
socket.addEventListener("message", (event) => {
  console.log("Message reçu du serveur ", event.data);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket&nbsp;: évènement `close`](/fr/docs/Web/API/WebSocket/close_event)
- [WebSocket&nbsp;: évènement `error`](/fr/docs/Web/API/WebSocket/error_event)
- [WebSocket&nbsp;: évènement `open`](/fr/docs/Web/API/WebSocket/open_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
