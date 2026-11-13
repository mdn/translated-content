---
title: "FetchEvent: clientId プロパティ"
short-title: clientId
slug: Web/API/FetchEvent/clientId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

**`clientId`** は {{domxref("FetchEvent")}} インターフェイスの読み取り専用プロパティで、現在のサービスワーカーが制御している {{domxref("Client")}} の id を返します。

次に、{{domxref("Clients.get()")}} メソッドに、この ID を渡して、関連するクライアントを取得できます。

### 値

クライアント ID を表す文字列です。

## 例

```js
self.addEventListener("fetch", (event) => {
  console.log(event.clientId);
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
