---
title: Request.clone()
slug: Web/API/Request/clone
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Request")}} インターフェースの **`clone()`** メソッドは、現在の `Request` オブジェクトのコピーを生成します。

レスポンス {{domxref("Body")}} が既に使用されていた場合、`clone()` は {{jsxref("TypeError")}} をスローします。はっきりと言えば、`clone()` が存在する主な理由は、{{domxref("Body")}} オブジェクトを（それらが 1 回しか使用できない時に）複数回使用するためです。

## 構文

```js
var newRequest = request.clone();
```

### パラメータ

なし。

### 戻り値

clone( ) が呼び出された Request の精密なコピーである {{domxref("Request")}} オブジェクト。

## 例

次のスニペットは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリにある画像ファイルのために）新しいリクエストを生成してから、リクエストをコピーしています。

```js
var myRequest = new Request('flowers.jpg');
var newRequest = myRequest.clone(); // リクエストのコピーが newRequest に保存されます。
```

## 仕様

| 仕様                                                                 | 状態                     | コメント           |
| -------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-request-clone','clone')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザ実装状況

{{Compat("api.Request.clone")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
