---
title: "Window: message event"
slug: Web/API/Window/message_event
---

{{APIRef}}

L'événement `message` est déclenché sur un objet {{domxref('Window')}} lorsque la fenêtre reçoit un message, par exemple d'un appel a [`Window.postMessage()`](/fr/docs/Web/API/Window/postMessage) depuis un autre contexte de navigation.

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
        <code
          ><a href="/fr/docs/Web/API/WindowEventHandlers/onmessage"
            >onmessage</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Supposons qu'un script envoie un message à un contexte de navigation différent, tel qu'un autre [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), en utilisant un code comme celui-ci:

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://exemple.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("bonjour", targetOrigin);
});
```

Le récepteur peut écouter le message en utilisant [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) avec un code comme celui-ci:

```js
window.addEventListener("message", (event) => {
  console.log(`Message reçu: ${event.data}`);
});
```

Alternativement l'écouteur peut utiliser la propriété du gestionnaire d'événements [`onmessage`](/fr/docs/Web/API/WindowEventHandlers/onmessage):

```js
window.onmessage = (event) => {
  console.log(`Message reçu: ${event.data}`);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Événements liés: [`messageerror`](/fr/docs/Web/API/Window/messageerror_event).
- [`Window.postMessage()`](/fr/docs/Web/API/Window/postMessage).
