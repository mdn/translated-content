---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`425 Too Early`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器不願意冒險處理可能會被重放的請求，以避免潛在的重放攻擊。

如果用戶端最近與伺服器有互動，則早期數據（也稱為零往返時間[（0-RTT）數據](/zh-TW/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)）允許用戶端在連線的第一個往返中向伺服器發送數據，而無需等待 TLS [握手](/zh-TW/docs/Glossary/TCP_handshake)完成。使用早期數據發送請求的用戶端不需要包含 `Early-Data` 標頭。更多資訊請參閱 {{HTTPHeader("Early-Data")}}。

## 狀態

```http
425 Too Early
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [TLS 1.3](/zh-TW/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- {{HTTPHeader("Early-Data")}}
