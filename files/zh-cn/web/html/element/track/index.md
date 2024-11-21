---
title: <track>：嵌入文本轨元素
slug: Web/HTML/Element/track
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

**`<track>`** [HTML](/zh-CN/docs/Web/HTML) 元素作为媒体元素 {{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 的子元素使用。每个文本轨元素允许你指定一个定时文本轨（或基于时间的数据），可以与媒体元素并行显示，例如在视频上叠加字幕或隐藏式字幕，或与音频轨一起显示。

可以为一个媒体元素指定多个轨道，包含不同种类的定时文本数据，或为不同区域翻译的定时文本数据。使用的数据将是已设置为默认的轨道，或者基于用户偏好的类型和语言翻译。

轨道格式为 [WebVTT 格式](/zh-CN/docs/Web/API/WebVTT_API)（`.vtt` 文件）——Web 视频文本轨。

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

## 属性

此元素包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `default`
  - : 此属性表示应启用该轨道，除非用户的偏好表明另一个轨道更合适。每个媒体元素只能在一个 `track` 元素上使用此属性。
- `kind`

  - : 文本轨的使用方式。如果省略，默认的类型是 `subtitles`。如果属性包含无效值，则会使用 `metadata`。允许使用以下关键字：

    - `subtitles`

      - 字幕提供观众无法理解的内容的翻译。例如在英语电影中，非英语的语言或文本。
      - 字幕可能包含额外的内容，通常是额外的背景信息。例如《星球大战》电影开头的文字，或场景的日期、时间和地点。

    - `captions`

      - 隐藏式字幕提供音频的文字记录，并可能包含翻译。
      - 它可能包含重要的非语言信息，例如音乐提示或音效。它可能表示提示的来源（例如音乐、文本、角色）。
      - 适合听力障碍用户或当声音被静音时使用。

    - `chapters`

      - 章节标题用于用户浏览媒体资源时使用。

    - `metadata`

      - 由脚本元素使用的轨道。对用户不可见。

- `label`
  - : 用户可读的文本轨标题，浏览器在列出可用文本轨时使用。
- `src`
  - : 轨道（`.vtt` 文件）的地址。必须是一个有效的 URL。必须指定此属性，并且其 URL 值必须与文档具有相同的来源——除非 `track` 元素的父元素 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 有 [`crossorigin`](/zh-CN/docs/Web/HTML/Attributes/crossorigin) 属性。
- `srclang`
  - : 轨道文本数据的语言。它必须是一个有效的 [BCP 47](https://r12a.github.io/app-subtags/) 语言标签。如果 `kind` 属性设置为 `subtitles`，则必须定义 `srclang`。

## 使用说明

### 轨道数据类型

`track` 添加到媒体中的数据类型由 `kind` 属性设置，该属性可以取值 `subtitles`、`captions`、`chapters` 或 `metadata`。该元素指向一个包含定时文本的源文件，当用户请求附加数据时，浏览器会暴露该文件。

一个媒体元素不能有多个具有相同 `kind`、`srclang` 和 `label` 的 `track`。

### 检测提示的变化

每当显示的提示（cue）发生变化时，由 {{domxref("HTMLTrackElement.track", "track")}} 属性表示的底层 {{domxref("TextTrack")}} 都会接收到一个 `cuechange` 事件。即使轨道未关联媒体元素，也会发生这种情况。

如果轨道*与*媒体元素关联，并且 `<track>` 元素作为 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 元素的子元素使用，则 `cuechange` 事件也会发送到 {{domxref("HTMLTrackElement")}}。

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

### 以编程方式添加文本轨

表示 `<track>` 元素的 JavaScript 接口是 {{domxref("HTMLTrackElement")}}。与元素关联的文本轨可以通过 {{domxref("HTMLTrackElement.track")}} 属性获取，其类型为 {{domxref("TextTrack")}}。

`TextTrack` 对象也可以使用 {{domxref("HTMLMediaElement.addTextTrack()")}} 方法添加到 {{domxref("HTMLVideoElement")}} 或 {{domxref("HTMLAudioElement")}}。与媒体元素关联的 `TextTrack` 对象存储在 {{domxref("TextTrackList")}} 中，可以通过 {{domxref("HTMLMediaElement.textTracks")}} 属性获取。

## 示例

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="zh" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="zh" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="zh" label="第 1 阶段" />
  <track kind="metadata" src="keyStage2.vtt" srclang="zh" label="第 2 阶段" />
  <track kind="metadata" src="keyStage3.vtt" srclang="zh" label="第 3 阶段" />
  <!-- 回退 -->
  …
</video>
```

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a>
      </th>
      <td>无</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>无；它是{{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，且不能有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        <p>
          媒体元素，{{HTMLElement("audio")}} 或 {{HTMLElement("video")}}。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">没有对应的角色</a>
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebVTT 文本轨格式](/zh-CN/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
