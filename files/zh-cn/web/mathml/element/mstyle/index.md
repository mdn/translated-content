---
title: <mstyle>
slug: Web/MathML/Element/mstyle
l10n:
  sourceCommit: d377045efe5d13531b73f8823301f8cc1dc58f84
---

{{MathMLRef}}

**`<mstyle>`** [MathML](/zh-CN/docs/Web/MathML) 元素用于更改其子元素的样式。

> [!NOTE]
> 从历史上看，该元素接受几乎所有的 MathML 属性，并用于覆盖其后代的默认属性值。后来，它被限制为仅包括在现有网页中使用的一些相关的样式属性。如今，这些样式属性是[所有 MathML 元素共有的](/zh-CN/docs/Web/MathML/Global_attributes)，因此 `<mstyle>` 实际上等同于一个 [`<mrow>`](/zh-CN/docs/Web/MathML/Element/mrow) 元素。然而，`<mstyle>` 可能仍然关系到浏览器之外的 MathML 实现的兼容性。

## 属性

此元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)以及以下已弃用的属性：

- `background` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 使用 {{cssxref("background-color")}} 替代。
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 使用 {{cssxref("color")}} 替代。
- `fontsize` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 使用 {{cssxref("font-size")}} 替代。
- `fontstyle` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 使用 {{cssxref("font-style")}} 替代。
- `fontweight` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 使用 {{cssxref("font-weight")}} 替代。
- `scriptminsize` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 由于 `scriptlevel` 的更改，指定允许的最小字体大小。默认值为 `8pt`。
- `scriptsizemultiplier` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 指定用于调整字体大小的乘数，由于 `scriptlevel` 的更改。默认值为 `0.71`。

## 示例

### 映射到 CSS 的属性

以下示例使用[全局属性](/zh-CN/docs/Web/MathML/Global_attributes) `displaystyle` 和 `mathcolor` 分别覆盖 `<munder>` 和 `<munderover>` 子元素的 [`math-style`](/zh-CN/docs/Web/CSS/math-style) 和 [`color`](/zh-CN/docs/Web/CSS/color)：

```html
<math display="block">
  <mstyle displaystyle="false" mathcolor="teal">
    <munder>
      <mo>∑</mo>
      <mi>I</mi>
    </munder>
    <munderover>
      <mo>∏</mo>
      <mrow>
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mi>N</mi>
    </munderover>
  </mstyle>
</math>
```

{{EmbedLiveSample('映射到 CSS 的属性')}}

### 旧版附加符号属性

以下示例显示一个公式，其中 [`font-size`](/zh-CN/docs/Web/CSS/font-size) 设置为 `128pt`。它包含了嵌套的上标中放置的数字，以及带有旧属性 `scriptsizemultiplier` 和 `scriptminsize` 的 `<mstyle>` 元素。每当进入上标时，`font-size` 就会乘以 `0.5`，只要这不会使其小于 `16pt`。

```html
<math display="block" style="font-size: 128pt">
  <mstyle scriptsizemultiplier="0.5" scriptminsize="16pt">
    <msup>
      <mn>2</mn>
      <msup>
        <mn>2</mn>
        <msup>
          <mn>2</mn>
          <msup>
            <mn>2</mn>
            <msup>
              <mn>2</mn>
              <msup>
                <mn>2</mn>
                <mn>2</mn>
              </msup>
            </msup>
          </msup>
        </msup>
      </msup>
    </msup>
  </mstyle>
</math>
```

{{EmbedLiveSample('旧版附加符号属性', 700, 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
