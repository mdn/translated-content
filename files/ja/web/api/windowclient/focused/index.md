---
title: "WindowClient: focused プロパティ"
short-title: focused
slug: Web/API/WindowClient/focused
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Service Workers API")}}

**`focused`** は {{domxref("WindowClient")}} インターフェイスの読み取り専用プロパティで、現在のクライアントにフォーカスがあるかどうかを示す論理値です。

### 値

論理値です。

## 例

```js
self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // これは、クライアントが既に開いているかどうかを確認し、
  // 開いている場合にフォーカスを合わせます
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) {
            if (!client.focused) return client.focus();
          }
        }

        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
