---
title: <desc>
slug: Web/SVG/Reference/Element/desc
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<desc>`** [SVG](/zh-CN/docs/Web/SVG) 元素为任意 SVG [容器元素](/zh-CN/docs/Web/SVG/Reference/Element#容器元素)或[图形元素](/zh-CN/docs/Web/SVG/Reference/Element#图形元素)提供可访问的长文本描述。

`<desc>` 元素中的文本不会作为图形的一部分被渲染。如果元素可以用可见文本来描述，则可以通过 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性引用该文本。如果使用了 `aria-describedby`，它将优先于 `<desc>`。

也可以在 `aria-describedby` 值中使用多个 ID，将 `<desc>` 元素的隐藏文本与其他元素的可见文本拼接起来。在这种情况下，`<desc>` 元素必须提供一个供引用的 ID。

## 使用上下文

{{svginfo}}

## 属性

此元素仅包含全局属性。

## DOM 接口

该元素实现了 {{domxref("SVGDescElement")}} 接口。

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
  <circle cx="5" cy="5" r="4">
    <desc>
      我是一个圆，这段描述用来演示如何描述我，但对于像我这样简单的圆，真的有必要描述吗？
    </desc>
  </circle>
</svg>
```

{{EmbedLiveSample("示例", 150, "100%")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("title")}}
