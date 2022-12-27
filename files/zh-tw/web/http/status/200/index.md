---
title: 200 OK
slug: Web/HTTP/Status/200
---

{{HTTPSidebar}}

HTTP **`200 OK`** 成功狀態碼表明請求成功。200 回應預設上是緩存的（cacheable）。

所謂「成功」的定義，取決於 HTTP 的請求方法：

- {{HTTPMethod("GET")}}：資源已取得，並傳送到訊息內文（message body）。
- {{HTTPMethod("HEAD")}}：整個標已經放在訊息內文了。
- {{HTTPMethod("POST")}}: 描述動作結果的資源已經傳送到訊息內文。
- {{HTTPMethod("TRACE")}}：訊息內文包含了請求訊息，伺服器也接受了請求。

{{HTTPMethod("PUT")}} 或 {{HTTPMethod("DELETE")}} 的成功訊息，通常不是 `200 OK`，而是 {{HTTPStatus("204")}} `No Content`（或著在資源首次上傳時，{{HTTPStatus("201")}} `Created`）。

## 狀態

```plain
200 OK
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Methods)
