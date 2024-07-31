---
title: 304 Not Modified
slug: Web/HTTP/Status/304
l10n:
  sourceCommit: fb8c438501d119fb897a9667ee85c1486f2c03d6
---

{{HTTPSidebar}}

HTTP **`304 Not Modified`** 重新導向回應碼表示無需重新傳送所請求的資源。當請求是帶有 {{HTTPHeader("If-None-Match")}} 或 {{HTTPHeader("If-Modified-Since")}} 標頭的條件式 {{HTTPMethod("GET")}} 或 {{HTTPMethod("HEAD")}} 請求，並且該條件求值為 false 時，會發送此回應碼。如果條件求值為 true，則這是對一個已緩存的資源的隱式重定向，而該資源的請求如果沒有條件，則會導致一個 {{HTTPStatus("200")}} `OK` 的回應。

回應不得包含主體，並且必須包括與等效的 {{HTTPStatus("200")}} `OK` 回應中會發送的標頭：{{HTTPHeader("Cache-Control")}}、{{HTTPHeader("Content-Location")}}、{{HTTPHeader("Date")}}、{{HTTPHeader("ETag")}}、{{HTTPHeader("Expires")}} 和 {{HTTPHeader("Vary")}}。

> [!NOTE]
> 許多[開發者工具的「網路」面板](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)會創建多餘的請求，導致出現 `304` 回應，這樣開發人員就可以查看對本地緩存的訪問。

## 狀態

```http
304 Not Modified
```

## 範例

下面的範例顯示了使用 curl 進行的帶有條件請求標頭的 {{HTTPMethod("GET")}} 請求，以及收到的 HTTP 回應。如果我們知道自 {{HTTPHeader("If-Modified-Since")}} 標頭指定的時間戳以來資源已被更新過，則第一個範例將返回 {{HTTPStatus("200")}} `OK`。為了說明，請求使用了未來日期 2050 年 11 月 21 日，以檢查自該日期以來是否已更新資源：

```bash
curl -v --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
 https://developer.mozilla.org/en-US/
```

```http
> Request
GET /en-US/ HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.1.2
Accept: */*
If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT

< Response
HTTP/2 304
date: Tue, 21 Nov 2023 08:44:28 GMT
expires: Tue, 21 Nov 2023 08:53:14 GMT
age: 3194
etag: "e27d81b845c3716cdb5d4220d78e2799"
```

當包含來自上述回應的 [ETag](/zh-TW/docs/Web/HTTP/Headers/ETag) 的 {{HTTPHeader("If-None-Match")}} 標頭的 {{HTTPMethod("GET")}} 請求中存在 `etag` 時，也會返回一個 `304 Not Modified` 回應。因為 `etag` 存在，匹配的實體標籤未能滿足條件，因此返回了 `304` 回應：

```bash
curl -v --header 'If-None-Match: "e27d81b845c3716cdb5d4220d78e2799"' \
 https://developer.mozilla.org/en-US/
```

```http
> Request
GET /en-US/ HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.1.2
Accept: */*
If-None-Match: "e27d81b845c3716cdb5d4220d78e2799"

< Response
HTTP/2 304
date: Tue, 21 Nov 2023 08:47:37 GMT
expires: Tue, 21 Nov 2023 09:38:23 GMT
age: 2920
etag: "e27d81b845c3716cdb5d4220d78e2799"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

### 相容性注意事項

- 如果此回應在持久連接上錯誤地包含主體，瀏覽器行為會有所不同。有關更多詳細訊息，請參見 [204 No Content](/zh-TW/docs/Web/HTTP/Status/204)。

## 參見

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- [HTTP 條件請求](/zh-TW/docs/Web/HTTP/Conditional_requests)
- [204 No Content](/zh-TW/docs/Web/HTTP/Status/204)
