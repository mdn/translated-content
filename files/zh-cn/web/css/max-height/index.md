---
title: max-height
slug: Web/CSS/max-height
l10n:
  sourceCommit: 925b2bd8beeae6ce8237863637bcd28ccbb8d47f
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`max-height`** 设置元素的最大高度。它防止 {{cssxref("height")}} 属性的[应用值](/zh-CN/docs/Web/CSS/used_value)大于 `max-height` 指定的值。

{{EmbedInteractiveExample("pages/css/max-height.html")}}

`max-height` 会覆盖 {{cssxref("height")}}，而 {{cssxref("min-height")}} 会覆盖 `max-height`。

## 语法

```css
/* <length> 值 */
max-height: 3.5em;

/* <percentage> 值 */
max-height: 75%;

/* 关键字值 */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fit-content(20em);

/* 全局值 */
max-height: inherit;
max-height: initial;
max-height: revert;
max-height: revert-layer;
max-height: unset;
```

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 定义作为绝对值的 `max-height`。
- {{cssxref("&lt;percentage&gt;")}}
  - : 定义作为包含区块高度百分比的 `max-height`。
- `none`
  - : 盒子大小没有限制。
- `max-content`
  - : 固有的首选 `max-height`。
- `min-content`
  - : 固有的最小 `max-height`。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})` {{Experimental_Inline}}
  - : 使用 `fit-content` 公式，用指定参数替换可用空间，即 `min(max-content, max(min-content, argument))`。

## 无障碍考虑

确保设置了 `max-height` 的元素在页面缩放以增大文字大小时不会被截断和/或遮挡其他内容。

- [MDN 理解 WCAG 准则 1.4](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#准则_1.4：让用户更容易看到和听到内容，包括将前景与背景分开)
- [理解成功标准 1.4.4 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用百分比和关键字值设置 max-height

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)、{{cssxref("box-sizing")}}
- {{Cssxref("height")}}、{{Cssxref("min-height")}}
- 映射的逻辑属性：{{cssxref("max-inline-size")}}、{{cssxref("max-block-size")}}
