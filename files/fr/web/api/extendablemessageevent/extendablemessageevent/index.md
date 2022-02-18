---
title: ExtendableMessageEvent.ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
tags:
  - API
  - Constructor
  - Experimental
  - Reference
  - Service Workers
translation_of: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
---
{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

Le constructeur **`Extendable.MessageEvent()`** crée une nouvelle instance d'un {{domxref("ExtendableMessageEvent")}}.

## Syntaxe

    var myEME = new ExtendableMessageEvent(type, init);

### Paramètres

- type
  - : Un {{domxref("DOMString")}} qui définie le type de message créé.
- init {{optional_inline}}

  - : Un objet d'initialisation, qui doit contenir les paramètres suivant:

    - `data`: Les données de l'évènement — peut être de n'importe quel type.
    - `origin`: Une {{domxref("DOMString")}} qui définie l'origine de l'environnement du service worker correspondant.
    - `lastEventId`: Une {{domxref("DOMString")}} qui définie le dernier l'id du dernier évènement de l'évènement source.
    - `source`: Le {{domxref("Client")}}, {{domxref("ServiceWorker")}} ou {{domxref("MessagePort")}} qui a envoyé un message.
    - `ports`: Un tableau contenant les objets  {{domxref("MessagePort")}} connectés au canal d'envoie des messages.

## Exemples

```js
var init = {
             data : 'Message de bienvenue',
             source : MessagePortReference,
             ports : MessagePortListReference
           }

var myEME = new ExtendableMessageEvent('message', init);
```

## Spécifications

| Spécification                                                                                                                    | Statut                               | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#extendablemessage-event-interface', 'ExtendableMessageEvent')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.ExtendableMessageEvent.ExtendableMessageEvent")}}

## Voir aussi

- [Utiliser les Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Exemple simple de service workers](https://github.com/mdn/sw-test)
- [Les Services Workers sont-ils prêts ?](https://jakearchibald.github.io/isserviceworkerready/)
- [Canal de messages](/en-US/docs/Web/API/Channel_Messaging_API)
