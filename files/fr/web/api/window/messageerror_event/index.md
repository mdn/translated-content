---
title: "Window: messageerror event"
slug: Web/API/Window/messageerror_event
---

{{APIRef}}

L'événement `messageerror` est déclenché sur un objet {{domxref('Window')}} lorsqu'il reçoit un message qui ne peut pas être désérialisé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bulles</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété de gestionnaire d'événements</th>
      <td>
        {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Écoutez `messageerror` en utilisant {{domxref("EventTarget/addEventListener", "addEventListener()")}} :

```js
window.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Idem, mais en utilisant la propriété de gestionnaire d'événements {{domxref("WindowEventHandlers/onmessageerror", "onmessageerror")}} :

```js
window.onmessageerror = (event) => {
  console.error(event);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Window.postMessage()")}}
- Événements liés: {{domxref("Window/message_event", "message")}}.
