---
title: HEAD
slug: Web/HTTP/Methods/HEAD
---

{{HTTPSidebar}}

**HTTP `HEAD` 方法**请求资源的[标头](/zh-CN/docs/Web/HTTP/Headers)信息，并且这些标头与 HTTP {{HTTPMethod("GET")}} 方法请求时返回的一致。该请求方法的一个使用场景是在下载一个大文件前先通过 `HEAD` 请求读取其 {{HTTPHeader("Content-Length")}} 标头的值获取文件的大小，而无需实际下载文件，以此可以节约带宽资源。

> **警告：** `HEAD` 方法的响应*不应*包含响应主体。即使包含了响应主体，也*必须*忽略掉：任何（可能用于描述错误响应主体的）{{glossary("Representation header", "表示标头")}}会被假定为在发送相似的 `GET` 请求时也会接收到。

如果对 `HEAD` 请求的响应显示一个缓存的 URL 响应现在已经过期，即使没有发出 `GET` 请求，缓存的副本也会失效。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>否</td>
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
      <th scope="row">
        允许在 <a href="/zh-CN/docs/Learn_web_development/Extensions/Forms">HTML 表单</a>中使用
      </th>
      <td>不允许</td>
    </tr>
  </tbody>
</table>

## 语法

```http
HEAD /index.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPMethod("GET")}}
