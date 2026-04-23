---
title: Access-Control-Allow-Headers ヘッダー
short-title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Access-Control-Allow-Headers`** は{{Glossary("response header", "レスポンスヘッダー")}}で、{{glossary("preflight request", "プリフライトリクエスト")}}へのレスポンスで使用され、実際のリクエスト中に使用できる HTTP ヘッダーを示します。
このヘッダーは、プリフライトリクエストに {{HTTPHeader("Access-Control-Request-Headers")}} が含まれている場合に必須になります。

> [!NOTE]
> {{glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}は常に許可されており、通常は `Access-Control-Allow-Headers` に列挙されません。ただし、[追加のセーフリスト制限](/ja/docs/Glossary/CORS-safelisted_request_header#追加要件)を回避する必要がある場合を除きます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Access-Control-Allow-Headers: <header-name>
Access-Control-Allow-Headers: <header-name>, <header-name>
Access-Control-Allow-Headers: *
```

## ディレクティブ

- `<header-name>`
  - : 対応しているリクエストヘッダーの名前です。ヘッダーはコンマで区切って、任意の数のリストにすることができます。
- `*` (ワイルドカード)
  - : "`*`" の値は、資格情報のないリクエスト ([HTTP Cookie](/ja/docs/Web/HTTP/Guides/Cookies) や HTTP の認証情報のないリクエスト) の特殊なワイルドカード値です。認証情報付きのリクエストでは、特別な意味のない `*` というヘッダー名として扱われます。なお、 {{HTTPHeader("Authorization")}} ヘッダーはワイルドカードで表すことができず、常に明示的に列挙する必要があります。

## 例

### カスタムヘッダー

`Access-Control-Allow-Headers` ヘッダーがどのように見えるかの例です。
これは、{{Glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}に加えて、サーバーへの CORS リクエストにおいて `X-Custom-Header` という独自のヘッダーが対応していることを示しています。

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### 複数のヘッダー

この例は、複数のヘッダーへの対応を指定するときの `Access-Control-Allow-Headers` を示しています。

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### CORS セーフリストヘッダーに対する追加制限の回避

{{glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}は常に許可され、ふつうは `Access-Control-Allow-Headers` に列挙する必要はありませんが、それでも列挙すれば[追加の制約](/ja/docs/Glossary/CORS-safelisted_request_header#追加要件)が適用されることを回避できます。

```http
Access-Control-Allow-Headers: Accept
```

### プリフライトリクエストの例

`Access-Control-Allow-Headers` を伴う{{glossary("preflight request", "プリフライトリクエスト")}}の例を見てみましょう。

#### リクエスト

まず、プリフライトリクエストは {{HTTPMethod("OPTIONS")}} リクエストで、次のように 3 つのプリフライトリクエストヘッダー、 {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, {{HTTPHeader("Origin")}} の組み合わせを含みます。

次のプリフライトリクエストは、CORS の `GET` リクエストを、{{HTTPHeader("Access-Control-Request-Headers")}} で列挙されているヘッダー（{{HTTPHeader("Content-Type")}} と `X-Requested-With`）付きで送信したいことをサーバーに伝えます。

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://www.example.com
```

#### レスポンス

プリフライトリクエストで示された CORS リクエストが許可された場合、サーバーはプリフライトリクエストに対して、許可されたオリジン、メソッド、ヘッダーを示すメッセージで応答します。次に示すように、`Access-Control-Allow-Headers` にはリクエストされたヘッダーが記載されています。

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://www.example.com
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

要求されたメソッドに対応していない場合は、サーバーはエラーを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
