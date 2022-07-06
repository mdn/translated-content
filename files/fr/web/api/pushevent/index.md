---
title: PushEvent
slug: Web/API/PushEvent
tags:
  - API
  - ExtendableEvent
  - Interface
  - Push
  - Push API
  - Reference
  - Service Workers
  - Workers
  - hors-ligne
translation_of: Web/API/PushEvent
---
{{APIRef("Push API")}}{{SeeCompatTable()}}

L'interface **`PushEvent`** de l'[API Push](/en-US/docs/Web/API/Push_API) représente un message Push qui a été reçu. Cet événement est envoyé au [scope global](/fr/docs/Web/API/ServiceWorkerGlobalScope) d'un {{domxref("ServiceWorker")}}. Il contient les informations transmises de l'application serveur vers un {{domxref("PushSubscription")}}.

## Constructeur

- {{domxref("PushEvent.PushEvent()")}}
  - : Créer un nouvel objet `PushEvent`.

## Propriétés

_Hérite des propriétés de son parent, {{domxref("ExtendableEvent")}}. Propriétés additionnelles:_

- {{domxref("PushEvent.data")}} {{readonlyinline}}
  - : Retourne une référence à un objet {{domxref("PushMessageData")}} contenant les données transmises au {{domxref("PushSubscription")}}.

## Méthodes

_Hérite des méthodes de son parent, {{domxref("ExtendableEvent")}}_.

## Exemples

L'exemple suivant prends les données du `PushEvent` et les affiche sur tous les clients du service worker.

```js
self.addEventListener('push', function(event) {
  if (!(self.Notification && self.notification.permission === 'granted')) {
    return;
  }

  var data = {};
  if (event.data) {
    data = event.data.json();
  }
  var title = data.title || "Something Has Happened";
  var message = data.message || "Here's something you might want to check out.";
  var icon = "images/new-notification.png";

  var notification = new Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });

  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
  });
});
```

## Spécifications

| Spécification                                                            | Statut                       | Commentaire        |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName('Push API','#the-push-event','PushEvent')}} | {{Spec2('Push API')}} | Définition intiale |

## Compatibilité des navigateurs

{{Compat("api.PushEvent")}}

## Voir aussi

- [Utiliser l'API Push](/fr/docs/Web/API/Push_API/Using_the_Push_API)
- [API Push](/fr/docs/Web/API/Push_API)
- [API Service Worker](/fr/docs/Web/API/Service_Worker_API)
