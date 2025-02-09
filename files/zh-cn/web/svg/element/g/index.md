---
title: <g>
slug: Web/SVG/Element/g
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

**`<g>`** [SVG](/zh-CN/docs/Web/SVG) 元素是一个容器，用于将其他 SVG 元素进行分组。

对 `<g>` 元素应用的变换会作用于其子元素，并且其属性会被子元素继承。它还可以将多个元素分组，以便后续通过 {{SVGElement("use")}} 元素引用。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 使用 g 继承呈现属性 -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('示例', 100, '100%')}}

## 使用上下文

{{svginfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
