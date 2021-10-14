---
title: ExtendableMessageEvent.origin
slug: Web/API/ExtendableMessageEvent/origin
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Property
  - Reference
  - Service Workers
  - origin
translation_of: Web/API/ExtendableMessageEvent/origin
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La propriété en lecture seule **origin** de l'interface {{domxref("ExtendableMessageEvent")}} retourne l'origine du  {{domxref("ServiceWorkerClient")}} qui a envoyé le message.

## Syntaxe

    var myOrigin = ExtendableMessageEventInstance.origin;

### Value

Une {{domxref("DOMString")}}.

## Exemples

Le code suivant est utilisé, dans un service worker, pour répondre à un message push en envoyant les données reçues par le  [`PushMessageData`](/fr/docs/Web/API/PushMessageData) au contexte principale, via le [canal de messages](/en-US/docs/Web/API/Channel_Messaging_API). L'objet événement de `onmessage` sera un `ExtendableMessageEvent.`

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
  console.log(e.origin);
  port = e.ports[0];
}
```

## Spécifications

| Spécification                                                                                                                                    | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#extendablemessage-event-origin-attribute', 'ExtendableMessageEvent.origin')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.ExtendableMessageEvent.origin")}}

## Voir aussi

- [Utilisation des Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Exemple simple des service workers](https://github.com/mdn/sw-test)
- [Est-ce que les service workers sont prêts ?](https://jakearchibald.github.io/isserviceworkerready/)
- [Canal de messages](/en-US/docs/Web/API/Channel_Messaging_API)
