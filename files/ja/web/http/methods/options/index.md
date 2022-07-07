---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
browser-compat: http.methods.OPTIONS
translation_of: Web/HTTP/Methods/OPTIONS
---
{{HTTPSidebar}}

**HTTP の `OPTIONS`メソッド**は、指定された URL またはサーバーの許可されている通信オプションをリクエストします。クライアントはこのメソッドで URL か、サーバー全体を表すアスタリスク (`*`) を指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">HTML フォームでの使用</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## 例

### 許可されたリクエストメソッドの識別

サーバーが対応しているリクエストメソッドを調べるには、 `curl` を使用して `OPTIONS` リクエストを発行してください。

```bash
curl -X OPTIONS https://example.org -i
```

レスポンスには、許可されているメソッドを含んだ {{HTTPHeader("Allow")}} ヘッダーが入ります。

```
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### CORS でのプリフライトリクエスト

[CORS](/ja/docs/Web/HTTP/CORS) では、[プリフライトリクエスト](/ja/docs/Glossary/Preflight_request)を `OPTIONS` メソッドで送信すると、サーバーはリクエストを送信して受け付けられるかどうかを応答できるようにします。下記の例では、次の引数に対する許可を要求します。

- プリフライトリクエストで送信される {{HTTPHeader("Access-Control-Request-Method")}} ヘッダーは、実際のリクエストを送信する際に、リクエストメソッドが {{HTTPMethod("POST")}} であることをサーバに知らせます。
- {{HTTPHeader("Access-Control-Request-Headers")}} ヘッダーは、実際のリクエスト送信時に `X-PINGOTHER` と `Content-Type` ヘッダーを持つことをサーバーに知らせます。

```
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

サーバーは、このような状況下でリクエストを受け入れるかどうかを応答することができるようになりました。下記の例では、サーバーのレスポンスは次のように言っています。

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : `https://foo.example` のオリジンは、以下の方法で `bar.example/resources/post-here/` の URL をリクエストすることが許可されています。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}}, `OPTIONS` がその URL で許可されているメソッドです。（このヘッダーは {{HTTPHeader("Allow")}} レスポンスヘッダーに似ていますが、[CORS](/ja/docs/Web/HTTP/CORS) でのみ使用します。）
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : レスポンスを検査するスクリプトは `X-PINGOTHER` と `Content-Type` ヘッダーの値を読み取ることが許可されます。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 上記の許可は、 86,400 秒（1 日）キャッシュされる可能性があります。

```
HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Allow")}} ヘッダー
- [CORS](/ja/docs/Web/HTTP/CORS)
