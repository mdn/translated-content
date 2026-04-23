---
title: GET
slug: Web/HTTP/Reference/Methods/GET
---

**HTTP `GET` 方法**请求指定资源的表示。使用 `GET` 的请求应该只用于请求数据，而不应该包含数据。

> [!NOTE]
> 在 `GET` 请求中发送请求体或有效载荷可能会导致一些现有的实现拒绝该请求——虽然规范没有禁止，但语义没有定义。最好是避免在 `GET` 请求中发送有效载荷。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","幂等")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable","可缓存")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">允许在 HTML 表单中使用</th>
      <td>允许</td>
    </tr>
  </tbody>
</table>

## 语法

```http
GET /index.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Range")}}
- {{HTTPMethod("POST")}}
