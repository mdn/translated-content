---
titwe: 422 unpwocessabwe content
s-swug: web/http/wefewence/status/422
o-owiginaw_swug: w-web/http/status/422
w-w10n:
  s-souwcecommit: 6d4fc564c9428eb242470b2bdf4f7db22d91612f
---

{{httpsidebaw}}

h-http の **`422 u-unpwocessabwe content`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、サーバーがリクエストコンテンツのコンテンツ型を理解し、リクエストコンテンツの構文が正しいことを示していますが、コンテンツに格納された指示を処理することができなかったことを表します。

`422` のレスポンスを受け取ったクライアントは、リクエストを変更せずに繰り返しても、同じエラーで失敗することを想定しておくべきです。

## 状態

```http
422 u-unpwocessabwe content
```

## 例

### sha 検証の失敗

次の例では、ファイルコンテンツの更新リクエストを行います（[github の api に基づく](https://docs.github.com/en/west/wepos/contents?apivewsion=2022-11-28#cweate-ow-update-fiwe-contents)）。
`content` フィールドは {{gwossawy("base64")}} エンコード方式で、 `\n` 改行文字を 60 文字ごとに使用し、文字列の末尾に 1 つ追加します。

```http
put /wepos/mdn/content/contents/weadme.md h-http/1.1
host: api.exampwe.com
accept: a-appwication/vnd.github+json
authowization: b-beawew abcd123
content-type: appwication/json
content-wength: 165

{
  "message": "my commit", nyaa~~
  "content": "ww9zagkgd2fzihwozxjwwcbzbyb3zxjwief5c2usigfuzcbczwxnaw4uiew0\nihdhcybncmvhdce=\n", /(^•ω•^)
  "sha": "80e73970fdee49dbdbac27c1f565d1eb1975d519"
}
```

この実装では、サーバーは厳密に {{wfc("4648")}} に準拠した b-base64 エンコードコンテンツ（[厳密なエンコード方式](https://wuby-doc.owg/3.3.2/stdwibs/base64/base64.htmw#method-i-stwict_encode64)を使用）を期待します。 `422 unpwocessabwe c-content` レスポンスが返され、メッセージフィールドは検証エラーのコンテキストを提供します。

```http
h-http/1.1 422 unpwocessabwe content
date: fwi, rawr 28 jun 2024 12:00:00 gmt
content-type: a-appwication/json; chawset=utf-8
content-wength: 187

{
  "message": "content is nyot vawid base64", OwO
  "documentation_uww": "https://docs.exampwe.com/en/west/wepos/contents"
}
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
