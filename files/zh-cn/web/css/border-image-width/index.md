---
title: border-image-width
slug: Web/CSS/border-image-width
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS)属性 **`border-image-width`** 指定了 [边界图像 (border image](/zh-CN/docs/Web/CSS/border-image)) 的宽度

{{EmbedInteractiveExample("pages/css/border-image-width.html")}}

如果本属性值大于元素的 {{cssxref("border-width")}}，边界图像将会向 padding 边缘延展

## 语法

```css
/* 关键字 */
border-image-width: auto;

/* 长度 */
border-image-width: 1rem;

/* 百分比 */
border-image-width: 25%;

/* 数值 */
border-image-width: 3;

/* 垂直 | 水平 */
border-image-width: 2em 3em;

/* 上 | 横向 | 下 */
border-image-width: 5% 15% 10%;

/* 上 | 右 | 下 | 左 */
border-image-width: 5% 2em 10% auto;

/* 全局值 */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
```

`border-image-width` 属性的值可用以下方式进行设定：

- 当指定 **一个** 值时，它将作用到 **四个方向** ；
- 当指定 **两个** 值时，它将分别作用到 **垂直方向** 和 **水平方向** ；
- 当指定 **三个** 值时，它将分别作用到 **上方**、**水平方向**、和**下方**；
- 当指定 **四个** 值时，它将分别作用到 **上方**、**右方**、**下方和左方。**

### 取值

- `<长度 - 百分比>`
  - : 边界的宽度，可按 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 指定。百分比是相较于水平（垂直）方向上的边框图像区域宽度（高度）的偏移量，不能为负。
- `<数值>`
  - : 边框宽度，指定为 {{cssxref("border-width")}} 的相应倍数，不能为负。
- `auto`
  - : 将等同于内部对应的 {{cssxref("border-image-slice")}} 的宽或高（可用的话）。如果图像没有需要的相应的属性，将相对于 `border-width` 进行指定。

## 正式定义

{{CSSInfo}}

## 正式语法

{{csssyntax}}

## 示例

### Tiling a border image

示例使用了下方 90\*90 像素的 ".png" 图像。

![](border.png)

因此，每个圆圈为 30\*30 像素。

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

#### CSS

```css
p {
  border: 20px solid;
  border-image: url("border.png") 30 round;
  border-image-width: 16px;
  padding: 40px;
}
```

#### 结果

{{EmbedLiveSample('Tiling_a_border_image', 200, 240)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
