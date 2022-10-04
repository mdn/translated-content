---
title: NotificationEvent.action
slug: Web/API/NotificationEvent/action
---

{{APIRef("Web Notifications")}}

ユーザーがクリックした通知ボタンの文字列 ID を返します。ユーザーがアクションボタン以外の場所で通知をクリックした場合、または通知にボタンがない場合、この値は空の文字列を返します。通知 ID は、アクション配列属性を介した通知の作成中に設定され、通知が置き換えられない限り変更することはできません。

## 返値

{{domxref("DOMString")}} オブジェクト。

## 例

```js
self.registration.showNotification("New articles available", {
  actions: [{action: "get", title: "Get now."}]
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'get') {
    synchronizeReader();
  } else {
    clients.openWindow("/reader");
  }
}, false);
```

## 仕様書

| 仕様書                                                                                       | 状態                                     | 備考            |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notification-actions','action')}} | {{Spec2('Web Notifications')}} | Living standard |

## ブラウザーの互換性

{{Compat("api.NotificationEvent.action")}}
