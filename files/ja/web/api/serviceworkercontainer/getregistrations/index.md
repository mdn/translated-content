---
title: ServiceWorkerContainer.getRegistrations()
slug: Web/API/ServiceWorkerContainer/getRegistrations
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Service Workers API")}}

**`getRegistrations()`** は {{domxref("ServiceWorkerContainer")}} インターフェイスのメソッドで、この `ServiceWorkerContainer` に関するすべての {{domxref("ServiceWorkerRegistration")}} を配列で取得します。 このメソッドは、 {{domxref("ServiceWorkerRegistration")}} の配列に解決される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
getRegistrations()
```

### 引数

なし。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトの配列に解決される {{jsxref("Promise")}}。

## 例

```js
navigator.serviceWorker.getRegistrations().then((registrations) => {
  document.querySelector("#status").textContent =
    "ServiceWorkerRegistration が見つかりました。";
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
