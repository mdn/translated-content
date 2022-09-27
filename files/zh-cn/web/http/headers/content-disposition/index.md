---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
---

{{HTTPSidebar}}在常规的 HTTP 应答中，**`Content-Disposition`** 响应头指示回复的内容该以何种形式展示，是以**内联**的形式（即网页或者页面的一部分），还是以**附件**的形式下载并保存到本地。

在 multipart/form-data 类型的应答消息体中，**`Content-Disposition`** 消息头可以被用在 multipart 消息体的子部分中，用来给出其对应字段的相关信息。各个子部分由在{{HTTPHeader("Content-Type")}} 中定义的**分隔符**分隔。用在消息体自身则无实际意义。

Content-Disposition 消息头最初是在 MIME 标准中定义的，HTTP 表单及 {{HTTPMethod("POST")}} 请求只用到了其所有参数的一个子集。只有 `form-data` 以及可选的 `name` 和 `filename` 三个参数可以应用在 HTTP 场景中。

| Header type                                      | {{Glossary("Response header")}} (for the main body) {{Glossary("General header")}} (for a subpart of a multipart body) |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                                                                                                                        |

## 语法

### 作为消息主体中的消息头

在 HTTP 场景中，第一个参数或者是 `inline`（默认值，表示回复中的消息体会以页面的一部分或者整个页面的形式展示），或者是 `attachment`（意味着消息体应该被下载到本地；大多数浏览器会呈现一个“保存为”的对话框，将 `filename` 的值预填为下载后的文件名，假如它存在的话）。

```plain
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

### 作为 multipart body 中的消息头

在 HTTP 场景中。第一个参数总是固定不变的 `form-data`；附加的参数不区分大小写，并且拥有参数值，参数名与参数值用等号 (`'='`) 连接，参数值用双引号括起来。参数之间用分号 (`';'`) 分隔。

```plain
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### 指令

- `name`
  - : 后面是一个表单字段名的字符串，每一个字段名会对应一个子部分。在同一个字段名对应多个文件的情况下（例如，带有 {{htmlattrxref("multiple", "input")}} 属性的 `{{HTMLElement("input","&lt;input type=file&gt;")}}` 元素），则多个子部分共用同一个字段名。如果 name 参数的值为 `'_charset_'` ，意味着这个子部分表示的不是一个 HTML 字段，而是在未明确指定字符集信息的情况下各部分使用的默认字符集。
- `filename`
  - : 后面是要传送的文件的初始名称的字符串。这个参数总是可选的，而且不能盲目使用：路径信息必须舍掉，同时要进行一定的转换以符合服务器文件系统规则。这个参数主要用来提供展示性信息。当与 `Content-Disposition: attachment` 一同使用的时候，它被用作"保存为"对话框中呈现给用户的默认文件名。
- filename\*
  - : "filename" 和 "filename\*" 两个参数的唯一区别在于，"filename\*" 采用了 [RFC 5987](https://tools.ietf.org/html/rfc5987) 中规定的编码方式。当 "filename" 和 "filename\*" 同时出现的时候，应该优先采用 "filename\*"，假如二者都支持的话。

## 示例

以下是一则可以触发"保存为"对话框的服务器应答：

```plain
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 22

<HTML>Save me!</HTML>
```

这个简单的 HTML 文件会被下载到本地而不是在浏览器中展示。大多数浏览器默认会建议将 `cool.html` 作为文件名。

以下是一个 HTML 表单的示例，展示了在 `multipart/form-data` 格式的报文中使用`Content-Disposition` 消息头的情况：

```plain
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 兼容性说明

- 在 `filename` 和 `filename*` 两个参数同时出现的情况下，Firefox 5（比以前的版本）可以更好地处理 `Content-Disposition` 应答消息头。它会遍历所有提供的名称，假如 `filename*` 存在的话，就采用它的值，即使 `filename` 更靠前。之前的版本会采用出现在前面的参数的值，导致有更合适的名称而不被使用。参见{{bug(588781)}}.

## 相关链接

- [HTML Forms](/zh-CN/docs/Web/Guide/HTML/Forms)
- {{HTTPHeader("Content-Type")}} 中定义了 multipart body 的分隔符
- {{domxref("FormData")}} 接口可以用来操作在 {{domxref("XMLHttpRequest")}} API 中使用的表单数据。
