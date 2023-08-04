---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
---

{{HTTPSidebar}}

**`Content-Location`** 首部指定的是要返回的数据的地址选项。最主要的用途是用来指定要访问的资源经过[内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)后的结果的 URL。

{{HTTPHeader("Location")}} 与 `Content-Location`是不同的，前者（{{HTTPHeader("Location")}} ）指定的是一个重定向请求的目的地址（或者新创建的文件的 URL），而后者（ `Content-Location`）指向的是可供访问的资源的直接地址，不需要进行进一步的内容协商。Location 对应的是响应，而 Content-Location 对应的是要返回的实体。

| Header type                           | {{Glossary("Entity header")}} |
| ------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}} | no                            |

## 语法

```plain
Content-Location: <url>
```

## 指令

- \<url>
  - : 相对地址（相对于要访问的 URL）或绝对地址。

## 示例

```plain
Content-Location: /index.html
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Location")}}
