---
title: FetchEvent.resultingClientId
slug: Web/API/FetchEvent/resultingClientId
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} インターフェイスの **`resultingClientId`** 読み取り専用プロパティは、ページナビゲーション中に前のクライアントを置き換える{{domxref("Client", "クライアント")}}の {{domxref("Client.id", "id")}} です。

例えば、ページ A からページ B に移動する場合、`resultingClientId` はページ B に関連するクライアントの id です。

フェッチリクエストがサブリソースのリクエストであるか、リクエストの宛先（[`destination`](/ja/docs/Web/API/Request/destination)）が `report` である場合、`resultingClientId` は空の文字列になります。

## 構文

```
var myResultingClientId = fetchEvent.resultingClientId;
```

### 値

{{domxref("DOMString")}}。

## 例

```js
self.addEventListener('fetch', function(event) {
  console.log(event.resultingClientId);
});
```

## 仕様

| 仕様                                                                                                                     | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-fetchevent-resultingclientid', 'resultingClientId')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.FetchEvent.resultingClientId")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
