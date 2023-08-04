---
title: NotificationAction
slug: orphaned/Web/API/NotificationAction
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

A interface `NotificationAction` de [Notifications API](/pt-BR/docs/Web/API/Notifications_API) é usada para representar botões de ação que o usuário pode clicar para intergair com as notificações. As aparências e as funcionalidades específicas dos botões variam entre plataformas, mas geralmente providenciam maneiras de mostrar ações assincronamente ao usuário, em forma de notificações.

## Propriedades

### Propriedades de instância

Essas propriedades estão disponíveis somente para instâncias do objeto `Notification`.

- {{domxref("NotificationAction.action")}} {{readonlyinline}}
  - : O nome da ação, que pode ser usado para identificar a ação clicada, similiar a [input names](/pt-BR/docs/Web/API/Element/name).
- {{domxref("NotificationAction.title")}} {{readonlyinline}}
  - : Uma string descrevendo a ação que sera mosrada ao usuário.
- {{domxref("NotificationAction.icon")}} {{readonlyinline}}
  - : O URL da imagem usado para representar a notificação quando não houver espaço suficiente para mostrar a propria notificação.

## Exemplo

Notifications can fire {{Event("notificationclick")}} events on the {{domxref("ServiceWorkerGlobalScope")}}.

Here a service worker shows a notification with a single "Archive" action, allowing users to perform this common task from the notification without having to open the website. The user can also click the main body of the notification to open their inbox instead.

```js
self.registration.showNotification("New mail from Alice", {
  actions: [
    {
      action: 'archive',
      title: 'Archive'
    }
  ]
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'archive') {
    // Archive action was clicked
    archiveEmail();
  } else {
    // Main body of notification was clicked
    clients.openWindow('/inbox');
  }
}, false);
```

## Specifications

| Specification                                | Status                                   | Comment         |
| -------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications')}} | {{Spec2('Web Notifications')}} | Living standard |

## Compatibilidade com navegadores

{{Compat("api.Notification")}}

## See also

- [Using the Notifications API](/pt-BR/docs/Web/API/Notifications_API/Using_the_Notifications_API)
