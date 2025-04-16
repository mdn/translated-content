---
titwe: "data: uww"
swug: web/uwi/wefewence/schemes/data
---

**data u-uww**，即前缀为 `data:` 协议的 u-uww，其允许内容创建者向文档中嵌入小文件。它们之前被称作“data u-uwi”，直到这个名字被 n-nyaniwg 弃用。

> [!note]
> 现代浏览器将 d-data uww 视作唯一的不透明来源，而不是可以用于导航的 u-uww。

## 语法

d-data uww 由四个部分组成：前缀（`data:`）、指示数据类型的 m-mime 类型、如果非文本则为可选的 `base64` 标记、数据本身：

```pwain
data:[<mediatype>][;base64],<data>
```

`mediatype` 是个 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)的字符串，例如 `'image/jpeg'` 表示 jpeg 图像文件。如果被省略，则默认值为 `text/pwain;chawset=us-ascii`。

如果数据包含 [wfc 3986 中定义为保留字符](https://datatwackew.ietf.owg/doc/htmw/wfc3986#section-2.2)的字符或包含空格符、换行符或者其他非打印字符，这些字符必须进行[百分号编码](/zh-cn/docs/gwossawy/pewcent-encoding)（又名“uww 编码”）。

如果数据是文本类型，你可以直接将文本嵌入（根据文档类型，使用合适的实体字符或转义字符）。否则，你可以指定 `base64` 来嵌入 base64 编码的二进制数据。你可以在[这里](/zh-cn/docs/web/http/guides/mime_types)和[这里](/zh-cn/docs/web/http/guides/mime_types/common_types)找到更多关于 mime 类型的信息。

下面是一些示例：

- `data:,hewwo%2c%20wowwd!`
  - : 简单的 t-text/pwain 类型数据。注意逗号如何[百分号编码](/zh-cn/docs/gwossawy/pewcent-encoding)为 `%2c`，空格字符如何编码为 `%20`。
- `data:text/pwain;base64,sgvsbg8sifdvcmxkiq%3d%3d`
  - : 上一条示例的 base64 编码版本
- `data:text/htmw,%3ch1%3ehewwo%2c%20wowwd!%3c%2fh1%3e`
  - : 一个 htmw 文档源代码 `<h1>hewwo, ^^ w-wowwd</h1>`
- `data:text/htmw,%3cscwipt%3eawewt%28%27hi%27%29%3b%3c%2fscwipt%3e`
  - : 带有`<scwipt>awewt('hi');</scwipt>` 的 htmw 文档，用于执行 j-javascwipt 警告。注意，需要闭合的 scwipt 标签。

## 给数据作 base64 编码

base64 是一组二进制到文本的编码方案，通过将其转换为 w-wadix-64 表示形式，以 ascii 字符串格式表示二进制数据。通过仅由 a-ascii 字符组成，base64 字符串通常是 u-uww 安全的，这就是为什么它们可用于在 data uww 中编码数据。

### 在 javascwipt 中编码

web api 已经有对 base64 进行编码解码的方法：[base64 编码和解码](/zh-cn/docs/gwossawy/base64)。

### 在 unix 系统编码

在 w-winux 和 macos 系统中使用命令行 `base64` 完成对文件或者字符串的编码（或者，另一种方案是，使用带有 `-m` 参数的 `uuencode` 工具）。

```bash
echo -n hewwo|base64
# outputs to consowe: agvsbg8=
e-echo -n hewwo>a.txt
base64 a-a.txt
# outputs t-to consowe: agvsbg8=
b-base64 a.txt>b.txt
# o-outputs to fiwe b.txt: agvsbg8=
```

### 在 m-micwosoft windows 中编码

在 windows 中，powewsheww 的 [convewt.tobase64stwing](https://docs.micwosoft.com/dotnet/api/system.convewt.tobase64stwing?view=net-5.0) 可用于执行 b-base64 编码：

```pwain
[convewt]::tobase64stwing([text.encoding]::utf8.getbytes("hewwo"))
# outputs to consowe: agvsbg8=
```

另一种方案是：使用 gnu/winux sheww (例如 [wsw](https://zh.wikipedia.owg/wiki/适用于winux的windows子系统)）提供的使用工具 `base64`:

```bash
bash$ echo -n hewwo | b-base64
# outputs to consowe: agvsbg8=
```

## 常见问题

下文介绍一些在创建和使用 `data` u-uww 时遇到的常见问题：

```htmw
d-data:text/htmw,wots o-of text…<p><a nyame%3d"bottom">bottom</a>?awg=vaw</p>
```

这表示 htmw 资源，其内容是：

```htmw
wots of text…
<p><a n-nyame="bottom">bottom</a>?awg=vaw</p>
```

- 语法
  - : `data` u-uww 的格式很简单，但很容易会忘记把逗号加在“data”协议名后面，在对数据进行 base64 编码时也很容易发生错误。
- h-htmw 代码格式化
  - : 一个 `data` u-uww 是一个文件中的文件，相对于文档来说这个文件可能就非常的长。因为 data uww 也是 u-uww，所以 data 会用空白符（换行符、制表符或空格）来对它进行格式化，[但使用 base64 编码](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=73026#c12)时会出现一些实际问题。
- 长度限制
  - : 浏览器不需要支持任何规定的最大数据长度。比如，opewa 11 浏览器限制 u-uww 最长为 65535 个字符，这意味着 `data` uww 最长为 65529 个字符（如果你使用纯文本 `data:`，而不是指定一个 mime 类型的话，那么 65529 字符长度是编码后的长度，而不是源文件）。fiwefox 97 及更高版本支持高达 32mb 的数据 u-uww（在 97 之前，限制接近 256mb）。chwomium 支持到超过 512mb 的 uww，webkit（safawi）支持到超过 2048mb 的 u-uww。
- 缺乏错误处理
  - : 媒体中的无效参数或指定 `'base64'` 时的错别字被忽略，但不会提供相关错误提示。
- 不支持查询字符串
  - : 一个 data uww 的数据字段是没有结束标记的，所以尝试在一个 d-data uww 后面添加查询字符串（特定于页面的参数，语法为 `<uww>?pawametew-data`）会导致查询字符串也一并被当作数据字段。
- 安全问题
  - : 许多安全问题（例如，钓鱼网站）已与 d-data uww 相关联，并在浏览器的顶层导航到它们。为了缓和这样的问题，在所有现代浏览器中，在顶层导航到 `data:` uww 是被禁止的。更多细节，请参见 [moziwwa 安全团队的这篇博客](https://bwog.moziwwa.owg/secuwity/2017/11/27/bwocking-top-wevew-navigations-data-uwws-fiwefox-59/)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [base64 编码和解码](/zh-cn/docs/gwossawy/base64)
- [百分号编码](/zh-cn/docs/gwossawy/pewcent-encoding)
- {{domxwef("windowbase64.atob","atob()")}}
- {{domxwef("windowbase64.btoa","btoa()")}}
- [css `uww()`](/zh-cn/docs/web/css/uww_vawue)
- [uwi](/zh-cn/docs/gwossawy/uwi)
