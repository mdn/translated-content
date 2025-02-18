---
title: 媒体容器格式（文件类型）
slug: Web/Media/Guides/Formats/Containers
l10n:
  sourceCommit: d68dc0cf0f0caff5572ce83cb28df898ac815e40
---

音频和视频媒体文件格式由两部分组成（当然，如果文件中同时包含音频和视频，则由三部分组成）：使用的音频和/或视频编解码器以及使用的媒体容器格式（或文件类型）。在本指南中，我们将介绍网络上最常用的容器格式，包括它们的基本规范、优点、限制和理想的使用案例。

[WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 完全不使用容器。相反，它使用 {{domxref("MediaStreamTrack")}} 对象代表每个音轨，直接将编码后的音频和视频音轨从一个对等点串流到另一个对等点。请参见 [WebRTC 使用的编解码器](/zh-CN/docs/Web/Media/Guides/Formats/WebRTC_codecs)，了解有关 WebRTC 通话常用编解码器的信息，以及有关 WebRTC 中编解码器支持的浏览器兼容性信息。

## 常见容器格式

虽然有大量的媒体容器格式，但下面列出的是你最有可能遇到的格式。有些只支持音频，有些则同时支持音频和视频。每种格式的 MIME 类型和扩展名如下所示，web 上最常用的几个媒体容器格式是 MPEG-4（MP4）、Web 媒体文件（WebM）和 MPEG Audio Layer III（MP3）。当然你也可能遇见过 MP3、Ogg、WAV、AVI、MOV 等其他格式。不过，并非所有这些都能得到浏览器的广泛支持；有时为了方便，或由于其普遍性，容器和编解码器的某些组合会被赋予自己的文件扩展名和 MIME 类型。例如，只有 Opus 音轨的 Ogg 文件有时被称为 Opus 文件，扩展名甚至可能是 `.opus`。但实际上它仍然只是一个 Ogg 文件。

在其他情况下，存储在某种容器类型中的特定编解码器无处不在，以至于这种配对以一种独特的方式处理。MP3 音频文件就是一个很好的例子，它实际上是一个使用 MPEG-1 Audio Layer III 编码的单音轨 MPEG-1 容器。这些文件使用 `audio/mp3` MIME 类型和 `.mp3` 扩展名，尽管它们的容器只是 MPEG。

### 媒体容器格式（文件类型）索引

要了解有关特定容器格式的更多信息，请在此列表中找到它并单击查看详细信息，其中包括有关容器通常用于哪些用途、它支持哪些编解码器以及哪些浏览器支持它等详细信息。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">编解码器名称（简称）</th>
      <th scope="col">编解码器全名</th>
      <th scope="col">浏览器兼容性</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#3gp">3GP</a></th>
      <td>Third Generation Partnership</td>
      <td>Android 版 Firefox</td>
    </tr>
    <tr>
      <th scope="row"><a href="#adts">ADTS</a></th>
      <td>Audio Data Transport Stream</td>
      <td>
        <p>Firefox</p>
        <p>仅当底层操作系统的媒体框架可用时才可用。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#flac">FLAC</a></th>
      <td>Free Lossless Audio Codec</td>
      <td>Chrome 56、Edge 16、Firefox 51、Safari 11</td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpegmpeg-2">MPEG / MPEG-2</a></th>
      <td>Moving Picture Experts Group (1 and 2)</td>
      <td>—</td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-4_mp4">MPEG-4 (MP4)</a></th>
      <td>Moving Picture Experts Group 4</td>
      <td>Chrome 3、Edge 12、Firefox、Internet Explorer 9、Opera 24、Safari 3.1</td>
    </tr>
    <tr>
      <th scope="row"><a href="#ogg">Ogg</a></th>
      <td>Ogg</td>
      <td>
        <p>Chrome 3、Firefox 3.5、Edge 17（仅桌面版）、Internet Explorer 9、Opera 10.50</p>
        <p>Edge 浏览器需要安装 <a href="https://www.microsoft.com/store/productId/9N5TDP8VCMHS">Web 媒体插件</a>。</p>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#quicktime">QuickTime (MOV)</a></th>
      <td>Apple QuickTime movie</td>
      <td>只有旧版本的 Safari 以及其他支持 Apple QuickTime 插件的浏览器才支持</td>
    </tr>
    <tr>
      <th scope="row"><a href="#webm">WebM</a></th>
      <td>Web Media</td>
      <td>
        <p>Chrome 6、Edge 17（仅桌面版）、Firefox 4、Opera 10.6、Safari 14.1 (macOS)、Safari 15 (iOS)</p>
        <p>Edge 浏览器需要安装 <a href="https://www.microsoft.com/store/productId/9N5TDP8VCMHS">Web 媒体插件</a>。</p>
      </td>
    </tr>
  </tbody>
</table>

### 3GP

**3GP** 或 **3GPP** 媒体容器用于封装音频和/或视频，这些音频和/或视频专门用于通过蜂窝网络传输，供移动设备使用。该格式专为 3G 手机设计，但仍可用于更现代的手机和网络。不过，随着带宽可用性的提高和大多数网络数据上限的增加，对 3GP 格式的需求有所减少。不过，这种格式仍可用于速度较慢的网络和性能较低的手机。

这种媒体容器格式源自 ISO 基本媒体文件格式和 MPEG-4，但专门针对带宽较低的情况进行了精简。

| 音频          | 视频          |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

这些 MIME 类型是 3GP 媒体容器的基本类型；根据使用的特定编解码器，还可能使用其他类型。此外，还可以在 MIME 类型字符串中[添加 `codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp)，以指明音频和/或视频轨道使用了哪些编解码器，并可选择提供有关配置文件、级别和/或其他编解码器配置细节的详细信息。

<table class="standard-table">
  <caption>
    3GP 支持的视频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 (MP4v-es)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    3GP 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AMR-NB</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AMR-WB+</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AAC-LC</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC v2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### ADTS

**音频数据传输流**（**ADTS**）是 MPEG-4 第 3 部分为音频数据指定的一种容器格式，用于流式音频，如网络广播。从本质上讲，它是一种几乎裸露的 AAC 音频数据流，由带有最少报头的 ADTS 帧组成。

| 音频         |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

ADTS 使用的 MIME 类型取决于其中包含的音频帧类型。如果使用 ADTS 帧，则应使用 `audio/aac` MIME 类型。如果音频帧是 MPEG-1/MPEG-2 音频层 I、II 或 III 格式，则 MIME 类型应为 `audio/mpeg`。

<table class="standard-table">
  <caption>
    ADTS 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MP3</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
  </tbody>
</table>

Firefox 对 AAC 的支持依赖于操作系统的媒体基础架构，因此只要操作系统支持，就可以使用。

### FLAC

**自由无损音频编解码器**（**FLAC**）是一种无损音频编解码器；还有一种相关的简单容器格式，也称为 FLAC，可以包含这种音频。该格式没有任何专利，因此其使用不会受到干扰。FLAC 文件只能包含 FLAC 音频数据。

| 音频                     |
| ------------------------ |
| `audio/flac`             |
| `audio/x-flac`（非标准） |

<table class="standard-table">
  <caption>
    FLAC 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
  </tbody>
</table>

### <a id="MPEG" name="MPEG">MPEG</a>/MPEG-2

**[MPEG-1](https://zh.wikipedia.org/wiki/MPEG-1)** 和 **[MPEG-2](https://zh.wikipedia.org/wiki/MPEG-2)** 文件格式基本相同。这些格式由动态影像专家组（MPEG）创建，广泛应用于物理媒体，包括 DVD 媒体的视频格式。

在互联网上，MPEG 文件格式最常见的用途可能是包含 [Layer_III/MP3](https://zh.wikipedia.org/wiki/MPEG-1) 声音数据；由此产生的文件就是全球数字音乐设备广泛使用的 MP3 文件。除此之外，MPEG-1 和 MPEG-2 在 Web 内容中的应用并不广泛。

MPEG-1 和 MPEG-2 的主要区别在于媒体数据格式而非容器格式。MPEG-1 于 1992 年推出，MPEG-2 于 1996 年推出。

| 音频         | 视频         |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<table class="standard-table">
  <caption>
    MPEG-1 和 MPEG-2 支持的视频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Part 2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2 Part 2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    MPEG-1 和 MPEG-2 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MPEG-1 Audio Layer I</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer II</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
  </tbody>
</table>

### MPEG-4 (MP4)

**[MPEG-4](https://zh.wikipedia.org/wiki/MPEG-4)**（**MP4**）是 MPEG 文件格式的最新版本。该格式有两个版本，分别在规范的第 1 部分和第 14 部分中定义。MP4 是当今流行的容器，因为它支持几种最常用的编解码器，并得到广泛支持。

最初的 MPEG-4 第 1 部分文件格式于 1999 年推出；第 14 部分定义的第 2 版格式于 2003 年加入。MP4 文件格式源于 [ISO 基本媒体文件格式](https://en.wikipedia.org/wiki/ISO_base_media_file_format)，而后者直接源于 [Apple](https://www.apple.com/) 开发的 [QuickTime 文件格式](https://zh.wikipedia.org/wiki/QuickTime文件格式)。

在指定 MPEG-4 媒体类型（`audio/mp4` 或 `video/mp4`）时，可在 MIME 类型字符串中[添加 `codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp)，以指明音频和/或视频轨道使用了哪些编解码器，并可选择提供有关配置文件、级别和/或其他编解码器配置细节的详细信息。

| 音频        | 视频        |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

这些 MIME 类型是 MPEG-4 媒体容器的基本类型；根据容器中使用的特定编解码器，可能会使用其他 MIME 类型。此外，还可以在 MIME 类型字符串中[添加 `codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp)，以指示音频和/或视频轨道使用了哪些编解码器，并可选择提供有关配置文件、级别和/或其他编解码器配置细节的详细信息。

<table class="standard-table">
  <caption>
    MPEG-4 支持的视频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>
        <p>是</p>
        <p>
          Firefox 对 H.264 的支持依赖于操作系统的媒体基础架构，因此只要操作系统支持，就可以使用。
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">AV1</th>
      <td></td>
      <td></td>
      <td>
        <p>是</p>
        <p>ARM 平台的 Windows 禁用了火狐浏览器对 AV1 的支持（通过设置首选项 <code>media.av1.enabled</code> 为 <code>true</code> 来启用）</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    MPEG-4 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>
        <p>是</p>
        <p>Firefox 对 H.264 的支持依赖于操作系统的媒体基础架构，因此只要操作系统支持，就可以使用。</p>
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Ogg

[Ogg](https://zh.wikipedia.org/wiki/Ogg) 容器格式是一种自由开放的格式，由 [Xiph.org 基金会](https://www.xiph.org/)维护。Ogg 框架还定义了专利无约束媒体数据格式，如 Theora 视频编解码器、Vorbis 和 Opus 音频编解码器。有关 Ogg 格式的 [Xiph.org 文档](https://xiph.org/ogg/) 可在其网站上查阅。

虽然 Ogg 已经存在了很长时间，但它从未获得广泛的支持，因此无法成为媒体容器的首选。通常情况下，你最好使用 WebM，不过有时 Ogg 也能派上用场，比如当你希望支持尚未支持 WebM 的旧版本 Firefox 和 Chrome 浏览器时。例如，Firefox 3.5 和 3.6 支持 Ogg，但不支持 WebM。

有关 Ogg 及其编解码器的更多信息，请参阅 [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/)。

| 音频        | 视频        |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

当不一定知道媒体是否包含音频或视频时，可以使用 `application/ogg` MIME 类型。如果可能，应使用其中一种特定类型，但如果不知道内容格式，则应使用 `application/ogg` 类型。

你还可以在 MIME 类型字符串中[添加 `codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter)，以指示音频和/或视频轨道使用了哪些编解码器，并可选择进一步描述轨道媒体格式。

<table class="standard-table">
  <caption>
    Ogg 支持的视频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Theora</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Ogg 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FLAC</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Opus</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
  </tbody>
</table>

### QuickTime

**QuickTime** 文件格式（**QTFF**、**QT** 或 **MOV**）由苹果公司创建，供其同名媒体框架使用。这些文件的扩展名为 `.mov`，这是因为该格式最初用于电影，通常被称为“QuickTime 电影”格式。虽然 QTFF 是 MPEG-4 文件格式的基础，但两者之间存在差异，不能完全互换。

QuickTime 文件支持任何类型的基于时间的数据，包括音频和视频媒体、文本轨道等。QuickTime 文件主要由 macOS 支持，但多年来，Windows 版 QuickTime 也可在 Windows 上访问这些文件。不过，截至 2016 年初，QuickTime for Windows 已不再受苹果公司支持，而且由于存在已知的安全隐患，不应使用。不过，Windows Media Player 现在已集成了对 QuickTime 2.0 及更早版本文件的支持；而对 QuickTime 后续版本的支持则需要第三方添加。

在 Mac OS 上，QuickTime 框架不仅支持 QuickTime 格式的电影文件和编解码器，还支持大量流行和专业的音频和视频编解码器，以及静态图像格式。通过 QuickTime，Mac 应用程序（包括通过 QuickTime 插件或直接集成 QuickTime 的网络浏览器）能够读写音频格式，包括 AAC、AIFF、MP3、PCM 和 Qualcomm PureVoice；以及视频格式，包括 AVI、DV、Pixlet、ProRes、FLAC、Cinepak、3GP、H.261 到 H.265、MJPEG、MPEG-1 和 MPEG-4 Part 2、Sorenson 等。

此外，QuickTime 还可使用许多第三方组件，其中一些还增加了对其他编解码器的支持。

由于 QuickTime 主要支持苹果设备，因此在互联网上已不再广泛使用。苹果公司现在一般使用 MP4 制作视频。此外，QuickTime 框架在 Mac 上被弃用已有一段时间，从 macOS 10.15 Catalina 开始已完全不可用。

| 视频              |
| ----------------- |
| `video/quicktime` |

`video/Quicktime` MIME 类型是 QuickTime 媒体容器的基本类型。值得注意的是，QuickTime（Mac 操作系统上的媒体框架）支持多种容器和编解码器，因此它实际上支持许多其他 MIME 类型。

你还可以在 MIME 类型字符串中[添加 `codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter#iso_base_media_file_format_mp4_quicktime_and_3gp)，以指示音频和/或视频轨道使用了哪些编解码器，并可选择进一步描述轨道媒体格式。

<table class="standard-table">
  <caption>
    QuickTime 支持的视频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AVC (H.264)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Cinepak</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Component Video</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">DV</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.261</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">H.263</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-4 Part 2 Visual</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Motion JPEG</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Sorenson Video 3</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    QuickTime 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AAC</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">ALaw 2:1</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Apple Lossless (ALAC)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">HE-AAC</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Microsoft ADPCM</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law 2:1 (u-Law)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WAVE（WAV）

**波形音频文件格式**（**WAVE**）因其文件名扩展名为 `.wav`，通常被称为 WAV，是微软和 IBM 开发的一种用于存储音频比特流数据的格式。

它源于资源交换文件格式（RIFF），因此与苹果公司的 AIFF 等其他格式相似。WAV 编解码器注册表见 {{RFC(2361)}}；不过，由于几乎所有 WAV 文件都使用线性 PCM，因此对其他编解码器的支持很少。

WAVE 格式于 1991 年首次发布。

| 音频             |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

<table class="standard-table">
  <caption>
    WAVE 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ADPCM (Adaptive Differential Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">GSM 06.10</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">LPCM (Linear Pulse Code Modulation)</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">MPEG-1 Audio Layer III (MP3)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">µ-Law (u-Law)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

**[WebM](https://zh.wikipedia.org/wiki/WebM)**（**Web 媒体**）是一种基于 [Matroska](https://zh.wikipedia.org/wiki/Matroska) 的格式，专门设计用于现代 web 环境。它完全基于自由开放的技术，主要使用的编解码器也是自由开放的，不过有些产品也支持 WebM 容器中的其他编解码器。

WebM 于 2010 年首次推出，现已得到广泛支持。符合要求的 WebM 实现必须支持 VP8 和 VP9 视频编解码器以及 Vorbis 和 Opus 音频编解码器。WebM 容器格式及其所需的编解码器都有开放许可证。任何其他编解码器都可能需要许可证才能使用。

| 音频         | 视频         |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<table class="standard-table">
  <caption>
    WebM 支持的视频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">AV1</th>
      <td>是</td>
      <td>是</td>
      <td>
        <p>是</p>
        <p>Firefox 对 AV1 的支持已在 MacOS 的 Firefox 66、Windows 的 Firefox 67 和 Linux 的 Firefox 68 中添加。安卓版 Firefox 还不支持 AV1；Firefox 浏览器的实现设计为使用安全进程，而安卓系统还不支持安全进程。
        </p>
      </td>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">VP8</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">VP9</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    WebM 支持的音频编解码器
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">编解码器</th>
      <th colspan="4" scope="col" style="text-align: center">
        浏览器支持
      </th>
    </tr>
    <tr>
      <th scope="col">Chrome</th>
      <th scope="col">Edge</th>
      <th scope="col">Firefox</th>
      <th scope="col">Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Opus</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">Vorbis</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 选择正确的容器

在为媒体选择最佳容器时，有几个因素需要考虑。每个因素的相对重要性取决于你的需求、许可证要求和目标受众的兼容性要求。

### 准则

最佳选择还取决于你要对媒体做什么。回放媒体与录制和/或编辑媒体是两码事。如果要对媒体数据进行操作，使用无压缩格式可以提高性能，而使用无损压缩格式至少可以防止噪音的积累，因为每次重新压缩都会使压缩伪影成倍增加。

- 如果你的目标受众可能包括移动用户，特别是使用低端设备或低速网络的用户，请考虑以 3GP 容器提供适当压缩的媒体版本。
- 如果你有任何特定的编码要求，请确保你选择的容器支持适当的编解码器。
- 如果你希望媒体采用非专有的开放格式，可考虑使用 FLAC（音频）或 WebM（视频）等开放式容器格式。
- 如果出于某种原因，只能提供单一格式的媒体，请选择可用于最广泛设备和浏览器的格式，如 MP3（用于音频）或 MP4（用于视频和/或音频）。
- 如果你的媒体是纯音频的，那么选择纯音频的容器格式也是合理的。现在专利都已过期，MP3 是一种受广泛支持的良好选择。WAVE 很好，但未经压缩，因此在使用它来处理大样本音频之前要注意这一点。如果目标浏览器都支持 FLAC，那么由于其无损压缩，FLAC 是一个很好的选择。

遗憾的是，相对主要的无损压缩格式（FLAC 和 ALAC）都不受普遍支持。FLAC 是这两种格式中支持范围较广的一种，但 macOS 在不安装额外软件的情况下不支持 FLAC，而 iOS 则完全不支持 FLAC。如果你需要提供无损音频，你可能需要同时提供 FLAC 和 ALAC 才能接近通用兼容性。

### 容器选择建议

下表提供了在各种情况下建议使用的容器。这些只是建议。在选择容器格式之前，请务必考虑你的应用程序和组织的需求。

#### 仅音频文件

| 如果你的需求是...      | 考虑使用这个容器格式         |
| ---------------------- | ---------------------------- |
| 用于通用播放的压缩文件 | MP3 (MPEG-1 Audio Layer III) |
| 无损压缩文件           | 带有 ALAC 回退的 FLAC        |
| 未经压缩的文件         | WAV                          |

现在，MP3 的专利已全部到期，选择音频文件格式变得容易多了。人们不必再在 MP3 的广泛兼容性和使用时需要支付版税之间做出选择。

#### 视频文件

| 如果你的需求是...          | 考虑使用这个容器格式                        |
| -------------------------- | ------------------------------------------- |
| 通用视频，最好采用开放格式 | WebM（最好带有 MP4 回退）                   |
| 通用视频                   | MP4（最好带有 WebM 或 Ogg 回退）            |
| 针对慢速连接优化的高压缩   | 3GP（最好带有 MP4 回退）                    |
| 与旧设备/浏览器兼容        | QuickTime（最好具有 AVI 和/或 MPEG-2 回退） |

这些建议提出了一些假设。在做出最终决定前，应该仔细考虑这些选项，尤其是当有大量媒体需要编码时。

## 最大限度地兼容多个容器

为了优化兼容性，值得考虑提供多个版本的媒体文件，使用 {{HTMLElement("source")}} 元素在 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 元素中指定每个来源。例如，可以将 Ogg 或 WebM 视频作为首选，并以 MP4 格式作为后备。甚至可以选择提供类似 QuickTime 或 AVI 的复古后备格式。

为此，你需要创建一个没有 [`src`](/zh-CN/docs/Web/HTML/Element/video#src) 属性的 `<video>`（或 `<audio>`）元素。然后在 `<video>` 元素中添加子元素 {{HTMLElement("source")}}，每提供一个版本的视频就添加一个。这可用于提供不同版本的视频，根据带宽可用性进行选择，但在我们的案例中，我们将用它来提供格式选项。

在这里显示的示例中，我们向浏览器提供了两种格式的视频：WebM 和 MP4。

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

视频首先以 WebM 格式提供（[`type`](/zh-CN/docs/Web/HTML/Element/video#type) 属性设置为 `video/webm`）。如果{{Glossary("user agent","用户代理")}}无法播放，就会转到下一个选项，其 `type` 属性被指定为 `video/mp4`。如果两个选项都无法播放，则会显示 `This browser does not support the HTML video element` 的文本。

## 规范

| 规范                                                                                                                             | 注释                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [ETSI 3GPP](https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=1441)                | 定义了 3GP 容器格式                                                                       |
| [ISO/IEC 14496-3](https://www.iso.org/standard/53943.html)（MPEG-4 Part 3：音频）                                                | 定义了包含 ADTS 的 MP4 音频                                                               |
| [FLAC 格式](https://xiph.org/flac/format.html)                                                                                   | FLAC 格式规范                                                                             |
| [ISO/IEC 11172-1](https://www.iso.org/standard/19180.html)（MPEG-1 Part 1：系统）                                                | 定义了 MPEG-1 容器格式                                                                    |
| [ISO/IEC 13818-1](https://www.iso.org/standard/74427.html)（MPEG-2 Part 1：系统）                                                | 定义了 MPEG-2 容器格式                                                                    |
| [ISO/IEC 14496-14](https://www.iso.org/standard/75929.html)（MPEG-4 Part 14：MP4 文件格式）                                      | 定义了 MPEG-4（MP4）版本 2 容器格式                                                       |
| [ISO/IEC 14496-1](https://www.iso.org/standard/55688.html)（MPEG-4 Part 1：系统）                                                | 定义了原始 MPEG-4（MP4）容器格式                                                          |
| {{RFC(3533)}}                                                                                                                    | 定义了 OGG 容器格式                                                                       |
| {{RFC(5334)}}                                                                                                                    | 定义了 OGG 媒体类型和文件扩展名                                                           |
| [QuickTime 文件格式规范](https://developer.apple.com/documentation/quicktime-file-format)                                        | 定义了 QuickTime movie（MOV）格式                                                         |
| [多媒体程序接口和数据定义 1.0 版本](https://web.archive.org/web/20090417165828/http:/www.kk.iij4u.or.jp/~kondo/wave/mpidata.txt) | 最接近官方 WAVE 规范的产品                                                                |
| [资源交换文件格式](https://learn.microsoft.com/zh-cn/windows/win32/xaudio2/resource-interchange-file-format--riff-)（WAV 使用）  | 定义了 RIFF 格式，WAVE 文件是 RIFF 的一种形式                                             |
| [WebM 容器指南](https://www.webmproject.org/docs/container/)                                                                     | 为 WebM 适配 Matroska 的指南                                                              |
| [Matroska 规范](https://matroska.org/technical/elements.html)                                                                    | 作为 WebM 基础的 Matroska 容器格式规范                                                    |
| [WebM 字节流格式](https://w3c.github.io/mse-byte-stream-format-webm/)                                                            | 与[媒体源扩展](/zh-CN/docs/Web/API/Media_Source_Extensions_API)一起使用的 WebM 字节流格式 |

## 浏览器兼容性

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: bottom">
        容器格式名称
      </th>
      <th
        colspan="3"
        scope="col"
        style="text-align: center; border-right: 2px solid #d4dde4"
      >
        音频
      </th>
      <th colspan="3" scope="col" style="text-align: center">视频</th>
    </tr>
    <tr>
      <th scope="col" style="vertical-align: bottom">MIME 类型</th>
      <th scope="col" style="vertical-align: bottom">扩展</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        浏览器支持
      </th>
      <th scope="col" style="vertical-align: bottom">MIME 类型</th>
      <th scope="col" style="vertical-align: bottom">扩展</th>
      <th
        scope="col"
        style="vertical-align: bottom; border-right: 2px solid #d4dde4"
      >
        浏览器支持
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="vertical-align: bottom">3GP</th>
      <td style="vertical-align: top"><code>audio/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/3gpp</code></td>
      <td style="vertical-align: top"><code>.3gp</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        ADTS（音频数据传输流）
      </th>
      <td style="vertical-align: top"><code>audio/aac</code></td>
      <td style="vertical-align: top"><code>.aac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">FLAC</th>
      <td style="vertical-align: top"><code>audio/flac</code></td>
      <td style="vertical-align: top"><code>.flac</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row" style="vertical-align: top">
        MPEG-1 / MPEG-2（MPG 或 MPEG）
      </th>
      <td style="vertical-align: top"><code>audio/mpeg</code></td>
      <td style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td rowspan="2" style="vertical-align: top"><code>video/mpeg</code></td>
      <td rowspan="2" style="vertical-align: top">
        <code>.mpg</code><br /><code>.mpeg</code>
      </td>
      <td rowspan="2" style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <td style="vertical-align: top"><code>audio/mp3</code></td>
      <td style="vertical-align: top"><code>.mp3</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">MPEG-4 (MP4)</th>
      <td style="vertical-align: top"><code>audio/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4a</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/mp4</code></td>
      <td style="vertical-align: top">
        <code>.mp4</code><br /><code>.m4v</code><br /><code>.m4p</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">Ogg</th>
      <td style="vertical-align: top"><code>audio/ogg</code></td>
      <td style="vertical-align: top">
        <code>.oga</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/ogg</code></td>
      <td style="vertical-align: top">
        <code>.ogv</code><br /><code>.ogg</code>
      </td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">QuickTime Movie (MOV)</th>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">—</td>
      <td style="vertical-align: top"><code>video/quicktime</code></td>
      <td style="vertical-align: top"><code>.mov</code></td>
      <td style="vertical-align: top">Safari</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WAV（波形音频文件）</th>
      <td style="vertical-align: top"><code>audio/wav</code></td>
      <td style="vertical-align: top"><code>.wav</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
      <td style="vertical-align: top">—</td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">WebM</th>
      <td style="vertical-align: top"><code>audio/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top; border-right: 2px solid #d4dde4">
        Firefox
      </td>
      <td style="vertical-align: top"><code>video/webm</code></td>
      <td style="vertical-align: top"><code>.webm</code></td>
      <td style="vertical-align: top">Firefox</td>
    </tr>
  </tbody>
</table>

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [MediaStream Recording API](/zh-CN/docs/Web/API/MediaStream_Recording_API)
- {{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素
