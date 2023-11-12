---
title: mask-border
slug: Web/CSS/mask-border
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`mask-border`** 允许你创建一个紧贴元素边框边缘的 mask。

该属性为以下属性的[简写](/zh-CN/docs/Web/CSS/Shorthand_properties): {{cssxref("mask-border-source")}}, {{cssxref("mask-border-slice")}}, {{cssxref("mask-border-width")}}, {{cssxref("mask-border-outset")}}, {{cssxref("mask-border-repeat")}}, and {{cssxref("mask-border-mode")}}. 与其他简写的属性一样，任何一个漏写的子属性，将会被设置为他们的[初始值](/zh-CN/docs/Web/CSS/initial_value).

## 语法

```css
/* source | slice */
mask-border: url("border-mask.png") 25;

/* source | slice | repeat */
mask-border: url("border-mask.png") 25 space;

/* source | slice | width */
mask-border: url("border-mask.png") 25 / 35px;

/* source | slice | width | outset | repeat | mode */
mask-border: url("border-mask.png") 25 / 35px / 12px space alpha;
```

### Values

- `<'mask-border-source'>`
  - : 该属性为源图像。参见 {{cssxref("mask-border-source")}}.
- `<'mask-border-slice'>`
  - : 将源图像切割后的区域的尺寸，最多可指定四个值。参见 {{cssxref("mask-border-slice")}}.
- `<'mask-border-width'>`
  - : 边框 mask 的宽度。最多可指定四个值。参见 {{cssxref("mask-border-width")}}.
- `<'mask-border-outset'>`
  - : 边框 mask 距离元素外边界的距离。最多可指定四个值。参见 {{cssxref("mask-border-outset")}}.
- `<'mask-border-repeat'>`
  - : 定义如何调整源图像的边缘区域以适应边框 mask 的尺寸。最多可指定四个值。参见 {{cssxref("mask-border-repeat")}}.
- `<'mask-border-mode'>`
  - : 定义是否将源图片设置为明亮度 mask，或者透明度 mask. 参见 {{cssxref("mask-border-mode")}}.

### 形式语法

{{csssyntax}}

## 示例

### Bitmap

在此范例中，我们将使用钻石图案来给元素添加 mask. mask 的源文件是一个 ".png" 文件，大小为 90 像素 \* 90 像素，三颗钻石垂直和水平交叉；

![](mask-border-diamonds.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based mask border! Pretty neat, isn't
  it?
</div>
```

#### CSS

为了适应一个钻石的大小，我们使用 90/3 或者 30，用于设置将图像切割至边角以及边缘区域的值，并设置 repeat 属性为 `round` ，该属性使得切片均匀贴合，例如：没有裁剪和空隙。

```css
div {
  width: 200px;
  background-color: lavender;
  border: 18px solid salmon;
  padding: 10px;

  mask-border: url("mask-border-diamonds.png") 30 / 36px 18px round;
}
```

#### 结果

{{EmbedLiveSample("Bitmap")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}
