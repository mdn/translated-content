---
title: Location
slug: Web/HTTP/Headers/Location
---

{{HTTPSidebar}}

**`Location`** レスポンスヘッダーはリダイレクト先の URL を示します。 `3xx` (リダイレクト) または `{{HTTPStatus("201")}}` (created) ステータスレスポンスを返すときのみ意味を成します。

リダイレクトの場合、 HTTP メソッドは元のメソッドとリダイレクトの種類によって、 `Location` で示されたページにアクセスする新しいリクエストを生成するために使用します。

- {{HTTPStatus("303")}} (See Also) レスポンスは常に {{HTTPMethod("GET")}} メソッドを使用するように誘導され、 {{HTTPStatus("307")}} (Temporary Redirect) および {{HTTPStatus("308")}} (Permanent Redirect) は元のリクエストにおいて使用されたメソッドを変更しません。
- {{HTTPStatus("301")}} (Moved Permanently) と {{HTTPStatus("302")}} (Found) は多くの場合はメソッドを変更しませんが、古いユーザーエージェントは変更することがあります (そのため、基本的に結果は不明です)。

これらのステータスコードを持つすべてのレスポンスは、 `Location` ヘッダーを送信します。

リソース作成 (created) では、新しく作成されたリソースへの URL を示します。

`Location` と {{HTTPHeader("Content-Location")}} は異なります。 `Location` ヘッダーは、リダイレクトの対象 (または新しく作成されたリソースの URL) を示し、 {{HTTPHeader("Content-Location")}} ヘッダーは[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)が起きたとき、更なるコンテンツネゴシエーションが起きないように、リソースへアクセスできる直接的な URL を指します。 `Location` はレスポンスに関連付くヘッダーで、 {{HTTPHeader("Content-Location")}} は返されるエンティティに関連付けられます。

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
Location: <url>
```

## ディレクティブ

- \<url>
  - : (リクエスト URL からの) 相対 URL、または絶対 URL。

## 例

```
Location: /index.html
```

## 仕様書

| 仕様書                               | 題名                                                          |
| ------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Location", "7.1.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの対応

{{Compat("http.headers.Location")}}

## 関連情報

- {{HTTPHeader("Content-Location")}}
- `Location` ヘッダーを含むレスポンスのステータス: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
