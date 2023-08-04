---
title: right
slug: Web/CSS/right
---

{{CSSRef}}

**`right`** [CSS](/zh-CN/docs/Web/CSS) 属性定义了定位元素的右外边距边界与其包含块右边界之间的偏移，非定位元素设置此属性无效。

```css
/* <length> values */
right: 3px;
right: 2.4em;

/* <percentage>s of the width of the containing block */
right: 10%;

/* Keyword value */
right: auto;

/* Global values */
right: inherit;
right: initial;
right: unset;
```

`right`的效果取决于元素的`position`属性：

- 当 `position` 设置为 `absolute` 或 `fixed` 时，`right` 属性指定了定位元素右外边距边界与其包含块右边界之间的偏移。
- 当 `position` 设置为 `relative` 时，`right` 属性指定了元素的右边界离开其正常位置的偏移。
- 当 `position` 设置为 `sticky` 时，如果元素在 viewport 里面，`right` 属性的效果和 position 为 `relative` 等同；如果元素在 viewport 外面，`right` 属性的效果和 position 为 `fixed` 等同。
- 当 `position` 设置为 `static` 时，`right` 属性无效。

当 {{cssxref("left")}} 和 right 同时指定时，元素的位置会被重复指定。当容器是从左到右时，`left` 的值会被优先设定；当容器是从右到左时，`right` 的值会被优先设定。

{{cssinfo}}

## 语法

### 取值

- {{cssxref("&lt;length&gt;")}}

  - : 可以是负的，正的 或者 null {{cssxref("&lt;length&gt;")}} 表示：

    - 对于**绝对定位的元素**，元素右外边距边界与其包含块右边界之间的偏移。
    - 对于**相对定位定位的元素**，元素的右边界离开其正常位置的偏移。

- {{cssxref("&lt;percentage&gt;")}}
  - : 代表元素包含块的宽度的百分比 {{cssxref("&lt;percentage&gt;")}}。
- `auto`

  - : 这个关键字表示：

    - 对于绝对定位元素，元素将忽略此属性而以 {{ Cssxref("left") }} 属性为准，如果此时设置 `width: auto`，将基于内容需要的宽度设置宽度；如果 `left` 也为 `auto` 的话，元素的水平位置就是它假如作为静态（即 static）元素时该在的位置。
    - 对于相对定位元素，元素相对正常位置的偏移量将基于 {{ Cssxref("left") }} 属性；如果 `left` 也为 `auto` 的话，元素将不会有偏移。

- `inherit`
  - : 这个关键字表示该值与其父元素（可能不是它的包含块）的计算值相同。对这个计算值的处理将和它原本为 {{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;percentage&gt;")}} 或 `auto` 一样。

### 形式语法

{{csssyntax}}

## 示例

```css
#example_3 {
  width: 100px;
  height: 100px;
  background-color: #ffc7e4;
  position: relative;
  top: 20px;
  left: 20px;
}

#example_4 {
  width: 100px;
  height: 100px;
  background-color: #ffd7c2;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
```

```html
<div id="example_3">Example 3</div>
<div id="example_4">Example 4</div>
```

{{ EmbedLiveSample('示例', 500, 220) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
