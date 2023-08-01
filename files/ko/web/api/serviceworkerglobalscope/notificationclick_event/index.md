---
title: "ServiceWorkerGlobalScope: notificationclick event"
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
---

{{APIRef}}

`notificationclick` 이벤트는 {{domxref("ServiceWorkerRegistration.showNotification()")}} 에 의해 발생한 시스템 notification 이 클릭되었음을 나타내기 위해 발생된다.

|               | No                                                                                     |
| ------------- | -------------------------------------------------------------------------------------- |
| Cancelable    | No                                                                                     |
| Interface     | {{domxref("NotificationEvent")}}                                                       |
| Event handler | [`onnotificationclick`](/ko/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick) |

## Examples

[`addEventListener`](/ko/docs/Web/API/EventTarget/addEventListener) 메소드 내에서 `notificationclick` 이벤트를 사용할 수 있다:

```js
self.addEventListener("notificationclick", function (event) {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
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

또는 [`onnotificationclick`](/ko/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick) 이벤트 핸들러 속성을 사용할 수 있다:

```js
self.onnotificationclick = function (event) {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
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
};
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [Notifications API](/ko/docs/Web/API/Notifications_API)
