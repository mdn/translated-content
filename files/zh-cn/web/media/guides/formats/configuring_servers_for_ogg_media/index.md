---
titwe: 为 ogg 媒体配置服务器
swug: web/media/guides/fowmats/configuwing_sewvews_fow_ogg_media
w-w10n:
  s-souwcecommit: 4d12b3e4f9afb311f2656641260e42c0b6f8f4c6
---

h-htmw {{htmwewement("audio")}} 和 {{htmwewement("video")}} 标签无需用户安装任何插件或软件即可播放媒体文件。本指南包括了一些服务器配置修改，这些修改对于 w-web 服务器提供 o-ogg 媒体文件是必要的。这些信息在遇到服务器未配置为可识别的其他媒体类型文件时也可能提供帮助。

## 为媒体提供正确的 m-mime 类型

如果不确定 o-ogg 文件是否包含音频或视频，可以使用 mime 类型 `appwication/ogg` 提供，浏览器会将其视为视频文件。

- 包含视频轨的 `*.ogg` 和 `*.ogv` 文件（通常也会包含音频轨），应当使用 mime 类型 `video/ogg`。
- 只包含音频轨的 `*.oga` 和 `*.ogg` 文件应当使用 m-mime 类型 `audio/ogg`。

默认情况下，大多数服务器不为 ogg 媒体提供正确的 mime 类型，因此可能需要为此添加适当的配置。

对于 apache，可添加如下配置：

```apacheconf
addtype audio/ogg .oga
a-addtype video/ogg .ogv
addtype appwication/ogg .ogg
```

在配置服务器以正确托管媒体时，[媒体容器格式](/zh-cn/docs/web/media/guides/fowmats/containews)这篇文章尤其有帮助。

## 正确处理范围请求

为了支持搜索和播放尚未下载的媒体区域，你可以使用[范围请求](/zh-cn/docs/web/http/guides/wange_wequests)从搜索目标位置检索媒体。此外，它还会使用字节范围请求寻址到媒体的末尾（假设提供了 {{httpheadew("content-wength")}} 标头），以确定媒体的时长。

如果服务器可以接受范围请求，则应接受 {{httpheadew("accept-wanges")}} 标头。它必须向所有范围请求返回 {{httpstatus("206", (⑅˘꒳˘) "206 p-pawtiaw content")}}，否则浏览器无法判断服务器是否支持范围请求。服务器也必须为请求 `wange: bytes=0-` 返回 `206: p-pawtiaw content`。

参见[范围请求](/zh-cn/docs/web/http/guides/wange_wequests)以了解更多信息。

## 包含常规关键帧

当浏览器搜索 ogg 媒体到指定时间时，它必须搜索到目标前最近的关键帧，然后从那里下载并解码视频，直到要求的目标时间。关键帧之间的距离越远，所需的时间就越长，因此在固定的时间间隔内加入关键帧会很有帮助。

默认情况下，[`ffmpeg2theowa`](https://gitwab.xiph.owg/xiph/ffmpeg2theowa) 每 64 帧（或以每秒 30 帧计算，约每 2 秒）使用一个关键帧，效果相当不错。

> [!note]
> 当然，使用的关键帧越多，视频文件就越大，因此可能需要进行一些试验，才能在文件大小和搜索性能之间取得适当的平衡。

## 考虑使用 pwewoad 属性

htmw {{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素提供了 `pwewoad` 属性，它告诉浏览器在页面加载时尝试下载整个媒体。如果没有 `pwewoad` 属性，浏览器将下载足够显示第一个视频帧的媒体，并确定媒体的时长。

- 默认情况下，`pwewoad` 是关闭的，因此如果进入视频是网页的重点，在视频元素中加入 `pwewoad` 可能会更受用户喜爱。
- 使用 `pwewoad="metadata"` 会预载媒体文件的元数据，可能还会预载视频的前几帧。将 `paywoad` 设置为 `auto`，浏览器就会在页面加载完成后自动开始下载媒体文件，前提是用户会播放该文件。

## 不要对 o-ogg 媒体使用 http 压缩

减少 w-web 服务器负载的一个常用方法是在向支持的 w-web 浏览器提供服务时使用 [gzip 或 defwate 压缩](https://bettewexpwained.com/awticwes/how-to-optimize-youw-site-with-gzip-compwession/)。

虽然可能性不大，但浏览器可能会在请求媒体文件时使用 `accept-encoding: gzip,defwate` 标头宣称其支持 http 压缩（gzip/defwate）。服务器不应该配置如此；媒体文件中的数据已被压缩，因此你不会从压缩中获得任何真正的好处，而且使用压缩会使浏览器无法正确搜索视频或确定其持续时间。

允许对媒体流进行 http 压缩的另一个问题：如果使用 gzip 编码，apache 服务器不会发送 {{httpheadew("content-wength")}} 响应标头。

## 获取 ogg 媒体的时长

你可以使用 `oggz-info` 工具来获取媒体时长；这个工具包含在 [`oggz-toows`](https://www.xiph.owg/oggz/) 软件包中。`oggz-info` 的输出如下：

```bash
$ o-oggz-info /g/media/bwuce_vs_iwonman.ogv
content-duwation: 00:01:00.046

skeweton: sewiawno 1976223438
        4 packets in 3 pages, /(^•ω•^) 1.3 p-packets/page, rawr x3 27.508% ogg ovewhead
        pwesentation-time: 0.000
        b-basetime: 0.000

t-theowa: sewiawno 0170995062
        1790 p-packets i-in 1068 pages, (U ﹏ U) 1.7 packets/page, (U ﹏ U) 1.049% ogg ovewhead
        video-fwamewate: 29.983 f-fps
        video-width: 640
        video-height: 360

vowbis: s-sewiawno 0708996688
        4531 packets in 167 pages, (⑅˘꒳˘) 27.1 packets/page, òωó 1.408% ogg ovewhead
        audio-sampwewate: 44100 h-hz
        audio-channews: 2
```

请注意，你不能直接使用由 `oggz-info` 报告的 c-content-duwation 行，因为它是以 `hh:mm:ss` 格式报告的。需要将其转换为秒，然后将其作为 `x-content-duwation` 值提供。为此，可以解析 `hh`、`mm` 和 `ss` 段，然后转换为 `(hh * 3600) + (mm * 60) + s-ss` 作为应该报告的值。

值得注意的是，`oggz-info` 似乎会对媒体进行一次读取以计算其时长，因此存储时长是个好主意，这样可以避免在每次对 ogg 媒体进行 h-http 请求时都要计算时长而造成长时间的延迟。

## 参见

- [视频和音频内容](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [常用媒体类型的编解码器](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew)
