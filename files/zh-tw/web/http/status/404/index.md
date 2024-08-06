---
title: 404 Not Found
slug: Web/HTTP/Status/404
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}

HTTP **`404 Not Found`** 回應狀態碼表示伺服器找不到所請求的資源。導致 404 頁面的連結通常稱為無效或死連結，可能會受到[失效連結](https://zh.wikipedia.org/zh-tw/%E5%A4%B1%E6%95%88%E9%80%A3%E7%B5%90)的影響。

404 狀態碼僅表示資源不存在，而不表示缺席是暫時的還是永久的。如果資源永久刪除，請改用 {{HTTPStatus("410")}}（Gone）狀態。

## 狀態

```http
404 Not Found
```

## 自訂錯誤頁面

你可以顯示一個自訂的 404 頁面，以對使用者提供更多幫助並提供下一步的指引。例如，對於 Apache 伺服器，你可以在 `.htaccess` 檔案中指定一個自訂 404 頁面的路徑：

```apacheconf
ErrorDocument 404 /notfound.html
```

有關自訂 404 頁面的範例，請參見此 [404 頁面](https://konmari.com/404)。

> [!NOTE]
> 適度地自訂設計是一個好事情。可以使你的 404 頁面幽默和人性化，但不要讓你的用戶感到困惑。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("410")}}
- [維基百科: HTTP 404](https://zh.wikipedia.org/zh-tw/HTTP_404)
