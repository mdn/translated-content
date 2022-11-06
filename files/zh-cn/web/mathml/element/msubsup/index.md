---
title: <msubsup>
slug: Web/MathML/Element/msubsup
---

{{MathMLRef}}

MathML `<msubsup>` 元素用于为表达式同时附加上角标和下角标。

它的语法如下：`<msubsup> base subscript superscript </msubsup>`。

## 属性

- `class`、`id`、`style`
  - : 供[样式](/zh-CN/docs/CSS)使用。
- `href`
  - : Used to set a hyperlink to a specified URI.
- `mathbackground`
  - : 背景颜色。支持 `#rgb`、`#rrggbb` 和 [HTML 颜色名称](/zh-CN/docs/CSS/color_value#Color_Keywords)。
- `mathcolor`
  - : 文本颜色。支持 `#rgb`、`#rrggbb` 和 [HTML 颜色名称](/zh-CN/docs/CSS/color_value#Color_Keywords)。
- `subscriptshift` {{deprecated_inline}}
  - : The minimum space by which to shift the subscript below the baseline of the expression, as a [length value.](/zh-CN/docs/MathML/Attributes/Values#Lengths)
    This attribute is deprecated and will be removed in the future.
- `superscriptshift` {{deprecated_inline}}
  - : The minimum space by which to shift the superscript above the baseline of the expression, as a [length value.](/zh-CN/docs/MathML/Attributes/Values#Lengths)
    This attribute is deprecated and will be removed in the future.

## 示例

示例渲染结果：

![x1](msubsup.png)

当前浏览器中的渲染结果：<math displaystyle="true"> <msubsup><mo>∫</mo> <mn>0 </mn><mn>1</mn></msubsup></math>

```html
<math displaystyle="true">

  <msubsup>
    <mo> &#x222B;<!-- 积分符号 --> </mo>
    <mn> 0 </mn>
    <mn> 1 </mn>
  </msubsup>

</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("msub") }}（上标）
- {{ MathMLElement("msup") }}（下标）
- {{ MathMLElement("mmultiscripts") }}（Prescript 和 tensor indice）
