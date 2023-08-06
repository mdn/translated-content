---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) **`412 Precondition Failed`** クライアントエラーレスポンスコードは、ターゲットリソースへのアクセスが拒否されたことを示します。これは、 {{HTTPHeader("If-Unmodified-Since")}} または {{HTTPHeader("If-None-Match")}} ヘッダーで定義された条件が満たされていない場合に、 {{HTTPMethod("GET")}} もしくは {{HTTPMethod("HEAD")}} 以外のメソッドの条件付きリクエストで発生します。その場合、リクエスト (通常はリソースのアップロードまたは変更) を行うことができず、このエラーレスポンスが返されます。

## ステータス

```
412 Precondition Failed
```

## 例

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 空中衝突の防止

`ETag` と {{HTTPHeader("If-Match")}} の各ヘッダーを活用することで、編集の空中衝突を検出することができます。

例えば、 MDN を編集しているとき、現在の Wiki の内容がハッシュ化され、レスポンスの `Etag` に入ります。

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wiki ページへの編集を保存する (データを投稿する) 際に、 {{HTTPMethod("POST")}} リクエストに {{HTTPHeader("If-Match")}} ヘッダーを含み、その中で新鮮さをチェックするための `ETag` の値を含みます。

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

ハッシュが一致しない場合、その間で文書が編集されたことを意味するので、 {{HTTPStatus("412")}} `Precondition Failed` エラーを発生させます。

## 仕様書

| 仕様書                                             | 題名                                                         |
| -------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "412 Precondition Failed" , "4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの互換性

以下に示す情報は、 MDN の GitHub から取得したものです。 (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.412")}}

## 関連情報

- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
