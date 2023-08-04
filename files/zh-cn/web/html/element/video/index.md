---
title: "<video>: 视频嵌入元素"
slug: Web/HTML/Element/video
---

{{HTMLSidebar}}

**HTML `<video>` 元素** 用于在 HTML 或者 XHTML 文档中嵌入媒体播放器，用于支持文档内的视频播放。你也可以将 `<video>` 标签用于音频内容，但是 {{HTMLElement("audio")}} 元素可能在用户体验上更合适。

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

上面的例子展示了 `<video>` 元素的简单用法。和 {{htmlelement("img")}} 元素的使用类似，在 `src` 属性里加入一个我们需要展示的视频地址，同时也可以用其他属性来指定视频的宽度和高度、是否自动或者循环播放、是否展示浏览器默认的视频控件等。

在不支持 video 元素的浏览器中，`<video></video>` 标签中间的内容会显示，作为降级处理。

## 属性

类似于所有其他 HTML 元素，video 元素也支持 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `autoplay`

  - : 布尔属性；声明该属性后，视频会尽快自动开始播放，不会停下来等待数据全部加载完成。

    > **备注：** 自动播放音频（或有声视频）可能会破坏用户体验，所以应该尽可能避免。如果你一定要提供自动播放功能，你应该加入开关（让用户主动打开自动播放）。然而，如果需要创建一些媒体元素，其播放源由用户在稍后设置，自动播放就会很有用。想了解如何正确使用自动播放，可参见我们的 [自动播放指南](/zh-CN/docs/Web/Media/Autoplay_guide)。如果使用 `autoplay="false"` 来关闭视频的自动播放功能，会不起作用；只要 `<video>` 标签中有 autoplay 属性，视频就会自动播放。要移除自动播放，需要完全删除该属性。在某些浏览器（例如 Chrome 70.0）中，如果没有设置 `muted` 属性，autoplay 将不会生效。

- `controls`
  - : 加上这个属性，浏览器会在视频底部提供一个控制面板，允许用户控制视频的播放，包括音量，跨帧，暂停/恢复播放。
- `controlslist` {{experimental_inline}}{{non-standard_inline}}

  - : 当浏览器显示视频底部的播放控制面板（例如，指定了 `controls` 属性）时，[`controlslist`](https://wicg.github.io/controls-list/explainer.html) 属性会帮助浏览器选择在控制面板上显示哪些控件。

    允许的值有 `nodownload`、`nofullscreen` 和 `noremoteplayback`。

    如果要禁用画中画模式（和控件），请使用 [disablePictureInPicture](#disablepictureinpicture) 属性。

- `crossorigin`
  - : 该枚举属性指明是否使用 CORS（跨域资源共享）来获取相关视频。[允许 CORS 的资源](/zh-CN/docs/Web/HTML/CORS_enabled_image) 可在 {{HTMLElement("canvas")}} 元素中被重用，而不会被*污染*。允许的值如下：
    - anonymous
      - : 在发送跨域请求时不携带凭证（credential）信息。也就是说，浏览器在发送 `Origin:` HTTP 请求首部时将不会携带 cookie、X.509 安全令牌、也不会执行任何 HTTP 基本身份验证。如果服务器没有给予源站点信任（也就是说没有设置 `Access-Control-Allow-Origin:` HTTP 响应首部），图像会被 _污染_，并且它的使用会受到限制。
    - use-credentials
      - : 在发送跨域请求时携带凭证（credential）信息。也就是说，浏览器在发送 `Origin:` HTTP 请求首部时将会携带 cookie、安全令牌、并且执行 HTTP 基本身份验证。如果服务器没有给予源站点信任（通过设置 `Access-Control-Allow-Credentials:` HTTP 响应首部），图像会被 _污染_，并且它的使用会受到限制。不加这个属性时，获取资源不会使用 CORS 请求（即不会发送 `Origin:` HTTP 请求首部），保证其在 {{HTMLElement('canvas')}} 元素中使用时不会被污染。如果指定非法值，会被当作指定了枚举关键字 **anonymous** 一样使用。查看 [CORS 设置属性](/zh-CN/docs/HTML/CORS_settings_attributes) 获取更多信息。
- `disablepictureinpicture` {{experimental_inline}}
  - : 防止浏览器显示画中画上下文菜单或在某些情况下自动请求画中画模式。该属性可以禁用 `video` 元素的画中画特性，右键菜单中的“画中画”选项会被禁用
- `disableRemotePlayback` {{experimental_inline}}
  - : 布尔属性，用于在使用有线（HDMI、DVI 等）和无线技术（Miracast、Chromecast、DLNA、AirPlay 等）连接设备时，禁用远程播放功能。在 Safari 中，您可以使用 [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) 作为兜底方案。
- `height`
  - : 视频显示区域的高度，单位是 [CSS 像素](https://drafts.csswg.org/css-values/#px)（仅限绝对值；[不支持百分比](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)）。
- `loop`
  - : 布尔属性；指定后，会在视频播放结束的时候，自动返回视频开始的地方，继续播放。
- `muted`
  - : 布尔属性，指明在视频中音频的默认设置。设置后，音频会初始化为静音。默认值是 false, 意味着视频播放的时候音频也会播放。
- `playsinline`
  - : 布尔属性，指明视频将内联（inline）播放，即在元素的播放区域内。请注意，没有此属性并不意味着视频始终是全屏播放的。
- `poster`
  - : 海报帧图片 URL，用于在视频处于下载中的状态时显示。如果未指定该属性，则在视频第一帧可用之前不会显示任何内容，然后将视频的第一帧会作为海报（poster）帧来显示。
- `preload`

  - : 该枚举属性旨在提示浏览器，作者认为在播放视频之前，加载哪些内容会达到最佳的用户体验。可能是下列值之一：

    - `none`: 表示不应该预加载视频。
    - `metadata`: 表示仅预先获取视频的元数据（例如长度）。
    - `auto`: 表示可以下载整个视频文件，即使用户不希望使用它。
    - _空字符串_: 和值为 `auto` 一致。每个浏览器的默认值都不相同，即使规范建议设置为 `metadata`。

    > **备注：** `autoplay` 属性的优先级比 `preload` 高。如果制定了 `autopaly`属性，浏览器显然需要开始下载视频以便回放。规范没有强制浏览器去遵循该属性的值，这仅仅只是个提示。

- `src`
  - : 要嵌到页面的视频的 URL。可选；你也可以使用 video 块内的 {{HTMLElement("source")}} 元素来指定需要嵌到页面的视频。
- `width`
  - : 视频显示区域的宽度，单位是 [CSS 像素](https://drafts.csswg.org/css-values/#px)（仅限绝对值；[不支持百分比](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)）。

## 事件

| 事件名                                                                                    | 触发时机                                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}}{{Deprecated_Inline}} | The input buffer of a {{DOMxRef("ScriptProcessorNode")}} is ready to be processed.                                                                               |
| {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}                                  | 浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不必停下来进一步缓冲内容。                                                                       |
| {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}                    | 浏览器估计它可以在不停止内容缓冲的情况下播放媒体直到结束。                                                                                                       |
| {{domxref("OfflineAudioContext.complete_event", "complete")}}                             | {{DOMxRef("OfflineAudioContext")}} 渲染完成。                                                                                                                    |
| {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}                    | `duration` 属性的值改变时触发。                                                                                                                                  |
| {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}                                  | 媒体内容变为空；例如，当这个 media 已经加载完成（或者部分加载完成），则发送此事件，并调用 [`load()`](/zh-CN/docs/Web/API/HTMLMediaElement/load) 方法重新加载它。 |
| {{domxref("HTMLMediaElement.ended_event", 'ended')}}                                      | 视频停止播放，因为 media 已经到达结束点。                                                                                                                        |
| {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}                            | media 中的首帧已经完成加载。                                                                                                                                     |
| {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}                    | 已加载元数据。                                                                                                                                                   |
| {{domxref("HTMLMediaElement.pause_event", 'pause')}}                                      | 播放已暂停。                                                                                                                                                     |
| {{domxref("HTMLMediaElement.play_event", 'play')}}                                        | 播放已开始。                                                                                                                                                     |
| {{domxref("HTMLMediaElement.playing_event", 'playing ')}}                                 | 由于缺乏数据而暂停或延迟后，播放准备开始。                                                                                                                       |
| {{domxref("HTMLMediaElement.progress_event", 'progress')}}                                | 在浏览器加载资源时周期性触发。                                                                                                                                   |
| {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}                            | 播放速率发生变化。                                                                                                                                               |
| {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}                                    | _跳帧_（seek）操作完成。                                                                                                                                         |
| {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}                                  | _跳帧_（seek）操作开始。                                                                                                                                         |
| {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}                                  | 用户代理（user agent）正在尝试获取媒体数据，但数据意外未出现。                                                                                                   |
| {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}                                  | 媒体数据加载已暂停。                                                                                                                                             |
| {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}                            | `currentTime` 属性指定的时间发生变化。                                                                                                                           |
| {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}                        | 音量发生变化。                                                                                                                                                   |
| {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}                                  | 由于暂时缺少数据，播放已停止。                                                                                                                                   |

## 使用说明

浏览器并不是都支持相同的[视频格式](/zh-CN/docs/Web/HTML/Supported_media_formats)，所以你可以在 {{htmlelement("source")}} 元素里提供多个视频源，然后浏览器将会使用它所支持的第一个源。

```html
<video controls>
  <source src="myVideo.mp4" type="video/mp4" />
  <source src="myVideo.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="myVideo.mp4">link to the video</a> instead.
  </p>
</video>
```

其他的使用注意事项：

- 如果你没有指定 `controls` 属性，那么视频不会展示浏览器自带的控件，你也可以用 JavaScript 和 {{domxref("HTMLMediaElement")}} API 来创建你自己的控件。详情请见[Creating a cross-browser video player](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player)。
- `HTMLMediaElement` 会激活许多不同的[事件](/zh-CN/docs/Web/Guide/Events/Media_events)，以便于让你可以控制视频（和音频）内容。
- 你可以用 CSS 属性 {{cssxref("object-position")}} 来调整视频在元素内部的位置，它可以控制视频尺寸适应于元素外框的方式。
- 如果想在视频里展示字幕或者标题，你可以在 {{htmlelement("track")}} 元素和 [WebVTT](/zh-CN/docs/Web/API/WebVTT_API) 格式的基础上使用 JavaScript 来实现。详情请见 [Adding captions and subtitles to HTML5 video](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)。

此外这里还有一份很棒的关于[“视频和音频内容”](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)的初学者材料，收集了很多的基本知识。

## 例子

```html
<!-- Simple video example -->
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以
  <a href="videofile.ogg">下载</a>
  并用你喜欢的播放器观看！
</video>

<!-- Video with subtitles -->
<video src="foo.ogg">
  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English" />
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska" />
</video>
```

第一个例子播放一个视频，视频一收到，允许播放的时候就会立马开始播放，而不会停下来直到下载更多内容。图片 "posterimage.jpg" 会一直展示在视频区域，直到开始播放。

第二个例子允许用户选择不同的字幕。

## 服务器支持

如果视频的 MIME 类型设置不正确，视频可能不会显示，或者显示包含一个 X 的灰色盒子（如果启用了 JavaScript 的话）。

如果你提供的视频是 Ogg Theora 格式的，在 Apache Web 服务器上，你可以通过 "/etc/apache" 中的 "mime.types" 文件 或者通过在 httpd.conf 中的“AddType 的”配置指令，把视频文件的扩展名 (最常见的是".ogm", ".ogv", or ".ogg") 添加到 MIME 类型 "video/ogg"，来解决这个问题。

```plain
AddType video/ogg .ogm
AddType video/ogg .ogv
AddType video/ogg .ogg
```

如果你以 WebM 格式提供视频，在 Apache Web 服务器上，你可以通过 "/etc/apache" 中的 "mime.types" 文件 或者通过在 httpd.conf 中的“AddType 的”配置指令，把视频文件的扩展名 (最常见的是".webm") 添加到 MIME 类型 "video/webm"，来解决这个问题。

```plain
AddType video/webm .webm
```

你的 web 主机可能会提供一个简单的接口来修改 MIME 类型配置，直到服务器全面升级。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 媒体类型和格式指南](/zh-CN/docs/Web/Media/Formats)

  - [媒体容器（container）格式（文件类型）](/zh-CN/docs/Web/Media/Formats/Containers)
  - [Web 视频编解码器（codec）指南](/zh-CN/docs/Web/Media/Formats/Video_codecs)
  - [Web 音频编解码器（codec）指南](/zh-CN/docs/Web/Media/Formats/Audio_codecs)

- 使用 {{cssxref("object-position")}} 和 {{cssxref("object-fit")}} 设置 video 中图像位置和大小
- {{htmlelement("audio")}}
- [使用 HTML5 audio 和 video](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [使用 canvas 操作 video](/zh-CN/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Ogg 格式媒体文件的服务器配置](/zh-CN/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
