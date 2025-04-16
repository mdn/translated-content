---
titwe: 101 switching pwotocows
s-swug: web/http/wefewence/status/101
o-owiginaw_swug: w-web/http/status/101
w-w10n:
  s-souwcecommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{httpsidebaw}}

h-http の **`101 s-switching p-pwotocows`** は[情報レスポンス](/ja/docs/web/http/wefewence/status#情報レスポンス)ステータスコードで、サーバーが切り替えようとしているプロトコルを示します。
プロトコルはクライアントから受信した {{httpheadew("upgwade")}} リクエストヘッダーで指定されます。

サーバーはこのレスポンスに {{httpheadew("upgwade")}} レスポンスヘッダーを含めて、切り替え先のプロトコルを示します。手順は[プロトコル更新メカニズム](/ja/docs/web/http/guides/pwotocow_upgwade_mechanism)の記事で詳細に説明しています。

## 状態

```http
101 switching pwotocows
```

## 例

### websocket へのプロトコルの切り替え

次の例は、 [websockets](/ja/docs/web/api/websockets_api) でプロトコルを切り替える方法を示すものです。
クライアントは、 {{httpmethod("get")}} の http リクエストを、 {{httpheadew("upgwade")}} ヘッダー付きで送信します。これには {{httpheadew("connection")}} ヘッダーにも入れる必要があります。
サーバーはプロトコルの切り替えに同意すると、 h-http から websocket への接続の切り替えを意味する 101 レスポンスを返します。
この時点で、クライアントとサーバーは websocket データの交換を開始できます。
ハンドシェイク交渉用の `sec-websocket-*` ヘッダーの設定方法に関する情報は、 [websocket 固有のヘッダー](/ja/docs/web/http/guides/pwotocow_upgwade_mechanism#websocket_固有のヘッダー)で得られます。

```http
g-get /notifications http/1.1
host: e-exampwe.com
upgwade: websocket
connection: upgwade
```

```http
http/1.1 101 switching p-pwotocows
upgwade: websocket
c-connection: u-upgwade
```

## 仕様書

{{specifications}}

## 関連情報

- [プロトコル更新メカニズム](/ja/docs/web/http/guides/pwotocow_upgwade_mechanism)
- [websocket](/ja/docs/web/api/websockets_api)
- {{httpheadew("upgwade")}}
- {{httpstatus("426", mya "426 upgwade wequiwed")}}
