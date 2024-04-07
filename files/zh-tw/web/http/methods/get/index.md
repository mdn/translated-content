---
title: GET
slug: Web/HTTP/Methods/GET
---

{{HTTPSidebar}}

**HTTP `GET` 方法**是用來請求指定資源的表示。使用 `GET` 的請求應僅用於請求數據（不應包含數據）。

> **備註：** 在 `GET` 請求中發送主體/有效載荷可能會導致一些現有實現拒絕該請求——雖然規範沒有禁止，但語義是未定義的。最好只是避免在 `GET` 請求中發送有效載荷。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">請求是否有主體</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功響應是否有主體</th>
      <td>是</td>
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
      <th scope="row">HTML 表單中是否允許</th>
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

- [HTTP Headers](/zh-TW/docs/Web/HTTP/Headers)
- {{HTTPHeader("Range")}}
- {{HTTPMethod("POST")}}
