---
title: 客户端工具概述
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Overview
---

{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

在本文中，我们提供了现代 web 工具的概述，有哪些工具可用，在 web 应用程序开发的生命周期中你将在哪里遇到它们，以及如何使用各个工具寻求帮助。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>熟悉核心 HTML，CSS 和 JavaScript 语言。</td>
    </tr>
    <tr>
      <th scope="row">目标</th>
      <td>
        <p>
          了解有什么类型的客户端工具，以及如何找到工具并获得这些工具的帮助。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 现代工具概述

随着时间的推移，为网络编写软件已经变得越来越复杂。尽管“手工”编写 HTML、CSS 和 JavaScript 仍然是完全合理的，但现在有大量的工具可供开发人员使用，以加快构建 web 站点或应用程序的过程。

有一些非常完善的工具已经成为开发社区中常见的“家喻户晓的名字”，并且每天都在编写和发布新的工具来解决特定的问题。你甚至可能发现自己正在编写一个软件来帮助你自己的开发过程，以解决现有工具似乎无法处理的特定问题。

单个项目中包含的大量工具很容易让人不知所措。同样，像 Webpack 这样的工具的一个配置文件可能有数百行之长，其中大多数都是神奇的咒语，似乎可以完成工作，但只有大神级工程师才能完全理解

有时，即使是最有经验的 web 开发人员也会因为工具问题而陷入困境;甚至在接触到一行应用程序代码之前，都可能浪费数小时来尝试让工具管道工作。如果你发现自己在过去挣扎，那么用担心，你并不孤独。

在这篇文章中，我们将不会回答所有关于 web 工具的所有问题，但我们将为你提供一个了解基本原理的有用起点，你可以从中构建。对于任何复杂的主题，最好从小处开始，然后逐步进行更高级的使用。

## 现代工具系统

当今的现代开发人员工具生态系统非常庞大，因此对这些工具正在解决的主要问题有一个大致的概念是非常有用的。如果你跳到你最喜欢的搜索引擎上，搜索“前端开发工具”，你会得到一系列的结果，从文本编辑器到浏览器，再到你可以用来做笔记的笔。

虽然你选择的代码编辑器肯定是一种工具选择，但本系列文章将不止于此，重点关注帮助你更有效地生成 web 代码的开发人员工具。

从高层次来看，你可以将客户端工具放入以下三大类需要解决的问题中：

- **安全网络** — 在代码开发期间有用的工具。
- **转换** — 以某种方式转换代码的工具，例如将一种中间语言转换为浏览器可以理解的 JavaScript。
- **开发后阶段** — 编写完代码后有用的工具，如测试和部署工具。

让我们更详细地看看每一个。

### 安全网络

这些工具可以使你编写的代码更好一些。

这一部分的工具应该特定于你自己的开发环境，尽管对于公司来说，有某种策略或可用于安装的预备配置，以便所有开发人员都使用相同的流程的情况并不少见。

这包括使你的开发过程更容易生成稳定可靠的代码的任何内容。安全网络工具还应该帮助你避免错误或自动纠正错误，而不必每次都从头开始构建代码。

你将发现开发人员正在使用的一些非常常见的安全网络工具类型如下。

#### Linter

**Linter** 是检查你的代码并告诉你存在任何错误的工具，它们是什么类型的错误，以及它们出现在哪些代码行上。通常，linters 不仅可以被配置为报告错误，还可以报告任何违反你的团队可能正在使用的指定样式指南的行为 (例如代码使用了错误的缩进空格数，或者使用了[template literals](/zh-CN/docs/Web/JavaScript/Reference/Template_literals) 而不是常规的字符串文本)。

[eslint](https://eslint.org/) 业界标准的 JavaScript linter 是一种高度可配置的工具，用于捕获潜在的语法错误，并在代码中鼓励“最佳实践”。一些公司和项目也是这样 [shared their eslint configs](https://www.npmjs.com/search?q=keywords:eslintconfig)。

你还可以找到用于其他语言的 linting 工具，比如[csslint](http://csslint.net/)。

同样值得一看的是 [webhint](https://webhint.io/), 一个可配置的，开放源码的网页链接，展示了最佳实践，包括无障碍，性能，跨浏览器兼容性 [MDN's browser compatibility data](https://github.com/mdn/browser-compat-data), 安全，PWAs 测试等等。它可以作为 [Node.js command-line tool](https://webhint.io/docs/user-guide/) 和 [VS Code extension](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint).

#### 源代码控制

也称为版本控制系统（VCS），源代码控制对于备份工作和在团队中工作至关重要。典型的 VCS 包括拥有你要对其进行更改的代码的本地版本。然后将更改“推”到存储在某个服务器上的远程存储库中的代码的“主”版本。通常有一种方法来控制和协调对代码的“主”副本做了什么更改，以及什么时候做更改，这样开发团队就不会一直覆盖彼此的工作。

[Git](https://git-scm.com/) 是现在大多数人使用的源代码控制系统。它主要通过命令行访问，但也可以通过友好的用户界面访问。使用 git 存储库中的代码，你可以将其推到自己的服务器实例中，或者使用托管的源代码控制网站，如[GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), or [BitBucket](https://bitbucket.org/product/features).

我们将在这个模块中使用 GitHub。你可以在网站上找到更多关于它的信息[Git and GitHub](/zh-CN/docs/Learn/Tools_and_testing/GitHub).

#### 代码格式化

代码格式化程序与 linters 有些关联，除了它们不是指出代码中的错误，而是根据你的样式规则，确保你的代码被正确格式化，理想情况下自动修复它们发现的错误。

[Prettier](https://prettier.io/) 是一个非常流行的代码格式化程序示例，稍后我们将在模块中使用它。

#### 打包工具

这些工具让你的代码准备生产，例如，通过 tree-shaking 来确保只有实际使用的代码库的部分被放到最终的生产代码中，或“缩减”删除所有空格在生产代码中，使其尽可能小之前上传到服务器。

[Parcel](https://parceljs.org/) 是一个特别好用的工具，都属于这个类别可以完成上面的任务，但也有助于资产包像 HTML, CSS 和图像文件方便的包，你可以继续部署，也为你自动添加依赖项当你试着使用它们。它甚至可以为你处理一些代码转换任务。

[Webpack](https://webpack.js.org/) 是一个非常流行的代码格式化程序示例，稍后我们将在模块中使用它。

### 转换

web 应用程序生命周期的这个阶段通常允许你编写“未来代码”(比如最新的 CSS 或 JavaScript 特性，这些特性可能还没有得到浏览器的本地支持)，或者完全使用另一种语言编写代码，比如 [TypeScript](https://www.typescriptlang.org/)。转换工具将为你生成与浏览器兼容的代码，以用于生产。

通常 web 开发被认为是三种语言：[HTML](/zh-CN/docs/Learn/HTML)、[CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript)，所有这些语言都有转换工具。转换提供了两个主要好处（还有其他好处）

1. 能够使用最新的语言特性编写代码，并将其转换为可在日常设备上使用的代码。例如，你可能希望使用尖端的新语言特性来编 JavaScript，但是你的最终产品代码仍然可以在不支持这些特性的旧浏览器上工作。例如：

   - [Babel](https://babeljs.io/):一个 JavaScript 编译器，允许开发人员使用最前沿的 JavaScript 编写代码，然后 Babel 将其转换为老式的 JavaScript，让更多的浏览器能够理解。开发人员也可以编写和发布[plugins for Babel](https://babeljs.io/docs/en/plugins).
   - [PostCSS](https://postcss.org/):和 Babel 做同样的事情，但是有先进的 CSS 特性。如果没有相同的方法使用旧的 CSS 特性来做一些事情，PostCSS 将安装一个 JavaScript 填充来模拟你想要的 CSS 效果。

2. 选择用一种完全不同的语言编写代码，并将其转换为与 web 兼容的语言。例如：

   - [Sass/SCSS](https://sass-lang.com/)：这个 CSS 扩展允许你使用变量、嵌套规则、混合、函数和许多其他特性，其中一些特性在本地 CSS 中是可用的 (比如变量)，而另一些则不是。
   - [TypeScript](https://www.typescriptlang.org/)：TypeScript 是 JavaScript 的一个超集，它提供了一堆额外的特性。TypeScript 编译器在生成产品时将 TypeScript 代码转换为 JavaScript。
   - 框架例如 [React](https://reactjs.org/)、[Ember](https://emberjs.com/) 和 [Vue](https://vuejs.org/)：框架提供了许多免费的功能，并允许你通过构建在普通 JavaScript 之上的自定义语法来使用它们。在后台，框架的 JavaScript 代码努力解释这个定制语法，并将其呈现为最终的 web 应用程序。

### 开发后阶段

开发后阶段工具可以确保你的软件能够访问 web 并继续运行。这包括部署流程、测试框架、审计工具等等。

在开发过程的这个阶段，你希望与之进行最少的主动交互，这样，一旦配置完毕，它基本上是自动运行的，只有在出现错误时才弹出窗口打招呼。

#### 测试工具

它们通常采用一种工具的形式，该工具将自动对你的代码运行测试，以确保在进行进一步操作之前它是正确的 (例如，当你试图将更改推送到 GitHub repo 时)。这可能包括 linting，但也包括更复杂的过程，如单元测试，在这里运行部分代码，以确保它们按照应有的方式运行。

- 框架包括编写测试 [Jest](https://jestjs.io/)、[Mocha](https://mochajs.org/) 和 [Jasmine](https://jasmine.github.io/).
- 自动测试运行和通知系统包括 [Travis CI](https://travis-ci.org/)、[Jenkins](https://jenkins.io/)、[Circle CI](https://circleci.com/) 及[其他系统](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration)。

#### 配置工具

配置系统允许你发布网站，可用于静态和动态站点，通常与测试系统一起工作。例如，典型的工具链会等待你将更改推送到远程回购，运行一些测试以查看更改是否正确，然后如果测试通过，则自动将你的应用程序部署到生产站点。

[Netlify](https://netlify.com) 是目前最流行的部署工具之一，但其他包括 [Vercel](https://vercel.com/) 和 [Github Pages](https://pages.github.com/)。

#### 其他的

在开发后期阶段，还有许多其他可用的工具类型，包括 [Code Climate](https://codeclimate.com/) 对于收集代码质量度量，[webhint browser extension](https://webhint.io/docs/user-guide/extensions/extension-browser/) 用于执行跨浏览器兼容性的运行时分析和其他检查，[Github bots](https://probot.github.io/) 提供更强大的 GitHub 功能，[Updown](https://updown.io/) 提供应用程序运行时间监控等等。

### 工具种类的想法

在开发生命周期中应用不同的工具类型当然是有顺序的，但请放心，你不必在发布一个网站时将所有这些工具都准备就绪。事实上，你不需要这些。然而，在你的过程中包括这些工具将改善你自己的开发体验，并可能提高代码的总体质量。

新的开发人员工具通常需要一段时间才能适应其复杂性。Webpack 是最著名的工具之一，它以使用起来过于复杂而著称，但是在最新的主要版本中，它大力简化了常用的用法，因此所需的配置被减少到绝对最小。

绝对没有银弹可以保证工具的成功，但是随着你经验的增加，你会发现适合你或者你的团队和他们的项目的工作流程。一旦过程中所有的扭结被平展，你的工具链应该是你可以忘记的东西，它应该只是工作。

## 如何选择并寻求特殊工具的帮助

大多数工具往往是独立编写和发布的，因此，尽管几乎可以肯定有可用的帮助，但它们的位置或格式永远不会相同。因此，很难找到使用工具的帮助，甚至很难选择使用什么工具。关于哪些是最好的工具的知识是有点部落式的，这意味着如果你还没有进入 web 社区，就很难确定到底应该使用哪些工具！这是我们编写本系列文章的原因之一，希望能够提供其他方法难以找到的第一步。

你可能需要以下内容的组合

- 有经验的老师、导师、同学或有一定经验的同事以前解决过这类问题，并能提出建议。
- 一个有用的特定地方搜索。对前端开发人员工具的一般 web 搜索通常是无用的，除非你已经知道你正在搜索的工具的名称。

  - 例如，如果你正在使用 npm 包管理器来管理依赖项，那么转到[npm homepage](https://www.npmjs.com/) 并搜索你正在寻找的工具的类型，例如，如果你想要日期格式化实用程序，请尝试搜索“date”，如果你想要搜索通用代码格式化程序，则尝试搜索“formatter”。请注意流行度、质量和维护分数，以及软件包最近更新的时间。还可以点击工具页面，了解每个包每月有多少下载，以及它是否有好的文档，可以用来了解它是否完成了你需要它做的事情。以这些标准为基础[date-fns library](https://www.npmjs.com/package/date-fns) 看起来是一个很好的日期格式化工具。在本模块的第 3 章中，你将看到这个工具的实际应用，并了解更多关于包管理器的信息。
  - 如果你正在寻找将工具功能集成到代码编辑器中的插件，请查看代码编辑器的“插件/扩展名”页面 - 请参阅 [Atom packages](https://atom.io/packages) and [VSCode extensions](https://marketplace.visualstudio.com/VSCode),为例。看一看首页上的特色扩展，然后再次尝试搜索你想要的扩展类型 (或者工具名称，例如在 VSCode 扩展页面上搜索“eslint”)。当你得到结果的时候，看看这个扩展有多少颗星或者下载了多少，作为它质量的一个指标。

- 与开发相关的论坛，询问关于使用什么工具的问题，例如 [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn) 或 [Stack Overflow](https://stackoverflow.com/)。

当你选择要使用的工具时，第一个端口应该是工具项目主页。这可能是一个完整的网站，也可能是代码库中的一个 readme 文档。例如 [date-fns docs](https://date-fns.org/docs/Getting-Started)就很好、很完整、很容易理解。然而，有些文档可能相当技术性和学术性，并不适合你的学习需求。

相反，你可能希望找到一些关于如何开始使用特定类型的工具的专门教程。好的起点在诸如 [CSS Tricks](https://css-tricks.com/)、[Dev](https://dev.to/)、[freeCodeCamp](https://www.freecodecamp.org/) 和 [Smashing Magazine](https://www.smashingmagazine.com/) 等网站中进行搜索，因为它们是为 web 开发行业量身定做的。

同样，在搜索适合自己的工具时，你可能会使用几种不同的工具，试用它们，看看它们是否有意义，是否得到良好的支持，并执行你希望它们执行的任务。这很好，这对学习很有好处，而且随着你获得更多经验，道路会变得更平坦。

## 总结

以上是我们对客户端 web 工具主题的简要介绍的最后一部分。接下来，我们将为你提供一个关于命令行的速成课程，许多工具都是从命令行调用的。我们将看一看命令行可以做什么，然后尝试安装和使用我们的第一个工具。

{{NextMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
