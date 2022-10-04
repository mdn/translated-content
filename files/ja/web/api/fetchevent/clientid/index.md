---
title: FetchEvent.clientId
slug: Web/API/FetchEvent/clientId
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}}インターフェイスの **`clientId`** 読み取り専用プロパティは、現在のサービスワーカーが制御している {{domxref("Client")}} の id を返します。

次に、{{domxref("Clients.get()")}} メソッドに、この id を渡して、関連するクライアントを取得できます。

## 構文

```
var myClientId = fetchEvent.clientId;
```

### 値

クライアント id を表す {{domxref("DOMString")}}。

## 例

```js
self.addEventListener('fetch', function(event) {
  console.log(event.clientId);
​});
```

## 仕様

| 仕様                                                                                             | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-fetchevent-clientid', 'clientId')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.FetchEvent.clientId")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
