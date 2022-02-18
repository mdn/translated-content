---
title: WebSocket.onopen
slug: conflicting/Web/API/WebSocket/open_event
original_slug: Web/API/WebSocket/onopen
browser-compat: api.WebSocket.onopen
---
{{APIRef("Web Sockets API")}}

La propriété **`WebSocket.onopen`** est un [gestionnaire d'évènement](/fr/docs/Web/Events/Event_handlers) qui est appelé lorsque l'état ([`readyState`](/fr/docs/Web/API/WebSocket/readyState)) de la connexion [`WebSocket`](/fr/docs/Web/API/WebSocket) passe à `1`, indiquant que la connexion est prête pour l'envoi et la réception de données. Lorsqu'il est appelé, ce gestionnaire d'évènement reçoit un objet [`Event`](/fr/docs/Web/API/Event) en paramètre.

## Syntaxe

```js
uneWebSocket.onopen = function(event) {
  console.log("La WebSocket est désormais ouverte.");
};
```

## Valeur

Un objet [`EventListener`](/fr/docs/Web/API/EventListener).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
