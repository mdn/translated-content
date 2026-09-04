---
title: "Window : évènement message"
short-title: message
slug: Web/API/Window/message_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

L'évènement `message` est déclenché sur un objet {{DOMxRef("Window")}} lorsque la fenêtre reçoit un message, par exemple à partir d'un appel à {{DOMxRef("Window.postMessage()")}} depuis un autre contexte de navigation.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MessageEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Exemples

Supposons qu'un script envoie un message à un contexte de navigation différent, tel qu'un autre {{HTMLElement("iframe")}}, en utilisant un code comme celui-ci&nbsp;:

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://exemple.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("bonjour", targetOrigin);
});
```

Le récepteur peut écouter le message en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} avec un code comme celui-ci&nbsp;:

```js
window.addEventListener("message", (event) => {
  console.log(`Message reçu : ${event.data}`);
});
```

Alternativement l'écouteur peut utiliser la propriété du gestionnaire d'évènements `onmessage`&nbsp;:

```js
window.onmessage = (event) => {
  console.log(`Message reçu : ${event.data}`);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènement associé&nbsp;: {{DOMxRef("Window.messageerror_event", "messageerror")}}
- La propriété {{DOMxRef("Window.postMessage()")}}
