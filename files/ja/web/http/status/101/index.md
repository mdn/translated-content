---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
---

{{HTTPSidebar}}

HTTP の **`101 Switching Protocols`** レスポンスコードは、 {{HTTPHeader("Upgrade")}} リクエストヘッダーを含むメッセージが送られたクライアントが要求する際に、サーバーが切り替えようとしているプロトコルを示します。

サーバーはこのレスポンスに {{HTTPHeader("Upgrade")}} レスポンスヘッダーを含めて、切り替え先のプロトコルを示します。手順は[プロトコル更新メカニズム](/ja/docs/Web/HTTP/Protocol_upgrade_mechanism)の記事で詳細に説明しています。

## 状態

```
101 Switching Protocols
```

## 例

切り替えるプロトコルで [WebSockets](/ja/docs/Web/API/WebSockets_API) が使用される場合です。

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 仕様書

| 仕様書                                              | 題名                                                              |
| --------------------------------------------------- | ----------------------------------------------------------------- |
| {{RFC("7231", "101 Switching Protocol" , "6.2.2")}} | Hypertext Transfer Protocol (HTTP/1.1):セマンティクスとコンテンツ |

## 関連情報

- [プロトコル更新メカニズム](/ja/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSocket](/ja/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
