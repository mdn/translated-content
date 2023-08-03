---
title: PushManager
slug: Web/API/PushManager
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

Интерфейс `PushManager` из [Push API](/ru/docs/Web/API/Push_API) предоставляет возможность получать уведомления от сторонних серверов, а также запрашивать URL для push уведомлений.

Этот интерфейс доступен через свойство {{domxref("ServiceWorkerRegistration.pushManager")}}.

> **Примечание:** Этот интерфейс заменил функциональность, предлагаемую устаревшим {{domxref("PushRegistrationManager")}}.

## Свойства

- {{domxref("PushManager.supportedContentEncodings")}}
  - : Возвращает массив со списком возможных алгоритмов кодирования, которые могут быть использованы для шифрования полезной нагрузки пуш-уведомления.

## Методы

- {{domxref("PushManager.subscribe()")}}
  - : Подписка на пуш сервис. Возвращает промис, который разрешается в {{domxref("PushSubscription")}} объект, содержащий детали новой push подписки.
- {{domxref("PushManager.getSubscription()")}}
  - : Извлекает существующую push подписку. Возвращает промис, который разрешается в {{domxref("PushSubscription")}} объект, содержащий детали существующей подписки.
- {{domxref("PushManager.permissionState()")}}
  - : Возвращает {{jsxref("Promise")}}, который разрешается в состояние доступа текущего {{domxref("PushManager")}}, которое может быть одним из `'granted'`, `'denied'`, или `'default'`.

### Устаревшие методы

- {{domxref("PushManager.hasPermission()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to the `PushPermissionStatus` of the requesting webapp, which will be one of `granted`, `denied`, or `default`. Replaced by {{domxref("PushManager.permissionState()")}}.
- {{domxref("PushManager.register()")}}
  - : Subscribes to a push subscription. Replaced by {{domxref("PushManager.subscribe()")}}.
- {{domxref("PushManager.registrations()")}}
  - : Retrieves existing push subscriptions. Replaced by {{domxref("PushManager.getSubscription()")}}.
- {{domxref("PushManager.unregister()")}}
  - : Unregisters and deletes a specified subscription endpoint. In the updated API, a subscription is can be unregistered via the {{domxref("PushSubscription.unsubscribe()")}} method.

## Пример

```js
this.onpush = function (event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then(function (serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function (pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      },
      function (error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      },
    );
  });
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Push API](/ru/docs/Web/API/Push_API/Using_the_Push_API)
- [Push сообщения в Open Web](http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web), Matt Gaunt
