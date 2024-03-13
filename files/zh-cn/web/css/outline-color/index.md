---
title: outline-color
slug: Web/CSS/outline-color
---

{{CSSRef}}

**`outline-color`** CSS 属性 被用于设置一个元素轮廓的颜色。

{{EmbedInteractiveExample("pages/css/outline-color.html")}}

大多时候使用{{cssxref("outline")}}而不是 `outline-style`, `outline-width` 和 `outline-color`会更方便。

元素轮廓是绘制于元素周围的一条线，位于{{cssxref("border")}}的外围，使元素突出。不像 border，轮廓在元素的 frame 外绘制并且可能与其他元素重叠。而 border 不会出现这种现象 (除非故意).

## 语法

```css
/* <color> values */
outline-color: #f92525;
outline-color: rgb(30, 222, 121);
outline-color: blue;

/* Keyword value */
outline-color: invert;

/* Global values */
outline-color: inherit;
outline-color: initial;
outline-color: unset;
```

`outline-color`可用以下这些值。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 轮廓颜色，规则同 `<color>`.
- `invert`
  - : 反色，用于确认轮廓的显示。注意不是所有浏览器都支持该属性，若不则该属性无效。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<p>My outline is blue, as you can see.</p>
```

### CSS

```css
p {
  outline: 2px solid; /* Set the outline width and style */
  outline-color: #0000ff; /* Make the outline blue */
  margin: 5px;
}
```

{{ EmbedLiveSample('示例') }}

## Accessibility concerns

Custom [focus styles](/zh-CN/docs/Web/CSS/:focus) commonly involve making adjustments to the {{cssxref("outline")}} property. If the color of the outline is adjusted, it is important to ensure that the contrast ratio between it and the background the outline is placed over is high enough that people experiencing low vision conditions will be able to perceive it.

Color contrast ratio is determined by comparing the luminosity of the text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/zh-CN/docs/Web/CSS/font-weight) or larger, or 24px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;color&gt;")}} 数据类型
- 其他与颜色有关的属性：{{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, 和{{cssxref("column-rule-color")}}
- [Applying color to HTML elements using CSS](/zh-CN/docs/Web/HTML/Applying_color)
