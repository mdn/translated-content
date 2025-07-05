---
title: 501 Not Implemented
slug: Web/HTTP/Reference/Status/501
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`501 Not Implemented`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼表示伺服器不支援完成請求所需的功能。

此狀態的回應也可能包含 {{HTTPHeader("Retry-After")}} 標頭，告知用戶端在指定時間後可以重試請求。`501` 回應預設是可快取的，除非快取標頭另有指示。

`501` 狀態碼適用於伺服器無法識別請求方法，且無法對任何資源提供該方法的支援。伺服器必須支援 {{HTTPMethod("GET")}} 和 {{HTTPMethod("HEAD")}}，因此不得對這些方法的請求回應 `501`。如果伺服器可識別該方法，但故意不允許使用，則應回應 {{HTTPStatus("405", "405 Method Not Allowed")}}。

如果你造訪某個網頁時收到 `501` 錯誤，這通常需要由伺服器擁有者或管理員進行調查與修復。你可以嘗試清除該網域的瀏覽器快取、停用代理（如果有使用），或稍後再試，以確認問題是否已解決。

當代理伺服器無法處理 HTTP 擴展框架（{{RFC("2774")}}）應用程式所使用的請求方法時，也可能發生 `501` 錯誤。在 Web 分散式創作與版本管理（{{Glossary("WebDAV")}}）環境中，若請求方法（如 `SEARCH` 或 `PROPFIND`）未配置 URL 處理程序，也可能導致 `501` 錯誤。

## 狀態

```http
501 Not Implemented
```

## 範例

### 擴展方法不受支援

在以下的 HTTP 擴展框架範例中，用戶端發送了一個請求，並在 `C-MAN` 標頭中指定了一個強制擴展。{{HTTPHeader("Connection")}} 標頭指定這些擴展應按[逐跳](/zh-TW/docs/Web/HTTP/Reference/Headers#逐跳標頭)方式處理。代理拒絕轉發 `M-GET` 方法，因此回應 `501` 錯誤：

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 501 Not Implemented
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 501 錯誤](https://learn.microsoft.com/zh-tw/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)（微軟 ASP.NET 文件）
