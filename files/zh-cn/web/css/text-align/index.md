---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

`text-align` [CSS](/zh-CN/docs/Web/CSS) 属性设置块元素或者单元格框的行内内容的水平对齐。这意味着其效果和 {{cssxref("vertical-align")}} 类似，但是是水平方向的。

{{EmbedInteractiveExample("pages/css/text-align.html")}}

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

/* 在表格列内基于字符的对齐 */
text-align: ".";
text-align: "." center;

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

`text-align` 属性可以按照以下方式之一来指定：

- 使用关键字值 `start`、`end`、`left`、`right`、`center`、`justify`、`justify-all` 或 `match-parent`。
- 仅使用单个 `<string>` 值，此时另外一个值默认为 `right`。
- 同时使用关键字值和 [`<string>`](#string) 值。

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
  - : 文字向两侧对齐，对最后一行无效。
- `justify-all` {{experimental_inline}}
  - : 和 `justify` 一致，但是强制使最后一行两端对齐。
- `match-parent`
  - : 和 `inherit` 类似，区别在于 `start` 和 `end` 的值根据父元素的 {{cssxref("direction")}} 确定，并被替换为恰当的 `left` 或 `right` 值。
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : 应用在单元格时，指定单元格内容相对于哪个字符对齐。

## 无障碍考虑

对于有阅读障碍等认知问题的人来说，对齐的文本产生的单词之间的间距不一致可能会出现问题。

- [MDN 了解 WCAG，准则 1.4 解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("margin","margin:auto")}}、{{Cssxref("margin-left","margin-left:auto")}}、{{Cssxref("vertical-align")}}
