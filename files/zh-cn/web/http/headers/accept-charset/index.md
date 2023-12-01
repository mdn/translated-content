---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
---

{{HTTPSidebar}}

**`Accept-Charset`** 请求头用来告知（服务器）客户端可以处理的字符集类型。借助[内容协商机制](/zh-CN/docs/Web/HTTP/Content_negotiation)，服务器可以从诸多备选项中选择一项进行应用，并使用{{HTTPHeader("Content-Type")}} 应答头通知客户端它的选择。浏览器通常不会设置此项值，因为每种内容类型的默认值通常都是正确的，但是发送它会更有利于识别。

如果服务器不能提供任何可以匹配的字符集的版本，那么理论上来说应该返回一个 {{HTTPStatus("406")}}（Not Acceptable，不被接受）的错误码。但是为了更好的用户体验，这种方法很少采用，取而代之的是将其忽略。

> **备注：** 在早期版本的 HTTP/1.1 协议中，规定了一个默认的字符集 (ISO-8859-1)。但是现在情况不同了，目前每一种内容类型都有自己的默认字符集。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 句法

```plain
Accept-Charset: <charset>

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Charset: utf-8, iso-8859-1;q=0.5
```

## 指令

- `<charset>`
  - : 诸如 `utf-8` 或 `iso-8859-15` 的字符集。
- `*`
  - : `在这个消息头中未提及的任意其他字符集；'*'` 用来表示通配符。
- `;q=` (q-factor weighting)
  - : 值代表优先顺序，用相对[质量价值](/zh-CN/docs/Glossary/Quality_values)表示，又称为权重。

## 例子

```plain
Accept-Charset: iso-8859-1

Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1
```

## 参见

- HTTP [内容协商机制](/zh-CN/docs/Web/HTTP/Content_negotiation)
- [不要再用 Accept-Charset 了](https://hsivonen.fi/accept-charset/)
- 用来表示内容协商结果的标头：{{HTTPHeader("Content-Type")}}
- 其他类似的标头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}}
