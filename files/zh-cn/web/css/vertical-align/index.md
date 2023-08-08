---
title: vertical-align
slug: Web/CSS/vertical-align
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 的属性 **`vertical-align`** 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

vertical-align 属性可被用于两种环境：

- 使行内元素盒模型与其行内元素容器垂直对齐。例如，用于垂直对齐一行文本内的图片{{HTMLElement("img")}}：
- 垂直对齐表格单元内容。

注意 `vertical-align` 只对行内元素、行内块元素和表格单元格元素生效：不能用它垂直对齐[块级元素](/zh-CN/docs/Glossary/Block-level_content)。

## 语法

```css
/* Keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;
```

`vertical-align` 属性指定为下面列出的值之一。

### 行内元素的值

#### 相对父元素的值

这些值使元素相对其父元素垂直对齐：

- `baseline`
  - : 使元素的基线与父元素的基线对齐。HTML 规范没有详细说明部分[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)的基线，如{{HTMLElement("textarea")}} ，这意味着这些元素使用此值的表现因浏览器而异。
- `sub`
  - : 使元素的基线与父元素的下标基线对齐。
- `super`
  - : 使元素的基线与父元素的上标基线对齐。
- `text-top`
  - : 使元素的顶部与父元素的字体顶部对齐。
- `text-bottom`
  - : 使元素的底部与父元素的字体底部对齐。
- `middle`
  - : 使元素的中部与父元素的基线加上父元素 x-height（译注：[x 高度](https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/)）的一半对齐。
- {{cssxref("&lt;length&gt;")}}
  - : 使元素的基线对齐到父元素的基线之上的给定长度。可以是负数。
- {{cssxref("&lt;percentage&gt;")}}
  - : 使元素的基线对齐到父元素的基线之上的给定百分比，该百分比是{{Cssxref("line-height")}}属性的百分比。可以是负数。

#### 相对行的值

下列值使元素相对整行垂直对齐：

- `top`
  - : 使元素及其后代元素的顶部与整行的顶部对齐。
- `bottom`
  - : 使元素及其后代元素的底部与整行的底部对齐。

没有基线的元素，使用外边距的下边缘替代。

### 表格单元格的值

- `baseline` (以及 `sub`, `super`, `text-top`, `text-bottom`, `<length>`, `<percentage>`)
  - : 使单元格的基线，与该行中所有以基线对齐的其他单元格的基线对齐。
- `top`
  - : 使单元格内边距的上边缘与该行顶部对齐。
- `middle`
  - : 使单元格内边距盒模型在该行内居中对齐。
- `bottom`
  - : 使单元格内边距的下边缘与该行底部对齐。

可以是负数。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div>
  An <img src="frame_image.svg" alt="link" width="32" height="32" /> image with
  a default alignment.
</div>
<div>
  An
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-top alignment.
</div>
<div>
  An
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a text-bottom alignment.
</div>
<div>
  An
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  image with a middle alignment.
</div>
```

### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Typical use cases of Flexbox, section "Center item"](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#Center_item)
- {{Cssxref("line-height")}}, {{Cssxref("text-align")}}, {{Cssxref("margin")}}
- [Understanding `vertical-align`, or "How (Not) To Vertically Center Content"](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align: All You Need To Know](https://christopheraue.net/design/vertical-align)
