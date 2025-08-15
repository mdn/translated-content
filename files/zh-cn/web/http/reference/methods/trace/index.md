---
title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
---

**HTTP `TRACE` 方法**沿着通往目标资源的路径进行信息回环测试，提供一个有用的调试机制。

请求的最终接收者应将收到的信息（不包括下面描述的一些字段）作为 {{HTTPStatus("200")}}（`OK`）响应的信息主体反映给客户端，其 {{HTTPHeader("Content-Type")}} 为 `message/http`。最终接收者是源服务器或第一个在请求中收到 {{HTTPHeader("Max-Forwards")}} 值为 0 的服务器。

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
      <td>否</td>
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
TRACE /index.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
