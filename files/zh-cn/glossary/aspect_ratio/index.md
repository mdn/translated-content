---
title: 纵横比
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

**纵横比**是元素或{{glossary("viewport", "视口")}}的宽度和高度之间的比例关系，通常用比例或两个数字表示。

拥有纵横比，无论是像图片和视频这样的固有纵横比，还是外部设置的，都能保持元素的预期比例。你还可以查询元素或视口的纵横比，这对于开发灵活的组件和布局非常有用。

在 CSS 中，{{cssxref("ratio")}} 数据类型写作 `width / height`（例如，正方形的 `1 / 1`，宽屏的 `16 / 9`），或者是一个数字，此时该数字表示宽度，高度为 `1`。

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

在 SVG 中，纵横比由四个值的 [`viewBox`](/zh-CN/docs/Web/SVG/Reference/Attribute/viewBox) 属性定义。前两个值是 SVG 可以具有的最小 X 和 Y 原点坐标，后两个值是宽度和高度，用于设置 SVG 的纵横比。

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

在 JavaScript API 中，查询纵横比返回一个双精度浮点数，表示宽度除以高度的商。你还可以使用 JavaScript 设置元素的纵横比。例如，使用 {{domxref("MediaStreamTrack")}} 或 {{domxref("MediaTrackSettings")}} 字典的 [`aspectRatio`](/zh-CN/docs/Web/API/MediaTrackSettings/aspectRatio) 属性为 1920x1080 视频设置纵横比约束，计算为 16/9，或 1920/1080，即 `1.7777777778`：

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## 参见

- CSS {{cssxref("aspect-ratio")}} 属性
- [理解纵横比](/zh-CN/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)教程
- [CSS 盒子大小设置](/zh-CN/docs/Web/CSS/Guides/Box_sizing)模块
- 相关术语：
  - {{glossary("intrinsic size", "固有尺寸")}}
- CSS {{cssxref("min-content")}}、{{cssxref("max-content")}} 和 {{cssxref("fit-content")}} 属性值
