---
title: shape-margin
slug: Web/CSS/Reference/Properties/shape-margin
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`shape-margin`** 用于设定由{{cssxref("shape-outside")}}创建的 CSS 形状的外边距。

{{InteractiveExample("CSS Demo: shape-margin")}}

```css interactive-example-choice
shape-margin: 0;
```

```css interactive-example-choice
shape-margin: 20px;
```

```css interactive-example-choice
shape-margin: 1em;
```

```css interactive-example-choice
shape-margin: 5%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
    We had agreed, my companion and I, that I should call for him at his house,
    after dinner, not later than eleven o’clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up “ballooning”
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of “automobiling” at a breakneck speed, the
    members of the “Aéro Club” now seek in the air, where they indulge in all
    kinds of daring feats, the nerve-racking excitement that they have ceased to
    find on earth.
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  margin: 20px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: rebeccapurple;
  shape-outside: circle(50%);
}
```

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

- [CSS Shapes](/zh-CN/docs/Web/CSS/Guides/Shapes)
- [Overview of CSS Shapes](/zh-CN/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("&lt;basic-shape&gt;")}}
