---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

HTTP **`421 Misdirected Request`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示該請求被導向到一個無法產生回應的伺服器。這可能是因為伺服器未設定為針對請求 URI 中包含的[方案](/zh-TW/docs/Web/URI/Reference/Schemes)與[權威](/zh-TW/docs/Web/URI/Reference/Authority)組合產生回應而發送的。

用戶端可以嘗試使用不同的連線重新發送請求。

## 狀態

```http
421 Misdirected Request
```

## 範例

### Apache SNI 錯誤

給定以下請求：

```http
GET / HTTP/1.1
Host: abc.example.com
```

在例如萬用證書（`*.example.com`）的情況下，且一個連線被重複使用於多個網域（例如 `abc.example.com`、`def.example.com`），伺服器可能會回應 421：

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [多個主機與錯誤導向請求](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache 伺服器文件
- [TLS 1.3](/zh-TW/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- [伺服器名稱指示（SNI）](https://en.wikipedia.org/wiki/Server_Name_Indication)
- [傳輸層安全性（TLS）配置](/zh-TW/docs/Web/Security/Practical_implementation_guides/TLS)
