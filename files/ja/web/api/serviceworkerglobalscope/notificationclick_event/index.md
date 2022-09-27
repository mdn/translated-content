---
title: 'ServiceWorkerGlobalScope: notificationclick イベント'
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
---

{{APIRef}}

**`notificationclick`** イベントは、 {{domxref("ServiceWorkerRegistration.showNotification()")}} によって生み出されたシステム通知がクリックされたことを示すために発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("NotificationEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("ServiceWorkerGlobalScope.onpush", "onpush")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`notificationclick` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッド内で使用することができます。

```js
self.addEventListener('notificationclick', function(event) {
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
});
```

または、 {{domxref("ServiceWorkerGlobalScope/onnotificationclick", "onnotificationclick")}} イベントハンドラープロパティを使用してください。

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

## 仕様書

| 仕様書                                                                                                                   | 状態                         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| {{SpecName('Push API', '#extensions-to-the-serviceworkerglobalscope-interface', 'push')}} | {{Spec2('Push API')}} |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.push_event")}}

## 関連情報

- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)
- [Notifications API](/ja/docs/Web/API/Notifications_API)
