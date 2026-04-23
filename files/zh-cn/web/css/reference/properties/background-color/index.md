---
title: background-color
slug: Web/CSS/Reference/Properties/background-color
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

**`background-color`** [CSS](/zh-CN/docs/Web/CSS) 属性设置元素的背景色。

{{InteractiveExample("CSS Demo: background-color")}}

```css interactive-example-choice
background-color: brown;
```

```css interactive-example-choice
background-color: #74992e;
```

```css interactive-example-choice
background-color: rgb(255, 255, 128);
```

```css interactive-example-choice
background-color: rgba(255, 255, 128, 0.5);
```

```css interactive-example-choice
background-color: hsl(50, 33%, 25%);
```

```css interactive-example-choice
background-color: hsla(50, 33%, 25%, 0.75);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## 语法

```css
/* 关键字值 */
background-color: red;
background-color: indigo;

/* 十六进制值 */
background-color: #bbff00; /* 完全不透明 */
background-color: #bf0; /* 完全不透明简写 */
background-color: #11ffee00; /* 完全透明 */
background-color: #1fe0; /* 完全透明简写 */
background-color: #11ffeeff; /* 完全不透明 */
background-color: #1fef; /* 完全不透明简写 */

/* RGB 值 */
background-color: rgb(255 255 128); /* 完全不透明 */
background-color: rgb(117 190 218 / 50%); /* 50% 透明 */

/* HSL 值 */
background-color: hsl(50 33% 25%); /* 完全不透明 */
background-color: hsl(50 33% 25% / 75%); /* 75% 不透明，25% 透明 */

/* 特殊关键字值 */
background-color: currentcolor;
background-color: transparent;

/* 全局值 */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

`background-color` 属性被指定为 `<color>` 类型的单值。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 背景色的统一颜色。它在指定的任何 {{cssxref("background-image")}} 后面渲染，尽管颜色仍然可以通过图像中任何透明的地方看到。

## 无障碍

有一点很重要，要确保文本颜色与文本所在背景之间的对比度足够高，以便低视力的人群能够阅读页面内容。

颜色的对比度是通过比较文本和背景颜色值的亮度确定的。要符合当前的 [Web 内容无障碍指南（WCAG）](https://www.w3.org/WAI/intro/wcag)，文本至少要有 4.5:1 的比例，大文本（比如标题）至少要有 3:1 的比例。具有[加粗](/zh-CN/docs/Web/CSS/Reference/Properties/font-weight)和至少 18.66px 大小，或者具有至少 24px 大小的文本称为大文本。

- [WebAIM：颜色对比度检查器](https://webaim.org/resources/contrastchecker/)
- [MDN 理解 WCAG，指南 1.4 解释](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [理解成功标准 1.4.3 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 着色盒

此示例演示了如何使用不同的 CSS {{cssxref("color_value", "&lt;color&gt;")}} 值将 `background-color` 应用于 HTML {{HTMLelement("div")}} 元素。

#### HTML

```html
<div class="exampleone">他同意自己会受苦。</div>
<div class="exampletwo">他同意自己会受苦。</div>
<div class="examplethree">他同意自己会受苦。</div>
```

#### CSS

```css
.exampleone {
  background-color: transparent;
}

.exampletwo {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

#### 结果

{{EmbedLiveSample("着色盒", 200, 150)}}

### 着色表

此示例演示了如何使用 {{HTMLelement("tr")}} 行和 {{HTMLelement("td")}} 单元格将 `background-color` 应用于 HTML {{HTMLelement("table")}} 元素。

#### HTML

```html
<table>
  <tr id="r1">
    <td id="c11">11</td>
    <td id="c12">12</td>
    <td id="c13">13</td>
  </tr>
  <tr id="r2">
    <td id="c21">21</td>
    <td id="c22">22</td>
    <td id="c23">23</td>
  </tr>
  <tr id="r3">
    <td id="c31">31</td>
    <td id="c32">32</td>
    <td id="c33">33</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
}
#r1 {
  background-color: lightblue;
}
#c12 {
  background-color: cyan;
}
#r2 {
  background-color: grey;
}
#r3 {
  background-color: olive;
}
```

#### 结果

{{EmbedLiveSample('着色表', "100%", "100%")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [多个背景的应用](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- 颜色 {{cssxref("&lt;color&gt;")}} 数据类型
- 其他颜色相关属性：{{cssxref("color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-decoration-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}、{{cssxref("caret-color")}}、{{cssxref("column-rule-color")}} 和 {{cssxref("print-color-adjust")}}
