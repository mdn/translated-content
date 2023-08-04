---
title: <msub>
slug: Web/MathML/Element/msub
---

{{MathMLRef}}

[MathML](/zh-CN/docs/Web/MathML) **`<msub>`** 元素用于为表达式附加下标。

使用语法如下：`<msub> base subscript </msub>`。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)和以下已弃用的属性：

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 值，表示下标基线向下移动的最小距离。

> **备注：** 对于 `subscriptshift` 属性，一些浏览器可能也会接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Values#旧版_mathml_长度)。

## 示例

```html
<math display="block">
  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>
</math>
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("msup") }}（上标）
- {{ MathMLElement("msubsup") }}（上下标）
- {{ MathMLElement("mmultiscripts") }}（四角标，张量式标记）
