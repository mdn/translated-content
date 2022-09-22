---
title: NotificationEvent.NotificationEvent()
slug: Web/API/NotificationEvent/NotificationEvent
---

{{APIRef("Web Notifications")}}

**`NotificationEvent()`** コンストラクターは、新しい {{domxref("NotificationEvent")}} オブジェクトを生成します。

## 構文

```
var myNotificationEvent = new NotificationEvent(type, NotificationEventInit);
```

### 引数

- `type`
  - : TBD
- `NotificationEventInit` {{optional_inline}}
  - : イベントが配信される通知として使用される {{domxref("Notification")}} オブジェクトを含む辞書オブジェクト。この仕様書の後の草稿では、このパラメータはオプションではありません。

## 例

```js
var n = new Notification('Hello');
var init = { notification: n };
var myNotificationEvent = new NotificationEvent(type, init);
```

## 仕様書

| 仕様書                                                                                                                                               | 状態                                     | 備考            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| {{SpecName('Web Notifications','#dom-notificationevent-notificationevent','NotificationEvent() constructor')}} | {{Spec2('Web Notifications')}} | Living standard |

## ブラウザーの互換性

{{Compat("api.NotificationEvent.NotificationEvent")}}
