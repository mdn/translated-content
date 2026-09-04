---
title: If-None-Match ヘッダー
short-title: If-None-Match
slug: Web/HTTP/Reference/Headers/If-None-Match
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`If-None-Match`** {{Glossary("request header", "リクエストヘッダー")}}は、リクエストを[条件付き](/ja/docs/Web/HTTP/Guides/Conditional_requests)にします。
サーバーは、{{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドでリクエストされたリソースを、{{HTTPStatus("200")}} ステータスで返します。ただし、そのリソースに `If-None-Match` ヘッダー内のものと一致する {{HTTPHeader("ETag")}} が存在しない場合に限ります。
その他のメソッドについては、最終的に存在するリソースの {{HTTPHeader("ETag")}} が、リストされている値のいずれとも一致しない場合にのみ、リクエストが処理されます。

{{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドにおいて条件が満たされない場合、サーバーは {{HTTPStatus("304", "304 Not Modified")}} を返し、かつ、同じリクエストに対する 200 レスポンスで送信されるはずだったヘッダーフィールド `Cache-Control`、`Content-Location`、`Date`、`ETag`、`Expires`、`Vary` のいずれかを返さなければなりません。
サーバー側で変更を適用するメソッドの場合、条件が満たされなかった際には {{HTTPStatus("412", "412 Precondition Failed")}} が使用されます。

保存されている ETag との比較には弱い比較アルゴリズムが使用されます。つまり、内容が同等であれば、2 つのファイルは同一とみなされます。バイト単位で完全に一致している必要はありません。
たとえば、フッターの作成日付が異なる 2 つのページであっても、同一とみなされます。

{{HTTPHeader("If-Modified-Since")}} と一緒に使用した場合、`If-None-Match` が優先されます (サーバーが対応している場合)。

リクエストで `If-None-Match` を使用する一般的なケースは、次の 2 つがあります。

- {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合は、関連付けられた ETag を持つキャッシュされたエンティティを更新するため。
- 他のメソッド、特に {{HTTPMethod("PUT")}} の場合、 `If-None-Match` は `*` 値と共に使用され、存在するかどうか分かっていないファイルを保存する際に、以前他のアップロードが行われておらず、以前 PUT されたデータを失わないことを保証するために使用することができます。この問題は、 [lost update problem](https://www.w3.org/1999/04/Editing/#3.1) の一種です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## ディレクティブ

- `<etag_value>`
  - : リクエストされたリソースを一意に表すエンティティタグです。二重引用符の間に置かれた {{Glossary("ASCII")}} 文字列 (`"675af34563dc-tr34"` など) であり、 `W/` の接頭辞を付けると、弱い比較アルゴリズムを使用するべきであることを示すことができます（このアルゴリズムだけを使用する場合は `If-None-Match` では意味がありません）。
- `*`
  - : アスタリスクは任意のリソースを表す特殊な値です。通常 {{HTTPMethod("PUT")}} を使用するリソースのアップロードの場合、その識別子を持つ別なリソースがすでにアップロードされていることをする場合にのみ有用です。

## 例

```http
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} 条件付きリクエストヘッダー
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} レスポンスステータスコード
