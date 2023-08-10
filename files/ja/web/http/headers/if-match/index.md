---
title: If-Match
slug: Web/HTTP/Headers/If-Match
---

{{HTTPSidebar}}

HTTP の **`If-Match`** リクエストヘッダーは、リクエストを条件付きにします。 {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合、リストされた `ETag` のいずれかと一致する場合にのみ、サーバーは要求されたリソースを返します。{{HTTPMethod("PUT")}} と他の安全ではないメソッドでは、この場合のみリソースをアップロードします。

格納された {{HTTPHeader("ETag")}} との比較では、*強い比較アルゴリズム*を使用、つまり二つのファイルがバイト単位で同一である場合のみ同一とみなします。列挙された `ETag` に `W/` 接頭辞がついている場合は弱いエンティティタグであることを示し、この比較アルゴリズムでの比較は行われません。

一般的な使用例は二つあります。

- {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合は、 {{HTTPHeader("Range")}} ヘッダーと組み合わせて使用され、リクエストされた新しい範囲が以前のものと同じリソースからのものであることを保証することができます。一致しない場合、 {{HTTPStatus("416")}} (Range Not Satisfiable) レスポンスが返されます。
- 他のメソッド、特に {{HTTPMethod("PUT")}} の場合は、 `If-Match` を使用して[更新プログラムが失われる問題](https://www.w3.org/1999/04/Editing/#3.1)を防ぐことができます。ユーザーがアップロードしたいリソースの変更が、元のリソースがフェッチされた後に行われた別の変更を上書きしないかどうかを確認できます。リクエストを満たすことができない場合、 {{HTTPStatus("412")}} (Precondition Failed) レスポンスが返されます。

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
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## ディレクティブ

- \<etag_value>
  - : リクエストされたリソースを一意に表すエンティティタグです。二重引用符の間に置かれた ASCII 文字列 (`"675af34563dc-tr34"` など) です。これらのタグは「弱い」こと、つまり、意味的にはリソースを表現しているが、バイト単位の一致を示していないことを示すために、 `W/` という接頭辞を付けることができます。しかし、 **`If-Match`** ヘッダーでは、弱いエンティティタグは一致することはありません。
- `*`
  - : アスタリスクは任意のリソースを表す特殊な値です。

## 例

```
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## 仕様書

| 仕様書                             | 題名                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Match", "3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの互換性

{{Compat("http.headers.If-Match")}}

## 関連情報

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("416")}} `Range Not Satisfiable`
- {{HTTPStatus("412")}} `Precondition Failed`
