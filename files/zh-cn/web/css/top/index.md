---
title: top
slug: Web/CSS/top
---

{{CSSRef}}

**`top`**[样式](/zh-CN/docs/Web/CSS)属性定义了定位元素的上外边距边界与其包含块上边界之间的偏移，非定位元素设置此属性无效。

```css
/* <length> values */
top: 3px;
top: 2.4em;

/* 参照于包含块高度的百分比 */
top: 10%;

/* Keyword value */
top: auto;

/* Global values */
top: inherit;
top: initial;
top: unset;
```

`top`的效果取决于元素的`position`属性：

- 当`position`设置为`absolute`或`fixed`时，`top`属性指定了定位元素上外边距边界与其包含块上边界之间的偏移。
- 当`position`设置为`relative`时，`top`属性指定了元素的上边界离开其正常位置的偏移。
- 当`position`设置为`sticky`时，如果元素在 viewport 里面，`top`属性的效果和 position 为`relative`等同；如果元素在 viewport 外面，`top`属性的效果和 position 为`fixed`等同。
- 当`position`设置为`static`时，`top`属性无效。

当`top`和{{cssxref("bottom")}}同时指定时，并且 {{cssxref("height")}}没有被指定或者指定为`auto`的时候，`top`和{{cssxref("bottom")}} 都会生效，在其他情况下，如果 {{cssxref("height")}}被限制，则{{cssxref("top")}}属性会优先设置，`bottom`属性则会被忽略。

{{cssinfo}}

## 语法

### 取值

- {{cssxref("&lt;length&gt;")}}

  - : 可以是负的，正的 或者 null {{cssxref("&lt;length&gt;")}} 表示：

    - 对于**绝对定位的元素**，元素下外边距边界与其包含块下边界之间的偏移。
    - 对于**相对定位定位的元素**，元素的下边界离开其正常位置的偏移。

- {{cssxref("&lt;percentage&gt;")}}
  - : 代表元素包含块的高度的百分比 {{cssxref("&lt;percentage&gt;")}}。
- `auto`

  - : 这个关键字表示：

    - 对于绝对定位元素，元素将忽略此属性已{{ Cssxref("bottom") }}属性为准，如果此时设置`height: auto`，将基于内容需要的高度设置高度；如果`bottom`也为`auto`的话，元素的垂直位置就是它假如作为静态 (即 static) 元素时该在的位置。
    - 对于相对定位元素，元素相对正常位置的偏移量将基于{{ Cssxref("bottom") }}属性；如果`bottom`也为`auto`的话，元素将不会有偏移。

- `inherit`
  - : 这个关键字表示该值与其父元素 (可能不是它的包含块) 的计算值相同。对这个计算值的处理将和它原本为 {{cssxref("&lt;length&gt;")}}， {{cssxref("&lt;percentage&gt;")}} 或 `auto` 一样。

## 示例

```css
body {
  background: beige;
}

div {
  position: absolute;
  top: 10%;
  right: 40%;
  bottom: 20%;
  left: 15%;
  background: gold;
  border: 1px solid blue;
}
```

```html
<div>The size of this content is determined by the position of its edges.</div>
```

{{EmbedLiveSample('示例','100%','200')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
