---
title: <msup>
slug: Web/MathML/Element/msup
---

{{MathMLRef}}

MathML **`<msup>`** 元素用于为表达式加上标。

语法如下：`<msup> base superscript </msup>`。

## 属性

- `class`, `id`, `style`
  - : 用来供[样式表](/zh-CN/docs/Web/CSS)使用。
- `href`
  - : 用来设置标签点击后跳转的链接。
- `mathbackground`
  - : 用来设置背景色，可以使用 `#rgb`、`#rrggbb` 或者 [HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- `mathcolor`
  - : 用来设置文字颜色，同样可以使用 `#rgb`、`#rrggbb` 或者 [HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- `superscriptshift` {{deprecated_inline}}
  - : 用来设置上标相对于表达式的基线的最小距离，它是一个[长度值](/zh-CN/docs/MathML/Attributes/Values#Lengths)。
    此属性已被弃用，且将在未来被删除。

## 例子

下述代码表示：![x1](/files/3203/msup.png)

您的浏览器的渲染结果：<math> <msup><mi>X</mi> <mn>2</mn></msup></math>

```html
<math>

  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>

</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Gecko 说明

- 从 Gecko 26.0 {{geckoRelease("26")}} 开始，不再支持使用 \<none /> 作为子元素。并且渲染结果和 {{MathMLElement("msub")}} 和 {{MathMLElement("mmultiscripts")}} 这些等价配置更加接近，同时修复了一个关于 superscriptshift 属性错误使用的问题 (参阅 {{bug("827713")}}).

## 参见

- {{ MathMLElement("msub") }}（下标）
- {{ MathMLElement("msubsup") }}（上下标）
- {{ MathMLElement("mmultiscripts") }}（四角标，张量式标记）
