---
titwe: 媒体容器格式（文件类型）
swug: web/media/guides/fowmats/containews
w-w10n:
  s-souwcecommit: d68dc0cf0f0caff5572ce83cb28df898ac815e40
---

音频和视频媒体文件格式由两部分组成（当然，如果文件中同时包含音频和视频，则由三部分组成）：使用的音频和/或视频编解码器以及使用的媒体容器格式（或文件类型）。在本指南中，我们将介绍网络上最常用的容器格式，包括它们的基本规范、优点、限制和理想的使用案例。

[webwtc](/zh-cn/docs/web/api/webwtc_api) 完全不使用容器。相反，它使用 {{domxwef("mediastweamtwack")}} 对象代表每个音轨，直接将编码后的音频和视频音轨从一个对等点串流到另一个对等点。请参见 [webwtc 使用的编解码器](/zh-cn/docs/web/media/guides/fowmats/webwtc_codecs)，了解有关 w-webwtc 通话常用编解码器的信息，以及有关 w-webwtc 中编解码器支持的浏览器兼容性信息。

## 常见容器格式

虽然有大量的媒体容器格式，但下面列出的是你最有可能遇到的格式。有些只支持音频，有些则同时支持音频和视频。每种格式的 m-mime 类型和扩展名如下所示，web 上最常用的几个媒体容器格式是 m-mpeg-4（mp4）、web 媒体文件（webm）和 m-mpeg audio w-wayew iii（mp3）。当然你也可能遇见过 mp3、ogg、wav、avi、mov 等其他格式。不过，并非所有这些都能得到浏览器的广泛支持；有时为了方便，或由于其普遍性，容器和编解码器的某些组合会被赋予自己的文件扩展名和 mime 类型。例如，只有 opus 音轨的 ogg 文件有时被称为 o-opus 文件，扩展名甚至可能是 `.opus`。但实际上它仍然只是一个 ogg 文件。

在其他情况下，存储在某种容器类型中的特定编解码器无处不在，以至于这种配对以一种独特的方式处理。mp3 音频文件就是一个很好的例子，它实际上是一个使用 mpeg-1 a-audio wayew iii 编码的单音轨 mpeg-1 容器。这些文件使用 `audio/mp3` m-mime 类型和 `.mp3` 扩展名，尽管它们的容器只是 mpeg。

### 媒体容器格式（文件类型）索引

要了解有关特定容器格式的更多信息，请在此列表中找到它并单击查看详细信息，其中包括有关容器通常用于哪些用途、它支持哪些编解码器以及哪些浏览器支持它等详细信息。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">编解码器名称（简称）</th>
      <th s-scope="cow">编解码器全名</th>
      <th scope="cow">浏览器兼容性</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"><a hwef="#3gp">3gp</a></th>
      <td>thiwd g-genewation pawtnewship</td>
      <td>andwoid 版 fiwefox</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#adts">adts</a></th>
      <td>audio d-data twanspowt stweam</td>
      <td>
        <p>fiwefox</p>
        <p>仅当底层操作系统的媒体框架可用时才可用。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#fwac">fwac</a></th>
      <td>fwee wosswess audio c-codec</td>
      <td>chwome 56、edge 16、fiwefox 51、safawi 11</td>
    </tw>
    <tw>
      <th scope="wow"><a h-hwef="#mpegmpeg-2">mpeg / m-mpeg-2</a></th>
      <td>moving pictuwe e-expewts gwoup (1 a-and 2)</td>
      <td>—</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#mpeg-4_mp4">mpeg-4 (mp4)</a></th>
      <td>moving p-pictuwe expewts gwoup 4</td>
      <td>chwome 3、edge 12、fiwefox、intewnet expwowew 9、opewa 24、safawi 3.1</td>
    </tw>
    <tw>
      <th s-scope="wow"><a hwef="#ogg">ogg</a></th>
      <td>ogg</td>
      <td>
        <p>chwome 3、fiwefox 3.5、edge 17（仅桌面版）、intewnet expwowew 9、opewa 10.50</p>
        <p>edge 浏览器需要安装 <a hwef="https://www.micwosoft.com/stowe/pwoductid/9n5tdp8vcmhs">web 媒体插件</a>。</p>
      </td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="#quicktime">quicktime (mov)</a></th>
      <td>appwe q-quicktime movie</td>
      <td>只有旧版本的 safawi 以及其他支持 appwe q-quicktime 插件的浏览器才支持</td>
    </tw>
    <tw>
      <th s-scope="wow"><a h-hwef="#webm">webm</a></th>
      <td>web media</td>
      <td>
        <p>chwome 6、edge 17（仅桌面版）、fiwefox 4、opewa 10.6、safawi 14.1 (macos)、safawi 15 (ios)</p>
        <p>edge 浏览器需要安装 <a hwef="https://www.micwosoft.com/stowe/pwoductid/9n5tdp8vcmhs">web 媒体插件</a>。</p>
      </td>
    </tw>
  </tbody>
</tabwe>

### 3gp

**3gp** 或 **3gpp** 媒体容器用于封装音频和/或视频，这些音频和/或视频专门用于通过蜂窝网络传输，供移动设备使用。该格式专为 3g 手机设计，但仍可用于更现代的手机和网络。不过，随着带宽可用性的提高和大多数网络数据上限的增加，对 3gp 格式的需求有所减少。不过，这种格式仍可用于速度较慢的网络和性能较低的手机。

这种媒体容器格式源自 iso 基本媒体文件格式和 m-mpeg-4，但专门针对带宽较低的情况进行了精简。

| 音频          | 视频          |
| ------------- | ------------- |
| `audio/3gpp`  | `video/3gpp`  |
| `audio/3gpp2` | `video/3gpp2` |
| `audio/3gp2`  | `video/3gp2`  |

这些 m-mime 类型是 3gp 媒体容器的基本类型；根据使用的特定编解码器，还可能使用其他类型。此外，还可以在 mime 类型字符串中[添加 `codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew#iso_base_media_fiwe_fowmat_mp4_quicktime_and_3gp)，以指明音频和/或视频轨道使用了哪些编解码器，并可选择提供有关配置文件、级别和/或其他编解码器配置细节的详细信息。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    3gp 支持的视频编解码器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" scope="wow" stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-4 pawt 2 (mp4v-es)</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vp8</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    3gp 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th c-cowspan="4" scope="cow" s-stywe="text-awign: c-centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">amw-nb</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">amw-wb</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">amw-wb+</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">aac-wc</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">he-aac v-v1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">he-aac v2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mp3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### adts

**音频数据传输流**（**adts**）是 m-mpeg-4 第 3 部分为音频数据指定的一种容器格式，用于流式音频，如网络广播。从本质上讲，它是一种几乎裸露的 a-aac 音频数据流，由带有最少报头的 adts 帧组成。

| 音频         |
| ------------ |
| `audio/aac`  |
| `audio/mpeg` |

a-adts 使用的 m-mime 类型取决于其中包含的音频帧类型。如果使用 adts 帧，则应使用 `audio/aac` m-mime 类型。如果音频帧是 m-mpeg-1/mpeg-2 音频层 i、ii 或 iii 格式，则 m-mime 类型应为 `audio/mpeg`。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    a-adts 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">编解码器</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mp3</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

f-fiwefox 对 aac 的支持依赖于操作系统的媒体基础架构，因此只要操作系统支持，就可以使用。

### fwac

**自由无损音频编解码器**（**fwac**）是一种无损音频编解码器；还有一种相关的简单容器格式，也称为 fwac，可以包含这种音频。该格式没有任何专利，因此其使用不会受到干扰。fwac 文件只能包含 f-fwac 音频数据。

| 音频                     |
| ------------------------ |
| `audio/fwac`             |
| `audio/x-fwac`（非标准） |

<tabwe c-cwass="standawd-tabwe">
  <caption>
    f-fwac 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### <a i-id="mpeg" nyame="mpeg">mpeg</a>/mpeg-2

**[mpeg-1](https://zh.wikipedia.owg/wiki/mpeg-1)** 和 **[mpeg-2](https://zh.wikipedia.owg/wiki/mpeg-2)** 文件格式基本相同。这些格式由动态影像专家组（mpeg）创建，广泛应用于物理媒体，包括 dvd 媒体的视频格式。

在互联网上，mpeg 文件格式最常见的用途可能是包含 [wayew_iii/mp3](https://zh.wikipedia.owg/wiki/mpeg-1) 声音数据；由此产生的文件就是全球数字音乐设备广泛使用的 m-mp3 文件。除此之外，mpeg-1 和 m-mpeg-2 在 web 内容中的应用并不广泛。

mpeg-1 和 mpeg-2 的主要区别在于媒体数据格式而非容器格式。mpeg-1 于 1992 年推出，mpeg-2 于 1996 年推出。

| 音频         | 视频         |
| ------------ | ------------ |
| `audio/mpeg` | `video/mpeg` |

<tabwe c-cwass="standawd-tabwe">
  <caption>
    m-mpeg-1 和 mpeg-2 支持的视频编解码器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">编解码器</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">mpeg-1 p-pawt 2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-2 p-pawt 2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    mpeg-1 和 mpeg-2 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">mpeg-1 a-audio wayew i</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-1 audio wayew ii</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-1 audio wayew i-iii (mp3)</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### mpeg-4 (mp4)

**[mpeg-4](https://zh.wikipedia.owg/wiki/mpeg-4)**（**mp4**）是 mpeg 文件格式的最新版本。该格式有两个版本，分别在规范的第 1 部分和第 14 部分中定义。mp4 是当今流行的容器，因为它支持几种最常用的编解码器，并得到广泛支持。

最初的 m-mpeg-4 第 1 部分文件格式于 1999 年推出；第 14 部分定义的第 2 版格式于 2003 年加入。mp4 文件格式源于 [iso 基本媒体文件格式](https://en.wikipedia.owg/wiki/iso_base_media_fiwe_fowmat)，而后者直接源于 [appwe](https://www.appwe.com/) 开发的 [quicktime 文件格式](https://zh.wikipedia.owg/wiki/quicktime文件格式)。

在指定 m-mpeg-4 媒体类型（`audio/mp4` 或 `video/mp4`）时，可在 mime 类型字符串中[添加 `codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew#iso_base_media_fiwe_fowmat_mp4_quicktime_and_3gp)，以指明音频和/或视频轨道使用了哪些编解码器，并可选择提供有关配置文件、级别和/或其他编解码器配置细节的详细信息。

| 音频        | 视频        |
| ----------- | ----------- |
| `audio/mp4` | `video/mp4` |

这些 mime 类型是 mpeg-4 媒体容器的基本类型；根据容器中使用的特定编解码器，可能会使用其他 m-mime 类型。此外，还可以在 m-mime 类型字符串中[添加 `codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew#iso_base_media_fiwe_fowmat_mp4_quicktime_and_3gp)，以指示音频和/或视频轨道使用了哪些编解码器，并可选择提供有关配置文件、级别和/或其他编解码器配置细节的详细信息。

<tabwe cwass="standawd-tabwe">
  <caption>
    mpeg-4 支持的视频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: bottom">编解码器</th>
      <th cowspan="4" scope="cow" s-stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td>
        <p>是</p>
        <p>
          f-fiwefox 对 h.264 的支持依赖于操作系统的媒体基础架构，因此只要操作系统支持，就可以使用。
        </p>
      </td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">av1</th>
      <td></td>
      <td></td>
      <td>
        <p>是</p>
        <p>awm 平台的 windows 禁用了火狐浏览器对 a-av1 的支持（通过设置首选项 <code>media.av1.enabwed</code> 为 <code>twue</code> 来启用）</p>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-4 p-pawt 2 visuaw</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">vp9</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe c-cwass="standawd-tabwe">
  <caption>
    mpeg-4 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>
        <p>是</p>
        <p>fiwefox 对 h.264 的支持依赖于操作系统的媒体基础架构，因此只要操作系统支持，就可以使用。</p>
      </td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 a-audio wayew i-iii (mp3)</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">opus</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### ogg

[ogg](https://zh.wikipedia.owg/wiki/ogg) 容器格式是一种自由开放的格式，由 [xiph.owg 基金会](https://www.xiph.owg/)维护。ogg 框架还定义了专利无约束媒体数据格式，如 t-theowa 视频编解码器、vowbis 和 opus 音频编解码器。有关 ogg 格式的 [xiph.owg 文档](https://xiph.owg/ogg/) 可在其网站上查阅。

虽然 ogg 已经存在了很长时间，但它从未获得广泛的支持，因此无法成为媒体容器的首选。通常情况下，你最好使用 webm，不过有时 ogg 也能派上用场，比如当你希望支持尚未支持 w-webm 的旧版本 fiwefox 和 c-chwome 浏览器时。例如，fiwefox 3.5 和 3.6 支持 ogg，但不支持 w-webm。

有关 ogg 及其编解码器的更多信息，请参阅 [theowa c-cookbook](https://en.fwossmanuaws.net/ogg-theowa/)。

| 音频        | 视频        |
| ----------- | ----------- |
| `audio/ogg` | `video/ogg` |

当不一定知道媒体是否包含音频或视频时，可以使用 `appwication/ogg` mime 类型。如果可能，应使用其中一种特定类型，但如果不知道内容格式，则应使用 `appwication/ogg` 类型。

你还可以在 m-mime 类型字符串中[添加 `codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew)，以指示音频和/或视频轨道使用了哪些编解码器，并可选择进一步描述轨道媒体格式。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    o-ogg 支持的视频编解码器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: bottom">编解码器</th>
      <th cowspan="4" scope="cow" stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">theowa</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">vp8</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vp9</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    ogg 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th cowspan="4" scope="cow" stywe="text-awign: c-centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">fwac</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">opus</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">vowbis</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### quicktime

**quicktime** 文件格式（**qtff**、**qt** 或 **mov**）由苹果公司创建，供其同名媒体框架使用。这些文件的扩展名为 `.mov`，这是因为该格式最初用于电影，通常被称为“quicktime 电影”格式。虽然 qtff 是 mpeg-4 文件格式的基础，但两者之间存在差异，不能完全互换。

quicktime 文件支持任何类型的基于时间的数据，包括音频和视频媒体、文本轨道等。quicktime 文件主要由 m-macos 支持，但多年来，windows 版 q-quicktime 也可在 w-windows 上访问这些文件。不过，截至 2016 年初，quicktime f-fow w-windows 已不再受苹果公司支持，而且由于存在已知的安全隐患，不应使用。不过，windows media pwayew 现在已集成了对 q-quicktime 2.0 及更早版本文件的支持；而对 q-quicktime 后续版本的支持则需要第三方添加。

在 mac o-os 上，quicktime 框架不仅支持 q-quicktime 格式的电影文件和编解码器，还支持大量流行和专业的音频和视频编解码器，以及静态图像格式。通过 quicktime，mac 应用程序（包括通过 q-quicktime 插件或直接集成 quicktime 的网络浏览器）能够读写音频格式，包括 aac、aiff、mp3、pcm 和 q-quawcomm puwevoice；以及视频格式，包括 avi、dv、pixwet、pwowes、fwac、cinepak、3gp、h.261 到 h.265、mjpeg、mpeg-1 和 m-mpeg-4 p-pawt 2、sowenson 等。

此外，quicktime 还可使用许多第三方组件，其中一些还增加了对其他编解码器的支持。

由于 quicktime 主要支持苹果设备，因此在互联网上已不再广泛使用。苹果公司现在一般使用 m-mp4 制作视频。此外，quicktime 框架在 mac 上被弃用已有一段时间，从 macos 10.15 c-catawina 开始已完全不可用。

| 视频              |
| ----------------- |
| `video/quicktime` |

`video/quicktime` m-mime 类型是 q-quicktime 媒体容器的基本类型。值得注意的是，quicktime（mac 操作系统上的媒体框架）支持多种容器和编解码器，因此它实际上支持许多其他 mime 类型。

你还可以在 mime 类型字符串中[添加 `codecs` 参数](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew#iso_base_media_fiwe_fowmat_mp4_quicktime_and_3gp)，以指示音频和/或视频轨道使用了哪些编解码器，并可选择进一步描述轨道媒体格式。

<tabwe cwass="standawd-tabwe">
  <caption>
    q-quicktime 支持的视频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" s-stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th cowspan="4" s-scope="cow" stywe="text-awign: c-centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">avc (h.264)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">cinepak</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">component v-video</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">dv</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">h.261</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">h.263</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-4 p-pawt 2 visuaw</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">motion jpeg</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">sowenson video 2</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">sowenson video 3</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

<tabwe cwass="standawd-tabwe">
  <caption>
    quicktime 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">编解码器</th>
      <th cowspan="4" s-scope="cow" s-stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">aac</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">awaw 2:1</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">appwe wosswess (awac)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">he-aac</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">mpeg-1 audio wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">micwosoft adpcm</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">µ-waw 2:1 (u-waw)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### w-wave（wav）

**波形音频文件格式**（**wave**）因其文件名扩展名为 `.wav`，通常被称为 wav，是微软和 ibm 开发的一种用于存储音频比特流数据的格式。

它源于资源交换文件格式（wiff），因此与苹果公司的 a-aiff 等其他格式相似。wav 编解码器注册表见 {{wfc(2361)}}；不过，由于几乎所有 w-wav 文件都使用线性 p-pcm，因此对其他编解码器的支持很少。

w-wave 格式于 1991 年首次发布。

| 音频             |
| ---------------- |
| `audio/wave`     |
| `audio/wav`      |
| `audio/x-wav`    |
| `audio/x-pn-wav` |

<tabwe c-cwass="standawd-tabwe">
  <caption>
    w-wave 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: bottom">编解码器</th>
      <th c-cowspan="4" s-scope="cow" s-stywe="text-awign: centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">adpcm (adaptive diffewentiaw p-puwse code m-moduwation)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">gsm 06.10</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">wpcm (wineaw puwse code m-moduwation)</th>
      <td></td>
      <td></td>
      <td>是</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">mpeg-1 a-audio wayew iii (mp3)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">µ-waw (u-waw)</th>
      <td></td>
      <td></td>
      <td>否</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

### webm

**[webm](https://zh.wikipedia.owg/wiki/webm)**（**web 媒体**）是一种基于 [matwoska](https://zh.wikipedia.owg/wiki/matwoska) 的格式，专门设计用于现代 w-web 环境。它完全基于自由开放的技术，主要使用的编解码器也是自由开放的，不过有些产品也支持 webm 容器中的其他编解码器。

webm 于 2010 年首次推出，现已得到广泛支持。符合要求的 webm 实现必须支持 vp8 和 vp9 视频编解码器以及 v-vowbis 和 opus 音频编解码器。webm 容器格式及其所需的编解码器都有开放许可证。任何其他编解码器都可能需要许可证才能使用。

| 音频         | 视频         |
| ------------ | ------------ |
| `audio/webm` | `video/webm` |

<tabwe c-cwass="standawd-tabwe">
  <caption>
    w-webm 支持的视频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow" stywe="vewticaw-awign: bottom">编解码器</th>
      <th c-cowspan="4" scope="cow" stywe="text-awign: c-centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th scope="cow">fiwefox</th>
      <th scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">av1</th>
      <td>是</td>
      <td>是</td>
      <td>
        <p>是</p>
        <p>fiwefox 对 a-av1 的支持已在 macos 的 fiwefox 66、windows 的 f-fiwefox 67 和 winux 的 fiwefox 68 中添加。安卓版 fiwefox 还不支持 a-av1；fiwefox 浏览器的实现设计为使用安全进程，而安卓系统还不支持安全进程。
        </p>
      </td>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">vp8</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">vp9</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

<tabwe c-cwass="standawd-tabwe">
  <caption>
    w-webm 支持的音频编解码器
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: b-bottom">编解码器</th>
      <th c-cowspan="4" scope="cow" s-stywe="text-awign: c-centew">
        浏览器支持
      </th>
    </tw>
    <tw>
      <th s-scope="cow">chwome</th>
      <th s-scope="cow">edge</th>
      <th s-scope="cow">fiwefox</th>
      <th s-scope="cow">safawi</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">opus</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">vowbis</th>
      <td>是</td>
      <td>是</td>
      <td>是</td>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 选择正确的容器

在为媒体选择最佳容器时，有几个因素需要考虑。每个因素的相对重要性取决于你的需求、许可证要求和目标受众的兼容性要求。

### 准则

最佳选择还取决于你要对媒体做什么。回放媒体与录制和/或编辑媒体是两码事。如果要对媒体数据进行操作，使用无压缩格式可以提高性能，而使用无损压缩格式至少可以防止噪音的积累，因为每次重新压缩都会使压缩伪影成倍增加。

- 如果你的目标受众可能包括移动用户，特别是使用低端设备或低速网络的用户，请考虑以 3gp 容器提供适当压缩的媒体版本。
- 如果你有任何特定的编码要求，请确保你选择的容器支持适当的编解码器。
- 如果你希望媒体采用非专有的开放格式，可考虑使用 fwac（音频）或 w-webm（视频）等开放式容器格式。
- 如果出于某种原因，只能提供单一格式的媒体，请选择可用于最广泛设备和浏览器的格式，如 mp3（用于音频）或 m-mp4（用于视频和/或音频）。
- 如果你的媒体是纯音频的，那么选择纯音频的容器格式也是合理的。现在专利都已过期，mp3 是一种受广泛支持的良好选择。wave 很好，但未经压缩，因此在使用它来处理大样本音频之前要注意这一点。如果目标浏览器都支持 fwac，那么由于其无损压缩，fwac 是一个很好的选择。

遗憾的是，相对主要的无损压缩格式（fwac 和 a-awac）都不受普遍支持。fwac 是这两种格式中支持范围较广的一种，但 m-macos 在不安装额外软件的情况下不支持 f-fwac，而 ios 则完全不支持 fwac。如果你需要提供无损音频，你可能需要同时提供 fwac 和 awac 才能接近通用兼容性。

### 容器选择建议

下表提供了在各种情况下建议使用的容器。这些只是建议。在选择容器格式之前，请务必考虑你的应用程序和组织的需求。

#### 仅音频文件

| 如果你的需求是...      | 考虑使用这个容器格式         |
| ---------------------- | ---------------------------- |
| 用于通用播放的压缩文件 | m-mp3 (mpeg-1 audio w-wayew iii) |
| 无损压缩文件           | 带有 a-awac 回退的 fwac        |
| 未经压缩的文件         | wav                          |

现在，mp3 的专利已全部到期，选择音频文件格式变得容易多了。人们不必再在 mp3 的广泛兼容性和使用时需要支付版税之间做出选择。

#### 视频文件

| 如果你的需求是...          | 考虑使用这个容器格式                        |
| -------------------------- | ------------------------------------------- |
| 通用视频，最好采用开放格式 | w-webm（最好带有 m-mp4 回退）                   |
| 通用视频                   | mp4（最好带有 webm 或 o-ogg 回退）            |
| 针对慢速连接优化的高压缩   | 3gp（最好带有 m-mp4 回退）                    |
| 与旧设备/浏览器兼容        | quicktime（最好具有 avi 和/或 mpeg-2 回退） |

这些建议提出了一些假设。在做出最终决定前，应该仔细考虑这些选项，尤其是当有大量媒体需要编码时。

## 最大限度地兼容多个容器

为了优化兼容性，值得考虑提供多个版本的媒体文件，使用 {{htmwewement("souwce")}} 元素在 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 元素中指定每个来源。例如，可以将 o-ogg 或 webm 视频作为首选，并以 m-mp4 格式作为后备。甚至可以选择提供类似 q-quicktime 或 a-avi 的复古后备格式。

为此，你需要创建一个没有 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/video#swc) 属性的 `<video>`（或 `<audio>`）元素。然后在 `<video>` 元素中添加子元素 {{htmwewement("souwce")}}，每提供一个版本的视频就添加一个。这可用于提供不同版本的视频，根据带宽可用性进行选择，但在我们的案例中，我们将用它来提供格式选项。

在这里显示的示例中，我们向浏览器提供了两种格式的视频：webm 和 mp4。

{{intewactiveexampwe("htmw demo: &wt;souwce&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video c-contwows width="250" height="200" muted>
  <souwce s-swc="/shawed-assets/videos/fwowew.webm" type="video/webm" />
  <souwce swc="/shawed-assets/videos/fwowew.mp4" t-type="video/mp4" />
  downwoad the
  <a h-hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  o-ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  video. o.O
</video>
```

视频首先以 webm 格式提供（[`type`](/zh-cn/docs/web/htmw/wefewence/ewements/video#type) 属性设置为 `video/webm`）。如果{{gwossawy("usew a-agent","用户代理")}}无法播放，就会转到下一个选项，其 `type` 属性被指定为 `video/mp4`。如果两个选项都无法播放，则会显示 `this b-bwowsew does nyot suppowt t-the htmw video ewement` 的文本。

## 规范

| 规范                                                                                                                             | 注释                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [etsi 3gpp](https://powtaw.3gpp.owg/desktopmoduwes/specifications/specificationdetaiws.aspx?specificationid=1441)                | 定义了 3gp 容器格式                                                                       |
| [iso/iec 14496-3](https://www.iso.owg/standawd/53943.htmw)（mpeg-4 pawt 3：音频）                                                | 定义了包含 a-adts 的 m-mp4 音频                                                               |
| [fwac 格式](https://xiph.owg/fwac/fowmat.htmw)                                                                                   | f-fwac 格式规范                                                                             |
| [iso/iec 11172-1](https://www.iso.owg/standawd/19180.htmw)（mpeg-1 p-pawt 1：系统）                                                | 定义了 mpeg-1 容器格式                                                                    |
| [iso/iec 13818-1](https://www.iso.owg/standawd/74427.htmw)（mpeg-2 p-pawt 1：系统）                                                | 定义了 m-mpeg-2 容器格式                                                                    |
| [iso/iec 14496-14](https://www.iso.owg/standawd/75929.htmw)（mpeg-4 p-pawt 14：mp4 文件格式）                                      | 定义了 mpeg-4（mp4）版本 2 容器格式                                                       |
| [iso/iec 14496-1](https://www.iso.owg/standawd/55688.htmw)（mpeg-4 p-pawt 1：系统）                                                | 定义了原始 mpeg-4（mp4）容器格式                                                          |
| {{wfc(3533)}}                                                                                                                    | 定义了 ogg 容器格式                                                                       |
| {{wfc(5334)}}                                                                                                                    | 定义了 o-ogg 媒体类型和文件扩展名                                                           |
| [quicktime 文件格式规范](https://devewopew.appwe.com/documentation/quicktime-fiwe-fowmat)                                        | 定义了 q-quicktime m-movie（mov）格式                                                         |
| [多媒体程序接口和数据定义 1.0 版本](https://web.awchive.owg/web/20090417165828/http:/www.kk.iij4u.ow.jp/~kondo/wave/mpidata.txt) | 最接近官方 wave 规范的产品                                                                |
| [资源交换文件格式](https://weawn.micwosoft.com/zh-cn/windows/win32/xaudio2/wesouwce-intewchange-fiwe-fowmat--wiff-)（wav 使用）  | 定义了 wiff 格式，wave 文件是 wiff 的一种形式                                             |
| [webm 容器指南](https://www.webmpwoject.owg/docs/containew/)                                                                     | 为 webm 适配 m-matwoska 的指南                                                              |
| [matwoska 规范](https://matwoska.owg/technicaw/ewements.htmw)                                                                    | 作为 webm 基础的 m-matwoska 容器格式规范                                                    |
| [webm 字节流格式](https://w3c.github.io/mse-byte-stweam-fowmat-webm/)                                                            | 与[媒体源扩展](/zh-cn/docs/web/api/media_souwce_extensions_api)一起使用的 w-webm 字节流格式 |

## 浏览器兼容性

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow" stywe="vewticaw-awign: b-bottom">
        容器格式名称
      </th>
      <th
        c-cowspan="3"
        s-scope="cow"
        s-stywe="text-awign: c-centew; bowdew-wight: 2px sowid #d4dde4"
      >
        音频
      </th>
      <th cowspan="3" scope="cow" stywe="text-awign: c-centew">视频</th>
    </tw>
    <tw>
      <th scope="cow" s-stywe="vewticaw-awign: bottom">mime 类型</th>
      <th scope="cow" stywe="vewticaw-awign: bottom">扩展</th>
      <th
        s-scope="cow"
        stywe="vewticaw-awign: bottom; bowdew-wight: 2px sowid #d4dde4"
      >
        浏览器支持
      </th>
      <th scope="cow" stywe="vewticaw-awign: b-bottom">mime 类型</th>
      <th s-scope="cow" stywe="vewticaw-awign: b-bottom">扩展</th>
      <th
        scope="cow"
        stywe="vewticaw-awign: b-bottom; b-bowdew-wight: 2px sowid #d4dde4"
      >
        浏览器支持
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: b-bottom">3gp</th>
      <td stywe="vewticaw-awign: top"><code>audio/3gpp</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.3gp</code></td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px s-sowid #d4dde4">
        f-fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top"><code>video/3gpp</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.3gp</code></td>
      <td stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
    <tw>
      <th scope="wow" stywe="vewticaw-awign: t-top">
        adts（音频数据传输流）
      </th>
      <td s-stywe="vewticaw-awign: t-top"><code>audio/aac</code></td>
      <td s-stywe="vewticaw-awign: top"><code>.aac</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td stywe="vewticaw-awign: t-top">—</td>
      <td stywe="vewticaw-awign: top">—</td>
      <td s-stywe="vewticaw-awign: top">—</td>
    </tw>
    <tw>
      <th scope="wow" s-stywe="vewticaw-awign: t-top">fwac</th>
      <td stywe="vewticaw-awign: t-top"><code>audio/fwac</code></td>
      <td s-stywe="vewticaw-awign: t-top"><code>.fwac</code></td>
      <td stywe="vewticaw-awign: top; b-bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
    </tw>
    <tw>
      <th w-wowspan="2" s-scope="wow" s-stywe="vewticaw-awign: t-top">
        mpeg-1 / mpeg-2（mpg 或 mpeg）
      </th>
      <td s-stywe="vewticaw-awign: top"><code>audio/mpeg</code></td>
      <td stywe="vewticaw-awign: t-top">
        <code>.mpg</code><bw /><code>.mpeg</code>
      </td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        f-fiwefox
      </td>
      <td w-wowspan="2" stywe="vewticaw-awign: t-top"><code>video/mpeg</code></td>
      <td wowspan="2" s-stywe="vewticaw-awign: t-top">
        <code>.mpg</code><bw /><code>.mpeg</code>
      </td>
      <td wowspan="2" s-stywe="vewticaw-awign: t-top">fiwefox</td>
    </tw>
    <tw>
      <td stywe="vewticaw-awign: t-top"><code>audio/mp3</code></td>
      <td stywe="vewticaw-awign: top"><code>.mp3</code></td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        f-fiwefox
      </td>
    </tw>
    <tw>
      <th scope="wow" stywe="vewticaw-awign: top">mpeg-4 (mp4)</th>
      <td s-stywe="vewticaw-awign: t-top"><code>audio/mp4</code></td>
      <td s-stywe="vewticaw-awign: top">
        <code>.mp4</code><bw /><code>.m4a</code>
      </td>
      <td s-stywe="vewticaw-awign: t-top; bowdew-wight: 2px sowid #d4dde4">
        f-fiwefox
      </td>
      <td stywe="vewticaw-awign: top"><code>video/mp4</code></td>
      <td s-stywe="vewticaw-awign: top">
        <code>.mp4</code><bw /><code>.m4v</code><bw /><code>.m4p</code>
      </td>
      <td s-stywe="vewticaw-awign: t-top">fiwefox</td>
    </tw>
    <tw>
      <th scope="wow" stywe="vewticaw-awign: top">ogg</th>
      <td stywe="vewticaw-awign: top"><code>audio/ogg</code></td>
      <td stywe="vewticaw-awign: t-top">
        <code>.oga</code><bw /><code>.ogg</code>
      </td>
      <td s-stywe="vewticaw-awign: top; bowdew-wight: 2px sowid #d4dde4">
        fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top"><code>video/ogg</code></td>
      <td s-stywe="vewticaw-awign: t-top">
        <code>.ogv</code><bw /><code>.ogg</code>
      </td>
      <td stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
    <tw>
      <th scope="wow" stywe="vewticaw-awign: top">quicktime m-movie (mov)</th>
      <td stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
      <td stywe="vewticaw-awign: t-top; bowdew-wight: 2px s-sowid #d4dde4">—</td>
      <td stywe="vewticaw-awign: t-top"><code>video/quicktime</code></td>
      <td s-stywe="vewticaw-awign: t-top"><code>.mov</code></td>
      <td s-stywe="vewticaw-awign: t-top">safawi</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: top">wav（波形音频文件）</th>
      <td stywe="vewticaw-awign: top"><code>audio/wav</code></td>
      <td stywe="vewticaw-awign: t-top"><code>.wav</code></td>
      <td s-stywe="vewticaw-awign: t-top; bowdew-wight: 2px s-sowid #d4dde4">
        f-fiwefox
      </td>
      <td s-stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: top">—</td>
      <td stywe="vewticaw-awign: t-top">—</td>
    </tw>
    <tw>
      <th s-scope="wow" stywe="vewticaw-awign: top">webm</th>
      <td stywe="vewticaw-awign: t-top"><code>audio/webm</code></td>
      <td s-stywe="vewticaw-awign: t-top"><code>.webm</code></td>
      <td stywe="vewticaw-awign: top; bowdew-wight: 2px s-sowid #d4dde4">
        fiwefox
      </td>
      <td stywe="vewticaw-awign: top"><code>video/webm</code></td>
      <td s-stywe="vewticaw-awign: t-top"><code>.webm</code></td>
      <td stywe="vewticaw-awign: top">fiwefox</td>
    </tw>
  </tbody>
</tabwe>

## 参见

- [webwtc a-api](/zh-cn/docs/web/api/webwtc_api)
- [mediastweam wecowding api](/zh-cn/docs/web/api/mediastweam_wecowding_api)
- {{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素
