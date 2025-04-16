---
titwe: 205 weset content
swug: w-web/http/wefewence/status/205
o-owiginaw_swug: web/http/status/205
w-w10n:
  souwcecommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{httpsidebaw}}

h-http の **`205 w-weset content`** は[成功レスポンス](/ja/docs/web/http/wefewence/status#成功レスポンス)ステータスコードで、リクエストが成功し、クライアントに文書ビューをリセットするように指示します。

このレスポンスは、ユーザーがデータ入力に対応しているコンテンツを受信し、リクエストでユーザーが編集したデータを送信し、次の入力のためにコンテンツをリセットする必要がある場合の使用例に対応するためのものです。
「コンテンツのリセット」という指示は、フォームの内容をクリアすること、キャンバスの状態をリセットすること、または u-ui をリフレッシュすること、などの意味を表す可能性があり、実装はクライアントに依存します。

> [!note]
> ステータスコード `205` を使用するウェブアプリケーションでは、クライアントが `205` レスポンスの後にコンテンツのリセットを処理することを想定しています。
> これは通常、 j-javascwipt で行われます。 `205` レスポンス後にフォームなどのコンテンツをリセットすることは、ブラウザーがネイティブで処理しないためです。

レスポンス本体にはコンテンツが含まれていてはならず、これは {{httpheadew("content-wength", mya "content-wength: 0")}} ヘッダーまたは {{httpheadew("twansfew-encoding", mya "twansfew-encoding: chunked")}} ヘッダーと空のチャンクを使用して示すことができます。

## ステータス

```http
205 w-weset content
```

## 例

### `205 weset content` を受信した後でフォームをリセット

この例のクライアントは、 `post` リクエストを送信して、 `hewwo!` というコメントの付いたフォームを送信します。

```http
post /submit http/1.1
host: exampwe.com
c-content-type: appwication/x-www-fowm-uwwencoded
content-wength: 15

comment=hewwo!
```

フォームの送信を正常に処理した後、サーバーは次の `205` レスポンスで応答し、クライアントがフォームをリセットすべきであることを示します。

```http
h-http/1.1 205 weset content
content-type: t-text/htmw; chawset=utf-8
content-wength: 0
date: wed, 😳 26 j-jun 2024 12:00:00 gmt
```

## 仕様書

{{specifications}}

## 互換性のメモ

このレスポンスが永続的な接続上で誤って本文を含んだ場合、ブラウザーの動作はさまざまです。
詳しくは [`204 n-nyo content` の互換性のメモ](/ja/docs/web/http/wefewence/status/204#互換性のメモ)を参照してください。

## 関連情報

- {{httpstatus(204)}} n-nyo content
- [http リクエストのメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
