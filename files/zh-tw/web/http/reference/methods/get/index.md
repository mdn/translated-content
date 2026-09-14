---
title: GET
slug: Web/HTTP/Reference/Methods/GET
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**HTTP `GET` 方法**是用來請求指定資源的表示。使用 `GET` 的請求應僅用於請求數據（不應包含數據）。

> [!NOTE]
> 在 `GET` 請求中發送主體/有效載荷可能會導致一些現有實現拒絕該請求——雖然規範沒有禁止，但語義是未定義的。最好直接避免在 `GET` 請求中發送有效載荷。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功回應是否有主體</th>
      <td>是</td>
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
      <th scope="row"><a href="/zh-TW/docs/Learn_web_development/Extensions/Forms">HTML 表單</a>中是否允許</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 語法

```http
GET /index.html
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 標頭](/zh-TW/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Range")}}
- {{HTTPMethod("POST")}}
