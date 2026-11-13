---
title: all
slug: Web/CSS/Reference/Properties/all
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`all`** 将除了 {{cssxref("unicode-bidi")}}、{{cssxref("direction")}} 与 [CSS 自定义属性](/zh-CN/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)之外的所有属性重设。它可以将属性设置为初始值或继承值，也可以设置为其他层叠层或样式表来源中指定的值。

{{InteractiveExample("CSS 演示：all")}}

```css interactive-example-choice
/*未设置 all 属性*/
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
        该段的字体大小为 1.5rem，颜色为金色。用户代理还为其设置了 1rem
        的垂直边距。段落的父级是一个蓝色虚线边框的 &lt;div&gt;。
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

## 组成属性

该属性是除 {{cssxref("unicode-bidi")}}、{{cssxref("direction")}} 和[自定义属性](/zh-CN/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)以外的所有 CSS 属性的简写。

## 语法

```css
/* 全局值 */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

`all` 属性被作为 CSS 全局关键字的其中之一。不过需要注意的是，以上这些值不会影响 {{cssxref("unicode-bidi")}} 与 {{cssxref("direction")}} 这两个属性。

### 取值

- {{cssxref("initial")}}
  - : 指定将元素的所有属性都更改为它们的[初始值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)。
- {{cssxref("inherit")}}
  - : 指定将元素的所有属性都更改为它们的[继承值](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)。
- {{cssxref("unset")}}
  - : 如果是默认继承值，则指定元素的所有属性更改为继承值；如果不是默认继承值，则指定元素的所有属性更改为初始值。
- {{cssxref("revert")}}
  - : 指定依赖于声明所属的样式表来源的行为：
    - 如果规则属于[作者来源](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction#作者样式表)，则 `revert` 值会将[层叠](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)回滚到用户级别，以便计算[指定值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定值)，就像没有为该元素指定作者级别的规则一样。就“还原”而言，作者来源包括覆盖来源和动画来源。
    - 如果规则属于[用户来源](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction#用户样式表)，则 `revert` 值会将[层叠](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)回滚到用户代理级别，以便计算[指定值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定值)，就像没有为元素指定作者级或用户级规则一样。
    - 如果规则属于[用户代理来源](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction#用户代理样式表)，则 `revert` 值的作用类似于 `unset`。
- {{cssxref("revert-layer")}}
  - : 指定元素的所有属性都应回滚到之前的[层叠层](/zh-CN/docs/Web/CSS/Reference/At-rules/@layer)（如果存在）。如果不存在其他层叠层，元素的属性将回滚到当前层中的匹配规则（如果存在）或之前的[样式来源](/zh-CN/docs/Glossary/Style_origin)。

### 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

在本示例中，CSS 文件包含 {{HTMLElement("blockquote")}} 元素以及父级 `<body>` 元素的一些样式。“结果”小节中的各种输出结果展示了在对 `<blockquote>` 元素规则中的 `all` 属性应用不同值时，`<blockquote>` 元素的样式会受到怎样的影响。

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
  margin: 0;
  padding: 0;
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

这就是在 `blockquote` 规则中没有设置 `all` 属性的情况。{{HTMLElement("blockquote")}} 使用浏览器默认样式，它具有边距，以及样式表中指定的特定背景和文本颜色。它是一个*块级*元素：它之后的文字位于它的下方。

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

将 `blockquote` 规则中的 `all` 属性设置为 `initial` 后，{{HTMLElement("blockquote")}} 元素不再使用浏览器默认样式：它现在是*行级*元素（初始值），其 [`background-color`](/zh-CN/docs/Web/CSS/Reference/Properties/background-color#形式定义)是 `transparent`（初始值）、[`font-size`](/zh-CN/docs/Web/CSS/Reference/Properties/font-size#形式定义) 为 `medium`，[`color`](/zh-CN/docs/Web/CSS/Reference/Properties/color#形式定义) 为 `black`（初始值）。

#### C. `all: inherit`

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

{{EmbedLiveSample("c._all_inherit", "200", "125")}}

在本例中，{{HTMLElement("blockquote")}} 元素并没有使用浏览器的默认样式。相反，它继承了父级 {{HTMLElement("body")}} 元素的样式：它现在是*块级*元素（继承值），它的 {{cssxref("background-color")}} 是 `#F0F0F0`（继承值），它的 {{cssxref("font-size")}} 是 `small`（继承值），它的 {{cssxref("color")}} 是 `blue`（继承值）。

#### D. `all: unset`

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

{{EmbedLiveSample("d._all_unset", "200", "125")}}

当 `unset` 值应用于 `blockquote` 规则中的 `all` 属性时，{{HTMLElement("blockquote")}} 元素不会使用浏览器的默认样式。因为 [`background-color`](/zh-CN/docs/Web/CSS/Reference/Properties/background-color#形式定义) 是一个非继承属性，而 [`font-size`](/zh-CN/docs/Web/CSS/Reference/Properties/font-size#形式定义) 和 [`color`](/zh-CN/docs/Web/CSS/Reference/Properties/color#形式定义)是继承属性。`<blockquote>` 元素现在是*行级*元素（初始值），它的 {{cssxref("background-color")}} 是 `transparent`（初始值），但它的 {{cssxref("font-size")}} 仍然是 `small`（继承值），它的 {{cssxref("color")}} 是 `blue`（继承值）。

#### E. `all: revert`

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
  all: revert;
}
```

{{EmbedLiveSample("e._all_revert", "200", "125")}}

当 `blockquote` 规则中的 `all` 属性设置为 `revert` 时，`blockquote` 规则将被视为不存在，其样式属性值将继承应用于父元素 `<body>` 的属性值。因此，`<blockquote>` 元素会被样式化为*块级*元素，并具有 {{cssxref("background-color")}} `#F0F0F0`、{{cssxref("font-size")}} `small` 和 {{cssxref("color")}} `blue`——所有值均继承自 `body` 规则。

#### F. `all: revert-layer`

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
  all: revert-layer;
}
```

{{EmbedLiveSample("f._all_revert-layer", "200", "125")}}

CSS 文件中没有定义层叠层，因此 `<blockquote>` 元素的样式继承自匹配的 `body` 规则。这里的 `<blockquote>` 元素被样式化为*块级*元素，并使用 {{cssxref("background-color")}} `#F0F0F0`、{{cssxref("font-size")}} `small` 和 {{cssxref("color")}} `blue`——`body` 规则继承的所有值。此示例说明了将 `all` 设为 `revert-layer` 时与将 `all` 设为 `revert` 时的行为相同。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

CSS 全局关键字值：{{cssxref("initial")}}、{{cssxref("inherit")}}、{{cssxref("unset")}}、{{cssxref("revert")}} 和 {{cssxref("revert-layer")}}。
