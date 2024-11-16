---
title: "NotificationEvent: notification プロパティ"
short-title: notification
slug: Web/API/NotificationEvent/notification
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

**`notification`** は {{domxref("NotificationEvent")}} インターフェイスの読み取り専用プロパティで、クリックされてイベントを発行した {{domxref("Notification")}} のインスタンスを返します。 {{domxref("Notification")}} は `tag` や `data` 属性など、 Notification のインスタンス化時に設定された多くのプロパティへの読み取り専用アクセスを提供しており、あとで `notificationclick` イベントで使用するための情報を保存することができます。

## 返値

{{domxref("Notification")}} オブジェクト。

## 例

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click");

  // 通知にデータを添付することで、notificationclick ハンドラーで
  // 処理することができる
  console.log(`通知タグ: ${event.notification.tag}`);
  console.log(`通知データ: ${event.notification.data}`);
  event.notification.close();

  // これは、すでに開いているかどうかを調べて、開いている場合は
  // フォーカスする
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
