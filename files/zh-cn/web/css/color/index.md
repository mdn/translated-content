---
title: color
slug: Web/CSS/color
---

{{CSSRef}}

CSS **`color`** 属性设置元素的文本以及[文本装饰](/zh-CN/docs/Web/CSS/text-decoration)的前景色[颜色值](/zh-CN/docs/Web/CSS/color_value)，并设置 [`currentcolor`](/zh-CN/docs/Web/CSS/color_value#currentcolor_关键字) 值。`currentcolor` 可以用作*其他*属性的间接值，且为其他颜色属性（如 {{cssxref("border-color")}}）的默认值。

{{EmbedInteractiveExample("pages/css/color.html")}}

对于在 HTML 中使用颜色的概述，请参考[使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)。

## 语法

```css
/* 关键字值 */
color: currentcolor;

/* <named-color> 值 */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color> 值 */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> 值 */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* <hsl()> 值 */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* <hwb()> 值 */
color: hwb(90 10% 10%);
color: hwb(90 10% 10% / 0.5);
color: hwb(90deg 10% 10%);
color: hwb(1.5708rad 60% 0%);
color: hwb(0.25turn 0% 40% / 50%);

/* 全局值 */
color: inherit;
color: initial;
color: revert;
color: revert-layer;
color: unset;
```

`color` 属性被指定为 {{cssxref("&lt;color&gt;")}} 类型的单值。

注意值必须是一致的 {{cssxref("color")}} 值。它不可以是 {{cssxref("&lt;gradient&gt;")}}（实际上为 {{cssxref("&lt;image&gt;")}} 类型之一）。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 设置元素的文本和装饰部分的颜色。
- [`currentcolor`](/zh-CN/docs/Web/CSS/color_value#currentcolor_关键字)
  - : 将颜色设置为元素的 `color` 属性值。但是，如果设置为 `color` 的值，`currentcolor` 将被视为 `inherit`。

## 无障碍考虑

有一点很重要，要确保文本颜色与文本所在背景之间的对比度足够高，以便低视力的人群能够阅读页面内容。

颜色的对比度是通过比较文本和背景颜色值的亮度确定的。要符合当前的 [Web 内容无障碍指南（WCAG）](https://www.w3.org/WAI/intro/wcag)，文本至少要有 4.5:1 的比例，大文本（比如标题）至少要有 3:1 的比例。具有[加粗](/zh-CN/docs/Web/CSS/font-weight)和至少 18.66px 大小，或者具有至少 24px 大小的文本称为大文本。

- [WebAIM：颜色对比度检查器](https://webaim.org/resources/contrastchecker/)
- [MDN 理解 WCAG，指南 1.4 解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [理解成功标准 1.4.3 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使文本为红色

以下方式可以使得文本显示为红色：

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255, 0, 0);
}
p {
  color: rgb(100%, 0%, 0%);
}
p {
  color: hsl(0, 100%, 50%);
}

/* 50% 透明 */
p {
  color: #ff000080;
}
p {
  color: rgba(255, 0, 0, 0.5);
}
p {
  color: hsla(0, 100%, 50%, 0.5);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 颜色 {{cssxref("&lt;color&gt;")}} 数据类型
- 其他颜色相关属性：{{cssxref("background-color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}、{{cssxref("caret-color")}}、{{cssxref("column-rule-color")}} 和 {{cssxref("print-color-adjust")}}
- [使用 CSS 为 HTML 元素应用颜色](/zh-CN/docs/Web/CSS/CSS_colors/Applying_color)
