---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: fb3ef3857ca1d77cc720deba0c12d7a3313b85b4
---

{{CSSRef}}

**`border-image`** [CSS](/zh-CN/docs/Web/CSS) 属性在给定元素的周围绘制图像，取代元素的常规[边框](/zh-CN/docs/Web/CSS/border)。

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> [!NOTE]
> 你应该另外指定 {{cssxref("border-style")}} 以防边框图像没能加载。虽然规范并没有严格要求这一点，但当 {{cssxref("border-style")}} 为 `none` 或 {{cssxref("border-width")}} 为 `0` 时，某些浏览器不会渲染边框图像。

## 成分属性

此属性为以下 CSS 属性的简写：

- [`border-image-outset`](/zh-CN/docs/Web/CSS/border-image-outset)
- [`border-image-repeat`](/zh-CN/docs/Web/CSS/border-image-repeat)
- [`border-image-slice`](/zh-CN/docs/Web/CSS/border-image-slice)
- [`border-image-source`](/zh-CN/docs/Web/CSS/border-image-source)
- [`border-image-width`](/zh-CN/docs/Web/CSS/border-image-width)

## 语法

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

/* 全局值 */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: revert-layer;
border-image: unset;
```

`border-image` 属性可以用下面列出的 1 到 5 个值中的任意值指定。

> [!NOTE]
> 如果 {{cssxref("border-image-source")}} 的[计算值](/zh-CN/docs/Web/CSS/computed_value)为 `none`，或图像无法显示，则将显示 {{cssxref("border-style")}}。

### 值

- `<'border-image-source'>`
  - : 源图像。见 {{cssxref("border-image-source")}}。
- `<'border-image-slice'>`
  - : 尺寸，用于将源图像分割为多个区域。最多可以指定四个值。见 {{cssxref("border-image-slice")}}。
- `<'border-image-width'>`
  - : 边框图像的宽度。最多可以指定四个值。见 {{cssxref("border-image-width")}}。
- `<'border-image-outset'>`
  - : 边框图像到元素外部边缘的距离。最多可以指定四个值。见 {{cssxref("border-image-outset")}}。
- `<'border-image-repeat'>`
  - : 定义源图像边缘区域适配边框图像尺寸的方式。最多可以指定两个值。见 {{cssxref("border-image-repeat")}}。

## 无障碍考虑

辅助技术无法解析边框图像。如果图像包含对理解页面的整体内容至关重要的信息，最好在文档中对其进行语义描述。

- [MDN 理解 WCAG，指南 1.1 解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [理解成功标准 1.1.1 | 理解 WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 位图

在这个示例中，我们将菱形图案作为元素的边框图像。边框图像的源文件是一个 81 x 81 像素的“.png”文件，垂直方向和水平方向上各排列着三个菱形。

![一个示例边框图像](border.png)

#### HTML

```html
<div id="bitmap">这个元素被基于位图的边框图像围绕！</div>
```

#### CSS

每个菱形的宽和高皆为 81 ÷ 3 = 27，所以我们将 `border-image-slice` 设置为 `27`，这样图像的角区域和边缘区域宽高皆为 27px。为了使每个菱形的中心恰好位于元素背景的边缘，我们将令 `border-image-outset` 等于 `border-image-width` 的一半。最后，将 `border-image-repeat` 设置为 `round` 使分割出的不同区域均匀贴合，没有裁剪或间隙。

```css
#bitmap {
  width: 200px;
  background-color: #ffa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### 结果

{{EmbedLiveSample('位图', '100%', 200)}}

### 渐变

#### HTML

```html
<div id="gradient">这个元素被基于渐变的边框图像围绕！</div>
```

#### CSS

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```

#### 结果

{{EmbedLiveSample('渐变')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} 类型
- 渐变函数：{{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}、{{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}、{{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}、{{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}、{{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- MDN 博客（2023）[CSS 中的边框图像：Interop 2023 的重点关注领域](/en-US/blog/border-images-interop-2023/)
