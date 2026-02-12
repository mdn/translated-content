---
title: WebSocket
slug: Web/API/WebSocket
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

L'objet `WebSocket` fournit l'API permettant de créer et de gérer une connexion [WebSocket](/fr/docs/Web/API/WebSockets_API) avec un serveur, ainsi que d'envoyer et de recevoir des données sur cette connexion.

Pour construire un `WebSocket`, utilisez le constructeur [`WebSocket()`](/fr/docs/Web/API/WebSocket/WebSocket).

> [!NOTE]
> L'API `WebSocket` n'a aucun moyen d'appliquer la [rétropression](/fr/docs/Web/API/Streams_API/Concepts#rétropression), donc lorsque les messages arrivent plus vite que l'application ne peut les traiter, l'application va soit remplir la mémoire de l'appareil en mettant ces messages en mémoire tampon, soit devenir non réactive à cause d'une utilisation du processeur à 100 %, ou les deux. Pour une alternative qui fournit automatiquement la rétropression, voir {{DOMxRef("WebSocketStream")}}.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("WebSocket.WebSocket", "WebSocket()")}}
  - : Retourne un nouvel objet `WebSocket`.

## Propriétés d'instance

- {{DOMxRef("WebSocket.binaryType")}}
  - : Le type de données binaire utilisé par la connexion.
- {{DOMxRef("WebSocket.bufferedAmount")}} {{ReadOnlyInline}}
  - : Le nombre d'octets de données dans la file d'attente.
- {{DOMxRef("WebSocket.extensions")}} {{ReadOnlyInline}}
  - : Les extensions sélectionnées par le serveur.
- {{DOMxRef("WebSocket.protocol")}} {{ReadOnlyInline}}
  - : Le sous-protocole sélectionné par le serveur.
- {{DOMxRef("WebSocket.readyState")}} {{ReadOnlyInline}}
  - : L'état courant de la connexion.
- {{DOMxRef("WebSocket.url")}} {{ReadOnlyInline}}
  - : L'URL absolue de la WebSocket.

## Méthodes d'instance

- {{DOMxRef("WebSocket.close()")}}
  - : Ferme la connexion.
- {{DOMxRef("WebSocket.send()")}}
  - : Ajoute des données à transmettre à la file d'attente.

## Évènements

Écoutez ces évènements avec `addEventListener()` ou en assignant un gestionnaire à la propriété `oneventname` de cette interface.

- {{DOMxRef("WebSocket/close_event", "close")}}
  - : Déclenché lorsqu'une connexion avec une `WebSocket` est fermée.
    Également disponible via la propriété `onclose`.
- {{DOMxRef("WebSocket/error_event", "error")}}
  - : Déclenché lorsqu'une connexion avec une `WebSocket` a été fermée à cause d'une erreur, par exemple lorsque des données n'ont pu être envoyées.
    Également disponible via la propriété `onerror`.
- {{DOMxRef("WebSocket/message_event", "message")}}
  - : Déclenché lorsque des données sont reçues via une `WebSocket`.
    Également disponible via la propriété `onmessage`.
- {{DOMxRef("WebSocket/open_event", "open")}}
  - : Déclenché lorsqu'une connexion avec une `WebSocket` est ouverte.
    Également disponible via la propriété `onopen`.

## Exemples

```js
// Créer une connexion WebSocket
const socket = new WebSocket("ws://localhost:8080");

// La connexion est ouverte
socket.addEventListener("open", (event) => {
  socket.send("Coucou le serveur !");
});

// Écouter les messages
socket.addEventListener("message", (event) => {
  console.log("Voici un message du serveur", event.data);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
