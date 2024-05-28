---
title: <mrow>
slug: Web/MathML/Element/mrow
l10n:
  sourceCommit: 67cbfbf7a408e7180137b286247025bc40716642
---

{{MathMLRef}}

**`<mrow>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于对连续多行表达式的不同子表达式进行分组，一条子表达式通常算作一行，至少包含一或多个[操作符](/zh-CN/docs/MathML/Element/mo)与其运算对象（比如 {{ MathMLElement("mi") }} 和 {{ MathMLElement("mn") }}）。此元素呈现为包含其内容的水平行。

在编写 MathML 表达式时，你应该使用 `<mrow>` 将表达式中的元素分组，就像它们在数学解释时的分成一行行一样。正确的分组有助于表达式的呈现，具体体现在以下几个方面：

- 如果有需要，它会改变间距来改善显示效果。
- 通过自动化系统，如计算机代数系统和音频渲染器（automated systems such as computer algebra systems and audio renderers），它能简化表达式的解释（interpretation）过程。

## 属性

该元素接受[全局的 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)。

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
