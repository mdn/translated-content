---
title: ":picture-in-picture"
slug: Web/CSS/:picture-in-picture
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{CSSRef}}

**`:picture-in-picture`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)匹配当前处于画中画模式的元素。

## 语法

```css
:picture-in-picture {
  /* ... */
}
```

## 使用说明

`:picture-in-picture` 伪类允许你配置样式表，以便视频在画中画或者传统播放模式来回切换时自动调整内容的大小、样式或布局。

## 示例

在此示例中，当视频在浮动窗口显示时，会有盒状阴影。

### HTML

页面的 HTML 如下所示：

```html
<h1>MDN Web Docs 演示：:picture-in-picture 伪类</h1>

<p>
  此演示使用 CSS <code>:picture-in-picture</code>
  伪类自动改变视频的完整样式。
</p>

<video id="pip-video"></video>
```

ID 为 `"pip-video"` 的 {{HTMLElement("video")}} 会根据是否在画中画浮动窗口中而在是否带有一个红色的阴影之间变换。

### CSS

这一效果发生在 CSS 中。

```css
:picture-in-picture {
  box-shadow: 0 0 0 5px red;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Picture-in-picture API](/zh-CN/docs/Web/API/Picture-in-Picture_API)
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
