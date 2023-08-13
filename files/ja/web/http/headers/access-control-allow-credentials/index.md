---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
---

{{HTTPSidebar}}

**`Access-Control-Allow-Credentials`** レスポンスヘッダーは、リクエストの資格情報モード ({{domxref("Request.credentials")}}) が `include` である場合に、レスポンスをフロントエンドの JavaScript コードに公開するかどうかをブラウザーに指示します。

証明書の資格情報モード ({{domxref("Request.credentials")}}) が `include` である場合、レスポンスがフロントエンドの JavaScript コードに公開されるのは `Access-Control-Allow-Credentials` の値が `true` である場合のみです。

資格情報は Cookie、認証ヘッダー、または TLS クライアント証明書です。

プリフライトリクエストに対するレスポンスの一部として使用された場合は、実際のリクエストが資格情報を使用して行われた可能性があるかどうかを示します。なお、単純な {{HTTPMethod("GET")}} リクエストはプリフライトが行われないので、資格情報を持つリソースに対してリクエストが行われた場合、このヘッダーがリソースとともに返されない場合、レスポンスはブラウザーによって無視されウェブコンテンツは返されません。

`Access-Control-Allow-Credentials` ヘッダーは、 {{domxref("XMLHttpRequest.withCredentials")}} プロパティまたは Fetch API の {{domxref("Request.Request()", "Request()")}} コンストラクター内の `credentials` オプションとの組み合わせで動作します。資格情報を含む CORS リクエストにおいて、ブラウザーがレスポンスを JavaScript コードに公開するようにするためには、サーバー側 (`Access-Control-Allow-Credentials` ヘッダーを使用) とクライアント側 (XHR, Fetch Ajax リクエストの資格情報モードの設定) の両方が、資格情報を含むことを承認しなければなりません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Access-Control-Allow-Credentials: true
```

## ディレクティブ

- true
  - : このヘッダーの唯一の有効な値は `true` です (大文字小文字を区別します)。資格情報を必要としない場合は、 (値を false に設定するのではなく) このヘッダーを完全に省略します。

## 例

資格情報の許可:

```
Access-Control-Allow-Credentials: true
```

[XHR](/ja/docs/Web/API/XMLHttpRequest) を資格情報付きで使用:

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

[Fetch](/ja/docs/Web/API/Fetch_API) を資格情報付きで使用:

```js
fetch(url, {
  credentials: "include",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("http.headers.Access-Control-Allow-Credentials")}}

## 関連情報

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
