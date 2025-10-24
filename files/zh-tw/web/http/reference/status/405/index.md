---
title: 405 Method Not Allowed
slug: Web/HTTP/Reference/Status/405
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`405 Method Not Allowed`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器理解請求方法，但目標資源不支援此方法。伺服器**必須**在 405 回應中產生一個 {{HTTPHeader("Allow")}} 標頭，列出目標資源目前支援的方法。

檔案或目錄的伺服器端權限設定不當可能會導致 405 回應，即使該請求在正常情況下應該成功。

## 狀態

```http
405 Method Not Allowed
```

## 範例

### 禁用 TRACE 方法

由於安全性考量，伺服器擁有者通常會禁止使用 `TRACE` 方法。以下範例顯示了一個典型回應，其中伺服器不允許使用 `TRACE` 方法：

```http
TRACE / HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 405 Method Not Allowed
Content-Length: 0
Date: Fri, 28 Jun 2024 14:30:31 GMT
Server: ECLF (nyd/D179)
Allow: GET, POST, HEAD
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Allow")}}
- {{HTTPStatus("501", "501 Not Implemented")}}、{{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 狀態碼定義](https://httpwg.org/specs/rfc9110.html#status.405)
- [如何修復 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [排除 HTTP 405](https://learn.microsoft.com/zh-tw/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
