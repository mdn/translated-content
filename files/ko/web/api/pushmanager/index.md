---
title: PushManager
slug: Web/API/PushManager
---

{{ApiRef("Push API")}}

[Push API](/ko/docs/Web/API/Push_API)의 **`PushManager`** 인터페이스는 서드파티 서버에서 알림을 수신하거나, URL에 푸시 알림을 요청하는 방법을 제공합니다.

`PushManager`는 {{domxref("ServiceWorkerRegistration.pushManager")}} 속성으로 접근할 수 있습니다.

## 속성

- {{domxref("PushManager.supportedContentEncodings")}}
  - : 푸시 메시지의 페이로드를 암호화할 때 지원하는 콘텐츠 인코딩의 목록을 반환합니다.

## 메서드

- {{domxref("PushManager.getSubscription()")}}
  - : 기존의 푸시 구독을 가져옵니다. 해당 구독에 대한 상세 정보를 담은 {{domxref("PushSubscription")}} 객체를 {{jsxref("Promise")}}로 반환합니다. 구독이 존재하지 않으면 프로미스는 `null`로 이행합니다.
- {{domxref("PushManager.permissionState()")}}
  - : PushManager의 허가 상태로 이행하는 {{jsxref("Promise")}}를 반환합니다. 상태는 `'granted'`, `'denied'`, `'prompt'` 중 하나입니다.
- {{domxref("PushManager.subscribe()")}}
  - : 푸시 서비스에 구독합니다. 해당 구독에 대한 상세 정보를 담은 {{domxref("PushSubscription")}} 객체를 {{jsxref("Promise")}}로 반환합니다. 현재 서비스 워커에 이전 구독이 존재하지 않으면 새로운 푸시 구독을 생성합니다.

### Deprecated methods

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to the `PushPermissionStatus` of the requesting webapp, which will be one of `granted`, `denied`, or `default`. Replaced by {{domxref("PushManager.permissionState()")}}.
- {{domxref("PushManager.register()")}} {{deprecated_inline}}
  - : Subscribes to a push subscription. Replaced by {{domxref("PushManager.subscribe()")}}.
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}}
  - : Retrieves existing push subscriptions. Replaced by {{domxref("PushManager.getSubscription()")}}.
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}}
  - : Unregisters and deletes a specified subscription endpoint. In the updated API, a subscription is unregistered by calling the {{domxref("PushSubscription.unsubscribe()")}} method.

## 예제

```js
this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Push API](/ko/docs/Web/API/Push_API)
- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
