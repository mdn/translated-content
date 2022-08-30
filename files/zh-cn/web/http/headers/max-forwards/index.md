---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
---
{{HTTPSidebar}}

The **`Max-Forwards`** 请求头被用于限制 [`TRACE`](/zh-CN/docs/Web/HTTP/Methods/TRACE) 方法可经过的服务器（通常指代理服务器）数目。 该字段以十进制整数形式指定可经过的服务器最大数目。服务器在进行下一个 [`TRACE`](/zh-CN/docs/Web/HTTP/Methods/TRACE) 请求之前，`Max-Forwards` 的值将减 1 并重新赋值，直到服务器接收到 `Max-Forwards` 的值为 0 的请求时，则不再进行转发，而是直接返回一个 `200 OK` 的响应。 

如果 [`TRACE`](/zh-CN/docs/Web/HTTP/Methods/TRACE) 请求中没有 `Max-Forwards` 请求头，就可以认为，不限制可经过的服务器最大数目。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 语法

```plain
Max-Forwards: <integer>
```

## 示例

```http
Max-Forwards: 0
Max-Forwards: 10
```

## 规范

{{Specifications}}

## 浏览器兼容性

此功能不是针对浏览器实现的。

## 参见

- HTTP [`TRACE`](/zh-CN/docs/Web/HTTP/Methods/TRACE) 方法
