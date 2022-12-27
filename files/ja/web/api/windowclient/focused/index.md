---
title: WindowClient.focused
slug: Web/API/WindowClient/focused
---

{{APIRef("Service Workers API")}}

{{domxref("WindowClient")}} インターフェイスの **`focused`** 読み取り専用プロパティは、現在のクライアントにフォーカスがあるかどうかを示す {{jsxref("Boolean")}} です。

## 構文

```
var myFocused = windowClient.focused;
```

### 値

{{jsxref("Boolean")}}。

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
      if (client.url == '/' && 'focus' in client) {
        if(!client.focused)
          return client.focus();
        }
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

## 仕様

| 仕様                                                                                                             | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-windowclient-focused', 'WindowClient: focused')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.WindowClient.focused")}}
