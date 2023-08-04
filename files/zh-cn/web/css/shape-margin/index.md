---
title: shape-margin
slug: Web/CSS/shape-margin
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`shape-margin`** 用于设定由{{cssxref("shape-outside")}}创建的 CSS 形状的外边距。

{{EmbedInteractiveExample("pages/css/shape-margin.html")}}

这个外边距可以让你调整（浮动元素的）形状边缘与环绕内容之间的距离。

## 语法

```css
/* <length> values */
shape-margin: 10px;
shape-margin: 20mm;

/* <percentage> value */
shape-margin: 60%;

/* Global values */
shape-margin: inherit;
shape-margin: initial;
shape-margin: unset;
```

### 值

- `<length-percentage>`
  - : 使用{{cssxref("&lt;length&gt;")}}值，或者相对于元素容纳块的{{cssxref("&lt;percentage&gt;")}}值来设定形状的外边距。

### 正式语法

{{csssyntax}}

## 范例

### Adding a margin to a polygon

#### HTML

```html
<section>
  <div class="shape"></div>
  We are not quite sure of any one thing in biology; our knowledge of geology is
  relatively very slight, and the economic laws of society are uncertain to
  every one except some individual who attempts to set them forth; but before
  the world was fashioned the square on the hypotenuse was equal to the sum of
  the squares on the other two sides of a right triangle, and it will be so
  after this world is dead; and the inhabitant of Mars, if one exists, probably
  knows its truth as we know it.
</section>
```

#### CSS

```css
section {
  max-width: 400px;
}

.shape {
  float: left;
  width: 150px;
  height: 150px;
  background-color: maroon;
  clip-path: polygon(0 0, 150px 150px, 0 150px);
  shape-outside: polygon(0 0, 150px 150px, 0 150px);
  shape-margin: 20px;
}
```

#### Result

{{EmbedLiveSample("Adding_a_margin_to_a_polygon", 500, 250)}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS Shapes](/zh-CN/docs/Web/CSS/CSS_shapes)
- [Overview of CSS Shapes](/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("&lt;basic-shape&gt;")}}
