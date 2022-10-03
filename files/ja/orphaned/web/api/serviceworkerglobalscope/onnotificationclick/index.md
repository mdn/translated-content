---
title: ServiceWorkerGlobalScope.onnotificationclick
slug: orphaned/Web/API/ServiceWorkerGlobalScope/onnotificationclick
original_slug: Web/API/ServiceWorkerGlobalScope/onnotificationclick
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

**ServiceWorkerGlobalScope.onnotificationclick** プロパティは、{{domxref("ServiceWorkerGlobalScope")}} オブジェクトで {{Event("notificationclick")}} イベントが送り出されるたびに呼び出されるイベントハンドラーです。つまり、ユーザーが {{domxref("ServiceWorkerRegistration.showNotification()")}} で生成された通知をクリックしたときです。

メインスレッド、または {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して Service Worker ではない Worker で生成された通知は、`Notification` オブジェクト自体で {{Event("click")}} イベントを代わりに受け取ります。

> **メモ:** {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して {{domxref("ServiceWorkerGlobalScope")}} 内で通知を生成しようとすると、エラーがスローされます。

## 構文

```js
ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... };
```

## 例

```js
self.onnotificationclick = function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
};
```

## 仕様

| 仕様                                                                                                                                             | ステータス                               | コメント                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Web Notifications','#dom-serviceworkerglobalscope-onnotificationclick','onnotificationclick')}} | {{Spec2('Web Notifications')}} | 初期定義。このプロパティは、{{domxref('ServiceWorkerGlobalScope')}} の一部だが {{domxref('Notifications_API')}} で定義されている。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.onnotificationclick")}}
