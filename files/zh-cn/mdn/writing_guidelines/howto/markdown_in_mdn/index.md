---
title: 如何使用 Markdown 来撰写文档
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
---

{{MDNSidebar}}

本文介绍了如何使用 Markdown 来编写 MDN Web 文档项目中的文档。我们以 GitHub 风格的 Markdown（GFM）为基础，并添加了一些扩展来支持一些我们在 MDN 上需要而 GFM 仍不支持的东西。

## 基础：Github 风格的 Markdown

MDN Markdown 的基础是 Github 风格的 Markdown（GFM）：<https://github.github.com/gfm/>。这意味着，对于本文中未指定的内容，你可以参考 GFM 规范。而 GFM 又是 CommonMark（[https://spec.commonmark.org/](https://spec.commonmark.org/)）的超集。

## 链接

GFM 规范定义了两种基础的链接类型：

- [内联链接](https://github.github.com/gfm/#inline-link)：在链接显示的文字后面紧跟链接的地址。
- [引用链接](https://github.github.com/gfm/#reference-link)：链接的目标在当前文档的其他地方定义。

在 MDN 上，我们仅允许使用内联链接。

以下是 MDN 上正确的编写 GFM 链接的方式：

```md example-good
[马卡龙](https://zh.wikipedia.org/wiki/馬卡龍)虽然美味，但制作难度大。
```

以下是 MDN 上错误的编写链接的方式：

```md example-bad
[马卡龙][马卡龙]虽然美味，但制作难度大。

[马卡龙]: https://zh.wikipedia.org/wiki/馬卡龍
```

## 示例代码块

在 GFM 和 CommonMark 中，你可以使用“围栏代码块”来标示 `<pre>` 块。围栏代码块的起始位置后可以添加“信息字符串”。规范中写道：

> 信息字符串的第一个单词常用于指定示例代码的语言，并呈现在代码标签的 class 属性中。

信息字符串可包含多个单词，例如：

````md
```fee fi fo fum
// 一些示例代码
```
````

在 MDN，你可以使用围栏代码块展现示例代码块。且必须使用信息字符串的第一个单词指定示例代码的语言，这将用于提供代码块的语法高亮。MDN 支持以下的语言词：

- 编程语言
  - JavaScript
    - `js`——JavaScript
    - `ts`——TypeScript
    - `jsx`——React JSX
    - `tsx`——React TSX
  - 类 C 语言
    - `c`——C 语言
    - `cpp`——C++
    - `cs`——C#
    - `java`——Java
  - 其他
    - `python`——Python
    - `php`——PHP
    - `rust`——Rust
    - `glsl`——GLSL（OpenGL 着色器）
    - `wasm`——WebAssembly
    - `webidl`——Web 接口定义语言
- 样式
  - `css`——CSS
  - `scss`——Sass（SCSS）
  - `less`——Less
- 标记语言
  - `html`——HTML
  - `svg`——SVG
  - `xml`——XML
  - `mathml`——MathML
  - `md`——Markdown
  - `latex`——LaTeX
- 命令提示符
  - `sh`——Bash/Shell
  - `batch`——Batch（Windows Shell）
  - `ps`——PowerShell
- 配置或数据文件
  - `json`——JSON
  - `ini`——INI
  - `yaml`——YAML
  - `toml`——TOML
  - `sql`——SQL 数据库
  - `ignore`——Gitignore 文件
  - `apacheconf` - Apache 配置
  - `nginx`——NGINX 配置
- 模板
  - `django`——Django 模板
  - `svelte`——Svelte 模板
  - `handlebars`——Handlebars 模板
  - `pug`——[Pug 模板](https://pugjs.org/zh-cn/api/getting-started.html)（可以被 [Express](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer) 使用）
- 其他
  - `plain`——纯文本
  - `diff`——Diff 文件
  - `http`——HTTP 标头
  - `regex`——正则表达式
  - `uri`——URI 和 URL

例如：

````md
```js
const greeting = "我会得到 JavaScript 语法高亮";
```
````

如果你希望高亮显示的语言未在上方列出，请使用 `plain` 标记代码块。也可以按照 [GitHub 讨论](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366)提出的流程请求其他语言的高亮支持。

### 阻止 lint

你可以为任何语言标识符添加 `-nolint` 后缀：

````md
```html-nolint
<p>
我不会被 lint。
</p>
```
````

类似这样的代码块将得到适当的语法高亮，而且会被运行实例系统识别，但会被 lint 工具或自动化的格式化工具（如 Prettier）所忽略。你应该使用此后缀来展示 lint 工具或格式化工具不应该修复的无效代码或替代的格式。

### 附加类（信息字符串）

GFM 支持[信息字符串](https://github.github.com/gfm/#info-string)，它允许作者提供有关代码块的附加信息。在 MDN 上，信息字符串会被转换为类名。

作者可以使用以下提供的任意一个信息字符串：

- `example-good`：将其标注为良好示例（可被参考）
- `example-bad`：将其标注为错误示例（应避免使用）
- `hidden`：不在网页中展示此代码块。代码仅用于运行实例。

例如：

````md
```js example-good
const greeting = "这是一个良好示例";
```

```js example-bad
const greeting = "这是一个错误示例";
```

```js hidden
const greeting = "这是一个隐藏的问候";
```
````

它们将被渲染为：

```js example-good
const greeting = "这是一个良好示例";
```

```js example-bad
const greeting = "这是一个错误示例";
```

### 讨论参考

此议题已被解决：

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## 备注、警告和标注

如果你需要特别声明一些内容。那么，可以使用一个带有特殊起始段落的 GFM 块引用。一共有三种类型：备注、警告和标注。

- 要添加备注，请创建一个 GFM 块引用，起始段落以 `**备注：**` 开头。
- 要添加警告，请创建一个 GFM 块引用，起始段落以 `**警告：**` 开头。
- 要添加标注，请创建一个 GFM 块引用，起始段落以 `**标注：**` 开头。

备注和警告将在输出中渲染为“**备注：**”或“**警告：**”文本，而标注不会。当你想要提供自定义标题时，标注会是一个不错的选择。

标记的处理是是基于生成的 AST，而不是指定的确切字符串。这意味着，使用 `<strong>备注：</strong>` 也会生成注释。但是，请以 Markdown 语法为主要风格。

多行块引用由空的块引用生成，就像普通的段落一样。此外，没有空格的多行内容会像常规 Markdown 行一样被处理和连接。

块引用可以包含代码块和其他块级元素。

### 示例

#### 备注

```md
> **备注：** 这就是编写备注的方式。
>
> 它可以有好几行。
```

这将会产生以下 HTML：

```html
<div class="notecard note">
  <p><strong>备注：</strong> 这就是编写备注的方式。</p>
  <p>它可以有好几行。</p>
</div>
```

此 HTML 将渲染为高亮显示的框，例如：

> **备注：** 这就是编写备注的方式。
>
> 它可以有好几行。

#### 警告

```md
> **警告：** 这就是编写警告的方式。
>
> 它可以有好几段。
```

这将会产生以下 HTML：

```html
<div class="notecard warning">
  <p><strong>警告：</strong> 这就是编写警告的方式。</p>
  <p>它可以有好几段。</p>
</div>
```

此 HTML 将渲染为高亮显示的框，例如：

> **警告：** 这就是编写警告的方式。
>
> 它可以有好几段。

#### 标注

```md
> **标注：** **这就是编写标注的方式。**
>
> 它可以有好几段。
```

这将会产生以下 HTML：

```html
<div class="callout">
  <p><strong>这就是编写标注的方式。</strong></p>
  <p>它可以有好几段。</p>
</div>
```

此 HTML 将渲染为高亮显示的框，例如：

> **标注：**
>
> **这就是编写标注的方式。**
>
> 它可以有好几段。

#### 警告的翻译

因为文本“**备注：**”或“**警告：**”也会出现在渲染的输出中，因此必须考虑到翻译问题。实际上，这意味这 MDN 支持的每一种语言环境都必须提供这些字符串的翻译，平台必须识别到它们表明了这些结构需要特殊处理。

这些本地化内容以 [gettext](https://www.gnu.org/software/gettext/) 格式存储在 [Yari](https://github.com/mdn/yari/tree/main/markdown/localizations) 的 JSON 文件中。请参考这些文件以确定应使用什么字符串来表示特定语言环境的“备注：”和“警告：”。如果未定义区域设置文件，将自动回退到英文版本。

例如，如果我们想在德语中使用“Warnung”来表示“警告”，那么我们在德语页面应该写：

```md
> **Warnung:** So schreibt man eine Warnung.
```

这会产生：

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreibt man eine Warnung.</p>
</div>
```

#### 包含代码块的备注

这是一个包含代码块的例子。

````md
> **备注：** 这是编写备注的方式。
>
> 它可以包含代码块。
>
> ```js
> const s = "我在代码块中";
> ```
>
> 就像这样。
````

这将会产生以下 HTML：

```html
<div class="notecard note">
  <p><strong>备注：</strong> 这是编写备注的方式。</p>
  <p>它可以包含代码块。</p>
  <pre class="brush: js">const s = "我在代码块中";</pre>
  <p>就像这样。</p>
</div>
```

HTML 将渲染为包含代码块的框：

> **备注：** 这是编写备注的方式。
>
> 它可以包含代码块。
>
> ```js
> const s = "我在代码块中";
> ```
>
> 就像这样。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/3483>。

## 定义列表

为了在 MDN 中创建定义列表，你需要编写一个 GFM 无序列表（{{HTMLElement("ul")}}）的修改形式。在这种形式中：

- GFM `<ul>` 包含任意数量的顶级 GFM `<li>` 元素。
- 每一个顶级 GFM `<li>` 元素必须包含一个 GFM `<ul>` 元素作为其最后一个元素。
- 最内层的 `<ul>` 必须包含一个单独的 GFM `<li>` 元素，其文本内容必须以“: ”（冒号后跟空格）为开头。这个元素可能包含块级元素：包括段落、代码块、嵌套的列表和备注。

每个顶级的 GFM `<li>` 元素会被转换为 `<dt>`/`<dd>` 对，如下：

- 顶级的 GFM `<li>` 元素会被解析成一个 GFM `<li>` 元素，其内部的内容会组成 `<dt>` 中的内容，除了最内层的 `<ul>` 元素，它将不被包含在 `<dt>` 中。
- 最内层 `<ui>` 中包含的 `<li>` 元素会被解析成一个 GFM `<li>` 元素，其内部的内容会组成 `<dd>` 中的内容，除了开头的“: ”，它将被丢弃。

例如，这是一个 `<dl>`：

````md
- term1

  - : 对术语 1 的描述

- `term2`

  - : 对术语 2 的描述

    它可以包含多个段落，也可以包含代码块：

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
      <li>: 对术语 1 的描述</li>
    </ul>
  </li>
  <li>
    <p><code>term2</code></p>
    <ul>
      <li>
        <p>: 对术语 2 的描述</p>
        <p>它可以包含多个段落，也可以包含代码块：</p>
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
  <dd>对术语 1 的描述</dd>
  <dt>
    <p><code>term2</code></p>
  </dt>
  <dd>
    <p>对术语 2 的描述</p>
    <p>它可以包含多个段落，也可以包含代码块：</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

使用此语法编写的定义列表必须由成对的 `<dt>`/`<dd>` 元素组成。且不能编写包含多个连续 `<dt>` 元素或多个连续 `<dd>` 元素的列表：解析器将其视为错误。我们希望这个限制适用于 MDN 上几乎所有的定义列表，而对于那些不被希望受此限制的，你可以回退到原生 HTML。

以下格式是不允许的：

```md example-bad
- `param1`、`param2`、`param3`
  - : 对 `param1` 的描述
  - : 对 `param2` 的描述
  - : 对 `param3` 的描述
```

如果你需要将多个 `<dt>` 元素关联到同一个 `<dd>` 上，可以考虑将它们以顿号（英文文档请使用半角逗号）分隔后提供给同一个 `<dt>` 元素，如下：

```md
- `param1`、`param2`、`param3`
  - : 对参数 1、2、3 的描述
```

这样设计语法的原因是：在使用 CommonMark（如 Prettier 或 Github 预览）工具的情况下，它相当容易编写和解析。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4367>。

## 表格

GFM 提供了创建[表格](https://github.github.com/gfm/#tables-extension-)的语法，我们在 MDN 中使用了它。但是，有时 GFM 表格并不适用于我们的需求：

- GFM 语法仅支持 HTML 中部分可用的特性，如果你需要使用 GFM 不支持的表格特性，请使用 HTML。
- 如果 GFM 表格超过了 150 个字符宽度，请使用 HTML。
- 我们支持一种称为“属性表”的特殊表格，它有自己的 CSS 类，因此它只能是 HTML。

所以，一般原则是：你应该在能使用 GFM Markdown 语法时使用它，而在 HTML 的可读性更强时才回退到原生 HTML。参见[何时使用 HTML 表格](#何时使用_html_表格)，以获取更多信息。

### GFM 表格语法风格

在 GFM 表格的语法中，作者可以省略每一行开头和末尾的管道符。但是，为了可读性，MDN 作者必须保留管道符。此外，作者必须在行内提供尾随空格，以便列中的所有单元格在纯文本中都具有相同的宽度。

也就是说，MDN 作者必须使用以下风格：

```md example-good
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --------- | --------- |
| cell 1    | cell 2    | cell 3    |
| cell 4    | cell 5    | cell 6    |
```

而不是这种风格：

```md-nolint example-bad
| Heading 1 | Heading 2 | Heading 3 |
| --------- | --- |----------------------|
| cell 1 | cell 2 | cell 3 |
cell 4 | cell 5 | cell 6
```

幸运的是，表格格式可以由 Prettier 自动修复，因此作者可以依靠 Prettier 来正确地格式化他们的表格。

### 何时使用 HTML 表格

在以下三种主要情况下应该使用 HTML 表格而不是 GFM 语法：

1. 表格使用了 GFM 不支持的特性（见下文）。
2. GFM 表格太宽而难以阅读。
3. 使用了“属性表”这一特殊类型的表格。

#### GFM 不支持的表格特性

GFM 表格语法的主要限制是：

- GFM 表格必须有一个标题行。
- GFM 表格可能没有标题列。
- GFM 不会解析单元格中的 GFM 块元素。例如，你不能在单元格中使用列表。
- GFM 不支持除 `<table>`、`<tr>`、`<th>`、`<td>` 以外的任何表格元素。
- GFM 不支持诸如 `colspan`、`rowspan`、`scope` 等表格元素属性。

如果你需要使用任何不受支持的特性，那么应该使用 HTML 编写表格。

请注意，我们不建议在表格中经常使用 `<caption>` 元素，因为这也会无法使用 GFM 语法。

#### GFM 表格最大宽度

有时，即使可以使用 GFM 编写表格，也应该使用 HTML。因为 GFM 使用“ASCII art”来实现表格，当表格的一行变得过长时，将变得难以阅读。例如，考虑以下表格：

```html
<table>
  <tr>
    <th>标题 1</th>
    <th>标题 2</th>
    <th>标题 3</th>
    <th>标题 4</th>
    <th>标题 5</th>
    <th>标题 6</th>
  </tr>
  <tr>
    <td>较短的内容</td>
    <td>
      涉及了很多细节的更长的内容，以至于表格格式在 GFM 格式中开始变得糟糕起来。
    </td>
    <td>较短的内容</td>
    <td>
      另一个包含大量文本的单元格，也涉及到了很多有关特定内容的细节，以至于表格格式在
      GFM 格式中开始变得糟糕起来。
    </td>
    <td>较短的内容</td>
    <td>较短的内容</td>
  </tr>
</table>
```

在 GFM 中，它会是这样：

```md
| 标题 1     | 标题 2                                                                    | 标题 3     | 标题 4                                                                                                      | 标题 5     | 标题 6     |
| ---------- | ------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| 较短的内容 | 涉及了很多细节的更长的内容，以至于表格格式在 GFM 格式中开始变得糟糕起来。 | 较短的内容 | 另一个包含大量文本的单元格，也涉及到了很多有关特定内容的细节，以至于表格格式在 GFM 格式中开始变得糟糕起来。 | 较短的内容 | 较短的内容 |
```

在这种情况下，最好使用 HTML。

所以我们遵循以下原则：_如果表格的 Markdown 表示将超过 150 个字符宽度，请使用 HTML 编写_。

#### 属性表

属性表是一类特殊的表格，用于在一组特定类型的页面中显示结构化的属性值。例如，所有的 Event 页面都有一个属性表，列出了关于事件的常见信息：是否冒泡、是否可取消等等。

这类表格有两列：第一列是标题列，其列出了属性名；第二列则列出了这些特定属性的值。例如，以下是一个 {{domxref("PannerNode")}} 接口的属性表：

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">输入数量</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">输出数量</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">通道计数模式</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">通道数</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">通道解释</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

因为它们有一个标题列，GFM 无法表示这些页面。因此，应该使用 HTML。为了获得特殊的样式，还需要将 `"properties"` 类应用于表格：

```html
<table class="properties"></table>
```

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4325>、<https://github.com/mdn/content/issues/7342> 以及 <https://github.com/mdn/content/issues/7898#issuecomment-913265900>。

## 上标和下标

如果有必要，你可以使用 HTML {{HTMLElement("sup")}} 和 {{HTMLElement("sub")}} 元素，但应尽可能使用替代品。特别是：

- 对于求幂，请使用脱字符：`2^53`。
- 对于像 1<sup>st</sup> 这样的表达式，推荐使用单词，如：“第一”。
- 对于脚注，请不要在脚注的参考文献上使用类似 `<sup>[1]</sup>` 的标注，这是没有必要的。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4578>。

## 网页摘要

*网页摘要*是页面中的第一个“内容”段落——出现在页面元数据（front matter）以及任何[侧边栏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#添加侧边栏)和[网页横幅](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#页面或章节头部的指示器)宏之后的第一段文本内容。

此摘要用于搜索引擎优化（SEO），也被一些宏自动包含在网页列表旁。因此，第一段应即简洁又翔实。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/3923>。

## KumaScript

文本内容可以包括对 KumaScript 宏的调用：

```md
[CSS](/zh-CN/docs/Web/CSS) **`margin`** 属性设置元素的四个边上的外边距区域。它是
\{{cssxref("margin-top")}}、\{{cssxref("margin-right")}}、\{{cssxref("margin-bottom")}}
和 \{{cssxref("margin-left")}} 属性的简写形式。

\{{EmbedInteractiveExample("pages/css/margin.html")}}

顶部和底部外边距对放置的行级元素（例如，\{{HTMLElement("span")}} 或 \{{HTMLElement("code")}}）没有影响。
```

参见[使用宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros)以获取更多关于宏的信息。
