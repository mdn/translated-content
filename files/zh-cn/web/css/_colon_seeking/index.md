---
title: :seeking
slug: Web/CSS/:seeking
l10n:
  sourceCommit: c3be131cfd2c33822cb36b21cb4fca78980a6b4e
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`:seeking`** [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)选择器表示一个可播放的元素，比如 {{htmlelement("audio")}} 或 {{htmlelement("video")}}，当可播放元素正在媒体资源中寻找播放位置时。如果用户请求在媒体资源中的特定位置播放，但媒体元素尚未达到该位置，则认为资源正在寻找。

**`:seeking`** 与 {{cssxref(":buffering")}} 不同，因为媒体元素当前不是在加载数据，而是在媒体资源中跳到一个新的位置。有关更多信息，请参考[媒体缓冲、拖动和时间范围](/zh-CN/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)指南。

## 语法

```css
:seeking {
  /* ... */
}
```

## 示例

### CSS

```css
:seeking {
  outline: 5px solid red;
}

video:seeking {
  outline: 5px solid blue;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_selectors)
