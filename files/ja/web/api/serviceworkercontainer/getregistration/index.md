---
title: ServiceWorkerContainer.getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Service Workers API")}}

**`getRegistration()`** は {{domxref("ServiceWorkerContainer")}} インターフェイスのメソッドで、スコープ URL が指定された文書の URL と一致する {{domxref("ServiceWorkerRegistration")}} オブジェクトを取得します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} または `undefined` に解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
getRegistration()
getRegistration(clientURL)
```

### 引数

- `clientURL` {{optional_inline}}
  - : この URL に照合するスコープを持つ登録が返されます。関連の URL は、現在のクライアントを基点として解決されます。この引数が指定されなかった場合、既定では現在のクライアントの URL が使用されます。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトまたは `undefined` に解決される {{jsxref("Promise")}} です。

## 例

```js
navigator.serviceWorker.getRegistration("/app").then((registration) => {
  if (registration) {
    document.querySelector("#status").textContent =
      "ServiceWorkerRegistration が見つかりました。";
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
