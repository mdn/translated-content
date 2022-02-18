---
title: WebSocket.onclose
slug: conflicting/Web/API/WebSocket/close_event
original_slug: Web/API/WebSocket/onclose
browser-compat: api.WebSocket.onclose
---
{{APIRef("Web Sockets API")}}

La propriété **`WebSocket.onclose`** est un [gestionnaire d'évènement](/fr/docs/Web/Events/Event_handlers) invoqué lorsque l'état [`readyState`](/fr/docs/Web/API/WebSocket/readyState) de la connexion WebSocket change de valeur pour passer à [`CLOSED`](/fr/docs/Web/API/WebSocket/readyState). Ce gestionnaire est appelé avec un paramètre [`CloseEvent`](/fr/docs/Web/API/CloseEvent).

## Syntaxe

```js
unWebSocket.onclose = function(event) {
  console.log("La WebSocket est désormais fermée.");
};
```

## Valeur

Une fonction [`EventListener`](/fr/docs/Web/API/EventListener).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
