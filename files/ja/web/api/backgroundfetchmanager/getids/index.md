---
title: BackgroundFetchManager.getIds()
slug: Web/API/BackgroundFetchManager/getIds
l10n:
  sourceCommit: d4886e476741a47b85b7fac249daef5c4b38690d
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref("BackgroundFetchManager")}} インターフェイスの **`getIds()`** メソッドは、登録済みのすべてのバックグラウンドフェッチの ID を返します。

## 構文

```js-nolint
getIds()
```

### 引数

なし。

### 返値

{{jsxref('String', 'strings')}} の {{jsxref('Array')}} で解決される {{jsxref("Promise")}} を返します。

### 例外

なし。

## 例

下記の例は、登録済みのすべてのバックグラウンドフェッチの ID を取得する方法を紹介しています。アクティブな {{domxref('ServiceWorker', 'service worker')}} の {{domxref('ServiceWorkerRegistration.backgroundFetch')}} プロパティを参照して `BackgroundFetchManager` オブジェクトにアクセスし、その `getIds()` メソッドを呼び出しています。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
