---
title: border
slug: Web/CSS/Reference/Properties/border
---

[CSS](/zh-CN/docs/Web/CSS) 的 **`border`** 属性是一个用于设置各种单独的边界属性的[简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)。`border` 可以用于设置一个或多个以下属性的值：{{Cssxref("border-width")}}、{{Cssxref("border-style")}}、{{Cssxref("border-color")}}。

{{InteractiveExample("CSS Demo: border")}}

```css interactive-example-choice
border: solid;
```

```css interactive-example-choice
border: dashed red;
```

```css interactive-example-choice
border: 1rem solid;
```

```css interactive-example-choice
border: thick double #32a1ce;
```

```css interactive-example-choice
border: 4mm ridge rgba(211, 220, 50, 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

和所有的简写属性一样，如果有缺省值会被设置成对应属性的初始值。同时需要注意设置 border 对{{cssxref("border-image")}}属性的影响，虽然 border 属性不能设置这个属性，但会把该属性重置为初始值 none。这使得我们可以用 border 属性去重置整个样式表中的 border 设置。因为 W3C 计划在未来的标准中保留该属性，因此建议使用该属性重置边框设定。

> [!NOTE]
> 虽然{{Cssxref("border-width")}}、{{Cssxref("border-style")}}和 {{Cssxref("border-color")}} 简写属性接受最多 4 个参数来为不同的边设置宽度、风格和颜色，但 border 属性只接受三个参数，分别是宽度、风格和颜色，所以这样会使得四条边的边框相同。

### Borders vs. outlines

边界（`border`）和轮廓（`outline`）很相似。然而轮廓在以下方面与边界不同：

- 轮廓不占据空间，他们在元素内容之外绘制。
- 根据规范，轮廓不必为矩形，尽管通常是矩形。

## 语法

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit;
border: initial;
border: unset;
```

可以使用下面列出的一个，两个或三个值来指定 `border` 属性。值的顺序无关紧要。

> [!NOTE]
> 如果边框的样式未定义，它将不可见。这是因为样式默认为 none。

### 取值

- border-width
  - : 请看 {{ Cssxref("border-width") }}.
- border-style
  - : 请看 {{ Cssxref("border-style") }}.
- border-color
  - : {{cssxref("&lt;color&gt;")}} 可以确定 border 的颜色。如果这个值没有设置，它的默认值是元素的 {{cssxref("color")}} 属性值（是文字颜色而非背景色）。请看 {{ Cssxref("border-color") }}。

### 形式语法

{{csssyntax}}

## 示例

### 设置粉色外边界

#### HTML

```html
<div>I have a border, an outline, AND a box shadow! Amazing, isn't it?</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### 结果

{{EmbedLiveSample('设置粉色外边界')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
