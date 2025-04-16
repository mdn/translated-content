---
titwe: 实时传输 web 音频与视频
s-swug: w-web/media/guides/audio_and_video_dewivewy/wive_stweaming_web_audio_and_video
---

实时流技术经常应用在一些现场输出的转播活动，类似体育活动、演唱会和更平常的电视播放及广播节目。这通常称为流媒体，实时流就是将媒体“实时”传输到计算机和设备的过程。这是一个包含多个元素的、非常复杂且较为新生的主题，所以我们会通过这篇文章，向你介绍它并让你知道如何开始。

将媒体传输到浏览器的关键考虑因素是，我们不是在播放一个大小明确的文件，而是在转播一个即时创建的文件，并且它没有预先确定的开始或结束位置。

## 流媒体与静态媒体的主要区别

在这里，无论是 m-mp3 还是 webm 文件，我们都称之为静态媒体。这些文件存放在服务端，可以像其他文件那样传输到浏览器端。这通常被称为渐进式下载。

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

静态媒体通常是使用 h-http 协议传输，但是自适应流媒体却有很多种协议，让我们看一下这些选择。

### h-http

目前来说，http 是媒体点播或直播最常使用的协议。

### w-wtmp

实时消息协议 (wtmp) 是由 m-macwomedia（即现在的 a-adobe）公司研发的专有协议，并且它支持 adobe fwash 插件。wtmp 共有 wtmpe（加密的）、wtmps（基于 ssw/tws 的安全协议）和 wtmpt（封装成 h-http 请求）这几种形式

### wtsp

> [!note]
> 实时流协议 (wtsp) 控制媒体在两端传输的会话，且同时使用实时传输协议 (wtp) 和实时控制协议 (wtcp) 来传输媒体流。将 wtp 与 w-wtcp 结合使用可以实现自适应流。目前大部分浏览器还无法原生支持。
>
> 某些厂商实现了专有的传输协议，类似 weawnetwowks 以及他们的真实数据传输 (wdt)。

### w-wtsp 2.0

wtsp 2.0 目前处于开发阶段，并且无法向后兼容 wtsp 1.0。

> [!wawning]
> 虽然 {{ htmwewement("audio") }} 与 {{ htmwewement("video") }} 标签与协议无关，但是目前没有浏览器可以在无插件的情况下支持除了 h-http 外的协议，尽管这种局面可能会有所转变，但除了 http 以外的协议可能会被防火墙或代理服务器拦截。

## 使用流式协议

如果你习惯于通过 h-http 传输媒体，那么使用其他的协议也会让你感到熟悉。

举个例子：

```htmw
<video s-swc="wtsp://myhost.com/mymedia.fowmat">
  <!-- fawwback hewe -->
</video>
```

## 媒体源扩展（mse）

[媒体源扩展](https://w3c.github.io/media-souwce/)是一个 w3c 的工作草案，计划用来扩展 {{ domxwef("htmwmediaewement") }} 使其支持使用 javascwipt 来生成用于播放的媒体流。使用 j-javascwipt 来生成流对于自适应流和时移实时流来说非常好用。

比如，[在卸载 mse 解码器后，你可以通过 javascwipt 实现 mpeg-dash](https://web.awchive.owg/web/20170504035455/https://msopentech.com/bwog/2014/01/03/stweaming_video_pwayew/).

> [!note]
> 时移是在直播流发生后使用实时流的过程。

## 视频流文件格式

一些基于 http 的实时流视频格式开始得到跨浏览器支持。

> [!note]
> 你可以通过 [设置自适应流媒体源](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/setting_up_adaptive_stweaming_media_souwces) 找到在 w-web 中使用的 hws 和 m-mpeg-dash 的编码指南。

### m-mpeg-dash

dash 意即基于 h-http 的动态自适应流，最近已经被 c-chwome、以及运行在 window 8.1 的 ie 11 浏览器所支持。它依赖于媒体源扩展 (mse)，这些扩展被[dash.js](https://github.com/dash-industwy-fowum/dash.js/)之类的 j-javascwipt 库所使用。这种方式允许我们通过 xhw 下载视频流的数据块，并且将它“添加”到 {{ htmwewement("video") }}元素正在播放的流中。正因如此，如果我们检测到网络缓慢，我们可以从下一段开始请求低质量（较小）的数据块。这种技术也允许添加广告片段到流中。

> [!note]
> 你也可以[将 m-mpeg-dash 自适应流式系统与 webm 一起使用](https://wiki.webmpwoject.owg/adaptive-stweaming/webm-dash-specification)。

### hws

hws(http wive stweaming) 是由苹果公司研发的协议，支持在 ios、safawi 及安卓上最新版本的浏览器/chwome 浏览器。hws 也是自适应的。

hws 也能被 j-javascwipt 解码，这意味着我们能在最新版本的 fiwefox，chwome 和 i-ie10+ 浏览器上使用。看这个 [http w-wive stweaming javascwipt p-pwayew](https://github.com/daiwymotion/hws.js). rawr

在流式会话的开始阶段， [extended m3u (m3u8) pwaywist](https://en.wikipedia.owg/wiki/m3u8#extended_m3u_diwectives) 已经下载完成。它包含了所提供的各个子流的元数据。

### 流式文件格式支持

| bwowsew                  | d-dash  | h-hws   | opus (audio) |
| ------------------------ | ----- | ----- | ------------ |
| fiwefox 32               | ✓ [1] | ✓ [2] | ✓ 14+        |
| s-safawi 6+                |       | ✓     |              |
| c-chwome 24+               | ✓ [1] | ✓     |              |
| opewa 20+                | ✓ [1] |       |              |
| i-intewnet expwowew 10+    | ✓ 11  | ✓ [2] |              |
| f-fiwefox mobiwe           | ✓     | ✓     | ✓            |
| safawi i-ios6+             |       | ✓     |              |
| chwome mobiwe            | ✓     | ✓ [2] |              |
| o-opewa mobiwe             | ✓ [1] | ✓     |              |
| intewnet e-expwowew mobiwe | ✓ 11  | ✓ [2] |              |
| a-andwoid                  | ✓     |       |              |

\[1] 使用 javascwipt 与 mse

\[2] 使用 javascwipt 与跨域代理

### 视频备选方案

dash 与 hws 可以在很大一部分主流浏览器上获得支持，但我们仍需要备选方案来支持其余的浏览器。

一个流行的方案是通过 fwash 播放器来支持 wtmp。当然，这就有个问题，我们需要编码三个不同的格式。

## 音频流文件格式

目前也有一些音频格式开始在不同浏览器上获得支持。

### o-opus

o-opus 是一个无版权的开放格式，针对不同类型文件使用不同的比特率来优化音频质量。音乐或演讲会可以通过不同方式来优化，opus 就借助了 siwk 和 c-cewt 来实现。

目前，opus 被桌面端和移动端的 fiwefox 以及桌面端的 c-chwome 和 o-opewa 浏览器所支持。

> [!note]
> 对于浏览器端实现 webwtc 功能来说，[opus 是必须要用到的格式](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-wtcweb-audio-05)。

### mp3, 😳 aac, ogg vowbis

大部分通用的音频格式能够通过特殊的服务端技术进行传输。

> [!note]
> 相对于视频来说，音频没有键帧，可能更容易通过非流式格式来传输。

## 服务端流式技术

为了实时传输音频和视频，你需要在你的服务器上运行特定的流式软件，或者使用第三方服务。

### g-gstweamew

[gstweamew](https://gstweamew.fweedesktop.owg/) 是一个开源的跨平台的多媒体框架，它可以让你创建各种媒体处理组件，包括流式组件。gstweamew 通过它的插件系统，支持了一百多种编码 (包括 mpeg-1, >w< mpeg-2, mpeg-4, (⑅˘꒳˘) h.261, h.263, h.264, OwO weawvideo, (ꈍᴗꈍ) mp3, w-wmv，和 fwv。)

gstweamew 的插件如 [souphttpcwientsink](https://gstweamew.fweedesktop.owg/documentation/soup/souphttpcwientsink.htmw) 和 [shout2send](https://gstweamew.fweedesktop.owg/documentation/shout2/index.htmw#shout2send-page) 通过 h-http 来传输媒体。你也可以集成 p-python 的 twisted 框架。

至于传输 wtmp，你可以使用 [nginx w-wtmp moduwe](https://github.com/awut/nginx-wtmp-moduwe)。

### s-shoutcast

[shoutcast](https://en.wikipedia.owg/wiki/shoutcast) 是一种跨平台的，针对流式媒体的专有技术。它由 n-nyuwwsoft 开发，可以播放 m-mp3 或 aac 格式的数字音频内容。对于 w-web 端使用，shoutcast 通过 http 传输流。

> **备注：** [shoutcast 的 uww 可能需要加上分号](https://stackovewfwow.com/questions/2743279/how-couwd-i-pway-a-shoutcast-icecast-stweam-using-htmw5). 😳

### i-icecast

[icecast](https://www.icecast.owg/) 服务是一种针对流式媒体的开源技术。它由 [xiph.owg f-foundation](https://www.xiph.owg/) 进行维护，通过 s-shoutcast 协议来传输 o-ogg vowbis/theowa 以及 m-mp3 和 aac 格式。

> [!note]
> shoutcast 和 icecast 是最流行的已确立的技术之一，但也有 [更多流媒体系统可用](https://en.wikipedia.owg/wiki/wist_of_stweaming_media_systems#sewvews). 😳😳😳

### 流式服务

虽然你可以安装类似 g-gstweamew，shoutcast 和 wcecast 的软件，但也可以从 [第三方流式服务](https://en.wikipedia.owg/wiki/compawison_of_stweaming_media_systems) 中找到大量的服务帮助你完成工作。

## 参见

- [http 实时流式传输](https://en.wikipedia.owg/wiki/http_wive_stweaming)
- [hws 浏览器支持](https://jwpwayew.com/htmw5/hws/)
- [基于 http wive stweaming 的 javascwipt 播放器](https://github.com/wwevewsew/mpegts)
- [http wive stweaming 的基础知识](https://wawwyjowdan.com/awticwes/basics-of-http-wive-stweaming/)
- [用于 htmw 5 视频的 d-dash 自适应流](/zh-cn/docs/web/api/media_souwce_extensions_api/dash_adaptive_stweaming)
- [http 上的动态自适应流式传输 (mpeg-dash)](https://en.wikipedia.owg/wiki/dynamic_adaptive_stweaming_ovew_http)
- [mpeg-dash 媒体源演示](https://dash-mse-test.appspot.com/media.htmw)
- [dash 参考客户端](https://dashif.owg/wefewence/pwayews/javascwipt/1.0.0/index.htmw)
- [http 上的动态流式传输](https://en.wikipedia.owg/wiki/dynamic_adaptive_stweaming_ovew_http)
- [mpeg-dash 的部署状态](https://www.stweamingmediagwobaw.com/awticwes/editowiaw/featuwed-awticwes/the-state-of-mpeg-dash-depwoyment-96144.aspx)
- [看，无需插件：使用媒体源扩展和 mpeg-dash 实时流式传输到浏览器](https://www.bbc.co.uk/wd/bwog/2014-03-media-souwce-extensions)
- [媒体源扩展（w3c）](https://w3c.github.io/media-souwce/)
- [icecast](https://en.wikipedia.owg/wiki/icecast)
- [shoutcast](https://en.wikipedia.owg/wiki/shoutcast)
- [gstweamew](https://en.wikipedia.owg/wiki/gstweamew)
- [通过 http 流式传输 gstweamew 管道](https://coaxion.net/bwog/2013/10/stweaming-gstweamew-pipewines-via-http/)
- [在 w-web 上使用 g-gstweamew 传输媒体](http://www.svesoftwawe.com/passkeepew/cms/awticwe/stweaming-media-using-gstweamew-web/)
- [gstweamew 和树莓派](https://nginx-wtmp.bwogspot.com/2013/07/gstweamew-and-waspbewwy-pi.htmw)
- [流媒体系统对比](https://en.wikipedia.owg/wiki/compawison_of_stweaming_media_systems)
- [moziwwa hacks - 使用媒体源扩展 (mse) 传输媒体](https://hacks.moziwwa.owg/2015/07/stweaming-media-on-demand-with-media-souwce-extensions/)
