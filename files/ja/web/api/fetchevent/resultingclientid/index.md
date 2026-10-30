---
title: "FetchEvent: resultingClientId プロパティ"
short-title: resultingClientId
slug: Web/API/FetchEvent/resultingClientId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

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
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)<sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
