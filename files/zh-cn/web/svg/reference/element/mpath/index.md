---
title: <mpath>
slug: Web/SVG/Reference/Element/mpath
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

**`<mpath>`** [SVG](/zh-CN/docs/Web/SVG) 子元素用于 {{SVGElement("animateMotion")}} 元素，它提供了引用外部 {{SVGElement("path")}} 元素作为运动路径定义的能力。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM 接口

该元素实现了 {{domxref("SVGMPathElement")}} 接口。

## 示例

### SVG

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 500 300"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect
    x="1"
    y="1"
    width="498"
    height="298"
    fill="none"
    stroke="blue"
    stroke-width="2" />

  <!-- 用蓝色绘制运动路径的轮廓，并在起始点、中点和结束点处绘制三个小圆圈。 -->
  <path
    id="path1"
    d="M100,250 C 100,50 400,50 400,250"
    fill="none"
    stroke="blue"
    stroke-width="7.06" />
  <circle cx="100" cy="250" r="17.64" fill="blue" />
  <circle cx="250" cy="100" r="17.64" fill="blue" />
  <circle cx="400" cy="250" r="17.64" fill="blue" />

  <!-- 这里有一个三角形，它将沿着运动路径移动。它定义为直立方向，三角形的底边水平居中，位于原点上方。 -->
  <path
    d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
    fill="yellow"
    stroke="red"
    stroke-width="7.06">
    <!-- 定义运动路径动画 -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
      <mpath href="#path1" />
    </animateMotion>
  </path>
</svg>
```

### 结果

{{EmbedLiveSample("示例", 250, 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("animateMotion")}}
