---
title: PushEvent.data
slug: Web/API/PushEvent/data
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

**`PushEvent`** インターフェースの `data` 読み取り専用プロパティは、{{domxref("PushSubscription")}} に送信されてたデータを含む {{domxref("PushMessageData")}} オブジェクトへの参照を返します。

## 構文

```js
var myPushData = PushEvent.data;
```

### 値

{{domxref("PushMessageData")}} オブジェクト

**例**

次の例は、 `PushEvent` からデータを取得して、すべての service worker クライアントで表示しています。

```js
self.addEventListener('push', function(event) {
  if (!(self.Notification && self.notification.permission === 'granted')) {
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
  };
});
```

## 仕様

| 仕様                                                                     | 状態                         | コメント |
| ------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('Push API','#widl-PushEvent-data','data')}} | {{Spec2('Push API')}} | 初期定義 |

## ブラウザ実装状況

{{Compat("api.PushEvent.data")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
