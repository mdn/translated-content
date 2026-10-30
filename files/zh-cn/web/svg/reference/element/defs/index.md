---
title: <defs>
slug: Web/SVG/Reference/Element/defs
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<defs>`** [SVG](/zh-CN/docs/Web/SVG) 元素用于存储稍后使用的图形对象。在 `<defs>` 元素内创建的对象不会被直接渲染。要显示它们，你必须引用它们（例如使用 {{SVGElement("use")}} 元素）。

图形对象可以从任何地方引用，不过把这些对象定义在 `<defs>` 元素内部有助于理解 SVG 内容，也对文档的整体无障碍性有益。

## 使用上下文

{{svginfo}}

## 属性

此元素仅包含全局属性。

## DOM 接口

该元素实现了 {{domxref("SVGDefsElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <!-- 一些供使用的图形对象 -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- 使用我的图形对象 -->
  <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample("示例", 150, "100%")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
