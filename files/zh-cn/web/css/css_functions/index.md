---
title: CSS 值函数
slug: Web/CSS/CSS_Functions
---

{{CSSRef}}

**CSS 值函数**是调用特殊数据处理或计算的语句，以返回一个 CSS 属性的 [CSS](/zh-CN/docs/Web/CSS) [值](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)。CSS 值函数代表更复杂的[数据类型](/zh-CN/docs/Web/CSS/CSS_Types)，它们可能需要一些输入参数来计算返回值。

## 语法

```css
selector {
  property: function([argument]? [, argument]!);
}
```

值的语法以**函数名称**开始，后面是一个左括号 `(`。接下来是参数，然后用闭合小括号 `)` 结束函数。

函数可以接受多个参数，这些参数的格式与 CSS 属性值类似。允许有空白字符，但在括号内是可选的。在一些函数符号中，多个参数用逗号隔开，而其他参数则使用空格。

> **备注：** CSS 值函数是作为属性值使用的，不应该与伪类相混淆。[函数式伪类](/zh-CN/docs/Web/CSS/Pseudo-classes#函数式伪类)、[语言伪类](/zh-CN/docs/Web/CSS/Pseudo-classes#语言的伪类)和几种[树状结构伪类](/zh-CN/docs/Web/CSS/Pseudo-classes#树结构的伪类)都需要参数值，但它们不是值函数。[条件 @ 规则](/zh-CN/docs/Web/CSS/At-rule#条件规则组)也不是值函数；括号是用来分组的。

## 转换函数

{{CSSxRef("&lt;transform-function&gt;")}} CSS [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)代表外观变换。它被用作 {{CSSxRef("transform")}} 属性的一个值。

### 转换函数

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : 水平移动一个元素。
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : 垂直移动一个元素。
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : 沿 z 轴方向移动一个元素。
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : 在 2D 平面上移动一个元素。
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : 在 3D 空间中移动一个元素。

### 旋转函数

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : 沿水平轴旋转元素。
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : 沿垂直轴旋转元素。
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : 沿 z 轴旋转元素。
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : 围绕 2D 平面的一个定点旋转一个元素。
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : 围绕 3D 平面的一个定轴旋转一个元素。

### 缩放函数

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : 沿水平方向缩放元素。
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : 沿垂直方向缩放元素。
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : 沿 z 轴方向缩放元素。
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : 在 2D 平面上缩放元素。
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : 在 3D 空间中缩放元素。

### 倾斜函数

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : 沿水平方向倾斜元素。
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : 沿竖直方向倾斜元素。
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : 在 2D 平面上倾斜元素。

### 矩阵函数

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : 描述一个齐次的二维变换矩阵。
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : 以 4x4 齐次矩阵的形式描述一个三维变换。

### 透视函数

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : 设置用户与平面 z=0 之间的距离。

## 数学函数

数学函数允许将 CSS 数字值写成数学表达式。

### 基本运算

- {{CSSxRef("calc", "calc()")}}
  - : 在数字值上进行基本的算术运算。

### 比较函数

- {{CSSxRef("min", "min()")}}
  - : 计算一系列值的最小值。
- {{CSSxRef("max", "max()")}}
  - : 计算一系列值的最大值。
- {{CSSxRef("clamp", "clamp()")}}
  - : 计算最小值、中间值、最大值的中值。

### 阶跃值函数

- {{CSSxRef("round", "round()")}} {{Experimental_Inline}}
  - : 根据舍入策略计算一个舍入的数字。
- {{CSSxRef("mod", "mod()")}} {{Experimental_Inline}}
  - : 计算一个数除以另一个数的模（与除数的符号相同）。
- {{CSSxRef("rem", "rem()")}} {{Experimental_Inline}}
  - : 计算一个数字除以另一个数字的余数（与被除数的符号相同）。

### 三角函数

- {{CSSxRef("sin", "sin()")}}
  - : 计算一个数的三角正弦值。
- {{CSSxRef("cos", "cos()")}}
  - : 计算一个数的三角余弦值。
- {{CSSxRef("tan", "tan()")}}
  - : 计算一个数的三角正切值。
- {{CSSxRef("asin", "asin()")}}
  - : 计算一个数的三角反正弦值。
- {{CSSxRef("acos", "acos()")}}
  - : 计算一个数的三角反余弦值。
- {{CSSxRef("atan", "atan()")}}
  - : 计算一个数的三角反正切值。
- {{CSSxRef("atan2", "atan2()")}}
  - : 计算平面内两个数字的三角反正切值。

### 指数函数

- {{CSSxRef("pow", "pow()")}}
  - : 计算基数的幂次方值。
- {{CSSxRef("sqrt", "sqrt()")}}
  - : 计算一个数的平方根。
- {{CSSxRef("hypot", "hypot()")}}
  - : 计算其参数平方之和的平方根。
- {{CSSxRef("log", "log()")}}
  - : 计算一个数的对数值。
- {{CSSxRef("exp", "exp()")}}
  - : 计算一个数的 `e` 次方值。

### 符号函数

- {{CSSxRef("abs", "abs()")}} {{Experimental_Inline}}
  - : 计算一个数的绝对值。
- {{CSSxRef("sign", "sign()")}} {{Experimental_Inline}}
  - : 计算一个数的符号值（正值或负值）。

## 过滤器函数

{{CSSxRef("&lt;filter-function&gt;")}} CSS [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示可以改变输入图像的外观的图形效果。它被用于 {{CSSxRef("filter")}} 和 {{CSSxRef("backdrop-filter")}} 属性。

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : 增加图像的高斯模糊度。
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : 增加或减少图像的亮度。
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : 增加或减少图像的对比度。
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : 在图像背后应用阴影。
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : 转换图像为灰度图。
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : 改变图像的整体色调。
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : 反转图像的颜色。
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : 增加图像的透明度。
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : 改变图像的整体饱和度。
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : 增加图像偏棕褐色的程度。

## 颜色值函数

{{CSSxRef("color_value","&lt;color&gt;")}} CSS [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)指定了不同的颜色表示方法。

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : 根据红、绿、蓝和 alpha（透明度）成分来定义一个给定的颜色。
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : 根据色调、饱和度、亮度和 alpha（透明度）成分来定义一个给定的颜色。
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : 根据色调、白度和黑度成分来定义一个给定的颜色。
- {{CSSxRef("color_value/lch", "lch()")}} {{Experimental_Inline}}
  - : 根据亮度、色度和色调成分来定义一个给定的颜色。
- {{CSSxRef("color_value/oklch", "oklch()")}} {{Experimental_Inline}}
  - : 根据亮度、色度、色调和 alpha（透明度）成分来定义一个给定的颜色。
- {{CSSxRef("color_value/lab", "lab()")}} {{Experimental_Inline}}
  - : 根据实验室色彩空间中的亮度、a 轴距离和 b 轴距离来定义一个给定的颜色。
- {{CSSxRef("color_value/oklab", "oklab()")}} {{Experimental_Inline}}
  - : 根据实验室色彩空间中的亮度、a 轴距离、b 轴距离和 alpha（透明度）来定义一个给定的颜色。
- {{CSSxRef("color_value/color", "color()")}} {{Experimental_Inline}}
  - : 指定一个特定的色彩空间，而不是隐含的 sRGB 色彩空间。
- {{CSSxRef("color_value/color-mix", "color-mix()")}} {{Experimental_Inline}}
  - : 在一个给定的色彩空间中，将两个颜色值按给定的数量混合。
- {{CSSxRef("color_value/color-contrast", "color-contrast()")}} {{Experimental_Inline}}
  - : 从一个颜色列表中选择最高的颜色对比度，与一个基础颜色值相比较。
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}} {{Experimental_Inline}}
  - : 以独立于设备的方式定义 CMYK 颜色。

## 图像函数

{{CSSxRef("&lt;image&gt;")}} CSS [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)提供了图像或渐变的图形化表示。

### 渐变函数

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : 线性渐变沿着一条假想线逐渐过渡颜色。
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : 径向渐变从一个中心点（原点）逐步过渡颜色。
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : 锥形渐变是在一个圆周上逐步过渡颜色。
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : 类似于 `linear-gradient()`，接受相同的参数，但它在所有方向上无限重复使用色标，以覆盖其整个容器。
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : 类似于 `radial-gradient()`，接受相同的参数，但它在所有方向上无限重复使用色标，以覆盖其整个容器。
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : 类似于 `conic-gradient()`，接受相同的参数，但它在所有方向上无限重复使用色标，以覆盖其整个容器。

### 图像函数

- {{CSSxRef("image/image","image()")}} {{Experimental_Inline}}
  - : 定义一个 {{CSSxRef("&lt;image&gt;")}}，与 {{CSSxRef("url", "url()")}} 函数类似，但增加了一些功能，包括指定图片的方向性和首选图片不被支持时的后备图片。
- {{CSSxRef("image/image-set","image-set()")}}
  - : 从一组给定的 CSS 图片中挑选最合适的图片，主要用于高像素密度的屏幕。
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : 以定义的透明度混合两个或多个图像。
- {{CSSxRef("element", "element()")}} {{Experimental_Inline}}
  - : 定义一个由任意 HTML 元素生成的 {{CSSxRef("&lt;image&gt;")}} 值。
- {{CSSxRef("image/paint", "paint()")}}
  - : 定义了一个用 PaintWorklet 生成的 {{CSSxRef("&lt;image&gt;")}} 值。

## 计数器函数

CSS 计数器函数通常与 {{CSSxRef("content")}} 属性一起使用，不过理论上，只要支持 {{CSSxRef("&lt;string&gt;")}}，就可以使用。

- {{CSSxRef("counter", "counter()")}}
  - : 如果存在计数器，返回一个代表指定计数器当前值的字符串。
- {{CSSxRef("counters", "counters()")}}
  - : 启用嵌套的计数器，如果存在，返回一个拼接字符串，代表命名计数器的当前值。
- {{CSSxRef("symbols", "symbols()")}}
  - : 定义内联的计数器样式，直接作为一个属性的值。

## 形状函数

{{CSSxRef("&lt;basic-shape&gt;")}} CSS [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示一个图形形状。它被用于 {{CSSxRef("clip-path")}}、{{CSSxRef("offset-path")}} 和 {{CSSxRef("shape-outside")}} 属性中。

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : 定义一个圆形。
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : 定义一个椭圆形。
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : 定义一个嵌入矩形。
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : 定义一个多边形。
- {{CSSxRef("path", "path()")}}
  - : 接受 SVG 路径字符串，以便绘制一个形状。

## 引用函数

以下函数被用作属性的值，以引用其他地方定义的值。

- {{CSSxRef("attr", "attr()")}}
  - : 使用定义在 HTML 元素上的属性值。
- {{CSSxRef("env", "env()")}}
  - : 使用用户代理定义的环境变量。
- {{CSSxRef("url", "url()")}}
  - : 使用指定 URL 定义的文件。
- {{CSSxRef("var", "var()")}}
  - : 使用自定义属性值，而不是其他属性值的任何部分。

## 网格函数

以下函数用于定义一个 [CSS 网格](/zh-CN/docs/Web/CSS/CSS_grid_layout)。

- {{CSSxRef("fit-content", "fit-content()")}}
  - : 根据公式 `min(maximum size, max(minimum size, argument))` 将一个给定的尺寸固定在一个可用的尺寸范围中。
- {{CSSxRef("minmax", "minmax()")}}
  - : 定义了一个大于等于 _min_ 且小于等于 _max_ 的尺寸范围。
- {{CSSxRef("repeat", "repeat()")}}
  - : 代表轨道列表的一个重复片段，允许有大量的列或行表现出重复的模式。

## 字体函数

CSS 字体函数与 {{CSSxRef("font-variant-alternates")}} 属性一起使用，可以控制备用字形的使用。

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : 启用单个字符的风格替代。该参数是一个映射到数字的字体特定名称。它对应于 OpenType 值 `salt`，如 `salt 2`。
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : 启用字符集的风格选择。该参数是一个映射到数字的字体特定名称。它对应于 OpenType 值 `ssXY`，例如 `ss02`。
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : 为字符启用特定的风格选择。它类似于 `styleset()`，但不会为一组字符创建连贯的字形；单个字符会有独立的、不一定连贯的风格。参数是一个映射到数字的特定字体名称。它对应于 OpenType 值 `cvXY`，例如 `cv02`。
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : 启用 [swash](https://en.wikipedia.org/wiki/Swash_%28typography%29) 字形。该参数是一个映射到数字的字体特定名称。它对应于 OpenType 值 `swsh` 和 `cswh`，例如 `swsh 2` 和 `cswh 2`。
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : 启用诸如 [fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) 和其他丁字形的装饰物。该参数是一个映射到数字的字体特定名称。它对应于 OpenType 值 `ornm`，例如 `ornm 2`。
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : 启用注解，如圈出的数字或倒置的字符。该参数是一个映射到数字的字体特定名称。它对应于 OpenType 值 `nalt`，例如 `nalt 2`。

## 缓动函数

以下函数在过渡和动画属性中作为一个值使用。

- {{cssxref("easing-function#三次贝塞尔缓动函数", "cubic-bezier()")}}
  - : 定义三次贝塞尔曲线的缓动函数。
- {{cssxref("easing-function#阶跃缓动函数", "steps()")}}
  - : 在过渡中迭代若干次定格，每次定格停留相同的时间。

## 动画函数

以下函数被用作不同 {{CSSxRef("animation")}} 属性的值。

- {{cssxref("animation-timeline/scroll", "scroll()")}} {{Experimental_Inline}}
  - : 设置一个元素的 {{cssxref("animation-timeline")}}，使其依赖于最近的父级（有该滚动条）或根容器的特定轴上的滚动条。

## 参见

- [CSS 值和单位](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 介绍：值和单位](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units)
