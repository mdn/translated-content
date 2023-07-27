---
title: bottom
slug: Web/CSS/bottom
---

{{CSSRef}}

**`bottom`**[样式](/zh-CN/docs/Web/CSS)属性定义了定位元素下外边距边界与其包含块下边界之间的偏移，非定位元素设置此属性无效。

`bottom`的效果取决于元素的`position`属性：

- 当`position`设置为`absolute`或`fixed`时，`bottom`属性指定了定位元素下外边距边界与其包含块下边界之间的偏移。
- 当`position`设置为`relative`时，`bottom`属性指定了元素的下边界离开其正常位置的偏移。
- 当`position`设置为`sticky`时，如果元素在 viewport 里面，`bottom`属性的效果和 position 为`relative`等同；如果元素在 viewport 外面，`bottom`属性的效果和 position 为`fixed`等同。
- 当`position`设置为`static`时，`bottom`属性无效。

当 {{cssxref("top")}}和`bottom`同时指定时，并且 {{cssxref("height")}}没有被指定或者指定为`auto`或`100%`的时候，{{cssxref("top")}}和`bottom`都会生效，在其他情况下，如果 {{cssxref("height")}}被限制，则{{cssxref("top")}}属性会优先设置，`bottom`属性则会被忽略。

{{cssinfo}}

## 语法

```plain
/* <length> values */
bottom: 3px;
bottom: 2.4em;

/* <percentage>s of the height of the containing block */
bottom: 10%;

/* Keyword value */
bottom: auto;

/* Global values */
bottom: inherit;
bottom: initial;
bottom: unset;
```

### 值

- 对于**绝对定位的元素**，元素下外边距边界与其包含块下边界之间的偏移。
- 对于**相对定位定位的元素**，元素的下边界离开其正常位置的偏移。

- `<length>`
  - : 一个负值、空值或正值，代表了：
- `<percentage>`
  - : 包含块高度的百分比{{cssxref("&lt;percentage&gt;")}}。
- `auto`

  - : 规定：

    - 对于绝对定位元素，元素将忽略此属性而以{{ Cssxref("top") }}属性为准，如果此时设置`height: auto`，将基于内容需要的高度设置宽度；如果`top`也为`auto`的话，元素的垂直位置就是它假如作为静态 (即 static) 元素时该在的位置。
    - 对于相对定位元素，元素相对正常位置的偏移量将基于{{ Cssxref("top") }}属性；如果`top`也为`auto`的话，元素将不会有偏移。

- `inherit`
  - : 指代有明确计算结果的父级元素的值，（需要注意的是，父级元素并不一定是包裹该子元素的块级元素）。该值会根据父级元素的具体情况被处理为{{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}或者`auto`。

### Formal syntax

{{csssyntax}}

## 示例

下面的例子分别展示了`bottom`属性在`position`为`absolute`和`fixed`的不同行为。

### HTML

```html
<p>
  This<br />is<br />some<br />tall,<br />tall,<br />tall,<br />tall,<br />tall<br />content.
</p>
<div class="fixed"><p>Fixed</p></div>
<div class="absolute"><p>Absolute</p></div>
```

### CSS

```css
p {
  font-size: 30px;
  line-height: 2em;
}

div {
  width: 48%;
  text-align: center;
  background: rgba(55, 55, 55, 0.2);
  border: 1px solid blue;
}

.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

### 结果

{{EmbedLiveSample('示例','500','250')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
