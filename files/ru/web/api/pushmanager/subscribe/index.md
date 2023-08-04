---
title: PushManager.subscribe()
slug: Web/API/PushManager/subscribe
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

Метод **`subscribe()`** интерфейса {{domxref("PushManager")}} позволяет осуществлять подписку на push-уведомления.

Возвращает {{jsxref("Promise")}}, который разрешается в объект {{domxref("PushSubscription")}}, содержащий детали push-подписки. Новая push-подписка создаётся в случае, если сервис-воркер не имеет существующей подписки.

## Синтаксис

```
PushManager.subscribe(options).then(function(pushSubscription) { ... } );
```

### Свойства

- `options {{optional_inline}}`

  - : Объект, содержащий необязательные параметры конфигурации. Может иметь следующие свойства:

    - `userVisibleOnly`: Булевое значение, указывающее на то, будет ли возвращаемая подписка использоваться для сообщений, чей эффект может быть видим для пользователя.
    - `applicationServerKey`: открытый ключ ECDSA P-256, закодированный в Base64 {{domxref ('DOMString')}} или {{domxref ('ArrayBuffer')}}}, содержащий , который push-сервер будет использовать для аутентификации сервера приложений. Если указано, все сообщения с сервера вашего приложения должны использовать схему аутентификации VAPID и включать JWT, подписанный соответствующим закрытым ключом. Этот ключ **_НЕ_ **тот же ключ ECDH, который вы используете для шифрования данных. Для получения дополнительной информации см. «[Using VAPID with WebPush](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)».

    > **Примечание:**Свойство, требуемое некоторыми браузерами, например Chrome и Edge.

### Возвращает

{{jsxref("Promise")}} который разрешается в объект {{domxref("PushSubscription")}}.

## Пример

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

- [Using the Push API](/ru/docs/Web/API/Push_API/Using_the_Push_API)
- [Push Notifications on the Open Web](http://updates.html5rocks.com/2015/03/push-notificatons-on-the-open-web), Matt Gaunt
