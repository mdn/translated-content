---
title: 404 Not Found
slug: Web/HTTP/Status/404
---

{{HTTPSidebar}}

HTTP **`404 Not Found`** 用戶端錯誤回應碼，表明了伺服器找不到請求的資源。引發 404 頁面的連結，通常被稱作斷連或死連（broken or dead link）、並可以導到失效連結（[link rot](https://en.wikipedia.org/wiki/Link_rot)）頁面。

404 狀態碼並沒有表明資源是暫時不見、還是永遠不見。如果資源是永遠不見，就應該用 {{HTTPStatus(410)}}(Gone) 而不是 404。

## 狀態

```plain
404 Not Found
```

## 自訂錯誤頁面

很多網站都會自訂 404 錯誤頁面，以便在指引用戶後續動作方面，提供進一步的幫助。Apache 伺服器可以透過 `.htaccess` 檔案設定，程式碼如下：

```bash
ErrorDocument 404 /notfound.html
```

要參考自訂 404 錯誤頁面範例，請看看 [MDN 的 404 頁面](/zh-TW/404)。

> **備註：** 適度地客製是件好事：你可以讓 404 頁面幽默和人性化，但不要讓用戶困惑。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus(410)}}
- [維基百科的 HTTP 404](https://zh.wikipedia.org/wiki/HTTP_404)
- [404 Error](https://www.exai.com/blog/404-http-error)
