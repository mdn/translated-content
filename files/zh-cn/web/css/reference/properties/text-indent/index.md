---
title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

**`text-indent`** CSS 属性设置区块元素中文本行前面空格（缩进）的长度。

{{InteractiveExample("CSS Demo: text-indent")}}

```css interactive-example-choice
text-indent: 0;
```

```css interactive-example-choice
text-indent: 30%;
```

```css interactive-example-choice
text-indent: -3em;
```

```css interactive-example-choice
text-indent: 3em each-line;
```

```css interactive-example-choice
text-indent: 3em hanging;
```

```css interactive-example-choice
text-indent: 3em hanging each-line;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      This text is contained within a single paragraph. This paragraph is two
      sentences long.
    </p>
    <p>
      This is a new paragraph. There is a line break element
      <code>&lt;br&gt;</code> after this sentence.<br />There it is! Notice how
      it affects the indentation.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.25em;
  background-color: #483d8b;
  align-items: start;
}

#example-element {
  text-align: left;
  margin: 0 0 0 3em;
  background-color: #6a5acd;
  color: white;
}
```

水平间距是指相对于包含区块级元素内容框的左侧（或右侧，对于从右到左的布局）边缘的距离。

## 语法

```css
/* <length> 值 */
text-indent: 3mm;
text-indent: 40px;

/* <percentage> 值，相对于包含区块的宽度 */
text-indent: 15%;

/* 关键字值 */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* 全局值 */
text-indent: inherit;
text-indent: initial;
text-indent: revert;
text-indent: revert-layer;
text-indent: unset;
```

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 缩进以绝对 {{cssxref("&lt;length&gt;")}} 值指定。允许使用负值。请参阅 {{cssxref("&lt;length&gt;")}} 值了解可能的单位。
- {{cssxref("&lt;percentage&gt;")}}
  - : 缩进是包含区块宽度的 {{cssxref("&lt;percentage&gt;")}}。
- `each-line`
  - : 缩进会影响区块容器的第一行以及*强制换行*后的每一行，但不影响*软换行*后的行。
- `hanging`
  - : 反转缩进行。*除*第一行外，所有行都将缩进。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单的缩进

#### HTML

```html
<p>
  该段文本使用了 5em 的缩进，该段文本使用了 5em 的缩进，该段文本使用了 5em
  的缩进。
</p>
<p>
  该段文本使用了 5em 的缩进，该段文本使用了 5em 的缩进，该段文本使用了 5em
  的缩进。
</p>
```

#### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

#### 结果

{{ EmbedLiveSample('简单的缩进','100%','100%') }}

### 跳过第一段的缩进

在段落缩进的情况下，一种常见的排版实践是跳过第一个段落的缩进。正如*芝加哥格式手册*所述，“紧跟标题后的第一行文本可以左对齐，也可以按照通常的段落缩进进行缩进。”

使用[接续兄弟组合器](/zh-CN/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)可以对首段与后续段落进行不同处理，如下例所示：

#### HTML

```html
<h2>标题</h2>

<p>
  这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。
</p>

<p>
  这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。
</p>

<h2>标题</h2>

<p>
  这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。
</p>

<p>
  这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。
</p>
```

#### CSS

```css
p {
  text-align: justify;
  margin: 1em 0 0 0;
}
p + p {
  text-indent: 2em;
  margin: 0;
}
```

#### 结果

{{ EmbedLiveSample('跳过第一段的缩进','','500px') }}

### 百分比缩进

#### HTML

```html
<p>
  该段文本使用了 30% 的缩进，该段文本使用了 30% 的缩进，该段文本使用了 30%
  的缩进。
</p>
<p>
  该段文本使用了 30% 的缩进，该段文本使用了 30% 的缩进，该段文本使用了 30%
  的缩进。
</p>
```

#### CSS

```css
p {
  text-indent: 30%;
  background: plum;
}
```

#### 结果

{{ EmbedLiveSample('百分比缩进','100%','100%') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [学习使用 CSS 为 HTML 添加样式](/zh-CN/docs/Learn_web_development/Core/Styling_basics)
- 相关 CSS 属性：
  - [`text-justify`](/zh-CN/docs/Web/CSS/Reference/Properties/text-justify)
  - [`text-orientation`](/zh-CN/docs/Web/CSS/Reference/Properties/text-orientation)
  - [`text-overflow`](/zh-CN/docs/Web/CSS/Reference/Properties/text-overflow)
  - [`text-rendering`](/zh-CN/docs/Web/CSS/Reference/Properties/text-rendering)
  - [`text-transform`](/zh-CN/docs/Web/CSS/Reference/Properties/text-transform)
  - {{cssxref('hanging-punctuation')}}

- [CSS 文本装饰](/zh-CN/docs/Web/CSS/Guides/Text_decoration) CSS 模块
- [CSS 文本模块](/zh-CN/docs/Web/CSS/Guides/Text)
