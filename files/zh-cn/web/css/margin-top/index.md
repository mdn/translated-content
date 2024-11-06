---
title: margin-top
slug: Web/CSS/margin-top
---

{{CSSRef}}

**`margin-top`** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置元素的顶部外边距[外边距区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#外边距区域)。正值使它离相邻元素更远，而负值使它更靠近相邻元素。

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

此属性对于*不*[_可替换_](/zh-CN/docs/Web/CSS/Replaced_element)的内联元素没有效果，比如 {{HTMLElement("span")}} 或 {{HTMLElement("code")}}。

## 语法

```css
/* <length> 值 */
margin-top: 10px; /* 绝对长度 */
margin-top: 1em; /* 相对与文本的大小 */
margin-top: 5%; /* 相对于最近的块容器的宽度 */

/* 关键字值 */
margin-top: auto;

/* 全局关键字值 */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

`margin-top` 属性可以用关键字 `auto`、`<length>` 或 `<percentage>` 来设置。其值可以是正值、负值或零。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 设置固定边距大小。
- {{cssxref("&lt;percentage&gt;")}}
  - : 相对于[包含块](/zh-CN/docs/Web/CSS/Containing_block)的内联尺寸（对于竖排语言则是*宽度*，这由 {{cssxref("writing-mode")}} 定义）的百分比边距大小。
- `auto`
  - : 浏览器选择一个合适的值来使用。参见 {{cssxref("margin")}}。

### 形式语法

{{csssyntax}}

## 示例

### 将上边距设置为正值和负值

```css
.content {
  margin-top: 5%;
}
.sidebox {
  margin-top: 10px;
}
.logo {
  margin-top: -5px;
}
#footer {
  margin-top: 1em;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("margin-right")}}、{{cssxref("margin-bottom")}}、{{cssxref("margin-left")}}，以及 {{cssxref("margin")}} 简写属性
- 映射的逻辑属性：{{cssxref("margin-block-start")}}、{{cssxref("margin-block-end")}}、{{cssxref("margin-inline-start")}}、{{cssxref("margin-inline-end")}}，以及 {{cssxref("margin-block")}} 和 {{cssxref("margin-inline")}} 简写属性
