---
title: ServiceWorkerRegistration.backgroundFetch
slug: Web/API/ServiceWorkerRegistration/backgroundFetch
l10n:
  sourceCommit: 49c552151144b2e61fc34a12586d4d0c40abfbe6
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

**`backgroundFetch`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのプロパティで、{{domxref("BackgroundFetchManager")}} オブジェクトへの参照を返します。これは、バックグラウンドフェッチ操作を開始することができます。

## 値

{{domxref("BackgroundFetchManager")}} オブジェクト。

## 例

### バックグラウンドフェッチの開始

次のコードは、`backgroundFetch` プロパティにアクセスし、これを使用してバックグラウンドフェッチ操作を開始するものです。

```js
// main.js
async function requestBackgroundFetch(movieData) {
  const swRegistration = await navigator.serviceWorker.ready;
  const fetchRegistration = await swRegistration.backgroundFetch.fetch(
    "download-movie",
    ["/my-movie-part-1.webm", "/my-movie-part-2.webm"],
    {
      icons: movieIcons,
      title: "Downloading my movie",
      downloadTotal: 60 * 1024 * 1024,
      label: "Downloading a show",
    },
  );
  //...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
