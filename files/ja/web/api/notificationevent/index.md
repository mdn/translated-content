---
title: NotificationEvent
slug: Web/API/NotificationEvent
---

{{APIRef("Web Notifications")}}

{{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} ハンドラーに渡される引数である `NotificationEvent` インターフェイスは、 {{domxref("ServiceWorker")}} の {{domxref("ServiceWorkerGlobalScope")}} で配信される通知クリックイベントを表します。

このインターフェイスは {{domxref("ExtendableEvent")}} インターフェイスを継承しています。

## コンストラクター

- {{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}
  - : 新しい `NotificationEvent` オブジェクトを作成します。

## プロパティ

_祖先である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("NotificationEvent.notification")}} {{readonlyInline}}
  - : イベントを発生させるためにクリックされた通知を表す {{domxref("Notification")}} オブジェクトを返します。
- {{domxref("NotificationEvent.action")}} {{readonlyinline}}
  - : ユーザーがクリックした通知ボタンの文字列 ID を返します。ユーザーがアクションボタン以外の場所で通知をクリックした場合、または通知にボタンがない場合、この値は空の文字列を返します。

## メソッド

_親の {{domxref("ExtendableEvent")}} からメソッドを継承しています。_

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : イベントの存続期間を延長します。作業が進行中であることをブラウザーに伝えます。

## 例

```js
self.addEventListener("notificationclick", function (event) {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // これは、現在のページが既に開いているかどうかを確認し、
  // そうならばフォーカスします
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.NotificationEvent")}}
