---
title: 301 Moved Permanently
slug: Web/HTTP/Reference/Status/301
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`301 Moved Permanently`** [重新導向回應](/zh-TW/docs/Web/HTTP/Reference/Status#重新導向訊息)狀態碼表示所請求的資源已被永久地移動到 {{HTTPHeader("Location")}} 標頭中的 URL。

收到此狀態的瀏覽器會自動請求 `Location` 標頭中 URL 的資源，將使用者重新導向到新頁面。收到此回應的搜尋引擎會將原始 URL 的連結歸屬於重新導向的資源，並將 {{Glossary("SEO")}} 排名傳遞給新的 URL。

> [!NOTE]
> 在 [Fetch 標準](https://fetch.spec.whatwg.org/#http-redirect-fetch)中，當使用者代理收到對 {{HTTPMethod("POST")}} 請求的 `301` 回應時，它會在後續的重新導向請求中使用 {{HTTPMethod("GET")}} 方法，這是 HTTP [規範](#規範)所允許的。為避免使用者代理修改請求，請改用 {{HTTPStatus("308", "308 Permanent Redirect")}}，因為 `308` 回應禁止更改方法。

## 狀態

```http
301 Moved Permanently
```

## 範例

### 對已移動資源的 301 回應

以下 {{HTTPMethod("GET")}} 請求發送到一個已設定 `301` 重新導向的資源。

```http
GET /zh-TW/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

回應包含 `301` 狀態以及 {{HTTPHeader("Location")}} 標頭，該標頭指示資源已移動到的 URL。

```http
HTTP/2 301
cache-control: max-age=2592000,public
location: /zh-TW/docs/Learn_web_development/Core/Scripting/Network_requests
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
content-length: 97

Moved Permanently。重新導向至 /en-US/docs/Learn_web_development/Core/Scripting/Network_requests
```

## 規範

{{Specifications}}

## 參見

- [HTTP 中的重新導向](/zh-TW/docs/Web/HTTP/Guides/Redirections)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("308", "308 Permanent Redirect")}} 與 `301` 等效，但請求方法不會被修改
- {{HTTPStatus("302", "302 Found")}} 臨時重新導向
