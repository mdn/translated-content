---
title: ExtendableMessageEvent.data
slug: Web/API/ExtendableMessageEvent/data
tags:
  - API
  - Experimental
  - Propriété
  - Reference
  - Service Workers
translation_of: Web/API/ExtendableMessageEvent/data
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La propriété **`data`** est une propriété en lecture seule rattachée à l'interface {{domxref("ExtendableMessageEvent")}} et qui permet d'accéder aux données de l'évènement. Il peut s'agir de n'importe quel type de donnée.

## Syntaxe

    var mesDonnees = ExtendableMessageEventInstance.data;

### Valeur

N'importe quel type de donnée.

## Exemples

Quand le code suivant est utilisé dans un service worker pour répondre à un message _push_ en envoyant les données reçues par {{domxref("PushMessageData")}} au contexte principal via un [message](/fr/docs/Web/API/Channel_Messaging_API), l'objet de l'évènement `onmessage` sera un `ExtendableMessageEvent`.

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
  console.log(e.data);
  port = e.ports[0];
}
```

## Spécifications

| Spécification                                                                                                                                | État                                 | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#extendablemessage-event-data-attribute', 'ExtendableMessageEvent.data')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.ExtendableMessageEvent.data")}}

## Voir aussi

- [Utiliser les _Service Workers_](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Exemple simple utilisant les _service workers_](https://github.com/mdn/sw-test)
- [État d'avancement de l'implémentation pour _ServiceWorker_ dans les navigateurs](https://jakearchibald.github.io/isserviceworkerready/)
- [Échange de messages entre les canaux](/fr/docs/Web/API/Channel_Messaging_API)
