---
title: HEAD
slug: Web/HTTP/Methods/HEAD
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**HTTP `HEAD` 方法**請求返回與使用 HTTP {{HTTPMethod("GET")}} 方法請求相同 URL 時將返回的標頭。例如，如果某個 URL 可能產生大文件下載，則 `HEAD` 請求可以讀取其 {{HTTPHeader("Content-Length")}} 標頭以檢查文件大小，而無需實際下載文件。

> [!WARNING]
> 對 `HEAD` 方法的回應*不應*包含主體。如果它仍然包含主體，則該主體**必須**被忽略：任何可能描述錯誤主體的{{glossary("Representation header", "表示標頭")}}將被假定為描述類似 `GET` 請求將收到的回應。

如果對 `HEAD` 請求的回應顯示緩存的 URL 回應現已過時，即使沒有進行 `GET` 請求，緩存的副本也將被使無效。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "冪等")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "可緩存")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Learn_web_development/Extensions/Forms">HTML 表單</a>中是否允許
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
