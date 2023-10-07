---
title: Expires
slug: Web/HTTP/Headers/Expires
---

{{HTTPSidebar}}**`Expires`** 响应头包含日期/时间，即在此时候之后，响应过期。

无效的日期，比如 0，代表着过去的日期，即该资源已经过期。

如果在{{HTTPHeader("Cache-Control")}}响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 `Expires` 头会被忽略。

| Header type                                                               | {{Glossary("Response header")}} |
| ------------------------------------------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}}                                     | no                              |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | yes                             |

## 语法

```plain
Expires: <http-date>
```

## 指南

- \<http-date>
  - : 一个 HTTP-日期 时间戳

## 示例

```plain
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
