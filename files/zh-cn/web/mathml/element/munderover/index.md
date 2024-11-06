---
title: <munderover>
slug: Web/MathML/Element/munderover
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{MathMLRef}}

**`<munderover>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于在表达式上方和下方同时附加符号。

它使用以下语法：`<munderover> base underscript overscript </munderover>`

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)以及以下属性：

- `accent`
  - : [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示上标是否应被着重标识（即，绘制得更大并且更接近基本表达式）。
- `accentunder`
  - : [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示下标是否应被着重标识（即，绘制得更大并且更接近基本表达式）。

## 示例

```html
<math display="block">
  <munderover>
    <mo>∑</mo>
    <mrow>
      <mi>n</mi>
      <mo>=</mo>
      <mn>1</mn>
    </mrow>
    <mrow>
      <mo>+</mo>
      <mn>∞</mn>
    </mrow>
  </munderover>
</math>
```

{{ EmbedLiveSample('示例', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("munder") }}（下标）
- {{ MathMLElement("mover") }}（上标）
