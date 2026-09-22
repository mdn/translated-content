---
title: If-Match ヘッダー
short-title: If-Match
slug: Web/HTTP/Reference/Headers/If-Match
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`If-Match`** {{Glossary("Request header", "リクエストヘッダー")}}は、リクエストを[条件付き](/ja/docs/Web/HTTP/Guides/Conditional_requests)にします。
サーバーは、{{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドに対してはリソースを返し、{{HTTPMethod("PUT")}} などの安全でないメソッドに対してはリソースをアップロードしますが、これらは、リソースが `If-Match` リクエストヘッダー内の {{HTTPHeader("ETag")}} 値のいずれかと一致する場合にのみ行われます。
条件が満たされない場合、代わりに {{HTTPStatus("412", "412 Precondition Failed")}} レスポンスが返されます。

格納された {{HTTPHeader("ETag")}} との比較では、強い比較アルゴリズムを使用、つまり 2 つのファイルがバイト単位で同一である場合のみ同一とみなします。列挙された `ETag` に `W/` 接頭辞がついている場合は、弱いエンティティタグであることを示し、この比較アルゴリズムでの比較は行われません。

一般的な使用例は 2 つあります。

- {{HTTPMethod("GET")}} および {{HTTPMethod("HEAD")}} メソッドの場合は、 {{HTTPHeader("Range")}} ヘッダーと組み合わせて使用され、リクエストされた新しい範囲が以前のものと同じリソースからのものであることを保証することができます。
- 他のメソッド、特に {{HTTPMethod("PUT")}} の場合は、 `If-Match` を使用して[更新プログラムが失われる問題](https://www.w3.org/1999/04/Editing/#3.1)を防ぐことができます。
  ユーザーがアップロードしたいリソースの変更が、元のリソースがフェッチされた後に行われた別の変更を上書きしないかどうかを確認できます。

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
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## ディレクティブ

- `<etag_value>`
  - : リクエストされたリソースを一意に表すエンティティタグです。
    二重引用符の間に置かれた {{Glossary("ASCII")}} 文字列 (`"675af34563dc-tr34"` など) です。
    これらのタグは「弱い」こと、つまり、意味的にはリソースを表現しているが、バイト単位の一致を示していないことを示すために、 `W/` という接頭辞を付けることができます。
    しかし、 `If-Match` ヘッダーでは、弱いエンティティタグは一致することはありません。
- `*`
  - : アスタリスクは任意のリソースを表す特殊な値です。
    なお、オリジンサーバーでターゲットリソースについての現在の表現をがない場合、`false` として一致します。

## 例

```http
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} conditional request headers
- {{HTTPStatus("412", "412 Precondition Failed")}}
