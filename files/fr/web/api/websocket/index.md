---
title: WebSocket
slug: Web/API/WebSocket
---

{{APIRef("Web Sockets API")}}

L'objet `WebSocket` fournit l'API qui permet de créer et de gérer une connexion [WebSocket](/fr/docs/Web/API/WebSockets_API) à un serveur ainsi que d'envoyer et de recevoir des données sur cette connexion.

Pour construire un objet `WebSocket`, on utilisera le constructeur [`WebSocket()`](/fr/docs/Web/API/WebSocket/WebSocket).

{{AvailableInWorkers}}

## Constructeur

- [`WebSocket(url[, protocols])`](/fr/docs/Web/API/WebSocket/WebSocket)
  - : Renvoie un nouvel objet `WebSocket`.

## Constantes

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Constante</td>
      <td class="header">Valeur</td>
    </tr>
    <tr>
      <td><code>WebSocket.CONNECTING</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>WebSocket.OPEN</code></td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>WebSocket.CLOSING</code></td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td><code>WebSocket.CLOSED</code></td>
      <td><code>3</code></td>
    </tr>
  </tbody>
</table>

## Propriétés

- [`WebSocket.binaryType`](/fr/docs/Web/API/WebSocket/binaryType)
  - : Le type de données binaire utilisé par la connexion.
- [`WebSocket.bufferedAmount`](/fr/docs/Web/API/WebSocket/bufferedAmount) {{readonlyinline}}
  - : Le nombre d'octets de données dans la queue.
- [`WebSocket.extensions`](/fr/docs/Web/API/WebSocket/extensions) {{readonlyinline}}
  - : Les extensions sélectionnées par le serveur.
- [`WebSocket.onclose`](/fr/docs/Web/API/WebSocket/onclose)
  - : Un gestionnaire d'évènement à appeler lorsque la connexion est fermée.
- [`WebSocket.onerror`](/fr/docs/Web/API/WebSocket/onerror)
  - : Un gestionnaire d'évènement à appeler en cas d'erreur.
- [`WebSocket.onmessage`](/fr/docs/Web/API/WebSocket/onmessage)
  - : Un gestionnaire d'évènement à appeler lors de la réception d'un message du serveur.
- [`WebSocket.onopen`](/fr/docs/Web/API/WebSocket/onopen)
  - : Un gestionnaire d'évènement à appeler lorsque la connexion est ouverte.
- [`WebSocket.protocol`](/fr/docs/Web/API/WebSocket/protocol) {{readonlyinline}}
  - : Le sous-protocole sélectionné par le serveur.
- [`WebSocket.readyState`](/fr/docs/Web/API/WebSocket/readyState) {{readonlyinline}}
  - : L'état courant de la connexion.
- [`WebSocket.url`](/fr/docs/Web/API/WebSocket/url) {{readonlyinline}}
  - : L'URL absolue de la WebSocket.

## Méthodes

- [`WebSocket.close([code[, reason]])`](/fr/docs/Web/API/WebSocket/close)
  - : Ferme la connexion.
- [`WebSocket.send(data)`](/fr/docs/Web/API/WebSocket/send)
  - : Ajoute des données à transmettre à la queue.

## Évènements

- [`close`](/fr/docs/Web/API/WebSocket/close_event)
  - : Déclenché lorsqu'une connexion avec une `WebSocket` est fermée. Également disponible avec la propriété [`onclose`](/fr/docs/Web/API/WebSocket/onclose).
- [`error`](/fr/docs/Web/API/WebSocket/error_event)
  - : Déclenché lorsqu'une connexion avec une `WebSocket` a été fermée à cause d'une erreur, par exemple lorsque des données n'ont pu être envoyées. Également disponible avec la propriété [`onerror`](/fr/docs/Web/API/WebSocket/onerror).
- [`message`](/fr/docs/Web/API/WebSocket/message_event)
  - : Déclenché lorsque des données sont reçues via une `WebSocket`. Également disponible avec la propriété [`onmessage`](/fr/docs/Web/API/WebSocket/onmessage).
- [`open`](/fr/docs/Web/API/WebSocket/open_event)
  - : Déclenché lorsqu'une connexion avec une `WebSocket` est ouverte. Également disponible avec la propriété [`onopen`](/fr/docs/Web/API/WebSocket/onopen).

## Exemples

```js
// Créer une connexion WebSocket
const socket = new WebSocket("ws://localhost:8080");

// La connexion est ouverte
socket.addEventListener("open", function (event) {
  socket.send("Coucou le serveur !");
});

// Écouter les messages
socket.addEventListener("message", function (event) {
  console.log("Voici un message du serveur", event.data);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
