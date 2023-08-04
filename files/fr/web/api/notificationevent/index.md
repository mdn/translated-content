---
title: NotificationEvent
slug: Web/API/NotificationEvent
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

L'interface **`NotificationEvent`** représente un évènement de clic pour une notification et qui est dispatché vers le {{domxref("ServiceWorkerGlobalScope")}} d'un {{domxref("ServiceWorker")}}.

Cette interface hérite de l'interface {{domxref("ExtendableEvent")}}.

## Constructeur

- {{domxref("NotificationEvent.NotificationEvent()")}}
  - : Cette méthode permet de créer un nouvel objet `NotificationEvent`.

## Propriétés

_Cet objet hérite de propriétés grâce à son ancêtre : {{domxref("Event")}}_.

- {{domxref("NotificationEvent.notification")}} {{readonlyInline}}
  - : Cette propriété renvoie un objet {{domxref("Notification")}} représentant la notification sur laquelle on a cliqué pour déclencher l'évènement.
- {{domxref("NotificationEvent.action")}} {{readonlyinline}}
  - : Cette propriété renvoie une chaîne de caractères identifiant le bouton de la notification sur lequel l'utilisateur a cliqué. Cette valeur sera {{jsxref("undefined")}} si l'utilisateur a cliqué autre part que sur le bouton pour la notification ou si la notification ne possède pas de bouton.

## Méthodes

_Cet objet hérite de méthodes grâce à son parent_ _{{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : Cette méthode allonge la durée de vie de l'évènement et indique qu'une tâche est toujours en cours.

## Exemples

```js
self.addEventListener("notificationclick", function (event) {
  console.log("Au clic sur la notification : ", event.notification.tag);
  event.notification.close();

  // On regarde ici si elle est déjà ouverte
  // et si le focus est dessus
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
