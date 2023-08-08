---
title: color
slug: Web/CSS/color
---

{{CSSRef}}

`color` CSS 属性设置[颜色值](/zh-CN/docs/Web/CSS/color_value)的前景色以及[文本装饰](/zh-CN/docs/Web/CSS/text-decoration)，并设置{{cssxref("currentcolor")}}值。`currentcolor`可以对其他颜色属性用作不直接的值，比如{{cssxref("border-color")}}。{{EmbedInteractiveExample("pages/css/color.html")}}对于在 HTML 中使用颜色的概述，参考[使用 CSS 对 HTML 元素实现颜色](/zh-CN/docs/)。

## 语法

```css
/* 关键词 */
color: currentcolor;

/* <named-color>值 */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color>值 */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()>值 */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* <hsl()>值 */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* 全局值 */
color: inherit;
color: initial;
color: unset;
```

`color` 属性被指定为一个单个的 {{cssxref("&lt;color&gt;")}}值。

注意值必须是规则的 {{cssxref("color")}}。它不可以是{{cssxref("&lt;gradient&gt;")}}（实际上为{{cssxref("&lt;image&gt;")}}的一部分）。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 设置元素的文本或装饰的颜色。

## Accessibility concerns

It is important to ensure that the contrast ratio between the color of the text and the background the text is placed over is high enough that people experiencing low vision conditions will be able to read the content of the page.

Color contrast ratio is determined by comparing the luminosity of the text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/zh-CN/docs/Web/CSS/font-weight) or larger, or 24px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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
- 其他颜色相关属性：{{cssxref("background-color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}、{{cssxref("caret-color")}}、{{cssxref("column-rule-color")}}和{{cssxref("color-adjust")}}
- [使用 CSS 对 HTML 元素应用颜色](/zh-CN/docs/Web/HTML/Applying_color)
