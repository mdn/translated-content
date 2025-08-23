---
title: 开始使用 Vue
slug: Learn_web_development/Core/Frameworks_libraries/Vue_getting_started
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}

现在让我们介绍 Vue，我们的第三个框架。在本文中，我们将了解一点 Vue 的背景知识，了解如何安装它并创建一个新项目，研究整个项目和单个组件的高级结构，了解如何在本地运行项目，并为开始构建示例做好准备。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>熟悉核心的 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a>
        和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言，了解终端/命令行。</p>
        <p>
          Vue 组件设计成为由管理应用数据的 JavaScript 对象和映射到底层 DOM
          结构的 html 模板语法组成的混合体。安装和使用的一些更高级的功能
          Vue（如单文件组件或渲染函数），你将需要一个安装了 node 和 npm 的终端。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        设置本地 Vue 开发环境，创建一个 starter
        应用程序，并了解它是如何工作的基础知识。
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 本篇教程主要针对于 [Vue 3.4.21 版本](https://github.com/vuejs/core/blob/main/CHANGELOG.md#3421-2024-02-28)并使用 [`create-vue` 3.10.2 版本](https://github.com/vuejs/create-vue/releases/tag/v3.10.3)（使用 Node.js 版本 `v20.11.0`），最近一次修订时间为 2024 年 5 月。

## 一个更简洁的框架——Vue

Vue 是一个现代 JavaScript 框架提供了有用的设施渐进增强——不像许多其他框架，你可以使用 Vue 增强现有的 HTML。这使你可以使用 Vue 作为 [jQuery](https://jquery.com/) 等库的直接替代品。

话虽如此，你也可以使用 Vue 编写完整的单页应用程序（SPA）。这允许你创建完全由 Vue 管理的标记，当处理复杂应用程序时可以提高开发人员的体验和性能。它还允许你在需要时利用用于客户端路由和状态管理的库。此外，Vue 对于客户端路由和状态管理等工具采取了“中间立场”的方法。虽然 Vue 核心团队维护这些功能的建议库，但它们并未直接捆绑到 Vue 中。这允许你选择不同的路由/状态管理库，以使其更适合你的应用程序。

除了允许你逐步将 Vue 集成到你的应用程序中，Vue 还提供了一种渐进的方式编写标记。像大多数框架，Vue 通过组件允许你创建可重用块标记。大多数时候，Vue 组件是使用一个特殊的 HTML 模板的语法写的。当你需要比 HTML 语法允许的更多的控制时，你可以编写 JSX 或纯 JavaScript 函数来定义组件。

在学习本教程的过程中，你可能希望在其他选项卡中打开 [Vue 指南](https://cn.vuejs.org/guide/introduction.html)和 [API 文档](https://cn.vuejs.org/api/)，以便在需要了解任何子主题的更多信息时参考它们。

## 安装 Vue

要在现有站点中使用 Vue，可以通过 [`<script>`](/zh-CN/docs/Web/HTML/Reference/Elements/script) 元素在页面中使用。这使你可以开始在现有站点上使用 Vue，这就是 Vue 引以为傲的渐进式框架的原因。当使用 JQuery 这样的库将现有项目迁移到 Vue 时，这是一个很好的选择。通过这种方法，你可以使用 Vue 的许多核心功能，例如属性、自定义组件和数据管理。

- 开发环境版本（未经优化，但包含了对开发有帮助的控制台警告）

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  ```

- 生产环境版本（经过优化的版本，控制台警告最小化，建议你在站点上包含 Vue 时指定版本号，这样任何框架更新都不会在不知情的情况下破坏实时网站。）

  ```html
  <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
  ```

然而，这种方法有一些局限性。要构建更复杂的应用程序，你需要使用 [Vue NPM 包](https://www.npmjs.com/package/vue)。这将允许你使用 Vue 的高级功能并利用 Vite 或 webpack 等捆绑包。为了让使用 Vue 构建应用程序变得更容易，我们提供了一个 CLI 脚手架工具 [create-vue](https://github.com/vuejs/create-vue)，以简化开发流程。要使用 `create-vue`，你需要：

1. 安装 Node.js 版本 20。
2. 已安装 [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 或 [yarn](https://yarnpkg.com/)。

> [!NOTE]
> 如果你还没有安装上述软件，有关安装 NPM 和 Node.js 的方法[在这里](/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line#添加工具)。

要安装 Vue 并初始化新项目，请在终端运行以下命令：

```bash
npm create vue@latest
```

如果你使用 yarn:

```bash
yarn create vue@latest
```

该命令将为你提供一份可使用的项目配置列表。其中有一些默认设置，但你也可以选择自己的项目特定设置。通过这些选项，你可以配置 TypeScript、linting、vue-router、测试等。我们将在下面的初始化步骤中逐步介绍这些选项。

## 初始化一个新项目

为了探索 Vue 中各种各样的特征，我们将建立一个简单的任务清单应用。首先，我们将使用 `create-vue` 为应用程序构建一个新的脚手架。

在终端，用 `cd` 命令进入你想要创建示例的文件夹，然后执行 `npm create vue@latest`（如果使用 Yarn，则运行 `yarn create vue@latest`）。

交互式工具会让你选择一些选项，然后按下 <kbd>Enter</kbd> 即可。在本项目中，我们将使用以下配置：

```plain
✔ Project name: … todo-vue
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … No
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … Yes
? Add Prettier for code formatting? › Yes
```

选择这些选项后，你的项目结构就配置完成了，依赖项也定义在了 `package.json` 文件中。接下来的步骤是安装依赖项和启动服务器，工具会方便地打印出所需的命令：

```plain
Scaffolding project in /path/to/todo-vue...

Done. Now run:

  cd todo-vue
  npm install
  npm run format
  npm run dev
```

## 项目结构

如果前面的步骤都执行顺利的话，脚手架工具应该已经在你的项目中创建了一系列的文件和目录，我们接下来列举一些比较重要的：

- `package.json`：该文件包含项目的依赖项列表，以及一些元数据和 `eslint` 配置。
- `yarn.lock`：如果你选择 `yarn` 作为你的包管理器，将生成此文件，其中包含项目所需的所有依赖项和子依赖项的列表。
- `jsconfig.json`：这是一份用于 [Visual Studio Code](https://code.visualstudio.com/docs/languages/jsconfig) 的配置文件，它为 VS Code 提供了关于项目结构的上下文信息，并帮助自动完成。
- `vite.config.js`：这是 [Vite](https://vite.dev/) 开发服务器的配置文件，用于在本地计算机上构建和提供项目。Vite 服务器会密切关注源文件的更改，并在进行更改时热启动项目。
- `public`：该目录包含在构建过程中发布的静态资源，
  - `favicon.ico`：这个是项目的图标，当前就是 Vue 的 logo。
- `index.html`：你的 Vue 应用会从这个 HTML 页面运行。
- `src`：这个是 Vue 应用的核心代码目录。
  - `main.js`：这是应用的入口文件。目前它会初始化 Vue 应用并且指定将应用挂载到 `index.html` 文件中的哪个 HTML 元素上。通常还会做一些注册全局组件或者添额外的 Vue 库的操作。
  - `App.vue`：这是 Vue 应用的根节点组件，往下看可以了解更多关注 Vue 组件的信息。
  - `components`：这是用来存放自定义组件的目录，目前里面只有一个示例组件。
  - `assets`：这个目录用来存放像 CSS、图片这种静态资源，但是因为它们属于代码目录下，所以可以用 webpack 来操作和处理。意思就是你可以使用一些像 [Sass/SCSS](https://sass-lang.com/) 或者 [Stylus](https://stylus-lang.com/) 这样的预处理器。

> [!NOTE]
> 根据创建项目时候的一些配置项，可能会有一些其他的预设目录（例如，如果你选择了路由配置，会看到一个 `views` 的文件夹）。

## .vue 文件（单文件组件）

就像很多其他的前端框架一样，组件是构建 Vue 应用中非常重要的一部分。组件可以把一个很大的应用程序拆分为独立创建和管理的不相关区块，然后彼此按需传递数据，这些小的代码块可以方便更容易的理解和测试。

在其他框架都鼓励把模板、逻辑和样式的代码区分成不同文件的时候，Vue 却反其道行之。使用[单文件组件](https://cn.vuejs.org/guide/scaling-up/sfc.html)，Vue 把模板、相关脚本和 CSS 一起整合放在 `.vue` 结尾的一个单文件中。这些文件最终会通过 JS 打包工具（例如 Vite 或 webpack）处理，这意味着你可以使用构建时工具。你可以使用比如 Babel、TypeScript、SCSS 等来创建更多复杂的组件。

另外，使用 Vue CLI 创建的项目被配置为在开箱即用的情况下借助 Webpack 使用 `.vue` 文件。实际上，如果你查看我们使用 CLI 创建的项目中的 `src` 文件夹，你会看到第一个`.vue` 文件：`App.vue`。

让我们查看用 CLI 创建的项目中的 `src` 文件夹，检查第一个 `.vue` 文件：`App.vue`。

### App.vue

打开 `App.vue` 文件，可以看到它由 `<template>`、`<script>` 和 `<style>` 三部分组成，分别包含了组件的模板、脚本和样式相关的内容。所有的单文件组件都是这种类似的基本结构。

`<template>` 包含了所有的标记结构和组件的展示逻辑。template 可以包含任何合法的 HTML，以及一些我们接下来要讲的 Vue 特定的语法。

> [!NOTE]
> 通过设置 `<template>` 标签的 `lang` 属性，例如可以通过设置 `<template lang="pug">` 就可以在使用 Pug 模板来替代标准 HTML。在本教程中我们依然会使用标准 HTML，但是你还是值得知道这种可行的方式。

`<script>` 包含组件中所有的非显示逻辑，最重要的是，`<script>` 标签需要默认导出一个 JS 对象。该对象是你在本地注册组件、定义属性、处理本地状态、定义方法等的地方。在构建阶段这个包含 template 模板的对象会被处理和转换成为一个有 `render()` 函数的 Vue 组件。

在 `App.vue` 中，两个组件 `TheWelcome` 和 `HelloWorld` 是通过导入注册的。以这种方式注册组件时，就是在本地注册。本地注册的组件只能在注册它们的组件中使用，因此需要在每个使用它们的组件文件中导入并注册它们。这对于{{Glossary("Tree shaking", "摇树优化")}}（不加载未使用的代码）和 bundle 拆分（只在需要时加载代码）非常有用，因为并非应用程序中的每个页面都一定需要每个组件。

```vue
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>
```

> [!NOTE]
> 如果想要使用 [TypeScript](https://www.typescriptlang.org/) 语法，你应该将 `<script>` 标签的 `lang` 属性设置为 `<script lang="ts">` 来告诉编译器你要使用 TypeScript。

组件的 CSS 应该写在 `<style>` 标签里，如果你添加了 `scoped` 属性（形如 `<style scoped>`），Vue 会把样式的范围限制到单文件组件的内容里。这个是类似于 CSS-in-JS 的解决方案，只不过允许书写纯粹的 CSS。

> [!NOTE]
> 如果通过 CLI 创建项目时选择了 CSS 预处理器，则可以将 `lang` 属性添加到 `<style>` 标签中，以便 Webpack 可以在构建时处理内容。例如，`<style lang ="scss">` 将允许你在样式信息中使用 SCSS 语法。

## 本地运行程序

`create-vue` 工具使用 Vite 作为内置开发服务器。这样一来，你就可以在本地运行你的应用程序，这样就可以轻松对其进行测试，而无需自己配置服务器。CLI 会将命令作为 npm 脚本添加到项目的 `package.json` 文件中，这样你就可以轻松运行它们。

在你的终端中，尝试运行 `npm run dev`（或者如果希望使用 yarn，则运行 `yarn dev`）。你的终端应输出类似以下内容：

```plain
  VITE v5.0.11  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

如果在浏览器新选项卡打开“本地”地址（如上所述，该地址应类似于 `http://localhost:5173`，但可能会因设置而异），你应该会看到你的应用。现在，它应该包含欢迎消息、Vue 文档的链接、使用 CLI 初始化应用程序时添加的插件的链接，以及指向 Vue 社区和生态系统的其他有用链接。

## 做一些改动

对应用作出第一步改动——删除 Vue logo。打开 `App.vue` 文件，在 template 部分删除 [`<img>`](/zh-CN/docs/Web/HTML/Reference/Elements/img) 元素。

```vue
<img
  alt="Vue logo"
  class="logo"
  src="./assets/logo.svg"
  width="125"
  height="125" />
```

如果你的服务器还在正常运行，应该可以看到 logo 几乎即时从之前渲染出来的页面中消失。我们再把 `HelloWorld` 组件也删掉。

首先删除下面这一整行：

```vue
<HelloWorld msg="You did it!" />
```

如果你在这个时候保存 `App.vue` 文件，渲染好的应用会因为我们注册了组件但没有使用而抛出一个错误。我们还需要在 `<script>` 中将引入和注册组件的那几行删掉：

现在把下面这几行删掉吧：

```js
import HelloWorld from "./components/HelloWorld.vue";
```

渲染好的应用这时候将不再显示错误了，只有一个空页面，因为我们的 `<template>` 里没有一个可见的内容。

我们接下来要创建一个任务清单的应用，在 `<div id="app">` 中新增一个 `<h1>` 标签，并将标题文案设为 "To-Do List"，像这样：

```vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
  </div>
</template>
```

`App.vue` 将会如期展示标题。

## 总结

让我们在这里暂时告一段落。我们已经了解了 Vue 背后的一些想法，为示例应用程序创建了一些脚手架，使其可以运行，检查并进行了一些初步更改。

在不进行基本介绍的情况下，我们现在将进一步研究并构建示例应用程序，这是一个基本的任务清单应用程序，它允许我们存储项目列表，完成后将其选中，并按所有、已完成和未完成待办事项来过滤。

在下一篇文章中，我们将构建第一个自定义组件，并研究一些重要概念，例如将 prop 传递到其中和保存其 data 状态。

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Vue_first_component", "Learn_web_development/Core/Frameworks_libraries")}}
