---
title: 308 Permanent Redirect
slug: Web/HTTP/Reference/Status/308
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

HTTP **`308 Permanent Redirect`** [重新導向回應](/zh-TW/docs/Web/HTTP/Reference/Status#重新導向訊息)狀態碼表示請求的資源已永久移動到由 {{HTTPHeader("Location")}} 標頭所提供的 URL。

當瀏覽器收到此狀態碼時，會自動請求 `Location` 標頭中指定的 URL，將使用者重新導向到新頁面。搜尋引擎接收到此回應時，會將指向原始 URL 的連結歸屬於重新導向後的資源，並將 {{Glossary("SEO")}} 排名傳遞給新 URL。

在重新導向請求中，請求方法和請求主體**不會被用戶端修改**。{{HTTPStatus("301", "301 Moved Permanently")}} 要求在執行重新導向時請求方法和請求主體保持不變，但較舊的用戶端通常會錯誤地使用 {{HTTPMethod("GET")}} 方法。

> [!NOTE]
> 一些 Web 應用可能會以非標準方式使用 `308 Permanent Redirect`，並用於不同目的。例如 Google Drive 使用 `308 Resume Incomplete` 回應來指示用戶端未完成的上傳已經停滯。參見 Google Drive 文件上的[執行可恢復的下載](https://developers.google.com/workspace/drive/api/guides/manage-uploads)取得更多資訊。

## 狀態

```http
308 Permanent Redirect
```

## 範例

### 移動的資源的 308 回應

```http
GET /featured HTTP/1.1
Host: www.example.org
```

```http
HTTP/1.1 308 Permanent Redirect
Location: http://www.example.com/featured
Content-Length: 0
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 重新導向](/zh-TW/docs/Web/HTTP/Guides/Redirections)
- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}，此狀態碼的等效狀態碼，可能會在請求方法不是 {{HTTPMethod("GET")}} 時修改請求方法。
- {{HTTPStatus("302", "302 Found")}}，臨時重新導向
