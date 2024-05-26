---
title: <mo>
slug: Web/MathML/Element/mo
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

**`<mo>`** 这个 [MathML](/zh-CN/docs/Web/MathML) 元素表示广义上的运算符。除了严格数学意义上的运算符外，该元素还包括像括号、逗号和分号这样的分隔符，或者像"绝对值"符号这样的"运算符"。

## 属性

除了[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)外，该元素接受以下属性[其默认值取决于运算符的形式和内容](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator)：

- `accent` {{Non-standard_Inline}}
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示运算符在被用作 [下标](/zh-CN/docs/Web/MathML/Element/munder) 或 [上标](/zh-CN/docs/Web/MathML/Element/mover) 时是否应该被视为重音（即被放大并靠近基础表达式）。
- `fence`
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示运算符是否是一个围栏（例如括号）。该属性没有视觉效果。
- `largeop`
    - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示当 [`math-style`](/zh-CN/docs/Web/CSS/math-style) 设置为 `normal` 时是否应该放大运算符。
- `lspace`
    - : 一个 {{cssxref("length-percentage")}}，表示运算符前的空间量。
- `maxsize`
    - : 一个 {{cssxref("length-percentage")}}，表示运算符在可拉伸时的最大大小。
- `minsize`
    - : 一个 {{cssxref("length-percentage")}}，表示运算符在可拉伸时的最小大小。
- `movablelimits`
    - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示附加的下标和上标在 [`math-style`](/zh-CN/docs/Web/CSS/math-style) 设置为 `compact` 时是否移动到上下标位置。
- `rspace`
    - : 一个 {{cssxref("length-percentage")}}，表示运算符后的空间量。
- `separator`
    - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示运算符是否是一个分隔符（例如逗号）。该属性没有视觉效果。
- `stretchy`
    - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示运算符是否拉伸到相邻元素的大小。
- `symmetric`
    - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml-specific_types)，表示拉伸运算符是否应该在虚拟的数学轴（中心分数线）周围垂直对称。

> **备注：** 对于 `lspace`、`maxsize`、`minsize` 和 `rspace` 属性，一些浏览器可能还接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Values#legacy_mathml_lengths)。

## 示例

```html-nolint
<math display="block">
  <mrow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mrow>
</math>

<math display="block">
  <mrow>
    <mo>[</mo> <!-- default form value: prefix -->
    <mrow>
      <mn>0</mn>
      <mo>;</mo> <!-- default form value: infix -->
      <mn>1</mn>
    </mrow>
    <mo>)</mo> <!-- default form value: postfix -->
  </mrow>
</math>
```

{{ EmbedLiveSample('mo_example', 700, 200, "", "") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
