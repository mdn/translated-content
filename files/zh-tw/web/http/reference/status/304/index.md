---
title: 304 Not Modified
slug: Web/HTTP/Reference/Status/304
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`304 Not Modified`** [重新導向回應](/zh-TW/docs/Web/HTTP/Reference/Status#重新導向訊息)狀態碼表示不需要重新傳送請求的資源。

此狀態碼會在請求為帶有 {{HTTPHeader("If-None-Match")}} 或 {{HTTPHeader("If-Modified-Since")}} 標頭的 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} [條件](/zh-TW/docs/Web/HTTP/Guides/Conditional_requests)請求，且條件判斷為「false」時傳送。這代表用戶端快取的資源仍然有效，如果條件為「true」則伺服器會回傳 {{HTTPStatus("200", "200 OK")}} 回應與資源。請參考 [HTTP 快取](/zh-TW/docs/Web/HTTP/Guides/Caching)以取得更多資訊。

此回應不得包含主體，且必須包含與等同 {{HTTPStatus("200")}} 回應相同的標頭，例如：

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Vary")}}

> [!NOTE]
> 許多[開發者工具的「網路」面板](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)會創建多餘的請求，導致出現 `304` 回應，這樣開發人員就可以查看對本地緩存的訪問。

## 狀態

```http
304 Not Modified
```

## 範例

### 針對條件請求的 304 回應

下方範例展示使用 [curl](https://curl.se/) 搭配條件請求標頭的 {{HTTPMethod("GET")}} 請求。`--http1.1` 參數用於強制使用 HTTP/1.1 協定以便閱讀。

第一個請求使用 `If-Modified-Since` 條件，日期設為未來的 2050 年 11 月 21 日。這個條件必然為「false」，因為資源不可能在尚未發生的時間之後被更新：

```bash
curl --http1.1 -I --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
 https://developer.mozilla.org/zh-TW/
```

這會產生以下 HTTP 請求：

```http
GET /zh-TW/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT
```

如果資源在 `If-Modified-Since` 標頭指定的時間之後有更新，伺服器會回傳 {{HTTPStatus("200", "200 OK")}} 及最新資源。否則，會收到如下的 `304` 回應，包含 {{HTTPHeader("ETag")}}、{{HTTPHeader("Age")}} 和 {{HTTPHeader("Expires")}} 等標頭，表示快取的資源仍然有效：

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 09:52:35 GMT
Expires: Wed, 28 Aug 2024 10:01:53 GMT
Age: 3279
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

現在使用上一個回應中的 `etag` 值，再次執行一個帶有 {{HTTPHeader("If-None-Match")}} 條件的 `curl` 指令（由於這個 `etag` 是伺服器上該資源的當前版本，我們預期會收到 `304 Not Modified` 的回應）：

```bash
curl --http1.1 -I --header 'If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"' \
 https://developer.mozilla.org/zh-TW/
```

這會產生以下 HTTP 請求：

```http
GET /zh-TW/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"
```

由於 `etag` 值在請求時相符，條件判斷失敗，因此會回傳 `304` 回應：

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 10:36:35 GMT
Expires: Wed, 28 Aug 2024 11:02:17 GMT
Age: 662
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

## 規範

{{Specifications}}

## 相容性說明

瀏覽器若在持久連線上錯誤地包含主體，行為會有所不同。詳見 {{HTTPStatus("204", "204 No Content")}}。

## 參見

- [HTTP 中的重新導向](/zh-TW/docs/Web/HTTP/Guides/Redirections)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- [HTTP 條件請求](/zh-TW/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
