---
title: <mo>
slug: Web/MathML/Element/mo
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

**`<mo>`** [MathML](/zh-CN/docs/Web/MathML) 元素表示广义上的**运算符**。除了严格数学意义上的运算符外，该元素还包括像括号、分隔符（如，逗号和分号）或“绝对值”符号这一类的“运算符”。

## 属性

除了[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)外，该元素接受以下属性（[其默认值取决于运算符的形式和内容](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator)）：

- `accent` {{Non-standard_Inline}}
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示运算符在被用作[下标](/zh-CN/docs/Web/MathML/Element/munder)或[上标](/zh-CN/docs/Web/MathML/Element/mover)时是否应该被着重标识（即被放大并靠近基础表达式）。
- `fence`
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示运算符是否是围栏（例如括号）。该属性没有视觉效果。
- `largeop`
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示当 [`math-style`](/zh-CN/docs/Web/CSS/math-style)设置为 `normal` 时是否应该放大运算符。
- `lspace`
  - : 一个 {{cssxref("length-percentage")}}，表示运算符前的空间量。
- `maxsize`
  - : 一个 {{cssxref("length-percentage")}}，表示运算符在可拉伸时的最大大小。
- `minsize`
  - : 一个 {{cssxref("length-percentage")}}，表示运算符在可拉伸时的最小大小。
- `movablelimits`
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示附加的下标和上标在 [`math-style`](/zh-CN/docs/Web/CSS/math-style) 设置为 `compact` 时是否需要移动到上下角标的位置。
- `rspace`
  - : 一个 {{cssxref("length-percentage")}}，表示运算符后的空间量。
- `separator`
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示运算符是否是一个分隔符（例如逗号）。该属性没有视觉效果。
- `stretchy`
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示运算符是否拉伸到相邻元素的大小。
- `symmetric`
  - : 一个 [`<boolean>`](/zh-CN/docs/Web/MathML/Values#mathml_特定类型)，表示拉伸运算符是否应该与虚拟的数学轴（中心分数线）垂直对称。

> [!NOTE]
> 对于 `lspace`、`maxsize`、`minsize` 和 `rspace` 属性，一些浏览器可能还接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Values#旧版_mathml_长度)。

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
    <mo>[</mo> <!-- 默认 form 值：prefix -->
    <mrow>
      <mn>0</mn>
      <mo>;</mo> <!-- 默认 form 值：infix -->
      <mn>1</mn>
    </mrow>
    <mo>)</mo> <!-- 默认 form 值：postfix -->
  </mrow>
</math>
```

{{ EmbedLiveSample('示例', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
