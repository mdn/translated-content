---
title: <msubsup>
slug: Web/MathML/Element/msubsup
---

{{MathMLRef}}

[MathML](/zh-CN/docs/Web/MathML) `<msubsup>` 元素用于为表达式同时附加上标和下标。

使用语法如下：`<msubsup> base subscript superscript </msubsup>`。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)和以下已弃用的属性：

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 值，表示下标基线向下移动的最小距离。
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 值，表示上标基线向上移动的最小距离。

> **备注：** 对于 `subscriptshift` 和 `superscriptshift` 属性，一些浏览器可能也会接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Values#旧版_mathml_长度)。

## 示例

```html
<math display="block">
  <msubsup>
    <mo>&#x222B;<!-- 积分符号 --></mo>
    <mn>0</mn>
    <mn>1</mn>
  </msubsup>
</math>
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("msub") }}（上标）
- {{ MathMLElement("msup") }}（下标）
- {{ MathMLElement("mmultiscripts") }}（四角标，张量式标记）
