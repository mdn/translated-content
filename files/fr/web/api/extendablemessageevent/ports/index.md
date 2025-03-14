---
title: ExtendableMessageEvent.ports
slug: Web/API/ExtendableMessageEvent/ports
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La propriété en lecture seule **ports** de l'interface {{domxref("ExtendableMessageEvent")}} retourne un tableau contenant les objects {{domxref("MessagePort")}} représentants les ports associés aux canaux de messages associés (le canal du message est envoyé).

## Syntaxe

```js
var myPorts = ExtendableMessageEventInstance.ports;
```

### Value

Un tableau de {{domxref("MessagePort")}}.

## Exemples

Le code suivant est utilisé, dans un service worker, pour répondre à un message push en envoyant les données reçues par le [`PushMessageData`](/fr/docs/Web/API/PushMessageData) au contexte principale, via le [canal de messages](/fr/docs/Web/API/Channel_Messaging_API). L'objet événement de `onmessage` sera un `ExtendableMessageEvent.`

```js
var port;

self.addEventListener("push", function (e) {
  var obj = e.data.json();

  if (obj.action === "subscribe" || obj.action === "unsubscribe") {
    port.postMessage(obj);
  } else if (obj.action === "init" || obj.action === "chatMsg") {
    port.postMessage(obj);
  }
});

self.onmessage = function (e) {
  port = e.ports[0];
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utilisation des Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Exemple simple des service workers](https://github.com/mdn/sw-test)
- [Est-ce que les service workers sont prêts&nbsp;?](https://jakearchibald.github.io/isserviceworkerready/)
- [Canal de messages](/fr/docs/Web/API/Channel_Messaging_API)
