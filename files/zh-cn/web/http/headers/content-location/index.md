---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

HTTP **`Content-Location`** {{Glossary("representation header", "表示标头")}}指定返回数据的备用地址。最主要的用途是用来指定要访问的资源经过[内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)后的结果的 URL。

`Content-Location` 标头和 {{HTTPHeader("Location")}} 标头是不同的。`Content-Location` 表示在[内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)发生时访问资源的直接 URL，允许客户端绕过该资源未来的内容协商。相比之下，`Location` 则表示 `3XX` 重定向的目标或者 {{HTTPStatus("201", "201 Created")}} 响应中新创建的资源的 URL。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Representation header", "表示标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-Location: <url>
```

## 指令

- `<url>`
  - : [绝对](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#绝对_url_和相对_url)地址，或者[相对](/zh-CN/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#绝对_url_和相对_url)于请求 URL 的地址。

## 示例

### 请求数据的不同格式

假设，一个站点的 API 可以返回 {{glossary("JSON")}}、{{glossary("XML")}} 或 [CSV](https://zh.wikipedia.org/wiki/逗号分隔值) 格式。如果某个文件的 URL 是 `https://example.com/documents/foo`，站点可以根据请求的 {{HTTPHeader("Accept")}} 标头返回不同的 `Content-Location`：

| 请求标头                              | 响应标头                                |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

这些 URL 仅是例子，站点可以使用任何 URL 格式，比如[查询字符串参数](/zh-CN/docs/Web/API/HTMLAnchorElement/search)：`/documents/foo?format=json`、`/documents/foo?format=xml` 等。

这样，客户端就能记住 JSON 版本在这个 URL。下次请求该文档时，就可以跳过内容协商。

服务器也可以考虑使用其他[内容协商](/zh-CN/docs/Web/HTTP/Content_negotiation)标头，例如 {{HTTPHeader("Accept-Language")}}。

### 表示交易结果的 URL

例如，某个站点上有一个 {{HTMLElement("form")}} 表单，用于转账给其他用户。

```html
<form action="/send-payment" method="post">
  <p>
    <label>
      你想把钱汇给谁？
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label>
      多少金额？
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">汇款</button>
</form>
```

当此表单被提交时，站点生成此交易的收据。服务器可以使用 `Content-Location` 来表明收据的 URL 以供未来访问。

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

<!doctype html>
（很多 HTML……）

<p>你将 $38.00 汇给了示例用户。</p>

（很多 HTML……）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Location")}}
