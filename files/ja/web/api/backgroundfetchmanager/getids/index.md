---
title: "BackgroundFetchManager: getIds() メソッド"
short-title: getIds()
slug: Web/API/BackgroundFetchManager/getIds
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("BackgroundFetchManager")}} インターフェイスの **`getIds()`** メソッドは、登録済みのすべてのバックグラウンドフェッチの ID を返します。

## 構文

```js-nolint
getIds()
```

### 引数

なし。

### 返値

{{jsxref('String', '文字列')}}の配列 ({{jsxref('Array')}}) で解決される {{jsxref("Promise")}} を返します。

### 例外

なし。

## 例

下記の例は、登録済みのすべてのバックグラウンドフェッチの ID を取得する方法を紹介しています。アクティブな[サービスワーカー](/ja/docs/Web/API/ServiceWorker)の {{domxref('ServiceWorkerRegistration.backgroundFetch')}} プロパティを参照して `BackgroundFetchManager` オブジェクトにアクセスし、その `getIds()` メソッドを呼び出しています。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
