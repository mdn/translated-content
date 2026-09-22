---
title: "Window : évènement messageerror"
short-title: messageerror
slug: Web/API/Window/messageerror_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

L'évènement `messageerror` est déclenché sur un objet {{DOMxRef("Window")}} lorsqu'il reçoit un message qui ne peut pas être désérialisé.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MessageEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

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
