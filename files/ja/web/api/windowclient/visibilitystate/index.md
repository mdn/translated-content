---
title: "WindowClient: visibilityState プロパティ"
short-title: visibilityState
slug: Web/API/WindowClient/visibilityState
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Service Workers API")}}

**`visibilityState`** は {{domxref("WindowClient")}} インターフェイスの読み取り専用プロパティで、現在のクライアントの可視性を示します。 この値は、`"hidden"`、`"visible"`、`"prerender"` のいずれかです。

## 値

文字列です（値については {{domxref("Document.visibilityState")}} を参照）。

## 例

```js
event.waitUntil(
  clients
    .matchAll({
      type: "window",
    })
    .then((clientList) => {
      for (const client of clientList) {
        if (client.url === "/" && "focus" in client) {
          if (client.visibilityState === "hidden") return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    }),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
