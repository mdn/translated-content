---
title: MIME 类型（IANA 媒体类型）
slug: Web/HTTP/Basics_of_HTTP/MIME_types
---

{{HTTPSidebar}}

**媒体类型**（也通常称为**多用途互联网邮件扩展**或 **MIME** 类型）是一种标准，用来表示文档、文件或一组数据的性质和格式。它在 IETF 的 {{RFC(6838)}} 中进行了定义和标准化。

[互联网号码分配局（IANA）](https://www.iana.org/)负责跟踪所有官方 MIME 类型，你可以在[媒体类型](https://www.iana.org/assignments/media-types/media-types.xhtml)页面中找到最新的完整列表。

> **警告：** 浏览器通常使用 MIME 类型*而不是文件扩展名*来决定如何处理 URL，因此 Web 服务器在 {{HTTPHeader("Content-Type")}} 响应标头中添加正确的 MIME 类型非常重要。如果配置不正确，浏览器可能会曲解文件内容，网站将无法正常工作，并且下载的文件也可能被错误处理。

## MIME 类型的结构

MIME 类型通常仅包含两个部分：_类型_（type）和*子类型*（subtype），中间由斜杠 `/` 分割，中间没有空白字符：

```plain
type/subtype
```

**_类型_**代表数据类型所属的大致分类，例如 `video` 或 `text`。

**_子类型_**标识了 MIME 类型所代表的指定类型的确切数据类型。以 `text` 类型为例，它的子类型包括：`plain`（纯文本）、`html`（{{Glossary("HTML")}} 源代码）、`calender`（iCalendar/`.ics` 文件）。

每种类型都有自己的一组可能的子类型。一个 MIME 类型总是包含类型与子类型这两部分，且二者必需成对出现。

有一个可选的**参数**，能够提供额外的信息：

```plain
type/subtype;parameter=value
```

例如，对于主类型为 `text` 的任何 MIME 类型，可以添加可选的 `charset` 参数，以指定数据中的字符所使用的字符集。如果没有指定 `charset`，默认值为 {{Glossary("ASCII")}}（`US-ASCII`），除非被{{Glossary("user agent", "用户代理的")}}设置覆盖。要指定 UTF-8 文本文件，则使用 MIME 类型 `text/plain;charset=UTF-8`。

MIME 类型对大小写不敏感，但是传统写法都是小写。参数值可以是大小写敏感的。

### 类型

类型可分为两类：**独立的**（discrete）和**多部分的**（multipart）。独立类型代表单一文件或媒介，比如一段文字、一个音乐文件、一个视频文件等。而多部份类型，可以代表由多个部件组合成的文档，其中每个部分都可能有各自的 MIME 类型；此外，也可以代表多个文件被封装在单次事务中一同发送。多部分 MIME 类型的一个例子是，在电子邮件中附加多个文件。

#### 独立类型

IANA 目前注册的独立类型如下：

- `application`
  - : 不明确属于其他类型之一的任何二进制数据；要么是将以某种方式执行或解释的数据，要么是需要借助某个或某类特定应用程序来使用的二进制数据。通用二进制数据（或真实类型未知的二进制数据）是 `application/octet-stream`。其他常用的示例包含 `application/pdf`、`application/pkcs8` 和 `application/zip`。（[查看 IANA 上 application 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#application)）
- `audio`
  - : 音频或音乐数据。常见的示例如 `audio/mpeg`、`audio/vorbis`。（[查看 IANA 上 audio 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)）
- `example`
  - : 在演示如何使用 MIME 类型的示例中用作占位符的保留类型。这一类型永远不应在示例代码或文档外使用。`example` 也可以作为子类型。例如，在一个处理音频有关的示例中，MIME 类型 `audio/example` 表示该类型是一个占位符，且在实际使用这段代码时，此处应当被替换成适当的类型。
- `font`
  - : 字体/字型数据。常见的示例如 `font/woff`、`font/ttf` 和 `font/otf`。（[查看 IANA 上 font 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#font)）
- `image`
  - : 图像或图形数据，包括位图和矢量静态图像，以及静态图像格式的动画版本，如 {{Glossary("GIF")}} 动画或 APNG。常见的例子有 `image/jpeg`、`image/png` 和 `image/svg+xml`。（[查看 IANA 上 image 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#image)）
- `model`
  - : 三维物体或场景的模型数据。示例包含 `model/3mf` 和 `model/vrml`。（[查看 IANA 上 model 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#model)）
- `text`
  - : 纯文本数据，包括任何人类可读内容、源代码或文本数据——如逗号分隔值（comma-separated value，即 CSV）格式的数据。示例包含：`text/plain`、`text/csv` 和 `text/html`。（[查看 IANA 上 text 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#text)）
- `video`
  - : 视频数据或文件，例如 MP4 电影（`video/mp4`）。（[查看 IANA 上 video 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#video)）

对于那些没有明确子类型的文本文档，应使用 `text/plain`。类似的，没有明确子类型或子类型未知的二进制文件，应使用 `application/octet-stream`。

### 多部分类型

**多部分**类型指的是一类可分成不同部分的文件，其各部分通常是不同的 MIME 类型；也可用于——尤其在电子邮件中——表示属于同一事务的多个独立文件。它们代表一个**复合文档**。

HTTP 不会特殊处理多部分文档：信息会被传输到浏览器（如果浏览器不知道如何显示文档，很可能会显示一个“另存为”窗口）。除了几个例外，在 [HTML 表单](/zh-CN/docs/Learn/Forms)的 {{HTTPMethod("POST")}} 方法中使用的 `multipart/form-data`，以及用来发送部分文档，与 {{HTTPStatus("206")}} `Partial Content` 一同使用的 `multipart/byteranges`。

有两种多部分类型：

- `message`
  - : 封装其他信息的信息。例如，这可以用来表示将转发信息作为其数据一部分的电子邮件，或将超大信息分块发送，就像发送多条信息一样。例如，`message/rfc822`（用于转发或回复信息的引用）和 `message/partial`（允许将大段信息自动拆分成小段，由收件人重新组装）是两个常见的例子。（[查看 IANA 上 message 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#message)）
- `multipart`
  - : 由多个组件组成的数据，这些组件可能各自具有不同的 MIME 类型。例如，`multipart/form-data`（用于使用 {{domxref("FormData")}} API 生成的数据）和 `multipart/byteranges`（定义于 {{RFC(7233,"", "5.4.1")}}，当获取到的数据仅为部分内容时——如使用 {{HTTPHeader("Range")}} 标头传输的内容——与返回的 {{Glossary("HTTP")}} 响应 {{HTTPStatus(206)}} “Partial Content”组合使用）。（[查看 IANA 上 multipart 类型的注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)）

## 对 Web 开发者至关重要的 MIME 类型

### application/octet-stream

这是二进制文件的默认值。由于这意味着*未知的二进制文件*，浏览器一般不会自动执行或询问执行。浏览器将这些文件视为 {{HTTPHeader("Content-Disposition")}} 标头被设置为 `attachment` 一样，并弹出“另存为”对话框。

### text/plain

这是文本文件的默认值。即使它其实意味着*未知的文本文件*，但浏览器认为是可以直接展示的。

> **备注：** `text/plain` 并不意味“任何种类的文本数据”。如果浏览器期待的是某种特定的文本数据，很可能不会将其视为匹配。具体来说，如果从声明 CSS 文件的 {{HTMLElement("link")}} 元素中下载了一个 `text/plain` 文件，那么如果提供的是 `text/plain` 类型，就不会将其识别为有效的 CSS 文件。CSS MIME 类型需要使用 `text/css`。

### text/css

在网页中要被解析为 CSS 的任何 CSS 文件**必须**指定 MIME 为 `text/css`。通常，如果服务器不识别 CSS 文件的 `.css` 后缀，则可能将它们以 MIME 为 `text/plain` 或 `application/octet-stream` 来发送给浏览器：在这种情况下，大多数浏览器不将其识别为 CSS 文件而直接忽略。

### text/html

所有的 HTML 内容都应该使用这种类型。XHTML 的其他 MIME 类型（如 `application/xml+html`）现在基本不再使用。

> **备注：** 如果需要 XML 的严格解析规则、[`<![CDATA[...]]>`](/zh-CN/docs/Web/API/CDATASection) 部分或 HTML/SVG/MathML 命名空间以外的元素，请使用 `application/xml` 或 `application/xhtml+xml`。

### text/javascript

根据 [IANA 媒体类型注册表](https://www.iana.org/assignments/media-types/media-types.xhtml#text)、[RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) 和 [HTML 规范](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript)，JavaScript 内容应始终使用 MIME 类型 `text/javascript` 提供。其他 MIME 类型对 JavaScript 无效，使用除 `text/javascript` 以外的任何 MIME 类型都可能导致脚本无法加载或运行。

你可能会发现某些 JavaScript 内容在 MIME 类型中错误地使用了 `charset` 参数，以指定脚本内容的字符集。对于 JavaScript 内容来说，`charset` 参数无效，在大多数情况下会导致脚本加载失败。

#### 遗留的 JavaScript MIME 类型

除了 `text/javascript` MIME 类型外，出于历史原因，[MIME 嗅探标准](https://mimesniff.spec.whatwg.org/)（定义浏览器应该如何解释媒体类型和如何处理无有效媒体类型的内容）允许使用匹配以下任意的 MIME 类型提供 JavaScript 代码：

- `application/javascript` {{deprecated_inline}}
- `application/ecmascript` {{deprecated_inline}}
- `application/x-ecmascript` {{Non-standard_Inline}}
- `application/x-javascript` {{Non-standard_Inline}}
- `text/ecmascript` {{deprecated_inline}}
- `text/javascript1.0` {{Non-standard_Inline}}
- `text/javascript1.1` {{Non-standard_Inline}}
- `text/javascript1.2` {{Non-standard_Inline}}
- `text/javascript1.3` {{Non-standard_Inline}}
- `text/javascript1.4` {{Non-standard_Inline}}
- `text/javascript1.5` {{Non-standard_Inline}}
- `text/jscript` {{Non-standard_Inline}}
- `text/livescript` {{Non-standard_Inline}}
- `text/x-ecmascript` {{Non-standard_Inline}}
- `text/x-javascript` {{Non-standard_Inline}}

> **备注：** 即便任何给定的{{Glossary("user agent", "用户代理")}}可能支持这里的部分或所有类型，你也只应该使用 `text/javascript`。它是唯一确保能在目前和以后正常工作的 MIME 类型。

### 图片类型

MIME 类型为 `image` 的文件包含图像数据。子类型指定数据所代表的具体图像文件格式。

以下是常用的图像类型，可在网页中*安全*使用：

- [`image/apng`](/zh-CN/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)：动画便携式网络图形（APNG）
- [`image/avif`](/zh-CN/docs/Web/Media/Formats/Image_types#avif_图像)：AV1 图像文件格式（AVIF）
- [`image/gif`](/zh-CN/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format)：图形交换格式（GIF）
- [`image/jpeg`](/zh-CN/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image)：联合图像专家小组图片（JPEG）
- [`image/png`](/zh-CN/docs/Web/Media/Formats/Image_types#png_portable_network_graphics)：便携式网络图形（PNG）
- [`image/svg+xml`](/zh-CN/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)：可缩放矢量图形（SVG）
- [`image/webp`](/zh-CN/docs/Web/Media/Formats/Image_types#webp_图像)：Web 图像格式（WEBP）

[图像文件类型和格式指南](/zh-CN/docs/Web/Media/Formats/Image_types#常见图像文件格式)提供了有关何时使用不同图像格式的信息和建议。

### 音频与视频类型

与图像的情况一样，HTML 并不强制要求 web 浏览器支持 {{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素的任何特定文件和编解码器类型，因此在选择媒体使用的文件类型和编解码器时，必须考虑目标受众以及他们可能使用的浏览器（和这些浏览器的版本）范围。

我们的[媒体容器格式指南](/zh-CN/docs/Web/Media/Formats/Containers)提供了 web 浏览器通常支持的文件类型列表，包括其特殊用途、缺点、兼容性信息以及其他详细信息。

[音频编解码器](/zh-CN/docs/Web/Media/Formats/Audio_codecs)和[视频编解码器](/zh-CN/docs/Web/Media/Formats/Video_codecs)指南列出了 web 浏览器通常支持的各种编解码器，并提供了兼容性细节和技术信息，如它们支持多少音频通道、使用哪种压缩方式以及它们的比特率等。在此基础上，[WebRTC 使用的编解码器](/zh-CN/docs/Web/Media/Formats/WebRTC_codecs)指南专门介绍了主要 web 浏览器支持的编解码器，因此你可以选择最适合你所希望支持的浏览器范围的编解码器。

音频和视频文件的 MIME 类型，通常指的是其容器格式（或者说文件类型）。添加可选的 [codec 参数](/zh-CN/docs/Web/Media/Formats/codecs_parameter)到 MIME 类型中，能进一步指出要使用的编解码器和编码媒体时曾用到的选项，如编解码器配置文件、级别或其他此类信息。

下面列出了网络内容最常用的 MIME 类型。不过，这并不是一份包含所有可用类型的完整列表。请参阅[媒体容器格式指南](/zh-CN/docs/Web/Media/Formats/Containers)以查看完整的列表。

| MIME 类型                                                  | 音频或视频类型                                                                                                |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `audio/wave`、`audio/wav`、`audio/x-wav`、`audio/x-pn-wav` | 采用 WAVE 容器的音频文件。一般支持 PCM 音频编码（WAVE codec "1"），其他解码器有限支持（如果有的话）。         |
| `audio/webm`                                               | 采用 WebM 容器的音频文件。Vorbis 和 Opus 是 WebM 规范官方支持的最常用的解码器。                               |
| `video/webm`                                               | 采用 WebM 容器的音视频文件。VP8 和 VP9 是其最常用的视频解码器。Vorbis 和 Opus 是其最常用的音频解码器。        |
| `audio/ogg`                                                | 采用 OGG 容器的音频文件。Vorbis 是这个多媒体文件格式最常用的音频解码器。现在，同样也支持 Opus。               |
| `video/ogg`                                                | 采用 OGG 容器的音视频文件。常用的视频解码器是 Theora；常用的音频解码器为 Vorbis，不过 Opus 也变得越来越常用。 |
| `application/ogg`                                          | 采用 OGG 容器的音视频文件。常用的视频解码器是 Theora；音频解码器为 Vorbis。                                   |

### multipart/form-data

`multipart/form-data` 可用于 [HTML 表单](/zh-CN/docs/Learn/Forms)从浏览器发送信息给服务器。

作为多部分文档格式，它由边界线（一个由双横滑线 `--` 开始的字符串）划分出的不同部分组成。每一部分有自己的实体，以及自己的 HTTP 请求头，{{HTTPHeader("Content-Disposition")}} 和 {{HTTPHeader("Content-Type")}} 用于文件上传字段。

```http
Content-Type: multipart/form-data; boundary=aBoundaryString
(other headers associated with the multipart document as a whole)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(data)
--aBoundaryString
(more subparts)
--aBoundaryString--
```

如下所示的 `<form>`：

```html
<form
  action="http://localhost:8000/"
  method="post"
  enctype="multipart/form-data">
  <label>名字：<input name="myTextField" value="Test" /></label>
  <label><input type="checkbox" name="myCheckBox" /> 勾选</label>
  <label>
    上传文件：<input type="file" name="myFile" value="test.txt" />
  </label>
  <button>发送文件</button>
</form>
```

会发送这样的请求：

```http
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### multipart/byteranges

`multipart/byteranges` 用于把部分的响应报文发送回浏览器。

当状态码 {{HTTPStatus("206", "206 Partial Content")}} 被发出后，这个 MIME 类型用于指出这个文件由若干部分组成，每一个都有其请求范围。就像其他多部分类型一样，{{HTTPHeader("Content-Type")}} 使用 `boundary` 来制定分界线。每一个不同的部分都有 {{HTTPHeader("Content-Type")}} 这样的 HTTP 标头来说明文件的实际类型，以及 {{HTTPHeader("Content-Range")}} 来说明其范围。

```http
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## 设置正确的 MIME 类型的重要性

很多 web 服务器使用默认的 `application/octet-stream` 来发送未知类型。出于一些安全原因，对于这些资源浏览器不允许设置一些自定义默认操作，强制用户必须存储到本地以使用。

常见的导致服务器配置错误的文件类型如下所示：

- RAR 压缩文件。在这种情况，理想状态是，设置真实的编码文件类型；但这通常不可能，因为 .RAR 文件可能包含多种不同类型的资源。这种情况，将所发送文件的 MIME 类型配置为 `application/x-rar-compressed`。
- 音频或视频文件。只有正确设置了 MIME 类型的文件才能被 {{ HTMLElement("video") }} 或{{ HTMLElement("audio") }} 元素识别和播放。请确保指定了正确的[音频和视频的媒体类型](/zh-CN/docs/Web/Media/Formats)。
- 专有文件类型。避免使用 `application/octet-stream`，对于这种一般的 MIME 类型浏览器不允许定义默认行为（比如“在 Word 中打开”）。像 `application/vnd.mspowerpoint` 这样的类型可以让用户选择自动在幻灯片软件中打开这样的文件。

## MIME 嗅探

在缺失 MIME 类型或客户端认为文件设置了错误的 MIME 类型时，浏览器可能会通过查看资源来进行 _MIME 嗅探_。

每一个浏览器在不同的情况下会执行不同的操作。（例如，Safari 会在发送的 MIME 类型不合适时查看文件的扩展名。）由于某些 MIME 类型可能代表可执行内容，会存在一些安全问题。服务器可以通过发送 {{HTTPHeader("X-Content-Type-Options")}} 标头来阻止 MIME 嗅探。

## 其他传送文件类型的方法

MIME 类型不是传达文档类型信息的唯一方式：

- 有时会使用名称后缀，特别是在 Microsoft Windows 系统上。并非所有的操作系统都认为这些后缀是有意义的（特别是 Linux 和 Mac OS），并且像外部 MIME 类型一样，不能保证它们是正确的。
- 魔数（magic number）。不同类型的文件的语法通过查看结构来允许文件类型推断。例如，每个 GIF 文件以 `47 49 46 38 39` 十六进制值（`GIF89`）开头，每个 PNG 文件以 `89 50 4E 47`（`.PNG`）开头。并非所有类型的文件都有魔数，所以这也不是 100％ 可靠的方式。

## 参见

- [Web 媒体技术](/zh-CN/docs/Web/Media)
- [Web 媒体类型指南](/zh-CN/docs/Web/Media/Formats)
- [正确配置服务器 MIME 类型](/zh-CN/docs/Learn/Server-side/Configuring_server_MIME_types)
- <https://www.iana.org/assignments/media-types/application/json>
