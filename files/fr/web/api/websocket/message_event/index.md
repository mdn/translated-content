---
title: 'WebSocket : évènement message'
slug: Web/API/WebSocket/message_event
browser-compat: api.WebSocket.message_event
---
{{APIRef}}

L'évènement `message` est déclenché lorsque des données sont reçues via une `WebSocket`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bouillonne/Remonte</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>
        <a href="/fr/docs/Web/API/MessageEvent"><code>MessageEvent</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'évènement correspondante</th>
      <td>
        <a href="/fr/docs/Web/API/WebSocket/onmessage"
          ><code>onmessage</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

```js
// Crée une connexion WebSocket
const socket = new WebSocket('ws://localhost:8080');

// Écoute les différents messages
socket.addEventListener('message', function (event) {
    console.log('Message reçu du serveur ', event.data);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket : évènement `close`](/fr/docs/Web/API/WebSocket/close_event)
- [WebSocket : évènement `error`](/fr/docs/Web/API/WebSocket/error_event)
- [WebSocket : évènement `open`](/fr/docs/Web/API/WebSocket/open_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
