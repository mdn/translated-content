---
title: Location ヘッダー
short-title: Location
slug: Web/HTTP/Reference/Headers/Location
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Location`** は{{Glossary("response header", "レスポンスヘッダー")}}で、リダイレクト先の URL を示します。
`3XX` [リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#redirection_messages)または {{HTTPStatus("201", "201 Created")}} ステータスレスポンスを返すときのみ意味を成します。

リダイレクトの場合、 HTTP メソッドは元のメソッドとリダイレクトの種類によって、 `Location` で示されたページにアクセスする新しいリクエストを生成するために使用します。

- {{HTTPStatus("303", "303 See Other")}} レスポンスは常に {{HTTPMethod("GET")}} メソッドを使用するように誘導されます。
- {{HTTPStatus("307", "307 Temporary Redirect")}} および {{HTTPStatus("308", "308 Permanent Redirect")}} は、元のリクエストにおいて使用されたメソッドを変更しません。
- {{HTTPStatus("301", "301 Moved Permanently")}} と {{HTTPStatus("302", "302 Found")}} は、元のリクエストにおいて使用されたメソッドと同じメソッドを使用すべきですが、これは古いユーザーエージェントでは保証されていません。

これらのステータスコードを持つすべてのレスポンスは、 `Location` ヘッダーを送信します。

リソース作成時には、新たに作成されたリソースの URL を示し、クライアントが直ちにそれに対するリクエストを発行できるようにします。

`Location` と {{HTTPHeader("Content-Location")}} は異なります。
`Content-Location` ヘッダーは[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)が行われたとき、リソースへアクセスできる直接的な URL を指します。
`Location` はレスポンスに関連付けられるヘッダーで、 {{HTTPHeader("Content-Location")}} は返されるエンティティに関連付けられます。

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
Location: <url>
```

## ディレクティブ

- `<url>`
  - : (リクエスト URL からの) 相対 URL、または絶対 URL。

## 例

```http
Location: /index.html
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Location")}}
- `Location` ヘッダーを含むレスポンスのステータス: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
