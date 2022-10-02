---
title: ServiceWorkerGlobalScope.onpush
slug: orphaned/Web/API/ServiceWorkerGlobalScope/onpush
original_slug: Web/API/ServiceWorkerGlobalScope/onpush
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerGlobalScope")}} インターフェイスの **`ServiceWorkerGlobalScope.onpush`** イベントは、Service Worker がプッシュサーバー経由でメッセージを受け取るたびに発火します。

## 構文

```
ServiceWorkerGlobalScope.onpush = function(PushEvent) { ... }
self.addEventListener('push', function(PushEvent) { ... })
```

## 例

次の例では、{{domxref("PushEvent")}} からデータを取得して、すべての Service Worker のクライアント上で表示しています。プッシュメッセージのデータペイロードは、イベントオブジェクトの `data` プロパティ（{{domxref("PushEvent.data")}} は {{domxref("PushMessageData")}} オブジェクトを含みます。）で利用できます。

```js
self.addEventListener('push', function(event) {
 if (!(self.Notification && self.Notification.permission === 'granted')) {
   return;
 }

 var data = {};
 if (event.data) {
   data = event.data.json();
 }
 var title = data.title || "Something Has Happened";
 var message = data.message || "Here's something you might want to check out.";
 var icon = "images/new-notification.png";

 var notification = new Notification(title, {
   body: message,
   tag: 'simple-push-demo-notification',
   icon: icon
 });

 notification.addEventListener('click', function() {
   if (clients.openWindow) {
     clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
   }
 });
});
```

## 仕様

| 仕様                                                                                                 | ステータス                   | コメント                                                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Push API', '#widl-ServiceWorkerGlobalScope-onpush', 'onpush')}} | {{Spec2('Push API')}} | 初期定義。このイベントは {{domxref("ServiceWorkerGlobalScope")}} からアクセスしますが、Push API で定義されています。 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerGlobalScope.onpush")}}

## 関連情報

- [Push API](/ja/docs/Web/API/Push_API)
