---
title: 使用 CSS 计数器
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
---

{{CSSRef}}

**CSS 计数器**可让你根据内容在文档中的位置调整其显示的外观。例如，你可以使用计数器自动为网页中的标题编号，或者更改有序列表的编号。

本质上 CSS 计数器是由 CSS 维护的变量，这些变量可能根据 CSS 规则跟踪使用次数以递增或递减。你可以自定义一个计数器，也可以修改 `list-item` 这一默认生成的应用于所有有序列表的计数器。

## 使用计数器

在使用计数器之前，必须使用 {{cssxref("counter-reset")}} 属性初始化计数器的值。计数器可通过 {{cssxref("counter-increment")}} 属性指定其值为递增或递减。当前计数器的值可通过 {{cssxref("counter", "counter()")}} 或 {{cssxref("counters", "counters()")}} 函数显示出来，这通常会在[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)的 {{CSSxRef("content")}} 属性中使用。

请注意，计数器只能在可以生成盒子的元素中使用（设置或重设值、递增）。例如，如果一个元素被设置为了 `display: none`，那么在这个元素上的任何计数器操作都会被忽略。

### 操作计数器的值

在使用计数器之前，需要使用 {{cssxref("counter-reset")}} 属性来初始化它的值。这个属性也可用于指定计数器的初始值。

下面，我们将名为 `section` 的计数器初始化为默认值（0）。

```css
counter-reset: section;
```

你也可以同时初始化多个计数器，并可以指定其初始值。下面，我们将名为 `section` 和 `topic` 的计数器初始化为默认值，并将 `page` 计数器的初始值指定为 3。

```css
counter-reset: section page 3 topic;
```

在初始化之后，计数器的值就可以使用 {{cssxref("counter-increment")}} 来指定其为递增或递减。例如，下面声明了一个随着 `h3` 标签递增的 `section` 计数器。

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
}
```

你可以在计数器的名称后指定单次递增或递减的值（正数或负数）。

计数器的名称不可以为 `none`、`inherit` 或 `initial`，否则，相应的声明会被忽略。

### 显示计数器

计数器的值可以使用 {{cssxref("counter", "counter()")}} 或 {{cssxref("counters", "counters()")}} 函数以在 {{cssxref("content")}} 属性中显示。

例如，以下使用 `counter()` 声明的计数器会在每一个 `h3` 标题前面添加文本 `Section <number>:`，其中的 `<number>` 是十进制计数的值（默认显示样式）：

```css
h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display counter value in default style (decimal) */
}
```

当不需要包含父级上下文的编号，而仅需要嵌套内容的编号时，应使用 {{cssxref("counter", "counter()")}} 函数。例如，以下示例的每一个嵌套内容的计数都从 1 开始：

```
1 One
  1 Nested one
  2 Nested two
2 Two
  1 Nested one
  2 Nested two
  3 Nested three
3 Three
```

当需要同时包含父级上下文和嵌套内容的编号时，应使用 {{cssxref("counters", "counters()")}} 函数。例如，以下示例的每一个嵌套内容会包含父级编号：

```
1 One
  1.1 Nested one
  1.2 Nested two
2 Two
  2.1 Nested one
  2.2 Nested two
  2.3 Nested three
3 Three
```

{{cssxref("counter", "counter()")}} 函数有两种形式： `counter(<counter-name>)` 和 `counter(<counter-name>, <counter-style>)`。生成的文本是伪元素范围内指定名称的最内层计数器的值。

{{cssxref("counters", "counters()")}} 函数也同样有两种形式：`counters(<counter-name>, <separator>)` 和 `counters(<counter-name>, <separator>, <counter-style>)`。生成的文本由在伪元素范围内所有指定名称的计数器的值组成。这些值从最外层到最内层，使用指定的字符串（`<separator>`）分隔。

以上两个函数均可以使用指定的 `<counter-style>` 来渲染其值（默认值为 `decimal`）。你也可以使用
{{cssxref("list-style-type")}} 属性其他可选的值，或[自定义样式](/zh-CN/docs/Web/CSS/CSS_counter_styles)。

[基础示例](#基础示例)和[计数器嵌套示例](#计数器嵌套示例)这两个示例分别展示了 `counter()` 和 `counters()` 的使用方法。

### 反向计数器

反向计数器是一种用于递减（而非递增）的计数器。反向计数器可以通过在 {{cssxref("counter-reset")}} 属性中将计数器的名称使用 `reversed()` 函数包裹来创建。

反向计数器的默认初始值与元素的数量相同（不同于常规的默认初始值为 0 的计数器）。这使得实现从元素数量为初始值倒数到 1 的计数器变得更加容易。

例如，要创建一个名为 `section` 反向计数器（使用默认初始值），你只需要这样写：

```css
counter-reset: reversed(section);
```

你也可以指定它的初始值。

计数器的值会随着通过 {{cssxref("counter-increment")}} 属性指定的负数递减。

> **备注：** 对于非反向计数器，你也仍然可以使用 {{cssxref("counter-increment")}} 属性实现递减。使用反向计数器的优点在于：其默认初始值可以自动根据元素数量生成，自动应用于有序列表的 `list-item` 计数器也可以借此反转编号。

### 有序列表（list item）计数器

使用 {{HTMLElement("ol")}} 元素创建的有序列表，会自动应用名为 `list-item` 的计数器。

和其他的计数器一样，其也是一个默认自增（+1）且初始值为 0 的计数器，对于反向计数器，则以元素数量为初始值，且默认自减（-1）。与自定义的计数器不同，`list-item` 是根据其是否为反向计数器而*自动*自增或自减的。

可以通过 CSS 修改 `list-item` 计数器应用在有序列表上的默认行为。例如，你可以改变默认初始值，或使用 {{cssxref("counter-increment")}} 改变递增或递减的方式。

## 示例

### 基础示例

以下示例会在每一个标题前添加一个“Section \[the value of the counter]:”字符串。

#### CSS

```css
body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section; /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display the word 'Section ', the value of
                                                  section counter, and a colon before the content
                                                  of each h3 */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### 结果

{{EmbedLiveSample("基础示例", "100%", 150)}}

### 基础示例：反向计数器

以下示例与上一个类似，区别在于其使用了反向计数器。如果你的浏览器支持 `reversed()` 函数，其结果就会类似于这样：

![reversed counter](reversed_headings_basic.png)

#### CSS

```css
body {
  counter-reset: reversed(
    section
  ); /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section -1; /* Decrement the value of section counter by 1 */
  content: "Section " counter(section) ": "; /* Display the word 'Section ', the value of
                                                 section counter, and a colon before the content
                                                 of each h3 */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### 结果

{{EmbedLiveSample("基础示例：反向计数器", "100%", 150)}}

### 一个更加复杂的示例

有时我们不需要让计数器在每一次递增时都显示其值，以下示例仅在链接的内容为空时将其替换为由计数器生成的值。

```css
:root {
  counter-reset: link;
}

a[href] {
  counter-increment: link;
}

a[href]:empty::after {
  content: "[" counter(link) "]";
}
```

#### HTML

```html
<p>See <a href="https://www.mozilla.org/"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/"></a></p>
```

#### 结果

{{EmbedLiveSample("一个更加复杂的示例", "100%", 150)}}

### 计数器嵌套示例

CSS 计数器对创建目录（多级有序列表）特别有用，因为其会在子元素中自动创建一个 CSS 计数器的实例。使用 {{cssxref("counters", "counters()")}} 函数，可以在不同级别的嵌套计数器之间可以插入分隔字符串。

#### CSS

```css
ol {
  counter-reset: section; /* Creates a new instance of the
                                            section counter with each ol
                                            element */
  list-style-type: none;
}

li::before {
  counter-increment: section; /* Increments only this instance
                                            of the section counter */
  content: counters(section, ".") " "; /* Combines the values of all instances
                                            of the section counter, separated
                                            by a period */
}
```

#### HTML

```html-nolint
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>
```

#### 结果

{{EmbedLiveSample("计数器嵌套示例", "100%", 350)}}

## 规范

{{Specifications}}

## 参见

- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
