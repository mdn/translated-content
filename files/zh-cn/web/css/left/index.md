---
title: left
slug: Web/CSS/left
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`left`**属性定义了定位元素的左外边距边界与其包含块左边界之间的偏移，非定位元素设置此属性无效。

```css
/* <length> values */
left: 3px;
left: 2.4em;

/* <percentage>s of the width of the containing block */
left: 10%;

/* Keyword value */
left: auto;

/* Global values */
left: inherit;
left: initial;
left: unset;
```

`left`的效果取决于元素的`position`属性：

- 当`position`设置为`absolute`或`fixed`时，`left`属性指定了定位元素左外边距边界与其包含块左边界之间的偏移。
- 当`position`设置为`relative`时，`left`属性指定了元素的左边界离开其正常位置的偏移。
- 当`position`设置为`sticky`时，如果元素在 viewport 里面，`left`属性的效果和 position 为`relative`等同；如果元素在 viewport 外面，`left`属性的效果和 position 为`fixed`等同。
- 当`position`设置为`static`时，`left`属性无效。

当`left`和{{cssxref("right")}} 同时指定时，元素的位置会被重复指定。当容器是从左到右时，`left`的值会被优先设定；当容器是从右到左时，`right`的值会被优先设定。

{{cssinfo}}

## 语法

### 值

- {{cssxref("&lt;length&gt;")}}

  - : 可以是负的，正的 或者 null {{cssxref("&lt;length&gt;")}} 表示：

    - 对于绝对定位的元素，元素左外边距边界与其包含块左边界之间的偏移。
    - 对于相对定位定位的元素，元素的左边界离开其正常位置的偏移。

- {{cssxref("&lt;percentage&gt;")}}
  - : 代表元素包含块的宽度的百分比 {{cssxref("&lt;percentage&gt;")}}。
- `auto`

  - : 这个关键字表示：

    - 对于绝对定位元素，元素将忽略此属性而以{{ Cssxref("right") }}属性为准，如果此时设置`width: auto`，将基于内容需要的宽度设置宽度；如果`right`也为`auto`的话，元素的水平位置就是它假如作为静态 (即 static) 元素时该在的位置。
    - 对于相对定位元素，元素相对正常位置的偏移量将基于{{ Cssxref("right") }}属性；如果`right`也为`auto`的话，元素将不会有偏移。

- `inherit`
  - : 这个关键字表示该值与其父元素 (可能不是它的包含块) 的计算值相同。对这个计算值的处理将和它原本为 {{cssxref("&lt;length&gt;")}}， {{cssxref("&lt;percentage&gt;")}} 或 `auto` 一样。

### 常用语法

{{csssyntax}}

## 示例

### CSS

```css
#wrap {
  width: 700px;
  margin: 0 auto;
  background: #5c5c5c;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  white-space: pre-line;
  word-wrap: break-word;
}

#example_1 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 20px;
  top: 20px;
  background-color: #d8f5ff;
}

#example_2 {
  width: 200px;
  height: 200px;
  position: relative;
  top: 0;
  right: 0;
  background-color: #c1ffdb;
}
#example_3 {
  width: 600px;
  height: 400px;
  position: relative;
  top: 20px;
  left: 20px;
  background-color: #ffd7c2;
}

#example_4 {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #ffc7e4;
}
```

### HTML

```html
<div id="wrap">
  <div id="example_1">
    <pre>
      position: absolute;
      left: 20px;
      top: 20px;
    </pre>
    <p>
      The only containing element for this div is the main window, so it
      positions itself in relation to it.
    </p>
  </div>

  <div id="example_2">
    <pre>
      position: relative;
      top: 0;
      right: 0;
    </pre>
    <p>Relative position in relation to its siblings.</p>
  </div>

  <div id="example_3">
    <pre>
      float: right;
      position: relative;
      top: 20px;
      left: 20px;
    </pre>
    <p>Relative to its sibling div above, but removed from flow of content.</p>

    <div id="example_4">
      <pre>
        position: absolute;
        bottom: 10px;
        right: 20px;
      </pre>
      <p>Absolute position inside of a parent with relative position</p>
    </div>
  </div>
</div>
```

### 案例

{{EmbedLiveSample('示例',1200,650)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("position")}}, {{cssxref("right")}}, {{cssxref("top")}}, {{cssxref("bottom")}}
