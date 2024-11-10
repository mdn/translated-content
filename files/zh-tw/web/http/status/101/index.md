---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`101 Switching Protocols`** 資訊回應碼表示伺服器正在切換協定。協定是從用戶端接收到的 {{HTTPHeader("Upgrade")}} 請求標頭中指定的。

伺服器在此回應中包含一個 {{HTTPHeader("Upgrade")}} 回應標頭，以指示它切換到的協定。該過程在以下文章中描述：[協定升級機制](/zh-TW/docs/Web/HTTP/Protocol_upgrade_mechanism)。

## 狀態

```http
101 Switching Protocols
```

## 範例

協定切換可能與 [WebSocket](/zh-TW/docs/Web/API/WebSockets_API) 一起使用。

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 規範

{{Specifications}}

## 參見

- [協定升級機制](/zh-TW/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/zh-TW/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
