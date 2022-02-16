---
title: WebSocket.onmessage
slug: conflicting/Web/API/WebSocket/message_event
original_slug: Web/API/WebSocket/onmessage
browser-compat: api.WebSocket.onmessage
---
{{APIRef("Web Sockets API")}}

La propriété **`WebSocket.onmessage`** est un [gestionnaire d'évènement](/fr/docs/Web/Events/Event_handlers) qui est appelé lorsqu'un message est reçu depuis le serveur. Ce gestionnaire est appelé avec un évènement [`MessageEvent`](/fr/docs/Web/API/MessageEvent) en paramètre.

## Syntaxe

```js
unWebSocket.onmessage = function(event) {
  console.debug("Message WebSocket reçu :", event);
};
```

## Valeur

Un objet [`EventListener`](/fr/docs/Web/API/EventListener).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
