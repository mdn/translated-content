---
title: BackgroundFetchManager
slug: Web/API/BackgroundFetchManager
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref('Background Fetch API','','',' ')}} の **`BackgroundFetchManager`** インターフェイスは、バックグラウンドフェッチ ID をキー、 {{domxref("BackgroundFetchRegistration")}} オブジェクトを値とするマップです。

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

下記の例は、 {{domxref("ServiceWorkerRegistration")}} オブジェクトから {{domxref("BackgroundFetchManager")}} のインスタンスを取得し、バックグラウンドで動画をダウンロードするために `fetch()` メソッドを呼び出しています。

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
    }
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
