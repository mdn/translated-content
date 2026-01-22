---
title: dir
slug: Web/MathML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`dir`** [全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)是一个表示 MathML 元素的方向的[枚举](/zh-CN/docs/Glossary/Enumerated)属性。

## 语法

```html
<!-- 摩洛哥风格 -->
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

<!-- 马格里布/马什里克风格 -->
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

### 值

- `ltr`，表示*从左到右*，用于将数学表达式从左到右渲染（例如，英语或摩洛哥风格）；
- `rtl`，表示*从右到左*，用于将数学表达式从右到左渲染（例如，摩洛哥或马什里克风格）；

> [!NOTE]
>
> - 如果存在 CSS 页面并且元素支持这些属性，则此属性可以被 CSS 属性 {{ cssxref("direction") }} 覆盖。
> - 数学的方向性与其内容的语义相关，而不是与其表现形式相关，因此建议 Web 开发者尽可能使用这一属性，而不是相关的 CSS 属性。这样，即使在不支持 CSS 或已停用 CSS 的浏览器上，公式也能正确显示。
> - `dir` 属性用于设置数学公式的方向性，在阿拉伯语世界通常是从右到左的。然而，从右到左书写的语言通常嵌入从左到右书写的数学内容。因此，默认情况下，HTML `dir` 属性中的 `auto` 关键字不被识别，并且[用户代理样式表](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction#用户代理样式表)会重置 [`math`](/zh-CN/docs/Web/MathML/Reference/Element/math) 元素上的方向属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)
- {{cssxref("direction")}}
- HTML [`dir`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#dir) 全局属性
