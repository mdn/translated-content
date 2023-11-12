---
title: text-overflow
slug: Web/CSS/text-overflow
---

{{CSSRef}}

**`text-overflow`** [CSS](/zh-CN/docs/Web/CSS) 属性用于确定如何提示用户存在隐藏的溢出内容。其形式可以是裁剪、显示一个省略号（“`…`”）或显示一个自定义字符串。

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

`text-overflow` 属性并不会强制“溢出”事件的发生，因此为了能让文本能够溢出容器，你需要在元素上添加几个额外的属性：{{cssxref("overflow")}} 和 {{cssxref("white-space")}}。例如：

```css
overflow: hidden;
white-space: nowrap;
```

`text-overflow` 属性只对那些在块级元素溢出的内容有效，但是必须要与块级元素*内联*（inline）方向一致（举个反例：文本无法在盒子的下方溢出）。

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
text-overflow: revert-layer;
text-overflow: unset;
```

- 关键字之一：`clip`、`ellipsis`、`fade`
- 函数 `fade()`：传入 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 来控制淡出距离
- 一个字符串 `<string>`。

### 值

- `clip`
  - : 默认值。这个关键字会在[内容区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)的极限处截断文本，因此可能会在单词的中间发生截断。如果你的目标浏览器支持 `text-overflow: ''`，为了能在两个单词过渡处截断，你可以使用一个空字符串值（`''`）作为 `text-overflow` 属性的值。
- `ellipsis`
  - : 这个关键字会用一个省略号（`'…'`、`U+2026 HORIZONTAL ELLIPSIS`）来表示被截断的文本。这个省略号被添加在[内容区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)中，因此会减少显示的文本。如果空间太小以至于连省略号都容纳不下，那么这个省略号也会被截断。
- `<string>` {{experimental_inline}}
  - : {{cssxref("&lt;string&gt;")}} 用来表示被截断的文本。字符串内容将被添加在[内容区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)中，所以会减少显示出的文本。如果空间太小以至于连字符串本身都容纳不下，那么这个字符串也会被截断。
- `fade` {{experimental_inline}}
  - : 这个关键字将会截断行内溢出文本并在完全透明的行边缘添加一个淡出特效。
- `fade( <length> | <percentage> )` {{experimental_inline}}
  - : 这个函数将会截断行内溢出文本并在完全透明的行边缘添加一个淡出特效。
    参数决定淡出特效的距离。{{cssxref("&lt;percentage&gt;")}} 以行宽而定。小于 `0` 的值视为 0。大于行宽的值视为行宽。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 单值语法

这个示例呈现了将不同的 `text-overflow` 值应用到一个段落上面，在从左到右的文本和从右到左的文本上的效果。

#### HTML

```html
<div class="ltr">
  <h2>Left to right text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>

<div class="rtl">
  <h2>Right to left text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
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

{{EmbedLiveSample('单值语法', 600, 320)}}

### 双值语法

这个示例展现了 `text-overflow` 的双值语法，你可以为文本的开头和末尾定义不同的溢出行为。为了呈现这个效果，我们不得不使行滚动，这样行开头也被隐藏了起来。

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
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

{{EmbedLiveSample('双值语法', 600, 360)}}

## 规范

{{Specifications}}

此接口的较早版本曾经被纳入*候选推荐标准（Candidate Recommendation）*名单。但由于需要对某些尚未列出的风险点进行移除工作，因此该规范已降级到*工作草案*。所以说浏览器无前缀地实现此属性，但其却不在候选推荐标准阶段。

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("overflow")}}、{{cssxref("white-space")}}
- 控制换行的 CSS 属性：{{cssxref("overflow-wrap")}}、{{cssxref("word-break")}}
