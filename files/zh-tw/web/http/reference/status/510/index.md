---
title: 510 Not Extended
slug: Web/HTTP/Reference/Status/510
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`510 Not Extended`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼會在用戶端的請求聲明了一個應用於處理請求的 HTTP 擴展（{{RFC("2774")}}）但伺服器不支援該擴展時被發送。

## 狀態

```http
510 Not Extended
```

## 範例

### 擴展不受支援

在以下範例中，用戶端發送一個包含在 `C-MAN` 標頭中指定的必須擴展的請求。{{HTTPHeader("Connection")}} 標頭指定這些擴展將以[逐跳](/zh-TW/docs/Web/HTTP/Reference/Headers#逐跳標頭)的方式處理。{{Glossary("Proxy_server", "代理")}}轉發這個擴展請求，但在傳輸過程中 {{HTTPHeader("Connection")}} 標頭被剝除。由於原始伺服器未收到有關 `M-GET` 方法的任何資訊，因此回傳 `510` 作為回應：

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 510 Not Extended
```

## 規格

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
