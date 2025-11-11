---
title: BackgroundFetchManager.get()
slug: Web/API/BackgroundFetchManager/get
l10n:
  sourceCommit: 5288fecd2bcd65bde5ecef008684d3cb343c7b34
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`get()`** は {{domxref("BackgroundFetchManager")}} インターフェイスのメソッドで、引数に与えられた `id` に紐づく {{domxref("BackgroundFetchRegistration")}} で解決される {{jsxref("Promise")}} を返します。 `id` が見つからない場合は {{jsxref("undefined")}} を返します。

## 構文

```js-nolint
get(id)
```

### 引数

- `id`
  - : {{domxref("BackgroundFetchRegistration.fetch","fetch()")}} を呼び出すことで定義された {{domxref("backgroundFetchRegistration")}} の ID 。

### 返値

{{domxref("BackgroundFetchRegistration")}} で解決される {{jsxref("Promise")}} または {{jsxref("undefined")}} 。

## 例

下記の例では、 `get()` を呼び出して {{domxref("BackgroundFetchRegistration")}} を取得する方法を紹介しています。アクティブな {{domxref('ServiceWorker', 'service worker')}} の {{domxref('ServiceWorkerRegistration.backgroundFetch')}} を参照して `BackgroundFetchManager` オブジェクトにアクセスし、その `get()` メソッドを呼び出しています。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get("my-fetch");
});
// my code block
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
