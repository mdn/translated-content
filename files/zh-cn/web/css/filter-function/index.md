---
title: <filter-function>
slug: Web/CSS/filter-function
---
{{cssref}}

**`<filter-function>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) 代表可以改变输入图像外观的图形效果。它可以用于{{cssxref("filter")}} 和 {{cssxref("backdrop-filter")}} 属性。

## 语法

`<filter-function>` 数据类型由下列过滤器函数之一指定的。每个函数需要一个参数，如果参数无效，结果不会被改变，如同没有使用过滤器一样。

- [`blur()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur)
  - : 模糊图像
- [`brightness()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness)
  - : 让图像更明亮或更暗淡
- [`contrast()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast)
  - : 增加或减少图像的对比度
- [`drop-shadow()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)
  - : 在图像后方应用投影
- [`grayscale()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale)
  - : 将图像转为灰度图
- [`hue-rotate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate)
  - : 改变图像的整体色调
- [`invert()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert)
  - : 反转图像颜色
- [`opacity()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity)
  - : 改变图像透明度
- [`saturate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate)
  - : 超饱和或去饱和输入的图像
- [`sepia()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia)
  - : 将图像转为棕褐色

## 规范

{{Specifications}}

## 相关参考

- 使用此数据类型的属性：{{cssxref("filter")}} 以及 {{cssxref("backdrop-filter")}}
