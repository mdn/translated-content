---
title: 404 Not Found
slug: Web/HTTP/Reference/Status/404
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`404 Not Found`** [用戶端錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#用戶端錯誤回應)狀態碼表示伺服器找不到所請求的資源。導致 404 頁面的連結通常稱為無效或死連結，可能會受到[失效連結](https://zh.wikipedia.org/wiki/失效連結)的影響。

404 狀態碼僅表示資源遺失，但不指明這是暫時的還是永久的。如果資源永久刪除，伺服器應傳送 {{HTTPStatus("410", "410 Gone")}} 狀態。

網站上的 404 錯誤可能會導致訪客的使用者體驗不佳，因此應盡量減少內部及外部的失效連結，以避免讀者感到困惑或沮喪。常見的 404 回應原因包括輸入錯誤的 URL，或是頁面已移動或刪除但未進行適當的重新導向。更多資訊請參閱 [HTTP 重新導向指南](/zh-TW/docs/Web/HTTP/Guides/Redirections)。

## 狀態

```http
404 Not Found
```

## 範例

### 頁面未找到

獲取不存在的頁面可能會產生如下的請求：

```http
GET /my-deleted-blog-post HTTP/1.1
Host: example.com
```

伺服器回應類似如下內容：

```http
HTTP/1.1 404 Not Found
Age: 249970
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Expires: Fri, 05 Jul 2024 11:40:58 GMT
Last-Modified: Tue, 25 Jun 2024 14:14:48 GMT
Server: ECAcc (nyd/D13E)
Vary: Accept-Encoding
X-Cache: 404-HIT
Content-Length: 1256

<!doctype html>
<head>
    <title>404 not found</title>
    ...
```

### 在 Apache 中設定自訂錯誤頁面

對於 Apache 伺服器，可以在 `.htaccess` 檔案中指定自訂 404 頁面的路徑。以下範例使用 `notfound.html` 作為 404 頁面，然而一般做法是將其命名為 `404.html` 或 `404.php`（取決於伺服器端技術）並放置於伺服器的頂層目錄：

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> 適度設計自訂 404 頁面是個不錯的做法。你可以讓 404 頁面變得幽默且具有親和力，但不要讓訪客感到困惑，不知道為何會看到這個預期外的頁面。
>
> 若需自定義 404 頁面範例，請參閱 [KonMari 404 頁面](https://konmari.com/404)。

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("410")}}
- [維基百科: HTTP 404](https://zh.wikipedia.org/wiki/HTTP_404)
