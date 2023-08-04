---
title: <dir>：目录元素
slug: Web/HTML/Element/dir
---

{{deprecated_header}}

已废弃的 **HTML 目录元素**（**`<dir>`**）被作为一个文件和/或文件夹的目录的容器，可能还有 {{Glossary("user agent", "用户代理")}} 应用的样式与图标。Do not use this obsolete element; instead, you should use the {{HTMLElement("ul")}} element for lists, including lists of files.

> **备注：** 不要使用这个元素。虽然它出现在早期的 HTML 规范中，它已经在 HTML4 中废除了，并且在 [HTML5](/zh-CN/docs/Web/Guide/HTML/HTML5) 中过时。使用 {{HTMLElement("ul")}} 来代替。

## DOM 接口

元素实现了 {{domxref("HTMLDirectoryElement")}} 接口。

## 属性

就像其他 HTML 元素，这个元素支持 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `compact`

  - : 这个布尔属性表明，列表应该以紧凑样式显示。这个属性的实现取决于浏览器，并且不在所有浏览器中工作。

    > **备注：** 用法注解：不要使用这个属性，因为它已经废除了： {{HTMLElement("dir")}} 元素应该使用 CSS 来设计。为了提供 `compact` 属性的相似效果，可以使用 [CSS](/zh-CN/docs/CSS) 属性 {{cssxref("line-height")}}，值为 `80%`。

## 另见

- 其他和列表相关的 HTML 元素： {{HTMLElement("ol")}}，{{HTMLElement("ul")}}，{{HTMLElement("li")}}，{{HTMLElement("menu")}}；
- 特定用于 `<dir>` 元素的 CSS 属性：

  - {{cssxref('list-style')}} 属性，用于选择序号展示的方式。
  - [CSS 计数器](/zh-CN/docs/CSS_Counters)，用于处理复杂的嵌套列表。
  - {{Cssxref('line-height')}} 属性，用于模拟废除的 [`compact`](/zh-CN/docs/Web/HTML/Element/dir#compact) 属性。
  - {{cssxref('margin')}} 属性，用于控制列表的缩进。

{{HTMLSidebar}}
