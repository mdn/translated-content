---
title: Response()
slug: Web/API/Response/Response
---

{{APIRef("Fetch")}}

**`Response()`** コンストラクターは、新しい {{domxref("Response")}} オブジェクトを生成します。

## 構文

```
var myResponse = new Response(body, init);
```

### 引数

- _body_ {{optional_inline}}

  - : *body*オブジェクトに*は、*レスポンスの本体を定義する。なお、これは `null` でも問題ない:

    - {{domxref("Blob")}}
    - {{domxref("BufferSource")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("USVString")}}

- _init_ {{optional_inline}}

  - : レスポンスに適用したオプションで、カスタム設定したい場合の可能なオプションは、次のとおりです。:

    - `status`: レスポンス\[応答]のステータスコードです。（例： `200`）
    - `statusText`: ステータスメッセージは次のようなものです。（例：`OK`など)
    - `headers`: レスポンス\[応答]に追加するヘッダーは、{{domxref("ByteString")}} のキーと値のペアか、もしくは{{domxref("Headers")}} 、または文字どおりの状態で含まれます。（詳細は、[HTTP headers](/ja/docs/Web/HTTP/Headers)を参照）

## 例

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (see [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) we create a new `Response` object using the constructor, passing it a new {{domxref("Blob")}} as a body, and an init object containing a custom `status` and `statusText`:

```js
var myBlob = new Blob();
var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };
var myResponse = new Response(myBlob,init);
```

## 仕様

| Specification                                                        | Status                   | Comment            |
| -------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-response','Response()')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザーの対応

{{Compat("api.Response.Response")}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
