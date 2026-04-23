---
title: PATCH リクエストメソッド
short-title: PATCH
slug: Web/HTTP/Reference/Methods/PATCH
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`PATCH`** は HTTP のリクエストメソッドで、リソースへの部分的な変更を適用します。

`PATCH` は {{Glossary("CRUD")}} に見られる "update" の概念にやや類似しています（一般的に、 HTTP は {{Glossary("CRUD")}} とは異なり、両者は混同するべきではありません）。

{{HTTPMethod("PUT")}} と比較すると、`PATCH` はリソースを変更するための一連の指示として機能するのに対し、`PUT` はリソースの完全な置き換えを表します。
`PUT` リクエストは常に{{Glossary("idempotent", "べき等")}}です（同じリクエストを複数回繰り返してもリソースの状態は変わりません）。一方、`PATCH` リクエストには常にべき等性が保証されるとは限りません。
例えば、自動インクリメントするカウンタフィールドがリソースの不可欠な部分である場合、 `PUT` は自然にそれを上書きしますが（すべてを上書きするので）、 `PATCH` は必ずしもそうとは限りません。

{{HTTPMethod("POST")}} と同様に、`PATCH` リクエストは他のリソースに副作用をもたらす可能性があります。

サーバーが `PATCH` に対応しているかどうかを調べるために、サーバーは {{HTTPHeader("Allow")}} または {{HTTPHeader("Access-Control-Allow-Methods")}} （[CORS](/ja/docs/Web/HTTP/Guides/CORS) の場合）レスポンスヘッダーのリストに追加することで対応状況を知らせることができます。

`PATCH` が対応していることを示すもう一つの暗黙的な指標は、{{HTTPHeader("Accept-Patch")}} ヘッダー（通常、リソースに対する {{HTTPMethod("OPTIONS")}} リクエストの後に送信される）であり、これはサーバーがリソースに対する `PATCH` リクエストで理解可能なメディア種別を掲載しているものである。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>鮮度を表す情報が含まれている場合のみ可能</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Learn_web_development/Extensions/Forms">HTML フォーム</a>での利用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```http
PATCH <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで提供される情報と組み合わせたときの、リクエストのターゲットリソースを識別します。
    これは元のサーバーへのリクエストにおいては絶対パス（`/path/to/file.html` など）であり、プロキシーへのリクエストにおいては絶対 URL（`http://www.example.com/path/to/file.html` など）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリー成分。
    多くの場合、`key=value` の組の形で識別情報を保持するために使用されます。

## 例

### リソースの変更に成功

サーバー上に、数値 ID `123` を持つユーザーを表すリソースが以下の書式で存在すると仮定します。

```json
{
  "firstName": "Example",
  "LastName": "User",
  "userId": 123,
  "signupDate": "2024-09-09T21:48:58Z",
  "status": "active",
  "registeredDevice": {
    "id": 1,
    "name": "personal",
    "manufacturer": {
      "name": "Hardware corp"
    }
  }
}
```

リソース全体を上書きする代わりに、`PATCH` リクエストはリソースの特定の部分のみを変更します。
このリクエストは `status` フィールドを更新します。

```http
PATCH /users/123 HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 27
Authorization: Bearer ABC123

{
  "status": "suspended"
}
```

`PATCH` リクエストの解釈と認証は実装に依存します。
成功した場合は、[成功したレスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス) のいずれかで示されます。
この例では、操作に関する追加コンテキストを本体で送信する必要がないため、{{HTTPStatus("204", "204 No Content")}} が使用されています。
{{HTTPHeader("ETag")}} を指定して、呼び出し側が将来的に[条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)を実行できるようにしています。

```http
HTTP/1.1 204 No Content
Content-Location: /users/123
ETag: "e0023aa4f"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ブラウザーはユーザー主導のアクションに `PATCH` メソッドを使用しないため、「ブラウザー互換性」は適用されません。
開発者は [`fetch()`](/ja/docs/Web/API/Window/fetch) を使ってこのリクエストメソッドを設定することができます。

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} ヘッダー
- {{HTTPHeader("Accept-Patch")}} – サーバーが受け入れる PATCH 文書の形式を指定します。
- [JSON Patch Generator](https://jsoning.com/jsonpatch/)
