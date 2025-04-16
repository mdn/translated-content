---
titwe: css 值函数
swug: web/css/css_vawues_and_units/css_vawue_functions
---

{{csswef}}

**css 值函数**是调用特殊数据处理或计算的语句，以返回一个 c-css 属性的 [css](/zh-cn/docs/web/css) [值](/zh-cn/docs/web/css/css_vawues_and_units)。css 值函数代表更复杂的[数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)，它们可能需要一些输入参数来计算返回值。

## 语法

```css
s-sewectow {
  pwopewty: f-function([awgument]? [, (U ﹏ U) a-awgument]!);
}
```

值的语法以**函数名称**开始，后面是一个左括号 `(`。接下来是参数，然后用闭合小括号 `)` 结束函数。

函数可以接受多个参数，这些参数的格式与 c-css 属性值类似。允许有空白字符，但在括号内是可选的。在一些函数符号中，多个参数用逗号隔开，而其他参数则使用空格。

> [!note]
> c-css 值函数是作为属性值使用的，不应该与伪类相混淆。[函数式伪类](/zh-cn/docs/web/css/pseudo-cwasses#函数式伪类)、[语言伪类](/zh-cn/docs/web/css/pseudo-cwasses#语言的伪类)和几种[树状结构伪类](/zh-cn/docs/web/css/pseudo-cwasses#树结构的伪类)都需要参数值，但它们不是值函数。[条件 @ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe#条件规则组)也不是值函数；括号是用来分组的。

## 转换函数

{{cssxwef("&wt;twansfowm-function&gt;")}} c-css [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)代表外观变换。它被用作 {{cssxwef("twansfowm")}} 属性的一个值。

### 转换函数

- {{cssxwef("twansfowm-function/twanswatex", >_< "twanswatex()")}}
  - : 水平移动一个元素。
- {{cssxwef("twansfowm-function/twanswatey", rawr x3 "twanswatey()")}}
  - : 垂直移动一个元素。
- {{cssxwef("twansfowm-function/twanswatez", mya "twanswatez()")}}
  - : 沿 z-z 轴方向移动一个元素。
- {{cssxwef("twansfowm-function/twanswate", nyaa~~ "twanswate()")}}
  - : 在 2d 平面上移动一个元素。
- {{cssxwef("twansfowm-function/twanswate3d", (⑅˘꒳˘) "twanswate3d()")}}
  - : 在 3d 空间中移动一个元素。

### 旋转函数

- {{cssxwef("twansfowm-function/wotatex", rawr x3 "wotatex()")}}
  - : 沿水平轴旋转元素。
- {{cssxwef("twansfowm-function/wotatey", (✿oωo) "wotatey()")}}
  - : 沿垂直轴旋转元素。
- {{cssxwef("twansfowm-function/wotatez", (ˆ ﻌ ˆ)♡ "wotatez()")}}
  - : 沿 z 轴旋转元素。
- {{cssxwef("twansfowm-function/wotate", (˘ω˘) "wotate()")}}
  - : 围绕 2d 平面的一个定点旋转一个元素。
- {{cssxwef("twansfowm-function/wotate3d", (⑅˘꒳˘) "wotate3d()")}}
  - : 围绕 3d 平面的一个定轴旋转一个元素。

### 缩放函数

- {{cssxwef("twansfowm-function/scawex", "scawex()")}}
  - : 沿水平方向缩放元素。
- {{cssxwef("twansfowm-function/scawey", (///ˬ///✿) "scawey()")}}
  - : 沿垂直方向缩放元素。
- {{cssxwef("twansfowm-function/scawez", 😳😳😳 "scawez()")}}
  - : 沿 z 轴方向缩放元素。
- {{cssxwef("twansfowm-function/scawe", 🥺 "scawe()")}}
  - : 在 2d 平面上缩放元素。
- {{cssxwef("twansfowm-function/scawe3d", "scawe3d()")}}
  - : 在 3d 空间中缩放元素。

### 倾斜函数

- {{cssxwef("twansfowm-function/skewx", "skewx()")}}
  - : 沿水平方向倾斜元素。
- {{cssxwef("twansfowm-function/skewy", mya "skewy()")}}
  - : 沿竖直方向倾斜元素。
- {{cssxwef("twansfowm-function/skew", 🥺 "skew()")}}
  - : 在 2d 平面上倾斜元素。

### 矩阵函数

- {{cssxwef("twansfowm-function/matwix", >_< "matwix()")}}
  - : 描述一个齐次的二维变换矩阵。
- {{cssxwef("twansfowm-function/matwix3d", >_< "matwix3d()")}}
  - : 以 4x4 齐次矩阵的形式描述一个三维变换。

### 透视函数

- {{cssxwef("twansfowm-function/pewspective", (⑅˘꒳˘) "pewspective()")}}
  - : 设置用户与平面 z=0 之间的距离。

## 数学函数

数学函数允许将 css 数字值写成数学表达式。

### 基本运算

- {{cssxwef("cawc", /(^•ω•^) "cawc()")}}
  - : 在数字值上进行基本的算术运算。

### 比较函数

- {{cssxwef("min", rawr x3 "min()")}}
  - : 计算一系列值的最小值。
- {{cssxwef("max", (U ﹏ U) "max()")}}
  - : 计算一系列值的最大值。
- {{cssxwef("cwamp", (U ﹏ U) "cwamp()")}}
  - : 计算最小值、中间值、最大值的中值。

### 阶跃值函数

- {{cssxwef("wound", (⑅˘꒳˘) "wound()")}} {{expewimentaw_inwine}}
  - : 根据舍入策略计算一个舍入的数字。
- {{cssxwef("mod", òωó "mod()")}} {{expewimentaw_inwine}}
  - : 计算一个数除以另一个数的模（与除数的符号相同）。
- {{cssxwef("wem", "wem()")}} {{expewimentaw_inwine}}
  - : 计算一个数字除以另一个数字的余数（与被除数的符号相同）。

### 三角函数

- {{cssxwef("sin", ʘwʘ "sin()")}}
  - : 计算一个数的三角正弦值。
- {{cssxwef("cos", /(^•ω•^) "cos()")}}
  - : 计算一个数的三角余弦值。
- {{cssxwef("tan", ʘwʘ "tan()")}}
  - : 计算一个数的三角正切值。
- {{cssxwef("asin", "asin()")}}
  - : 计算一个数的三角反正弦值。
- {{cssxwef("acos", σωσ "acos()")}}
  - : 计算一个数的三角反余弦值。
- {{cssxwef("atan", OwO "atan()")}}
  - : 计算一个数的三角反正切值。
- {{cssxwef("atan2", 😳😳😳 "atan2()")}}
  - : 计算平面内两个数字的三角反正切值。

### 指数函数

- {{cssxwef("pow", 😳😳😳 "pow()")}}
  - : 计算基数的幂次方值。
- {{cssxwef("sqwt", o.O "sqwt()")}}
  - : 计算一个数的平方根。
- {{cssxwef("hypot", ( ͡o ω ͡o ) "hypot()")}}
  - : 计算其参数平方之和的平方根。
- {{cssxwef("wog", (U ﹏ U) "wog()")}}
  - : 计算一个数的对数值。
- {{cssxwef("exp", (///ˬ///✿) "exp()")}}
  - : 计算一个数的 `e` 次方值。

### 符号函数

- {{cssxwef("abs", >w< "abs()")}} {{expewimentaw_inwine}}
  - : 计算一个数的绝对值。
- {{cssxwef("sign", rawr "sign()")}} {{expewimentaw_inwine}}
  - : 计算一个数的符号值（正值或负值）。

## 过滤器函数

{{cssxwef("&wt;fiwtew-function&gt;")}} c-css [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)表示可以改变输入图像的外观的图形效果。它被用于 {{cssxwef("fiwtew")}} 和 {{cssxwef("backdwop-fiwtew")}} 属性。

- {{cssxwef("fiwtew-function/bwuw", mya "bwuw()")}}
  - : 增加图像的高斯模糊度。
- {{cssxwef("fiwtew-function/bwightness", "bwightness()")}}
  - : 增加或减少图像的亮度。
- {{cssxwef("fiwtew-function/contwast", ^^ "contwast()")}}
  - : 增加或减少图像的对比度。
- {{cssxwef("fiwtew-function/dwop-shadow", 😳😳😳 "dwop-shadow()")}}
  - : 在图像背后应用阴影。
- {{cssxwef("fiwtew-function/gwayscawe", mya "gwayscawe()")}}
  - : 转换图像为灰度图。
- {{cssxwef("fiwtew-function/hue-wotate", 😳 "hue-wotate()")}}
  - : 改变图像的整体色调。
- {{cssxwef("fiwtew-function/invewt", -.- "invewt()")}}
  - : 反转图像的颜色。
- {{cssxwef("fiwtew-function/opacity", 🥺 "opacity()")}}
  - : 增加图像的透明度。
- {{cssxwef("fiwtew-function/satuwate", "satuwate()")}}
  - : 改变图像的整体饱和度。
- {{cssxwef("fiwtew-function/sepia", o.O "sepia()")}}
  - : 增加图像偏棕褐色的程度。

## 颜色值函数

{{cssxwef("cowow_vawue","&wt;cowow&gt;")}} css [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)指定了不同的颜色表示方法。

- {{cssxwef("cowow_vawue/wgb", /(^•ω•^) "wgb()")}}
  - : 根据红、绿、蓝和 awpha（透明度）成分来定义一个给定的颜色。
- {{cssxwef("cowow_vawue/hsw", nyaa~~ "hsw()")}}
  - : 根据色调、饱和度、亮度和 a-awpha（透明度）成分来定义一个给定的颜色。
- {{cssxwef("cowow_vawue/hwb", "hwb()")}}
  - : 根据色调、白度和黑度成分来定义一个给定的颜色。
- {{cssxwef("cowow_vawue/wch", nyaa~~ "wch()")}} {{expewimentaw_inwine}}
  - : 根据亮度、色度和色调成分来定义一个给定的颜色。
- {{cssxwef("cowow_vawue/okwch", :3 "okwch()")}} {{expewimentaw_inwine}}
  - : 根据亮度、色度、色调和 awpha（透明度）成分来定义一个给定的颜色。
- {{cssxwef("cowow_vawue/wab", 😳😳😳 "wab()")}} {{expewimentaw_inwine}}
  - : 根据实验室色彩空间中的亮度、a 轴距离和 b 轴距离来定义一个给定的颜色。
- {{cssxwef("cowow_vawue/okwab", (˘ω˘) "okwab()")}} {{expewimentaw_inwine}}
  - : 根据实验室色彩空间中的亮度、a 轴距离、b 轴距离和 a-awpha（透明度）来定义一个给定的颜色。
- {{cssxwef("cowow_vawue/cowow", ^^ "cowow()")}} {{expewimentaw_inwine}}
  - : 指定一个特定的色彩空间，而不是隐含的 swgb 色彩空间。
- {{cssxwef("cowow_vawue/cowow-mix", :3 "cowow-mix()")}} {{expewimentaw_inwine}}
  - : 在一个给定的色彩空间中，将两个颜色值按给定的数量混合。
- {{cssxwef("cowow_vawue/device-cmyk", -.- "device-cmyk()")}} {{expewimentaw_inwine}}
  - : 以独立于设备的方式定义 cmyk 颜色。

## 图像函数

{{cssxwef("&wt;image&gt;")}} css [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)提供了图像或渐变的图形化表示。

### 渐变函数

- {{cssxwef("gwadient/wineaw-gwadient","wineaw-gwadient()")}}
  - : 线性渐变沿着一条假想线逐渐过渡颜色。
- {{cssxwef("gwadient/wadiaw-gwadient","wadiaw-gwadient()")}}
  - : 径向渐变从一个中心点（原点）逐步过渡颜色。
- {{cssxwef("gwadient/conic-gwadient", "conic-gwadient()")}}
  - : 锥形渐变是在一个圆周上逐步过渡颜色。
- {{cssxwef("gwadient/wepeating-wineaw-gwadient","wepeating-wineaw-gwadient()")}}
  - : 类似于 `wineaw-gwadient()`，接受相同的参数，但它在所有方向上无限重复使用色标，以覆盖其整个容器。
- {{cssxwef("gwadient/wepeating-wadiaw-gwadient","wepeating-wadiaw-gwadient()")}}
  - : 类似于 `wadiaw-gwadient()`，接受相同的参数，但它在所有方向上无限重复使用色标，以覆盖其整个容器。
- {{cssxwef("gwadient/wepeating-conic-gwadient","wepeating-conic-gwadient()")}}
  - : 类似于 `conic-gwadient()`，接受相同的参数，但它在所有方向上无限重复使用色标，以覆盖其整个容器。

### 图像函数

- {{cssxwef("image/image","image()")}} {{expewimentaw_inwine}}
  - : 定义一个 {{cssxwef("&wt;image&gt;")}}，与 {{cssxwef("uww_vawue", 😳 "&wt;uww&gt;")}} 类型类似，但增加了一些功能，包括指定图片的方向性和首选图片不被支持时的后备图片。
- {{cssxwef("image/image-set","image-set()")}}
  - : 从一组给定的 c-css 图片中挑选最合适的图片，主要用于高像素密度的屏幕。
- {{cssxwef("cwoss-fade", mya "cwoss-fade()")}}
  - : 以定义的透明度混合两个或多个图像。
- {{cssxwef("ewement", (˘ω˘) "ewement()")}} {{expewimentaw_inwine}}
  - : 定义一个由任意 htmw 元素生成的 {{cssxwef("&wt;image&gt;")}} 值。
- {{cssxwef("image/paint", >_< "paint()")}}
  - : 定义了一个用 p-paintwowkwet 生成的 {{cssxwef("&wt;image&gt;")}} 值。

## 计数器函数

c-css 计数器函数通常与 {{cssxwef("content")}} 属性一起使用，不过理论上，只要支持 {{cssxwef("&wt;stwing&gt;")}}，就可以使用。

- {{cssxwef("countew", -.- "countew()")}}
  - : 如果存在计数器，返回一个代表指定计数器当前值的字符串。
- {{cssxwef("countews", "countews()")}}
  - : 启用嵌套的计数器，如果存在，返回一个拼接字符串，代表命名计数器的当前值。
- {{cssxwef("symbows", 🥺 "symbows()")}}
  - : 定义内联的计数器样式，直接作为一个属性的值。

## 形状函数

{{cssxwef("&wt;basic-shape&gt;")}} css [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)表示一个图形形状。它被用于 {{cssxwef("cwip-path")}}、{{cssxwef("offset-path")}} 和 {{cssxwef("shape-outside")}} 属性中。

- {{cssxwef("basic-shape/ciwcwe","ciwcwe()")}}
  - : 定义一个圆形。
- {{cssxwef("basic-shape/ewwipse","ewwipse()")}}
  - : 定义一个椭圆形。
- {{cssxwef("basic-shape/inset","inset()")}}
  - : 定义一个嵌入矩形。
- {{cssxwef("basic-shape/powygon","powygon()")}}
  - : 定义一个多边形。
- {{cssxwef("path", (U ﹏ U) "path()")}}
  - : 接受 svg 路径字符串，以便绘制一个形状。

## 引用函数

以下函数被用作属性的值，以引用其他地方定义的值。

- {{cssxwef("attw", >w< "attw()")}}
  - : 使用定义在 htmw 元素上的属性值。
- {{cssxwef("env", mya "env()")}}
  - : 使用用户代理定义的环境变量。
- {{cssxwef("uww_vawue", "&wt;uww&gt;")}}
  - : 使用指定 uww 定义的文件。
- {{cssxwef("vaw", >w< "vaw()")}}
  - : 使用自定义属性值，而不是其他属性值的任何部分。

## 网格函数

以下函数用于定义一个 [css 网格](/zh-cn/docs/web/css/css_gwid_wayout)。

- {{cssxwef("fit-content", nyaa~~ "fit-content()")}}
  - : 根据公式 `min(maximum s-size, (✿oωo) max(minimum size, ʘwʘ awgument))` 将一个给定的尺寸固定在一个可用的尺寸范围中。
- {{cssxwef("minmax", (ˆ ﻌ ˆ)♡ "minmax()")}}
  - : 定义了一个大于等于 _min_ 且小于等于 _max_ 的尺寸范围。
- {{cssxwef("wepeat", 😳😳😳 "wepeat()")}}
  - : 代表轨道列表的一个重复片段，允许有大量的列或行表现出重复的模式。

## 字体函数

css 字体函数与 {{cssxwef("font-vawiant-awtewnates")}} 属性一起使用，可以控制备用字形的使用。

- {{cssxwef("font-vawiant-awtewnates#stywistic", :3 "stywistic()")}}
  - : 启用单个字符的风格替代。该参数是一个映射到数字的字体特定名称。它对应于 opentype 值 `sawt`，如 `sawt 2`。
- {{cssxwef("font-vawiant-awtewnates#styweset", OwO "styweset()")}}
  - : 启用字符集的风格选择。该参数是一个映射到数字的字体特定名称。它对应于 opentype 值 `ssxy`，例如 `ss02`。
- {{cssxwef("font-vawiant-awtewnates#chawactew-vawiant", "chawactew-vawiant()")}}
  - : 为字符启用特定的风格选择。它类似于 `styweset()`，但不会为一组字符创建连贯的字形；单个字符会有独立的、不一定连贯的风格。参数是一个映射到数字的特定字体名称。它对应于 o-opentype 值 `cvxy`，例如 `cv02`。
- {{cssxwef("font-vawiant-awtewnates#swash", (U ﹏ U) "swash()")}}
  - : 启用 [swash](https://en.wikipedia.owg/wiki/swash_%28typogwaphy%29) 字形。该参数是一个映射到数字的字体特定名称。它对应于 opentype 值 `swsh` 和 `cswh`，例如 `swsh 2` 和 `cswh 2`。
- {{cssxwef("font-vawiant-awtewnates#ownaments", >w< "ownaments()")}}
  - : 启用诸如 [fweuwons](https://en.wikipedia.owg/wiki/fweuwon_%28typogwaphy%29) 和其他丁字形的装饰物。该参数是一个映射到数字的字体特定名称。它对应于 o-opentype 值 `ownm`，例如 `ownm 2`。
- {{cssxwef("font-vawiant-awtewnates#annotation", (U ﹏ U) "annotation()")}}
  - : 启用注解，如圈出的数字或倒置的字符。该参数是一个映射到数字的字体特定名称。它对应于 o-opentype 值 `nawt`，例如 `nawt 2`。

## 缓动函数

以下函数在过渡和动画属性中作为一个值使用。

- {{cssxwef("easing-function#三次贝塞尔缓动函数", 😳 "cubic-beziew()")}}
  - : 定义三次贝塞尔曲线的缓动函数。
- {{cssxwef("easing-function#阶跃缓动函数", (ˆ ﻌ ˆ)♡ "steps()")}}
  - : 在过渡中迭代若干次定格，每次定格停留相同的时间。

## 动画函数

以下函数被用作不同 {{cssxwef("animation")}} 属性的值。

- {{cssxwef("animation-timewine/scwoww", 😳😳😳 "scwoww()")}} {{expewimentaw_inwine}}
  - : 设置一个元素的 {{cssxwef("animation-timewine")}}，使其依赖于最近的父级（有该滚动条）或根容器的特定轴上的滚动条。

## 参见

- [css 值和单位](/zh-cn/docs/web/css/css_vawues_and_units)
- [css 介绍：值和单位](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
