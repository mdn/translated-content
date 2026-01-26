---
title: "WorkerGlobalScope: caches プロパティ"
short-title: caches
slug: Web/API/WorkerGlobalScope/caches
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

**`caches`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、現在のコンテキストに関連付けられた {{domxref("CacheStorage")}} オブジェクトを返します。
このオブジェクトにより、オフラインで利用できるように資産 (assets) を保存したり、リクエストに対するカスタムレスポンスを生成したりするなどの機能を使用できます。

## 値

{{domxref("CacheStorage")}} オブジェクトです。

## 例

次の例は、オフラインで資産を格納するために[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)コンテキストでキャッシュを使用する方法を示しています。

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    self.caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
