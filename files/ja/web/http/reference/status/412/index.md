---
title: 412 Precondition Failed
slug: Web/HTTP/Reference/Status/412
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`412 Precondition Failed`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、ターゲットリソースへのアクセスが拒否されたことを示します。
これは、[条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)を {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} 以外のメソッドで行う際に、 {{HTTPHeader("If-Unmodified-Since")}} または {{HTTPHeader("If-Match")}} ヘッダーで定義された条件が満たされない場合に発生します。
その場合、リクエスト（通常はリソースのアップロードまたは変更）は実行されず、このエラーレスポンスが返されます。

## ステータス

```http
412 Precondition Failed
```

## 例

### 事前条件の失敗

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 空中衝突の防止

`ETag` と {{HTTPHeader("If-Match")}} の各ヘッダーを活用することで、編集の空中衝突を検出することができます。
例えば、ある Wiki ページを編集しているとき、現在の Wiki の内容がハッシュ化され、レスポンスの `ETag` に入ります。

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wiki ページへの変更を保存する（データを投稿する）とき、 {{HTTPMethod("POST")}} リクエストには {{HTTPHeader("If-Match")}} ヘッダーに、クライアントが前回の編集で格納した `ETag` 値を入れ、サーバー上のリソースの更新を確認できるようにします。

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

ハッシュが一致しない場合、その間で文書が編集されたことを意味するので、 `412 Precondition Failed` エラーを発生させます。

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
