---
title: 'Notification: close イベント'
slug: Web/API/Notification/close_event
original_slug: Web/API/Notification/onclose
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`close`** は {{domxref("Notification")}} インターフェイスのイベントで、 {{domxref("Notification")}} が閉じるときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使うか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('close', event => { });

onclose = event => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Notification")}}
- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
