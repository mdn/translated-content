---
title: Data URL
slug: Web/URI/Schemes/data
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/URI")}}

**Data URL**，即前缀为 `data:` 协议的 URL，其允许内容创建者向文档中嵌入小文件。它们之前被称作“data URI”，直到这个名字被 WHATWG 弃用。

> [!NOTE]
> 现代浏览器将 Data URL 视作唯一的不透明来源，而不是可以用于导航的 URL。

## 语法

Data URL 由四个部分组成：前缀（`data:`）、指示数据类型的 MIME 类型、如果非文本则为可选的 `base64` 标记、数据本身：

```plain
data:[<mediatype>][;base64],<data>
```

`mediatype` 是个 [MIME 类型](/zh-CN/docs/Web/HTTP/MIME_types)的字符串，例如 `'image/jpeg'` 表示 JPEG 图像文件。如果被省略，则默认值为 `text/plain;charset=US-ASCII`。

如果数据包含 [RFC 3986 中定义为保留字符](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2)的字符或包含空格符、换行符或者其他非打印字符，这些字符必须进行[百分号编码](/zh-CN/docs/Glossary/Percent-encoding)（又名“URL 编码”）。

如果数据是文本类型，你可以直接将文本嵌入（根据文档类型，使用合适的实体字符或转义字符）。否则，你可以指定 `base64` 来嵌入 base64 编码的二进制数据。你可以在[这里](/zh-CN/docs/Web/HTTP/MIME_types)和[这里](/zh-CN/docs/Web/HTTP/MIME_types/Common_types)找到更多关于 MIME 类型的信息。

下面是一些示例：

- `data:,Hello%2C%20World!`
  - : 简单的 text/plain 类型数据。注意逗号如何[百分号编码](/zh-CN/docs/Glossary/Percent-encoding)为 `%2C`，空格字符如何编码为 `%20`。
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D`
  - : 上一条示例的 base64 编码版本
- `data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E`
  - : 一个 HTML 文档源代码 `<h1>Hello, World</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : 带有`<script>alert('hi');</script>` 的 HTML 文档，用于执行 JavaScript 警告。注意，需要闭合的 script 标签。

## 给数据作 base64 编码

Base64 是一组二进制到文本的编码方案，通过将其转换为 radix-64 表示形式，以 ASCII 字符串格式表示二进制数据。通过仅由 ASCII 字符组成，base64 字符串通常是 url 安全的，这就是为什么它们可用于在 Data URL 中编码数据。

### 在 JavaScript 中编码

Web API 已经有对 base64 进行编码解码的方法：[Base64 编码和解码](/zh-CN/docs/Glossary/Base64)。

### 在 Unix 系统编码

在 Linux 和 macOS 系统中使用命令行 `base64` 完成对文件或者字符串的编码（或者，另一种方案是，使用带有 `-m` 参数的 `uuencode` 工具）。

```bash
echo -n hello|base64
# outputs to console: aGVsbG8=
echo -n hello>a.txt
base64 a.txt
# outputs to console: aGVsbG8=
base64 a.txt>b.txt
# outputs to file b.txt: aGVsbG8=
```

### 在 Microsoft Windows 中编码

在 Windows 中，PowerShell 的 [Convert.ToBase64String](https://docs.microsoft.com/dotnet/api/system.convert.tobase64string?view=net-5.0) 可用于执行 Base64 编码：

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

另一种方案是：使用 GNU/Linux shell (例如 [WSL](https://zh.wikipedia.org/wiki/适用于Linux的Windows子系统)）提供的使用工具 `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## 常见问题

下文介绍一些在创建和使用 `data` URL 时遇到的常见问题：

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

这表示 HTML 资源，其内容是：

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- 语法
  - : `data` URL 的格式很简单，但很容易会忘记把逗号加在“data”协议名后面，在对数据进行 base64 编码时也很容易发生错误。
- HTML 代码格式化
  - : 一个 `data` URL 是一个文件中的文件，相对于文档来说这个文件可能就非常的长。因为 data URL 也是 URL，所以 data 会用空白符（换行符、制表符或空格）来对它进行格式化，[但使用 base64 编码](https://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12)时会出现一些实际问题。
- 长度限制
  - : 浏览器不需要支持任何规定的最大数据长度。比如，Opera 11 浏览器限制 URL 最长为 65535 个字符，这意味着 `data` URL 最长为 65529 个字符（如果你使用纯文本 `data:`，而不是指定一个 MIME 类型的话，那么 65529 字符长度是编码后的长度，而不是源文件）。Firefox 97 及更高版本支持高达 32MB 的数据 URL（在 97 之前，限制接近 256MB）。Chromium 支持到超过 512MB 的 URL，Webkit（Safari）支持到超过 2048MB 的 URL。
- 缺乏错误处理
  - : 媒体中的无效参数或指定 `'base64'` 时的错别字被忽略，但不会提供相关错误提示。
- 不支持查询字符串
  - : 一个 data URL 的数据字段是没有结束标记的，所以尝试在一个 data URL 后面添加查询字符串（特定于页面的参数，语法为 `<url>?parameter-data`）会导致查询字符串也一并被当作数据字段。
- 安全问题
  - : 许多安全问题（例如，钓鱼网站）已与 data URL 相关联，并在浏览器的顶层导航到它们。为了缓和这样的问题，在所有现代浏览器中，在顶层导航到 `data:` URL 是被禁止的。更多细节，请参见 [Mozilla 安全团队的这篇博客](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Base64 编码和解码](/zh-CN/docs/Glossary/Base64)
- [百分号编码](/zh-CN/docs/Glossary/Percent-encoding)
- {{domxref("WindowBase64.atob","atob()")}}
- {{domxref("WindowBase64.btoa","btoa()")}}
- [CSS `url()`](/zh-CN/docs/Web/CSS/url_value)
- [URI](/zh-CN/docs/Glossary/URI)
