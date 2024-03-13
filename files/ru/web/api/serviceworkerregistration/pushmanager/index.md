---
title: ServiceWorkerRegistration.pushManager
slug: Web/API/ServiceWorkerRegistration/pushManager
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

Свойство **`pushManager`** интерфейса {{domxref("ServiceWorkerRegistration")}} возвращает ссылку на интерфейс {{domxref("PushManager")}}, позволяющий управлять подписками на push-уведомления. Включает поддержку процедуры подписки, получения активной подписки, а также предоставляет доступ к статусу разрешений на push-уведомления.

## Синтаксис

```
myPushManager = ServiceWorker.pushManager
```

### Значение

Объект {{domxref("PushManager")}}.

## Примеры

```js
this.onpush = function (event) {
  console.log(event.data);
  // Отсюда можно записывать данные в IndexedDB, отправлять их в любое
  // открытое окно, отображать уведомление и т. д.
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then(function (serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function (pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // Детали push-подписки, требуемые сервером приложения,
        // теперь доступны, и могут быть отправлены, к примеру,
        // при помощи XMLHttpRequest.
      },
      function (error) {
        // При разработке это часто помогает отлавливать ошибки в консоли.
        // В продакшен-среде это также может быть полезно для отправки отчёта
        // об ошибках на сервер приложения.
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

- [Push API](/ru/docs/Web/API/Push_API)
