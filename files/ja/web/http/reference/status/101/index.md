---
title: 101 Switching Protocols
slug: Web/HTTP/Reference/Status/101
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`101 Switching Protocols`** は[情報レスポンス](/ja/docs/Web/HTTP/Reference/Status#情報レスポンス)ステータスコードで、サーバーが切り替えようとしているプロトコルを示します。
プロトコルはクライアントから受信した {{HTTPHeader("Upgrade")}} リクエストヘッダーで指定されます。

サーバーはこのレスポンスに {{HTTPHeader("Upgrade")}} レスポンスヘッダーを含めて、切り替え先のプロトコルを示します。手順は[プロトコル更新メカニズム](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)の記事で詳細に説明しています。

## 状態

```http
101 Switching Protocols
```

## 例

### WebSocket へのプロトコルの切り替え

次の例は、 [WebSockets](/ja/docs/Web/API/WebSockets_API) でプロトコルを切り替える方法を示すものです。
クライアントは、 {{HTTPMethod("GET")}} の HTTP リクエストを、 {{HTTPHeader("Upgrade")}} ヘッダー付きで送信します。これには {{HTTPHeader("Connection")}} ヘッダーにも入れる必要があります。
サーバーはプロトコルの切り替えに同意すると、 HTTP から WebSocket への接続の切り替えを意味する 101 レスポンスを返します。
この時点で、クライアントとサーバーは WebSocket データの交換を開始できます。
ハンドシェイク交渉用の `Sec-WebSocket-*` ヘッダーの設定方法に関する情報は、 [WebSocket 固有のヘッダー](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#websocket_固有のヘッダー)で得られます。

```http
GET /notifications HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
```

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 仕様書

{{Specifications}}

## 関連情報

- [プロトコル更新メカニズム](/ja/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [WebSocket](/ja/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
