---
title: Accept-Language
slug: Web/HTTP/Reference/Headers/Accept-Language
l10n:
  sourceCommit: 9cf66d1b65a11aff2e158fc090dd62a0862aeec8
---

**`Accept-Language`** 请求 HTTP 标头表示客户端所偏好的自然语言和区域设置。服务器利用[内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)机制从这些提议中选出一项，并通过 {{HTTPHeader("Content-Language")}} 响应标头将这一选择告知客户端。浏览器会根据其当前活跃的用户界面语言为该标头设定所需的值。用户很少更改此设置，而且也不建议这样做，因为这可能导致[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)。

当服务器无法通过其他方式（比如使用依赖于用户明确决定的特定 URL）确定目标内容语言时，这个标头可作为提示使用。服务器绝不应覆盖用户的明确语言选择。`Accept-Language` 的内容常常超出用户的控制范围（例如在旅行时）。用户也可能希望访问使用的语言与用户界面并不相同的页面。

如果服务器不能提供任何可以匹配的语言的版本，那么理论上来说应该返回一个 {{HTTPStatus("406")}}（Not Acceptable，不被接受）的错误码。但是为了更好的用户体验，这种方法很少被采用，取而代之的是将其忽略。

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>
        是的，但有附加限制，即值只能是 <code>0-9</code>、<code>A-Z</code>、<code>a-z</code>、空格或 <code>*,-.;=</code>。
      </td>
    </tr>
  </tbody>
</table>

## 语法

```http
Accept-Language: <language>
Accept-Language: *

// 使用质量价值语法对多个类型进行加权：
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## 指令

- `<language>`
  - : 用含有两到三个字符的字符串表示的语言码或完整的语言标签。除了语言本身之外，还会包含其他方面的信息，显示在中划线 `'-'` 后面。最常见的额外信息是国家或地区变种（如 `'en-US'` 或 `'fr-CA'`）或者表示所用的字母系统（如 `'sr-Latn'`）。其他变种诸如拼字法（`'de-DE-1996'`）等通常不被应用在这种场合。
- `*`
  - : 任意语言；`'*'` 表示通配符（wildcard）。
- `;q=` （q-factor 权重）
  - : 此值代表优先顺序，用相对{{glossary("Quality values", "质量价值")}}表示，又称为*权重*。

## 示例

```http
Accept-Language: de
```

```http
Accept-Language: de-CH
```

```http
Accept-Language: zh-CN,en;q=0.5
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP [内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)
- 表示内容协商结果的标头：{{HTTPHeader("Content-Language")}}
- 其他类似的标头：{{HTTPHeader("TE")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept")}}
