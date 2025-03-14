---
title: all
slug: Web/CSS/all
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`all`** [简写属性](/zh-CN/docs/Web/CSS/CSS_cascade/Shorthand_properties) 将除了 {{cssxref("unicode-bidi")}} 与 {{cssxref("direction")}} 之外的所有属性重设至其初始值或继承值。

{{InteractiveExample("CSS Demo: all")}}

```css interactive-example-choice
/*no all property*/
```

```css interactive-example-choice
all: initial;
```

```css interactive-example-choice
all: inherit;
```

```css interactive-example-choice
all: unset;
```

```css interactive-example-choice
all: revert;
```

```html interactive-example
<section id="default-example">
  <div class="example-container-bg">
    <div class="example-container">
      <p id="example-element">
        This paragraph has a font size of 1.5rem and a color of gold. It also
        has 1rem of vertical margin set by the user-agent. The parent of the
        paragraph is a &lt;div&gt; with a dashed blue border.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  color: gold;
  padding: 10px;
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
}

.example-container {
  border: 2px dashed #2d5ae1;
}

.example-container-bg {
  background-color: #77767b;
  padding: 20px;
}
```

## 语法

```css
/* Global values */
all: initial
all: inherit
all: unset

/* CSS Cascading and Inheritance Level 4 */
all: revert;
```

`all` 属性被作为 CSS 全局关键词的其中之一。不过需要注意的是，{{cssxref("unicode-bidi")}} 与 {{cssxref("direction")}} 这两个属性是不受 `all` 影响的

### 取值

- {{cssxref("initial")}}
  - : 该关键字代表改变该元素或其父元素的所有属性至初始值。
- {{cssxref("inherit")}}
  - : 该关键字代表改变该元素或其父元素的所有属性的值至他们的父元素属性的值。[继承值](/zh-CN/docs/Web/CSS/CSS_cascade/Inheritance)
- {{cssxref("unset")}}
  - : 该关键字代表如果该元素的属性的值是可继承的，则改变该元素或该元素的父元素的所有属性的值为他们父元素的属性值，反之则改变为初始值。
- {{cssxref("revert")}}

  - : 指定依赖于声明所属的样式表来源的行为：

    - [用户代理来源](/zh-CN/docs/Web/CSS/CSS_cascade/Cascade#用户代理样式表)
      - : 相当于 `unset`
    - [用户来源](/zh-CN/docs/Web/CSS/CSS_cascade/Cascade#用户样式表)
      - : 将层叠回滚到用户代理级别，以便计算指定的值，就好像没有为该元素指定作者级别或用户级别规则。
    - [作者来源](/zh-CN/docs/Web/CSS/CSS_cascade/Cascade#作者样式表)
      - : 将层叠回滚到用户级别，以便计算指定的值，就好像没有为元素指定作者级规则。出于`revert`的目的，“作者”原点包括“覆盖”和“动画”原点。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

```css
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### 结果

#### A. 没有 `all` 属性

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
```

{{EmbedLiveSample("A. 没有 all 属性", "200", "125")}}

{{HTMLElement("blockquote")}} 使用浏览器默认样式，以及另外的定义的背景色与文字颜色。它是一个 block 元素：它之后的文字位于它的下方。

#### B. `all: initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: initial;
}
```

{{EmbedLiveSample("B. all: initial", "200", "125")}}

{{HTMLElement("blockquote")}} 没有使用浏览器默认样式：它现在是一个 inline 元素（初始值），其 {{cssxref("background-color")}} 为 `transparent`（初始值），但其 {{cssxref("font-size")}} 仍为 `small`（继承值），其 {{cssxref("color")}} 为 `blue`（继承值）。

#### C. `all:initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: inherit;
}
```

{{EmbedLiveSample("C. all:initial", "200", "125")}}

{{HTMLElement("blockquote")}} 没有使用浏览器默认样式：它现在是一个 inline 元素（初始值），其 {{cssxref("background-color")}} 为 `transparent`（初始值），其 {{cssxref("font-size")}} 为 `normal`（初始值），其 {{cssxref("color")}} 为 `black`（初始值）。

#### D. `all:inherit`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: unset;
}
```

{{EmbedLiveSample("D. all:inherit", "200", "125")}}

{{HTMLElement("blockquote")}} 没有使用浏览器默认样式：它现在是一个 block 元素（继承自其父元素 {{HTMLElement("body")}}），其 {{cssxref("background-color")}} 为 `transparent`（继承值），其 {{cssxref("font-size")}} 为 `small`（继承值），其 {{cssxref("color")}} 为 `blue`（继承值）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

CSS 通用属性值：{{cssxref("initial")}}、{{cssxref("inherit")}} 和 {{cssxref("unset")}}。
