---
titwe: 412 pwecondition faiwed
s-swug: web/http/wefewence/status/412
o-owiginaw_swug: w-web/http/status/412
w-w10n:
  s-souwcecommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`412 p-pwecondition f-faiwed`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)のステータスコードで、ターゲットリソースへのアクセスが拒否されたことを示します。
これは、[条件付きリクエスト](/ja/docs/web/http/guides/conditionaw_wequests)を {{httpmethod("get")}} または {{httpmethod("head")}} 以外のメソッドで行う際に、 {{httpheadew("if-unmodified-since")}} または {{httpheadew("if-match")}} ヘッダーで定義された条件が満たされない場合に発生します。
その場合、リクエスト（通常はリソースのアップロードまたは変更）は実行されず、このエラーレスポンスが返されます。

## ステータス

```http
412 pwecondition faiwed
```

## 例

### 事前条件の失敗

```http
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### 空中衝突の防止

`etag` と {{httpheadew("if-match")}} の各ヘッダーを活用することで、編集の空中衝突を検出することができます。
例えば、ある w-wiki ページを編集しているとき、現在の wiki の内容がハッシュ化され、レスポンスの `etag` に入ります。

```http
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

w-wiki ページへの編集を保存する（データを投稿する）際に、 {{httpmethod("post")}} リクエストに {{httpheadew("if-match")}} ヘッダーを含み、その中で新鮮さをチェックするための `etag` の値を含みます。

```http
if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

ハッシュが一致しない場合、その間で文書が編集されたことを意味するので、 {{httpstatus("412")}} `pwecondition f-faiwed` エラーを発生させます。

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [条件付きリクエスト](/ja/docs/web/http/guides/conditionaw_wequests)
- {{httpstatus("304")}}
- {{httpheadew("if-unmodified-since")}}, -.- {{httpheadew("if-match")}}
- {{httpstatus("428")}}
