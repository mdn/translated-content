---
title: onnotificationclose
slug: orphaned/Web/API/ServiceWorkerGlobalScope/onnotificationclose
original_slug: Web/API/ServiceWorkerGlobalScope/onnotificationclose
---

{{APIRef("Service Workers API")}}

**`ServiceWorkerGlobalScope.onnotificationclose`** プロパティは、{{domxref("ServiceWorkerGlobalScope")}} オブジェクトで {{Event("notificationclose")}} イベントが発行されるとき、つまり、{{domxref("ServiceWorkerRegistration.showNotification()")}} によって生成された表示されている通知をユーザーが閉じるたびに呼び出されるイベントハンドラーです。

メインスレッドや {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用した service worker ではない worker で生成された通知は、`Notification` オブジェクト自身の {{Event("close")}} イベントを受け取ります。

> **メモ:** {{domxref("Notification.Notification","Notification()")}} コンストラクターを使用して {{domxref("ServiceWorkerGlobalScope")}} 内で通知を生成しようとすると、エラーがスローされます。

## 構文

```
ServiceWorkerGlobalScope.onnotificationclose = function(NotificationEvent) { ... };
ServiceWorkerGlobalScope.addEventListener('notificationclose', function(NotificationEvent) { ... });
```

## 例

```js
// service worker 内。
self.onnotificationclose = function(event) {
  console.log('On notification close: ', event.notification.tag);
};
```

## 仕様

| 仕様                                                                                                                                             | ステータス                               | コメント                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Web Notifications','#dom-serviceworkerglobalscope-onnotificationclose','onnotificationclick')}} | {{Spec2('Web Notifications')}} | 初期定義。このプロパティは {{domxref('ServiceWorkerGlobalScope')}} の一部ですが、{{domxref('Notifications_API')}} イベントで定義されています。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.onnotificationclose")}}
