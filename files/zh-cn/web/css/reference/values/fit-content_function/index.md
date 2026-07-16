---
title: fit-content()
slug: Web/CSS/Reference/Values/fit-content_function
---

**`fit-content()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)根据公式 `min(maximum size, max(minimum size, argument))` 将给定大小钳制为可用大小。

```css
/* <length> 值 */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* <percentage> 值 */
fit-content(40%)
```

The function can be used as a track size in [CSS Grid](/zh-CN/docs/Web/CSS/Guides/Grid_layout) properties, where the maximum size is defined by [`max-content`](/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-columns#max-content) and the minimum size by [`auto`](/zh-CN/docs/Web/CSS/Reference/Properties/grid-template-columns#auto), which is calculated similar to `auto` (i.e., [`minmax(auto, max-content)`](/zh-CN/docs/Web/CSS/Reference/Values/minmax)), except that the track size is clamped at _argument_ if it is greater than the `auto` minimum.

The function can also be used as laid out box size for {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} and {{cssxref("max-height")}}, where the maximum and minimum sizes refer to the content size.

## 语法

The `fit-content()` function accepts a `<length>` or a `<percentage>` as an argument.

### 值

- {{cssxref("&lt;length&gt;")}}
  - : An absolute length.
- {{cssxref("&lt;percentage&gt;")}}
  - : A percentage relative to the available space in the given axis.
    In grid properties it is relative to the inline size of the grid container in column tracks and to the block size of the grid container for row tracks. Otherwise it is relative to the available inline size or block size of the laid out box depending on the writing mode.

### 形式语法

{{CSSSyntax("fit-content")}}

## 示例

### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>Item as wide as the content.</div>
  <div>
    Item with more text in it. Because the contents of it are wider than the
    maximum width, it is clamped at 300 pixels.
  </div>
  <div>Flexible item</div>
</div>
```

### 结果

{{EmbedLiveSample("示例", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
