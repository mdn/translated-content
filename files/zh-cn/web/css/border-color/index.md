---
title: border-color
slug: Web/CSS/border-color
---

{{CSSRef}}

## 概括

CSS 属性 **`border-color`** 是一个用于设置元素四个边框颜色的快捷属性： {{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}}。

{{cssinfo}}

## 语法

```css
/* border-color: color; 单值语法 */
border-color: red;

/* border-color: vertical horizontal; 双值语法*/
border-color: red #f015ca;

/* border-color: top horizontal bottom; 三值语法 */
border-color: red yellow green;

/* border-color: top right bottom left; 四值语法 */
border-color: red yellow green blue;

border-color: inherit;
```

### 取值

- `color`
  - : 使用 {{cssxref("&lt;color&gt;")}} 来表示四个边框的颜色，仅用于单值语法。
- `horizontal`
  - : 使用 {{cssxref("&lt;color&gt;")}} 来表示水平（左边框和右边框）边框的颜色，仅用于双值语法。
- `vertical`
  - : 使用 {{cssxref("&lt;color&gt;")}} 来表示垂直（上边框和下边框）边框的颜色，仅用于双值或三值语法。
- `top`
  - : 使用 {{cssxref("&lt;color&gt;")}} 来表示上边框的颜色，仅用于三值或四值语法。
- `bottom`
  - : 使用 {{cssxref("&lt;color&gt;")}} 来表示下边框的颜色，仅用于三值或四值语法。
- `right`
  - : 使用 {{cssxref("&lt;color&gt;")}} 来表示右边框的颜色，仅用于四值语法。
- `left`
  - : 使用 {{cssxref("&lt;color&gt;")}} 来表示左边框的颜色，仅用于四值语法。
- `inherit`
  - : 这是一个关键词，用于指示四边的颜色值均继承自父元素的计算值。

### 语法定义

{{csssyntax}}

## Complete_border-color_usage2

### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: cyan black gold;</code> is equivalent to</p>
  <ul>
    <li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

{{ EmbedLiveSample('Complete_border-color_usage2', 600, 300) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他参考

- 与 border-color 相关的 CSS 属性：{{Cssxref("border")}}, {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}},
- 与边框相关的其他 CSS 属性：{{Cssxref("border-width")}}, {{Cssxref("border-style")}}
