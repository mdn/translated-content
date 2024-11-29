---
title: HTMLFencedFrameElement：width 属性
slug: Web/API/HTMLFencedFrameElement/width
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("HTMLFencedFrameElement")}} 的 **`width`** 属性用于获取并设置对应 {{htmlelement("fencedframe")}} 元素的 `width` 属性的值，该属性指定了元素的宽度。

嵌入内容的尺寸可能由 `<fencedframe>` 的 {{domxref("HTMLFencedFrameElement.config", "config")}} 对象的内部 `contentWidth` 和 `contentHeight` 属性设置。在这种情况下，更改 `<fencedframe>` 的 `width` 或 {{domxref("HTMLFencedFrameElement.height", "height")}} 将改变页面上嵌入容器的大小，但容器内的文档将按比例缩放以适应新的尺寸。嵌入文档报告的宽度和高度（即 {{domxref("Window.innerWidth")}} 和 {{domxref("Window.innerHeight")}}）将保持不变。

## 值

以 CSS 像素为单位表示元素宽度的字符串。默认值为 `300`。

## 示例

```js
const frame = document.createElement("fencedframe");
frame.width = "480";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
