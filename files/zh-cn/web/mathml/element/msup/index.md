---
title: <msup>
slug: Web/MathML/Element/msup
---

{{MathMLRef}}

[MathML](/zh-CN/docs/Web/MathML) **`<msup>`** 元素用于为表达式附加上标。

使用语法如下：`<msup> base superscript </msup>`。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)和以下已弃用的属性：

- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 值，表示上标基线向上移动的最小距离。

> **备注：** 对于 `superscriptshift` 属性，一些浏览器可能也会接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Values#旧版_mathml_长度)。

## 示例

```html
<math display="block">
  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>
</math>
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("msub") }}（下标）
- {{ MathMLElement("msubsup") }}（上下标）
- {{ MathMLElement("mmultiscripts") }}（四角标，张量式标记）
