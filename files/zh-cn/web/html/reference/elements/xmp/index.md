---
title: <xmp>
slug: Web/HTML/Reference/Elements/xmp
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

## 概述

**`<xmp>`** [HTML](/zh-CN/docs/Web/HTML) 元素能够在不解释其中的 HTML 代码的情况下，以等宽字体渲染起始标签与结束标签之间的文本。HTML2 规范建议其渲染宽度应足以容纳每行 80 个字符。

> [!NOTE]
> 请不要使用这个元素。
>
> - 自 HTML3.2 以来，此元素已被弃用，并且其实现方式并不一致。当前 HTML 中已彻底移除了该元素。
> - 建议使用 {{HTMLElement("pre")}} 元素或（如果语义上合适的话）{{HTMLElement("code")}} 元素作为替代。请注意，你需要将字符 `<` 转义为 `&lt;`，并将字符 `&` 转义为 `&amp;`，以确保它们不会被当作标签解析。
> - 通过应用适当的 [CSS](/zh-CN/docs/Web/CSS) 样式（将 {{cssxref("font-family")}} 属性的通用字体值设置为 `monospace`），你可以在任何元素上应用等宽字体。

## 属性

除适用于所有元素的[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)外，此元素无其他属性。

## DOM 接口

该元素实现了 {{domxref('HTMLElement')}} 接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 可以使用 {{HTMLElement("pre")}} 和 {{HTMLElement("code")}} 元素来代替本元素。
- 类似于 `xmp` 元素的 {{HTMLElement("plaintext")}} 元素，但同样已过时。
