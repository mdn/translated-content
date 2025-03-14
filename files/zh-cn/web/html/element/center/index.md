---
title: <center>：居中文本元素
slug: Web/HTML/Element/center
l10n:
  sourceCommit: 6f886b9147b7f62bacfa1e740a3ea288168a58aa
---

{{HTMLSidebar}}{{deprecated_header}}

**`<center>`** [HTML](/zh-CN/docs/Web/HTML) 元素是一个[块级元素](/zh-CN/docs/Glossary/Block-level_content)，它在其包含元素中将其块级或行级内容水平居中显示。容器通常是（但不一定必须是）{{HTMLElement("body")}}。

此标签已在 HTML 4（和 XHTML 1）中被弃用，取而代之的是 [CSS](/zh-CN/docs/Web/CSS) 的 {{Cssxref("text-align")}} 属性，可以应用于 {{HTMLElement("div")}} 元素或单独的 {{HTMLElement("p")}} 元素。对于居中块，请使用其他 CSS 属性，例如 {{Cssxref("margin-left")}} 和 {{Cssxref("margin-right")}} 并将它们设置为 `auto`（或设置 {{Cssxref("margin")}} 为 `0 auto`）。

## DOM 接口

该元素实现了 {{domxref("HTMLElement")}} 接口。

## 示例 1

```html
<center>
  这段文字将居中。
  <p>本段也是如此。</p>
</center>
```

### 结果

{{EmbedLiveSample("示例 1")}}

## 示例 2（CSS 替代方案）

```html
<div style="text-align:center">
  这段文字将居中。
  <p>本段也是如此。</p>
</div>
```

### 结果

{{EmbedLiveSample("示例 2（CSS 替代方案）")}}

## 示例 3（CSS 替代方案）

```html
<p style="text-align:center">
  这段文字将居中。<br />
  这一行也是如此。
</p>
```

### 结果

{{EmbedLiveSample("示例 3（CSS 替代方案）")}}

> [!NOTE]
> 将 {{Cssxref("text-align")}}`:center` 应用于 {{HTMLElement("div")}} 或 {{HTMLElement("p")}} 元素会将这些元素的*内容*居中，同时保持其总体尺寸不变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}
