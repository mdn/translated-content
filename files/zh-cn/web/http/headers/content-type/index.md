---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
---

{{HTTPSidebar}}

**`Content-Type`** 实体头部用于指示资源的 MIME 类型 {{Glossary("MIME type","media type")}} 。

在响应中，Content-Type 标头告诉客户端实际返回的内容的内容类型。浏览器会在某些情况下进行 MIME 查找，并不一定遵循此标题的值; 为了防止这种行为，可以将标题 {{HTTPHeader("X-Content-Type-Options")}} 设置为 **nosniff**。

在请求中 (如{{HTTPMethod("POST")}} 或 {{HTTPMethod("PUT")}})，客户端告诉服务器实际发送的数据类型。

| Header type                                                               | {{Glossary("Entity header")}} |
| ------------------------------------------------------------------------- | ----------------------------- |
| {{Glossary("Forbidden header name")}}                                     | no                            |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | yes                           |

## 句法

```plain
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## 指令

- `media-type`
  - : 资源或数据的 [MIME type](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 。
- charset
  - : 字符编码标准。
- boundary
  - : 对于多部分实体，boundary 是必需的，其包括来自一组字符的 1 到 70 个字符，已知通过电子邮件网关是非常健壮的，而不是以空白结尾。它用于封装消息的多个部分的边界。

## 例子

### `Content-Type` 在 HTML 表单中

在通过 HTML form 提交生成的{{HTTPMethod("POST")}}请求中，请求头的 Content-Type 由{{HTMLElement("form")}}元素上的 enctype 属性指定

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

请求头看起来像这样（在这里省略了一些 headers）：

```plain
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

---------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
---------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
---------------------------974767299852498929531610575
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Accept")}} and {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
