---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`308 Permanent Redirect`** 永久重新導向狀態碼表示所請求的資源已被永久性地移至由 {{HTTPHeader("Location")}} 標頭指定的 URL。瀏覽器會重新導向到此頁面，並且搜尋引擎會更新其對資源的連結（在 SEO 術語中，這意味著「連結權重」被傳送到新的 URL）。

請求方法和主體不會被更改，而 {{HTTPStatus("301")}} 有時可能會錯誤地被更改為 {{HTTPMethod("GET")}} 方法。

> [!NOTE]
> 一些 Web 應用可能會以非標準方式使用 `308 Permanent Redirect`，並用於其他目的。例如 Google Drive 使用 `308 Resume Incomplete` 回應來指示用戶端不完整的上傳停滯。（請參見 Google Drive 文件上的[執行可恢復的下載](https://developers.google.com/drive/api/guides/manage-uploads)）

## 狀態

```http
308 Permanent Redirect
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPStatus("301", "301 Moved Permanently")}}，這個狀態碼的等效碼，但在不是 {{HTTPMethod("GET")}} 時可能會更改所使用的方法
- {{HTTPStatus("302", "302 Found")}}，臨時重新導向
