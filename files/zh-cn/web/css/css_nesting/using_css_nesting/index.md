---
title: 使用 CSS 嵌套
slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

[CSS 嵌套](/zh-CN/docs/Web/CSS/CSS_nesting)模块允许你将你的样式表写的更加容易阅读、更加模块化，而且更加容易维护。因为你不再需要重复选择器，文件同样也可以被压缩。

CSS 嵌套不同于如 [Sass](https://sass-lang.com/) 等的 CSS 预处理器的一点是，它是被浏览器直接解析的，而不是先经由 CSS 预处理器的预编译。而且在 CSS 嵌套中，[`&` 嵌套选择器的优先级](/zh-CN/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)类似于 {{cssxref(':is',':is()')}} 函数；它的优先级由它所关联的选择器列表当中优先级最高的选择器决定。

这个指南展示各种嵌套 CSS 的方法。

## 子选择器

你可以使用 CSS 嵌套来创建一个父级的子选择器，这可以用来选择特定父元素的子元素。可以选择使用[`&` 嵌套选择器](/zh-CN/docs/Web/CSS/Nesting_selector)来实现。

有几个特定环境可以使得 `&` 嵌套选择器变得很必要或者有用：

- 在连接选择器时，如[组合选择器](#组合选择器)或[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)。
- 为了向后兼容。
- 作为一个辅助阅读的标志。当你看到 `&` 时，你就知道这里用到 CSS 嵌套了。

```css
/* 不使用嵌套选择器 */
parent {
  /* 父样式 */
  child {
    /* 父级的子样式 */
  }
}

/* 使用嵌套选择器 */
parent {
  /* 父样式 */
  & child {
    /* 父级的子样式 */
  }
}

/* 浏览器均会把以上两个样式表解析为 */
parent {
  /* 父样式 */
}
parent child {
  /* 父级的子样式 */
}
```

### 示例

在这个示例中，一个没有使用 `&` 嵌套选择器，另一个使用了。在 `<label>` 内部的 `<input>` 被赋予了和紧邻 `<label>` 的 `<input>` 不同的样式。这个示例展示了省略 `&` 嵌套选择器的影响。

> [!NOTE]
> 这个示例演示了实现原版和现行嵌套规范的浏览器的不同输出。Chrome 和 Safari 实现了 2023 年 8 月前的原版规范，其要求使用 `&` 嵌套选择器。如果你的浏览器支持现行规范，那么这两个示例的输出将会和第二个示例一致。

#### 不使用嵌套选择器

##### HTML

```html-nolint
<form>
  <label for="name">姓名：
    <input type="text" id="name" />
  </label>
  <label for="email">邮箱：</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* 不在 label 内的 input 的样式 */
  border: tomato 2px solid;
}
label {
  /* label 的样式 */
  font-family: system-ui;
  font-size: 1.25rem;
  input {
    /* 在 label 内的 input 的样式 */
    border: blue 2px dashed;
  }
}
```

##### 结果

{{EmbedLiveSample('不使用嵌套选择器','100%','120')}}

#### 使用嵌套选择器

##### HTML

```html-nolint
<form>
  <label for="name">姓名：
    <input type="text" id="name" />
  </label>
  <label for="email">邮箱：</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* 不在 label 内的 input 的样式 */
  border: tomato 2px solid;
}
label {
  /* label 的样式 */
  font-family: system-ui;
  font-size: 1.25rem;
  & input {
    /* 在 label 内的 input 的样式 */
    border: blue 2px dashed;
  }
}
```

##### 结果

{{EmbedLiveSample('使用嵌套选择器','100%','120')}}

## 关系选择器

[CSS 关系选择器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Combinators)也可以在使用或不使用 `&` 嵌套选择器的情况下使用。

### 示例

#### 嵌套邻接兄弟选择器

在这个示例中，我们使用 CSS 嵌套，将每个 `<h2>` 后的第一个段落使用[邻接兄弟选择器（`+`）](/zh-CN/docs/Web/CSS/Next-sibling_combinator)选中。

##### HTML

```html
<h2>标题</h2>
<p>这是第一段。</p>
<p>这是第二段。</p>
```

##### CSS

```css
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}
/* 这段也可以用嵌套选择器改写为 */
/* 
h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}
*/
```

##### 结果

{{EmbedLiveSample('嵌套邻接兄弟选择器','100%','135')}}

## 组合选择器

在嵌套 CSS 中使用[组合选择器](/zh-CN/docs/Web/CSS/CSS_selectors/Selector_structure#组合选择器)时，你**必须**使用 `&` 嵌套选择器，因为浏览器会自动在不使用 `&` 嵌套选择器的选择器之间添加空格。

为了选择一个带有 `class="a b"` 的元素，你必须使用 `&` 嵌套选择器，否则空格将会拆散这个组合选择器。

```css
.a {
  /* 带有 class="a" 元素的样式 */
  .b {
    /* 带有 class="b"，且为 class="a" 元素的子元素的样式 */
  }
  &.b {
    /* 带有 class="a b" 元素的样式 */
  }
}

/* 浏览器会将其分析为 */
.a {
  /* 带有 class="a" 元素的样式 */
}
.a .b {
  /* 带有 class="b"，且为 class="a" 元素的子元素的样式 */
}
.a.b {
  /* 带有 class="a b" 元素的样式 */
}
```

### 示例

#### 嵌套和组合选择器

在这个示例中，我们使用 `&` 嵌套选择器来创建组合选择器，为带有多个类的元素添加样式。

##### HTML

```html
<div class="notices">
  <div class="notice">
    <h2 class="notice-heading">注意</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice warning">
    <h2 class="warning-heading">警告</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice success">
    <h2 class="success-heading">成功</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
```

##### CSS

使用[弹性盒子布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)将 `.notices` 变为一个列。

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

在下列 CSS 中，我们使用嵌套创建带 `&` 和不带 `&` 的组合选择器。顶层选择器为带有 `class="notice"` 的元素定义基本样式。接下来，我们使用 `&` 嵌套选择器分别为带有 `class="notice warning"` 和 `class="notice success"` 的元素创建组合选择器。另外，不显式使用 `&` 创建组合选择器的例子可以参考 `.notice .notice-heading::before`。

```css
.notice {
  width: 90%;
  justify-content: center;
  border-radius: 1rem;
  border: black solid 2px;
  background-color: #ffc107;
  color: black;
  padding: 1rem;
  .notice-heading::before {
    /* 等同于 `.notice .notice-heading::before` */
    content: "ℹ︎ ";
  }
  &.warning {
    /* 等同于 `.notice.warning` */
    background-color: #d81b60;
    border-color: #d81b60;
    color: white;
    .warning-heading::before {
      /* 等同于 `.notice.warning .warning-heading::before` */
      content: "! ";
    }
  }
  &.success {
    /* 等同于 `.notice.success` */
    background-color: #004d40;
    border-color: #004d40;
    color: white;
    .success-heading::before {
      /* 等同于 `.notice.success .success-heading::before` */
      content: "✓ ";
    }
  }
}
```

##### 结果

{{EmbedLiveSample('嵌套和组合选择器','100%', '455')}}

## 后附嵌套选择器

`&` 嵌套选择器也可以添加到一个选择器的后方。这将起到反转上下文的效果。

例如，我们有一个子元素，当父元素被设定不同的类时想让它变化，则这个选择器就会很有用：

```html
<div>
  <span class="foo">文本</span>
</div>
```

相对于：

```html
<div class="bar">
  <span class="foo">文本</span>
</div>
```

```css
.foo {
  /* .foo 的样式 */
  .bar & {
    /* .bar .foo 的样式 */
  }
}
```

### 示例

#### 后附嵌套选择器

这个示例里有三个卡片，其中一个被强调了（featured）。所有的卡片，除了被强调的卡片的标题会有一个不同的颜色以外，都是一样的。通过将 `&` 嵌套选择器附加在 `.featured` 后方，我们可以将 `.featured h2` 的样式写在 `h2` 里。

##### HTML

```html
<div class="wrapper">
  <article class="card">
    <h2>卡片 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card featured">
    <h2>卡片 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card">
    <h2>卡片 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
</div>
```

##### CSS

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  font-family: system-ui;
}
```

在下列 CSS 中，我们为 `.card` 和 `.card h2` 创建样式。然后，在 `h2` 的样式里，我们用 `&` 嵌套选择器将 `.featured` 类嵌套在其前方，这将创建一个等同于 `.card :is(.featured h2)` 的选择器，也就是 `:is(.card h2):is(.featured h2)`。

```css
.card {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  & h2 {
    /* 等同于 `.card h2` */
    color: slateblue;
    .featured & {
      /* 等同于 `:is(.card h2):is(.featured h2)` */
      color: tomato;
    }
  }
}
```

##### 结果

{{EmbedLiveSample('后附嵌套选择器_2','100%','250')}}

## 拼接（是不可能的）

在如 [Sass](https://sass-lang.com/) 等的 CSS 预处理器当中，我们可以使用嵌套来拼接字符串以创建新类。这在如 [BEM](https://getbem.com/naming/) 等 CSS 命名方法中尤为常见。

```css
.component {
  &__child-element {
  }
}
/* 在 Sass 中，这将变为 */
.component__child-element {
}
```

> [!WARNING]
> 这在 CSS 嵌套中是不可能的：当不使用[组合器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Combinators)时，嵌套选择器将被当作[类型选择器](/zh-CN/docs/Web/CSS/Type_selectors)。允许拼接会使得这个规则无效。

在[组合选择器](/zh-CN/docs/Web/CSS/CSS_selectors/Selector_structure#组合选择器)中，类型选择器必须是第一位。`&Element`（一个[类型选择器](/zh-CN/docs/Web/CSS/Type_selectors)）会使得这个选择器和整个样式块无效。因为类型选择器必须是第一位，所以这个组合选择器必须写成 `Element&`。

```css
.my-class {
  element& {
  }
}

/* 浏览器将其解析为组合选择器 */
.my-class {
}
element.my-class {
}
```

## 无效的嵌套样式规则

如果一个嵌套 CSS 规则无效，那么所有其包含的样式都将被忽略。这不影响其父级及其后面的规则。

在这个示例中，有一个无效选择器（`%` 字符在选择器中是无效的）。这个选择器下的规则都将被忽略，但是后续有效的规则并不会。

```css
.parent {
  /* .parent 的样式，一切完好无损 */
  & %invalid {
    /* %invalid 的无效样式，全部被忽略 */
  }
  & .valid {
    /* .parent .valid 的样式，一切完好无损 */
  }
}
```

## 参见

- [CSS 嵌套](/zh-CN/docs/Web/CSS/CSS_nesting)模块
- [`&` 嵌套选择器](/zh-CN/docs/Web/CSS/Nesting_selector)
- [嵌套 at 规则](/zh-CN/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [嵌套与优先级](/zh-CN/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
