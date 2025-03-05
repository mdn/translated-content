---
title: vertical-align
slug: Web/CSS/vertical-align
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`vertical-align`** 属性用来指定行内（inline）、行内区块（inline-block）、表格单元格（table-cell）盒子的垂直对齐方式。

{{EmbedInteractiveExample("pages/css/vertical-align.html")}}

vertical-align 属性可被用于两种上下文：

- 使行内元素盒模型与其行内元素容器垂直对齐。例如，用于[垂直对齐行文本内的图片](#行内盒的垂直对齐)
- 垂直对齐[表格单元格的内容](#表格单元格中的垂直对齐)

注意 `vertical-align` 只对行内元素、行内块元素和表格单元格元素生效：不能用它垂直对齐[块级元素](/zh-CN/docs/Glossary/Block-level_content)。

## 语法

```css
/* 关键字值 */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> 值 */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> 值 */
vertical-align: 20%;

/* 全局值 */
vertical-align: inherit;
vertical-align: initial;
vertical-align: revert;
vertical-align: revert-layer;
vertical-align: unset;
```

`vertical-align` 属性指定为下面列出的值之一。

### 行内元素的值

#### 相对父元素的值

这些值使元素相对其父元素垂直对齐：

- `baseline`
  - : 使元素的基线与父元素的基线对齐。HTML 规范没有详细说明部分[可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)的基线，如 {{HTMLElement("textarea")}}，这意味着这些元素使用此值的表现因浏览器而异。
- `sub`
  - : 使元素的基线与父元素的下标基线对齐。
- `super`
  - : 使元素的基线与父元素的上标基线对齐。
- `text-top`
  - : 使元素的顶部与父元素的字体顶部对齐。
- `text-bottom`
  - : 使元素的底部与父元素的字体底部对齐。
- `middle`
  - : 使元素的中部与父元素的基线加上父元素 x-height 的一半对齐。
- {{cssxref("&lt;length&gt;")}}
  - : 使元素的基线对齐到父元素的基线之上的给定长度。可以是负数。
- {{cssxref("&lt;percentage&gt;")}}
  - : 使元素的基线对齐到父元素的基线之上的给定百分比，该百分比是 {{Cssxref("line-height")}} 属性的百分比。可以是负数。

#### 相对行的值

下列值使元素相对整行垂直对齐：

- `top`
  - : 使元素及其后代元素的顶部与整行的顶部对齐。
- `bottom`
  - : 使元素及其后代元素的底部与整行的底部对齐。

没有基线的元素，使用外边距的下边缘替代。

### 表格单元格的值

- `baseline`（以及 `sub`、`super`、`text-top`、`text-bottom`、`<length>`、`<percentage>`）
  - : 使单元格的基线，与该行中所有以基线对齐的其他单元格的基线对齐。
- `top`
  - : 使单元格内边距的上边缘与该行顶部对齐。
- `middle`
  - : 使单元格内边距盒模型在该行内居中对齐。
- `bottom`
  - : 使单元格内边距的下边缘与该行底部对齐。

可以是负数。

## 形式定义

{{CSSInfo}}

### 形式语法

{{csssyntax}}

## 示例

### 基础示例

#### HTML

```html
<div>
  <img src="frame_image.svg" alt="link" width="32" height="32" />
  默认对齐方式的图像
</div>
<div>
  <img class="top" src="frame_image.svg" alt="link" width="32" height="32" />
  字体顶部（text-top）对齐的图像
</div>
<div>
  <img class="bottom" src="frame_image.svg" alt="link" width="32" height="32" />
  字体底部（text-bottom）对齐的图像
</div>
<div>
  <img class="middle" src="frame_image.svg" alt="link" width="32" height="32" />
  中部（middle）对齐的图像
</div>
```

#### CSS

```css
img.top {
  vertical-align: text-top;
}
img.bottom {
  vertical-align: text-bottom;
}
img.middle {
  vertical-align: middle;
}
```

#### 结果

{{EmbedLiveSample("基础示例")}}

### 行内盒的垂直对齐

#### HTML

```html-nolint
<p>
top:         <img style="vertical-align: top" src="star.png" alt="star"/>
middle:      <img style="vertical-align: middle" src="star.png" alt="star"/>
bottom:      <img style="vertical-align: bottom" src="star.png" alt="star"/>
super:       <img style="vertical-align: super" src="star.png" alt="star"/>
sub:         <img style="vertical-align: sub" src="star.png" alt="star"/>
</p>

<p>
text-top:    <img style="vertical-align: text-top" src="star.png" alt="star"/>
text-bottom: <img style="vertical-align: text-bottom" src="star.png" alt="star"/>
0.2em:       <img style="vertical-align: 0.2em" src="star.png" alt="star"/>
-1em:        <img style="vertical-align: -1em" src="star.png" alt="star"/>
20%:         <img style="vertical-align: 20%" src="star.png" alt="star"/>
-100%:       <img style="vertical-align: -100%" src="star.png" alt="star"/>
</p>
```

```css hidden
#* {
  box-sizing: border-box;
}

img {
  margin-right: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-family: monospace;
  text-decoration: underline overline;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
```

#### 结果

{{EmbedLiveSample("行内盒的垂直对齐", '100%', 160, "", "")}}

### 表格单元格中的垂直对齐

此示例，我们有一个表格包含一行共六个单元格。该行设置 `vertical-align` 的默认值为 `bottom`。

- 前四个单元格分别设置它们自己的 `vertical-align` 值，这些值会覆盖行的默认值。
- 第五个单元格没有设置任何 `vertical-align` 值，因此继承行的值。
- 第六个单元格仅用于确保单元格有足够的高度，以便观察效果。

#### HTML

```html
<table>
  <tr class="bottom">
    <td class="baseline">baseline</td>
    <td class="top">top</td>
    <td class="middle">middle</td>
    <td>bottom</td>
    <td>Row's style</td>
    <td>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      pretium felis eu sem mattis vulputate.
    </td>
  </tr>
</table>
```

#### CSS

```css
table {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

table,
th,
td {
  border: 1px solid black;
}

td {
  padding: 0.5em;
  font-family: monospace;
}

.bottom {
  vertical-align: bottom;
}

.baseline {
  vertical-align: baseline;
}

.top {
  vertical-align: top;
}

.middle {
  vertical-align: middle;
}
```

#### 结果

{{EmbedLiveSample("表格单元格中的垂直对齐", '100%', 230, "", "")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [弹性盒子的典型用例](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#元素居中)
- {{Cssxref("line-height")}}、{{Cssxref("text-align")}}、{{Cssxref("margin")}}
- [理解 `vertical-align`，如何（不）垂直居中内容](http://phrogz.net/css/vertical-align/index.html)
- [Vertical-Align：你要知道的事](https://christopheraue.net/design/vertical-align)
