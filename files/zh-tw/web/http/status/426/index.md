---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`426 Upgrade Required`** 用戶端錯誤回應碼表示伺服器拒絕使用當前協定執行請求，但在用戶端升級到不同協定後可能願意這樣做。

伺服器使用此回應發送一個 {{HTTPHeader("Upgrade")}} 標頭來表示所需的協定。

## 狀態

```http
426 Upgrade Required
```

## 範例

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol
```

## 規範

{{Specifications}}

## 參見

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocols`
