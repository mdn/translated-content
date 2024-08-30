---
title: <mfrac>
slug: Web/MathML/Element/mfrac
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

**`<mfrac>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于显示分数。它还可以用于标记类似分数的对象，例如[二项式系数](https://zh.wikipedia.org/wiki/二項式係數)和[勒让德符号](https://zh.wikipedia.org/wiki/勒让德符号)。

## 语法

```html
<mfrac>numerator denominator</mfrac>
```

## 属性

这个元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)以及以下属性：

- `denomalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 分数下的分母对齐方式。可能的值包括：`left`、`center`（默认）和 `right`。
- `linethickness`
  - : 指示水平分数线的粗细的 {{cssxref("length-percentage")}}。
- `numalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 分数上的分子对齐方式。可能的值包括：`left`、`center`（默认）和 `right`。

> [!NOTE]
> 对于 `linethickness` 属性，一些浏览器可能还接受不推荐使用的值 `medium`、`thin` 和 `thick`（其确切解释留给实现者）或[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Values#旧版_mathml_长度)。

## 示例

### 简单分数

以下 MathML 代码应该渲染为分子是“a + 2”，分母是“3 − b”的分数：

```html
<math display="block">
  <mfrac>
    <mrow>
      <mi>a</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>3</mn>
      <mo>−</mo>
      <mi>b</mi>
    </mrow>
  </mfrac>
</math>
```

{{EmbedLiveSample('简单分数', 700, 200)}}

### 无分数线的分数

以下 MathML 代码应该渲染为[二项式系数](https://zh.wikipedia.org/wiki/二項式係數)：

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mo>)</mo>
  </mrow>
</math>
```

{{ EmbedLiveSample('无分数线的分数', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
