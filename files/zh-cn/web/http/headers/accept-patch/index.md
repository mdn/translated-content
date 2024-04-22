---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
---

{{HTTPSidebar}}

服务器使用 HTTP 响应头 **`Accept-Patch`** 通知浏览器请求的媒体类型 (media-type) 可以被服务器理解。

**`Accept-Patch`** in response to any method means that PATCH is allowed on the resource identified by the Request-URI. Two common cases lead to this:

A server receiving a PATCH request with an unsupported media type could reply with {{HTTPStatus("415")}} `Unsupported Media Type` and an Accept-Patch header referencing one or more supported media types.

> **备注：** An IANA registry maintains [a complete list of official content encodings](http://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1).
>
> - Two others content encoding, `bzip` and `bzip2`, are sometimes used, though not standard. They implement the algorithm used by these two UNIX programs. Note that the first one was discontinued due to patent licensing problems.

| 头部类型                                                    | {{Glossary("Response header")}} |
| ----------------------------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}}（禁止修改的 HTTP 头） | yes                             |

## 语法

```plain
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## 指令

(无)

## 示例

```plain
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## 规范

{{Specifications}}

## 浏览器兼容性

浏览器的兼容性与此标头无关（标头是由服务器发送的，规范没有定义客户端行为）。

## 参见

- HTTP 方法 {{HTTPMethod("PATCH")}}
- HTTP 语义和上下文 {{RFC("7231", "PUT", "4.3.4")}}
