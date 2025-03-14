---
title: BackgroundFetchManager
slug: Web/API/BackgroundFetchManager
l10n:
  sourceCommit: a0ffb40b9cadb578da554117f0cfb1208a8a2624
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`BackgroundFetchManager`** は{{domxref('Background Fetch API','バックグラウンドフェッチ API','',' ')}} のインターフェイスで、バックグラウンドフェッチ ID をキー、{{domxref("BackgroundFetchRegistration")}} オブジェクトを値とする対応表です。

## プロパティ

なし。

## メソッド

- {{domxref('BackgroundFetchManager.fetch','fetch()' )}} {{Experimental_Inline}}
  - : 引数に与えられた配列( URL や {{domxref("Request")}} オブジェクトで構成される) に対して、{{domxref("BackgroundFetchRegistration")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。
- {{domxref('BackgroundFetchManager.get','get()')}} {{Experimental_Inline}}
  - : 引数に与えられた `id` に紐づく {{domxref("BackgroundFetchRegistration")}} で解決される {{jsxref("Promise")}} を返します。 `id` が見つからない場合は {{jsxref("undefined")}} を返します。
- {{domxref('BackgroundFetchManager.getIds','getIds()')}} {{Experimental_Inline}}
  - : 登録済みのすべてのバックグラウンドフェッチの ID を返します。

## 例

下記の例は、 {{domxref("ServiceWorkerRegistration")}} オブジェクトから {{domxref("BackgroundFetchManager")}} のインスタンスを取得し、バックグラウンドでオーディオファイルをダウンロードするために `fetch()` メソッドを呼び出しています。

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
