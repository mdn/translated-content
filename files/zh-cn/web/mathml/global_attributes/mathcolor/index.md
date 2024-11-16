---
title: mathcolor
slug: Web/MathML/Global_attributes/mathcolor
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{MathMLRef}}{{Deprecated_Header}}

**`mathbackground`** [全局属性](/zh-CN/docs/Web/MathML/Global_attributes)设置 MathML 元素的[颜色](/zh-CN/docs/Web/CSS/color)。

> [!NOTE]
> 尽可能使用 CSS 来为 MathML 设置样式。`mathcolor` 属性应仅在不支持 CSS 并且将被 CSS `color` 属性值覆盖的应用程序中使用。

## 语法

```html-nolint
<!-- 关键字值 -->
<math mathcolor="currentcolor">

<!-- <named-color> 值 -->
<math mathcolor="red">
<math mathcolor="orange">
<math mathcolor="tan">
<math mathcolor="rebeccapurple">

<!-- <hex-color> 值 -->
<math mathcolor="#090">
<math mathcolor="#009900">
<math mathcolor="#090a">
<math mathcolor="#009900aa">

<!-- <rgb()> 值 -->
<math mathcolor="rgb(34, 12, 64, 0.6)">
<math mathcolor="rgb(34 12 64 / 0.6)">
<math mathcolor="rgb(34.6 12 64 / 60%)">

<!-- <hsl()> 值 -->
<math mathcolor="hsl(30, 100%, 50%, 0.6)">
<math mathcolor="hsl(30 100% 50% / 0.6)">
<math mathcolor="hsl(30.2 100% 50% / 60%)">

<!-- <hwb()> 值 -->
<math mathcolor="hwb(90 10% 10%)">
<math mathcolor="hwb(90 10% 10% / 0.5)">
<math mathcolor="hwb(90deg 10% 10%)">
<math mathcolor="hwb(1.5708rad 60% 0%)">
<math mathcolor="hwb(.25turn 0% 40% / 50%)">
```

### 可选值

- {{cssxref("&lt;color&gt;")}}
  - : 设置元素的文本和装饰部分的颜色，包括例如分数线或根号符号等。

## 规范

{{Specifications}}

- 在 MathML 3 和更早版本中，支持的值集更有限。自 MathML 核心版本以来，语法与 CSS {{cssxref("&lt;color&gt;")}} 值相匹配。
- 此属性旨在用于不支持 CSS 的 MathML 应用程序。自 MathML 核心版本以来，推荐使用等效的 CSS。

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/MathML/Global_attributes)
- {{cssxref("color")}}
