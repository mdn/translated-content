---
title: mathsize
slug: Web/MathML/Global_attributes/mathsize
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}{{Deprecated_Header}}

**`mathsize`** [全局属性](/zh-CN/docs/Web/MathML/Global_attributes)设置 MathML 元素的[字体大小](/zh-CN/docs/Web/CSS/font-size)。

> [!NOTE]
> 尽可能使用 CSS 对 MathML 进行样式设置。`mathsize` 属性只应包含在不支持 CSS 的应用程序中，并且如果设置的话，其将被 CSS `font-size` 属性值覆盖。

## 语法

```html-nolint
<!-- <length> 值 -->
<math mathsize="12px">
<math mathsize="0.8em">

<!-- <percentage> 值 -->
<math mathsize="80%">
```

### 值

- {{cssxref("&lt;length&gt;")}}

  - : 一个正的 {{cssxref("&lt;length&gt;")}} 值。对于大多数与字体相关的单位（例如 `em` 和 `ex`），字体大小是相对于父元素的字体大小的。

- {{cssxref("&lt;percentage&gt;")}}

  - : 一个正的 {{cssxref("&lt;percentage&gt;")}} 值，相对于父元素的字体大小。

> [!NOTE]
> 一些浏览器可能还接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Values#旧版_mathml_长度)。

## 规范

{{Specifications}}

- 在 MathML 3 和更早版本中，支持关键字 `small`、`normal` 和 `big`，以及 MathML3 特定的长度语法。自 MathML 核心版本以来，语法与 CSS {{cssxref("&lt;length-percentage&gt;")}} 值相匹配。

- 此属性设计用于不支持 CSS 的 MathML 应用程序。自 MathML 核心版本以来，推荐使用等效的 CSS。

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/MathML/Global_attributes)
- {{cssxref("font-size")}}
