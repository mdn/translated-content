---
title: Notification.permission
slug: Web/API/notification/permission
tags:
  - API
  - API Notifications
  - Notification
  - Notifications
  - Propriété
  - Reference
translation_of: Web/API/Notification/permission
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

La propriété en lecture seule **`permission`** de l'interface {{domxref ("Notification")}} indique l'autorisation actuelle accordée par l'utilisateur à l'origine actuelle pour afficher des notifications.

## Syntaxe

    Notification.permission

### Valeur

Une {{domxref("DOMString")}} représentant l'autorisation actuelle. La valeur peut être:

- `granted`: L'utilisateur a explicitement accordé l'autorisation à l'origine actuelle d'afficher les notifications système.
- `denied`: L'utilisateur a explicitement refusé l'autorisation pour l'origine actuelle d'afficher les notifications système.
- `default`: La décision de l'utilisateur est inconnue; dans ce cas, l'application agira comme si l'autorisation était `denied`.

## Exemples

L'extrait suivant peut être utilisé si vous souhaitez d'abord vérifier si les notifications sont prises en charge, puis vérifier si l'autorisation a été accordée pour l'origine actuelle pour envoyer des notifications, puis demander l'autorisation si nécessaire, avant d'envoyer une notification.

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification')
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    const notification = new Notification('Hi there!')
  }

  // Otherwise, we need to ask the user for permission
  else if (
    Notification.permission !== 'denied' ||
    Notification.permission === 'default'
  ) {
    Notification.requestPermission((permission) => {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        const notification = new Notification('Hi there!')
      }
    })
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

## Spécifications

| Spécification                                                                                            | État                                     | Commentaire     |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName("Web Notifications","#dom-notification-permission","permission")}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilité des navigateurs

{{Compat("api.Notification.permission")}}

## Voir également

- [API de notifications](/docs/Web/API/Notifications_API)
- [Utilisation de l'API Notifications](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Permissions d'API](/en-US/docs/Web/API/Permissions_API)
- [Utilisation des permissions d'API](/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API)
