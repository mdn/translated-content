---
title: MIME 类型
slug: Web/HTTP/Basics_of_HTTP/MIME_types
---

{{HTTPSidebar}}

**媒体类型**（通常称为 **Multipurpose Internet Mail Extensions** 或 **MIME** 类型）是一种标准，用来表示文档、文件或字节流的性质和格式。它在[IETF RFC 6838](https://tools.ietf.org/html/rfc6838)中进行了定义和标准化。

互联网号码分配机构（[IANA](https://www.iana.org/)）是负责跟踪所有官方 MIME 类型的官方机构，您可以在[媒体类型](https://www.iana.org/assignments/media-types/media-types.xhtml)页面中找到最新的完整列表。

> **警告：** 浏览器通常使用 MIME 类型（而不是文件扩展名）来确定如何处理 URL，因此 Web 服务器在响应头中添加正确的 MIME 类型非常重要。如果配置不正确，浏览器可能会曲解文件内容，网站将无法正常工作，并且下载的文件也会被错误处理。

## 语法

### 通用结构

```plain
type/subtype
```

MIME 的组成结构非常简单；由类型与子类型两个字符串中间用`'/'`分隔而组成。不允许空格存在。_type_ 表示可以被分多个子类的独立类别。_subtype 表示细分后的每个类型。_

MIME 类型对大小写不敏感，但是传统写法都是小写。

### 独立类型

```plain
text/plain
text/html
image/jpeg
image/png
audio/mpeg
audio/ogg
audio/*
video/mp4
application/*
application/json
application/javascript
application/ecmascript
application/octet-stream
…
```

*独立*类型表明了对文件的分类，可以是如下之一：

| 类型          | 描述                                                                    | 典型示例                                                                                                                                        |
| ------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | 表明文件是普通文本，理论上是人类可读                                    | `text/plain`, `text/html`, `text/css, text/javascript`                                                                                          |
| `image`       | 表明是某种图像。不包括视频，但是动态图（比如动态 gif）也使用 image 类型 | `image/gif`, `image/png`, `image/jpeg`, `image/bmp`, `image/webp`, `image/x-icon`, `image/vnd.microsoft.icon`                                   |
| `audio`       | 表明是某种音频文件                                                      | `audio/midi`, `audio/mpeg, audio/webm, audio/ogg, audio/wav`                                                                                    |
| `video`       | 表明是某种视频文件                                                      | `video/webm`, `video/ogg`                                                                                                                       |
| `application` | 表明是某种二进制数据                                                    | `application/octet-stream`, `application/pkcs12`, `application/vnd.mspowerpoint`, `application/xhtml+xml`, `application/xml`, `application/pdf` |

对于 text 文件类型若没有特定的 subtype，就使用 `text/plain`。类似的，二进制文件没有特定或已知的 subtype，即使用 `application/octet-stream`。

### Multipart 类型

```plain
multipart/form-data
multipart/byteranges
```

_Multipart_ 类型表示细分领域的文件类型的种类，经常对应不同的 MIME 类型。这是*复合*文件的一种表现方式。`multipart/form-data` 可用于联系 [HTML Forms](/zh-CN/docs/Web/Guide/HTML/Forms) 和 {{HTTPMethod("POST")}} 方法，此外 `multipart/byteranges`使用状态码{{HTTPStatus("206")}} `Partial Content`来发送整个文件的子集，而 HTTP 对不能处理的复合文件使用特殊的方式：将信息直接传送给浏览器（这时可能会建立一个“另存为”窗口，但是却不知道如何去显示内联文件。）

## 重要的 MIME 类型

### application/octet-stream

这是应用程序文件的默认值。意思是 *未知的应用程序文件，*浏览器一般不会自动执行或询问执行。浏览器会像对待 设置了 HTTP 头{{HTTPHeader("Content-Disposition")}} 值为 `attachment` 的文件一样来对待这类文件。

### text/plain

文本文件默认值。即使它*意味着未知的文本文件*，但浏览器认为是可以直接展示的。

> **备注：** `text/plain`并不是意味着某种文本数据。如果浏览器想要一个文本文件的明确类型，浏览器并不会考虑他们是否匹配。比如说，如果通过一个表明是下载 CSS 文件的{{HTMLElement("link")}}链接下载了一个 `text/plain` 文件。如果提供的信息是 text/plain，浏览器并不会认出这是有效的 CSS 文件。CSS 类型需要使用 text/css。

### text/css

在网页中要被解析为 CSS 的任何 CSS 文件必须指定 MIME 为`text/css`。通常，服务器不识别以.css 为后缀的文件的 MIME 类型，而是将其以 MIME 为`text/plain` 或 `application/octet-stream` 来发送给浏览器：在这种情况下，大多数浏览器不识别其为 CSS 文件，直接忽略掉。特别要注意为 CSS 文件提供正确的 MIME 类型。

### text/html

所有的 HTML 内容都应该使用这种类型。XHTML 的其他 MIME 类型（如`application/xml+html`）现在基本不再使用（HTML5 统一了这些格式）。

> **备注：** You still need to use `application/xml` or `application/xhtml+xml` if you intend to make use of XML’s strict parsing rules, use [`<![CDATA[…]]>`](/en-US/docs/Web/API/CDATASection) or elements from non‑HTML, non‑SVG or non‑MathML XML namespaces, as `text/html`’s parsing semantics are subtly incompatible with those of `application/xml`.

### text/javascript

据 HTML 标准，应该总是使用 MIME 类型 `text/javascript` 服务 JavaScript 文件。其他值不被认为有效，使用那些值可能会导致脚本不被载入或运行。

历史原因，[MIME 嗅探标准](https://mimesniff.spec.whatwg.org/)（定义浏览器应该如何解释媒体类型和如何处理无有效媒体类型的内容）允许使用匹配以下任意的 MIME 类型服务 JavaScript：

- `application/javascript`
- `application/ecmascript`
- `application/x-ecmascript` {{Non-standard_Inline}}
- `application/x-javascript` {{Non-standard_Inline}}
- `text/javascript`
- `text/ecmascript`
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

> **备注：** 即便任何给定的 {{Glossary("user agent")}} 可能支持这些中的任意或所有，你只应该使用 `text/javascript`。它是唯一确保能在目前和以后正常工作的 MIME 类型。

你可能发现某些内容在 `text/javascript` 媒体类型末尾有一个 `charset` 参数，指定用于表示代码内容的字符集。这不是合法的，而且在大多数场景下会导致脚本不被载入。

### 图片类型

只有一小部分图片类型是被广泛支持的，Web 安全的，可随时在 Web 页面中使用的：

| MIME 类型       | 图片类型                               |
| --------------- | -------------------------------------- |
| `image/gif`     | GIF 图片 (无损耗压缩方面被 PNG 所替代) |
| `image/jpeg`    | JPEG 图片                              |
| `image/png`     | PNG 图片                               |
| `image/svg+xml` | SVG 图片 (矢量图)                      |

此处的类型划分有一定的争议，有人认为此处应该增加 WebP（`image/webp`），但是每个新增的图片类型都会增加代码的数量，这会带来一些新的安全问题，所以浏览器供应商对于添加类型非常小心。

另外的一些图片种类可以在 Web 文档中找到。比如很多浏览器支持 _icon 类型的图标作为_ favicons 或者类似的图标，并且浏览器在 MIME 类型中的 `image/x-icon` 支持 ICO 图像。

- Footnote 1
  - : 尽管 `image/vnd.microsoft.icon` [在 ANA 注册](https://www.iana.org/assignments/media-types/image/vnd.microsoft.icon), 它仍然不被广泛支持，`image/x-icon` 被作为替代品使用。

### 音频与视频类型

HTML 并没有明确定义被用于{{HTMLElement("audio")}}和{{HTMLElement("video")}}元素所支持的文件类型，所以在 web 上使用的只有相对较小的一组类型。文章 [Media formats supported by the HTML audio and video elements](/zh-CN/docs/Web/HTML/Supported_media_formats) 解释了可以被使用的解码器或视频文件格式。

在 web 环境最常用的视频文件的格式，是以下这些这些文件类型：

| MIME 类型                                               | 音频或视频类型                                                                                                                                          |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | 音频流媒体文件。一般支持 PCM 音频编码 (WAVE codec "1") ，其他解码器有限支持（如果有的话）。                                                             |
| `audio/webm`                                            | WebM 音频文件格式。Vorbis 和 Opus 是其最常用的解码器。                                                                                                  |
| `video/webm`                                            | 采用 WebM 视频文件格式的音视频文件。VP8 和 VP9 是其最常用的视频解码器。Vorbis 和 Opus 是其最常用的音频解码器。                                          |
| `audio/ogg`                                             | 采用 OGG 多媒体文件格式的音频文件。Vorbis 是这个多媒体文件格式最常用的音频解码器。                                                                     |
| `video/ogg`                                             | 采用 OGG 多媒体文件格式的音视频文件。常用的视频解码器是 Theora；音频解码器为 Vorbis。                                                                  |
| `application/ogg`                                       | 采用 OGG 多媒体文件格式的音视频文件。常用的视频解码器是 Theora；音频解码器为 Vorbis。                                                                  |
| `application/json`                                      | application/json (MIME_type) <https://en.wikipedia.org/wiki/Media_type#Common_examples> <https://www.iana.org/assignments/media-types/application/json> |

### multipart/form-data

`multipart/form-data` 可用于[HTML 表单](/zh-CN/docs/Web/Guide/HTML/Forms)从浏览器发送信息给服务器。作为多部分文档格式，它由边界线（一个由`'--'`开始的字符串）划分出的不同部分组成。每一部分有自己的实体，以及自己的 HTTP 请求头，{{HTTPHeader("Content-Disposition")}}和 {{HTTPHeader("Content-Type")}} 用于文件上传领域，最常用的 ({{HTTPHeader("Content-Length")}} 因为边界线作为分隔符而被忽略）。

```plain
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

如下所示的表单：

```html
<form action="http://localhost:8000/" method="post" enctype="multipart/form-data">
  <input type="text" name="myTextField">
  <input type="checkbox" name="myCheckBox">Check</input>
  <input type="file" name="myFile">
  <button>Send the file</button>
</form>
```

会发送这样的请求：

```plain
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

`multipart/byteranges` 用于把部分的响应报文发送回浏览器。当发送状态码{{HTTPStatus("206")}}`Partial Content` 时，这个 MIME 类型用于指出这个文件由若干部分组成，每一个都有其请求范围。就像其他很多类型{{HTTPHeader("Content-Type")}}使用分隔符来制定分界线。每一个不同的部分都有{{HTTPHeader("Content-Type")}}这样的 HTTP 头来说明文件的实际类型，以及 {{HTTPHeader("Content-Range")}}来说明其范围。

```plain
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="vieport" content
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

很多 web 服务器使用默认的 `application/octet-stream` 来发送未知类型。出于一些安全原因，对于这些资源浏览器不允许设置一些自定义默认操作，导致用户必须存储到本地以使用。常见的导致服务器配置错误的文件类型如下所示：

- RAR 编码文件。在这种情况，理想状态是，设置真实的编码文件类型；但这通常不可能（可能是服务器所未知的类型或者这个文件包含许多其他的不同的文件类型）。这种情况服务器将发送 `application/x-rar-compressed` 作为 MIME 类型，用户不会将其定义为有用的默认操作。
- 音频或视频文件。只有正确设置了 MIME 类型的文件才能被 {{ HTMLElement("video") }} 或{{ HTMLElement("audio") }} 识别和播放。可参照 [use the correct type for audio and video](/En/Media_formats_supported_by_the_audio_and_video_elements)。
- 专有文件类型。是专有文件时需要特别注意。使用 `application/octet-stream` 作为特殊处理是不被允许的：对于一般的 MIME 类型浏览器不允许定义默认行为（比如“在 Word 中打开”）

## MIME 嗅探

在缺失 MIME 类型或客户端认为文件设置了错误的 MIME 类型时，浏览器可能会通过查看资源来进行 MIME 嗅探。每一个浏览器在不同的情况下会执行不同的操作。因为这个操作会有一些安全问题，有的 MIME 类型表示可执行内容而有些是不可执行内容。浏览器可以通过请求头 {{HTTPHeader("Content-Type")}} 来设置 {{HTTPHeader("X-Content-Type-Options")}} 以阻止 MIME 嗅探。

## 其他传送文件类型的方法

MIME 类型不是传达文档类型信息的唯一方式：

- 有时会使用名称后缀，特别是在 Microsoft Windows 系统上。并非所有的操作系统都认为这些后缀是有意义的（特别是 Linux 和 Mac OS），并且像外部 MIME 类型一样，不能保证它们是正确的。
- 魔术数字。不同类型的文件的语法通过查看结构来允许文件类型推断。例如，每个 GIF 文件以 47 49 46 38 十六进制值 \[GIF89] 或 89 50 4E 47 \[.PNG] 的 PNG 文件开头。并非所有类型的文件都有幻数，所以这也不是 100％可靠的方式。

## 其他

- [Properly configuring server MIME types](/zh-CN/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types)
- [Media formats supported by the HTML audio and video elements](/zh-CN/docs/Web/HTML/Supported_media_formats)
- <https://www.iana.org/assignments/media-types/application/json>

{{HTTPSidebar}}
