---
title: FetchEvent.clientId
slug: Web/API/FetchEvent/clientId
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Service Workers API")}}

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
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)（英語）
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
