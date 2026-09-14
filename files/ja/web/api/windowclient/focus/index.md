---
title: "WindowClient: focus() メソッド"
short-title: focus()
slug: Web/API/WindowClient/focus
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Service Workers API")}}

**`focus()`** は {{domxref("WindowClient")}} インターフェイスのメソッドで、現在のクライアントにユーザー入力フォーカスを与え、既存の {{domxref("WindowClient")}} に解決するプロミス ({{jsxref("Promise")}}) を返します。

## 構文

```js-nolint
focus()
```

### 引数

なし。

### 返値

既存の {{domxref("WindowClient")}} に解決するプロミス ({{jsxref("Promise")}})。

### 例外

- `InvalidAccessError` {{domxref("DOMException")}}
  - : アプリのオリジンのウィンドウに[一時的な有効化](/ja/docs/Web/Security/Defenses/User_activation)が行われていない場合、この例外でプロミスが拒否されます。

## セキュリティ要件

- アプリのオリジンの中で少なくとも 1 つのウィンドウで[一時的な有効化](/ja/docs/Web/Security/Defenses/User_activation)が行われている必要があります。

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
          if (client.url === "/" && "focus" in client) return client.focus();
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
