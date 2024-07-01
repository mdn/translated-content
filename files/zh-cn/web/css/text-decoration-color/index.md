---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 属性 **`text-decoration-color`** 用于设置文本修饰线的颜色，文本修饰线是通过 {{ cssxref("text-decoration-line") }} 属性指定的。

修饰线包括下划线、上划线、删除线和波浪线，波浪线的典型用途是标明内容拼写错误（仅举例）。被指定的颜色会作用到该属性值有效范围内的所有修饰线上。

{{EmbedInteractiveExample("pages/css/text-decoration-color.html")}}

CSS 没有直接的机制为每种线型指定唯一的颜色，不过可以通过嵌套元素的方法来实现这种效果：用 {{cssxref("text-decoration-line")}} 属性为每个元素应用一种线型，再用 `text-decoration-color` 指定线的颜色。

## 语法

```css
/* <color> values */
text-decoration-color: currentColor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgba(255, 128, 128, 0.5);
text-decoration-color: transparent;

/* Global values */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: unset;
```

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 修饰文本的线的颜色。

### 形式语法

{{csssyntax}}

## 示例

```html
<p>
  This paragraph has <s>some erroneous text</s> inside it that I want to call
  attention to.
</p>
```

```css
p {
  text-decoration-line: underline;
  text-decoration-color: cyan;
}

s {
  text-decoration-line: line-through;
  text-decoration-color: red;
  text-decoration-style: wavy;
}
```

{{EmbedLiveSample('示例')}}

## Accessibility concerns

It is important to ensure that the contrast ratio between the color of the text, the background the text is placed over, and the text decoration line is high enough that people experiencing low vision conditions will be able to read the content of the page. Color contrast ratio is determined by comparing the luminosity of the text and background color values.

Color alone should not be used to convey meaning. For example, change of text and text-decoration-color alone is not enouch to indicate a link has focus.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 当要设置多个线修饰属性时，用 {{cssxref("text-decoration")}} 简写属性会比分别写多个属性更方便。
- {{cssxref("&lt;color&gt;")}} 数据类型
- 其他与颜色相关的属性：{{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, 和 {{cssxref("column-rule-color")}}
- [使用 CSS 为 HTML 设置颜色](/zh-CN/docs/Web/HTML/Applying_color)
