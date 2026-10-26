---
title: "ServiceWorkerRegistration: backgroundFetch プロパティ"
short-title: backgroundFetch
slug: Web/API/ServiceWorkerRegistration/backgroundFetch
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`backgroundFetch`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、{{domxref("BackgroundFetchManager")}} オブジェクトへの参照を返します。これは、バックグラウンドフェッチ操作を開始することができます。

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
  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
