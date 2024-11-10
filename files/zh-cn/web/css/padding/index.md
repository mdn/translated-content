---
title: padding
slug: Web/CSS/padding
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`padding`** [CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)一次性设置元素所有四条边的[内边距区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#内边距区域)。

{{EmbedInteractiveExample("pages/css/padding.html")}}

一个元素的内边距区域指的是其内容与其边框之间的空间。

> [!NOTE]
> 内边距创建元素内部的额外空间。相反，{{cssxref("margin")}} 创建元素*外部*的额外空间。

## 属性构成

该属性是以下属性的简写：

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

## 语法

```css
/* 应用于所有边 */
padding: 1em;

/* 上边下边 | 左边右边 */
padding: 5% 10%;

/* 上边 | 左边右边 | 下边 */
padding: 1em 2em 2em;

/* 上边 | 右边 | 下边 | 左边 */
padding: 5px 1em 0 2em;

/* 全局值 */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

`padding` 属性接受 1\~4 个值。每个值可以是 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。取值不能为负。

- 当只指定**一个**值时，该值会统一应用到**全部四个边**的内边距上。
- 指定**两个**值时，第一个值会应用于**上边和下边**的内边距，第二个值应用于**左边和右边**。
- 指定**三个**值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的内边距。
- 指定**四个**值时，这些值依次作为**上边**、**右边**、**下边**和**左边**的内边距（顺时针方向）。

### 取值

- {{cssxref("&lt;length&gt;")}}
  - : 作为定值的内边距尺寸。必须是非负值。
- {{cssxref("&lt;percentage&gt;")}}
  - : 相对于[包含块](/zh-CN/docs/Web/CSS/Containing_block)的行内尺寸（水平语言中的*宽度*，由 {{cssxref("writing-mode")}} 定义）的百分比。必须是非负值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 以像素为单位设置内边距

#### HTML

```html
<h4>此元素有合适的内边距。</h4>
<h3>此元素的内边距很大！</h3>
```

#### CSS

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### 结果

{{EmbedLiveSample('以像素为单位设置内边距', '100%', 300)}}

### 以像素和百分比为单位设置内边距

```css
padding: 5%; /* 所有边：5% 的内边距 */

padding: 10px; /* 所有边：10px 的内边距 */

padding: 10px 20px; /* 上边和下边：10px 的内边距 */
/* 左边和右边：20px 的内边距 */

padding: 10px 3% 20px; /* 上边：10px 的内边距 */
/* 左边和右边：3% 的内边距 */
/* 下边：20px 的内边距 */

padding: 1em 3px 30px 5px; /* 上边：1em 的内边距*/
/* 右边：3px 的内边距*/
/* 下边：30px 的内边距*/
/* 左边：5px 的内边距*/
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 基本盒模型介绍](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}、{{cssxref("padding-right")}}、{{cssxref("padding-left")}} 和 {{cssxref("padding-left")}}。
- 映射的逻辑属性：{{cssxref("padding-block-start")}}、{{cssxref("padding-block-end")}}、{{cssxref("padding-inline-start")}} 和 {{cssxref("padding-inline-end")}} 以及简写属性 {{cssxref("padding-block")}} 和 {{cssxref("padding-inline")}}
