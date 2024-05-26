---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

> **警告：** 请勿使用此标头。浏览器会省略此标头，服务器也应当忽略它。

**`Accept-Charset`** 请求 HTTP 标头曾是一个用于声明客户端支持的{{glossary("character encoding", "字符编码")}}的标头。如今已不再广泛使用。

UTF-8 得到广泛支持，并且是字符编码的压倒性首选方案。为了[通过减少基于配置的熵来确保更好的隐私](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy)，所有浏览器均省略了 `Accept-Charset` 标头。

如今，`Accept-Charset` 值得注意之处在于它是几个[禁止修改的标头](/zh-CN/docs/Glossary/Forbidden_header_name)之一。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 参见

- HTTP [内容协商机制](/zh-CN/docs/Web/HTTP/Content_negotiation)
- [不要再用 Accept-Charset 了](https://hsivonen.fi/accept-charset/)
- 用来表示内容协商结果的标头：{{HTTPHeader("Content-Type")}}
- 其他类似的标头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}}
