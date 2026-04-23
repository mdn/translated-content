---
title: text-align
slug: Web/CSS/Reference/Properties/text-align
l10n:
  sourceCommit: eeabc0774ceb0b7447febce6f9743b903815b95b
---

`text-align` [CSS](/zh-CN/docs/Web/CSS) 属性设置块元素或者单元格框的行内内容的水平对齐。这意味着其效果和 {{cssxref("vertical-align")}} 类似，但是是水平方向的。

{{InteractiveExample("CSS Demo: text-align")}}

```css interactive-example-choice
text-align: start;
```

```css interactive-example-choice
text-align: end;
```

```css interactive-example-choice
text-align: center;
```

```css interactive-example-choice
text-align: justify;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.5em;
}

#default-example > div {
  width: 250px;
}
```

## 语法

```css
/* 关键字值 */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* 块对齐值（非标准语法） */
text-align: -moz-center;
text-align: -webkit-center;

/* 全局值 */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

`text-align` 属性指定为下面列表中的单个关键字。

### 值

- `start`
  - : 如果内容方向是左至右，则等于 `left`，反之则为 `right`。
- `end`
  - : 如果内容方向是左至右，则等于 `right`，反之则为 `left`。
- `left`
  - : 行内内容向左侧边对齐。
- `right`
  - : 行内内容向右侧边对齐。
- `center`
  - : 行内内容居中。
- `justify`
  - : 文字向两侧对齐，将内容隔开，使其左右边缘与行框的左右边缘对齐，对最后一行无效。
- `justify-all`
  - : 和 `justify` 一致，但是强制使最后一行两端对齐。
- `match-parent`
  - : 和 `inherit` 类似，区别在于 `start` 和 `end` 的值根据父元素的 {{cssxref("direction")}} 确定，并被替换为恰当的 `left` 或 `right` 值。

## 无障碍

对于有阅读障碍等认知问题的人来说，对齐的文本产生的单词之间的间距不一致可能会出现问题。

- [MDN 了解 WCAG，准则 1.4 解释](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [理解成功标准 1.4.8 | 了解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 开始处对齐

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: start;
  border: solid;
}
```

#### 结果

{{EmbedLiveSample("开始处对齐","100%","100%")}}

### 文本居中

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### 结果

{{EmbedLiveSample("文本居中","100%","100%")}}

### 使用“justify”的示例

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### 结果

{{EmbedLiveSample('使用“justify”的示例',"100%","100%")}}

### 表格对齐

此示例演示在 {{htmlelement("table")}} 元素上使用 `text-align`：

- {{htmlelement("caption")}} 设置为右对齐。
- 前两个 {{htmlelement("th")}} 元素继承 {{htmlelement("thead")}} 元素上设置的 `text-align: left` 左对齐，而第三个元素设置为右对齐。
- 在 {{htmlelement("tbody")}} 元素内部，第一行设置为右对齐，第二行设置为居中对齐，第三行使用默认（左）对齐。
- 在每一行中，一些单元格（c12、c31）设置为覆盖行的对齐。

#### HTML

```html
<table>
  <caption>
    示例表格
  </caption>
  <thead>
    <tr>
      <th>列 1</th>
      <th>列 2</th>
      <th class="right">列 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="right">
      <td>11</td>
      <td class="center">12</td>
      <td>13</td>
    </tr>
    <tr class="center">
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr id="r3">
      <td class="right">31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </tbody>
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

thead {
  text-align: left;
}

td,
th {
  border: solid 1px black;
}

.center {
  text-align: center;
}

.right,
caption {
  text-align: right;
}
```

#### 结果

{{EmbedLiveSample('表格对齐', "100%", "200")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("margin","margin:auto")}}、{{Cssxref("margin-left","margin-left:auto")}}、{{Cssxref("vertical-align")}}
