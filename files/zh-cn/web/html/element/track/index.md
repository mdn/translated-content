---
title: <track>
slug: Web/HTML/Element/track
---

**HTML `<track>` 元素** 被当作媒体元素—{{HTMLElement("audio")}} 和 {{HTMLElement("video")}}的子元素来使用。它允许指定时序文本字幕（或者基于时间的数据），例如自动处理字幕。字幕格式有 [WebVTT 格式](/zh-CN/docs/Web/API/Web_Video_Text_Tracks_Format)（`.vtt`格式文件）— Web 视频文本字幕格式，以及指[时序文本标记语言（TTML）](https://w3c.github.io/ttml2/index.html)格式。

`track` 给媒体元素添加的数据的类型在 `kind` 属性中设置，属性值可以是 `subtitles`, `captions`, `descriptions`, `chapters` 或 `metadata`。该元素指向当用户请求额外的数据时浏览器公开的包含定时文本的源文件。

一个`media` 元素的任意两个 `track` 子元素不能有相同的 `kind`, `srclang`, 和 `label`属性。

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

## 使用上下文

<table class="standard-table">
 <tbody>
  <tr>
   <td><strong><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></strong></td>
   <td>无</td>
  </tr>
  <tr>
   <td><strong>允许的内容</strong></td>
   <td>无，它是一个 {{Glossary("空元素")}}。</td>
  </tr>
  <tr>
   <td><strong>标签省略</strong></td>
   <td>允许省略，因为他是一个空元素，所以开始标签必须存在，结束标记可以省略。</td>
  </tr>
  <tr>
   <td><strong>允许的父元素</strong></td>
   <td>媒体元素，<a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流内容</a>之前。</td>
  </tr>
  <tr>
   <td><strong>允许的 ARIA 角色</strong></td>
   <td>无</td>
  </tr>
  <tr>
   <td><strong>DOM 接口</strong></td>
   <td>{{domxref("HTMLTrackElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

- {{htmlattrdef("default")}}
  - : 该属性定义了该 track 应该启用，除非用户首选项指定了更合适一个 track。每个媒体元素里面只有一个 `track` 元素可以有这个属性。
- {{htmlattrdef("kind")}}

  - : 定义了 text track 应该如何使用。如果省略了该属性，默认的 kind 值就是 `subtitles`。下面是允许的关键字：

    - `subtitles`

      - 字幕给观影者看不懂的内容提供了翻译。比如英文电影里非英文的对话框或者文字。
      - 字幕可能包含额外的内容，通常有附加的背景信息。比如在电影星球大战开头的文字，或者某个场景的日期，时间，还有地点。

    - captions

      - 隐藏式字幕提供了音频的转录甚至是翻译。
      - 可能包含重要的非言语的信息，比如音乐提示或者音效。可以指定提示音的源文件 (e.g. music, text, character).
      - 适用于耳聋的用户或者当调成静音的时候。

    - `descriptions`

      - 视频内容的文本描述。
      - 适用于失明用户或者当视频不可见的场景。

    - `chapters`

      - 章节标题用于用户浏览媒体资源的时候。

    - `metadata`

      - 脚本使用的 track。对用户不可见。

- {{htmlattrdef("label")}}
  - : 当列出可用的 text tracks 时，给浏览器使用的 text track 的标题，这种标题是用户可读的。
- {{htmlattrdef("src")}}
  - : track 的地址。必须是合法的 URL。该属性必须定义。
- {{htmlattrdef("srclang")}}
  - : track 文本数据的语言。它必须是合法的 [BCP 47](http://people.w3.org/rishida/utils/subtags/) 语言标签。如果 `kind` 属性被设为 `subtitles`, 那么 `srclang` 必须定义。

## 用法说明

### 轨道数据类型

`track` 给媒体元素添加的数据的类型在 `kind` 属性中设置，属性值可以是 `subtitles`, `captions`, `descriptions`, `chapters` 或 `metadata`。该元素指向当用户请求额外的数据时浏览器公开的包含定时文本的源文件。

一个`media` 元素的任意两个 `track` 子元素不能有相同的 `kind`, `srclang`, 和 `label`属性。

## 示例

```plain
<video controls poster="/images/sample.gif">
   <source src="sample.mp4" type="video/mp4">
   <source src="sample.ogv" type="video/ogv">
   <track kind="captions" src="sampleCaptions.vtt" srclang="en">
   <track kind="descriptions"
     src="sampleDescriptions.vtt" srclang="en">
   <track kind="chapters" src="sampleChapters.vtt" srclang="en">
   <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de">
   <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en">
   <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja">
   <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz">
   <track kind="metadata" src="keyStage1.vtt" srclang="en"
     label="Key Stage 1">
   <track kind="metadata" src="keyStage2.vtt" srclang="en"
     label="Key Stage 2">
   <track kind="metadata" src="keyStage3.vtt" srclang="en"
     label="Key Stage 3">
   <!-- Fallback -->
   ...
</video>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [WebVTT text track format](/zh-CN/docs/HTML/WebVTT)

{{HTMLSidebar}}
