---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
---

{{HTTPSidebar}}

**`Access-Control-Allow-Headers`** レスポンスヘッダーは、 {{HTTPHeader("Access-Control-Request-Headers")}} を含む{{glossary("preflight request", "プリフライトリクエスト")}}へのレスポンスで、実際のリクエストの間に使用できる HTTP ヘッダーを示すために使用されます。

このヘッダーは、リクエストに {{HTTPHeader("Access-Control-Request-Headers")}} ヘッダーが含まれている時に必要です。

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
Access-Control-Allow-Headers: <header-name>[, <header-name>]*
Access-Control-Allow-Headers: *
```

## ディレクティブ

- \<header-name>
  - : 対応しているリクエストヘッダーの名前です。ヘッダーはコンマで区切って、任意の数のリストにすることができます。
- `*` (ワイルドカード)
  - : "`*`" の値は、資格情報のないリクエスト ([HTTP Cookie](/ja/docs/Web/HTTP/Cookies) や HTTP の認証情報のないリクエスト) の特殊なワイルドカード値です。認証情報付きのリクエストでは、特別な意味のない "`*`" というヘッダー名として扱われます。なお、 {{HTTPHeader("Authorization")}} ヘッダーはワイルドカードで表すことができず、常に明示的に列挙する必要があります。

{{glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} は常に許可されており、このヘッダーで列挙する必要はありません。しかし、これらのヘッダーを `Access-Control-Allow-Headers` に列挙することで、これらのヘッダーでも追加の制約の適用を回避することができることに注意してください。

## 例

### カスタムヘッダー

`Access-Control-Allow-Headers` ヘッダーがどのように見えるかの例です。*CORS セーフリストリクエストヘッダー*に加えて、 `X-Custom-Header` という名前のカスタムヘッダーがサーバーへの CORS リクエストで対応しています。

```
Access-Control-Allow-Headers: X-Custom-Header
```

### 複数のヘッダー

この例は、複数のヘッダーへの対応を指定するときの `Access-Control-Allow-Headers` を示しています。

```
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### 追加の制約の回避

{{glossary("CORS-safelisted_request_header", "CORS セーフリストリクエストヘッダー")}}は常に許可され、ふつうは `Access-Control-Allow-Headers` に列挙する必要はありませんが、それでも列挙すれば[追加の制約](/ja/docs/Glossary/CORS-safelisted_request_header#additional_restrictions)が適用されることを回避できます。

```
Access-Control-Allow-Headers: Accept
```

### プリフライトリクエストの例

`Access-Control-Allow-Headers` を伴うプリフライトリクエストの例を見てみましょう。

#### リクエスト

最初にリクエストです。プリフライトリクエストは {{HTTPMethod("OPTIONS")}} リクエストで、次のように 3 つのプリフライトリクエストヘッダー、 {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, {{HTTPHeader("Origin")}} の組み合わせを含みます。

```
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

#### レスポンス

CORS リクエストが {{HTTPMethod("DELETE")}} メソッドを使うことをサーバーが許可した場合、 {{HTTPHeader("Access-Control-Allow-Methods")}} レスポンスヘッダーで返信し、そこでは `DELETE` とともに対応するその他のメソッドのリストが含まれます。

```
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
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
