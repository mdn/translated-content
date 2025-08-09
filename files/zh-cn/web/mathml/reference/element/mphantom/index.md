---
title: <mphantom>
slug: Web/MathML/Reference/Element/mphantom
l10n:
  sourceCommit: 67cbfbf7a408e7180137b286247025bc40716642
---

**`<mphantom>`** [MathML](/zh-CN/docs/Web/MathML) 元素渲染为不可见内容，但仍保留尺寸（如高度、宽度和基线位置）。

## 属性

此元素接受[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)。

## 示例

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>+</mo>
    <mphantom>
      <mi>y</mi>
      <mo>+</mo>
    </mphantom>
    <mi>z</mi>
  </mrow>
</math>
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}
