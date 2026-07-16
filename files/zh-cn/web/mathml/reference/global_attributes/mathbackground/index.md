---
title: mathbackground
slug: Web/MathML/Reference/Global_attributes/mathbackground
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{Deprecated_Header}}

**`mathbackground`** [全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)设置 MathML 元素的[背景颜色](/zh-CN/docs/Web/CSS/Reference/Properties/background-color)。

> [!NOTE]
> 尽可能使用 CSS 来设置 MathML 的样式。`mathbackground` 属性应仅在不支持 CSS 并且将被 CSS `background-color` 属性值覆盖的应用程序中使用。

## 语法

```html-nolint
<!-- 关键字值 -->
<math mathbackground="red">
<math mathbackground="indigo">

<!-- 十六进制值 -->
<math mathbackground="#bbff00"> <!-- 完全不透明 -->
<math mathbackground="#bf0"> <!-- 完全不透明的简写形式 -->
<math mathbackground="#11ffee00"> <!-- 完全透明 -->
<math mathbackground="#1fe0"> <!-- 完全透明的简写形式 -->
<math mathbackground="#11ffeeff"> <!-- 完全不透明 -->
<math mathbackground="#1fef"> <!-- 完全不透明的简写形式 -->

<!-- RGB 值 -->
<math mathbackground="rgb(255 255 128)"> <!-- 完全不透明 -->
<math mathbackground="rgb(117 190 218 / 50%)"> <!-- 50% 透明 -->

<!-- HSL 值 -->
<math mathbackground="hsl(50 33% 25%)"> <!-- 完全不透明 -->
<math mathbackground="hsl(50 33% 25% / 75%)"> <!-- 75% 不透明，即 25% 透明 -->
```

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 背景的统一颜色。

## 规范

{{Specifications}}

- 在 MathML 3 和更早版本中，支持的值集更有限。自 MathML 核心版本以来，语法与 CSS {{cssxref("&lt;color&gt;")}} 值相匹配。
- 此属性旨在用于不支持 CSS 的 MathML 应用程序。自 MathML 核心版本以来，推荐使用等效的 CSS。

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)
- {{cssxref("background-color")}}
