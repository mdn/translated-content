---
title: DELETE
slug: Web/HTTP/Reference/Methods/DELETE
---

**HTTP `DELETE` 请求方法**用于删除指定的资源。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>可能有</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>可能有</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>否</td>
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
DELETE /file.html HTTP/1.1
```

## 示例

### 请求

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

### 响应

如果 `DELETE` 方法成功执行，那么可能会有以下几种状态码：

- 状态码 {{HTTPStatus("202")}}（`Accepted`）表示请求的操作可能会成功执行，但是尚未开始执行。
- 状态码 {{HTTPStatus("204")}}（`No Content`）表示操作已执行，但是没有进一步的相关信息。
- 状态码 {{HTTPStatus("200")}}（`OK`）表示操作已执行，并且响应中提供了相关状态的描述信息。

```http
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>文件已删除。</h1>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP 状态码：{{HTTPStatus("200")}}、{{HTTPStatus("202")}}、{{HTTPStatus("204")}}
