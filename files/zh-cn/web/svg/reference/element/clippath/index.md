---
title: <clipPath>
slug: Web/SVG/Reference/Element/clipPath
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<clipPath>`** [SVG](/zh-CN/docs/Web/SVG) 元素定义一条裁剪路径，供 {{SVGAttr("clip-path")}} 属性使用。

裁剪路径限制可应用绘制的区域。从概念上讲，绘图中位于裁剪路径所界定区域之外的部分不会被绘制。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("clipPathUnits")}}
  - : 定义 `<clipPath>` 元素内容的坐标系。_值类型_：`userSpaceOnUse` | `objectBoundingBox`；_默认值_：`userSpaceOnUse`；_动画性_：**是**

## DOM 接口

该元素实现了 {{domxref("SVGClipPathElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!--
      圆外的所有内容都会被裁剪，因此不可见。
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- 原始黑色心形，供参考 -->
  <path
    id="heart"
    d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    只有裁剪圆内的红色心形部分可见。
  -->
  <use clip-path="url(#myClip)" href="#heart" fill="red" />
</svg>
```

```css
/* 为已实现 r 几何属性的浏览器添加一点 CSS */

@keyframes openYourHeart {
  from {
    r: 0;
  }
  to {
    r: 60px;
  }
}

#myClip circle {
  animation: openYourHeart 15s infinite;
}
```

{{EmbedLiveSample('示例', 100, 100)}}

裁剪路径在概念上等同于引用元素的自定义视口。因此，它会影响元素的*渲染*，但不会影响元素的*固有几何*。被裁剪元素（即通过 {{SVGAttr("clip-path")}} 属性引用 `<clipPath>` 元素的元素，或引用元素的子元素）的边界框必须与未裁剪时相同。

默认情况下，被裁剪区域不会派发 {{cssxref("pointer-events")}} 事件。例如，一个半径为 `10` 的圆被裁剪为半径为 `5` 的圆时，在较小半径之外不会接收“click”事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("mask")}}
- CSS {{cssxref("clip-path")}} 属性
- [CSS 裁剪简介](/zh-CN/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS 遮罩](/zh-CN/docs/Web/CSS/Guides/Masking/Clipping)模块
