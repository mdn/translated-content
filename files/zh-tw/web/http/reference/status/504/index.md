---
title: 504 Gateway Timeout
slug: Web/HTTP/Reference/Status/504
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`504 Gateway Timeout`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼表示當伺服器充當閘道器或{{Glossary("Proxy_server", "代理")}}時，未能及時從上游伺服器獲得回應，以完成請求。這與 {{HTTPStatus("502", "502 Bad Gateway")}} 類似，不同之處在於 `504` 狀態碼表示代理或閘道器在一定時間內未從源伺服器接收到任何 HTTP 回應。

導致 `504` 錯誤的原因有很多，解決此類問題通常需要伺服器管理員進行調查和偵錯，或者該網站可能在稍後自行恢復。例外情況是用戶端的網路錯誤，特別是如果該服務對其他訪客仍然有效，且用戶端使用 VPN 或其他自訂網路設定。在這種情況下，用戶端應檢查網路設定、防火牆配置、代理設定、DNS 組態等。

## 狀態

```http
504 Gateway Timeout
```

## 範例

### 504 Gateway Timeout 回應

以下請求嘗試獲取一個網頁，但收到 `504` 回應。回應主體包含描述伺服器狀態的頁面，並提供給訪客的支援頁面連結。

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 504 Gateway Timeout
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="zh">
<head>
  <title>504 Gateway Timeout</title>
</head>
<body>
  <h1>Gateway timeout</h1>
  <p>伺服器未能及時回應。請稍後再試。</p>
  <p>如果此問題持續發生，請<a href="https://example.com/support">聯繫支援</a>。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("502", "502 Bad Gateway")}}
