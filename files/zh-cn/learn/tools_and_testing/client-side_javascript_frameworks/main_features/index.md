---
title: 框架的主要特性
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

每种主流的 JavaScript 框架都有自己不同的方式更新 DOM、处理浏览器事件并为开发者提供愉快的使用体验，这篇文章将探索“四大”框架的主要特性，从较高的层次探讨框架的工作方式以及它们之间的区别。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        熟悉 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a href="/zh-CN/docs/Learn/CSS">CSS</a> 和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言的核心知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解框架主要代码的特性。</td>
    </tr>
  </tbody>
</table>

## 领域特定语言

本模块中讨论的所有框架都基于 JavaScript，并且都允许你使用领域特定语言（DSL）来构建应用程序。特别地，React 已经普及了使用 **JSX** 来编写其组件，而 Ember 则使用 **Handlebars**。与 HTML 不同，这些语言知道如何读取数据变量，并且此数据可用于简化编写 UI 的过程。

基于 Angular 框架的应用程序会大量地使用 **TypeScript**。TypeScript 不关心用户界面的编写，但它仍然是一种领域特定语言（DSL），而且与原生 JavaScript 有着很大的不同。

DSL 不能直接由浏览器解析；它们首先要被转换成 JavaScript 或 HTML。虽然[转换在开发流程中是一个额外的步骤](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview#转换)，但是框架通常会包含处理此步骤所需的工具，或者与该步骤相适应。虽然你可以不使用这些领域特定语言构建框架应用程序，但使用它们会简化你的开发过程，还能更容易地从这些框架的周边社区中找到帮助。

### JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html) 代表 JavaScript 和 XML，是 JavaScript 的扩展，为 JavaScript 环境带来了类似 HTML 的语法。它由 React 团队发明，用于 React 应用程序，但也可用于开发其他应用程序——例如 Vue 应用程序。

这是一个简单的 JSX 示例：

```js
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

小括号内的表达式表示一个 HTML [`<header>`](/zh-CN/docs/Web/HTML/Element/header) 元素，里面还有一个 [`<h1>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 元素。第 4 行 `subject` 周围的花括号告诉应用程序要读取常量 `subject` 的值并将其插入到我们的 `<h1>` 元素当中。

当与 React 一起使用时，上一个片段中的 JSX 将被编译成这样：

```js
const subject = "World";
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!"),
);
```

当最终被浏览器渲染时，上述片段将产生如下的 HTML 内容：

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

[Handlebars](https://handlebarsjs.com/) 是一种简单的模板语言，虽然它并非仅可用于 Ember 应用程序，但它在 Ember 应用程序中被大量使用。Handlebars 代码类似于 HTML，但它可以选择从其他地方获取数据。这些数据可用于影响应用程序最终构建的 HTML。

与 JSX 相似的是，Handlebars 使用花括号来注入变量的值。不相似的是，Handlebars 使用双花括号，而不是单花括号。

下面是一个简单的 Handlebars 示例：

给定以下 Handlebars 模板：

```html
<header>
  <h1>Hello, \{{subject}}!</h1>
</header>
```

还有以下数据：

```js
{
  subject: "World";
}
```

Handlebars 将像这样构建 HTML：

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### TypeScript

[TypeScript](https://www.typescriptlang.org/) 是 JavaScript 的*超集*，这意味着它*扩展*了 JavaScript——所有 JavaScript 代码都是有效的 TypeScript 代码，但反之则不然。TypeScript 可以让开发者们“严格地”执行他们的代码。例如，要写一个函数 `add()`，它接受整数 `a` 和 `b` 并返回它们的总和。

在 JavaScript 中，可以这样编写：

```js
function add(a, b) {
  return a + b;
}
```

对于习惯 JavaScript 的人来说，这段代码非常简单明确，但它仍然可以更加清晰明确。JavaScript 允许我们使用 `+` 运算符将字符串连接在一起，所以，如果传入 `add()` 函数的 `a` 和 `b` 是字符串，这个函数在技术上仍然可以工作——但是它可能不会给你期望的结果。如果我们只想允许将数字传递给这个函数怎么办？可以使用 TypeScript：

```js
function add(a: number, b: number) {
  return a + b;
}
```

在 `a` 和 `b` 后面的 `: number` 代码告诉 TypeScript `a` 和 `b` 都必须是数字。这样的话，当我们再次将字符串（例如 `'2'`）传入这个函数的时候，TypeScript 就会在编译期间报告错误，而我们将被迫修复这个错误。虽然可以编写自己的 JavaScript 来做到与 TypeScript 一样的效果，但是这会使我们的写的代码更加繁杂。让 TypeScript 为我们处理此类检查或许更有意义。

## 编写组件

如前一章所述，大多数框架都有某种组件模型。React 组件可以使用 JSX 编写，Ember 组件可以使用 Handlebars 编写，Angular 和 Vue 组件可以使用模板语法轻松地扩展 HTML。

不管框架的作者们对于如何编写组件的看法有多么不同，每个框架的组件都提供了一种方法来描述组件可能需要的外部属性、组件应该管理的内部状态以及用户在组件上可以触发的事件。

本节其余部分的代码片段将使用 React 作为示例，并使用 JSX 编写其组件。

### 属性

属性（**props**）是渲染组件所需要的外部数据。假设你正在为一个在线杂志建立网站，你需要确保每一个撰稿人都能得到他们工作的荣誉。你可能会创建一个 `AuthorCredit` 组件，与每篇文章一起使用。这个组件需要显示作者的头像和关于他们的简短的介绍。为了知道渲染什么样的图片，打印什么样的介绍，`AuthorCredit` 需要接受一些属性。

这个 `AuthorCredit` 组件的 React 写法可能看起来像这样：

```js
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}
```

`{props.src}`、`{props.alt}` 和 `{props.byline}` 代表我们将插入组件中属性的位置。为了渲染这个组件，我们会在我们想要渲染它的地方（可能是在另一个组件里面）写下这样的代码：

```js
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

这将最终在浏览器中呈现以下 [`<figure>`](/zh-CN/docs/Web/HTML/Element/figure) 元素，其结构由 `AuthorCredit` 组件定义，其内容由 `AuthorCredit` 组件调用中的 props 定义：

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### 状态

我们在上一章谈到了**状态**的概念，强大的状态处理机制是高效框架的关键，每个组件都可能有需要控制其状态的数据。只要组件还在使用，这种状态就会以某种方式持续存在。像属性一样，状态可以用来影响组件的渲染方式。

作为一个示例，考虑一个计算它被点击了多少次的按钮。这个组件应该负责跟踪自己的 _count_ 状态，可以这样写：

```js
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://reactjs.org/docs/hooks-reference.html#usestate) 是一种 **[React 钩子](https://reactjs.org/docs/hooks-intro.html)**，根据给定初始值，跟踪其更新时的变化。代码最初在浏览器会渲染成下面这样：

```html
<button>Clicked 0 times</button>
```

`useState()` 调用会在整个应用中全程稳定跟踪 `count` 的值，你不需要再自行撰写代码处理这些。

### 事件

为了实现交互性，组件需要对浏览器事件做出响应，这样我们的应用程序才能对用户做出响应。每个框架都为监听浏览器事件提供了自己的语法，这些语法参考了相应的浏览器原生事件的名称。

在 React 中，监听 [`click`](/zh-CN/docs/Web/API/Element/click_event) 事件需要一个特殊的属性 `onClick`。让我们更新上述 `CounterButton` 代码，允许它为每次点击计数：

```js
function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

在这个版本中，我们使用额外的 `useState()` 功能来创建一个特殊的 `setCount()` 函数，我们可以调用它来更新 `count` 的值。我们在第 4 行调用这个函数，并将 `count` 设置为其当前值加 1。

## 为组件添加样式

每个框架都提供了一种为你的组件或整个应用程序定义样式的方法。尽管每个框架定义组件样式的方法略有不同，但它们都给了你多种方式。通过添加一些辅助模块，你可以用 [Sass](https://sass-lang.com/) 或 [Less](https://lesscss.org/) 来为你的框架应用程序设计样式，或者用 [PostCSS](https://postcss.org/) 来转译你的 CSS 样式表。

## 处理依赖

所有主要的框架都提供了处理依赖关系的机制——在其他组件内使用组件，有时还会涉及到多层次。与其他功能一样，不同框架的确切机制会有所不同，但最终结果是一样的。组件倾向于使用标准的 [JavaScript 模块语法](/zh-CN/docs/Web/JavaScript/Guide/Modules)将组件导入其他组件，或者至少是类似的东西。

### 组件嵌套

基于组件的用户界面架构的一个关键好处是，组件可以被组合在一起。就像你可以把 HTML 标签写在彼此里面来建立一个网站一样，你可以在其他组件里面使用组件来建立一个网络应用。每个框架都允许你编写利用（并因此依赖）其他组件的组件。

例如，我们的 `AuthorCredit` React 组件可能被用于 `Article` 组件中。这意味着 `Article` 需要导入 `AuthorCredit`。

```js
import AuthorCredit from "./components/AuthorCredit";
```

一旦完成导入，就可以在 `Article` 组件中使用 `AuthorCredit` 组件：

```js
// …

<AuthorCredit />

// …
```

### 依赖注入

现实世界的应用往往涉及到多层次嵌套的组件结构。一个 `AuthorCredit` 组件嵌套了很多层，可能由于某些原因，需要来自我们应用程序根层的数据。

比方说，我们正在建立这样的杂志网站：

```js
<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>
```

我们的 `App` 组件有 `AuthorCredit` 组件需要的数据。我们可以重写 `Home` 和 `Article`，让它们向下传递属性，但如果我们的数据的来源和目的地之间有很多层，这就会变得很繁琐。这也是不合理的：`Home` 和 `Article` 实际上没有使用作者的肖像或署名，但如果我们想把这些信息放到 `AuthorCredit` 中，我们需要改变 `Home` 和 `Article` 来适应它。

通过许多层组件传递数据的问题被称为“属性穿透”，它对大型应用来说并不理想。

为了规避属性穿透，框架提供了依赖注入的功能，这是一种将某些数据直接传递给需要它的组件的方法，而不需要通过中间的层次。每个框架都以不同的名称和方式来实现依赖注入，但效果最终是一样的。

Angular 把这个过程称为[依赖注入](https://angular.io/guide/dependency-injection)；Vue 有 [`provide()` 和 `inject()` 组件方法](https://v2.vuejs.org/v2/api/#provide-inject)；React 有一个 [Context API](https://reactjs.org/docs/context.html)；Ember 通过[服务](https://guides.emberjs.com/release/services/)分享状态。

### 生命周期

在框架上下文中，一个组件的**生命周期**是一个组件从被追加到 DOM 然后被浏览器渲染（通常称为*挂载*）到从 DOM 中移除（通常称为*卸载*）所经历的一系列阶段的集合。每个框架对这些生命周期阶段的命名都不同，而且不是所有的框架都能让开发者访问相同的阶段。所有的框架都遵循相同的一般模型：它们允许开发者在组件*挂载*、*渲染*和*卸载*以及这之间的许多阶段执行某些动作。

*渲染*阶段是最需要了解的，因为它在用户与应用程序交互时重复的次数最多。每当浏览器需要渲染一些新的东西时，它就会运行，无论这些新的信息是对浏览器中的内容进行补充、删除，还是对现有内容进行编辑。

这个 [React 组件的生命周期图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)提供了对这个概念的总体概述。

## 渲染元素

就像生命周期一样，框架对如何渲染应用程序采取了不同但相似的方法。所有的框架都会跟踪浏览器 DOM 的当前渲染版本，并且每个框架都会对 DOM 在应用程序中的组件重新渲染时应该如何变化做出略有不同的决定。因为框架为你做出了这些决定，所以你通常不会自己与 DOM 交互。这种远离 DOM 的抽象比自己更新 DOM 更复杂、更耗费内存，但如果没有它，框架就不能让你以它们所熟知的声明性方式编程。

**虚拟 DOM** 是一种方法，此时关于浏览器的 DOM 信息被存储在 JavaScript 内存中。你的应用程序更新这个 DOM 副本，然后将其与“真正的”DOM（为你的用户实际渲染的 DOM）进行比较，以决定要渲染什么。应用程序建立一个“diff“来比较更新的虚拟 DOM 和当前渲染的 DOM 之间的差异，并使用该差异将更新应用到真实 DOM。React 和 Vue 都利用虚拟 DOM 模型，但它们建立“diff”或渲染应用的逻辑并不完全相同。

你可以[在 React 文档阅读到更多有关虚拟 DOM 的信息](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom)。

**增量式 DOM** 与虚拟 DOM 类似，它建立一个 DOM“diff”来决定渲染什么，但不同的是，它不在 JavaScript 内存中创建一个完整的 DOM 副本。它忽略了 DOM 中不需要被改变的部分。Angular 是本模块到目前为止讨论的唯一一个使用增量 DOM 的框架。

你可以[在 Auth0 博客阅读到更多有关增量式 DOM 的信息](https://auth0.com/blog/incremental-dom/)。

**Glimmer VM** 是 Ember 独有的。它既不是虚拟 DOM，也不是增量 DOM；它是一个独立的过程，通过它，Ember 的模板被转换为一种“字节码”，比 JavaScript 更容易和更快地阅读。

## 路由

正如[前一章中提到的，路由](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#路由)是网络体验的一个重要部分。为了避免在具有大量视图的足够复杂的应用程序中出现破碎的体验，本模块中涉及的每个框架都提供了一个库（或多个库），帮助开发人员在其应用程序中实现客户端路由。

## 测试

所有的应用程序都受益于覆盖测试，以确保你的软件继续以你期望的方式运行，Web 应用程序也不例外。每个框架的生态系统都提供工具，以促进测试的编写。测试工具并没有内置于框架本身，但用于生成框架应用程序的命令行界面工具使你能够访问适当的测试工具。

每个框架在其生态系统中都有广泛的工具，具有单元和集成测试的能力。

[Testing Library](https://testing-library.com/) 是为许多 JavaScript 环境准备的一套测试工具，包括 React、Vue 和 Angular。Ember 文档涵盖了 [Ember 应用的测试](https://guides.emberjs.com/release/testing/)。

这是在 React 测试库的帮助下为我们的 `CounterButton` 写的一个快速测试。它测试了一些东西，比如按钮的存在，以及按钮在被点击 0 次、1 次和 2 次后是否显示了正确的文本：

```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");
  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

## 总结

现在，你应该对你在使用框架创建应用程序时要使用的实际语言、功能和工具有了更多的了解。我相信你一定很想去做一些编码工作，这就是你接下来要做的事情！在这一点上，你可以选择你想先开始学习哪个框架：

- [React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
- [Vue](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Svelte](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Angular](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
