---
title: "NotificationEvent: action プロパティ"
short-title: action
slug: Web/API/NotificationEvent/action
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

**`action`** は {{domxref("NotificationEvent")}} インターフェイスの読み取り専用プロパティで、ユーザーがクリックした通知ボタンの文字列 ID を返します。ユーザーがアクションボタン以外の場所で通知をクリックした場合、または通知にボタンがない場合、この値は空の文字列を返します。通知 ID は、アクション配列属性を介した通知の作成中に設定され、通知が置き換えられない限り変更することはできません。

## 返値

文字列です。

## 例

```js
self.registration.showNotification("New articles available", {
  actions: [{ action: "get", title: "Get now." }],
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();
    if (event.action === "get") {
      synchronizeReader();
    } else {
      clients.openWindow("/reader");
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
