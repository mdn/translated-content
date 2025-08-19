---
title: 426 Upgrade Required
slug: Web/HTTP/Reference/Status/426
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`426 Upgrade Required`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器拒絕使用當前協定執行請求，但在用戶端升級到不同協定後可能願意這樣做。

伺服器使用此回應發送一個 {{HTTPHeader("Upgrade")}} 標頭來表示所需的協定。

## 狀態

```http
426 Upgrade Required
```

## 範例

### 來自 HTTP/1.1 的升級請求

給系統 GET 請求：

```http
GET /resources HTTP/1.1
Host: example.com
```

來源伺服器預期請求必須使用 [HTTP/3](/zh-TW/docs/Glossary/HTTP_3) 發送：

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol.
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101", "101 Switching Protocols")}}
