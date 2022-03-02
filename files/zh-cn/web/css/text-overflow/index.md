---
title: text-overflow
slug: Web/CSS/text-overflow
tags:
  - CSS
  - CSS 属性
  - text-overflow
translation_of: Web/CSS/text-overflow
---
{{ CSSRef() }}

**`text-overflow`** <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS">CSS</a> 属性确定如何向用户发出未显示的溢出内容信号。它可以被剪切，显示一个省略号（'...'）或显示一个自定义字符串。

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

这个属性并不会强制“溢出”事件的发生，因此为了能让"text-overflow"能够生效，程序员们必须要在元素上添加几个额外的属性，{{cssxref("overflow")}} 和 {{cssxref("white-space")}}。例如：

```css
overflow: hidden;
white-space: nowrap;
```
这个属性只对那些在块级元素溢出的内容有效，但是必须要与块级元素内联(inline)方向一致（举个反例：内容在盒子的下方溢出。此时就不会生效）。
## 语法
`text-overflow` 属性可能被赋予一个或者两个值。如果赋一个值，指的行末溢出行为（从左至右的文本右末端，从右至左的文本左末端）。如果赋两个值，第一个值指定行左端溢出行为，第二个值指定行右端溢出行为。
```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";
/* Global values */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: unset;
```
- 关键字之一： `clip`, `ellipsis`, `fade`
- 函数 `fade()`： 传入 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 来控制淡出距离
- 一个字符串 `<string>`.
### 值
- `clip`
  - : 默认值。这个关键字会在 {{cssxref("css_box_model/introduction_to_the_css_box_model")}} 的极限处截断文本，因此在单词的中间可能会发生截断。如果你的目标浏览器支持 `text-overflow: ''`，为了能在两个单词过渡处截断，你可以使用一个空字符串值 (`''`) 作为 `text-overflow` 属性的值。
- `ellipsis`
  - : 这个关键字会用一个省略号 (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`)来表示被截断的文本。这个省略号被添加在 {{cssxref("css_box_model/introduction_to_the_css_box_model")}} 中，因此会减少显示的文本。如果空间太小以至于连省略号都容纳不下，那么这个省略号也会被截断。
- `<string>` {{experimental_inline}}
  - : {{cssxref("&lt;string&gt;")}}用来表示被截断的文本。字符串内容将被添加在 {{cssxref("css_box_model/introduction_to_the_css_box_model")}} 中，所以会减少显示出的文本。如果空间太小以至于连字符串本身都容纳不下，那么这个字符串也会被截断。
- `fade` {{experimental_inline}}
  - : 这个关键字将会截断行内溢出文本并在完全透明的行边缘添加一个淡出特效。
- `fade( <length> | <percentage> )` {{experimental_inline}}
  - : 这个函数将会截断行内溢出文本并在完全透明的行边缘添加一个淡出特效。
    参数决定淡出特效的距离。{{cssxref("&lt;percentage&gt;")}} 以行宽而定。小于 `0` 的值视为0。大于行宽的值视为行宽。
## Formal definition
{{CSSInfo}}
## Formal syntax
{{csssyntax}}
## 示例
### 单值语法
这个示例呈现了将不同的 `text-overflow` 值应用到一个段落上面，在从左到右的文本和从右到左的文本上的效果。
#### HTML
```html
<div class="ltr">
  <h2>Left to right text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>" [..]"</pre>
  <p class="overflow-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
<div class="rtl">
  <h2>Right to left text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <pre>" [..]"</pre>
  <p class="overflow-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>
```
#### CSS
```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;
  /* Both of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}
.overflow-clip {
  text-overflow: clip;
}
.overflow-ellipsis {
  text-overflow: ellipsis;
}
.overflow-string {
  text-overflow: " [..]";
}
body {
  display: flex;
  justify-content: space-around;
}
.ltr > p {
  direction: ltr;
}
.rtl > p {
  direction: rtl;
}
```
#### 结果

{{EmbedLiveSample('One-value_syntax', 600, 320)}}

### 双值语法

这个示例展现了 `text-overflow` 的双值语法，你可以为文本的开头和末尾定义不同的溢出行为。为了呈现这个效果，我们不得不使行滚动，这样行开头也被隐藏了起来。

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;
  /* Both of the following are required for text-overflow */
  white-space: nowrap;
  overflow: scroll;
}
.overflow-clip-clip {
  text-overflow: clip clip;
}
.overflow-clip-ellipsis {
  text-overflow: clip ellipsis;
}
.overflow-ellipsis-ellipsis {
  text-overflow: ellipsis ellipsis;
}
.overflow-ellipsis-string {
  text-overflow: ellipsis " [..]";
}
```

#### JavaScript

```js
// Scroll each paragraph so the start is also hidden
const paras = document.querySelectorAll("p");
for (let para of paras) {
  para.scroll(100, 0);
}
```

#### 结果

{{EmbedLiveSample('Two-value_syntax', 600, 430)}}

## 规范

{{Specifications}}

此接口的较早版本曾经被纳入 _候选_ 名单。 但由于需要对某些尚未列出的风险点进行删除工作，因此该规范已降级到 _工作草案_ 。所以说浏览器无前缀地实现此属性，但其却不在CR状态。

## 浏览器兼容性

{{Compat}}

## 另见

- 相关 CSS 属性: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- 控制换行的 CSS 属性: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
