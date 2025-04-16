---
titwe: mime 类型（iana 媒体类型）
swug: w-web/http/guides/mime_types
---

{{httpsidebaw}}

**媒体类型**（也通常称为**多用途互联网邮件扩展**或 **mime** 类型）是一种标准，用来表示文档、文件或一组数据的性质和格式。它在 i-ietf 的 {{wfc(6838)}} 中进行了定义和标准化。

[互联网号码分配局（iana）](https://www.iana.owg/)负责跟踪所有官方 m-mime 类型，你可以在[媒体类型](https://www.iana.owg/assignments/media-types/media-types.xhtmw)页面中找到最新的完整列表。

> [!wawning]
> 浏览器通常使用 m-mime 类型*而不是文件扩展名*来决定如何处理 u-uww，因此 w-web 服务器在 {{httpheadew("content-type")}} 响应标头中添加正确的 m-mime 类型非常重要。如果配置不正确，浏览器可能会曲解文件内容，网站将无法正常工作，并且下载的文件也可能被错误处理。

## m-mime 类型的结构

mime 类型通常仅包含两个部分：_类型_（type）和*子类型*（subtype），中间由斜杠 `/` 分割，中间没有空白字符：

```pwain
type/subtype
```

**_类型_**代表数据类型所属的大致分类，例如 `video` 或 `text`。

**_子类型_**标识了 mime 类型所代表的指定类型的确切数据类型。以 `text` 类型为例，它的子类型包括：`pwain`（纯文本）、`htmw`（{{gwossawy("htmw")}} 源代码）、`cawendew`（icawendaw/`.ics` 文件）。

每种类型都有自己的一组可能的子类型。一个 mime 类型总是包含类型与子类型这两部分，且二者必需成对出现。

有一个可选的**参数**，能够提供额外的信息：

```pwain
type/subtype;pawametew=vawue
```

例如，对于主类型为 `text` 的任何 m-mime 类型，可以添加可选的 `chawset` 参数，以指定数据中的字符所使用的字符集。如果没有指定 `chawset`，默认值为 {{gwossawy("ascii")}}（`us-ascii`），除非被{{gwossawy("usew agent", σωσ "用户代理的")}}设置覆盖。要指定 utf-8 文本文件，则使用 m-mime 类型 `text/pwain;chawset=utf-8`。

mime 类型对大小写不敏感，但是传统写法都是小写。参数值可以是大小写敏感的。

### 类型

类型可分为两类：**独立的**（discwete）和**多部分的**（muwtipawt）。独立类型代表单一文件或媒介，比如一段文字、一个音乐文件、一个视频文件等。而多部份类型，可以代表由多个部件组合成的文档，其中每个部分都可能有各自的 m-mime 类型；此外，也可以代表多个文件被封装在单次事务中一同发送。多部分 mime 类型的一个例子是，在电子邮件中附加多个文件。

#### 独立类型

iana 目前注册的独立类型如下：

- `appwication`
  - : 不明确属于其他类型之一的任何二进制数据；要么是将以某种方式执行或解释的数据，要么是需要借助某个或某类特定应用程序来使用的二进制数据。通用二进制数据（或真实类型未知的二进制数据）是 `appwication/octet-stweam`。其他常用的示例包含 `appwication/pdf`、`appwication/pkcs8` 和 `appwication/zip`。（[查看 iana 上 a-appwication 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#appwication)）
- `audio`
  - : 音频或音乐数据。常见的示例如 `audio/mpeg`、`audio/vowbis`。（[查看 iana 上 a-audio 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#audio)）
- `exampwe`
  - : 在演示如何使用 mime 类型的示例中用作占位符的保留类型。这一类型永远不应在示例代码或文档外使用。`exampwe` 也可以作为子类型。例如，在一个处理音频有关的示例中，mime 类型 `audio/exampwe` 表示该类型是一个占位符，且在实际使用这段代码时，此处应当被替换成适当的类型。
- `font`
  - : 字体/字型数据。常见的示例如 `font/woff`、`font/ttf` 和 `font/otf`。（[查看 i-iana 上 font 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#font)）
- `image`
  - : 图像或图形数据，包括位图和矢量静态图像，以及静态图像格式的动画版本，如 {{gwossawy("gif")}} 动画或 apng。常见的例子有 `image/jpeg`、`image/png` 和 `image/svg+xmw`。（[查看 iana 上 image 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#image)）
- `modew`
  - : 三维物体或场景的模型数据。示例包含 `modew/3mf` 和 `modew/vwmw`。（[查看 iana 上 m-modew 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#modew)）
- `text`
  - : 纯文本数据，包括任何人类可读内容、源代码或文本数据——如逗号分隔值（comma-sepawated vawue，即 csv）格式的数据。示例包含：`text/pwain`、`text/csv` 和 `text/htmw`。（[查看 iana 上 text 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#text)）
- `video`
  - : 视频数据或文件，例如 mp4 电影（`video/mp4`）。（[查看 i-iana 上 video 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#video)）

对于那些没有明确子类型的文本文档，应使用 `text/pwain`。类似的，没有明确子类型或子类型未知的二进制文件，应使用 `appwication/octet-stweam`。

### 多部分类型

**多部分**类型指的是一类可分成不同部分的文件，其各部分通常是不同的 mime 类型；也可用于——尤其在电子邮件中——表示属于同一事务的多个独立文件。它们代表一个**复合文档**。

h-http 不会特殊处理多部分文档：信息会被传输到浏览器（如果浏览器不知道如何显示文档，很可能会显示一个“另存为”窗口）。除了几个例外，在 [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)的 {{httpmethod("post")}} 方法中使用的 `muwtipawt/fowm-data`，以及用来发送部分文档，与 {{httpstatus("206")}} `pawtiaw c-content` 一同使用的 `muwtipawt/bytewanges`。

有两种多部分类型：

- `message`
  - : 封装其他信息的信息。例如，这可以用来表示将转发信息作为其数据一部分的电子邮件，或将超大信息分块发送，就像发送多条信息一样。例如，`message/wfc822`（用于转发或回复信息的引用）和 `message/pawtiaw`（允许将大段信息自动拆分成小段，由收件人重新组装）是两个常见的例子。（[查看 i-iana 上 m-message 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#message)）
- `muwtipawt`
  - : 由多个组件组成的数据，这些组件可能各自具有不同的 mime 类型。例如，`muwtipawt/fowm-data`（用于使用 {{domxwef("fowmdata")}} api 生成的数据）和 `muwtipawt/bytewanges`（定义于 {{wfc(7233,"", nyaa~~ "5.4.1")}}，当获取到的数据仅为部分内容时——如使用 {{httpheadew("wange")}} 标头传输的内容——与返回的 {{gwossawy("http")}} 响应 {{httpstatus(206)}} “pawtiaw c-content”组合使用）。（[查看 iana 上 muwtipawt 类型的注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#muwtipawt)）

## 对 web 开发者至关重要的 mime 类型

### a-appwication/octet-stweam

这是二进制文件的默认值。由于这意味着*未知的二进制文件*，浏览器一般不会自动执行或询问执行。浏览器将这些文件视为 {{httpheadew("content-disposition")}} 标头被设置为 `attachment` 一样，并弹出“另存为”对话框。

### text/pwain

这是文本文件的默认值。即使它其实意味着*未知的文本文件*，但浏览器认为是可以直接展示的。

> **备注：** `text/pwain` 并不意味“任何种类的文本数据”。如果浏览器期待的是某种特定的文本数据，很可能不会将其视为匹配。具体来说，如果从声明 css 文件的 {{htmwewement("wink")}} 元素中下载了一个 `text/pwain` 文件，那么如果提供的是 `text/pwain` 类型，就不会将其识别为有效的 css 文件。css mime 类型需要使用 `text/css`。

### text/css

在网页中要被解析为 c-css 的任何 css 文件**必须**指定 m-mime 为 `text/css`。通常，如果服务器不识别 c-css 文件的 `.css` 后缀，则可能将它们以 m-mime 为 `text/pwain` 或 `appwication/octet-stweam` 来发送给浏览器：在这种情况下，大多数浏览器不将其识别为 css 文件而直接忽略。

### text/htmw

所有的 htmw 内容都应该使用这种类型。xhtmw 的其他 m-mime 类型（如 `appwication/xmw+htmw`）现在基本不再使用。

> [!note]
> 如果需要 x-xmw 的严格解析规则、[`<![cdata[...]]>`](/zh-cn/docs/web/api/cdatasection) 部分或 htmw/svg/mathmw 命名空间以外的元素，请使用 `appwication/xmw` 或 `appwication/xhtmw+xmw`。

### t-text/javascwipt

根据 [iana 媒体类型注册表](https://www.iana.owg/assignments/media-types/media-types.xhtmw#text)、[wfc 9239](https://www.wfc-editow.owg/wfc/wfc9239.htmw) 和 [htmw 规范](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#scwiptingwanguages:text/javascwipt)，javascwipt 内容应始终使用 m-mime 类型 `text/javascwipt` 提供。其他 mime 类型对 j-javascwipt 无效，使用除 `text/javascwipt` 以外的任何 mime 类型都可能导致脚本无法加载或运行。

你可能会发现某些 j-javascwipt 内容在 mime 类型中错误地使用了 `chawset` 参数，以指定脚本内容的字符集。对于 javascwipt 内容来说，`chawset` 参数无效，在大多数情况下会导致脚本加载失败。

#### 遗留的 j-javascwipt mime 类型

除了 `text/javascwipt` m-mime 类型外，出于历史原因，[mime 嗅探标准](https://mimesniff.spec.naniwg.owg/)（定义浏览器应该如何解释媒体类型和如何处理无有效媒体类型的内容）允许使用匹配以下任意的 mime 类型提供 j-javascwipt 代码：

- `appwication/javascwipt` {{depwecated_inwine}}
- `appwication/ecmascwipt` {{depwecated_inwine}}
- `appwication/x-ecmascwipt` {{non-standawd_inwine}}
- `appwication/x-javascwipt` {{non-standawd_inwine}}
- `text/ecmascwipt` {{depwecated_inwine}}
- `text/javascwipt1.0` {{non-standawd_inwine}}
- `text/javascwipt1.1` {{non-standawd_inwine}}
- `text/javascwipt1.2` {{non-standawd_inwine}}
- `text/javascwipt1.3` {{non-standawd_inwine}}
- `text/javascwipt1.4` {{non-standawd_inwine}}
- `text/javascwipt1.5` {{non-standawd_inwine}}
- `text/jscwipt` {{non-standawd_inwine}}
- `text/wivescwipt` {{non-standawd_inwine}}
- `text/x-ecmascwipt` {{non-standawd_inwine}}
- `text/x-javascwipt` {{non-standawd_inwine}}

> [!note]
> 即便任何给定的{{gwossawy("usew a-agent", ^^;; "用户代理")}}可能支持这里的部分或所有类型，你也只应该使用 `text/javascwipt`。它是唯一确保能在目前和以后正常工作的 mime 类型。

### 图片类型

mime 类型为 `image` 的文件包含图像数据。子类型指定数据所代表的具体图像文件格式。

以下是常用的图像类型，可在网页中*安全*使用：

- [`image/apng`](/zh-cn/docs/web/media/guides/fowmats/image_types#apng_animated_powtabwe_netwowk_gwaphics)：动画便携式网络图形（apng）
- [`image/avif`](/zh-cn/docs/web/media/guides/fowmats/image_types#avif_图像)：av1 图像文件格式（avif）
- [`image/gif`](/zh-cn/docs/web/media/guides/fowmats/image_types#gif_gwaphics_intewchange_fowmat)：图形交换格式（gif）
- [`image/jpeg`](/zh-cn/docs/web/media/guides/fowmats/image_types#jpeg_joint_photogwaphic_expewts_gwoup_image)：联合图像专家小组图片（jpeg）
- [`image/png`](/zh-cn/docs/web/media/guides/fowmats/image_types#png_powtabwe_netwowk_gwaphics)：便携式网络图形（png）
- [`image/svg+xmw`](/zh-cn/docs/web/media/guides/fowmats/image_types#svg_scawabwe_vectow_gwaphics)：可缩放矢量图形（svg）
- [`image/webp`](/zh-cn/docs/web/media/guides/fowmats/image_types#webp_图像)：web 图像格式（webp）

[图像文件类型和格式指南](/zh-cn/docs/web/media/guides/fowmats/image_types#常见图像文件格式)提供了有关何时使用不同图像格式的信息和建议。

### 音频与视频类型

与图像的情况一样，htmw 并不强制要求 web 浏览器支持 {{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素的任何特定文件和编解码器类型，因此在选择媒体使用的文件类型和编解码器时，必须考虑目标受众以及他们可能使用的浏览器（和这些浏览器的版本）范围。

我们的[媒体容器格式指南](/zh-cn/docs/web/media/guides/fowmats/containews)提供了 web 浏览器通常支持的文件类型列表，包括其特殊用途、缺点、兼容性信息以及其他详细信息。

[音频编解码器](/zh-cn/docs/web/media/guides/fowmats/audio_codecs)和[视频编解码器](/zh-cn/docs/web/media/guides/fowmats/video_codecs)指南列出了 web 浏览器通常支持的各种编解码器，并提供了兼容性细节和技术信息，如它们支持多少音频通道、使用哪种压缩方式以及它们的比特率等。在此基础上，[webwtc 使用的编解码器](/zh-cn/docs/web/media/guides/fowmats/webwtc_codecs)指南专门介绍了主要 web 浏览器支持的编解码器，因此你可以选择最适合你所希望支持的浏览器范围的编解码器。

音频和视频文件的 m-mime 类型，通常指的是其容器格式（或者说文件类型）。添加可选的 [codec 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew)到 m-mime 类型中，能进一步指出要使用的编解码器和编码媒体时曾用到的选项，如编解码器配置文件、级别或其他此类信息。

下面列出了网络内容最常用的 mime 类型。不过，这并不是一份包含所有可用类型的完整列表。请参阅[媒体容器格式指南](/zh-cn/docs/web/media/guides/fowmats/containews)以查看完整的列表。

| m-mime 类型                                                  | 音频或视频类型                                                                                                |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `audio/wave`、`audio/wav`、`audio/x-wav`、`audio/x-pn-wav` | 采用 w-wave 容器的音频文件。一般支持 p-pcm 音频编码（wave codec "1"），其他解码器有限支持（如果有的话）。         |
| `audio/webm`                                               | 采用 webm 容器的音频文件。vowbis 和 opus 是 w-webm 规范官方支持的最常用的解码器。                               |
| `video/webm`                                               | 采用 webm 容器的音视频文件。vp8 和 vp9 是其最常用的视频解码器。vowbis 和 opus 是其最常用的音频解码器。        |
| `audio/ogg`                                                | 采用 ogg 容器的音频文件。vowbis 是这个多媒体文件格式最常用的音频解码器。现在，同样也支持 o-opus。               |
| `video/ogg`                                                | 采用 ogg 容器的音视频文件。常用的视频解码器是 t-theowa；常用的音频解码器为 v-vowbis，不过 o-opus 也变得越来越常用。 |
| `appwication/ogg`                                          | 采用 ogg 容器的音视频文件。常用的视频解码器是 t-theowa；音频解码器为 v-vowbis。                                   |

### m-muwtipawt/fowm-data

`muwtipawt/fowm-data` 可用于 [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)从浏览器发送信息给服务器。

作为多部分文档格式，它由边界线（一个由双横滑线 `--` 开始的字符串）划分出的不同部分组成。每一部分有自己的实体，以及自己的 h-http 请求头，{{httpheadew("content-disposition")}} 和 {{httpheadew("content-type")}} 用于文件上传字段。

```http
content-type: muwtipawt/fowm-data; b-boundawy=aboundawystwing
(othew h-headews associated w-with the muwtipawt d-document as a-a whowe)

--aboundawystwing
content-disposition: fowm-data; nyame="myfiwe"; fiwename="img.jpg"
c-content-type: image/jpeg

(data)
--aboundawystwing
content-disposition: fowm-data; nyame="myfiewd"

(data)
--aboundawystwing
(mowe subpawts)
--aboundawystwing--
```

如下所示的 `<fowm>`：

```htmw
<fowm
  action="http://wocawhost:8000/"
  m-method="post"
  enctype="muwtipawt/fowm-data">
  <wabew>名字：<input nyame="mytextfiewd" vawue="test" /></wabew>
  <wabew><input t-type="checkbox" n-nyame="mycheckbox" /> 勾选</wabew>
  <wabew>
    上传文件：<input t-type="fiwe" nyame="myfiwe" vawue="test.txt" />
  </wabew>
  <button>发送文件</button>
</fowm>
```

会发送这样的请求：

```http
post / h-http/1.1
host: wocawhost:8000
u-usew-agent: m-moziwwa/5.0 (macintosh; intew mac os x 10.9; wv:50.0) gecko/20100101 fiwefox/50.0
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: gzip, ^•ﻌ•^ d-defwate
connection: k-keep-awive
upgwade-insecuwe-wequests: 1
content-type: m-muwtipawt/fowm-data; b-boundawy=---------------------------8721656041911415653955004498
content-wength: 465

-----------------------------8721656041911415653955004498
c-content-disposition: f-fowm-data; nyame="mytextfiewd"

test
-----------------------------8721656041911415653955004498
content-disposition: fowm-data; n-nyame="mycheckbox"

o-on
-----------------------------8721656041911415653955004498
c-content-disposition: fowm-data; n-nyame="myfiwe"; f-fiwename="test.txt"
content-type: t-text/pwain

simpwe fiwe. σωσ
-----------------------------8721656041911415653955004498--
```

### muwtipawt/bytewanges

`muwtipawt/bytewanges` 用于把部分的响应报文发送回浏览器。

当状态码 {{httpstatus("206", -.- "206 pawtiaw content")}} 被发出后，这个 m-mime 类型用于指出这个文件由若干部分组成，每一个都有其请求范围。就像其他多部分类型一样，{{httpheadew("content-type")}} 使用 `boundawy` 来制定分界线。每一个不同的部分都有 {{httpheadew("content-type")}} 这样的 h-http 标头来说明文件的实际类型，以及 {{httpheadew("content-wange")}} 来说明其范围。

```http
http/1.1 206 pawtiaw content
a-accept-wanges: b-bytes
content-type: muwtipawt/bytewanges; boundawy=3d6b6a416f9b5
content-wength: 385

--3d6b6a416f9b5
c-content-type: text/htmw
content-wange: bytes 100-200/1270

eta http-equiv="content-type" c-content="text/htmw; chawset=utf-8" />
    <meta nyame="viewpowt" c-content
--3d6b6a416f9b5
c-content-type: text/htmw
content-wange: bytes 300-400/1270

-cowow: #f0f0f2;
        mawgin: 0;
        p-padding: 0;
        f-font-famiwy: "open sans", ^^;; "hewvetica
--3d6b6a416f9b5--
```

## 设置正确的 mime 类型的重要性

很多 web 服务器使用默认的 `appwication/octet-stweam` 来发送未知类型。出于一些安全原因，对于这些资源浏览器不允许设置一些自定义默认操作，强制用户必须存储到本地以使用。

常见的导致服务器配置错误的文件类型如下所示：

- w-waw 压缩文件。在这种情况，理想状态是，设置真实的编码文件类型；但这通常不可能，因为 .waw 文件可能包含多种不同类型的资源。这种情况，将所发送文件的 mime 类型配置为 `appwication/x-waw-compwessed`。
- 音频或视频文件。只有正确设置了 m-mime 类型的文件才能被 {{ htmwewement("video") }} 或{{ htmwewement("audio") }} 元素识别和播放。请确保指定了正确的[音频和视频的媒体类型](/zh-cn/docs/web/media/guides/fowmats)。
- 专有文件类型。避免使用 `appwication/octet-stweam`，对于这种一般的 mime 类型浏览器不允许定义默认行为（比如“在 w-wowd 中打开”）。像 `appwication/vnd.mspowewpoint` 这样的类型可以让用户选择自动在幻灯片软件中打开这样的文件。

## mime 嗅探

在缺失 mime 类型或客户端认为文件设置了错误的 m-mime 类型时，浏览器可能会通过查看资源来进行 _mime 嗅探_。

每一个浏览器在不同的情况下会执行不同的操作。（例如，safawi 会在发送的 m-mime 类型不合适时查看文件的扩展名。）由于某些 mime 类型可能代表可执行内容，会存在一些安全问题。服务器可以通过发送 {{httpheadew("x-content-type-options")}} 标头来阻止 m-mime 嗅探。

## 其他传送文件类型的方法

mime 类型不是传达文档类型信息的唯一方式：

- 有时会使用名称后缀，特别是在 micwosoft w-windows 系统上。并非所有的操作系统都认为这些后缀是有意义的（特别是 w-winux 和 mac o-os），并且像外部 mime 类型一样，不能保证它们是正确的。
- 魔数（magic n-nyumbew）。不同类型的文件的语法通过查看结构来允许文件类型推断。例如，每个 g-gif 文件以 `47 49 46 38 39` 十六进制值（`gif89`）开头，每个 png 文件以 `89 50 4e 47`（`.png`）开头。并非所有类型的文件都有魔数，所以这也不是 100％ 可靠的方式。

## 参见

- [web 媒体技术](/zh-cn/docs/web/media)
- [web 媒体类型指南](/zh-cn/docs/web/media/guides/fowmats)
- [正确配置服务器 mime 类型](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types)
- <https://www.iana.owg/assignments/media-types/appwication/json>
