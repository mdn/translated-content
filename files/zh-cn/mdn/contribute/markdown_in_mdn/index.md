---
title: MDN 的 Markdown
slug: MDN/Contribute/Markdown_in_MDN
tags:
  - MDN
translation_of: MDN/Contribute/Markdown_in_MDN
---
{{MDNSidebar}}

本文介绍了如何使用 Markdown 来编写 MDN 上的文档。我们以 GitHub 风格的 Markdown（GFM）为基础，并添加了一些扩展来支持一些我们在 MDN 上需要而 GFM 仍不支持的东西。

## 基础：Github风格的Markdown

MDN Markdown 的基础是 Github 风格的 Markdown（GFM）：<https://github.github.com/gfm/>。这意味着，对于本文中未指定的内容，你可以参考 GFM 规范。而 GFM 又是 CommonMark（[https://spec.commonmark.org/](https://spec.commonmark.org/)）的超集。

## 示例代码块

在 GFM 和 CommonMark 中，你可以使用“围栏代码块”来标示 `<pre>` 块。围栏代码块的起始位置后可以添加“信息字符串”。规范中写道：

> 信息字符串的第一个单词常用于指定示例代码的语言，并在代码标签的 class 属性中渲染出来。

信息字符串可包含多个单词，例如：

````plain
```fee fi fo fum
// some example code
```
````

在 MDN，你可以使用围栏代码块展现示例代码块。且必须使用信息字符串的第一个单词指定示例代码的语言，这将用于提供代码块的语法高亮。MDN 支持以下的语言词：

- `bash`
- `cpp`（对于 C/C++）
- `css`
- `html`
- `java`
- `js`（对于 JavaScript）
- `json`
- `php`
- `python`
- `sql`
- `svg`
- `xml`
- `wasm`（对于 WebAssembly 文本格式）

例如：

````plain
```js
const greeting = "I will get syntax highlighting";
```
````

你可以使用以下提供的任意一个附加词，但它必须跟在语言词之后：

- `example-good`：将其标注为一个好的例子（可被参考）
- `example-bad`：将其标注为一个不好的例子（应避免使用）
- `hidden`：不在网页中展示此代码块，用于 Live Sample。

例如：

````plain
```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```
````

它们将被渲染为：

```js example-good
const greeting = "I'm a good example";
```

```js example-bad
const greeting = "I'm a bad example";
```

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/3512>。

## 备注、警告和标注

如果你需要特别声明一些内容。那么，可以使用一个带有特殊起始段落的 GFM 块引用。一共有三种类型：备注、警告和标注。

- 要添加备注，请创建一个 GFM 块引用，起始段落以 `**备注：**` 开头。
- 要添加警告，请创建一个 GFM 块引用，起始段落以 `**警告：**` 开头。
- 要添加标注，请创建一个 GFM 块引用，起始段落以 `**标注：**` 开头。

备注和警告将在输出中渲染为 **注释：** 或 **警告：** 文本，而标注不会。当你想要提供自定义标题时，标注会是一个不错的选择。

标记的处理是是基于生成的 AST，而不是指定的确切字符。这意味着，使用 `<strong>备注：</strong>` 也会生成注释。但是，请以 Markdown 语法为主要风格。

块引用中的多行由空的块引用生成，就像普通的段落一样。此外，没有空格的多行会像常规 Markdown 行一样被处理和连接。

块引用可以包含代码块和其他块级元素。

因为文本 **备注：** 或 **警告：** 也会出现在渲染输出中，因此必须考虑到翻译问题。实际上，这意味这 MDN 支持的每一种语言环境都必须提供这些字符串的翻译，平台必须认识到它们表明了这些结构需要特殊处理。

#### 例子

##### 备注

```plain
> **备注：** This is how you write a note.
>
> It can have multiple lines.
```

这将会产生以下 HTML：

```html
<div class="notecard note">
  <p><strong>备注：</strong> This is how you write a note.</p>
  <p>It can have multiple lines.</p>
</div>
```

此 HTML 将渲染为高亮显示的框，例如：

> **备注：** This is how you write a note.
>
> It can have multiple lines.

##### 警告

```plain
> **警告：** This is how you write a warning.
>
> It can have multiple paragraphs.
```

这将会产生以下 HTML：

```html
<div class="notecard warning">
  <p><strong>警告：</strong> This is how you write a warning.</p>
  <p>It can have multiple paragraphs.</p>
</div>
```

此 HTML 将渲染为高亮显示的框，例如：

> **警告：** This is how you write a warning.
>
> It can have multiple paragraphs.

##### 标注

```plain
> **标注：** **This is how you write a callout**.
>
> It can have multiple paragaphs.
```

这将会产生以下 HTML：

```html
<div class="callout">
  <p><strong>This is how you write a callout.</strong></p>
  <p>It can have multiple paragraphs.</p>
</div>
```

此 HTML 将渲染为高亮显示的框，例如：

> **标注：**
>
> **This is how you write a callout.**
>
> It can have multiple paragraphs.

##### 警告的翻译

例如，如果我们想在德语中使用“Warnung”来表示“警告”，那么我们在德语页面应该写：

```plain
> Warnung: So schreibt man eine Warnung.
```

...这会产生：

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreibt man eine Warnung.</p>
</div>
```

#### 包含代码块的备注

这是一个包含代码块的例子。

````plain
> **备注：** This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
> Like that.
````

这将会产生以下 HTML：

```html
<div class="notecard note">
  <p><strong>备注：</strong> This is how you write a note.</p>
  <p>It can contain code blocks.</p>
  <pre class="brush: js">const s = "I'm in a code block";</pre>
  <p>Like that.</p>
</div>
```

此 HTML 将渲染为包含代码块的框，例如：

> **备注：** This is how you write a note.
>
> It can contain code blocks.
>
> ```js
> const s = "I'm in a code block";
> ```
>
> Like that.

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/3483>。

## 定义列表

为了在 MDN 中创建定义列表，你需要编写一个 GFM 无序列表（{{HTMLElement("ul")}}）的修改形式。在这种形式中：

- GFM `<ul>` 包含任意数量的顶级 GFM `<li>` 元素。
- 每一个顶级 GFM `<li>` 元素必须包含一个 GFM `<ul>` 元素作为其最后一个元素。
- 最内层的 `<ul>` 必须包含一个单独的 GFM `<li>` 元素，其文本内容必须以 `: `（冒号后跟空格）为开头。这个元素可能包含块级元素：包括段落、代码块、嵌套的列表和备注。

每个顶级的 GFM `<li>` 元素会被转换为 `<dt>`/`<dd>` 对，如下：

- 顶级的 GFM `<li>` 元素会被解析成一个 GFM `<li>` 元素，其内部的内容会组成 `<dt>` 中的内容，除了最内层的 `<ul>` 元素，它将不被包含在 `<dt>` 中。
- 最内层 `<ui>` 中包含的 `<li>` 元素会被解析成一个 GFM `<li>` 元素，其内部的内容会组成 `<dd>` 中的内容，除了开头的 `: `，它将被丢弃。

例如，这是一个 `<dl>`：

````plain
* term1
    * : My description of term1

* `term2`
    * : My description of term2

      It can have multiple paragraphs, and code blocks too:

      ```js
      const thing = 1;
      ```
````

在 GFM/CommonMark 中，这将会产生以下 HTML：

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: My description of term1</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: My description of term2</p>
        <p>It can have multiple paragraphs, and code blocks too:</p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

在 MDN，这将会产生以下 HTML：

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>My description of term1</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>My description of term2</p>
    <p>It can have multiple paragraphs, and code blocks too:</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

使用此语法编写的定义列表必须由成对的 `<dt>`/`<dd>` 元素组成。且不能编写包含多个连续 `<dt>` 元素或多个连续 `<dd>` 元素的列表：解析器将其视为错误。我们希望这个限制适用于 MDN 上几乎所有的定义列表，而对于那些不被希望受此限制的，你可以回退到原生的 HTML。

如果你需要将多个 `<dt>` 元素关联到同一个 `<dd>` 上，可以考虑将它们以逗号分隔后提供给同一个 `<dt>` 元素，如下：

```plain
* `param1`, `param2`, `param3`
    * : My description of params 1, 2, and 3
```

这样设计语法的原因是：在使用 CommonMark（如 Prettier 或 Github 预览）工具的情况下，它相当容易编写和解析。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4367>。

## 表格

在 GFM（而不是 CommonMark）中，有一个关于表格的语法：<https://github.github.com/gfm/#tables-extension->。我们将会使用它，但是：

- GFM 语法仅支持 HTML 中部分可用的功能，如果你需要使用 GFM 不支持的表格功能，请使用 HTML。
- 如果表格超过了150个字符宽度，请使用 HTML。
- 我们支持一种称为“属性表”的特殊表格，它有自己的 CSS 类，因此它只能是 HTML。

所以，一般原则是：你应该在能使用 GFM Markdown 语法时使用它，而在 HTML 的可读性更强时才回退到原生的 HTML。参见下方的“何时使用 HTML 表格”。

### GFM 表格语法风格

为了可读性，必须保留表格每一行开头和末尾的竖线符号，而不是像 GFM 表格那样可以省略它们。

也就是说，必须使用以下风格：

```plain
| Heading 1 | Heading 2 | Heading 3 |
|-----------|-----------|-----------|
| cell 1    | cell 2    | cell 3    |
| cell 4    | cell 5    | cell 6    |
```

而不是这种风格：

```plain
Heading 1 | Heading 2 | Heading 3
 --- | --- | ---
cell 1    | cell 2    | cell 3
cell 4    | cell 5    | cell 6
```

### 何时使用 HTML 表格

在以下三种主要情况下应该使用 HTML 表格而不是 GFM 语法：表格使用了 GFM 不支持的功能、GFM 表格太宽而难以阅读、使用了“属性表”这一特殊类型的表格。

#### GFM 不支持的表格功能

GFM 表格语法的主要限制是：

- GFM 表格必须有一个标题行。
- GFM 表格可能没有标题列。
- GFM 不会解析单元格中的 GFM 块元素。例如，你不能在单元格中使用列表。
- GFM 不支持除 `<table>`、`<tr>`、`<th>`、`<td>` 以外的任何表格元素。
- GFM 不支持诸如 `colspan`、`rowspan`、`scope` 等表格元素属性。

如果你需要使用任何不受支持的功能，那么应该使用 HTML 编写表格。

请注意，我们不建议在表格中经常使用 `<caption>` 元素，因为这不是 GFM 的语法。

#### GFM 表格最大宽度

有时，即使可以使用 GFM 编写表格，也应该使用 HTML。因为 GFM 使用“ASCII art”来实现表格，当表格的一行变得过长时，将变得难以阅读。例如，考虑以下表格：

```html
  <table>
    <tr>
      <th>A heading 1</th>
      <th>A heading 2</th>
      <th>A heading 3</th>
      <th>A heading 4</th>
      <th>A heading 5</th>
      <th>A heading 6</th>
    </tr>
    <tr>
      <td>Something shortish</td>
      <td>Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format.</td>
      <td>Something shortish</td>
      <td>Another cell  with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format.</td>
      <td>Something shortish</td>
      <td>Something shortish</td>
    </tr>
</table>
```

在 GFM 中，它会是这样：

```plain
  | A heading 1        | A heading 2                                                                                                                                         | A heading 3        | A heading 4                                                                                                                                                              | A heading 5        | A heading 6        |
  | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------ |
  | Something shortish | Something much longer that really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Another cell with lots of text in it, that also really goes into a lot of detail about something, so much so that the table formatting starts to look bad in GFM format. | Something shortish | Something shortish |
```

在这种情况下，最好使用 HTML。

所以我们遵循以下原则：_如果表格的 Markdown 表示将超过150个字符宽度，请使用 HTML 编写_。

#### 属性表

属性表是一类特殊的表格，用于在一组特定类型的页面中显示结构化的属性值。例如，所有的 Event 页面都有一个属性表，列出了关于事件的常见信息：是否冒泡、是否可取消等等。

这类表格有两列：第一列是标题列，其列出了属性名；第二列则列出了这些特定属性的值。例如，以下是一个 {{domxref("XMLHttpRequest")}} 接口的 {{domxref("XMLHttpRequest/progress_event", "progress")}} 事件的属性表。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("XMLHttpRequestEventTarget/onprogress", "onprogress")}}
      </td>
    </tr>
  </tbody>
</table>

因为它们有一个标题列，GFM 无法实现这些页面。因此，应该使用 HTML。为了获得特殊的样式，还需要将`"properties"`类应用于表格：

```html
<table class="properties">
```

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4325>、<https://github.com/mdn/content/issues/7342> 以及 <https://github.com/mdn/content/issues/7898#issuecomment-913265900>。

## 上标和下标

如果有必要，你可以使用 HTML {{HTMLElement("sup")}} 和 {{HTMLElement("sub")}} 元素，但应尽可能使用替代品。特别是：

- 对于求幂，请使用脱字符：`2^53`。
- 对于像 1

  <sup>st</sup>

  这样的表达式，推荐使用单词，如：“第一”。

- 对于脚注，请不要在脚注的参考文献上使用类似 `<sup>[1]</sup>` 的标注，这是没有必要的。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4578>。

## 网页摘要

_网页摘要_ 是应用于文章的开头段落——出现在网页 front matter 以及任何 [侧边栏和网页横幅宏](#kumascript) 之后的第一个文本内容。

此摘要用于搜索引擎优化（SEO），也被一些宏自动包含在网页列表旁。因此，第一段应即简洁又翔实。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/3923>。

## KumaScript

文本内容可以包括对 KumaScript 宏的调用：

```plain
The **`margin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property
sets the margin area on all four sides of an element. It is a shorthand for
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
and \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

The top and bottom margins have no effect on replaced inline elements, such as
\{{HTMLElement("span")}} or \{{HTMLElement("code")}}.
```
