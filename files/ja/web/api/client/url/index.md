---
title: Client.url
slug: Web/API/Client/url
---

{{APIRef("Service Workers API")}}

{{domxref("Client")}} インターフェイスの **`url`** 読み取り専用プロパティは、現在のサービスワーカークライアントの URL を返します。

## 構文

```
var clientUrl = client.url;
```

### 値

{{domxref("USVString")}}。

## 例

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

## 仕様

| 仕様                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#client-url', 'url')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.Client.url")}}
