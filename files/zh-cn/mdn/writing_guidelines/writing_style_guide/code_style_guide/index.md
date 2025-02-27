---
title: 代码示例编写指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 2ef5f5de8982fb9df0a0b8385d7b7a16b5497a6a
---

本文中描述的指南适用于代码示例的样式美化以及格式化，与语言无关。有关编写代码示例时要包含的内容的指南，请参阅[写作风格指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide#代码示例)。

对于特定技术的指南，请参阅以下文章：

- [HTML 指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS 指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript 指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell 提示符指南](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## 通用最佳实践

本节提供了创建可理解的，用于演示某个特性或函数用法的最小代码示例的最佳实践。

添加到 MDN Web 文档的代码示例应该是：

- 简单而易于理解，或者
- 复杂而足以做一些有趣的事情（且最好是有用的）。

你需要牢记的是，**读者将会复制并粘贴代码示例到他们自己的代码中，并可能将其用于生产**。

因此，你应该确保代码示例可用，遵循普遍接受的最佳实践，并且**不会**导致应用程序不安全、效率底下、臃肿或无法访问。如果代码示例不可运行或不适合生产，请确保在代码注释和解释性文本中包含警告；例如，如果它只是一个片段而不是一个完整的示例，请明确说明。这也意味着你应该提供运行示例所需的**所有**信息，包括任何依赖项和设置信息。

代码示例应该尽可能独立且易于理解。其目的不一定是编写高效、聪明的代码，以令专家印象深刻并具有出色的功能，而是编写简化的可运行的示例，以便于理解。

一些更通用的最佳实践包括：

- 代码示例应尽可能简短，并且理想情况下只展示你感兴趣的特性。
- **仅**包含示例所需的代码。大量不相关的代码很容易分散读者的注意力或让他们感到困扰。如果你想提供一个完整的、更长的示例，请将其放在我们的 [GitHub 仓库](https://github.com/mdn/)（或 JSBin、Codepen 等类似的仓库）中，然后在示例上方或下方提供完整版本的链接。
- 不要包含不必要的服务器端代码、库、框架、预处理器和其他依赖项。它们会使代码不易于移植，也更难以运行和理解。尽可能使用原生代码。
- 不要假设读者知道任何库、框架、预处理器或其他非原生特性。例如，使用在示例中有意义的类名，而不是对 BEM 或 Bootstrap 用户有意义的类名。
- 编写尽可能简介且易于理解的代码，即使它不是编写代码最有效的方式。
- 使代码更加包容；请考虑 MDN 的读者来自世界各地，他们的种族、宗教、年龄、性别等各不相同。确保代码示例中的文本反映了这种多样性和包容性。
- 请不要为了简洁而使用不好的做法（例如表现元素 {{HTMLElement("big")}} 或 {{domxref("Document.write", "document.write()")}}）；请正确地编写代码。
- 对于 API 演示，如果你同时使用了多个 API，请指出包含了哪些 API，以及用到的特性来自于哪里。

## 格式化指南

关于正确缩进、空格和行长度的意见一直存在争议。对这些主题的讨论会分散注意力，从而影响内容的创建和维护。

在 MDN Web 文档中，我们使用 [Prettier](https://prettier.io/) 作为代码格式化工具，以保持代码风格的一致性（并避免偏离主题讨论）。你可以参考我们的[配置文件](https://github.com/mdn/content/blob/main/.prettierrc.json)（[本地化文档的配置文件](https://github.com/mdn/translated-content/blob/main/.prettierrc.json)）来了解当前的规则，并阅读 [Prettier 的文档](https://prettier.io/docs/en/index.html)。

Prettier 格式化所有代码并保持风格一致。尽管如此，你仍需要遵循一些额外的规则。

这些用于格式化代码示例的 MDN Web 文档指南也是编写代码的最佳实践。

### 选择语法语言

为了确保代码块的正确格式化和语法高亮，作者必须指定他们正在编写的代码块的语言。请参阅 [MDN Markdown 中的示例代码块](/zh-CN/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#示例代码块)以获取 MDN 支持的语言列表，以及有关如何请求新语言的详细信息。

如果代码块是伪代码、命令的输出或其他非编程语言，请将语言明确设置为 `plain`。

> [!WARNING]
> 如果 MDN 尚未支持所需的语言，请**不要**将代码块的语言设置为类似的语言，因为这样做可能会导致 Prettier 格式化和语法高亮出现意外的副作用。

### 代码行长度

- 代码行不应过长，以至于需要水平滚动才能阅读。
- 建议的做法是，将代码行保持在最多 80 个字符长（[交互式示例](https://github.com/mdn/interactive-examples)为 64 个字符）。
- 为了保证可读性，在自然断点处断开长行，但不要以牺牲最佳实践为代价。

例如，这样并不好：

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

这样稍好些，但有些别扭：

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

更好的是使用模板字面量：

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

```js example-good
if (
  obj.CONDITION ||
  obj.OTHER_CONDITION ||
  obj.SOME_OTHER_CONDITION ||
  obj.YET_ANOTHER_CONDITION
) {
  /* 其他内容 */
}

const toolkitProfileService = Components.classes[
  "@mozilla.org/toolkit/profile-service;1"
].createInstance(Components.interfaces.nsIToolkitProfileService);
```

### 代码块高度

代码块应该保持在需要的长度，但不能过长。理想情况下，目标为简短内容的可以是 15-25 行左右。如果代码块要长得多，请考虑只显示最有用的片段，并在 GitHub 仓库或 CodePen 上提供完整示例的链接。

#### 行内代码格式化

使用行内代码语法（\`）来标记函数名、变量名和方法名。例如：“`frenchText()` 函数”。

**方法名称应该后跟一对括号**：例如，`doSomethingUseful()`。括号有助于区分方法和其他代码术语。

## 正确渲染指南

应遵循以下准则，以确保你编写的代码示例在 MDN Web 文档上正确显示。你还应该考虑响应式，使编写的代码示例在移动设备上也能正常使用。

### 渲染的代码示例的尺寸

- **将宽度设置为 100%**：MDN Web 文档的主内容窗格在桌面上大约为 700px 宽，因此嵌入的代码示例必须在该宽度下正常显示。
- **将高度设置为 700px 以下**：我们建议将渲染的代码示例的高度保持在 700px 以下，以便在屏幕上最大限度地提高可读性。

## 渲染的代码示例中的颜色

- 使用关键字表示主要颜色和其他“基本”颜色，例如：

  ```css example-good
  color: black;
  color: white;
  color: red;
  ```

- 使用 `rgb()` 表示更复杂的颜色（包括半透明颜色）：

  ```css example-good
  color: rgb(0, 0, 0, 0.5);
  color: rgb(248, 242, 230);
  ```

- 对于十六进制颜色，使用短格式：

  ```css example-good
  color: #058ed9;
  color: #a39a92c1;
  color: #ff0;
  color: #fbfa;
  ```

  ```css-nolint example-bad
  color: #ffff00;
  color: #ffbbffaa;
  ```

### 将渲染的示例标记为良好或错误

你会注意到，本页面上代表良好实践的代码块的右上角会呈现绿色的勾号，而代表错误实践的代码块则会呈现具有红色圆圈的白色叉号。

你可以在编写代码示例时遵循相同的样式。你不需要在每个地方都使用这种样式，只需要在你想要特别强调代码示例中的良好和错误实践的页面上使用即可。

要获得这种渲染效果，请使用“代码围栏”来标记代码块，后跟语言信息字符串。例如：

```js
function myFunc() {
  console.log("你好！");
}
```

要将代码块表示为良好或错误示例，请在语言字符串后添加 `example-good` 或 `example-bad`，如下所示：

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

这会被渲染为：

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
