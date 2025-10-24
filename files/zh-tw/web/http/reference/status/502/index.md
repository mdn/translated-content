---
title: 502 Bad Gateway
slug: Web/HTTP/Reference/Status/502
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`502 Bad Gateway`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼表示充當閘道器或{{Glossary("Proxy_server", "代理")}}的伺服器從上游伺服器接收到無效回應。

此回應與 {{HTTPStatus("500", "500 Internal Server Error")}} 類似，因為它是伺服器錯誤的通用的「捕獲所有」回應。但不同之處在於，它特指請求鏈中錯誤發生的特定點。如果來源伺服器向閘道器發送了有效的 HTTP 錯誤回應，閘道器應將該回應傳遞給用戶端，而非返回 `502`，以確保錯誤原因透明化。如果代理或閘道器未能從來源伺服器接收到任何 HTTP 回應，它應改為向用戶端發送 {{HTTPStatus("504", "504 Gateway Timeout")}}。

`502` 錯誤的成因眾多，通常需要伺服器擁有者或管理員進行調查才能修復。例外情況是用戶端的網路錯誤，尤其是當其他訪客可以正常使用該服務時。如果用戶端使用 VPN 或其他自訂網路設定，應檢查網路設定、防火牆配置、代理設定、DNS 設定等。

## 狀態

```http
502 Bad Gateway
```

## 範例

### 502 閘道器錯誤回應

以下請求嘗試擷取網頁，但收到 `502` 回應。回應主體包含描述伺服器狀態的頁面，並附有一個指向支援頁面的連結。

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 502 Bad Gateway
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="zh">
<head>
  <title>502 Bad Gateway</title>
</head>
<body>
  <h1>Bad Gateway</h1>
  <p>伺服器無法完成你的請求，請稍後再試。</p>
  <p>如果此問題持續發生，請<a href="https://example.com/support">聯絡支援</a>。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("504", "504 Gateway Timeout")}}
