---
title: OPTIONS リクエストメソッド
short-title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP の `OPTIONS`メソッド**は、指定された URL またはサーバーの許可されている通信オプションをリクエストします。
これを使用して、リクエストで許可されている HTTP メソッドを検査したり、CORS プリフライトリクエストを実行した際にリクエストが成功するかどうかを判断したりできます。
クライアントはこのメソッドで URL か、サーバー全体を表すアスタリスク (`*`) を指定することができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>可*</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>可</td>
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

\* `OPTIONS` メッセージにリクエスト本体を付けることは技術的に認められているものの、その意味づけは定義されていません。
`OPTIONS` メッセージに本体を含めることは可能です。ただし、有効な {{HTTPHeader("Content-Type")}} ヘッダーを提供し、かつサーバーがそれを期待していることがわかっている場合に限ります。この動作は実装依存です。

## 構文

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

リクエスト対象は、サーバー全体を示す「アスタリスク形式」`*`、または他のメソッドで一般的なリクエスト対象のどちらかになります。

- `*`
  - : クライアントが、そのサーバーの特定の名前付きリソースではなく、サーバー全体に対して `OPTIONS` をリクエストすることを希望していることを示します。
- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで指定された情報と組み合わせて、リクエストの対象リソースを特定します。
    これは、オリジンサーバーへのリクエストでは絶対パス（例：`/path/to/file.html`）であり、プロキシーへのリクエストでは絶対 URL（例：`http://www.example.com/path/to/file.html`）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリー成分です。
    しばしば識別情報を `key=value` の組という形で保持するために使用されます。

## 例

### 許可されたリクエストメソッドの識別

サーバーが対応しているリクエストメソッドを調べるには、 `curl` を使用して `OPTIONS` リクエストを発行してください。

```bash
curl -X OPTIONS https://example.org -i
```

これは以下の HTTP リクエストを生成します。

```http
OPTIONS / HTTP/2
Host: example.org
User-Agent: curl/8.7.1
Accept: */*
```

レスポンスには、許可されているメソッドが入った {{HTTPHeader("Allow")}} ヘッダーが含まれています。

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### CORS でのプリフライトリクエスト

[CORS](/ja/docs/Web/HTTP/Guides/CORS) では、[プリフライトリクエスト](/ja/docs/Glossary/Preflight_request)を `OPTIONS` メソッドで送信すると、サーバーはリクエストを送信して受け付けられるかどうかを応答できるようにします。下記の例では、次の引数に対する許可を要求します。

- プリフライトリクエストで送信される {{HTTPHeader("Access-Control-Request-Method")}} ヘッダーは、実際のリクエストを送信する際に、リクエストメソッドが {{HTTPMethod("POST")}} であることをサーバーに知らせます。
- {{HTTPHeader("Access-Control-Request-Headers")}} ヘッダーは、実際のリクエスト送信時に `X-PINGOTHER` と `Content-Type` ヘッダーを持つことをサーバーに知らせます。

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother
```

サーバーは、このような状況下でリクエストを受け入れるかどうかを応答することができるようになりました。下記の例では、サーバーのレスポンスは次のように言っています。

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : `https://foo.example` のオリジンは、以下の方法で `bar.example/resources/post-here/` の URL をリクエストすることが許可されています。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}}, `OPTIONS` がその URL で許可されているメソッドです。（このヘッダーは {{HTTPHeader("Allow")}} レスポンスヘッダーに似ていますが、[CORS](/ja/docs/Web/HTTP/Guides/CORS) でのみ使用します。）
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : レスポンスを検査するスクリプトは `X-PINGOTHER` と `Content-Type` ヘッダーの値を読み取ることが許可されます。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 上記の許可は、 86,400 秒（1 日）キャッシュされる可能性があります。

```http
HTTP/1.1 200 OK
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

> [!NOTE]
> {{HTTPStatus("200", "200 OK")}} と {{HTTPStatus("204", "204 No Content")}} の両方が [許可されているステータスコード](https://fetch.spec.whatwg.org/#ref-for-ok-status)ですが、ブラウザーによっては誤って `204 No Content` がリソースに適用されると判断し、その後リソースを取得するためのリクエストを送信しないことがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Allow")}} ヘッダー
- [CORS](/ja/docs/Web/HTTP/Guides/CORS)
