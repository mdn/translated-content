---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Accept-Patch`** 响应 HTTP 标头中用来声明服务器能够理解的 PATCH 请求中的媒体类型。

在对任何方法的响应中包含 **`Accept-Patch`** 意味着允许对由 Request-URI 所标识的资源执行 PATCH 操作。导致这种情况的常见原因有两个：

当服务器接收到带有不支持媒体类型的 PATCH 请求时，可以回复 {{HTTPStatus("415")}} `Unsupported Media Type` 状态码，并在 Accept-Patch 头部指明一个或多个支持的媒体类型。

> **备注：**
>
> - IANA 维护了[一个完整的官方支持的编码方式列表](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)。
> - 另外两种内容编码 `bzip` 和 `bzip2` 有时也会被使用。尽管它们并非标准。它们实现了这两个 UNIX 程序所使用的算法。请注意，由于专利许可问题，第一个已被弃用。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## 指令

无。

## 示例

```http
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## 规范

{{Specifications}}

## 浏览器兼容性

对于此标头而言，浏览器兼容性无关紧要（该标头由服务器发送，且规范未定义客户端行为）。

## 参见

- Http 方法 {{HTTPMethod("PATCH")}}
- HTTP 语义与上下文 {{RFC("7231", "PUT", "4.3.4")}}
