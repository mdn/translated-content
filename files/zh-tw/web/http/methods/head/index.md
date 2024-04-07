---
title: HEAD
slug: Web/HTTP/Methods/HEAD
---

{{HTTPSidebar}}

**HTTP `HEAD` method** 請求返回與使用 HTTP {{HTTPMethod("GET")}} 方法請求相同 URL 時將返回的標頭。例如，如果某個 URL 可能產生大文件下載，則 `HEAD` 請求可以讀取其 {{HTTPHeader("Content-Length")}} 標頭以檢查文件大小，而無需實際下載文件。

> **警告：** 對 `HEAD` 方法的響應*不應*包含主體。如果它仍然包含主體，則該主體**必須**被忽略：任何可能描述錯誤主體的{{glossary("Representation header", "表示標頭")}}將被假定為描述類似 `GET` 請求將收到的響應。

如果對 `HEAD` 請求的響應顯示緩存的 URL 響應現已過時，即使沒有進行 `GET` 請求，緩存的副本也將被使無效。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功響應是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">
        HTML 表單中是否允許
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
HEAD /index.html
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPMethod("GET")}}
