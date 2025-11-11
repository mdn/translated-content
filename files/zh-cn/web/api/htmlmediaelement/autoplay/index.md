---
title: HTMLMediaElement：autoplay 属性
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.autoplay`** 属性反映了 HTML [`autoplay`](/zh-CN/docs/Web/HTML/Reference/Elements/video#autoplay) 属性，表示是否应在有足够的媒体资源加载完成且无需中断的情况下自动开始播放。

如果媒体元素的源是 {{domxref("MediaStream")}} 且其 `autoplay` 属性为 `true`，则该元素在激活时（即 {{domxref("MediaStream.active")}} 为 `true`）将开始播放。

> [!NOTE]
> 自动播放音频（或带音轨的视频）的网站会给用户带来不愉快的体验，因此应尽量避免。如果你必须提供自动播放特性，则应使其成为选择性特性（要求用户明确启用）。然而，当创建媒体元素并在稍后由用户控制其源时，自动播放可能会很有用。

有关自动播放、自动播放阻止以及当自动播放被用户的浏览器阻止时如何响应的深入介绍，请参阅我们的文章[媒体和 Web Audio API 的自动播放指南](/zh-CN/docs/Web/Media/Guides/Autoplay)。

## 值

布尔值，如果媒体元素在加载足够的内容以允许无中断播放时将立即开始播放，则为 `true`。

> [!NOTE]
> 一些浏览器为用户提供了覆盖 `autoplay` 的特性，以防止未经许可或在后台播放具有干扰性的音频或视频。不要依赖于 `autoplay` 自动开始播放，而是使用 {{domxref("HTMLMediaElement.play_event", 'play')}} 事件。

## 示例

```html
<video id="video" controls>
  <source
    src="https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&profile_id=165" />
</video>
```

```js
// 禁用自动播放（推荐）
// 默认值为 false
document.querySelector("#video").autoplay = false;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.autoplay` 属性的接口
- {{HTMLElement("audio")}}、{{HTMLElement("video")}}
