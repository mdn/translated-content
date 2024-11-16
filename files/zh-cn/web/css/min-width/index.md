---
title: min-width
slug: Web/CSS/min-width
l10n:
  sourceCommit: 925b2bd8beeae6ce8237863637bcd28ccbb8d47f
---

{{CSSRef}}

`min-width` [CSS](/zh-CN/docs/Web/CSS) 属性为给定元素设置最小宽度。它可以阻止 {{cssxref("width")}} 属性的[应用值](/zh-CN/docs/Web/CSS/used_value)小于 `min-width` 指定的值。

{{EmbedInteractiveExample("pages/css/min-width.html")}}

当 `min-width` 大于 {{Cssxref("max-width")}} 或 {{Cssxref("width")}} 时，元素的宽度将被设置为 `min-width` 的值。

## 语法

```css
/* <length> 值 */
min-width: 3.5em;

/* <percentage> 值 */
min-width: 10%;

/* 关键字值 */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fit-content(20em);

/* 全局值 */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: revert-layer;
min-width: unset;
```

### 值

- `<length>`
  - : 以绝对值定义 `min-width`。
- `<percentage>`
  - : 以包含区块的宽度百分比定义 `min-width`。
- `auto`
  - : 浏览器将计算并选择指定元素的 `min-width`。
- `max-content` {{ experimental_inline() }}
  - : 固有首选 `min-width`。
- `min-content` {{ experimental_inline() }}
  - : 固有最小 `min-width`。
- `fit-content`
  - : 使用可用空间，但不得超过 [max-content](/zh-CN/docs/Web/CSS/max-content)，即 `min(max-content,max(min-content,stretch))`。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})` {{Experimental_Inline}}
  - : 使用 `fit-content` 公式，用指定参数替换可用空间，即 `min(max-content, max(min-content, argument))`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置元素最小宽度

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref("width") }}、{{ Cssxref("max-width") }}
- [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)，{{ Cssxref("box-sizing") }}
