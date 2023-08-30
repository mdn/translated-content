---
title: "BroadcastChannel : évènement messageerror"
slug: Web/API/BroadcastChannel/messageerror_event
l10n:
  sourceCommit: c80b15ae2fe8b65c1a68264df72323986b2750b2
---

{{APIRef}}

L'évènement `messageerror` est déclenché sur un objet [`BroadcastChannel`](/fr/docs/Web/API/BroadcastChannel) lorsqu'un message qui n'a pas pu être désérialisé arrive dans le canal.

## Syntaxe

Utilisez le nom de l'évènement dans les méthodes telles que [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), ou définissez un gestionnaire d'évènements dans la propriété.

```js
addEventListener("messageerror", (event) => {});
onmessageerror = (event) => {};
```

## Type de l'évènement

Un [`MessageEvent`](/fr/docs/Web/API/MessageEvent). Hérite de l'interface [`Event`](/fr/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Propriétés de l'évènement

_En plus des propriétés listées ci-dessous, les propriétés de l'interface parente [`Event`](/fr/docs/Web/API/Event) sont accessibles._

- [`data`](/fr/docs/Web/API/MessageEvent/data) {{readonlyInline}}
  - : Les données envoyées par l'émetteur du message.
- [`origin`](/fr/docs/Web/API/MessageEvent/origin) {{readonlyInline}}
  - : Une chaîne représentant l'origine de l'émetteur du message.
- [`lastEventId`](/fr/docs/Web/API/MessageEvent/lastEventId){{readonlyInline}}
  - : Une chaîne représentant l'identifiant unique pour l'évènement.
- [`source`](/fr/docs/Web/API/MessageEvent/source) {{readonlyInline}}
  - : Un `MessageEventSource`, qui peut être soit un [`WindowProxy`](/fr/docs/Glossary/WindowProxy), un [`MessagePort`](/fr/docs/Web/API/MessagePort), ou un objet [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker) représentant l'émetteur du message.
- [`ports`](/fr/docs/Web/API/MessageEvent/ports) {{readonlyInline}}
  - : Un tableau d'objets [`MessagePort`](/fr/docs/Web/API/MessagePort) représentant les ports associés au canal par lequel le message est envoyé (lorsque c'est approprié, par exemple, dans le canal de communication ou lorsqu'un message est envoyé à un <i lang="en">worker</i> partagé).

## Exemples

Ce code utilise [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener) pour écouter les messages et les erreurs&nbsp;:

```js
const canal = new BroadcastChannel("canal_exemple");

canal.addEventListener("message", (event) => {
  received.textContent = event.data;
});

canal.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Voici un exemple similaire qui utilise les gestionnaires d'évènements `onmessage` et `onmessageerror`&nbsp;:

```js
const canal = new BroadcastChannel("canal_exemple");

canal.onmessage = (event) => {
  received.textContent = event.data;
};

canal.onmessageerror = (event) => {
  console.log(event);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènements liés&nbsp;: [`message`](/fr/docs/Web/API/BroadcastChannel/message_event).
