---
title: Warning
slug: Web/HTTP/Headers/Warning
---

{{HTTPSidebar}}

**`Warning`** 是一个通用报文首部，包含报文当前状态可能存在的问题。在响应中可以出现多个 Warning 首部。

一般来说，Warning 首部可以应用于任何类型的报文。然而一部分警告码（warn-code）是为缓存代理服务器定制的，并且只可以应用在响应报文中。

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## 指令

- \<warn-code>

  - : 三位数字警告码。第一位数字表示 Warning 信息在验证之后是否需要从已存储的响应中删除。

    - `1xx` 警告码描述了关于当前响应的有效期或者验证状态，并且将会在成功验证后被缓存服务器删除。
    - `2xx` 警告码描述了验证之后不会被修复的某些展现内容方面的警告信息，并且在验证之后不会被缓存服务器删除。

- \<warn-agent>
  - : 添加到 Warning 首部的服务器或者软件的名称或者伪名称（当代理不可知的时候可以用 "-" 代替）。
- \<warn-text>
  - : 用来描述错误信息的警告文本。
- \<warn-date>
  - : 可选。假如多个 Warning 被发送，那么需包含一个与 {{HTTPHeader("Date")}} 首部相对应的日期字段。

## 警告码

[由 iana.org 维护的 HTTP 警告码登记表](http://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml)规定了警告码的命名空间。

| 码值 | 文字描述                         | 详细说明                                                                                           |
| ---- | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | 由缓存服务器提供的响应已过期（设置的失效时间已过）。                                               |
| 111  | Revalidation Failed              | 由于无法访问服务器，响应验证失败。                                                                 |
| 112  | Disconnected Operation           | 缓存服务器断开连接。                                                                               |
| 113  | Heuristic Expiration             | 如果缓存服务器采用启发式方法，将缓存的有效时间设定为 24 小时，而在该响应的年龄超过 24 小时时发送。 |
| 199  | Miscellaneous Warning            | 任意的、未明确指定的警告信息。                                                                     |
| 214  | Transformation Applied           | 由代理服务器添加，如果它对返回的展现内容进行了任何转换，比如改变了内容编码、媒体类型等。           |
| 299  | Miscellaneous Persistent Warning | 与 199 类似，只不过指代的是持久化警告。                                                            |

## 示例

```plain
Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Date")}}
- [HTTP respnose status codes](/zh-CN/docs/Web/HTTP/Status)
