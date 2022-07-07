---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Interface
  - Reference
  - Service Workers
translation_of: Web/API/ExtendableMessageEvent
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

L'interface **`ExtendableMessageEvent`** de {{domxref("ServiceWorker_API", "ServiceWorker API")}} représentes un objet d'évenement qu'un évènement {{event("message_(ServiceWorker)","message")}} lance pour un service worker (quand un canal de message est reçu sur le {{domxref("ServiceWorkerGlobalScope")}} depuis un autre context) — étends la durée de vie de ces évènements.

Cette interface hérite de l'interface {{domxref("ExtendableEvent")}}.

## Constructeur

- {{domxref("ExtendableMessageEvent.ExtendableMessageEvent()")}}
  - : Crée une nouvelle instance de l'objet `ExtendableMessageEvent`.

## Propriétés

_Hérite des propriétés de son parent,_ _{{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableMessageEvent.data")}} {{readonlyinline}}
  - : Retourne les données de l'évenements. Il peut être de n'importe quel type.
- {{domxref("ExtendableMessageEvent.origin")}} {{readonlyinline}}
  - : Retourne l'origine du {{domxref("ServiceWorkerClient")}} qui envoie le message.
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{readonlyinline}}
  - : Représente, dans un [server-sent events](en-US/docs/Server-sent_events/Using_server-sent_events), le dernier ID de l'évenement source.
- {{domxref("ExtendableMessageEvent.source")}} {{readonlyinline}}
  - : Retourne une référence vers le service worker qui envoie le message.
- {{domxref("ExtendableMessageEvent.ports")}} {{readonlyinline}}
  - : Retourne un tableau contenant l'objet {{domxref("MessagePort")}} représentant les ports associés au canal de messagerie.

## Méthodes

_Hérite des méthodesde son parent, {{domxref("ExtendableEvent")}}_.

## Exemples

Le code suivant est utilisé dans un service worker pour répondre à un message push en envoyant les données reçues via  {{domxref("PushMessageData")}} au contexte principale via un [channel message](/en-US/docs/Web/API/Channel_Messaging_API), l'objet d'évènement du `onmessage` sera un `ExtendableMessageEvent`.

```js
var port;

self.addEventListener('push', function(e) {
  var obj = e.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});

self.onmessage = function(e) {
  console.log(e);
  port = e.ports[0];
}
```

## Spécifications

| Spécification                                                                                                                    | Statut                               | Commentaireaire      |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#extendablemessage-event-interface', 'ExtendableMessageEvent')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.ExtendableMessageEvent")}}

## Voir aussi

- [Utiliser les Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Exemple simple de service workers](https://github.com/mdn/sw-test)
- [Les serviceWorker sont-ils prêts?](https://jakearchibald.github.io/isserviceworkerready/)
- [Cannal de Messagerie](/en-US/docs/Web/API/Channel_Messaging_API)
