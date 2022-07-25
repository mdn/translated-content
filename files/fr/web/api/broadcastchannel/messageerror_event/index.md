---
title: 'BroadcastChannel: messageerror event'
slug: Web/API/BroadcastChannel/messageerror_event
page-type: web-api-event
tags:
  - Event
browser-compat: api.BroadcastChannel.messageerror_event
---
{{APIRef}}

L'événement `messageerror` est déclenché sur un objet {{domxref('BroadcastChannel')}} lorsqu'un message qui ne peut pas être déserialisé arrive dans le canal.

## Syntaxe

Utilisez le nom de l'événement dans les méthodes telles que {{domxref("EventTarget.addEventListener", "addEventListener()")}}, ou définissez un gestionnaire d'événement dans la propriété.

```js
addEventListener('messageerror', event => { })
onmessageerror = event => { }
```

## Type de l'événement

Un {{domxref("MessageEvent")}}. hérite de {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Propriétés de l'événement

_En plus des propriétés listées ci-dessous, les propriétés de l'interface parent {{domxref("Event")}} sont accessibles._

- {{domxref("MessageEvent.data", "data")}} {{readonlyInline}}
  - : Les données envoyées par l'émetteur du message.
- {{domxref("MessageEvent.origin", "origin")}} {{readonlyInline}}
  - : Une chaîne représentant l'origine de l'émetteur du message.
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{readonlyInline}}
  - : Une chaîne représentant l'ID unique pour l'événement.
- {{domxref("MessageEvent.source", "source")}} {{readonlyInline}}
  - : Un _message event source_, qui est soit un {{glossary("WindowProxy")}}, un {{domxref("MessagePort")}}, ou un objet {{domxref("ServiceWorker")}} représentant l'émetteur du message
- {{domxref("MessageEvent.ports", "ports")}} {{readonlyInline}}
  - : Un tableau d'objets {{domxref("MessagePort")}} représentant les connecteurs associés au canal du message en cours d'envoi lorsque c'est approprié, par exemple dans le canal de communication lors de l'envoi à un shared worker).

## Exemples

Ce code utilise [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener) pour écouter les messages et les erreurs:

```js
const canal = new BroadcastChannel('canal_exemple');

canal.addEventListener('message', event => {
  received.textContent = event.data;
});

canal.addEventListener('messageerror', event => {
  console.error(event);
});
```

Le même `onmessage` and `onmessageerror` gestionnaire de propriétés:

```js
const canal = new BroadcastChannel('canal_exemple');

canal.onmessage = event => {
  received.textContent = event.data;
};

canal.onmessageerror = event => {
  console.log(event);
};
```

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- Événements liés: [`message`](/fr/docs/Web/API/BroadcastChannel/message_event).
