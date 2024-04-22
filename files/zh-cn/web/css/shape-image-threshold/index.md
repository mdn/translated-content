---
title: shape-image-threshold
slug: Web/CSS/shape-image-threshold
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`shape-image-threshold`** 通过设定一个 alpha 通道的界限值来提取{{cssxref("shape-outside")}} 值为图像的形状。

{{EmbedInteractiveExample("pages/css/shape-image-threshold.html")}}

所有 alpha 值比这个界限值大的像素都会被当做形状的一部分，以此确定形状的边界。举个例子，界限值为`0.5`时，形状会包含所有不透明度超过 50% 的像素。

```css
/* <number> value */
shape-image-threshold: 0.7;

/* Global values */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: unset;
```

{{cssinfo}}

## 语法

### 值

- {{cssxref("&lt;alpha-value&gt;")}}
  - : 设定界限值以从图像中提取形状。形状由所有 alpha 值比界限值大的像素定义。在 0.0（完全透明）到 1.0（完全不透明）之外的值会被重置（译者：如，小于 0.0 的值会被重置成 0.0）。

### 正式语法

{{csssyntax}}

## 范例

### Aligning text to a gradient

这个例子创建了一个{{HTMLElement("div")}}块，其背景是一个渐变图像。`shape-outside`也定义了一个渐变图像，以此创建一个 CSS 形状，渐变图像中不透明度至少为 20%（即 alpha 值大于 0.2）的像素都是形状的一部分。

#### HTML

```html
<div id="gradient-shape"></div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi
  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint
  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat adipisci,
  libero quae nihil porro debitis laboriosam inventore animi impedit nostrum
  nesciunt quisquam expedita! Dolores consectetur iure atque a mollitia dicta
  repudiandae illum exercitationem aliquam repellendus ipsum porro modi, id nemo
  eligendi, architecto ratione quibusdam iusto nisi soluta? Totam inventore ea
  eum sed velit et eligendi suscipit accusamus iusto dolore, at provident eius
  alias maxime pariatur non deleniti ipsum sequi rem eveniet laboriosam magni
  expedita?
</p>
```

#### CSS

```css
#gradient-shape {
  width: 150px;
  height: 150px;
  float: left;
  background-image: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-outside: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-image-threshold: 0.2;
}
```

在这里，形状由{{cssxref("background-image")}}创建，使用渐变而非图像文件。我们在{{cssxref("shape-outside")}}属性中使用相同的渐变图像创建形状，以此构建浮动区域。

随后值为`0.2`的`shape-image-threshold`属性规定渐变中不透明度超过 20% 的像素才参与构成形状。

#### Result

{{EmbedLiveSample('Aligning_text_to_a_gradient', 600, 230)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS Shapes](/zh-CN/docs/Web/CSS/CSS_shapes)
- [Overview of CSS Shapes](/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
