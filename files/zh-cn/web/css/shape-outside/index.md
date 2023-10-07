---
title: shape-outside
slug: Web/CSS/shape-outside
---

{{CSSRef}}

**`shape-outside`** 的 [CSS](/zh-CN/docs/Web/CSS) 属性定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。默认情况下，内联内容包围其边距框; `shape-outside`提供了一种自定义此包装的方法，可以将文本包装在复杂对象周围而不是简单的框中。{{EmbedInteractiveExample("pages/css/shape-outside.html")}}

## 语法

```css
/* 关键字值 */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* 函数值 */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);

/* <url> 值 */
shape-outside: url(image.png);

/* 渐变值 */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

/* 全局值 */
shape-outside: initial;
shape-outside: inherit;
shape-outside: unset;
```

`shape-outside` 属性指定使用下面列表的值来定义浮动元素的浮动区域。这个浮动区域决定了行内内容（浮动元素）所包裹的形状。

### 值

- `none`
  - : 该浮动区域不产生影响，行内元素以默认的方式包裹着该元素的 margin box。
- `<shape-box>`

  - : 根据浮动元素的边缘（通过 [CSS box model](/zh-CN/docs/Web/CSS/box_model) 来定义）形状计算出浮动的区域。可能是 `margin-box`, `border-box`, `padding-box`, 或者 `content-box`。这个形状包括了由 {{cssxref("border-radius")}} 属性制造出来的弧度（与 {{cssxref("background-clip")}} 的表现类似）。

    - `margin-box`
      - : 定义一个由外边距的外边缘封闭形成的形状。这个形状的角的半径由相应的{{cssxref("border-radius")}} 和{{cssxref("margin")}} 的值决定。如果 `border-radius / margin` 的比率大于等于 `1` , 那么这个 margin box 的角的弧度就是 `border-radius + margin` ；如果比率小于 `1`，那么这个 margin box 的角的弧度就是 `border-radius + (margin * (1 + (ratio-1)^3))` 。
    - `border-box`
      - : 定义一个由边界的外边缘封闭形成的形状。这个形状遵循正常的边界外部圆角的形成规则。
    - `padding-box`
      - : 定义一个由内边距的外边缘封闭形成的形状。这个形状遵循正常的边界内部圆角的形成规则。
    - `content-box`
      - : 定义一个由内容区域的外边缘封闭形成的形状（译者：表述的不太好，就是被 padding 包裹的区域，在 chrome 控制台中的盒子模型图中的蓝色区域。）。每一个角的弧度取 `0` 或 `border-radius - border-width - padding` 中的较大值。

- {{cssxref("&lt;basic-shape&gt;")}}
  - : 基于 {{cssxref("basic-shape/inset","inset()")}}、{{cssxref("basic-shape/circle","circle()")}}、{{cssxref("basic-shape/ellipse","ellipse()")}} 或 {{cssxref("basic-shape/polygon","polygon()")}} 其中一个创造出来的形状计算出浮动区域。如果同时存在 `<shape-box>`，那么会为 `<basic-shape>` 方法定义一个参考盒，这个参考盒默认为 `margin-box`。
- {{cssxref("&lt;image&gt;")}}

  - : 提取并且计算指定 {{cssxref("&lt;image&gt;")}} 的 alpha 通道得出浮动区域（译者：即根据图片的非透明区域进行包裹）。就跟通过 {{cssxref("shape-image-threshold")}}来定义一样。

    > **备注：** {{glossary("User agent", "用户代理")}} 必须使用由 HTML5 规范定义的 CORS-enabled fetch 方法来处理 `shape-outside` 的值中的所有 URL。当捕获的时候，用户代理必须使用“匿名”模式来设置层叠样式表的 URL 的 referrer source 和设置所在文档的 URL 的 origin。如果这导致出现没有有效的备份图像这样的网络错误，产生的影响就跟指定了值 `none` 一样。

### 正式语法

{{csssyntax}}

## 插值

当在两个 `<basic-shape>` 之间产生动画时，将会应用以下规则。shape 里的值将会被当成一个简单列表插入。插入列表的值的类型可能是 {{cssxref("&lt;length&gt;")}}，{{cssxref("&lt;percentage&gt;")}}，或 {{cssxref("calc")}}。如果列表的值不是以上的几种类型，但是都相同的话（如在两个列表的相同位置找到了 `nonzero` ），那些值会插入到列表中。

- 两个形状必须使用同样的参考盒。
- 如果两个形状都是 `ellipse()` 或 `circle()`类型，并且它们的 radii 都没有使用 `closest-side` 或 `farthest-side` 关键字，则将两个形状对应值之间的值插入到 shape 方法中。
- 如果两个形状的类型都是 `inset()`，则将两个形状对应值之间的值插入到 shape 方法中。
- 如果两个形状都是 `polygon()`，两个多边形之间有相同的定点数量并且 `<fill-rule>` 相同，则将两个形状对应值之间的值插入到 shape 方法中。
- 其余所有情况都不会发生插入。

## 示例

### HTML

```html
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    Sometimes a web page's text content appears to be funneling your attention
    towards a spot on the page to drive you to follow a particular link.
    Sometimes you don't notice.
  </p>
</div>
```

### CSS

```css
.main {
  width: 500px;
}

.left,
.right {
  width: 40%;
  height: 12ex;
  background-color: lightgray;
}

.left {
  -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  -webkit-shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

### Result

{{EmbedLiveSample('示例', 520, 130)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS Shapes](/zh-CN/docs/Web/CSS/CSS_shapes)
- [Overview of CSS Shapes](/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Shapes from Box Values](/zh-CN/docs/Web/CSS/CSS_shapes/Shapes_From_Box_Values)
- [Basic Shapes](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_Shapes)
- [Shapes from Images](/zh-CN/docs/Web/CSS/CSS_shapes/Shapes_from_images)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}
