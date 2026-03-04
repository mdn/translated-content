---
title: "WebSocket : évènement error"
short-title: error
slug: Web/API/WebSocket/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

L'évènement `error` de l'interface {{DOMxRef("WebSocket")}} est déclenché lorsqu'une connexion avec une `WebSocket` a été fermée à cause d'une erreur (par exemple lorsque des données n'ont pu être envoyées).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou assignez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Type d'évènement

Un objet générique {{DOMxRef("Event")}}.

## Exemples

```js
// On crée une connexion WebSocket
const socket = new WebSocket("ws://localhost:8080");

// On écoute les éventuelles erreurs
socket.addEventListener("error", (event) => {
  console.log("Erreur WebSocket : ", event);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket&nbsp;: évènement `close`](/fr/docs/Web/API/WebSocket/close_event)
- [WebSocket&nbsp;: évènement `message`](/fr/docs/Web/API/WebSocket/message_event)
- [WebSocket&nbsp;: évènement `open`](/fr/docs/Web/API/WebSocket/open_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
