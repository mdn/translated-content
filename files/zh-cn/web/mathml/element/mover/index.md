---
title: <mover>
slug: Web/MathML/Element/mover
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

**`<mover>`** 这个 [MathML](/zh-CN/docs/Web/MathML) 元素用于在表达式上方附加重音或限制符号。使用以下语法：`<mover> base overscript </mover>`。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)以及以下属性：

- `accent`
    - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示上标是否应该被视为重音（即被放大并靠近基础表达式）。

## 示例

```html
<math display="block">
  <mover accent="true">
    <mrow>
      <mi>x</mi>
      <mo>+</mo>
      <mi>y</mi>
      <mo>+</mo>
      <mi>z</mi>
    </mrow>
    <mo>&#x23DE;<!--TOP CURLY BRACKET--></mo>
  </mover>
</math>
```

{{ EmbedLiveSample('mover_example', 700, 200, "", "") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
