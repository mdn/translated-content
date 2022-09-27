---
title: FetchEvent.replacesClientId
slug: Web/API/FetchEvent/replacesClientId
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} インターフェイスの **`replacesClientId`** 読み取り専用プロパティは、ページナビゲーション中に置き換えられる{{domxref("Client", "クライアント")}}の {{domxref("Client.id", "id")}} です。

例えば、ページ A からページ B に移動する場合、`replacesClientId` はページ A に関連するクライアントの id です。 `about:blank` のクライアントは置き換えられるのではなく再利用されるため、`about:blank` から別のページに移動するときは、空の文字列になることがあります。

さらに、フェッチがナビゲーションでない場合、`replacesClientId` は空の文字列になります。 これは、ナビゲーションの直前に間もなく置き換えられるクライアントにアクセス/通信するために使用できます。

## 構文

```
var myReplacedClientId = fetchEvent.replacesClientId;
```

### 値

{{domxref("DOMString")}}。

## 例

```js
self.addEventListener('fetch', function(event) {
  console.log(event.replacesClientId);
});
```

## 仕様

| 仕様                                                                                                                 | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-fetchevent-replacesclientid', 'replacesClientId')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.FetchEvent.replacesClientId")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
