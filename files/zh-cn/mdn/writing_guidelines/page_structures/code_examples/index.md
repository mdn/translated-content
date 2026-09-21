---
title: MDN 上的代码示例
short-title: 代码示例
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

在 MDN 上，你会看到整个页面中有许多代码示例插入，以展示 web 平台功能的使用。本文讨论了在页面中添加代码示例的不同机制，以及你应该使用哪些机制和何时使用。

> [!NOTE]
> 本篇文章描述了 MDN 页面包含代码的**方式**。如果你希望在 MDN 页面中添加代码时获得代码检查和风格提示，请参见我们的[代码风格指南](/zh-CN/docs/MDN/Writing_guidelines/Code_style_guide)。

## 都有哪些类型的代码示例可用？

在 MDN 上有四种可用的代码示例：

- **静态示例**——在页面上显示源代码的代码块。
- **运行实例**——一个宏，接受普通代码块作为参数，将它们动态地放入文档中的 {{htmlelement("iframe")}} 元素内，并将其嵌入页面，以显示代码的运行效果。已发布的页面将源代码块和结果并排显示。
- **交互示例**——宏会将源代码渲染到页面上，并将结果显示在源代码旁边的面板中。读者可以编辑源代码并重新运行示例，以查看所做更改的效果。
- **GitHub 嵌入**——一个宏，接受 [MDN 组织](https://github.com/mdn/) GitHub 仓库的文档路径作为参数，将其放入文档中的 {{htmlelement("iframe")}} 元素内，并将其嵌入页面，以显示代码的运行效果。

## 每种类型的代码示例适合什么时候使用？

每种代码示例有它自己的用例：

- **静态示例**适用于需要展示代码，但无需在发布页面上展示代码运行结果的情况，或者在文章中展示某个中间步骤时。读者通常会寻找此类展示功能使用方法的代码块，以便将简短的示例复制粘贴到自己的项目中。此外，你可能希望使用静态代码块来演示某些 API 或功能，而这些内容作为实时示例效果并不理想。
- **运行实例**适用于你希望展示源代码并展示其运行效果，且并不特别在意它是否为独立示例的情况。  它们的优点在于，你只需更新一次代码，页面上的代码块和实时结果就会同步更新。
- **交互示例**用于参考页面。每个页面仅限出现一次，且必须位于页面介绍部分之后的特定位置。它们有助于展示某项功能的常见或实际用途。
- **GitHub 嵌入**适用于以下情况：你有现成的示例需要嵌入，但不想显示源代码，和/或希望确保该示例以独立形式存在。由于页面上的代码和源代码位于两个不同的位置，维护成本会更高。

## 通用指引

在 MDN 上添加或更新示例时，还有一些风格和内容方面的考虑因素需要记住。

- 当在页面上放置示例时，尽量确保你所写的 API 或概念的所有特性或选项都被涵盖。至少，最常见的选项或属性应该被包括在示例中。
- 在每个例子之前都要解释这个例子的作用，以及为什么它有趣或有用。
- 在每一段代码后面都需要有对其作用的解释。
- 在可能的情况下，把大的例子分成小块。例如，“运行实例”系统会在运行示例前自动将你的所有代码串联成一个片段，因此，如果你选择这样做，你实际上可以将你的 JavaScript、HTML 和（或）CSS 分成更小的片段，并在每个片段后加上描述性文字。这是一个很好的方法，可以帮助读者更清楚地理解长的或复杂的代码。
- 不仅仅是展示 API 或技术的每一部分是如何工作的，考虑你可能尝试展示的现实世界的使用案例。

## 静态示例

静态示例是一些静态代码块，它显示了在代码中如何使用一种特性。它们使用 Markdown [示例代码块](/zh-CN/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#示例代码块)的形式放置在页面中。一个示例代码块可能如下所示：

```js
// 这是一个 JS 示例
const test = "Hello";
console.log(test);
```

## 交互示例

[`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs) 宏用于在 MDN 参考页面的顶部嵌入交互式示例。这些示例面向希望直接尝试示例，而无需通读有关某个主题或功能的完整文章的读者。

`InteractiveExample` 宏接受一个字符串形式的示例标题，后面跟一个关键字来指定示例的高度。要包含在示例中的代码块出现在宏调用之后，且在代码块语言后的 info 字符串中包含关键字 `interactive-example`。[JavaScript `Array.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#尝试一下) 的用法就是该宏的一个很好的示例，其在 Markdown 源代码中的形式如下：

````md
\{{InteractiveExample("JavaScript 示例：Array.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// 期望输出：Array ["a", "b", "c", "d", "e", "f"]
```
````

关于交互示例，有几个重要的限制需要注意：

- 它们是专门针对某一特定技术的——JavaScript 的用户界面与 CSS 的用户界面不同，而且它们只能孤立地说明一种技术。如果你想展示如何将不同技术结合使用，如将 HTML、CSS 和 JS 结构放在一起，就不合适。
- 这种示例并不适合承载很大的代码量——用户界面只支持一系列**固定高度**，且只对短小的示例（10-15 行）奏效。
- 一个 MDN 页面只能包含一个交互示例。

## 运行实例

运行实例使用 [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) 宏插入页面。一个 \\{{EmbedLiveSample}} 调用将动态抓取本页面的代码块，并放置在同一个文档，然后插入至页面的 {{htmlelement("iframe")}} 元素中。请查阅[运行实例指引](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)以了解更多信息。

## GitHub 运行实例

GitHub 运行实例使用 [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) 宏插入页面。一个 \\{{EmbedGHLiveSample}} 调用将从给定的（GitHub **MDN** 组织仓库的）URL 中动态抓取内容，并插入至页面的 {{htmlelement("iframe")}} 元素中。

该宏有三个参数：

1. 要嵌入的文档的 URL——这是相对于顶级目录为 `https://mdn.github.io/` 的 MDN 组织而言的。这个参数需要包含 URL 后面的部分，例如：`my-subdirectory/example.html`。如果它被称为 `index.html`，你可以省略文件名。
2. `<iframe>` 的宽度，可以用百分比或像素来表示。
3. `<iframe>` 的高度，可以用百分比或像素来表示。

让我们看一个例子。假设我们想嵌入来自 <https://mdn.github.io/learning-area/html/introduction-to-html/getting-started/> 的代码，我们可以使用如下调用：

\\{{EmbedGHLiveSample("learning-area/html/introduction-to-html/getting-started/", '100%', 100)}}

渲染过后，看起来像这样：

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/getting-started/", '100%', 100)}}
