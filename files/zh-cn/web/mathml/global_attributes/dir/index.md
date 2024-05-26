---
title: dir
slug: Web/MathML/Global_attributes/dir
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

**`dir`** [全局属性](/zh-CN/docs/Web/MathML/Global_attributes)是一个[枚举](/zh-CN/docs/Glossary/Enumerated)属性，表示 MathML 元素的方向性。

## 语法

```html
<!-- Moroccan style -->
<math dir="ltr">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>3</mn>
    <mi>ب</mi>
  </msup>
</math>

<!-- Maghreb/Machrek style -->
<math dir="rtl">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>٣</mn>
    <mi>ب</mi>
  </msup>
</math>
```

### 可选值

- `ltr`，表示 _从左到右_，用于将数学表达式从左到右渲染（例如，英语或摩洛哥风格）；
- `rtl`，表示 _从右到左_，用于将数学表达式从右到左渲染（例如，摩洛哥或马赫雷克风格）；

> **备注：**
>
> - 如果存在 CSS 页面并且元素支持这些属性，则此属性可以被 CSS 属性 {{ cssxref("direction") }} 覆盖。
> - 由于数学的方向性与其内容而不是其呈现方式在语义上相关，因此建议 Web 开发人员在可能的情况下使用此属性而不是相关的 CSS 属性。这样，即使在不支持 CSS 或将 CSS 禁用的浏览器上，公式也将正确显示。
> - `dir` 属性用于设置数学公式的方向性，在阿拉伯语世界通常是从右到左的。然而，从右到左书写的语言通常嵌入从左到右书写的数学内容。因此，默认情况下，HTML `dir` 属性中的 auto 关键字不被识别，并且[用户代理样式表](/zh-CN/docs/Web/CSS/Cascade#user-agent_stylesheets)会重置 [math](/zh-CN/docs/Web/MathML/Element/math) 元素上的方向属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/MathML/Global_attributes)
- {{cssxref("direction")}}
- HTML [`dir`](/zh-CN/docs/Web/HTML/Global_attributes#dir) 全局属性
