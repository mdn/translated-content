---
title: AudioTrack
slug: Web/API/AudioTrack
---

{{APIRef("HTML DOM")}}

**`AudioTrack`** 接口表示从 HTML 介质元件中的一个单一的音轨， {{HTMLElement("audio")}} 或 {{HTMLElement("video")}}. 访问`AudioTrack` 对象的最常见用途是切换其{{domxref("AudioTrack.enabled", "enabled")}} 属性，以使轨道静音和取消静音。

## 属性

- {{domxref("AudioTrack.enabled", "enabled")}}
  - : 一个布尔值，用于控制是否启用音轨的声音。设置此值`false`可使音轨的音频静音。
- {{domxref("AudioTrack.id", "id")}} {{ReadOnlyInline}}
  - : 一个{{domxref("DOMString")}}唯一标识媒体中的曲目。此 ID 可用于通过调用{{domxref("AudioTrackList.getTrackById()")}}来定位音轨列表中的特定轨道。如果媒体支持按媒体片段[URI 规范](https://www.w3.org/TR/media-frags/)按媒体片段搜索，则 ID 也可以用作 URL 的片段部分。
- {{domxref("AudioTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : 一个{{domxref("DOMString")}}指定轨道所属的类别。例如，主音频轨道将有一个`kind`的`"main"`。
- {{domxref("AudioTrack.label", "label")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMString")}}为轨道提供人类可读的标签。例如，一个音频评论轨道的电影可以有一个`label`的`"Commentary with director John Q. Public and actors John Doe and Jane Eod."`，如果没有提供标签此字符串是空的。
- {{domxref("AudioTrack.language", "language")}} {{ReadOnlyInline}}
  - : 一个{{domxref("DOMString")}}指定音轨的主要语言，如果未知，则为空字符串。该语言被指定为 BCP 47({{RFC(5646)}}}语言代码，例如`"en-US"`或`"pt-BR"`。
- {{domxref("AudioTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : 创建轨道的{{domxref("SourceBuffer")}}。如果轨道不是由{{domxref("SourceBuffer")}}创建的，或者{{domxref("SourceBuffer")}}已从{{domxref("MediaSource.sourceBuffers")}}属性中删除，则返回 null 其母媒体来源。

## 使用说明

要获取`AudioTrack`给定媒体元素，请使用元素的{{domxref("HTMLMediaElement.audioTracks","audioTracks")}}属性，该属性返回{{domxref("AudioTrackList")}}对象，您可以从中获取媒体中包含的各个曲目：

```js
var el = document.querySelector("video");
var tracks = el.audioTracks;
```

然后，您可以使用数组语法或{{jsxref("Array.forEach","forEach()")}}等函数访问媒体的各个轨道。

第一个示例获取媒体上的第一个音轨：

```js
var firstTrack = tracks[0];
```

下一个示例扫描所有媒体的音轨，启用用户首选语言中的任何一种 (取自变量`userLanguage`) 并禁用任何其他语音。

```js
tracks.forEach(function (track) {
  if (track.language === userLanguage) {
    track.enabled = true;
  } else {
    track.enabled = false;
  }
});
```

{{domxref("AudioTrack.language","language")}}采用标准 ({{RFC(5646)}}) 格式。例如，对于美国英语，这将是`"en-US"`。

## 示例

参见 [`AudioTrack.label`](/zh-CN/docs/Web/API/AudioTrack/label#example) 以获取简单示例，其中展示了如何获取指定媒体元素按轨道类别筛选后的包含轨道类别与标签的数组。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
