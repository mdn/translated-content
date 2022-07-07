---
title: 'WebSocket : évènement error'
slug: Web/API/WebSocket/error_event
browser-compat: api.WebSocket.error_event
---
{{APIRef}}

L'évènement `error` est déclenché lorsqu'une connexion avec une `WebSocket` a été fermée à cause d'une erreur (par exemple lorsque des données n'ont pu être envoyées).

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
        <a href="/fr/docs/Web/API/Event"><code>Event</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'évènement correspondante</th>
      <td>
        <a href="/fr/docs/Web/API/WebSocket/onerror"><code>onerror</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

```js
// On crée une connexion WebSocket
const socket = new WebSocket('ws://localhost:8080');

// On écoute les éventuelles erreurs
socket.addEventListener('error', function (event) {
  console.log('Erreur WebSocket : ', event);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket : évènement `close`](/fr/docs/Web/API/WebSocket/close_event)
- [WebSocket : évènement `message`](/fr/docs/Web/API/WebSocket/message_event)
- [WebSocket : évènement `open`](/fr/docs/Web/API/WebSocket/open_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
