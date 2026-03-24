---
title: "Window : évènement messageerror"
short-title: messageerror
slug: Web/API/Window/messageerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement `messageerror` est déclenché sur un objet {{DOMxRef("Window")}} lorsqu'il reçoit un message qui ne peut pas être désérialisé.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'événements.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
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

Écoutez `messageerror` en utilisant {{DOMxRef("EventTarget/addEventListener", "addEventListener()")}}&nbsp;:

```js
window.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Idem, mais en utilisant la propriété de gestionnaire d'évènements `onmessageerror`&nbsp;:

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

- La méthode {{DOMxRef("Window.postMessage()")}}
- Évènements associés&nbsp;: {{DOMxRef("Window/message_event", "message")}}.
