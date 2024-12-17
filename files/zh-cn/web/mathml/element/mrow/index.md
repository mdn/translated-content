---
title: <mrow>
slug: Web/MathML/Element/mrow
l10n:
  sourceCommit: 67cbfbf7a408e7180137b286247025bc40716642
---

{{MathMLRef}}

**`<mrow>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于对子表达式进行分组，子表达式通常包含一个或多个[运算符](/zh-CN/docs/Web/MathML/Element/mo)及其操作数（比如 {{ MathMLElement("mi") }} 和 {{ MathMLElement("mn") }}）。此元素呈现为包含其内容的水平行。

在编写 MathML 表达式时，你应该按照表达式的数学解释中所使用的分组方式，使用 `<mrow>` 对表达式中的元素进行分组。正确的分组有助于表达式的呈现，具体体现在以下几个方面：

- 可以通过改变间距和阻止换行来改善显示效果。
- 通过自动化系统，如计算机代数系统和音频渲染器，它能简化表达式的解释（interpretation）过程。

## 属性

该元素接受[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)。

## 示例

```html
<math display="block">
  <mfrac>
    <mrow>
      <!-- 分子内容以一个 mrow 分组 -->
      <mn>1</mn>
      <mo>+</mo>
      <mi>K</mi>
    </mrow>
    <mrow>
      <!-- 分母内容以一个 mrow 分组 -->
      <mn>3</mn>
      <mrow>
        <!-- 用一个 mrow 分组的带括号的表达式 -->
        <mo>(</mo>
        <mrow>
          <!-- 括号内的内容以一个 mrow 分组 -->
          <mi>x</mi>
          <mo>+</mo>
          <mi>y</mi>
        </mrow>
        <mo>)</mo>
      </mrow>
    </mrow>
  </mfrac>
</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML 分组元素：{{ HTMLElement("div") }}
