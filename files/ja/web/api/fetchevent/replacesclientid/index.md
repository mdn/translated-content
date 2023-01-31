---
title: FetchEvent.replacesClientId
slug: Web/API/FetchEvent/replacesClientId
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Service Workers API")}}

**`replacesClientId`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、ページナビゲーション中に置き換えられる{{domxref("Client", "クライアント", "", 1)}}の {{domxref("Client.id", "id")}} です。

例えば、ページ A からページ B に移動する場合、`replacesClientId` はページ A に関連するクライアントの ID です。 `about:blank` のクライアントは置き換えられるのではなく再利用されるため、`about:blank` から別のページに移動するときは、空文字列になることがあります。

さらに、フェッチがナビゲーションでない場合、 `replacesClientId` は空の文字列になります。 これは、ナビゲーションの直前に間もなく置き換えられるクライアントにアクセス/通信するために使用できます。

### 値

文字列です。

## 例

```js
self.addEventListener("fetch", (event) => {
  console.log(event.replacesClientId);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
