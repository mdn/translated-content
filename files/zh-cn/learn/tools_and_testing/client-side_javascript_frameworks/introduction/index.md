---
title: 客户端框架介绍
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

在本章节我们开始大致了解框架，简要回顾 JavaScript 和框架的历史，为什么框架会存在以及它们提供了什么，如何开始考虑选择一个框架并学习，以及对于客户端框架还有什么替代方案。

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">先决条件：</th>
   <td>熟悉 <a href="/zh-CN/docs/Learn/HTML">HTML</a>, <a href="/zh-CN/docs/Learn/CSS">CSS</a>, 以及 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言的核心。</td>
  </tr>
  <tr>
   <th scope="row">目标：</th>
   <td>了解客户端 JavaScript 框架是如何存在的，它们能解决什么问题，还有哪些替代方案，以及如何选择一个框架。</td>
  </tr>
 </tbody>
</table>

## 简史

当 JavaScript 在 1996 发布以后，它给 web 增加了少许的交互性和乐趣，在那个时候，网页仍由静态文档组成。web 应该不仅仅是阅读的地方，更是创造的地方。JavaScript 变得越来越流行。使用 JavaScript 的开发者们创造工具来解决他们遇到的问题，并且将其打包成称为**库**的可复用组件，这样就能和他人共享解决方案。这种共享库的体系帮助塑造了 web 的增长。

现在，JavaScript 是 web 的一部分，[95% 的网页都在使用](https://w3techs.com/technologies/details/cp-javascript)，而且 web 又是现代生活的一部分。用户在 web 上写文章，管理预算，听音乐，看电影，以及和相隔万里的人通过文字，音频，视频聊天来实时交流。web 让我们能够做到那些过去只能在电脑上安装本地应用程序才能做到的事。这些现代的，复杂的，具有交互性的网站通常被称为 **web 应用程序**。

现代 JavaScript 框架的到来加快了打造高度动态化和交互性强的应用程序的速度。**框架**就是提供该如何构建应用程序的意见的库。这些意见能使应用具有可预测性和同质性。可预测性让软件能在扩展到很大规模的同时仍保持可维护性。可预测性和可维护性对于一个软件的长久健康运行是十分重要的。

在现代 web 中，JavaScript 框架为众多令人印象深刻的软件提供支持——包括许多你可能每天都使用的网站。你正在阅读的这个 MDN Web 文档页面，就是使用 React / ReactDOM 框架驱动前端的。

## 有哪些框架？

有很多框架可供你选择，但以下主要介绍目前公认的“四大框架”。

### Ember

[Ember](https://emberjs.com/) 于 2011 年 12 月发布，最初作为 [SproutCore](https://en.wikipedia.org/wiki/SproutCore) 项目的延续而开始。比其新式的替代品（例如 React 和 Vue），作为老框架，它的用户人数要少得多。但因其稳定性、社区支持以及编程原则都非常良好，它仍然享有很高的知名度。

[开始学习 Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)

### Angular

[Angular](https://angular.io) 是一个开源 Web 应用程序框架，正式发布于 2016 年 9 月 14 日。它由构建 [AngularJS](https://angularjs.org/) 的团队完全重写，并由 Google 的 Angular 团队社区共同领导。

Angular 是一种基于组件的框架，使用声明式的 HTML 模板。在应用构建时，框架的编译器将 HTML 模板转换为优化好的 JavaScript 指令，这一过程对开发者是透明的。Angular 使用 TypeScript，它是 JavaScript 的超集，我们将在下一章中对其进行更多介绍。

[开始学习 Angular](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)

### Vue

在学习了 [AngularJS](https://angularjs.org/) 的源码之后，Evan You（尤雨溪）在 2014 年第一次发布 [Vue](https://vuejs.org/) 。Vue 是“四大框架”中最年轻的，但在最近，它的人气迅速上升。

Vue，就像 [AngularJS](https://angularjs.org/)，用它自己的代码拓展了 HTML。除此之外，它还主要依赖于现代的、标准化的 JavaScript。

[开始学习 Vue](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)

### React

Facebook 在 2013 年发布了 React。在当时 React 已经被用于 Facebook 内部用来解决许多问题。严格来说 React 本身并不是框架，而是一个用来渲染用户界面组件的库。React 被用来组合*其他*用来构建应用的库——React 和 [React Native](https://reactnative.dev/) 让开发者能够用 JavaScript 构建移动应用；React 和 [ReactDOM](https://reactjs.org/docs/react-dom.html) 使他们能够被用来制作 web 应用程序等。

因为 React 和 ReactDOM 被经常放在一起使用，通俗地讲，React 可以被理解为是一个 JavaScript 框架。当你通读了这个模块时，我们将使用这种口语化的理解进行描述。

React 用类似 HTML 的语法的 [JSX](https://reactjs.org/docs/introducing-jsx.html) 拓展了 JavaScript。

[开始学习 React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## 框架为何会存在？

我们已经讨论了因为什么契机而创造了框架，但我们仍不知道为什么开发者认为有必要创造它。要知道这个问题的答案，我们首先需要来看一看软件开发中的各种挑战。

设想一个很常见的软件：一个待办事项清单创建器，在接下来的章节中我们会使用各种框架来实现它。这个应用应让用户可以完成诸如呈现任务列表、添加和删除任务等操作，且在完成这些操作的同时能可靠地跟踪和更新应用程序的底层数据。在软件开发中，这种底层数据被称为状态（state）。

上述每个目标理论上都很简单。我们可以遍历数据来列出清单，添加一个对象来创建新任务，使用标识符来查找、编辑和删除任务。需要注意的是，用户都是在浏览器中使用应用的这些功能，然而这就引出了一些问题： **每当我们修改应用的数据时，我们都需要更新用户界面以使其匹配。**

我们可以通过待办事项清单应用的一个功能来展现这个问题的难点：呈现任务清单。

## 冗长的 DOM 操作

构建 HTML 元素并适时在浏览器中呈现它们需要大量的 JavaScript 代码。假设我们的状态——底层数据，是一个结构如下的对象数组：

```js
const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];
```

如何向用户展示其中一个任务？我们想将每个任务表示为一个列表项——无序列表元素（[`<ul>`](/zh-CN/docs/Web/HTML/Element/ul)）中的一个 HTML [`<li>`](/zh-CN/docs/Web/HTML/Element/li) 元素。我们该如何实现？可以像下面这样：

```js
function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");
  const textContent = document.createTextNode(name);

  span.appendChild(textContent);

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}
```

在这里，我们使用 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement) 方法来创建我们的 `<li>` 元素，以及另外几行代码来创建它需要的属性和子元素。

该代码片段的第十行引用了另一个构建函数：`buildDeleteButtonEl()`。它遵循与我们用来构建列表项元素时类似的模式：

```js
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  const textContent = document.createTextNode("Delete");

  button.setAttribute("type", "button");
  button.appendChild(textContent);

  return button;
}
```

这个按钮只有当我们决定实现删除功能时，才会生效。要在页面上渲染我们的列表项，代码看起来可能是这样的：

```js
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}
```

我们现在已经有超过 30 行*仅*服务于用户界面的代码——*只*作用于在 DOM 中渲染某些内容的步骤——并且我们还没有为列表添加样式呢！

如本例所示，直接使用 DOM，我们需要了解有关 DOM 工作原理的许多内容：如何创建元素；如何改变它们的属性；如何将元素放在一起；如何让它们出现在页面上。这些代码实际上都没有处理用户交互，或添加删除之类任务。如果我们添加这些功能，我们必须记得在正确的时间以正确的方式更新我们的用户界面。

JavaScript 框架的出现是为了使这些工作变得更容易——它们的存在是为了提供更好的*开发体验*。它们没有给 JavaScript 带来新的功能；但它们使你可以更轻松地使用 JavaScript 来构建现代的 web。

如果你想查看本节中的代码示例，可以查看 [CodePen 上该应用的可用版本](https://codepen.io/dengeist/pen/XWbPNmw), 该版本还允许用户添加和删除新任务。

有关本节中使用的 JavaScript 的更多信息：

- [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)
- [`document.createTextNode()`](/zh-CN/docs/Web/API/Document/createTextNode)
- [`document.createDocumentFragment()`](/zh-CN/docs/Web/API/Document/createDocumentFragment)
- [`eventTarget.addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener)
- [`node.appendChild()`](/zh-CN/docs/Web/API/Node/appendChild)
- [`node.removeChild()`](/zh-CN/docs/Web/API/Node/removeChild)

## 另一种打造用户界面的方式

JavaScript 框架都提供了一种更具以*声明性*的方式地编写用户界面的方法。也就是说，它们允许你编写描述用户界面的代码，然后框架将你编写的描述用户界面的代码通过在幕后的 DOM 显现出来。

原生 JavaScript 使用循环来构建新 DOM 元素的方法乍一看很难理解。相对地，让我们看一看使用 Vue 来呈现任务清单的方式：

```html
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    <span>\{{task.name\}}</span>
    <button type="button">Delete</button>
  </li>
</ul>
```

你没看错。以上用了 JavaScript 框架的代码用了 6 行就实现了刚刚需要 32 行代码才能实现的功能。如果你对这里的大括号和 `v-` 属性不熟悉，没关系；你会在后面的模块中学习到 Vue 特有的语法。这里要指出的是，这段 Vue 代码看起来很像它所代表的用户界面，而原生 JavaScript 代码则不然。

幸亏有了 Vue，让我们不必编写自己的函数来构建用户界面；我们仅仅需要向 Vue 描述每个项目应该是什么样子，然后 Vue 会以很好的、高效的方式帮我们处理好。因此熟悉 Vue 的开发者可以轻松的加入我们的项目，快速地搞清楚项目是如何运作的。不仅仅是 Vue：使用其他框架也可以提高团队和个人的效率。

其实在原生 JavaScript 中也可以做*与此类似*的事情。[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)使得编写表示最终元素外观的 HTML 字符串变得容易起来。对于像创建上文示例的待办事项清单那样简单的应用来说，这可能是一种有用的方法，但它对于管理数千条数据记录，且可以在用户界面上渲染许多独特元素的大型应用程序来说，是难以维护的。

## 框架提供给我们的其他功能

让我们看看使用框架还有哪些好处。正如我们之前提到的，虽然框架的优秀特性在原生 JavaScript 中也可以类似地实现，但是使用框架可以消除必须自己解决这些问题的认知负担。

### 工具

由于此模块中的每个框架都有一个庞大而活跃的社区，因此每个框架的体系都提供了工具来改善开发体验。这些工具让诸如添加测试（确保你的应用表现应有的行为）和 linting（确保你的代码没有错误且排版统一）变得更加容易。

> **备注：** 如果你想了解有关 Web 工具概念的更多详细信息，请阅读[客户端工具概述](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)。

### 组件化

大多数框架都鼓励开发者将其用户界面的不同部分抽象为*组件（components）*——可维护、可重用且可以相互通信的代码块。与给定组件相关的所有代码都可以存在于一个文件（或几个特定文件）中，因此身为开发者的你就可以轻松地知道去哪里修改目标组件。在原生 JavaScript 中，你就必须花时间创建自己的一套高效、可扩展的编码约定来实现这一点。如果让许多 JavaScript 开发者使用他们自己的设备，最终可能会导致与用户界面某个部分相关的所有代码分布在一个文件中——或者完全分布在另一个文件中。

### 路由

Web 最重要的特点是它允许用户从一个页面导航到另一个页面——毕竟，它是一个相互链接的文档网络。当你点击网站上的链接时，你的浏览器会与目标服务器通信，获取新内容后将其显示给你。当浏览器这样做时，地址栏中的 URL 会发生变化。你可以记下来这个新 URL 并稍后返回该页面——或者把这个 URL 分享给其他人，以便他们轻松找到相同的页面。你的浏览器会记住你的导航历史记录，并允许你来回导航（译者注：其实就是浏览器的前进后退功能）。这被称作**服务端路由**。

现代 Web 应用程序通常不会获取和渲染新的 HTML 文件——它们加载单个 HTML shell，并不断更新其中的 DOM 而无需将用户导航到 Web 上的新地址。(这被称为**单页应用程序（single page app）** 或 **SPA**)。每个新的伪网页通常称为一个 _view_，且在默认情况下，不会做任何路由。

当 SPA 足够复杂并呈现足够多的独特视图时，将路由功能引入你的应用程序非常重要。人们习惯于能够链接到应用程序中的特定页面，在他们的浏览器中前进和后退等等，当这些标准的 Web 功能被破坏时，他们的体验会受到影响。当客户端应用程序以这种方式处理路由时，它被恰当地称为**客户端路由**。

_可以使用_ JavaScript 和浏览器的原生功能来实现路由功能，但是流行的、活跃开发的框架具有配套库，使路由功能在开发过程中更直观。

## 使用框架的注意事项

作为一名高效的 web 开发者，意味着使用最合适的工具来完成工作。JavaScript 框架使前端应用开发变得容易，但它们并不是解决所有问题的灵丹妙药。本节讨论在使用框架时你应该考虑的一些事项。请记住，你也许根本不需要框架——要注意不要为了使用框架而使用框架。

### 熟悉工具

就像原生 JavaScript 一样，框架需要时间来学习，也有它们自己的特性。在你决定为项目使用框架之前，确保你有足够的时间学习它的特性，使它发挥功效，而不是阻碍你，并确保你的团队成员也对它满意。

### 过度工程化

如果你的 web 开发项目是一个只有几个页面的个人作品集，并且这些页面几乎没有交互功能，那么可能根本不需要框架（及其所有的 JavaScript）。也就是说，框架并不是完全统一的，其中一些框架比其他框架更适合于小型项目。Sarah Drasner 在 Smashing 杂志的一篇文章中写道：作为一种使网页的一小部分具有交互性的工具 [Vue 是如何取代 jQuery 的](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/) 。

### 大型代码库与抽象

通过在幕后处理 DOM 交互，框架允许你编写更多的声明式代码，有时总体上可以编写*更少*的代码。这种抽象对于你作为开发者的体验非常好，但它也是有代价的。为了将你编写的内容转换为 DOM 的变更，框架必须运行自己的代码，这反过来又会使你最终的软件变得更大，并且花费更高的运行成本。

一些额外的代码是必不可少的，且一个支持 tree-shaking 的框架（在构建过程中删除应用程序实际未使用的代码）将使你保持应用程序的小型化；但这些额外的代码仍然是你在考虑应用程序性能时需要记住的一个因素，尤其是在网络或存储限制更严格的设备上，比如手机。

框架的抽象不仅影响 JavaScript，还影响你与 web 的关系。无论你如何构建 web，最终，用户都是与 HTML 交互。用 JavaScript 编写整个应用可能会使你忽略 HTML 及其各种标签的用途，并导致产出一个无语义且难以使用的 HTML 文档。实际上，完全依赖 JavaScript 有可能写出脆弱的应用，且没有 JavaScript 就无法运行。

框架不是问题的根源。错误的优先级可能使得*任何*应用变得脆弱、臃肿和难以使用。框架对开发者很友好，如果你的首要任务是制作一个复杂的 web 应用程序，那么很容易做到。然而，如果你没有考虑性能和无障碍，那么框架将放大这种脆弱、臃肿和难以使用。现代开发者的这种重心放在了框架上，已经在许多地方颠倒了 web 的结构。现代 web 通常把 JavaScript 放在首位，用户体验放在最后，而不是一个健壮的、内容优先的文档网络。

## 框架驱动页面的无障碍

让我们在上一节中所说的基础上继续，并更多地谈谈无障碍。使用户界面无障碍总是需要一些思考和努力，而框架可能会使这个过程复杂化。你通常必须使用高级框架 API 来访问本地浏览器的功能，如 ARIA [live regions](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 或专注于对它们的管理。

在某些情况下，框架应用程序会造成传统网站不存在的无障碍问题。这方面的典型例子是前面提到的客户端路由。

使用传统的（服务器端）路由，导航 Web 具有可预测的结果。浏览器知道将焦点设置到页面顶部，辅助技术将宣读页面的标题。每次导航到新页面时，这些事情都会发生。

使用客户端路由，你的浏览器不会加载新的网页，因此它不知道它应该自动调整焦点还是宣读新的页面标题。框架作者投入了大量的时间和精力来编写 JavaScript 来重新创建这些特性，即使这样，也没有一个框架能做到非常完美。

结果是，你应该从*每个* Web 项目的一开始就考虑无障碍，但请记住，如果你不这样做，使用框架的抽象代码库更有可能遇到的无障碍问题。

## 如何选择一个框架

本模块中讨论的每个框架都采用不同的 Web 应用程序开发方法。每一个都在定期改进或变化，各有利弊。选择合适的框架是一个依赖于团队和项目的过程，你应该自己做研究，发现什么适合你的需求。尽管如此，我们确定了你可能需要考虑的几个问题，以便更有效地研究你的选择：

1. 框架支持哪些浏览器？
2. 框架使用哪些领域特定语言？
3. 该框架是否有强大的社区和良好的文档（和其他支持）可用？

本节中的表提供了每个框架提供的浏览器支持以及它的 **DSL 语言** 的简要描述。
广义上，领域专用语言（**DSL**）是与软件开发的特定领域相关的编程语言。在框架的环境中，DSL 是 JavaScript 或 HTML 的变体，使让使用该框架开发变得更容易。至关重要的是，没有一个框架要求开发者使用特定的 DSL，但它们几乎都是在设计时考虑特定的 DSL。选择不使用框架首选的 DSL 将意味着你错过了改善开发者体验的功能。

在为任何新项目做出选择时，你应该认真考虑框架的模型和 DSL。不匹配的浏览器支持可能会成为用户的障碍；不匹配的 DSL 支持可能会成为你和你的团队成员的障碍。

| 框架    | 浏览器支持                                 | DSL 偏好   | 支持的 DSL             |
| ------- | ------------------------------------------ | ---------- | ---------------------- |
| Angular | IE9+                                       | TypeScript | 基于 HTML、TypeScript  |
| React   | 现代的浏览器（IE9+ with Polyfills）        | JSX        | JSX、TypeScript        |
| Vue     | IE9+                                       | 基于 HTML  | 基于 HTML、JSX、Pug    |
| Ember   | 现代的浏览器（IE9+ in Ember version 2.18） | Handlebars | Handlebars、TypeScript |

> **备注：** 我们描述为“基于 HTML”的 DSL 没有官方名称。它们并不是真正的 DSL，但它们是非标准的 HTML，所以我们认为它们值得强调。

参考来源：

- [React 浏览器支持：官方文档](https://reactjs.org/docs/react-dom.html#browser-support)
- [Ember 浏览器支持：Ember 3.0 发布](https://blog.emberjs.com/2018/02/14/ember-3-0-released.html)
- [Ember 模板语言（官方文档）](https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/)

### 框架是否有强大的社区？

这也许是最难衡量的指标，因为社区规模与易于看见的数字并不直接相关。你可以查看一个项目的 GitHub star 数或每周 npm 下载量，以了解它的受欢迎程度，但有时最好的做法是搜索一些论坛或与其他开发者交谈。这不仅仅是社区的规模，还包括社区的欢迎和包容性，以及文档的好坏。

### 在互联网上的意见

不要只关注我们在这件事上的话——网上到处都有讨论。维基媒体基金会最近选择使用 Vue 作为其前端，并发布了关于框架采用方面的 [RFC](https://phabricator.wikimedia.org/T241180)。RFC 的作者 Eric Gardner 概述了维基媒体项目的需求，以及为什么这个框架是团队不错选择。这个 RFC 是一个很好的例子，说明在计划使用前端框架时，你应该做一点调查和研究。

[JavaScript 状况调查](https://stateofjs.com/)包含了来自 JavaScript 开发者的有效反馈。它涵盖了许多与 JavaScript 相关的主题，包括关于框架的使用和开发者对框架的好恶的数据。目前，好几年的数据可以让你感受到一个框架的受欢迎程度。
Vue 团队[详尽地将 Vue 与其他流行框架进行了比较](https://vuejs.org/v2/guide/comparison.html)。在这种比较中可能有一些偏见（他们注意到了这一点），但尽管如此，它还是一个宝贵的资源。

## 客户端框架的替代方案

如果你正在寻找工具来加快 Web 开发过程，并且你知道你的项目不需要很多客户端 JavaScript，你可以寻求其他几种构建 Web 的解决方案：

- 内容管理系统
- 服务端渲染
- 静态站点生成器

### 内容管理系统

**内容管理系统**（**CMS**）是任何允许用户在不直接编写代码的情况下创建网页内容的工具。对于大型项目来说，它们是一种很好的解决方案，尤其是那些需要由编码能力有限的内容编写者来编写的项目，或者希望节省时间的程序员。然而，它们确实需要大量的时间来设置，使用 CMS 意味着你至少放弃了对网站最终输出的一些控制。例如：如果你选择的 CMS 默认不编写无障碍的内容，通常很难改进这一点。

受欢迎的 CMS 的一些例子：[Wordpress](https://wordpress.com/)、[Joomla](https://www.joomla.org/) 和 [Drupal](https://www.drupal.org/)。

### 服务端渲染

**服务端渲染**（**SSR**）是一种应用程序体系结构，在该体系结构中，呈现单页应用程序是服务器的工作。这与客户端渲染相反，服务端渲染是构建 JavaScript 应用程序最常见、最直接的方式。服务端渲染对于客户端的设备压力更小，因为你只发送渲染过的 HTML 文件，但它比客户端渲染更加难以构建。

本模块中介绍的所有框架都支持服务端渲染和客户端渲染。给 React 的 [Next.js](https://nextjs.org/)，给 Vue 的 [Nuxt.js](https://nuxtjs.org/)（是的，这很令人困惑，它们没有关系），给 Ember 的 [FastBoot](https://github.com/ember-fastboot/ember-cli-fastboot) 还有给 Angular 的 [Angular Universal](https://angular.io/guide/universal) 。

> **备注：** 有些 SSR 解决方案是由社区编写和维护的，而有些是由框架的维护者提供的“官方”解决方案。

### 静态站点生成器

静态网站生成器是动态生成多页面网站的所有网页的程序——包括任何相关的 CSS 或 JavaScript——这样它们就可以在任何地方发布。发布主机可以是一个 GitHub Page，一个 Netlify 实例，或者任何你选择的私有服务器。这种方法有很多优点，主要是在性能方面（用户的设备不使用 JavaScript 构建页面，它已经完成了）和安全性（对静态页面的攻击更少）。这些网站仍然可以使用 JavaScript，它们需要它，但并不依赖于它。静态网站生成器需要时间来学习，就像任何其他工具，它可能是你开发过程中的障碍。

静态网站可以可以生成你想要独特的页面。正如框架使你能够快速编写客户端 JavaScript 应用程序一样，静态站点生成器使你能够快速创建本来需要单独编写的 HTML 文件。与框架一样，静态站点生成器允许开发者编写定义网页公共部分的组件，并将这些组件组合在一起创建最终页面。在静态站点生成器的相关术语中，这些组件称为**模板**。由静态站点生成器构建的 Web 页面甚至可以成为框架应用程序的主页：例如，如果你想让静态生成的网站的一个特定页面在用户访问 React 应用程序时启动它，你可以这样做。

静态网站生成器已经存在了相当长的时间，它们在 web 近来的历史上看到了一线生机。现在有一些非常好的选择，例如 [Hugo](https://gohugo.io/)、[Jekyll](https://jekyllrb.com/), [Eleventy](https://www.11ty.dev/) 和 [Gatsby](https://www.gatsbyjs.org/)。

如果你想了解更多关于静态网站生成器的信息，去看一看 Tatiana Mac 的 [Eleventy 新手指南](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/)。在该系列的第一篇文章中，她解释了什么是静态网站生成器，以及它如何与发布 Web 内容的其他方法联系起来。

## 总结

我们对框架的介绍到此结束——我们还没有教给你任何代码，但希望我们已经给你一个有用的背景，说明为什么要使用框架，以及如何选择框架，让你兴奋地了解更多信息，并参与进来！

我们的下一篇文章将深入到较低的层次，看看框架倾向于提供的特定类型的功能，以及它们的工作原理。

{{NextMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
