---
title: Content-Type
slug: Web/HTTP/Reference/Headers/Content-Type
l10n:
  sourceCommit: 27ed2557b2d3f07807b2f662dc2cf13208406eb9
---

**`Content-Type`** 表示标头用于指示资源的原始{{Glossary("MIME type","媒体类型")}}（在发送时应用任何内容编码之前）。

在响应中，`Content-Type` 标头向客户端提供返回内容的实际内容类型。例如，当浏览器执行 MIME 嗅探时，该标头的值可能会被忽略；将 {{HTTPHeader("X-Content-Type-Options")}} 标头值设置为 `nosniff` 可防止这种行为。

在请求（例如 {{HTTPMethod("POST")}} 或 {{HTTPMethod("PUT")}}）中，客户端会告诉服务器实际发送的数据类型。

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "列入 CORS 白名单的响应标头")}}
      </th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>
        是，但额外限制了值不能包含 <em>CORS 不安全的请求标头字节</em>：0x00-0x1F（除了 0x09（HT））、<code>"():&#x3C;>?@[\]{}</code> 和 0x7F（DEL）。
        <br />解析值（忽略参数）的 MIME 类型也必须是 <code>application/x-www-form-urlencoded</code>、<code>multipart/form-data</code> 或 <code>text/plain</code>。
      </td>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## 指令

- `media-type`
  - : 资源或数据的 [MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)。
- charset
  - : 字符编码标准。不区分大小写，推荐使用小写。
- boundary
  - : 对于多部分实体，必须使用 `boundary` 指令。该指令由 1 至 70 个字符组成，这些字符选自一套已知能通过电子邮件网关的、非常健壮的字符集（并且不以空白字符结束）。它用于封装信息多个部分的边界。通常情况下，开头的边界前会加上两个破折号，而末尾边界的后面也会加上两个破折号。

## 示例

### 在 HTML 表单中使用 `Content-Type`

在 HTML 表单提交产生的 {{HTTPMethod("POST")}} 请求中，请求的 `Content-Type` 属性由 {{HTMLElement("form")}} 元素上的 `enctype` 属性来指定。

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="一些文本" />
  <input type="file" name="myFile" />
  <button type="submit">提交</button>
</form>
```

请求内容如下（此处省略了不太感兴趣的标头）：

```http
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

一些文本
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

（上传文件 foo.txt 的内容）
-----------------------------974767299852498929531610575--
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
