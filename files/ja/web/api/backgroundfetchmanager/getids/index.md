---
title: BackgroundFetchManager.getIds()
slug: Web/API/BackgroundFetchManager/getIds
l10n:
  sourceCommit: 23aea0fbb04893c64890c89a634250283e2beb71
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

The following examples shows how to retrieve the IDs of all registered background fetches. With an active {{domxref('ServiceWorker', 'service worker')}}, use the {{domxref('ServiceWorkerRegistration.backgroundFetch')}} property to access the `BackgroundFetchManager` object and call its `get()` method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
