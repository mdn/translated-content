---
title: 插值
slug: Glossary/Interpolation
l10n:
  sourceCommit: 8dfcc6f762e9a478a16dfc4ff4b8f5c8cdefab97
---

{{GlossarySidebar}}

插值是一种基于已知数据点估计新数据点的方法。

在动画中，插值计算用于更改 HTML 属性（如高度、宽度等）的中间值。颜色的插值定义了在颜色混合、渐变、合成、滤镜、过渡、动画和颜色函数中的中间颜色值。

插值不一定是线性的。大多数插入的值是真实的浮点数；但是，当两个值之间没有中间值时，例如只能接受整数的值，[插值就是离散的](/zh-CN/docs/Web/CSS/integer#插值)。插值的过程还取决于动画中的[缓动函数](/zh-CN/docs/Web/CSS/easing-function)和色标，以及渐变中 {{CSSXref("color-interpolation-method", "color")}} 和 {{CSSXref("hue-interpolation-method", "hue")}} 的插值方法。

在 JavaScript 中，“[插值](/zh-CN/docs/Web/JavaScript/Reference/Template_literals#string_interpolation)”一词用于描述模板字符串中的字符串替换。

## 参见

- {{SVGAttr("color-interpolation")}} SVG 属性
- {{CSSXref("color-interpolation")}} CSS 属性
- {{CSSXref("color-interpolation-method")}} CSS 数据类型
- {{CSSXref("hue-interpolation-method")}} CSS 数据类型
- {{CSSXref("color_value/color-mix", "color-mix()")}} CSS 函数
- [CSS 中的颜色插值](/zh-CN/docs/Web/CSS/color_value#插值)
- 维基百科上的[插值](https://zh.wikipedia.org/wiki/插值)
- 维基百科上的[字符串插值](https://en.wikipedia.org/wiki/String_interpolation)
