---
title: 向 HTML 视频中添加字幕
slug: Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
---

{{QuickLinksWithSubPages("/zh-CN/docs/Web/Guide/Audio_and_video_delivery")}}

在其他文章中我们学会了如何使用 {{ domxref("HTMLMediaElement") }} 和 {{ domxref("Window.fullScreen") }} API [搭建一个跨浏览器的视频播放器](/zh-CN/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player)以及如何给视频播放器[添加样式](/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics)。本文将介绍如何用 {{ domxref("WebVTT_API","WebVTT 格式") }}和 {{ htmlelement("track") }} 元素为视频添加字幕。

## 带有字幕的视频示例

在本篇文章中，我们将参考带字幕的视频播放器的示例。本实例使用了来自 [Blender 基金会](https://www.blender.org/about/foundation/)的 [Sintel open movie](https://durian.blender.org/)。

![带有播放、停止、音量和字幕的开启和关闭控制按钮的播放器。正在播放的视频显示了一个男人手持长矛状武器的场景，标题为“Esta hoja tiene pasado oscuro”](video-player-with-captions.png)

> **备注：** 你可以[查看 Github 源码](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)，或者[浏览在线示例](https://iandevlin.github.io/mdn/video-player-with-captions/)。

## HTML 和视频字幕

在深入研究如何在视频播放器中添加字幕之前，我们首先要提到一些事情，在开始之前你应该注意到这些。

### 原文字幕（caption）和翻译字幕（subtitle）

[原文字幕和翻译字幕不是一回事](https://web.archive.org/web/20160117160743/http://screenfont.ca/learn/)：它们的受众明显不同，传达的信息也不同，如果你不确定它们有什么区别，建议你阅读一下。然而，它们在技术上的实现方式是相同的，所以本文的材料将适用于这两种情况。

在本文中，我们将把显示的文字轨道称为字幕，因为它们的内容是针对难以理解电影语言的健听人士，而不是聋人或重听人士。

### \<track> 元素

HTML 允许我们使用 {{ htmlelement("track") }} 元素来为视频指定字幕。这个元素的各种属性允许我们指定诸如我们要添加的内容的类型，它所使用的语言，当然还有对包含实际字幕信息的文本文件的引用。

### WebVTT

包含实际字幕数据的文件是遵循指定格式的简单文本文件，在这里是 [Web 视频文本轨](/zh-CN/docs/Web/API/WebVTT_API)（WebVTT）格式。[WebVTT 规范](https://w3c.github.io/webvtt/)仍在指定中，但其主要部分已经稳定，所以现在我们可以使用它。

视频供应商（如 [Blender 基金会](https://www.blender.org/about/foundation/)）在其视频中提供文本格式的字幕，但它们通常是 SubRip Text（SRT）格式。这些都可以用在线转换器很容易地转换为 WebVTT 格式。

## 修改 HTML 和 CSS

本节总结了对上一篇文章的代码所做的修改，以方便在视频中添加字幕。如果你对此不感兴趣，只想直接进入 JavaScript 和更相关的 CSS 环节，请跳到[字幕实现](#字幕实现)部分。

在这个例子中，我们使用了一个不同的视频（[Sintel](https://durian.blender.org/)），它实际上有一些语音，因此更适合于说明字幕的工作原理！

### HTML 标签

如上所述，我们需要利用新的 HTML `<track>` 元素，将我们的字幕文件添加到 HTML 视频中。实际上，我们的字幕有三种不同的语言：英语、德语和西班牙语，所以我们将通过在 HTML `<video>` 元素中添加 `<track>` 元素来引用所有三个相关的 VTT 文件：

```html
<video id="video" controls preload="metadata">
  <source src="video/sintel-short.mp4" type="video/mp4" />
  <source src="video/sintel-short.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="captions/vtt/sintel-en.vtt"
    default />
  <track
    label="Deutsch"
    kind="subtitles"
    srclang="de"
    src="captions/vtt/sintel-de.vtt" />
  <track
    label="Español"
    kind="subtitles"
    srclang="es"
    src="captions/vtt/sintel-es.vtt" />
</video>
```

正如你所看到的，每个 `<track>` 元素都有以下属性设置：

- `kind` 的值为 `subtitles`，表示文件包含的内容类型。
- `label` 的值表示该字幕是哪种语言，例如 `English` 或 `Deutsch`。这些标签将出现在用户界面上，让用户轻松选择他们想看的字幕语言。
- `src` 的值为一个有效的 URL，指向相关的 WebVTT 字幕文件。
- `srclang` 表示每个字幕文件的内容是什么语言。
- `default` 属性被设置在携带英语字幕的 `<track>` 元素上，向浏览器表明这是默认的字幕文件定义，当字幕被打开而用户没有做出具体选择时使用。

除了添加 `<track>` 元素外，我们还添加了一个新的按钮来控制我们将建立的字幕菜单。因此，现在的视频控件看起来如下：

```html
<div id="video-controls" class="controls" data-state="hidden">
  <button id="playpause" type="button" data-state="play">播放/暂停</button>
  <button id="stop" type="button" data-state="stop">停止</button>
  <div class="progress">
    <progress id="progress" value="0" min="0">
      <span id="progress-bar"></span>
    </progress>
  </div>
  <button id="mute" type="button" data-state="mute">静音/解除静音</button>
  <button id="volinc" type="button" data-state="volup">音量+</button>
  <button id="voldec" type="button" data-state="voldown">音量-</button>
  <button id="fs" type="button" data-state="go-fullscreen">全屏</button>
  <button id="subtitles" type="button" data-state="subtitles">CC 字幕</button>
</div>
```

### 修改 CSS

为了给额外的按钮腾出空间，视频控件经历了一些小的变化，但这些都是相对简单的。

字幕按钮没有使用图片，所以它的风格简单地被定为：

```css
.controls button[data-state="subtitles"] {
  height: 85%;
  text-indent: 0;
  font-size: 16px;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  background: #000;
  border-radius: 2px;
}
```

还有其他的 CSS 变化，是针对一些额外的 JavaScript 实现的，但这些将在下面适当的地方提到。

## 字幕实现

我们为访问视频字幕所做的很多工作都是围绕着 JavaScript 展开的。与视频控件类似，如果一个浏览器支持 HTML 视频字幕，那么在本地控件集中会有一个按钮来访问它们。然而，由于我们已经定义了我们自己的视频控件，这个按钮是隐藏的，我们需要自行定义。

浏览器支持的内容各不相同，因此我们将尝试在可能的情况下为每个浏览器提供一个更统一的用户界面。稍后会有更多关于浏览器兼容性问题的内容。

### 初始设定

和其他所有的按钮一样，我们首先需要做的一件事是为字幕的按钮存储一个引用：

```js
const subtitles = document.getElementById("subtitles");
```

我们最初还关闭了所有的字幕，以防止浏览器默认打开任何字幕：

```js
for (let i = 0; i < video.textTracks.length; i++) {
  video.textTracks[i].mode = "hidden";
}
```

`video.textTracks` 属性包含一个数组，其中包含所有附加在视频上的文本轨道。我们循环遍历每一个，并将其 `mode` 设置为 `hidden`。

注意：[WebVTT API](https://w3c.github.io/webvtt/#api) 使我们能够访问所有使用 `<track>` 元素为 HTML 视频定义的文本轨道。

### 创建字幕菜单

我们的目标是使用我们先前添加的 `subtitles` 按钮来显示一个菜单，让用户选择他们希望以哪种语言显示字幕，或完全关闭字幕。

我们已经添加了按钮，但在我们让它做任何事情之前，需要先建立与之配套的菜单。这个菜单是动态建立的，以后可以通过编辑视频标记中的 `<track>` 元素来添加或删除语言。

我们所要做的就是遍历视频的 `textTracks`，读取它们的属性，然后从那里建立菜单：

```js
let subtitlesMenu;
if (video.textTracks) {
  const df = document.createDocumentFragment();
  const subtitlesMenu = df.appendChild(document.createElement("ul"));
  subtitlesMenu.className = "subtitles-menu";
  subtitlesMenu.appendChild(createMenuItem("subtitles-off", "", "Off"));
  for (let i = 0; i < video.textTracks.length; i++) {
    subtitlesMenu.appendChild(
      createMenuItem(
        `subtitles-${video.textTracks[i].language}`,
        video.textTracks[i].language,
        video.textTracks[i].label,
      ),
    );
  }
  videoContainer.appendChild(subtitlesMenu);
}
```

这段代码创建了一个 {{ domxref("documentFragment") }}，用来保存一个包含我们的字幕菜单的无序列表。首先添加了一个选项，允许用户关闭所有字幕，然后为每个文本轨道添加按钮，从每个文本轨道读取语言和标签。

每个列表项和按钮的创建是由 `createMenuItem()` 函数完成的，它的定义如下：

```js
const subtitleMenuButtons = [];
function createMenuItem(id, lang, label) {
  const listItem = document.createElement("li");
  const button = listItem.appendChild(document.createElement("button"));
  button.setAttribute("id", id);
  button.className = "subtitles-button";
  if (lang.length > 0) button.setAttribute("lang", lang);
  button.value = label;
  button.setAttribute("data-state", "inactive");
  button.appendChild(document.createTextNode(label));
  button.addEventListener("click", (e) => {
    // 将所有按钮置为非活动状态
    subtitleMenuButtons.forEach((button) => {
      button.setAttribute("data-state", "inactive");
    });

    // 找到要激活的按钮
    const lang = button.getAttribute("lang");
    for (let i = 0; i < video.textTracks.length; i++) {
      // 对于 'subtitles-off' 按钮，第一个条件永远不会满足，故所有字幕都会关闭
      if (video.textTracks[i].language === lang) {
        video.textTracks[i].mode = "showing";
        button.setAttribute("data-state", "active");
      } else {
        video.textTracks[i].mode = "hidden";
      }
    }
    subtitlesMenu.style.display = "none";
  });
  subtitleMenuButtons.push(button);
  return listItem;
}
```

这个函数建立了所需的 {{ htmlelement("li") }} 和 {{ htmlelement("button") }} 元素，并返回它们，以便它们可以被添加到字幕菜单列表中。它还在按钮上设置了所需的事件监听器，以开启或关闭相关的字幕设置。这是通过将所需字幕的 `mode` 属性设置为 `showing`，并将其他字幕设置为 `hidden` 来完成的。

一旦菜单建成，它就会被插入到视频容器底部的 DOM 中。

最初，菜单默认是隐藏的，所以需要给我们的字幕按钮添加一个事件监听器来切换它。

```js
subtitles.addEventListener("click", (e) => {
  if (subtitlesMenu) {
    subtitlesMenu.style.display =
      subtitlesMenu.style.display === "block" ? "none" : "block";
  }
});
```

### 字幕菜单 CSS 代码

我们还为新创建的字幕菜单添加了一些基本的风格设计：

```css
.subtitles-menu {
  display: none;
  position: absolute;
  bottom: 14.8%;
  right: 20px;
  background: #666;
  list-style-type: none;
  margin: 0;
  width: 100px;
  padding: 10px;
}

.subtitles-menu li {
  padding: 0;
  text-align: center;
}

.subtitles-menu li button {
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}
```

## 为显示的字幕添加样式

WebVTT 的一个不太为人所知和支持的功能是通过 [CSS 扩展](https://w3c.github.io/webvtt/#css-extensions)对单个字幕（有时被称为文本提示）进行样式化。

伪元素 `::cue` 是针对单个文本轨进行样式设计的关键，因为它可以匹配任何定义的提示。只有少数几个 CSS 属性可以应用于文本提示符：

- {{ cssxref("color") }}
- {{ cssxref("opacity") }}
- {{ cssxref("visibility") }}
- {{ cssxref("text-decoration") }}
- {{ cssxref("text-shadow") }}
- {{ cssxref("background") }} 简写属性
- {{ cssxref("outline") }} 简写属性
- {{ cssxref("font") }} 简写属性，包括 {{ cssxref("line-height") }}
- {{ cssxref("white-space") }}

例如，要改变文字轨道提示的文字颜色，你可以这样写：

```css
::cue {
  color: #ccc;
}
```

如果 WebVTT 文件使用 [voice span](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span)，它允许将提示定义为具有特定的“声音”：

```
0
00:00:00.000 --> 00:00:12.000
<v Test>[Test]</v>
```

这种特定的“声音”可以像这样施加样式：

```css
::cue(v[voice="Test"]) {
  color: #fff;
  background: #0095dd;
}
```

> **备注：** 一些带有 ::cue 的提示语的样式目前在 Chrome、Opera 和 Safari 上可以使用，但在 Firefox 上还不行。

## 浏览器兼容性

[浏览器对 WebVTT 和 `<track>` 元素的支持](http://caniuse.com/webvtt)相当好，尽管有些浏览器在实现上略有不同。

### Safari

在 Safari 6.1 以上版本中，字幕是默认启用的，默认控件包含一个按钮和一个菜单，提供与我们刚刚建立的菜单相同的功能，还有一个“自动”选项，允许浏览器进行选择。`default` 属性也被支持。

### Chrome 和 Opera

这些浏览器也有类似的实现方式：默认启用字幕，默认控制集包含一个“cc”按钮，可以打开和关闭字幕。Chrome 和 Opera 忽略了 `<track>` 元素上的 `default` 属性，而是会尝试将浏览器的语言与字幕的语言相匹配。

## 插件

也有许多开源和商业的 HTML 视频播放器插件提供字幕支持，你可以用它们来代替自己制作。你可以在网上使用“_HTML 视频播放器插件_”等搜索词来搜索这些插件。
