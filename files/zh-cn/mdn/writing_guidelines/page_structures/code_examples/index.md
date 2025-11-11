---
title: 代码示例
slug: MDN/Writing_guidelines/Page_structures/Code_examples
---

在 MDN 上，你会看到整个页面中有许多代码示例插入，以展示 web 平台功能的使用。本文讨论了在页面中添加代码示例的不同机制，以及你应该使用哪些机制和何时使用。

> [!NOTE]
> 如果你想了解 MDN 文章中出现的代码的风格和提示，而不是包含代码的不同方式，请参见我们的[代码风格指南](/zh-CN/docs/MDN/Writing_guidelines/Code_style_guide)。

## 都有哪些类型的代码示例可用？

在 MDN 上有四种可用的代码示例：

- 静态示例——纯代码块，可能含有静态的代码运行结果的屏幕截图。
- 交互示例——用于创建[在线交互示例](https://github.com/mdn/interactive-examples)的系统，允许你随时更改代码，以查看效果，并轻松复制运行结果。
- 传统的 MDN“运行实例”——一个宏，接受普通代码块作为参数，将它们动态地放入文档中的 {{htmlelement("iframe")}} 元素内，并将其嵌入页面，以显示代码的实时运行效果。
- GitHub“在线实例”——一个宏，接受 [MDN 组织](https://github.com/mdn/) GitHub 仓库的文档路径作为参数，将其放入文档中的 {{htmlelement("iframe")}} 元素内，并将其嵌入页面，以显示代码的实时运行效果。

我们将在后面章节中依次讨论它们。

## 每种类型的代码示例适合什么时候使用？

每种代码示例都有自己的用例，什么时候应该使用它们？

- 如果你只是需要展示一些代码，而且展示实时结果并不那么重要，那么静态例子就很有用。有些人只是想要一些可以复制和粘贴的东西。也许你只是展示一个中间步骤，源代码就足够了（例如，这篇文章是为高级读者准备的，他们只需要看到代码）。另外，你可能是在演示一个 API 功能，而这个功能可能需要有自己单独的页面来链接，作为一个嵌入的例子效果并不好。
- 交互式的例子很好，因为读者可以即时修改输入——这对学习非常有价值。然而，它们的设置比其他表格更复杂，有更多的限制，而且是为了特定的目的。
- 如果你想在一个页面上展示源代码，然后展示它的运行，而且你对它作为一个独立的例子被访问并不那么在意，那么传统的运行实例就很有用。这种方法还有一个好处，如果你并排展示源代码和运行实例，你只需要更新一次代码，就可以同时更新这两个代码。然而，它们在编辑和工作时可能会很笨拙。
- 当你有一个想嵌入的现有例子，不想显示源代码，和（或）你想确保这个例子以独立的形式存在时，GitHub 运行实例很有用。它们有一个更好的贡献工作流程，但需要你了解 GitHub。另外，由于页面上的代码和源代码在两个不同的地方，它们更容易失去同步。

## 通用指引

除了展示运行实例的具体系统外，在 MDN 上添加或更新示例时，还有一些风格和内容方面的考虑因素需要记住。

- 当在页面上放置示例时，尽量确保你所写的 API 或概念的所有特性或选项都被涵盖。至少，最常见的选项或属性应该被包括在示例中。
- 在每个例子之前都要解释这个例子的作用，以及为什么它有趣或有用。
- 在每一段代码后面都需要有对其作用的解释。
- 在可能的情况下，把大的例子分成小块。例如，“运行实例”系统会在运行示例前自动将你的所有代码串联成一个片段，因此，如果你选择这样做，你实际上可以将你的 JavaScript、HTML 和（或）CSS 分成更小的片段，并在每个片段后加上描述性文字。这是一个很好的方法，可以帮助读者更清楚地理解长的或复杂的代码。
- 不仅仅是展示 API 或技术的每一部分是如何工作的，考虑你可能尝试展示的现实世界的使用案例。

## 静态示例

静态示例是一些静态代码块，它显示了在代码中如何使用一种特性。它们使用 Markdown [示例代码块](/zh-CN/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#示例代码块)的形式放置在页面中。一个示例代码块可能如下所示：

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## 交互示例

交互式示例主要用于 MDN 参考页面的顶部——我们的目标是提供这些示例，以提高其对初学者和其他想要在看到所查找的所有细节之前快速理解一个例子的读者的价值。关于交互式示例，有几个重要的限制需要注意：

- 它们是专门针对某一特定技术的——JavaScript 的用户界面与 CSS 的用户界面不同，而且它们只能孤立地说明一种技术。如果你想展示如何将不同技术结合使用，如将 HTML、CSS 和 JS 结构放在一起，就不合适。
- 交互式运行实例目前仅为显示 CSS 和 JavaScript 设置，对于其他技术，你需要等待。
- 与其他代码示例相比，用户界面对性能的要求更高；最好不要在所在 MDN 文章上放置多于一个交互示例。
- 这种示例并不适合承载很大的代码量——用户界面只支持一系列固定的大小，且只对短小的示例（10-15 行）奏效。

如果你想提交一个示例，请参照[交互示例仓库贡献指引](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md)。

如果你发现某个页面没有相应的交互示例，欢迎贡献一个！

### 交互示例演示

[`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs) 宏用来在 MDN 页面中嵌入完整示例。例如，\\{{EmbedInteractiveExample("pages/js/array-push.html")}} 宏调用会在页面上显示如下代码示例：

{{EmbedInteractiveExample("pages/js/array-push.html")}}

试试调整代码，看看能发生什么，也可以摆弄摆弄其中的控制按钮。

## 传统运行实例

传统运行实例使用 [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) 宏插入页面。一个 \\{{EmbedLiveSample}} 调用将动态抓取本页面的所有代码块，并放置在同一个文档，然后插入至页面的 {{htmlelement("iframe")}} 元素中。请查阅[运行实例指引](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)以了解更多信息。

### 格式化运行实例

如果你在“示例”部分撰写了运行实例，请为该示例提供一个描述性的 H3 标题（`###`）。最好写一个简短的描述，解释这个例子的情景和你希望展示的内容。然后用 H4 标题（`####`）添加分节，按所列顺序排列：

- HTML
- CSS
- JavaScript
- 结果

在上面列出的各个小节中编写代码块。在**结果**小节中，添加对 [`EmbedLiveSample` 宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples#运行实例宏)的调用，最好在这个小节中再加入一些文字来描述结果。
如果不使用某个特定的语言类型（例如，如果你不使用 JavaScript），或者隐藏了它，那么就应该省略相应的标题。

例如：

````md
## 示例

### 为段落添加样式

在这个示例中，我们将使用 CSS 来为含有 `fancy` 类的段落添加样式。

#### HTML

```html
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### 结果

\{{EmbedLiveSample("为段落添加样式")}}

只有含有 `class="fancy"` 的 `<p>` 元素才会显示为红色。
````

### 隐藏代码

有时你只想在一个页面中显示与实例相关的静态代码块。然而，你仍然需要 HTML、CSS 和 JavaScript 来呈现这样一个例子。

为了实现这一点，你可以用 `hidden` 类隐藏任何与之相关的代码块。

在隐藏了 HTML 代码的情况下继续使用上面的例子，看起来是这样的：

````md
## 示例

### 为段落添加样式

在这个示例中，我们将使用 CSS 来为含有 `fancy` 类的段落添加样式。

#### HTML

```html hidden
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### 结果

\{{EmbedLiveSample("为段落添加样式")}}

只有含有 `class="fancy"` 的 `<p>` 元素才会显示为红色。
````

## GitHub 在线实例

一般使用 [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) 宏将 GitHub 在线实例插入到页面中。一个 \\{{EmbedGHLiveSample}} 调用将从给定的（GitHub **mdn** 组织的）URL 中动态抓取文档，并插入至页面的 {{htmlelement("iframe")}} 元素中。

其工作方式与传统的运行实例非常相似，但它们要简单得多：

不必担心代码块在页面上的位置——该宏会自动从 GitHub 库中抓取 HTML 文档，并将其放入 `<iframe>` 中。

该宏只有三个参数：

1. 要嵌入的文档的 URL——这是相对于顶级目录为 `https://mdn.github.io/` 的 MDN 组织而言的。这个参数需要包含 URL 后面的部分，例如：`my-subdirectory/example.html`。如果它被称为 `index.html`，你可以省略文件名。
2. `<iframe>` 的宽度，可以用百分比或像素来表示。
3. `<iframe>` 的高度，可以用百分比或像素来表示。

让我们看一个例子。假设我们想嵌入来自 <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> 的代码，我们可以使用如下调用：

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

渲染过后，看起来像这样：

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### GitHub 在线实例指引

- 显然，你需要先把一个合适的代码示例放置到 [MDN GitHub 组织](https://github.com/mdn/)上，这需要使用 Git 来完成。如果你不熟悉 Git，请查看[如何使用 GitHub Pages？](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages)文章，以及[准备添加数据](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#为添加数据做好准备)以了解更进一步的用途。
- 你的代码样本需要适合展示你所要展示的内容——它应该包含一个简单的例子，能很好地完成一件事，里面不应该有攻击性的内容，并且应该遵循 MDN [代码示例指南](/zh-CN/docs/MDN/Writing_guidelines/Code_style_guide)。
