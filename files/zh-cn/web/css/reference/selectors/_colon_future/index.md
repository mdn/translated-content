---
title: :future
slug: Web/CSS/Reference/Selectors/:future
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) **`:future`** [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)选择器是一种时间维度伪类，用于匹配那些完全出现在匹配 {{cssxref(":current")}} 元素之后的元素。例如，在通过 [WebVTT](/zh-CN/docs/Web/API/WebVTT_API) 显示字幕的视频中。

```css
:future(p, span) {
  display: none;
}
```

## 语法

```css
:future {
  /* ... */
}
```

## 示例

### CSS

```css
:future(p, span) {
  display: none;
}
```

### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="Chinese"
    kind="subtitles"
    srclang="zh"
    src="subtitles.vtt"
    default />
</video>
```

### WebVTT

```plain
WEBVTT FILE

1
00:00:03.500 --> 00:00:05.000
这是第一条字幕

2
00:00:06.000 --> 00:00:09.000
这是第二条字幕

3
00:00:11.000 --> 00:00:19.000
这是第三条字幕
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [视频文本轨格式（WebVTT）](/zh-CN/docs/Web/API/WebVTT_API)
- {{cssxref(":current")}}
- {{cssxref(":past")}}
