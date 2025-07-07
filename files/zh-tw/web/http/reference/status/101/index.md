---
title: 101 Switching Protocols
slug: Web/HTTP/Reference/Status/101
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`101 Switching Protocols`** [資訊回應](/zh-TW/docs/Web/HTTP/Reference/Status#資訊回應)狀態碼表示伺服器已切換到的協定。協定是從用戶端接收到的 {{HTTPHeader("Upgrade")}} 請求標頭中指定的。

伺服器在此回應中包含一個 {{HTTPHeader("Upgrade")}} 回應標頭，以指示它同意切換到的協定。該過程在[協定升級機制](/zh-TW/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)指南中有詳細描述。

## 狀態

```http
101 Switching Protocols
```

## 範例

### 切換協定到 WebSocket

以下範例顯示如何與 [WebSocket](/zh-TW/docs/Web/API/WebSockets_API) 一起使用協定切換。用戶端會發送帶有 {{HTTPHeader("Upgrade")}} 標頭的 {{HTTPMethod("GET")}} HTTP 請求，該標頭也必須列在 {{HTTPHeader("Connection")}} 標頭中。伺服器同意切換協定，回傳 101 回應，表示連線已從 HTTP 切換到 WebSocket。此時，用戶端與伺服器即可開始交換 WebSocket 資料。關於如何為握手協商設置 `Sec-WebSocket-*` 標頭的資訊，請參見 [WebSocket 專用標頭](/zh-TW/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#websocket_專用標頭)。

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

## 規範

{{Specifications}}

## 參見

- [協定升級機制](/zh-TW/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [WebSocket](/zh-TW/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
