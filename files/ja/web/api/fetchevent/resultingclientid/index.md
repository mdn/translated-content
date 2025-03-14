---
title: FetchEvent.resultingClientId
slug: Web/API/FetchEvent/resultingClientId
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Service Workers API")}}

**`resultingClientId`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、ページナビゲーション中に前のクライアントを置き換える{{domxref("Client", "クライアント", "", 1)}}の {{domxref("Client.id", "id")}} です。

例えば、ページ A からページ B に移動する場合、`resultingClientId` はページ B に関連するクライアントの id です。

フェッチリクエストがサブリソースのリクエストであるか、リクエストの宛先 ([`destination`](/ja/docs/Web/API/Request/destination)) が `report` である場合、`resultingClientId` は空文字列になります。

### 値

文字列です。

## 例

```js
self.addEventListener("fetch", (event) => {
  console.log(event.resultingClientId);
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
