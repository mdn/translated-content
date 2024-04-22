---
title: "WebSocket : évènement close"
slug: Web/API/WebSocket/close_event
---

{{APIRef}}

L'évènement `close` est déclenché lorsqu'une connexion avec une `WebSocket` est fermée.

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
        <a href="/fr/docs/Web/API/CloseEvent"><code>CloseEvent</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'évènement correspondante</th>
      <td>
        <a href="/fr/docs/Web/API/WebSocket/onclose"><code>onclose</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

On peut vouloir savoir lorsque la connexion a été fermée afin de mettre à jour l'interface utilisateur ou, éventuellement, pour sauvegarder des données à propos de la connexion. Soit une variable `socketExemple` qui fait référence à une connexion WebSocket ouverte, le fragment de code suivant gère la situation où la socket a été fermée :

```js
socketExemple.addEventListener("close", (event) => {
  console.log("La connexion a été fermée avec succès.");
});
```

On peut effectuer les mêmes actions avec la propriété de gestion d'évènement correspondante :

```js
socketExemple.onclose = function (event) {
  console.log("La connexion a été fermée avec succès.");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebSocket : évènement `error`](/fr/docs/Web/API/WebSocket/error_event)
- [WebSocket : évènement `message`](/fr/docs/Web/API/WebSocket/message_event)
- [WebSocket : évènement `open`](/fr/docs/Web/API/WebSocket/open_event)
- [Écrire des applications clientes WebSocket](/fr/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
