---
title: <maction>
slug: Web/MathML/Reference/Element/maction
l10n:
  sourceCommit: 024a9231e504e2c0d4051f47de36567e82ca432f
---

{{Deprecated_Header}}

**`<maction>`** [MathML](/zh-CN/docs/Web/MathML) 元素允许将行为绑定到数学表达式上。默认情况下，只有第一个子元素会被渲染，但是一些浏览器可能会根据 `actiontype` 和 `selection` 属性来实现自定义行为。

> [!NOTE]
> 从历史的角度来看，该元素提供了一种使 MathML 公式可以交互的机制。但如今，建议使用 [JavaScript](/zh-CN/docs/Web/JavaScript) 和其他 Web 技术来实现这种用例。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)以及以下属性：

- `actiontype` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 指定该元素发生的行为。某些浏览器会根据以下值实现特殊行为：
    - `statusline`：如果*表达式*被点击或者读者将指针移至其上，将会把*消息*（message）发送到浏览器的状态栏。语法如下：`<maction actiontype="statusline"> expression message </maction>`。
    - `toggle`：当子表达式被点击时，选中的子表达式会交替显示。因此，每次单击都会增加 `selection` 的值。语法如下：`<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`。

- `selection` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 当前可见的子元素，仅适用于 `actiontype="toggle"` 或非标准的 `actiontype` 值。默认值为 `1`，即第一个子元素。

## 示例

以下示例演示了如何使用“toggle”这个 `actiontype`：

```html
<p>
  尝试多次点击这个公式：

  <math display="block">
    <maction actiontype="toggle">
      <mfrac>
        <mn>6</mn>
        <mn>8</mn>
      </mfrac>

      <mfrac>
        <mrow>
          <mn>3</mn>
          <mo>×</mo>
          <mn>2</mn>
        </mrow>
        <mrow>
          <mn>4</mn>
          <mo>×</mo>
          <mn>2</mn>
        </mrow>
      </mfrac>

      <mfrac>
        <mn>3</mn>
        <mn>4</mn>
      </mfrac>
    </maction>
  </math>
</p>
```

{{EmbedLiveSample('示例', 700, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
