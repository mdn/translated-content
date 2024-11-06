---
title: max-width
slug: Web/CSS/max-width
l10n:
  sourceCommit: 925b2bd8beeae6ce8237863637bcd28ccbb8d47f
---

{{CSSRef}}

**`max-width`** [CSS](/zh-CN/docs/Web/CSS) 属性设置元素的最大宽度。它可防止 {{cssxref("width")}} 属性的[应用值](/zh-CN/docs/Web/CSS/used_value)大于 `max-width` 指定的值。

{{EmbedInteractiveExample("pages/css/max-width.html")}}

`max-width` 会覆盖 {{cssxref("width")}} 的设置，但 {{ Cssxref("min-width") }} 的设置会覆盖 `max-width`。

## 语法

```css
/* <length> 值 */
max-width: 3.5em;

/* <percentage> 值 */
max-width: 75%;

/* 关键字值 */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fit-content(20em);

/* 全局值 */
max-width: inherit;
max-width: initial;
max-width: revert;
max-width: revert-layer;
max-width: unset;
```

### 值

- `<length>`
  - : 以绝对值定义 `max-width`。
- `<percentage>`
  - : 以包含区块的宽度百分比定义 `max-width`。
- `none`
  - : 盒子大小没有限制。
- `max-content`
  - : 固有首选 `max-width`。
- `min-content`
  - : 固有最小 `max-width`。
- `fit-content`
  - : 使用可用空间，但不得超过 [max-content](/zh-CN/docs/Web/CSS/max-content)，即 `min(max-content,max(min-content,stretch))`。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})` {{Experimental_Inline}}
  - : 使用 `fit-content` 公式，用指定参数替换可用空间，即 `min(max-content, max(min-content, argument))`。

## 无障碍考虑

确保设置了 `max-width` 的元素在页面缩放以增大文字大小时不会被截断和/或遮挡其他内容。

- [MDN 理解 WCAG 准则 1.4](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#准则_1.4：让用户更容易看到和听到内容，包括将前景与背景分开)
- [理解成功标准 1.4.4 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置最大像素宽度

在本例中，“child”的宽度为 150 像素或“parent”的宽度，以较小者为准。

#### HTML

```html
<div id="parent">
  <div id="child">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

#### CSS

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

{{EmbedLiveSample("设置最大像素宽度", 350, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)，{{cssxref("box-sizing")}}
- {{cssxref("width")}}、{{cssxref("min-width")}}
- 映射的逻辑属性：{{cssxref("max-inline-size")}}、{{cssxref("max-block-size")}}
