---
title: border-left-color
slug: Web/CSS/border-left-color
---

{{CSSRef("CSS Borders")}}

**`border-left-color`** 属性设置元素的左边框颜色。值得注意的是，在大数情况下使用 {{cssxref("border-color")}} 或 {{cssxref("border-left")}} 更加方便和普遍。

```css
/* <color> values */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255, 0, 0);
border-left-color: hsla(100%, 50%, 25%, 0.75);
border-left-color: currentColor;
border-left-color: transparent;

/* Global values */
border-left-color: inherit;
border-left-color: initial;
border-left-color: unset;
```

{{cssinfo}}

## 语法

`border-left-color` 属性取值为单个颜色值。

### 取值

- {{cssxref("&lt;color&gt;")}}
  - : 左边框的颜色。

### 形式语法

{{csssyntax}}

## 示例

### 一个带边框的简单 div

#### HTML

```html
<div class="mybox">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="redtext">red</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-left-color: red;
  width: auto;
}
.redtext {
  color: red;
}
```

#### 结果

{{EmbedLiveSample('一个带边框的简单 div')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The border-related CSS shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-left")}}, and {{Cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{Cssxref("border-right-color")}}, {{Cssxref("border-bottom-color")}}, and {{Cssxref("border-top-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-left-style")}} and {{cssxref("border-left-width")}}.
