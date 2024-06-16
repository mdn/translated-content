---
title: <munder>
slug: Web/MathML/Element/munder
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

**`<munder>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于在表达式下方附加着重标识或界限。它使用以下语法：`<munder> base underscript </munder>`。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes) 以及以下属性：

- `accentunder`
  - : [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示下标是否应被着重标识（即，绘制得更大并且更接近基本表达式）。

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
    <mo>&#x23DF;<!--下花括号--></mo>
  </munder>
</math>
```

{{ EmbedLiveSample('示例', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mover") }}（上标）
- {{ MathMLElement("munderover") }}（上标下标对）
