---
title: <audio>
slug: Web/HTML/Element/audio
---

{{HTMLSidebar}}

**`<audio>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于在文档中嵌入音频内容。`<audio>` 元素可以包含一个或多个音频资源，这些音频资源可以使用 `src` 属性或者 {{HTMLElement("source")}} 元素来进行描述：浏览器将会选择最合适的一个来使用。也可以使用 {{domxref("MediaStream")}} 将这个元素用于流式媒体。

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

上述例子展示了 `<audio>` 元素的基本用法。与 {{htmlelement("img")}} 元素类似，我们在 `src` 属性中添加了嵌入媒体的路径；也可以使用其他属性来规定一些功能，例如是否自动播放、是否循环播放、是否显示浏览器的默认音频控件等等。

在浏览器不支持该元素时，会显示 `<audio></audio>` 标签之间的内容作为回退。

## 属性

该元素包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `autoplay`

  - : 布尔值属性；声明该属性，音频会尽快自动播放，不会等待整个音频文件下载完成。

    > **备注：** 自动播放音频（或有声视频）可能会破坏用户体验，所以应该尽可能避免。如果你一定要提供自动播放功能，你应该加入开关（让用户主动打开自动播放）。然而，如果需要创建一些媒体元素，其播放源由用户在稍后设置，自动播放就会很有用。想了解如果正确使用自动播放，可参见我们的[自动播放指南](/zh-CN/docs/Web/Media/Autoplay_guide)。

- `controls`
  - : 如果声明了该属性，浏览器将提供一个包含声音，播放进度，播放暂停的控制面板，让用户可以控制音频的播放。
- `crossorigin`
  - : 枚举属性 展示音频资源是否可以通过 CORS 加载。[支持 CORS 的资源](/zh-CN/docs/CORS_Enabled_Image)可以被 {{HTMLElement("canvas")}} 元素复用而不污染。可选值如下：
    - `anonymous`
      - : 在发送跨域请求时不携带验证信息。换句话说，浏览器在发送`Origin:` HTTP 请求首部时将不携带 cookie、X.509 安全令牌、也不会执行任何 HTTP 基本认证。如果服务器没有给予源站信任（也就是说没有设置 `Access-Control-Allow-Origin:` 响应首部），那么图片就被认为是污染的，它就会被限制使用。
    - `use-credentials`
      - : 在发送跨域请求时携带验证信息。换句话说，在发送`Origin:` HTTP 请求首部时将携带 cookie、安全令牌、并且执行 HTTP 基本认证。如果服务器没有给予源站信任（通过设置`Access-Control-Allow-Credentials:` 响应首部）那么图片就被认为是污染的，它就会被限制使用。在未指定时，资源将不通过 CORS 请求来获取（也就是不发送 `Origin:`请求首部），以保护 {{HTMLElement('canvas')}} 元素中未污染的内容。如果验证失败，它会表现的好像 **anonymous** 选项是选中的。查看 [CORS settings attributes](/zh-CN/docs/HTML/CORS_settings_attributes) 来获取更多信息。
- `currentTime`
  - : 读取 `currentTime` 属性将返回一个双精度浮点值，用以标明以秒为单位的当前音频的播放位置。如果音频的元数据暂时无法访问——这意味着你无法的知道媒体的开始或持续时间。这时，`currentTime` 相对应的，能够被用于改变重播的时间。否则，设置 `currentTime` 将设置当前的播放位置，并且会自动搜寻到媒体的那个位置，如果媒体目前已经被加载的话。如果音频是以流的形式加载的，并且数据超出了媒体的缓冲区（buffer），{{Glossary("user agent")}} 可能无法获取资源的某些部分。另一些音频的时间轴可能并非从 0 秒开始，所以设置 `currentTime` 到一个开始时间之前的时间可能会失败。举个例子，如果音频媒体的时间轴从 12 小时开始，把 `currentTime` 设置到 3600 将会尝试把当前播放位置设置到媒体的开始位置之前，从而导致错误。{{domxref("HTMLMediaElement.getStartDate", "getStartDate()")}} 方法能够用于确定媒体时间轴的开始位置。
- `disableRemotePlayback` {{experimental_inline}}

  - : 这是一个布尔值，用来禁用在远程设备上进行进度控制的能力。这些设备通过有线（比如 HDMI, DVI）或无线技术（比如 Miracast, Chromecast, DLNA, AirPlay,）来与 web 连接。请参考 [this proposed specification](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) 来获取更多信息。

    > **备注：** 在 Safari 中，你能使用 [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) 作为兜底方案。

- `duration` {{ReadOnlyInline}}
  - : 这是一个双精度浮点数，指明了音频在时间轴中的持续时间（总长度），以秒为单位。如果元素上没有媒体，或者媒体是不可用的，那么会返回 `NaN`。如果媒体找不到确切的结尾（比如不确定长度的直播流，网络电台，或者是通过 [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 连接的流），那么这个值将返回 `+Infinity`。
- `loop`
  - : 布尔属性；如果声明该属性，将循环播放音频。
- `muted`
  - : 表示是否静音的布尔值。默认值为 `false`，表示有声音。
- `preload`

  - : 枚举属性，让开发者自行思考来示意浏览器使用何种加载方式以达到最好的用户体验。可以是以下属性之一：

    - `none`: 示意用户可能不会播放该音频，或者服务器希望节省带宽；换句话说，该音频不会被缓存；
    - `metadata`: 示意即使用户可能不会播放该音频，但获取元数据 (例如音频长度) 还是有必要的。
    - `auto`: 示意用户可能会播放音频；换句话说，如果有必要，整个音频都将被加载，即使用户不期望使用。
    - _空字符串_ : 等效于`auto`属性。不同浏览器会有自己的默认值，规范建议的默认值为 `metadata`。

    > **备注：** `autoplay` 属性的优先级高于 `preload`。如果 `autoplay` 被指定，浏览器将显式地开始下载媒体以供播放。
    >
    > - 浏览器并不被强制遵循该属性的规范，该属性只是一个建议与提示。

- `src`
  - : 嵌入的音频的 URL。该 URL 应遵从 [HTTP access controls](/zh-CN/docs/HTTP_access_control). 这是一个可选属性；你可以在 audio 元素中使用 {{htmlelement("source")}} 元素来替代该属性指定嵌入的音频。

## 事件

| 事件名称                                                                     | 触发时机                                                                                                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`audioprocess`](/zh-CN/docs/Web/API/ScriptProcessorNode/audioprocess_event) | 一个 {{DOMxRef("ScriptProcessorNode")}} 的输入缓冲区已经准备开始处理。                                                             |
| {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}                     | 浏览器已经可以播放媒体，但是预测已加载的数据不足以在不暂停的情况下顺利将其播放到结尾（即预测会在播放时暂停以获取更多的缓冲区内容） |
| {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}       | 浏览器预测已经可以在不暂停的前提下将媒体播放到结束。                                                                               |
| [`complete`](/zh-CN/docs/Web/API/OfflineAudioContext/complete_event)         | 一个 {{DOMxRef("OfflineAudioContext")}} 的渲染已经中止。                                                                           |
| {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}       | `duration` 属性发生了变化。                                                                                                        |
| {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}                     | 媒体置空。举个例子，当一个媒体已经加载（或部分加载）的情况下话调用 `load()` 方法，这个事件就将被触发。                             |
| {{domxref("HTMLMediaElement.ended_event", 'ended')}}                         | 播放到媒体的结束位置，播放停止。                                                                                                   |
| {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}               | 媒体的第一帧加载完成。                                                                                                             |
| {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}       | 元数据加载完成。                                                                                                                   |
| {{domxref("HTMLMediaElement.pause_event", 'pause')}}                         | 播放暂停。                                                                                                                         |
| {{domxref("HTMLMediaElement.play_event", 'play')}}                           | 播放开始。                                                                                                                         |
| {{domxref("HTMLMediaElement.playing_event", 'playing ')}}                    | 因为缺少数据而暂停或延迟的状态结束，播放准备开始。                                                                                 |
| {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}               | 播放速度变化。                                                                                                                     |
| {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}                       | 一次*获取* 操作结束。                                                                                                              |
| {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}                     | 一次*获取* 操作开始。                                                                                                              |
| {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}                     | 用户代理试图获取媒体数据，但数据意外地没有进入。                                                                                   |
| {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}                     | 媒体加载挂起。                                                                                                                     |
| {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}               | 由 `currentTime` 指定的时间更新。                                                                                                  |
| {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}           | 音量变化。                                                                                                                         |
| {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}                     | 因为暂时性缺少数据，播放暂停。                                                                                                     |

## 使用说明

浏览器对 [文件类型](/zh-CN/docs/Web/Media/Formats/Containers) 和 [音频编码](/zh-CN/docs/Web/Media/Formats/Audio_codecs) 的支持各有不同，你可以使用内嵌的 {{htmlelement("source")}} 元素提供不同的播放源。浏览器会使用第一个它支持的播放源：

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="myAudio.mp4">link to the audio</a> instead.
  </p>
</audio>
```

我们提供了全面细致的 [音频文件类型指南](/zh-CN/docs/Web/Media/Formats) 和 [这些类型可以使用的音频编码](/zh-CN/docs/Web/Media/Formats/Audio_codecs)。此外，还有 [视频编码支持指南](/zh-CN/docs/Web/Media/Formats/Video_codecs)。

其他使用说明：

- 如果你没有声明 `controls` 属性，音频播放器不会包含浏览器的默认控件。但你可以使用 JavaScript 和 {{domxref("HTMLMediaElement")}} API 创建自己的自定义控件。
- 为了更精确地控制你的音频内容，`HTMLMediaElement` 会触发多种不同的 [事件](/zh-CN/docs/Web/Guide/Events/Media_events)。这也提供了一个查看音频获取过程的方式，你可以查看错误或检测什么时候可以开始播放或操作。
- 你还可以使用 [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 以从 JavaScript 代码直接生成和操纵音频流，而非流式播放已存在的音频文件。
- `<audio>` 元素不能像 `<video>` 元素一样附加副标题（subtitle）或说明标题（caption）。更多有用的信息和解决方法参见 Ian Devlin 的 [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio)。

[视频和音频内容](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) 新手教程是一篇关于使用 HTML `<audio>` 的好文章。

### 使用 CSS 设置样式

`<audio>` 元素没有自带的固有视觉样式，除非如果声明了 `controls` 属性，则会显示浏览器的默认控件。

默认控件的 {{cssxref("display")}} 的默认值为 `inline`。将该值设为 `block` 通常会对定位和布局有好处，除非你想将控件放在文本块或类似元素中。

你可以使用作用于整个控件的属性来为其设置样式。例如可用 {{cssxref("border")}}、{{cssxref("border-radius")}}、{{cssxref("padding")}}, {{cssxref("margin")}} 等等。但你不能设置音频播放器中的单个组件（如改变按钮大小、改变图标或字体等）。控件在不同的浏览器中也有所不同。

如果在跨浏览器中得到一致的外观和体验，你需要创建自定义控件；自定义控件可以根据你的需求任意设置样式，还可以使用 JavaScript 和 {{domxref("HTMLMediaElement")}} API 来设置更多功能。

[视频播放器样式基础](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Video_player_styling_basics) 提供了一些有用的样式技术，这篇文章围绕 `<video>` 而写，但大部分都可以用于 `<audio>`。

### 检测音轨添加和移除

你能够通过 {{domxref("AudioTrackList/addtrack_event", "addtrack")}} 和 {{domxref("AudioTrackList/removetrack_event", "removetrack")}} 事件来检测何时音轨从 `<audio>` 元素中添加和移除了。然而，这些事件并不是直接传递给 `<audio>` 元素自己的。相反，它们是发送给 `<audio>` 元素的{{domxref("HTMLMediaElement")}} 中的音轨列表对象的。这些对象与添加进元素的音轨类型一一对应。

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : 一个 {{domxref("AudioTrackList")}} 包含所有的媒体对象的音轨。你能在为 `addtrack` 事件添加监听，以在新音轨添加进元素时获得通知。
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : 在该 {{domxref("VideoTrackList")}} 对象上添加监听，以在视频轨道被添加进元素时获得通知。
- {{domxref("HTMLMediaElement.textTracks")}}
  - : 在该 {{domxref("TextTrackList")}} 对象上添加监听，以在文字轨道被添加进元素时获得通知。（也许用于字幕，译者猜测）

> **备注：** 尽管是 `<audio>` 元素，但它依然有视频以及文字的轨道列表，并且实际上能够用来展示视频，尽管应用接口的使用可能显得很古怪。

举个例子，为了侦测何时音轨从一个 `<audio>` 元素中添加或者移除，你可以使用如下代码：

```js
var elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = function (event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function (event) {
  trackEditor.removeTrack(event.track);
};
```

这份代码监听音轨从目标元素中添加删除的事件，并且调用了一个轨道编辑器上的虚拟函数，来从编辑器上的可用音轨列表中注册和移除音轨。

你也可以使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 来监听 {{domxref("AudioTrackList/addtrack_event", "addtrack")}} 和 {{domxref("AudioTrackList/removetrack_event", "removetrack")}} 事件。

## 示例

### 基本用法

下面的例子展示了使用 `<audio>` 元素来播放 OGG 文件的简单用法。它将根据 `autoplay` 属性的设置来自动播放——如果页面允许你这么做的话。它同时还包含一个兜底内容，以防止浏览器不支持 `<audio>` 元素。

```html
<!-- Simple audio playback -->
<audio src="AudioTest.ogg" autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>
```

如果想获得更多信息，包括何时自动播放生效，如何获取自动播放权限，并且通过何种方式，在何时应用自动播放才是合适的，请看我们的 [autoplay guide](/zh-CN/docs/Web/Media/Autoplay_guide)。

### \<audio> 元素与 \<source> 元素

这个例子指出了在嵌套的 `<source>` 元素的 `src` 属性上设置嵌入音轨，而非直接在 `<audio>` 元素上设置。通过这种方法可以同时在 `type` 属性上包含文件的 MIME 类型，这通常很有用，因为浏览器就能立即决策：自己究竟是能够播放该文件，还是不在不能播放的文件上浪费时间。

```html
<audio controls>
  <source src="foo.wav" type="audio/wav" />
  Your browser does not support the <code>audio</code> element.
</audio>
```

### \<audio> 与多个 \<source> 元素

这个例子包含了多个 `<source>` 元素。如果能够播放的话，浏览器就会试图去加载第一个 source 元素（Opus 后缀名）；如果不行，那就退而求其次去加载第二个 (Vorbis 后缀名)，最终退到了 MP3 格式：

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

## 无障碍考虑

语音形式的音频必须同时提供标题，以及确切描述其内容的文本。标题（Captions）是由 [WebVTT](/zh-CN/docs/Web/API/WebVTT_API) 标准定义的，允许听力障碍的人群能够通过播放（文字）记录来理解音频内容。转录文字允许那些需要额外时间的人们，以适合他们的速度和格式回顾记录的内容。

如果使用自动标题服务，人工检查生成内容是很重要的，这确保了标题能够准确的描述源音频。

如何你的用户代理上的 `<audio>` 元素不直接支持 WebVTT。你必须寻找一个框架来为你提供这种能力，或者自己写代码来展示标题。一个选择是使用 {{HTMLElement("video")}} 元素，它是一定支持 WebVTT 的。

进阶的来讲，语音的副标题和转录文字应该同时描述音乐与音效，因为它们也是音频的重要信息，包含了情绪与音调。举例子，在下面的 WebVTT 中，中括号里提供了关于音调与情绪的信息给观看者；通过这种方式（给出音乐，语言之外的声音，以及另一些至关重要的声音的描述）能够帮助建立起音频的氛围。

```plain
1
00:00:00 --> 00:00:45
[Energetic techno music]

2
00:00:46 --> 00:00:51
Welcome to the Time Keeper's podcast! In this episode we're discussing which Swisswatch is a wrist switchwatch?

16
00:00:52 --> 00:01:02
[Laughing] Sorry! I mean, which wristwatch is a Swiss wristwatch?
```

给出其他内容（比如直接的下载链接）也是一种最佳实践，这能够作为一种用户浏览器不支持 `<audio>` 元素时的兜底方案。

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg" />
  <source src="myAudio.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML5 audio. Here is a
    <a href="myAudio.mp4">link to download the audio</a> instead.
  </p>
</audio>
```

- [MDN Subtitles and closed caption — Plugins](/zh-CN/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions)
- [Web Video Text Tracks Format (WebVTT)](/zh-CN/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.2_%E2%80%94_Providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## 技术总结

<table class="properties">
  <tbody>
    <tr>
     <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
     <td><a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容">流式内容</a>、短语内容、嵌入内容。如果它有
       <a href="/zh-CN/docs/Web/HTML/Element/audio#controls"><code>controls</code></a> 属性：交互内容和可感知内容。
     </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <p>如果元素拥有 <a href="/zh-CN/docs/Web/HTML/Element/audio#src"><code>src</code></a> 属性：允许的内容为 0 个或更多 {{HTMLElement("track")}} 元素，跟随着不包含 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 媒体元素的透明内容<br>
        否则：允许的内容为零个或多个 {{HTMLElement("source")}} 元素，跟随着 0 个或多个 {{HTMLElement("track")}} 元素，跟随着不包含 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 媒体元素的透明内容。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>任何能够作为容器的元素</td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">没有对应的角色</a></td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web media technologies](/zh-CN/docs/Web/Media)

  - [Media container formats (file types)](/zh-CN/docs/Web/Media/Formats/Containers)
  - [Guide to audio codecs used on the web](/zh-CN/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/zh-CN/docs/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Learning area: Video and audio content](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Cross-browser audio basics](/zh-CN/Apps/Fundamentals/Audio_and_video_delivery/Cross-browser_audio_basics)
