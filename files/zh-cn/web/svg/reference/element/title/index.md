---
title: <title> — SVG 无障碍名称元素
slug: Web/SVG/Reference/Element/title
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<title>`** [SVG](/zh-CN/docs/Web/SVG) 元素为任意 SVG [容器元素](/zh-CN/docs/Web/SVG/Reference/Element#容器元素)或[图形元素](/zh-CN/docs/Web/SVG/Reference/Element#图形元素)提供无障碍的短文本描述。

`<title>` 元素中的文本不会作为图形的一部分被渲染，但浏览器通常会将其显示为工具提示。如果元素可以用可见文本来描述，则建议使用 [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性引用该文本，而不是使用 `<title>` 元素。

> [!NOTE]
> 为与 SVG 1.1 保持向后兼容，`<title>` 元素应作为其父元素的第一个子元素。

## 使用上下文

{{svginfo}}

## 属性

此元素仅包含全局属性。

## DOM 接口

该元素实现了 {{domxref("SVGTitleElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <title>我是一个圆</title>
  </circle>

  <rect x="11" y="1" width="8" height="8">
    <title>我是一个正方形</title>
  </rect>
</svg>
```

{{EmbedLiveSample("示例", 150, "100%")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("desc")}}
