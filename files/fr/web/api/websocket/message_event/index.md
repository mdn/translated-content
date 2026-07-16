---
title: "WebSocket : évènement message"
short-title: message
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

L'évènement `message` de l'interface {{DOMxRef("WebSocket")}} est déclenché lorsque des données sont reçues via une `WebSocket`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MessageEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Propriétés de l'évènement

_En plus des propriétés listées ci-dessous, les propriétés de l'interface parente, {{DOMxRef("Event")}}, sont disponibles._

- {{DOMxRef("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : Les données envoyées par l'émetteur du message. Le type de cette propriété dépend du type du message WebSocket et de la valeur de {{DOMxRef("WebSocket.binaryType")}}.
    - Si le type du message est `"text"`, alors ce champ est une chaîne de caractères.
    - Si le type du message est `"binary"`, alors le type de cette propriété peut être déduit du `binaryType` de ce socket :
      - {{JSxRef("ArrayBuffer")}} si `binaryType` vaut `"arraybuffer"`,
      - {{DOMxRef("Blob")}} si `binaryType` vaut `"blob"`. Cela n'a pas de type média associé ({{DOMxRef("Blob.type")}} vaut `""`).
- {{DOMxRef("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant l'origine de l'émetteur du message.

Les autres propriétés de l'interface {{DOMxRef("MessageEvent")}} sont présentes, mais ne concernent pas l'API WebSocket et restent à leurs valeurs par défaut&nbsp;:

- {{DOMxRef("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
- {{DOMxRef("MessageEvent.source", "source")}} {{ReadOnlyInline}}
- {{DOMxRef("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}

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
