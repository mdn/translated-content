---
title: 'Notification: error イベント'
slug: Web/API/Notification/error_event
original_slug: Web/API/Notification/onerror
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`error`** イベントは {{domxref("Notification")}} インターフェイスのイベントで、 {{domxref("Notification")}} が失敗したとき (多くの場合は通知の表示が阻止されたというエラーの場合) に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使うか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('error', event => { });

onerror = event => { };
```

## イベント型

一般的な {{domxref("Event")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Notification")}}
- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
