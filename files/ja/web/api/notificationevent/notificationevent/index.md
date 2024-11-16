---
title: "NotificationEvent: NotificationEvent() コンストラクター"
short-title: NotificationEvent()
slug: Web/API/NotificationEvent/NotificationEvent
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

**`NotificationEvent()`** コンストラクターは、新しい {{domxref("NotificationEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new NotificationEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前の文字列。
    大文字と小文字が区別され、ブラウザーでは `notificationclick` または `notificationclose` に設定します。
- `options`
  - : オブジェクトで、_{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `notification`
      - : イベントが配信される際に通知として使用する {{domxref("Notification")}} オブジェクト。
    - `action` {{optional_inline}}
      - : 通知に関連付けられたアクション。既定では `""` です。

### 返値

新しい {{domxref("NotificationEvent()")}} オブジェクトです。

## 例

```js
const n = new Notification("Hello");
const myNotificationEvent = new NotificationEvent(type, { notification: n });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
