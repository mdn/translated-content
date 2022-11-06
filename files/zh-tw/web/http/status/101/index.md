---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
---

{{HTTPSidebar}}

HTTP **`101 Switching Protocols`** 回應碼表示伺服器正在切換到用戶端在請求標頭{{HTTPHeader("Upgrade")}} 中所要求的通訊協定。

伺服端將在回應中包含 {{HTTPHeader("Upgrade")}} 標頭以表明其所切換的通訊協定。此過程在文章 [Protocol upgrade mechanism](/zh-TW/docs/Web/HTTP/Protocol_upgrade_mechanism) 中有更加詳細的描述。

## 狀態

```plain
101 Switching Protocols
```

## 範例

通訊協定切換可能會用於 [WebSockets](/zh-TW/docs/Web/API/WebSockets_API) 中。

```plain
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## 規範

{{Specifications}}

## 參見

- [Protocol upgrade mechanism](/zh-TW/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/zh-TW/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
