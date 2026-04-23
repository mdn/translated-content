---
title: "Window : évènement message"
short-title: message
slug: Web/API/Window/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement `message` est déclenché sur un objet {{DOMxRef("Window")}} lorsque la fenêtre reçoit un message, par exemple à partir d'un appel à {{DOMxRef("Window.postMessage()")}} depuis un autre contexte de navigation.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'événements.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MessageEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Propriétés de l'évènement

_Cette interface hérite également des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Les données envoyées par l'émetteur du message.
- {{DOMxRef("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant l'origine de l'émetteur du message.
- {{DOMxRef("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant un identifiant unique pour l'évènement.
- {{DOMxRef("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Un objet `MessageEventSource` (qui peut être un {{Glossary("WindowProxy")}}, {{DOMxRef("MessagePort")}}, ou {{DOMxRef("ServiceWorker")}}) représentant l'émetteur du message.
- {{DOMxRef("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Un tableau d'objets {{DOMxRef("MessagePort")}} représentant les ports associés au canal par lequel le message est envoyé (le cas échéant, par exemple, dans la messagerie de canal ou lors de l'envoi d'un message à un worker partagé).

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
