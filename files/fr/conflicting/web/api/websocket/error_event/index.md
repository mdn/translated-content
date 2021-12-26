---
title: WebSocket.onerror
slug: conflicting/Web/API/WebSocket/error_event
original_slug: Web/API/WebSocket/onerror
browser-compat: api.WebSocket.onerror
---
{{APIRef("Web Sockets API")}}

La propriété **`onerror`** de l'interface [`WebSocket`](/fr/docs/Web/API/WebSocket) est un gestionnaire d'évènement qui est appelé lorsqu'une erreur se produit sur la connexion WebSocket.

Il est également possible d'ajouter un gestionnaire d'évènement `error` avec la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener).

## Syntaxe

```js
webSocket.onerror = eventHandler;
```

### Valeur

Une fonction ou un [gestionnaire d'évènement](/fr/docs/Web/Events/Event_handlers) qui est exécuté lorsqu'un évènement `error` se produit sur la connexion WebSocket.

## Exemple

```js
webSocket.onerror = function(event) {
  console.error("Erreur WebSocket observée :", event);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
