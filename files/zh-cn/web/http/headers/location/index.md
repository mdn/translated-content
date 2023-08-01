---
title: Location
slug: Web/HTTP/Headers/Location
---

{{HTTPSidebar}}

**`Location`** 首部指定的是需要将页面重新定向至的地址。一般在响应码为 3xx 的响应中才会有意义。

发送新请求，获取 Location 指向的新页面所采用的方法与初始请求使用的方法以及重定向的类型相关：

- {{HTTPStatus("303")}} (See Also) 始终引致请求使用 {{HTTPMethod("GET")}} 方法，而，而 {{HTTPStatus("307")}} (Temporary Redirect) 和 {{HTTPStatus("308")}} (Permanent Redirect) 则不转变初始请求中的所使用的方法；
- {{HTTPStatus("301")}} (Permanent Redirect) 和 {{HTTPStatus("302")}} (Found) 在大多数情况下不会转变初始请求中的方法，不过一些比较早的用户代理可能会引发方法的变更（所以你基本上不知道这一点）。

状态码为上述之一的所有响应都会带有一个 Location 首部。

除了重定向响应之外，状态码为 {{HTTPHeader("201")}} (Created) 的消息也会带有 Location 首部。它指向的是新创建的资源的地址。

[`Location`](/zh-CN/docs/Web/HTTP/Headers/Location) 与 `Content-Location`是不同的，前者（[`Location`](/zh-CN/docs/Web/HTTP/Headers/Location) ）指定的是一个重定向请求的目的地址（或者新创建的文件的 URL），而后者（ `Content-Location`）指向的是经过内容协商后的资源的直接地址，不需要进行进一步的内容协商。Location 对应的是响应，而 Content-Location 对应的是要返回的实体。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Location: <url>
```

## 指令

- \<url>
  - : 相对地址（相对于要访问的 URL）或绝对地址。

## 示例

```plain
Location: /index.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Content-Location")}}
- 包含 `Location` 首部的响应状态码：{{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}。
