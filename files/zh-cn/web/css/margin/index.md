---
title: margin
slug: Web/CSS/margin
---

{{CSSRef}}

**`margin`** 属性为给定元素设置所有四个（上下左右）方向的外边距属性。也就是 {{cssxref("margin-top")}}，{{cssxref("margin-right")}}，{{cssxref("margin-bottom")}}，和 {{cssxref("margin-left")}} 四个外边距属性设置的[简写](/zh-CN/docs/Web/CSS/Shorthand_properties)。

{{EmbedInteractiveExample("pages/css/margin.html")}}

上、下外边框的设置对*不[可替换](/zh-CN/docs/Web/CSS/Replaced_element)*内联元素，如 {{HTMLElement("span")}} 和 {{HTMLElement("code")}}，无效。

> **备注：** 外边距控制的是元素外部空出的空间。相反，{{cssxref("padding")}} 操作元素*内部*空出的空间。

## 语法

```css
/* 应用于所有边 */
margin: 1em;
margin: -3px;

/* 上边下边 | 左边右边 */
margin: 5% auto;

/* 上边 | 左边右边 | 下边 */
margin: 1em auto 2em;

/* 上边 | 右边 | 下边 | 左边 */
margin: 2px 1em 0 auto;

/* 全局值 */
margin: inherit;
margin: initial;
margin: unset;
```

`margin` 属性接受 1\~4 个值。每个值可以是 {{cssxref("&lt;length&gt;")}}，{{cssxref("&lt;percentage&gt;")}}，或 [`auto`](#auto)。取值为负时元素会比原来更接近临近元素。

- 当只指定**一个**值时，该值会统一应用到**全部四个边**的外边距上。
- 指定**两个**值时，第一个值会应用于**上边和下边**的外边距，第二个值应用于**左边和右边**。
- 指定**三个**值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的外边距。
- 指定**四个**值时，依次（顺时针方向）作为**上边**，**右边**，**下边**，和**左边**的外边距。

### 可取值

- **{{cssxref("length")}}**
  - : 以固定值为外边距。
- {{cssxref("percentage")}}
  - : 相对于[包含块](/zh-CN/docs/Web/CSS/Containing_block)的*宽度*，以百分比值为外边距。
- `auto`
  - : 让浏览器自己选择一个合适的外边距。有时，在一些特殊情况下，该值可以使元素居中。

### 语法格式

{{csssyntax}}

## 示例

### 简单的例子

#### HTML

```html
<div class="center">此元素会被居中。</div>

<div class="outside">此元素会显示在包含块之外。</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('简单的例子','100%',120) }}

### 更多的例子

```css
margin: 5%; /* 所有边：5% 的外边距 */

margin: 10px; /* 所有边：10px 的外边距 */

margin: 1.6em 20px; /* 上边和下边：1.6em 的外边距 */
/* 左边和右边：20px 的外边距  */

margin: 10px 3% -1em; /* 上边：10px 的外边距 */
/* 左边和右边：3% 的外边距   */
/* 下边：     -1em 的外边距 */

margin: 10px 3px 30px 5px; /* 上边：10px 的外边距 */
/* 右边：3px 的外边距  */
/* 下边：30px 的外边距 */
/* 左边：5px 的外边距  */

margin: 2em auto; /* 上边和下边：2em 的外边距 */
/* 水平方向居中            */

margin: auto; /* 上边和下边：无外边距 */
/* 水平方向居中        */
```

## 贴士

### 水平居中

在现代浏览器中实现水平居中，可以使用 {{cssxref("display")}}`: flex;` {{cssxref("justify-content")}}`: center;`。

不过，在 IE8-9 这样的不支持弹性盒布局的旧式浏览器中，上述代码并不会生效。此时要实现在父元素中居中，可使用 `margin: 0 auto;`。

### 外边距重叠

上下元素的下上外边距有时会重叠，实际空出的空间长度变为两外边距中的较长值。查看[外边距重叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)可找到更多信息。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [CSS 基础框盒模型介绍](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [外边距重叠](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- 逻辑相关的属性：{{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}，和 {{cssxref("margin-inline-end")}} 与其简称 {{cssxref("margin-block")}} 和 {{cssxref("margin-inline")}}
