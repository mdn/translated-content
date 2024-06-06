---
title: <munder>
slug: Web/MathML/Element/munder
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

**`<munder>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于在表达式下方附加重音或限制。它使用以下语法：`<munder> 基础 underscript </munder>`。

## 属性

该元素的属性包括 [全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes) 以及以下属性：

- `accentunder`
  - : [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示下标是否应被视为重音（即，绘制得更大并且更接近基本表达式）。

## 示例

```html
<math display="block">
  <munder accentunder="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DF;<!--BOTTOM CURLY BRACKET--></mo>
  </munder>
</math>
```

{{ EmbedLiveSample('munder 示例', 700, 200, "", "") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mover") }} (Overscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
