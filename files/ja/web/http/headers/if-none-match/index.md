---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
---

{{HTTPSidebar}}

HTTP の **`If-None-Match`** リクエストヘッダーは、リクエストを条件付きにします。 {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合、指定されたものの中に要求されたリソースの {{HTTPHeader("ETag")}} に一致するものがない場合のみ、サーバーはリソースを {{HTTPStatus("200")}} ステータスで返します。その他のメソッドの場合、最終的に存在するリソースの {{HTTPHeader("ETag")}} が列挙されたいずれの値とも一致しない場合にのみ処理します。

{{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合、条件が満たされなかったら、サーバーは HTTP ステータスコード 304 (Not Modified) を返さなければなりません。サーバー側の変更を適用するメソッドの場合、ステータスコード 412 (Precondition Failed) が使用されます。なお、 304 レスポンスを生成するサーバーは、 Cache-Control, Content-Location, Date, ETag, Expires, Vary の各ヘッダーフィールドについて、同じリクエストに対して 200 (OK) レスポンスで送信されるものを生成しなければなりません。

格納されている {{HTTPHeader("ETag")}} との比較では、*弱い比較アルゴリズム*を使用、つまり二つのファイルの内容が同等であれば等しいとみなします。バイト単位で等しい必要はありません。たとえば、フッターの作成日が異なる二つのページは、同一と見なされます。

{{HTTPHeader("If-Modified-Since")}} と一緒に使用した場合、 **`If-None-Match`** が優先されます (サーバーが対応している場合)。

一般的な使用例は二つあります。

- {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合は、関連付けられた {{HTTPHeader("ETag")}} を持つキャッシュされたエンティティを更新するため。
- 他のメソッド、特に {{HTTPMethod("PUT")}} の場合、 `If-None-Match` は `*` 値と共に使用され、存在するかどうか分かっていないファイルを保存する際に、以前他のアップロードが行われておらず、以前 PUT されたデータを失わないことを保証するために使用することができます。この問題は、 [lost update problem](https://www.w3.org/1999/04/Editing/#3.1) の一種です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
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
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## ディレクティブ

- \<etag_value>
  - : リクエストされたリソースを一意に表すエンティティタグです。二重引用符の間に置かれた ASCII 文字列 (`"675af34563dc-tr34"` など) であり、 `W/` の接頭辞を付けると、弱い比較アルゴリズムを使用するべきであることを示すことができます (このアルゴリズムだけを使用する場合は `If-None-Match` では意味がありません)。
- `*`
  - : アスタリスクは任意のリソースを表す特殊な値です。通常 {{HTTPMethod("PUT")}} を使用するリソースのアップロードの場合、その識別子を持つ別なリソースがすでにアップロードされていることをする場合にのみ有用です。

## 例

```
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## 仕様書

| 仕様書                                  | 題名                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-None-Match", "3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの互換性

{{Compat("http.headers.If-None-Match")}}

## 関連情報

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
