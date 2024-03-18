---
title: ":seeking"
slug: Web/CSS/:seeking
---

{{CSSRef}}

**`:seeking`** [CSS](/zh-CN/docs/Web/CSS) [pseudo-class](/zh-CN/docs/Web/CSS/Pseudo-classes) 伪类选择器表示一个可播放的元素，比如 {{htmlelement("audio")}} 或 {{htmlelement("video")}}, 当可播放元素正在媒体资源中寻找播放位置时。如果用户请求在媒体资源中的特定位置播放，但媒体元素尚未达到该位置，则认为资源正在寻找。

**`:seeking`** 与 {{cssxref(":buffering")}} 不同，因为媒体元素当前不是在加载数据，而是在媒体资源中跳到一个新的位置。
有关更多信息，请参考 [Media buffering, seeking, and time ranges](/zh-CN/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges) guide.

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
  [CSS selectors](/zh-CN/docs/Web/CSS/CSS_selectors)
