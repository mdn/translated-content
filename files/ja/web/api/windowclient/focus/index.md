---
title: WindowClient.focus()
slug: Web/API/WindowClient/focus
---

{{APIRef("Service Workers API")}}

{{domxref("WindowClient")}} インターフェイスの **`focus()`** メソッドは、現在のクライアントにユーザー入力フォーカスを与え、既存の {{domxref("WindowClient")}} に解決する {{jsxref("Promise")}} を返します。

## 構文

```
windowClient.focus().then(function(windowClient) {
  // WindowClient がフォーカスされたら、何かを行います
});
```

### パラメーター

なし。

### 戻り値

既存の {{domxref("WindowClient")}} に解決される {{jsxref("Promise")}}。

## 例

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waitUntil(clients.matchAll({
    type: "window"
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

| 仕様                                                                                         | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-windowclient-focus', 'focus()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WindowClient.focus")}}
