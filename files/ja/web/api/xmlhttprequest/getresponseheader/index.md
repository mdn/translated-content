---
title: XMLHttpRequest.getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
tags:
  - API
  - ヘッダーの取得
  - HTTP
  - HTTP ヘッダー
  - ヘッダー
  - メソッド
  - リファレンス
  - XHR
  - XHR ヘッダー
  - XMLHttpRequest
  - getResponseHeader
browser-compat: api.XMLHttpRequest.getResponseHeader
translation_of: Web/API/XMLHttpRequest/getResponseHeader
---
{{APIRef('XMLHttpRequest')}}

{{DOMxRef("XMLHttpRequest")}} の **`getResponseHeader()`** メソッドは、特定のヘッダー値のテキストを含んだ文字列を返します。

同じ名前で複数のレスポンスヘッダーがあった場合、値はカンマと空白で区切って値を接続した単一の文字列として返されます。 `getResponseHeader()` メソッドは値を UTF バイト列として返します。

> **Note:** ヘッダー名の検索は、大文字小文字の区別がありません。

ヘッダーすべての生の文字列を取得する必要がある場合は、生のヘッダー文字列全体を返す {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}} メソッドを使用してください。

## 構文

```js
var myHeader = XMLHttpRequest.getResponseHeader(headerName);
```

### 引数

- _headerName_
  - : 文字列で、テキスト値を取得したいヘッダーの名前を示します。

### 返値

ヘッダーのテキスト値を表す文字列、または、レスポンスがまだ受信されていないか、そのヘッダーがレスポンスに存在しなければ `null` です。

## 例

この例では、リクエストが生成されて送信され、そして {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} ハンドラーを設定してヘッダーが純真で来たことを示す {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} を監視します。その時が来たら、 {{httpheader("Content-Type")}} ヘッダーの値を読み取ります。 `Content-Type` が求められる値でない場合、 {{DOMxRef("XMLHttpRequest")}} は {{DOMxRef("XMLHttpRequest.abort", "abort()")}} を呼び出してキャンセルします。

```js
var client = new XMLHttpRequest();
client.open("GET", "unicorns-are-teh-awesome.txt", true);
client.send();

client.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED) {
    var contentType = client.getResponseHeader("Content-Type");
    if (contentType != my_expected_type) {
      client.abort();
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
- {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}}
- {{DOMxRef("XMLHttpRequest.response", "response")}}
- リクエストヘッダーの設定: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
