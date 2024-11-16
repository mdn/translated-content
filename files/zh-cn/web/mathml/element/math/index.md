---
title: <math>
slug: Web/MathML/Element/math
---

{{MathMLRef}}

**`<math>`** [MathML](/zh-CN/docs/Web/MathML) 元素是顶级的 MathML 元素，用于编写单个数学公式。可以将其放在允许[流式内容](/zh-CN/docs/Web/HTML/Content_categories#流式内容)的 HTML 内容中。

> [!NOTE]
> 参阅[编写 MathML 页面](/zh-CN/docs/Web/MathML/Authoring#使用_mathml)以了解如何正确地在网页中集成 MathML 公式，有关更多的演示，请参阅[示例](/zh-CN/docs/Web/MathML/Examples)页面。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)和以下属性：

- `display`

  - : 该[枚举](/zh-CN/docs/Glossary/Enumerated)属性指定了应如何渲染封闭的 MathML 标记。其可以是以下值之一：

    - `block`，这意味着该元素将显示在当前文本范围之外的块中，并将 [`math-style`](/zh-CN/docs/Web/CSS/math-style) 设置为 `normal`。
    - `inline`，这意味着该元素将显示在当前的文本范围内，并将 [`math-style`](/zh-CN/docs/Web/CSS/math-style) 设置为 `compact`。

    如果没有指定该属性，其默认值为 `inline`。

## 示例

该示例包含两个 MathML 公式。第一个在其自己的居中的块中渲染，根据需要占用足够的空间。第二个公式则在其文本段落中渲染，缩小其尺寸和间距以最小化其高度。

```html
<p>
  无穷级数
  <math display="block">
    <mrow>
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
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
  </math>
  的和等于实数
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac></math
  >。
</p>
```

{{ EmbedLiveSample('示例', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML 顶级元素：{{ HTMLElement("html") }}
- SVG 顶级元素：{{ SVGElement("svg") }}
