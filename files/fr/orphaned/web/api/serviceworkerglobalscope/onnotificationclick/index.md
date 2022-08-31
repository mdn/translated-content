---
title: ServiceWorkerGlobalScope.onnotificationclick
slug: orphaned/Web/API/ServiceWorkerGlobalScope/onnotificationclick
tags:
  - API
  - Experimental
  - Interface
  - Propriété
  - Reference
  - ServiceWorkerGlobalScope
  - onnotificationclick
translation_of: Web/API/ServiceWorkerGlobalScope/onnotificationclick
original_slug: Web/API/ServiceWorkerGlobalScope/onnotificationclick
---
{{APIRef("Service Workers API")}}

La propriété **`ServiceWorkerGlobalScope.onnotificationclick`** est un gestionnaire d'événements appelé chaque fois que l'événement {{Event("notificationclick")}} est envoyé sur l'objet {{domxref ("ServiceWorkerGlobalScope")}}, c'est-à-dire lorsqu'un utilisateur clique sur une notification affichée générée par {{domxref("ServiceWorkerRegistration.showNotification()")}}.

Les notifications créées sur le thread principal ou dans un worker qui ne sont pas des service worker utilisant le constructeur {{domxref ("Notification.Notification", "Notification()")}} recevront à la place un événement {{Event("click")}} sur l'objet `Notification` lui-même.

> **Note :** Essayer de créer une notification dans le {{domxref ("ServiceWorkerGlobalScope")}} en utilisant le constructeur {{domxref ("Notification.Notification", "Notification()")}} générera une erreur.

## Syntaxe

```js
ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... }
ServiceWorkerGlobalScope.onnotificationclick = (NotificationEvent) => { ... }
```

## Exemple

```js
self.onnotificationclick = (event) => {
  console.log('On notification click: ', event.notification.tag)
  event.notification.close()

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: 'window'
      })
      .then((clientList) => {
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i]
          if (client.url == '/' && 'focus' in client) return client.focus()
        }
        if (clients.openWindow) return clients.openWindow('/')
      })
  )
}
```

## Spécifications

| Spécification                                                                                                                                    | État                                     | Commentaire                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Web Notifications','#dom-serviceworkerglobalscope-onnotificationclick','onnotificationclick')}} | {{Spec2('Web Notifications')}} | Définition initiale. Cette propriété est spécifiée dans {{domxref ('Notifications_API')}} même si elle fait partie de {{domxref ('ServiceWorkerGlobalScope')}}. |

## Compatibilité des navigateurs

{{Compat("api.ServiceWorkerGlobalScope.onnotificationclick")}}
