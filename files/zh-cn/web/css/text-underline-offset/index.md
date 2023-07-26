---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 的 **`text-underline-offset`** 属性设置文本装饰下划线（使用 {{cssxref("text-decoration")}} 应用）与其原始位置的偏移距离。

{{EmbedInteractiveExample("pages/css/text-underline-offset.html")}}

`text-underline-offset` 不是 {{cssxref('text-decoration')}} 简写的一部分。虽然元素可以有多条 `text-decoration` 线，但 `text-underline-offset` 只影响下划线，而**不**影响其他可能的线装饰选项，例如 `overline` 或 `line-through`。

## 语法

```css
/* 单个关键字 */
text-underline-offset: auto;

/* length */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* percentage */
text-underline-offset: 20%;

/* 全局值 */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: revert-layer;
text-underline-offset: unset;
```

`text-underline-offset` 属性指定为以下列出的单个值。

### 值

- `auto`
  - : 浏览器为下划线选择适当的偏移量。
- `<length>`
  - : 指定下划线的偏移量为 {{cssxref('length')}}，覆盖字体文件建议的和浏览器默认的值。建议使用 `em` 单位，以便偏移量随字体大小缩放。
- `<percentage>`
  - : 指定下划线的偏移量为元素的字体中 **1 em** 的 {{cssxref('percentage')}}。百分比作为相对值继承，因此会随着字体的变化而缩放。在应用了此属性后，即使存在具有不同的字体大小或垂直对齐方式的子元素，偏移量在应用下划线的整个盒子内都是恒定的。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### text-underline-offset 的演示

```html
<p class="oneline">Here's some text with an offset wavy red underline!</p>
<br />
<p class="twolines">
  This text has lines both above and below it. Only the bottom one is offset.
</p>
```

```css
p {
  text-decoration: underline wavy red;
  text-underline-offset: 1em;
}

.twolines {
  text-decoration-color: purple;
  text-decoration-line: underline overline;
}
```

{{ EmbedLiveSample('示例', '', '', '') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-thickness")}}
