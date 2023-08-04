---
title: Web 媒体技术
slug: Web/Media
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/Media")}}

逐年来，Web 呈现、创建并管理音频、视频和其他媒体的能力以不断增长的步伐发展。今日有着大量可用的 API、HTML 元素、DOM 界面和其他不仅仅限于完成这些任务，而是为了将媒体和其他技术联合使用以实现非凡事物的特性可供使用。这篇文章列出了可能对你掌握这些技术有帮助的多种 API 与其文档链接。

## 参考资料

### HTML

这些文章包含了供媒体开发者使用的 HTML 特性。

- {{HTMLElement("audio")}}
  - : `<audio>` 元素用于在 Web 上下文中播放音频。这可以用于复杂媒体的隐性目标，亦或是用户控制播放音频的可见控制。可以通过 JavaScript {{domxref("HTMLAudioElement")}} 对象访问。
- {{HTMLElement("video")}}
  - : `<video>` 元素是 Web 上下文中视频内容的端点。其可以简单地用于呈现视频，亦或是流式视频的目标。`<video>` 也可以用于连接媒体 API 和其他 HTML 与 DOM 技术，比如 {{HTMLElement("canvas")}}（用于抓取并控制框中内容)，例如，可以通过 JavaScript {{domxref("HTMLVideoElement")}} 对象访问。
- {{HTMLElement("track")}}
  - : `<track>` 元素可以被放置在 {{HTMLElement("audio")}} 或者 {{HTMLElement("video")}} 元素内部，当在媒体播放时，以提供 [WebVTT](/zh-CN/docs/Web/API/WebVTT_API) 格式化字幕或标题轨道的参考。可以通过 JavaScript {{domxref("HTMLTrackElement")}} 对象访问。
- {{HTMLElement("source")}}
  - : `<source>` 元素可以放在 {{HTMLElement("audio")}} 或者 {{HTMLElement("video")}} 元素内部，以指定当前显示的源媒体。可以使用多个不同格式、大小、分辨率的媒体源。可以通过 JavaScript {{domxref("HTMLSourceElement")}} 对象访问。

### API 接口

- [媒体功能 API](/zh-CN/docs/Web/API/Media_Capabilities_API)
  - : 媒体功能 API 可以确定运行你的应用程序或网站的设备的编码和解码能力，让你实时决定使用的格式以及时机。
- [媒体捕获和流媒体 API](/zh-CN/docs/Web/API/Media_Streams_API)
  - : 使得串流、播放和控制本地和网络媒体成为可能的 API 参考文献。包括使用本地摄像头与麦克风来抓取视频、音频和静止图片。
- [媒体会话 API](/zh-CN/docs/Web/API/Media_Session_API)
  - : 媒体会话 API 提供了一种定制媒体通知的方法。它通过提供元数据，让用户代理显示你的网络应用程序正在播放的媒体。它还提供了行动处理程序，浏览器可以用来访问平台媒体键，如键盘、耳机、遥控器上的硬件键，以及通知区和移动设备锁屏上的软件键。
- [媒体流录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API)
  - : 媒体流录制 API 允许你捕获媒体流并处理或过滤数据，或者将其保存在磁盘上。
- [网络音频 API](/zh-CN/docs/Web/API/Web_Audio_API)
  - : 网络音频 API 允许你生成、过滤并调节实时与预录的音频材料，并将其发送至 `<audio>` 元素、媒体流或磁盘中。
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
  - : WebRTC（网页即时通信）可以使互联网上任意两位用户在无需媒介的情况下中串流实时音频、视频和任意数据。

## 指南

- [在 HTML 中使用音频和视频资源](/zh-CN/docs/Web/Media/HTML_media)
  - : 这里是一篇使用 HTML `<audio>` 和 `<video>` 元素的指南。
- [Web 设计中的媒体无障碍指南](/zh-CN/docs/Learn/Accessibility/Multimedia)
  - : 在本指南中，我们将介绍 web 设计人员和开发人员创建的内容能让具有不同能力的人可以访问的方法。这个范围包括从 {{HTMLElement("img")}} 元素上简单地使用 [`alt`](/zh-CN/docs/Web/HTML/Element/img#alt) 属性到为屏幕阅读者提供字幕标记的媒体。
- [Web 媒体类型和格式指南](/zh-CN/docs/Web/Media/Formats)
  - : 关于文件类型和编解码器对于 web 上的图像、音频和视频媒体有效的指南。这包括使用何种格式处理什么内容的建议、最佳实践，以及如何提供后备方案和如何对媒体类型进行优先排序，还包括针对每个媒体容器和编解码器的一般浏览器支持信息。
- [音频和视频推流](/zh-CN/docs/Web/Media/Streaming)
  - : 该指南涵盖了如何进行音频和视频流推送，以及你可以利用的技巧和技术，以确保你的流媒体的最佳质量和/或性能。
- [媒体和 Web 音频 API 自动播放指南](/zh-CN/docs/Web/Media/Autoplay_guide)
  - : 出乎意料的自动播放媒体或音频对用户来说可能是一个不受欢迎的惊喜。虽然自动播放是有目的的，但应该谨慎使用。为了让用户控制这一点，许多浏览器现在都提供了自动播放阻塞的形式。本文是关于自动播放的指南，提供了一些技巧，告诉你何时以及如何使用它，以及如何使用浏览器优雅地处理自动播放阻塞。
- [Web 音频空间化基础](/zh-CN/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : 3D 环境既可以是渲染到屏幕上的 3D 场景，也可以是使用头盔体验的混合现实场景，重要的是音频的表现要让它听起来像来自其来源的方向。本指南涵盖了如何实现这一点。

## 其他主题

你可能会感兴趣的相关主题，因为这些技术可以用有趣的方式与媒体 API 共同使用。

- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
  - : Canvas API 允许你在 {{HTMLElement("canvas")}} 上绘画、操纵并改变图像内容。这样可以与媒体以多种方式使用，包括设置 `<canvas>` 元素作为视频播放或摄像头捕获的终点以捕获或操纵视频帧。
- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
  - : WebGL 在已存在的 Canvas API 上提供了与 OpenGL ES 兼容的 API，使得在 Web 上制作强大的 3D 图像成为可能。通过一张画布，这可以用于为媒体内容添加 3D 图像。
- [WebXR](/zh-CN/docs/Web/API/WebXR_Device_API)
  - : 作为取代 WebVR API 的存在，WebXR 是一种支持创建虚拟现实（VR）和增强现实 (AR) 内容的技术。混合现实内容可以显示在设备的屏幕上，或者是显示在目镜或耳机内。
- [WebVR](/zh-CN/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : Web Virtual Reality API 支持虚拟现实（VR）设备，如 Oculus Rift 或 HTC Vive，使开发人员能够将用户的位置和移动转换为 3D 场景中的移动，然后在设备上显示。WebVR 已经被 WebXR 所取代，并将从浏览器中移除。
