---
title: visibility
slug: Web/CSS/visibility
---

{{CSSRef}}

**`visibility`** CSS 属性显示或隐藏元素而不更改文档的布局。该属性还可以隐藏 {{HTMLElement("table")}} 中的行或列。

{{EmbedInteractiveExample("pages/css/visibility.html")}}

要隐藏*并从文档布局中移除*元素，请将 {{cssxref("display")}} 属性设置为 `none` 来代替 `visibility` 属性。

### 语法

```css
/* 关键字值 */
visibility: visible;
visibility: hidden;
visibility: collapse;

/* 全局值 */
visibility: inherit;
visibility: initial;
visibility: revert;
visibility: revert-layer;
visibility: unset;
```

`visibility` 属性可被指定为以下值：

### 值

- `visible`
  - : 元素框可见。
- `hidden`
  - : 元素框不可见（不绘制），但仍然影响常规的布局。如果将其子元素的 `visibility` 设置为 `visible`，则该子元素依然可见。元素无法获得焦点（例如通过 [tab 索引](/zh-CN/docs/Web/HTML/Global_attributes/tabindex)进行键盘导航）。
- `collapse`

  - : `collapse` 关键字对于不同的元素有不同的效果：

    - 用于 {{HTMLElement("table")}} 行、列、列组和行组，将隐藏表格的行或列，并且不占用任何空间（与将 `{{ Cssxref("display") }}: none` 用于表格的行/列上的效果相当）。但是，计算其他行和列的大小时，仍会像显示折叠行或列中的单元格一样进行计算。此值允许从表中快速删除行或列，而不强制重新计算整个表的宽度和高度。
    - 折叠的弹性元素和 ruby 元素会被隐藏，它们本来将要占用的空间会被移除。
    - 对于其他元素，`collapse` 被视为与 `hidden` 相同。

## 无障碍考虑

将元素的 `visibility` 的值设置为 `hidden` 会将其从[可访问性树](/zh-CN/docs/Learn/Accessibility/What_is_accessibility#accessibility_api)中移除。这将导致元素及其所有子元素不再被屏幕阅读器所读取。

## 插值

在设置动画时，会对 visibility 在*可见*和*不可见*之间插值。因此起始值或结束值之一必须是 `visible`，否则不会发生{{Glossary("interpolation", "插值")}}。该值会以离散的步长进行插值，计时函数的值介于 `0` 到 `1` 之间，会被映射到 `visible`，对于其他计时函数的值（即过渡开始/结束时或 `cubic-bezier()` 函数结果的 y 值在 [0, 1] 的范围之外）则映射到较为接近的一个端点。

## 备注

有些现代浏览器对 `visibility: collapse` 不支持或是不完全支持。很多时候用在不是表格行与列的元素上时不会正确的将它显示成 `visibility: hidden` 的效果。

`visibility:collapse` 会改变表格的布局，嵌套在其被折叠的单元格中的表格也会同样被折叠，除非专门为此嵌套表格指定 `visibility: visible`。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 基础示例

#### HTML

```html
<p class="visible">第一段是可见的。</p>
<p class="not-visible">第二段是不可见的。</p>
<p class="visible">第三段是可见的。注意第二段仍占用空间。</p>
```

#### CSS

```css
.visible {
  visibility: visible;
}

.not-visible {
  visibility: hidden;
}
```

{{EmbedLiveSample('基础示例')}}

### 表格示例

#### HTML

```html
<table>
  <tr>
    <td>1.1</td>
    <td class="collapse">1.2</td>
    <td>1.3</td>
  </tr>
  <tr class="collapse">
    <td>2.1</td>
    <td>2.2</td>
    <td>2.3</td>
  </tr>
  <tr>
    <td>3.1</td>
    <td>3.2</td>
    <td>3.3</td>
  </tr>
</table>
```

#### CSS

```css
.collapse {
  visibility: collapse;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid gray;
}
```

{{EmbedLiveSample('表格示例')}}

### 规范

{{Specifications}}

## 浏览器兼容性

{{ Cssxref("display") }}

## 参见

- {{cssxref("display")}}
