---
title: Max-Forwards
slug: Web/HTTP/Reference/Headers/Max-Forwards
---

**`Max-Forwards`** 请求标头被用于限制 [`TRACE`](/zh-CN/docs/Web/HTTP/Reference/Methods/TRACE) 方法可经过的服务器（通常指代理服务器）数目。它的值是一个整数，指定可经过的服务器最大数目。服务器在转发 `TRACE` 请求之前，将递减 `Max-Forwards` 的值，直到到达目标服务器，或服务器接收到 `Max-Forwards` 的值为 0 的请求。而后直接返回一个 `200 OK` 的响应（可以包含一些标头）。

如果 `TRACE` 请求中没有 `Max-Forwards` 标头，就可以认为，不限制可经过的服务器最大数目。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
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

此特性既不针对浏览器，也不在浏览器中实现。

## 参见

- HTTP [`TRACE`](/zh-CN/docs/Web/HTTP/Reference/Methods/TRACE) 方法
