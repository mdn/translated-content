---
title: "Notification: show イベント"
slug: Web/API/Notification/show_event
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`show`** は {{domxref("Notification")}} インターフェイスのイベントで、 {{domxref("Notification")}} が表示されるときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使うか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('show', (event) => { });

onshow = (event) => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Notification")}}
- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
