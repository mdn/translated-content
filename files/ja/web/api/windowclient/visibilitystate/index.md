---
title: WindowClient.visibilityState
slug: Web/API/WindowClient/visibilityState
---

{{APIRef("Service Workers API")}}

{{domxref("WindowClient")}} インターフェイスの **`visibilityState`** 読み取り専用プロパティは、現在のクライアントの可視性を示します。 この値は、`"hidden"`、`"visible"`、`"prerender"` のいずれかです。

## 構文

```
var myVisState = windowClient.visibilityState;
```

### 値

{{domxref("DOMString")}}（値については、{{domxref("Document.visibilityState")}} を参照）。

## 例

```js
event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (let i = 0; i < clientList.length; i++) {
      let client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        if (client.visibilityState === 'hidden')
          return client.focus();
        }
      }
    }

    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.WindowClient.visibilityState")}}
