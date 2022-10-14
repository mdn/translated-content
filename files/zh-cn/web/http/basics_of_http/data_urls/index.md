---
title: Data URLs
slug: Web/HTTP/Basics_of_HTTP/Data_URLs
original_slug: Web/HTTP/Basics_of_HTTP/Data_URIs
---

{{HTTPSidebar}}

**Data URLs**，即前缀为 `data:` 协议的 URL，其允许内容创建者向文档中嵌入小文件。

## 语法

Data URLs 由四个部分组成：前缀 (`data:`)、指示数据类型的 MIME 类型、如果非文本则为可选的`base64`标记、数据本身：

```plain
data:[<mediatype>][;base64],<data>
```

`mediatype` 是个 MIME 类型的字符串，例如 "`image/jpeg`" 表示 JPEG 图像文件。如果被省略，则默认值为 `text/plain;charset=US-ASCII`

如果数据是文本类型，你可以直接将文本嵌入 (根据文档类型，使用合适的实体字符或转义字符)。如果是二进制数据，你可以将数据进行 base64 编码之后再进行嵌入。

下面是一些示例：

- `data:,Hello%2C%20World!`
  - : 简单的 text/plain 类型数据
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D`
  - : 上一条示例的 base64 编码版本
- `data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E`
  - : 一个 HTML 文档源代码 `<h1>Hello, World</h1>`
- `data:text/html,<script>alert('hi');</script>`
  - : 一个会执行 JavaScript alert 的 HTML 文档。注意 script 标签必须封闭。

## 给数据作 base64 编码

在 Linux 或者 macOS 系统上，你可以使用 `uuencode` 命令行工具来简单实现编码：

```plain
uuencode -m infile remotename
```

`infile` 参数表示要作 base64 编码的文件名称，`remotename` 参数表示输出的文件名称，实际上并没有在 data 方案的 URLs 中使用。

输出结果如下：

```plain
begin-base64 664 test
YSBzbGlnaHRseSBsb25nZXIgdGVzdCBmb3IgdGV2ZXIK
====
```

以上 Data URL 会使用位于首行之后的编码后的数据

### 在网页上使用 JavaScript

Web APIs 已经有对 base64 进行编码解码的方法：[Base64 encoding and decoding](/zh-CN/docs/Web/JavaScript/Base64_encoding_and_decoding).

## 常见问题

下文介绍一些在使用`data` URIs 时遇到的常见问题：

- 语法
  - : `data` URLs 的格式很简单，但很容易会忘记把逗号加在 "data" 协议名后面，在对数据进行 base64 编码时也很容易发生错误。
- HTML 代码格式化
  - : 一个 `data` URL 是一个文件中的文件，相对于文档来说这个文件可能就非常的长。因为 data URL 也是 URL，所以 data 会用空白符 (换行符，制表符，空格) 来对它进行格式化。但如果数据是经过 base64 编码的，就可能会[遇到一些问题](http://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12)。
- 长度限制
  - : 虽然 Firefox 支持无限长度的 `data` URLs，但是标准中并没有规定浏览器必须支持任意长度的 `data` URIs。比如，Opera 11 浏览器限制 URLs 最长为 65535 个字符，这意味着 data URLs 最长为 65529 个字符（如果你使用纯文本 data:, 而不是指定一个 MIME 类型的话，那么 65529 字符长度是编码后的长度，而不是源文件）。
- 缺乏错误处理
  - : MIME 类型错误或者 base64 编码错误，都会造成`data` URIs 无法被正常解析，但不会有任何相关错误提示。
- 不支持查询字符串

  - : 一个 data URI 的数据字段是没有结束标记的，所以尝试在一个 data URI 后面添加查询字符串会导致，查询字符串也一并被当作数据字段。例如：

    ```plain
    data:text/html,lots of text...<p><a name%3D"bottom">bottom</a>?arg=val
    ```

    这个 data URL 代表的 HTML 源文件内容为：

    ```plain
    lots of text...<p><a name="bottom">bottom</a>?arg=val
    ```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Base64 encoding and decoding](/zh-CN/docs/Web/JavaScript/Base64_encoding_and_decoding)
- {{domxref("WindowBase64.atob","atob()")}}
- {{domxref("WindowBase64.btoa","btoa()")}}
- [CSS `url()`](/zh-CN/docs/Web/CSS/uri)
- [URI](/zh-CN/docs/URI)
