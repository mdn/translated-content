---
title: 226 IM Used
slug: Web/HTTP/Reference/Status/226
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP の **`226 IM Used`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、サーバーが {{HTTPMethod("GET")}} に対するレスポンスで{{Glossary("delta", "デルタ")}}を返したことを示します。
これは、 HTTP デルタエンコーディングのコンテキストで使用されます。

IM はインスタンス操作 (instance manipulation) の略で、デルタを生成するアルゴリズムを指します。
デルタエンコーディングでは、クライアントは 2 つのヘッダーを含む {{HTTPMethod("GET")}} リクエストを送信します。1 つは、差分アルゴリズムの推奨を示す `A-IM:`、もう 1 つは、クライアントが保有するリソースのバージョンを指定する {{HTTPHeader("If-None-Match")}} です。
サーバーは、文書全体ではなく、指定されたベース文書に対する相対的なデルタをレスポンスとして返します。
このレスポンスは、`226` ステータスコード、使用される差分アルゴリズムを記述する `IM:` ヘッダーを使用し、デルタに関連付けられたベース文書と一致する {{HTTPHeader("ETag")}} を含む `Delta-Base:` ヘッダーを入れることができます。

> [!WARNING]
> HTTP デルタエンコーディングの対応は進んでおらず、実装がわずかしかありません。
> 代わりに、ほとんどのシステムは、帯域幅を削減するために[圧縮メソッド](/ja/docs/Web/HTTP/Guides/Compression)のみに依存していますが、圧縮とデルタエンコーディングを組み合わせることも可能です。
>
> クライアントとサーバーがデルタエンコーディングに対応していても、プロキシーやキャッシュが対応していない場合があり、システムに HTTP デルタエンコーディングを追加する複雑さが、そのメリットを上回る可能性があります。

## ステータス

```http
226 IM Used
```

## 例

### `208` を `vcdiff` デルタアルゴリズムで受信

次の `GET` リクエストでは、クライアントはリソースをリクエストし、 ETag `abcd123` を持つキャッシュされたバージョンを保有しています。
`A-IM:` ヘッダーは、`vcdiff` および `diffe` デルタアルゴリズムを推奨していることを示しています。

```http
GET /resource.txt HTTP/1.1
Host: example.com
A-IM: vcdiff, diffe
If-None-Match: "abcd123"
```

サーバーがデルタエンコードに対応していると想定すると、 ETag `abcd123` のバージョンからの差分として応答します。
`IM` ヘッダーは `vcdiff` アルゴリズムが使用されていることを示し、`Delta-Base:` ヘッダーは差分が ETag `abcd123` のリソースに基づいていることを示します。

```http
HTTP/1.1 226 IM Used
ETag: "5678a23"
IM: vcdiff
Content-Type: text/plain
Content-Length: 123
Delta-Base: abcd123

...
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus("200")}}
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [Syndication feed deltas help reduce subscription bandwidth costs](https://www.ctrl.blog/entry/feed-delta-updates.html) (2017)
