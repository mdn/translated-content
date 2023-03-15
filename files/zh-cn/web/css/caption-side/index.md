---
title: caption-side
slug: Web/CSS/caption-side
---

{{CSSRef}}

[CSS](/zh-CN/CSS) 中 **`caption-side`** 属性会将表格的标题{{HTMLElement("caption")}} 放到规定的位置。但是具体显示的位置与表格的 {{cssxref('writing-mode')}} 属性值有关。

{{EmbedInteractiveExample("pages/css/caption-side.html")}}

## 语法

`caption-side` 属性的取值必须是下面所列值中的一个。

### CSS

```css
/* Directional values */
caption-side: top;
caption-side: bottom;

/* Warning: non-standard values */
caption-side: left;
caption-side: right;
caption-side: top-outside;
caption-side: bottom-outside;

/* Global values */
caption-side: inherit;
caption-side: initial;
caption-side: unset;
```

### 取值

- `top`
  - : 标题会出现在表格的上方。
- `bottom`
  - : 标题会出现在表格的下方。
- `left` {{non-standard_inline}}

  - : 标题会出现在表格的左侧。

    > **备注：** 在 CSS 2 阶段，这个值被建议加入到规范中，但是在在最终的 CSS 2.1 规范中被移除。它是非标准属性。

- `right` {{non-standard_inline}}

  - : 标题会出现在表格的右侧。

    > **备注：** 在 CSS 2 阶段，这个值被建议加入到规范中，但是在在最终的 CSS 2.1 规范中被移除。它是非标准属性。

- `top-outside` {{non-standard_inline}}

  - : 标题会被放置在表格上方，但是标题的宽度和水平对齐方式不受表格水平布局的约束。

    > **备注：** 在 CSS 2.1 规范中提到：CSS 2 规范中对 `top` 值产生的效果有不同的定义，在未来可能会重新定义这个值产生的影响效果。

- `bottom-outside` {{non-standard_inline}}

  - : 标题会被放置在表格下方，但是标题的宽度和水平对齐方式不受表格水平布局的约束。

    > **备注：** 在 CSS 2.1 规范中提到：CSS 2 规范中对 `top` 值产生的效果有不同的定义，在未来可能会重新定义这个值产生的影响效果。

## 示例

### HTML

```html
<table class="top">
  <caption>Caption ABOVE the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>

<br>

<table class="bottom">
  <caption>Caption BELOW the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>
```

### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

### 结果

{{EmbedLiveSample('示例', 'auto', 160)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
