---
title: <dir>：目录元素
slug: Web/HTML/Reference/Elements/dir
l10n:
  sourceCommit: 1f1418448e3b7f1d987b16db886008e5c5cc7fa1
---

{{Deprecated_Header}}

**`<dir>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于作为包含文件或文件夹目录的容器，可能由{{Glossary("user agent", "用户代理")}}应用样式和图标。不应使用此过时元素；相反，对于包括文件列表在内的列表应使用 {{HTMLElement("ul")}} 元素。

> [!WARNING]
> 请不要使用这个元素。尽管它曾在早期 HTML 规范中出现，但在 HTML4 中已被弃用，并且已被完全移除。

## DOM 接口

此元素实现了 {{domxref("HTMLDirectoryElement")}} 接口。

## 属性

跟其他 HTML 元素一样，此元素支持[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `compact` {{Deprecated_Inline}}
  - : 此布尔属性提示列表应以紧凑样式渲染。对该属性的解释取决于用户代理，且并不适用于所有浏览器。

## 规范

不属于任何现行规范。

## 浏览器兼容性

{{Compat}}

## 参见

- 其他和列表相关的 HTML 元素：{{HTMLElement("ol")}}、{{HTMLElement("ul")}}、{{HTMLElement("li")}} 和 {{HTMLElement("menu")}}；
- 特定用于 `<dir>` 元素的 CSS 属性：
  - {{cssxref('list-style')}} 属性，用于选择序号展示的方式。
  - [CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)，用于处理复杂的嵌套列表。
  - {{Cssxref('line-height')}} 属性，用于模拟弃用的 [`compact`](#compact) 属性。
  - {{cssxref('margin')}} 属性，用于控制列表的缩进。
