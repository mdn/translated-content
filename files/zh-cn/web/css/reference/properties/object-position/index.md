---
title: object-position
slug: Web/CSS/Reference/Properties/object-position
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`object-position`** 规定了[可替换元素](/zh-CN/docs/Web/CSS/Guides/Images/Replaced_element_properties)的内容，在这里我们称其为对象（即 **`object-position`** 中的 **`object`**）在其内容框中的位置。可替换元素的内容框中未被对象所覆盖的部分，则会显示该元素的背景。

你还可以使用 {{cssxref("object-fit")}} 属性来改变可替换元素的对象的内在的大小（即它看上去的大小）的调整方式，借助拉伸与缩放等使对象更好地适应元素的内容框。

{{InteractiveExample("CSS Demo: object-position")}}

```css interactive-example-choice
object-position: 50% 50%;
```

```css interactive-example-choice
object-position: right top;
```

```css interactive-example-choice
object-position: left bottom;
```

```css interactive-example-choice
object-position: 250px 125px;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/moon.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: 250px;
  width: 250px;
  object-fit: none;
  border: 1px solid red;
}
```

## 语法

```css
/* 关键字值 */
object-position: top;
object-position: bottom;
object-position: left;
object-position: right;
object-position: center;

/* <percentage> 值 */
object-position: 25% 75%;

/* <length> 值 */
object-position: 0 0;
object-position: 1cm 2cm;
object-position: 10ch 8em;

/* 边缘偏移值 */
object-position: bottom 10px right 20px;
object-position: right 3em bottom 10px;
object-position: top 0 right 10px;

/* 全局关键字 */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: revert-layer;
object-position: unset;
```

### 取值

- {{cssxref("&lt;position&gt;")}}
  - : 使用 1 到 4 个值来定义该元素在它所处的二维平面中的定位。可以使用相对或绝对偏移。

> [!NOTE]
> 这些定位方式允许被替换元素的对象被定位到内容框外部。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 定位图像内容

#### HTML

HTML 包含两个 {{HTMLElement("img")}} 元素，分别展示了 MDN 的 logo。

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### CSS

CSS 包括 `<img>` 元素本身的默认样式，以及两个图像各自的样式。

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

第一个图像的左边缘距元素框左边缘 10 个像素。第二个图像的右边缘与元素框的右边缘齐平，并位于元素框高度下方 10% 处。

#### 结果

{{ EmbedLiveSample('定位图像内容', '100%','300px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与图像相关的 CSS 属性：{{cssxref("object-fit")}}、{{cssxref("image-orientation")}}、{{cssxref("image-rendering")}}、{{cssxref("image-resolution")}}。
