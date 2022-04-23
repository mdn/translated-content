---
title: ExtendableMessageEvent.lastEventId
slug: Web/API/ExtendableMessageEvent/lastEventId
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Property
  - Reference
  - Service Workers
  - lastEventID
translation_of: Web/API/ExtendableMessageEvent/lastEventId
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La propriété en lecture seule **`lastEventID`** de l'interface {{domxref("ExtendableMessageEvent")}} représente, dans [les évenements envoyés par lle serveur](/en-US/docs/Web/API/en-US/docs/Server-sent_events/Using_server-sent_events), le dernier ID de l'évenement source.

## Syntaxe

    var myLastEventId = ExtendableMessageEventInstance.lastEventId;

### Value

Une {{domxref("DOMString")}}.

## Exemples

Le code suivant est utilisé, dans un service worker, pour répondre à un message push en envoyant les données reçues par le  {{domxref("PushMessageData")}} au contexte principale, via le [canal de messages](/en-US/docs/Web/API/Channel_Messaging_API). L'objet événement de `onmessage` sera un `ExtendableMessageEvent.`

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
  console.log(e.lastEventId);
  port = e.ports[0];
}
```

## Spécifications

| Spécification                                                                                                                                                    | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#extendablemessage-event-lasteventid-attribute', 'ExtendableMessageEvent.lastEventId')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.ExtendableMessageEvent.lastEventId")}}

## Voir aussi

- [Utilisation des Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Exemple simple des service workers](https://github.com/mdn/sw-test)
- [Est-ce que les service workers sont prêts&nbsp;?](https://jakearchibald.github.io/isserviceworkerready/)
- [Canal de messages](/en-US/docs/Web/API/Channel_Messaging_API)
