---
title: 实时传输 Web 音频与视频
slug: Web/Media/Audio_and_video_delivery/Live_streaming_web_audio_and_video
---

{{QuickLinksWithSubPages("/zh-CN/docs/Web/Media")}}

实时流技术经常应用在一些现场输出的转播活动，类似体育活动、演唱会和更平常的电视播放及广播节目。这通常称为流媒体，实时流就是将媒体“实时”传输到计算机和设备的过程。这是一个包含多个元素的、非常复杂且较为新生的主题，所以我们会通过这篇文章，向你介绍它并让你知道如何开始。

将媒体传输到浏览器的关键考虑因素是，我们不是在播放一个大小明确的文件，而是在转播一个即时创建的文件，并且它没有预先确定的开始或结束位置。

## 流媒体与静态媒体的主要区别

在这里，无论是 mp3 还是 WebM 文件，我们都称之为静态媒体。这些文件存放在服务端，可以像其他文件那样传输到浏览器端。这通常被称为渐进式下载。

跟静态媒体文件比起来，实时流媒体没有有限的开始和结束时间，它通常是一种自适应的、从服务端向下传输到浏览器端的数据流（见下文）。通常我们需要不同格式和特定的服务端软件来实现这个。

## 自适应流

实时流最优先考虑的事项之一就是让播放器保持与流同步：自适应流是一种可以在低带宽下执行此操作的技术。这种方法就是通过监控数据传输速率，如果速率慢，跟不上，我们就降低到低带宽（因此质量较低）的数据流。为了拥有这种能力，我们需要使用能实现该功能的数据格式。实时流格式通常是把流分割成许多不同质量和比特率的小片段，以此来实现自适应流的特性。

## 流式音频与视频的点播

流式技术不只是用于直播。它也能用来替换传统的渐进式下载点播音频和视频：

优点如下：

- 延迟通常较低，所以媒体可以快速播放
- 自适应流可以在不同设备上获得更好的体验
- 媒体实时下载，提高带宽效率

## 流式协议

静态媒体通常是使用 HTTP 协议传输，但是自适应流媒体却有很多种协议，让我们看一下这些选择。

### HTTP

目前来说，HTTP 是媒体点播或直播最常使用的协议。

### RTMP

实时消息协议 (RTMP) 是由 Macromedia（即现在的 Adobe）公司研发的专有协议，并且它支持 Adobe Flash 插件。RTMP 共有 RTMPE（加密的）、RTMPS（基于 SSL/TLS 的安全协议）和 RTMPT（封装成 HTTP 请求）这几种形式

### RTSP

> [!NOTE]
> 实时流协议 (RTSP) 控制媒体在两端传输的会话，且同时使用实时传输协议 (RTP) 和实时控制协议 (RTCP) 来传输媒体流。将 RTP 与 RTCP 结合使用可以实现自适应流。目前大部分浏览器还无法原生支持。
>
> 某些厂商实现了专有的传输协议，类似 RealNetworks 以及他们的真实数据传输 (RDT)。

### RTSP 2.0

RTSP 2.0 目前处于开发阶段，并且无法向后兼容 RTSP 1.0。

> [!WARNING]
> 虽然 {{ htmlelement("audio") }} 与 {{ htmlelement("video") }} 标签与协议无关，但是目前没有浏览器可以在无插件的情况下支持除了 HTTP 外的协议，尽管这种局面可能会有所转变，但除了 HTTP 以外的协议可能会被防火墙或代理服务器拦截。

## 使用流式协议

如果你习惯于通过 HTTP 传输媒体，那么使用其他的协议也会让你感到熟悉。

举个例子：

```html
<video src="rtsp://myhost.com/mymedia.format">
  <!-- Fallback here -->
</video>
```

## 媒体源扩展（MSE）

[媒体源扩展](https://w3c.github.io/media-source/)是一个 W3C 的工作草案，计划用来扩展 {{ domxref("HTMLMediaElement") }} 使其支持使用 JavaScript 来生成用于播放的媒体流。使用 JavaScript 来生成流对于自适应流和时移实时流来说非常好用。

比如，[在卸载 MSE 解码器后，你可以通过 JavaScript 实现 MPEG-DASH](https://web.archive.org/web/20170504035455/https://msopentech.com/blog/2014/01/03/streaming_video_player/).

> [!NOTE]
> 时移是在直播流发生后使用实时流的过程。

## 视频流文件格式

一些基于 HTTP 的实时流视频格式开始得到跨浏览器支持。

> [!NOTE]
> 你可以通过 [设置自适应流媒体源](/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources) 找到在 web 中使用的 HLS 和 MPEG-DASH 的编码指南。

### MPEG-DASH

DASH 意即基于 HTTP 的动态自适应流，最近已经被 Chrome、以及运行在 Window 8.1 的 IE 11 浏览器所支持。它依赖于媒体源扩展 (MSE)，这些扩展被[DASH.js](https://github.com/Dash-Industry-Forum/dash.js/)之类的 JavaScript 库所使用。这种方式允许我们通过 XHR 下载视频流的数据块，并且将它“添加”到 {{ htmlelement("video") }}元素正在播放的流中。正因如此，如果我们检测到网络缓慢，我们可以从下一段开始请求低质量（较小）的数据块。这种技术也允许添加广告片段到流中。

> [!NOTE]
> 你也可以[将 MPEG-DASH 自适应流式系统与 WebM 一起使用](https://wiki.webmproject.org/adaptive-streaming/webm-dash-specification)。

### HLS

HLS(HTTP Live Streaming) 是由苹果公司研发的协议，支持在 IOS、Safari 及安卓上最新版本的浏览器/Chrome 浏览器。HLS 也是自适应的。

HLS 也能被 JavaScript 解码，这意味着我们能在最新版本的 Firefox，Chrome 和 IE10+ 浏览器上使用。看这个 [HTTP Live Streaming JavaScript player](https://github.com/dailymotion/hls.js).

在流式会话的开始阶段， [extended M3U (m3u8) playlist](https://en.wikipedia.org/wiki/M3U8#Extended_M3U_directives) 已经下载完成。它包含了所提供的各个子流的元数据。

### 流式文件格式支持

| Browser                  | DASH  | HLS   | Opus (Audio) |
| ------------------------ | ----- | ----- | ------------ |
| Firefox 32               | ✓ [1] | ✓ [2] | ✓ 14+        |
| Safari 6+                |       | ✓     |              |
| Chrome 24+               | ✓ [1] | ✓     |              |
| Opera 20+                | ✓ [1] |       |              |
| Internet Explorer 10+    | ✓ 11  | ✓ [2] |              |
| Firefox Mobile           | ✓     | ✓     | ✓            |
| Safari iOS6+             |       | ✓     |              |
| Chrome Mobile            | ✓     | ✓ [2] |              |
| Opera Mobile             | ✓ [1] | ✓     |              |
| Internet Explorer Mobile | ✓ 11  | ✓ [2] |              |
| Android                  | ✓     |       |              |

\[1] 使用 JavaScript 与 MSE

\[2] 使用 JavaScript 与跨域代理

### 视频备选方案

DASH 与 HLS 可以在很大一部分主流浏览器上获得支持，但我们仍需要备选方案来支持其余的浏览器。

一个流行的方案是通过 Flash 播放器来支持 RTMP。当然，这就有个问题，我们需要编码三个不同的格式。

## 音频流文件格式

目前也有一些音频格式开始在不同浏览器上获得支持。

### Opus

Opus 是一个无版权的开放格式，针对不同类型文件使用不同的比特率来优化音频质量。音乐或演讲会可以通过不同方式来优化，Opus 就借助了 SILK 和 CELT 来实现。

目前，Opus 被桌面端和移动端的 Firefox 以及桌面端的 Chrome 和 Opera 浏览器所支持。

> [!NOTE]
> 对于浏览器端实现 WebRTC 功能来说，[Opus 是必须要用到的格式](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-audio-05)。

### MP3, AAC, Ogg Vorbis

大部分通用的音频格式能够通过特殊的服务端技术进行传输。

> [!NOTE]
> 相对于视频来说，音频没有键帧，可能更容易通过非流式格式来传输。

## 服务端流式技术

为了实时传输音频和视频，你需要在你的服务器上运行特定的流式软件，或者使用第三方服务。

### GStreamer

[GStreamer](https://gstreamer.freedesktop.org/) 是一个开源的跨平台的多媒体框架，它可以让你创建各种媒体处理组件，包括流式组件。GStreamer 通过它的插件系统，支持了一百多种编码 (包括 MPEG-1, MPEG-2, MPEG-4, H.261, H.263, H.264, RealVideo, MP3, WMV，和 FLV。)

GStreamer 的插件如 [souphttpclientsink](https://gstreamer.freedesktop.org/documentation/soup/souphttpclientsink.html) 和 [shout2send](https://gstreamer.freedesktop.org/documentation/shout2/index.html#shout2send-page) 通过 HTTP 来传输媒体。你也可以集成 Python 的 Twisted 框架。

至于传输 RTMP，你可以使用 [Nginx RTMP Module](https://github.com/arut/nginx-rtmp-module)。

### SHOUTcast

[SHOUTcast](https://en.wikipedia.org/wiki/SHOUTcast) 是一种跨平台的，针对流式媒体的专有技术。它由 Nullsoft 开发，可以播放 MP3 或 AAC 格式的数字音频内容。对于 Web 端使用，SHOUTcast 通过 HTTP 传输流。

> **备注：** [SHOUTcast 的 URL 可能需要加上分号](https://stackoverflow.com/questions/2743279/how-could-i-play-a-shoutcast-icecast-stream-using-html5).

### Icecast

[Icecast](https://www.icecast.org/) 服务是一种针对流式媒体的开源技术。它由 [Xiph.org Foundation](https://www.xiph.org/) 进行维护，通过 SHOUTcast 协议来传输 Ogg Vorbis/Theora 以及 MP3 和 AAC 格式。

> [!NOTE]
> SHOUTcast 和 Icecast 是最流行的已确立的技术之一，但也有 [更多流媒体系统可用](https://en.wikipedia.org/wiki/List_of_streaming_media_systems#Servers).

### 流式服务

虽然你可以安装类似 GStreamer，SHOUTcast 和 lcecast 的软件，但也可以从 [第三方流式服务](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems) 中找到大量的服务帮助你完成工作。

## 参见

- [HTTP 实时流式传输](https://en.wikipedia.org/wiki/HTTP_Live_Streaming)
- [HLS 浏览器支持](https://jwplayer.com/html5/hls/)
- [基于 HTTP Live Streaming 的 JavaScript 播放器](https://github.com/RReverser/mpegts)
- [HTTP Live Streaming 的基础知识](https://larryjordan.com/articles/basics-of-http-live-streaming/)
- [用于 HTML 5 视频的 DASH 自适应流](/zh-CN/docs/Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video)
- [HTTP 上的动态自适应流式传输 (MPEG-DASH)](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH 媒体源演示](https://dash-mse-test.appspot.com/media.html)
- [DASH 参考客户端](https://dashif.org/reference/players/javascript/1.0.0/index.html)
- [HTTP 上的动态流式传输](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP)
- [MPEG-DASH 的部署状态](https://www.streamingmediaglobal.com/Articles/Editorial/Featured-Articles/The-State-of-MPEG-DASH-Deployment-96144.aspx)
- [看，无需插件：使用媒体源扩展和 MPEG-DASH 实时流式传输到浏览器](https://www.bbc.co.uk/rd/blog/2014-03-media-source-extensions)
- [媒体源扩展（W3C）](https://w3c.github.io/media-source/)
- [Icecast](https://en.wikipedia.org/wiki/Icecast)
- [SHOUTcast](https://en.wikipedia.org/wiki/Shoutcast)
- [GStreamer](https://en.wikipedia.org/wiki/GStreamer)
- [通过 HTTP 流式传输 GStreamer 管道](https://coaxion.net/blog/2013/10/streaming-gstreamer-pipelines-via-http/)
- [在 web 上使用 GStreamer 传输媒体](http://www.svesoftware.com/passkeeper/cms/article/streaming-media-using-gstreamer-web/)
- [GStreamer 和树莓派](https://nginx-rtmp.blogspot.com/2013/07/gstreamer-and-raspberry-pi.html)
- [流媒体系统对比](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)
- [Mozilla Hacks - 使用媒体源扩展 (MSE) 传输媒体](https://hacks.mozilla.org/2015/07/streaming-media-on-demand-with-media-source-extensions/)
