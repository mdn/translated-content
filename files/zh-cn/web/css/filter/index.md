---
title: filter
slug: Web/CSS/filter
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`filter`** 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。

有几个[函数](#函数)（例如 `blur()` 和 `contrast()`）可以帮助你实现预定义的效果。

{{EmbedInteractiveExample("pages/css/filter.html")}}

## 语法

```css
/* <filter-function> 值 */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL */
filter: url("filters.svg#filter-id");

/* 多个滤镜 */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* 不使用滤镜 */
filter: none;

/* 全局值 */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;
```

可以使用如下方法设置函数：

```css-nolint
filter: <filter-function> [<filter-function>]* | none;
```

你可以使用 `url()` 来引用 [SVG 滤镜元素](/zh-CN/docs/Web/SVG/Element/filter)。可以使用如下语法引用 SVG {{SVGElement("filter")}} 元素：

```css
filter: url(file.svg#filter-element-id);
```

## 函数

`filter` 属性可设置为 `none` 或下面列出的一个或多个函数。如果任何函数的参数无效，则该函数返回 `none`。除特殊说明外，函数的值如果接受百分比值（如 `34%`），那么该函数也接受小数值（如 `0.34`）。

当单个 `filter` 属性具有多个函数时，滤镜将按顺序依次应用。

- {{cssxref("filter-function/blur", "blur()")}}
  - : 将高斯模糊应用于输入图像。

```css
filter: blur(5px);
```

- {{cssxref("filter-function/brightness", "brightness()")}}
  - : 将线性乘法器应用于输入图像，以调整其亮度。值为 `0%` 将创建全黑图像；值为 `100%` 会使输入保持不变，其他值是该效果的线性乘数。如果值大于 `100%` 将使图像更加明亮。

```css
filter: brightness(2);
```

- {{cssxref("filter-function/contrast", "contrast()")}}
  - : 调整输入图像的对比度。值是 `0%` 将使图像变灰；值是 `100%`，则无影响；若值超过 `100%` 将增强对比度。

```css
filter: contrast(200%);
```

- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : 使用 `<shadow>` 参数沿图像的轮廓生成阴影效果。阴影语法类似于 `<box-shadow>`（在 [CSS 背景和边框模块](/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders)中定义），但不允许使用 `inset` 关键字以及 `spread` 参数。与所有 `filter` 属性值一样，任何在 `drop-shadow()` 后的滤镜同样会应用在阴影上。

```css
filter: drop-shadow(16px 16px 10px black);
```

- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : 将图像转换为灰度图。值为 `100%` 则完全转为灰度图像，若为初始值 `0%` 则图像无变化。值在 `0%` 到 `100%` 之间，则是该效果的线性乘数。

```css
filter: grayscale(100%);
```

- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : 应用色相旋转。`<angle>` 值设定图像会被调整的色环角度值。值为 `0deg`，则图像无变化。

```css
filter: hue-rotate(90deg);
```

- {{cssxref("filter-function/invert", "invert()")}}
  - : 反转输入图像。值为 `100%` 则图像完全反转，值为 `0%` 则图像无变化。值在 `0%` 和 `100%` 之间，则是该效果的线性乘数。

```css
filter: invert(100%);
```

- {{cssxref("filter-function/opacity", "opacity()")}}
  - : 应用透明度。值为 `0%` 则使图像完全透明，值为 `100%` 则图像无变化。

```css
filter: opacity(50%);
```

- {{cssxref("filter-function/saturate", "saturate()")}}
  - : 改变图像饱和度。值为 `0%` 则是完全不饱和，值为 `100%` 则图像无变化。超过 `100%` 则增加饱和度。

```css
filter: saturate(200%);
```

- {{cssxref("filter-function/sepia", "sepia()")}}
  - : 将图像转换为深褐色。值为 `100%` 则完全是深褐色的，值为 `0%` 图像无变化。

```css
filter: sepia(100%);
```

## 组合函数

你可以组合任意数量的函数来控制渲染。滤镜将按声明顺序依次应用。以下示例增强了图像的对比度和亮度。

```css
filter: contrast(175%) brightness(103%);
```

### 插值

在进行动画处理时，如果起始和结束滤镜都有一个不含 {{cssxref("url()")}} 的相同长度的函数列表，则会根据其指定的规则对其每个滤镜函数进行{{Glossary("interpolation", "插值")}}。

如果它们的长度不同，较长列表中缺少的等效滤镜函数将以其初始的、未被滤镜修改的值为参数被添加到较短列表的尾部，然后所有的滤镜函数根据其指定的规则插值。否则，将使用离散插值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 应用 filter 函数

`filter` 属性被应用于第二张图片，为其本身以及边框添加灰度和模糊效果。

```css
img {
  border: 5px solid yellow;
}
/* 为第二张图像应用 40% 灰度并以 5px 进行模糊 */
img:nth-of-type(2) {
  filter: grayscale(0.4) blur(5px);
}
```

```html
<img src="pencil.jpg" alt="原图清晰" />
<img src="pencil.jpg" alt="该图像及其边框被应用了模糊和灰度效果" />
```

{{EmbedLiveSample('应用 filter 函数','100%','229px')}}

### 重复滤镜函数

滤镜函数按出现顺序应用。可以重复相同的滤镜函数。

```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg) drop-shadow(5px 5px 0
        red);
}
```

```html hidden
<svg
  id="MDN-logo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 361 104.2"
  xml:space="preserve"
  role="img">
  <title>MDN Web Docs</title>
  <path
    d="M197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    style="fill: var(--text-primary);"></path>
  <g style="fill:blue;">
    <path
      d="M42 .2 13.4 92.3H1.7L30.2.2H42zM52.4.2v92.1H42V.2h10.4zm40.3 0L64.2 92.3H52.5L81 .2h11.7zM103.1.2v92.1H92.7V.2h10.4zM294 95h67v8.8h-67V95z"></path>
  </g>
</svg>
```

{{EmbedLiveSample('重复滤镜函数','100%','229px')}}

滤镜函数按顺序应用。这就是阴影颜色不同的原因：第一个阴影的色调被 `hue-rotate()` 函数改变，而第二个阴影的色调没有被改变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS {{cssxref("backdrop-filter")}} 属性
- CSS [合成和混合](/zh-CN/docs/Web/CSS/CSS_compositing_and_blending)模块，包括 CSS {{cssxref("background-blend-mode")}} 和 {{cssxref("mix-blend-mode")}} 属性。
- CSS {{cssxref("mask")}} 属性
- [SVG](/zh-CN/docs/Web/SVG)，包括 SVG {{SVGElement("filter")}} 元素以及 SVG {{SVGAttr("filter")}} 属性。
- [将 SVG 效果应用于 HTML 内容](/zh-CN/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
