---
title: NotificationEvent.notification
slug: Web/API/NotificationEvent/notification
---

{{APIRef("Web Notifications")}}

`notification` は {{domxref("NotificationEvent")}} インターフェイスの読取専用プロパティで、クリックされてイベントを発行した {{domxref("Notification")}} のインスタンスを返します。 {{domxref("Notification")}} は `tag` や `data` 属性など、 Notification のインスタンス化時に設定された多くのプロパティへの読み取り専用アクセスを提供しており、あとで `notificationclick` イベントで使用するための情報を保存することができます。

## 返値

{{domxref("Notification")}} オブジェクト。

## 例

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click');

  // Data can be attached to the notification so that you
  // can process it in the notificationclick handler.
  console.log('Notification Tag:', event.notification.tag);
  console.log('Notification Data:', event.notification.data);
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
});
```

## 仕様書

| 仕様書                                                                                                               | 状態                                     | 備考            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notificationevent-notification','notification')}} | {{Spec2('Web Notifications')}} | Living standard |

## ブラウザーの互換性

{{Compat("api.NotificationEvent.notification")}}
