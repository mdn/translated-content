---
title: max-width
slug: Web/CSS/max-width
---

{{ CSSRef() }}

## 摘要

max-width 属性用来给元素设置最大宽度值。定义了 max-width 的元素会在达到 max-width 值之后避免进一步按照 width 属性设置变大。

{{ Cssxref("max-width") }} 会覆盖{{cssxref("width")}}设置，但 {{ Cssxref("min-width") }}设置会覆盖 {{ Cssxref("max-width") }}.

{{cssinfo}}

## 语法

```css
/* <长度> 值 */
max-width: 3.5em;

/* <百分比> 值 */
max-width: 75%;

/* 关键字 */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fill-available;

/* 全局设置 */
max-width: inherit;
max-width: initial;
max-width: unset;
```

### 可选值

- `none`
  - : 元素未设置最大值
- `<长度>`
  - : 请参阅{{cssxref("&lt;length&gt;")}}所提及的长度单位。
- `<百分比>`
  - : 以父级块级容器宽度的百分比{{cssxref("&lt;percentage&gt;")}}作为最大宽度。
- `max-content`{{experimental_inline()}}
  - : The intrinsic preferred width.
- `min-content`{{experimental_inline()}}
  - : The intrinsic minimum width.
- `fill-available`{{experimental_inline()}}
  - : The containing block width minus horizontal margin, border, and padding. Some browsers implement an ancient name for this keyword, `available`.
- `fit-content`{{experimental_inline()}}
  - : 与 `max-content` 等价。

### 形式语法

{{csssyntax}}

## 示例

### 设置最大像素宽度

在下面的例子里，id 为"child"的\<div>元素设置了 width 值，使它的宽度与父元素"parent"相等 (100%),但是 max-width 值限制了它最大宽度只能到 150px.

#### HTML

```html
<div id="parent">
  <div id="child">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

#### CSS

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

{{EmbedLiveSample("设置最大像素宽度", 350, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("width") }}, {{ Cssxref("min-width") }}, {{ Cssxref("max-height") }}
- [The box model](/zh-CN/CSS/box_model), {{ Cssxref("box-sizing") }}
