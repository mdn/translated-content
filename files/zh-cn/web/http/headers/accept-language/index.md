---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
---

{{HTTPSidebar}}

**`Accept-Language`** 请求头允许客户端声明它可以理解的自然语言，以及优先选择的区域方言。借助[内容协商机制](/zh-CN/docs/Web/HTTP/Content_negotiation)，服务器可以从诸多备选项中选择一项进行应用，并使用 {{HTTPHeader("Content-Language")}} 应答头通知客户端它的选择。浏览器会基于其用户界面语言为这个请求头设置合适的值，即便是用户可以进行修改，但是这种情况极少发生（因为可增加指纹独特性，通常也不被鼓励）（译者注：通常只在测试网站的多语言支持时手动修改它；或为进一步减少指纹独特性，改为最常见的英文）。

当服务器无法通过其他方式来确定应当使用的语言时——例如某一特定的 URL，这是用户明确指定的——这个请求头可以用作提示。建议服务器端永远不要覆盖明确指定的信息。`Accept-Language` 消息头的内容通常不在用户的掌控之中（例如在国外旅行时到提供网络服务的场所上网）；另外用户可能会想要浏览非本地用户界面语言的页面。

如果服务器不能提供任何可以匹配的语言的版本，那么理论上来说应该返回一个 {{HTTPStatus("406")}}（Not Acceptable，不被接受）的错误码。但是为了更好的用户体验，这种方法很少被采用，取而代之的是将其忽略。

| Header type                                                     | {{Glossary("Request header")}} |
| --------------------------------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}}                           | no                             |
| {{Glossary("Simple header", "CORS-safelisted request-header")}} | yes                            |

## 语法

```plain
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## 指令

- `<language>`
  - : 用含有两到三个字符的字符串表示的语言码或完整的语言标签。除了语言本身之外，还会包含其他方面的信息，显示在中划线（"-"）后面。最常见的额外信息是国家或地区变种（如"en-US"）或者表示所用的字母系统（如"sr-Lat"）。其他变种诸如拼字法（"de-DE-1996"）等通常不被应用在这种场合。
- `*`
  - : 任意语言；`"*"` 表示通配符（wildcard）。
- `;q=` (q-factor weighting)
  - : 此值代表优先顺序，用相对{{glossary("Quality values", "质量价值")}}表示，又称为*权重*。

## 示例

```plain
Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5

Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)
- 表示此 Header 的内容协商结果的消息头：{{HTTPHeader("Content-Language")}}
- 其他类似的消息头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Charset")}}、{{HTTPHeader("Accept")}}
