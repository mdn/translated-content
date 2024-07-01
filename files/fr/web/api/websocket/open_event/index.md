---
title: "WebSocket : évènement open"
slug: Web/API/WebSocket/open_event
---

{{APIRef}}

L'évènement `open` est déclenché lorsqu'une connexion avec une `WebSocket` est ouverte.

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
        <a href="/fr/docs/Web/API/WebSocket/onopen"><code>onopen</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

```js
// Crée une connexion WebSocket
const socket = new WebSocket("ws://localhost:8080");

// La connexion est ouverte
socket.addEventListener("open", (event) => {
  socket.send("Coucou serveur !");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket : évènement `close`](/fr/docs/Web/API/WebSocket/close_event)
- [WebSocket : évènement `error`](/fr/docs/Web/API/WebSocket/error_event)
- [WebSocket : évènement `message`](/fr/docs/Web/API/WebSocket/message_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
