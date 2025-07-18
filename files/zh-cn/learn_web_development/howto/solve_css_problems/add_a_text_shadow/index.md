---
title: 如何为文本添加阴影
short-title: 为文本添加阴影
slug: Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

在本指南中，你可以了解如何为页面上的任意文本添加阴影效果。

## 为文本添加阴影

在我们的[为盒子添加阴影的指南](/zh-CN/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)中，你可以了解如何为页面上的任意元素添加阴影。然而，那种技术只会为元素的外部盒子添加阴影。要为盒子内部的文本添加投影，你需要使用不同的 CSS 属性 —— {{cssxref("text-shadow")}}。

`text-shadow` 属性包含多个值：

- x 轴方向的偏移量
- y 轴方向的偏移量
- 模糊半径
- 颜色

在下面的示例中，我们将 x 轴偏移设置为 2px，y 轴偏移设置为 4px，模糊半径为 4px，颜色为半透明蓝色。你可以尝试不同的值，看看阴影效果如何变化。

```html live-sample___text-shadow
<div class="wrapper">
  <h1>为文本添加阴影</h1>
</div>
```

```css live-sample___text-shadow
h1 {
  color: royalblue;
  text-shadow: 2px 4px 4px rgb(46 91 173 / 0.6);
}
```

{{EmbedLiveSample("text-shadow")}}

> [!NOTE]
> 使用文本阴影时很容易让文本变得难以阅读。请确保你的选择不会影响文本的可读性，并为那些难以辨认低对比度文本的访问者提供足够的[颜色对比度](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)。
