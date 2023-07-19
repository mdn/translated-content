---
title: Angular 入门
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

是时候将目光转向谷歌的 Angular 框架了，这是一种你可能经常遇到的选项。在这篇文章中我们关注 Angular 能提供什么、安装必备的组件、建立一个示例应用，并关注 Angular 的基本架构。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a href="/zh-CN/docs/Learn/CSS">CSS</a> 和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，以及<a href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">终端命令行</a>的知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        要设置本地 Angular 的开发环境，创建一个新手应用，并理解它工作原理的基础知识。
      </td>
    </tr>
  </tbody>
</table>

## Angular 是什么？

Angular 是一个开发平台，基于 [TypeScript](https://www.typescriptlang.org/)。作为一个平台，Angular 包含了：

- 基于组件的框架，可用于构建可扩展的 Web 应用程序
- 集成良好的库（library），涵盖各种功能，包括路由、表单管理、客户端——服务器通信等
- 开发人员工具，可帮助您开发、构建、测试和更新代码

当你用 Angular 搭建一个应用，你正在利用一个可以从单开发人员项目扩展到企业级应用程序的平台。Angular 被设计用来使版本迭代尽可能简单。因此，你可以毫不费力地利用最新成果（developments）。最为重要的是，Angular 的生态系统由多达 170 万的开发人员、库（library）作者和内容创作者构成的多元化群体组成。

在你开始探索 Angular 平台之前，你需要了解 Angular 的命令行界面（CLI）。Angular 的命令行界面是最快、最简单、也最值得推荐的开发 Angular 应用的方法。Angular 的命令行界面使许多任务变得简单。以下是一些示例：

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code><a href="https://angular.cn/cli/build">ng build</a></code>
      </td>
      <td>将 Angular 应用程序或库编译到给定的输出目录中。</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.cn/cli/serve">ng serve</a></code>
      </td>
      <td>构建你的应用并启动开发服务器，当有文件变化时就重新构建。</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.cn/cli/generate">ng generate</a></code>
      </td>
      <td>基于某个原理图生成或修改文件。</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.cn/cli/test">ng test</a></code>
      </td>
      <td>在给定项目中运行单元测试。</td>
    </tr>
    <tr>
      <td>
        <code><a href="https://angular.cn/cli/e2e">ng e2e</a></code>
      </td>
      <td>
      构建一个 Angular 应用并启动开发服务器，然后运行端到端测试。
      </td>
    </tr>
  </tbody>
</table>

你将会发现 Angular 的命令行界面是一个用于构建 Angular 应用程序的宝贵工具。

## 你将构建什么？

本教程系列将指导你完成构建待办事项列表应用程序的过程。通过这个应用程序，你将学习如何使用 Angular 来管理、编辑、添加、删除和过滤项目。

## 必备条件

为了在你的本地系统中安装 Angular，你需要：

- **Node.js**

  Angular 需要一个 Node.js 的[目前活跃的（active）长期支持版本（LTS）或者一个维护的（maintenance）长期支持版本](https://nodejs.org/about/releases)。有关特定版本要求的信息，参见在 [package.json](https://unpkg.com/@angular/cli/package.json) 文件中的 `engines` 值。更多安装 Node.js 的信息，参见 [nodejs.org](https://nodejs.org)。如果你不确定在系统上运行哪个版本的 Node.js，请在终端窗口中运行 `node -v`。

- **npm 包管理器**

  Angular、Angular 的命令行界面和 Angular 应用依赖 [npm 包](https://docs.npmjs.com/getting-started/what-is-npm/)以实现许多特性和功能。若要下载安装 npm 包，就需要一个 npm 包管理器。这个教程使用在安装 `Node.js` 时默认安装的 [npm 客户端](https://docs.npmjs.com/cli/install/)命令行界面。若要检查是否已安装 npm 客户端，请在终端窗口中运行 `npm -v`。

## 设置你的应用程序

你可以使用 Angular 命令行界面来运行用于生成、构建、测试和部署 Angular 应用程序终端的命令。为了安装 Angular 命令行界面，在你的终端运行以下命令：

```bash
npm install -g @angular/cli
```

Angular 命令行界面命令均以 `ng` 开头，其后是你希望命令行界面执行的操作。在桌面目录中，使用以下 `ng new` 命令创建一个名为 `todo` 的应用程序：

```bash
ng new todo --routing=false --style=css
```

`ng new` 命令会在桌面上创建一个最小的 Angular 初始应用程序。附加属性 `--routing` 和 `--style` 规定了如何处理应用程序中的导航和样式。

本教程稍后将会更详细地介绍这些功能。如果系统提示你强制执行更严格的类型检查，则可以使用 yes 进行响应。

使用以下 `cd` 命令导航到新项目：

```bash
cd todo
```

要运行 `todo` 应用程序，请使用 `ng serve`：

```bash
ng serve
```

当命令行界面提示你有关分析的信息时，请回答 `no`。

在浏览器中，导航到 `http://localhost:4200/` 以查看新的初始应用程序。如果你更改了任何源文件，应用程序都将自动重新加载。

当 `ng serve` 命令正在运行时，你可能希望打开另一个终端选项卡或窗口以运行新命令。如果你在任何时候想要停止运行应用程序，请在终端中按 `Ctrl + c`。

## 熟悉你的 Angular 应用程序

本教程重点介绍的应用程序源文件位于 `src/app` 中。命令行界面自动生成的关键文件包含：

1. `app.module.ts`：指定应用程序使用的文件。
   此文件充当应用程序中其他文件的中心枢纽。
2. `app.component.ts`：也称为类，包含着应用程序主页的逻辑。
3. `app.component.html`：包含 `AppComponent` 的 HTML。此文件的内容也被称为模板。
   模板将确定视图或你在浏览器中看到的内容。
4. `app.component.css`: 包含 `AppComponent` 的样式。如果要定义仅适用于特定组件的样式（而不是整个应用程序），则可以使用此文件。

Angular 中的组件由三个主要部分组成：模板、样式和类。例如，`app.component.ts`、`app.component.html` 和 `app.component.css` 共同构成了 `AppComponent`。此结构将逻辑、视图和样式分开，使应用程序更易于维护和缩放。

通过这种方式，你从一开始就使用了最佳实践。

Angular 的命令行界面同时也生成一个叫作 `app.component.spec.ts` 的用于组件测试的文件。但本教程不会进行测试，因此你可以忽略这个文件。

每当你生成一个组件时，命令行界面都会使用你指定的名称在目录中创建这四个文件。

## Angular 应用程序的结构

Angular 用 TypeScript 构建。TypeScript 是 JavaScript 的超集，这意味着任何有效的 JavaScript 都是有效的 TypeScript。TypeScript 提供了比普通 JavaScript 类型推断和更简洁的语法，它为你提供了一个工具，用于创建更易于维护的代码并最大限度地减少错误。

组件是 Angular 应用程序的构建块。组件包括一个 TypeScript 类，该类具有 `@Component()` 修饰器、HTML 模板和样式。

### 类（class）

类是放置组件所需的任何逻辑的位置。这种代码可以包括函数、事件监听器、属性和对服务的引用等。类位于名称为 `feature.component.ts` 的文件中，其中 `feature` 为组件的名称。因此，你可以有命名类似 `header.component.ts`、`signup.component.ts` 或 `feed.component.ts` 的文件。
你创建一个带有 `@Component()` 修饰器的组件，该装饰器具有元数据，该元数据告诉 Angular 在哪里可以找到 HTML 和 CSS。典型组件如下：

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  // the following metadata specifies the location of the other parts of the component
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // your code goes here
}
```

此组件被称为 `ItemComponent`，其选择器为 `app-item`。你可以通过将选择器放置在其他模板中来像使用常规 HTML 标记一样使用它。当选择器位于模板中时，浏览器将渲染该组件的模板。

本教程将指导你创建两个组件并在一个组件中使用另一个组件。Angular 的组件模型提供了强大的封装和直观的应用程序结构。组件还使应用程序更易于进行单元测试，并且可以提高代码的整体可读性。

### HTML 模板

每个组件都会有一个 HTML 模板，用于声明该组件的渲染方式。你可以内联或按文件路径定义此模板。

若要引用外部 HTML 文件，请使用 `templateUrl` 属性：

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

要编写内联 HTML，请使用 `template` 属性并在反引号中编写 HTML：

```js
@Component({
  selector: "app-root",
  template: `<h1>Hi!</h1>`,
})
export class AppComponent {}
```

Angular 使用额外的语法扩展 HTML，允许你从组件中插入动态值。Angular 会在组件的状态更改时自动更新渲染的文档对象模型（DOM）。此功能的一个用途是插入动态文本，如下面的示例所示。

```html
<h1>\{{ title }}</h1>
```

双大括号指示 Angular 插入其中的内容。`title` 的值来自组件类：

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "To do application";
}
```

当应用程序加载组件及其模板时，你将在浏览器将看到以下内容：

```html
<h1>To do application</h1>
```

### 样式

组件可以从应用程序的 `styles.css` 文件中继承全局样式，并使用自己的样式扩充或覆盖它们。你可以直接在 `@Component()` 修饰器中编写特定于组件的样式，也可以指定 CSS 文件的路径。

若要将样式直接包含在组件修饰器中，请使用 `styles` 属性：

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

通常，组件会使用 `styleUrls` 属性在单独的文件中使用样式：

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

使用特定于组件的样式，你可以组织 CSS，使其易于维护和移植。

## 总结

这就是我们给你的第一次关于 Angular 的介绍。此时，你应该已经设置并准备好构建 Angular 应用程序，并对 Angular 的工作原理有基本的了解。在下一篇文章中，我们将加深这些知识，并开始构建待办事项列表应用程序的结构。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
