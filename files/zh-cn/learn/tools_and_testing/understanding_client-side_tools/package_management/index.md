---
title: 软件包管理基础
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

在本文中，我们将详细介绍软件包管理器，以了解我们如何在自己的项目中使用它们——安装项目工具依赖项，使其保持最新状态等。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a href="/zh-CN/docs/Learn/CSS">CSS</a> 和
        <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言。
      </td>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解什么是软件包管理器和软件包存储库，为什么需要它们，以及如何使用它们的基础知识。
      </td>
    </tr>
  </tbody>
</table>

## 项目中的依赖项

**依赖**是指可能由他人编写的第三方软件，理想情况下能够为你解决单一的问题。一个 Web 项目可以有任意数量的依赖，从无到多，并且你的依赖里可以包含了你没有明确安装的子依赖——你的依赖可能也有它们自己的依赖。

这里有一个可以展示依赖的好处的简单示例：你的项目可能需要实现将相对日期转换为人类可读的文本。你当然可以自己编写代码来实现这个功能，但是很有可能其他人已经解决了这个问题——为什么要浪费时间重复造轮子呢？何况，一个可靠的第三方依赖很可能在许多不同情况下进行了测试，使其对比你自己的解决方案具有更好的健壮性和浏览器兼容性。

项目依赖可以是整个 JavaScript 库或框架——例如 React 或者 Vue，也可以是非常小的工具库，比如我们的人类易读日期库，它也可以是一个命令行工具，例如我们之前文章中提到的 Prettier 或 ESLint。

没有现代构建工具，像这样的依赖项可能会使用简单的 [`<script>`](/zh-CN/docs/Web/HTML/Element/script) 元素包含在你的项目中，但这可能无法直接使用，并且当它们在 Web 上发布时，你可能需要一些现代工具来将你的代码和依赖项构建为捆绑包（Bundle）在一起。捆绑包（Bundle）是一个术语，通常用于指代一个单独的文件，它包含了你软件的所有 JavaScript——通常被尽可能压缩以减少下载和在访问者浏览器中显示软件所需的时间。

此外，如果你发现一个更好的工具来代替当前工具，或者你想更新依赖的新版本，会发生什么？对于只有几个依赖的项目来说来说，这并不痛苦，但对于具有许多依赖项的大型项目来说，这种事情可能会变得非常具有挑战性。这令使用像 npm 这样的**软件包管理器**更有意义，因为它将确保代码被干净地添加和删除，同时还有许多其他优点。

## 什么是软件包管理器？

我们已经对 [npm](https://www.npmjs.com/) 有所了解，但是就 npm 本身而言，软件包管理器是一个可以管理你的项目依赖项的系统。

软件包管理器提供一种方法来安装新的依赖（也称为“包”），管理包在文件系统上的存储位置，并为你提供发布自己的包的功能。

理论上，你可以手动下载和存储项目依赖项，因此软件包管理器是非必须的，但软件包管理器可以帮助你无缝处理安装和卸载包。如果不使用软件包管理器，你将需要手动处理以下工作：

- 找到所有包正确的 Javascript 文件
- 对它们进行检查以确保没有任何已知的漏洞
- 下载它们井将它们放在项目的正确位置
- 编写代码，将包引入你的项目并使用它们（这通常使用 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)完成，这是另一个值得深入了解的主题）。
- 对所有包子依赖项——可能有数十个或数百个，执行上述相同的操作。
- 如果你想删除这些软件包，则需要再次手动删除所有文件。

此外，软件包管理器处理重复的依赖项（这在前端开发中非常重要和常见）。

在使用 npm（以及基于 Javascript 和 Node 的软件包管理器）的情况下，你有两个选项来安装依赖项。正如我们在上一篇文章中提到的，依赖项可以全局安装或安装到你的项目。虽然全局安装通常有更多的优点，但安装到本地的优点更重要，例如提高代码可移植性和锁定依赖版本。

例如，如果你的项目依赖于具有特定配置的 Webpack，你需要确保在其他机器上安装该项目或在很久以后返回该项目，该配置仍将起作用。如果安装了不同版本的 Webpack，则可能不兼容。为了缓解这种情况，将依赖项安装到项目的本地是一个很好的选择。

要看到本地依赖项真正发挥作用，你只需要尝试下载并运行现有项目——如果它能正常工作并且所有依赖项都可以直接使用，这要归功于本地依赖项的可移植性。

> **备注：** npm 不是唯一可用的软件包管理器。有一种成功和流行的替代软件包管理器是 [Yarn](https://yarnpkg.com/)。Yarn 使用不同的算法解决依赖项，这可能意味着更快的用户体验。还有一些其他新兴的客户端，例如 [pnpm](https://pnpm.js.org/)。

## 软件包仓库

为了使软件包管理器工作，它需要知道从哪里安装软件包，这是通过软件包仓库实现的。仓库是实现软件包发布和安装的关键部份。npm 作为一个软件包管理器，同时也是 JavaScript 软件包最常用的软件包仓库。npm 仓库位于 [npmjs.com](https://www.npmjs.com/)。

npm 不是唯一的选择。你可以管理自己的软件包仓库——诸如 [Microsoft Azure](https://azure.microsoft.com/) 等产品允许你创建到 npm 仓库的代理（因此可以覆盖或锁定某些软件包），[GitHub 也提供软件包仓库服务](https://github.com/features/packages)，随着时间的推移，可能会出现更多的选择。

重要的是，确保你选择了最适合你的仓库。许多项目将使用 npm，在本模块的其余部分中，我们将继续使用 npm 作为示例。

## 使用软件包生态系统

让我们通过一个示例来介绍如何使用软件包管理器和仓库来安装命令行实用程序。

[Parcel](https://parceljs.org/) 是开发人员在开发过程中常用的另一个工具。Parcel 聪明之处在于它可以监视我们的代码内容以查找对依赖项的调用，并自动安装我们的代码所需的任何依赖项。它还可以自动构建我们的代码。

### 创建一个 npm 包应用

首先，创建一个新目录来存储我们的实验应用，选一个合适的地方便于你可以再找到它。我们将其称为 `parcel-experiment`，但你可以随意更改：

```bash
mkdir parcel-experiment
cd parcel-experiment
```

接下来，让我们将我们的应用初始化为 npm 包，这将创建一个配置文件 `package.json`，使我们可以保存配置详细信息，以防我们以后想要重新创建此环境，甚至将软件包发布到 npm 仓库（虽然这超出了本文的范围）。

确保你在 `parcel-experiment` 目录中，然后输入以下命令：

```bash
npm init
```

你现在将被要求回答一些问题；npm 将根据答案创建一个默认的 `package.json` 文件：

- `name`：用于标识应用的名称。只需按下 <kbd>Return</kbd> 接受默认值 `parcel-experiment`。

- `version`：应用的起始版本号。同样，只需按下 <kbd>Return</kbd> 接受默认值 `1.0.0`。

- `description`：应用目的的简要描述。输入一些非常简单的东西，例如“一个简单的 npm 包，用于学习使用 npm”，然后按下 <kbd>Return</kbd>。

- `entry point`：这将是应用的入口 JavaScript 文件。默认的 `index.js` 对这个实验项目是可以的——按下 <kbd>Return</kbd>。

- `test command`、`git repository` 和 `keywords`：按下 <kbd>Return</kbd> 以将它们暂时留空。

- `author`：项目的作者。输入你自己的姓名，然后按下 <kbd>Return</kbd>。

- `license`：要发布软件包的许可证。按下 <kbd>Return</kbd> 来接受默认值。

按下 <kbd>Return</kbd> 一次以接受这些设置。

进入你的 `parcel-experiment` 目录，现在你应该会发现有一个 `package.json` 文件。打开它，它应该看起来像这样：

```json
{
  "name": "parcel-experiment",
  "version": "1.0.0",
  "description": "A simple npm package to learn about using npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Chris Mills",
  "license": "ISC"
}
```

这是定义你的软件包的配置文件。目前为止都很好，所以我们继续。

### 安装 Parcel

运行以下命令以在本地安装 Parcel：

```bash
npm install parcel-bundler
```

一旦完成了*所有准备工作*，我们现在准备进行一些“现代客户端开发”（这实际上意味着使用构建工具使开发人员的体验更加轻松）。但是首先，请再次查看你的 package.json 文件。你将看到 npm 添加了一个新字段——dependencies：

```json
"dependencies": {
  "parcel-bundler": "^1.12.4"
}
```

这是 npm 的一部分魔法——如果将来你将代码库移动到另一个位置或另一台计算机上，则可以通过运行 `npm install` 命令重新创建相同的设置，npm 将检查依赖项并为你安装它们。

缺点是 Parcel 仅在我们的 `parcel-experiment` 项目中可用；你将无法在不同的目录中运行它。但是优点大于缺点。

### 设置我们的示例程序

好的，让我们继续。

Parcel 希望有一个 `index.html` 和一个 `index.js` 文件进行处理，除此之外，它对于你如何构建项目没有其他意见。其他工具可能非常不同，但至少 Parcel 使我们这个入门实验变得容易。

现在，我们需要在我们的工作目录中添加一个 `index.html` 文件。在你的测试目录中创建 `index.html`，并写入以下内容：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

接下来，我们需要在与 `index.html` 相同的目录中添加一个 `index.js` 文件。现在，`index.js` 可以为空，只需存在即可。现在创建这个文件。

### 尝试使用 Parcel

现在，我们将运行我们新安装的 Parcel 工具。在终端中运行以下命令：

```bash
 parcel index.html
```

你应该会在终端中看到类似这样的内容：

```bash
Server running at http://localhost:1234
✨  Built in 193ms.
```

> **备注：** 如果终端返回“未找到命令”类型错误，请尝试使用 `npx` 运行上面的命令，例如：`npx parcel index.html`。

现在，我们可以试着享受完整的 JavaScript 包生态系统的好处。首先，现在有一个本地 Web 服务器运行在 `http://localhost:1234`。现在前往该网址，你现在可能不会看到任何内容，但是很酷的是，当你对代码进行更改时，Parcel 将在后台自动重新构建并刷新服务器，以便你可以立即看到更新的效果。

现在来添加一些页面内容。假设我们想要显示易于理解的相对日期，例如“2 小时前”，“4 天前”等。[`date-fns`](https://date-fns.org/) 包的 `formatDistanceToNow()` 方法非常适合此用途（也有其他包提供相同的功能）。

在 `index.js` 文件中添加一下代码并保存：

```js
import { formatDistanceToNow } from "date-fns";

const date = "1996-09-13 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
```

回到 `http://localhost:1234`，你将看到作者成年已经多久了。

上面代码的特别之处在于，它使用了 `date-fns` 包中的 `formatDistanceToNow()` 函数，而我们并没有手动安装这个包！Parcel 发现你需要这个模块，因此在 `npmjs.com` 仓库中搜索并自动为我们本地安装了它。你可以通过再次查看 `package.json` 文件来证明这一点——你将看到 `dependencies` 字段已经为我们更新了：

```json
"dependencies": {
  "date-fns": "^2.12.0",
  "parcel-bundler": "^1.12.4"
}
```

Parcel 还添加了所需的文件，以便其他人可以接手这个项目并安装我们使用的任何依赖项。如果你查看运行 `parcel` 命令的目录，你将找到许多新文件；其中最有趣的是：

- `node_modules`：Parcel 和 date-fns 的依赖文件。
- `dist`：发布目录——这些是 Parcel 自动生成的打包和压缩文件，它们是 `localhost:1234` 提供的文件。这些是你在将网站发布到公共网络时上传到 Web 服务器的文件。

只要我们知道包的名称，我们就可以在代码中使用它，Parcel 会自动去获取并安装（实际上是“复制”）该包到我们的本地目录（在 `node_modules` 下）。

### 为生产环境构建我们的代码

然而，此代码还没有准备好用于生产环境。大多数构建工具系统都有“开发模式”和“生产模式”。重要的区别在于，在最终网站中不需要很多你在开发中使用的有用功能，因此这些功能将在生产环境中被剥离，例如“模块热替换”、“实时重新加载”和“未压缩和注释的源代码”。虽然远非穷尽，但这些都是常见的 Web 开发功能，在开发阶段非常有用，但在生产中它们并不是很有用。在生产中，它们只会令你的网站变得臃肿。

现在使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> 停止之前的 Parcel 命令。

我们现在可以为我们的最简示例站点的虚拟部署进行准备。Parcel 提供了一个额外的命令来生成适合发布的文件，使用 `build` 选项生成捆绑包（前面提到过）。

运行以下命令：

```bash
parcel build index.html
```

你应该看到类似的输出：

```bash
✨  Built in 9.35s.

dist/my-project.fb76efcf.js.map    648.58 KB     64ms
dist/my-project.fb76efcf.js        195.74 KB    8.43s
dist/index.html                        288 B    806ms
```

同样，我们的构建产物在 `dist` 目录。

### 减小应用的文件大小

然而，与所有“帮助”开发人员的工具一样，通常有得必有失。在这个例子中，是文件体积。JavaScript 捆绑包 `my-project.fb76efcf.js` 大小为 195K，非常大，考虑到它只是打印一行文本。当然，还有一些计算的功能，但我们绝对不需要 195K 的 JavaScript 来完成这项工作！

当你使用开发工具时，值得质疑它们是否为你做了正确的事情。在这种情况下，捆绑包的大小接近 200K，因为它实际上包含了整个 `date-fns` 库，而不仅仅是我们要使用的函数。

如果我们避免使用任何开发工具，并用 `<script src="">` 加载托管的 `date-fns` 库，那么大致相同的事情将会发生——当我们的示例页面在浏览器中加载时，将会下载整个库。

然而，这就是开发工具大放异彩的地方。当它在我们的计算机上运行时，我们可以要求软件检查我们对代码的使用，并在构建中仅包含我们实际使用的函数——这个过程称为“摇树优化（Tree Shaking）”。

这非常有意义，因为我们希望减小文件大小，从而使我们的应用程序尽可能快地加载。不同的工具将以不同的方式让你进行摇树优化。

虽然可用的工具的发展日新月异，但有三个主要的打包工具可以将我们的源代码构建为捆绑包：Webpack、[Rollup](https://rollupjs.org/guide/en/) 和 Parcel。可能会有更多其他的工具，但这些是比较流行的：

- RollUp 工具提供摇树优化和代码拆分作为其核心特性。
- Webpack 需要“一些”配置（尽管“一些”可能低估了一些开发人员的 Webpack 配置的复杂性）。
- 在 Parcel（Parcel 2 之前）的情况下，需要一个特殊的标志——`--experimental-scope-hoisting`——来进行摇树优化构建。

让我们暂时继续使用 Parcel，因为我们已经安装了它。尝试运行以下命令：

```bash
parcel build index.html --experimental-scope-hoisting
```

你会发现这次有很大的不同：

```bash
✨  Built in 7.87s.

dist/my-project.86f8a5fc.js    10.34 KB    7.17s
dist/index.html                   288 B    753ms
```

现在捆绑包大小约为 10K。看起来好多了。

如果我们将此项目发布到服务器上，我们只需发布 `dist` 文件夹中的文件。Parcel 已自动处理了所有文件名更改。我们建议你查看 `dist/index.html` 中的源代码，以便你可以看到 Parcel 已自动执行的更改。

> **备注：** 在撰写本文时，Parcel 2 尚未发布。但是，当它发布时，这些命令仍将有效，因为 Parcel 的作者已经聪明地将旧版本的 Parcel 重新命名。要安装 Parcel 1.x，你必须安装 `parcel-bundler`，而 Parcel 2.x 被称为 `parcel`。

现在有很多工具可用，JavaScript 软件包生态系统正在以前所未有的速度增长，这有利有弊。不断进行改进，选择，无论是好是坏，都在不断增加。面对眼花缭乱的工具选择，可能最重要的一课是了解你选择的工具能够做什么。

## 包管理器客户端的简要指南

本教程使用 npm 安装了 Parcel 包，但正如之前提到的，还有其他一些选择。至少知道它们的存在并对常见命令有一定的概念是值得的。你已经在之前的过程中见过其中一些，但让我们看看其他的。

该列表会随着时间的推移而增加，但在撰写本文时，可以使用以下主要包管理器：

- npm 详见 [npmjs.org](https://www.npmjs.com/)
- pnpm 详见 [pnpm.js.org](https://pnpm.js.org/)
- Yarn 详见 [yarnpkg.com](https://yarnpkg.com/)

从命令行的角度来看，npm 和 pnpm 非常相似——实际上，pnpm 旨在提供与 npm 完全相同的参数选项。它们的不同之处在于，pnpm 使用不同的方法在计算机上下载和存储软件包，以减少总磁盘空间的占用。

在下面的示例中，如果原先使用 npm，可以将其替换为 pnpm，命令仍然可以正常工作。

相比较 npm 而言，Yarn 在安装过程中通常被认为更快（尽管结果可能会有所不同）。这对开发人员很重要，因为等待依赖项安装（并复制到计算机）可能需要相当长的时间。

> **备注：** 虽然 npm 包管理器与 npm 仓库共享相同的名称，但不需要使用 npm 包管理器来从 npm 仓库安装软件包。pnpm 和 Yarn 可以使用与 npm 相同的 `package.json` 格式，并且可以安装来自 npm 和其他软件包仓库的任何软件包。

接下来，让我们回顾一下你可能需要使用包管理器执行的常见操作。

### 初始化一个项目

```bash
npm init
yarn init
```

如上所示，这将提示你完成一系列问题来描述你的项目（名称、许可证、描述等），然后为你生成一个 `package.json` 文件，其中包含有关你的项目及其依赖项的元信息。

### 安装依赖

```bash
npm install date-fns
yarn add date-fns
```

我们之前还看到了 `install` 的操作。它将 `date-fns` 软件包及其所有依赖项直接添加到工作目录下的名为 `node_modules` 的子目录中。

默认情况下，此命令将安装 `date-fns` 的最新版本，但你也可以进行控制。你可以尝试安装 `date-fns@1`，这将为你提供最新的 1.x 版本（目前为 1.30.1）。或者你可以尝试安装 `date-fns@^2.3.0`，这意味着安装 2.3.0 之后或包括 2.3.0 的最新版本（在撰写本文时为 2.8.1）。

### 更新依赖

```bash
npm update
yarn upgrade
```

此命令将查看当前安装的依赖项并更新它们（如果有可用的更新），更新的范围由软件包中指定的版本号来确定。

范围由依赖项版本号中的符号指定，例如 `date-fns@^2.0.1`——在这种情况下，插入符号 `^` 表示所有的次要版本和补丁版本，从 2.0.1 开始一直到 3.0.0 之前。

版本号的确定是通过名为 [semver](https://semver.org/) 的系统实现的。从文档中看起来可能有些复杂，但是只考虑摘要信息并将版本表示为 `MAJOR.MINOR.PATCH`，例如 2.0.1 表示主版本 2 和补丁版本 1，可以简化这个系统。一个测试 semver 值的绝佳方法是使用 [semver 计算器](https://semver.npmjs.com/)。

请记住，`npm update` 不会将依赖项升级到超出 `package.json` 中限定的范围——要执行此操作，你需要专门安装那个版本。

### 漏洞审查

```bash
npm audit
yarn audit
```

这个命令将检查你项目的所有依赖树，并使用漏洞数据库检查你正在使用的特定版本，如果你的项目中存在潜在的漏洞包，则会通知你。

想要了解有关漏洞的更多信息，可以参考 [Snyk 项目](https://snyk.io/)，该项目涵盖了 JavaScript 软件包和其他编程语言。

### 检查一个依赖

```bash
npm ls date-fns
yarn why date-fns
```

这个命令将显示已安装的依赖项的版本以及它如何被包含在你的项目中。可能有另一个顶级软件包引入了 `date-fns`，同样可能（并且不理想）的是，你的项目中有多个版本的软件包（这在使用 [Lodash](https://lodash.com/) 软件包时经常出现，因为它太有用了）。

尽管包管理器将尽最大努力对软件包进行去重，但你可能需要调查确切安装了哪个版本。

### 更多命令

你可以在网上了解有关 [npm](https://docs.npmjs.com/cli-documentation/) 和 [yarn](https://classic.yarnpkg.com/en/docs/cli/) 的每个命令的详细信息。同样，[pnpm](https://pnpm.io/zh/cli/add) 命令与 npm 具有相同的功能，但还添加了一些额外的命令。

## 创建自己的命令

软件包管理器还支持创建自己的命令并从命令行执行它们。例如，我们可以创建以下命令：

```bash
npm run dev
# 或 yarn run dev
```

这将运行一个自定义脚本来以“开发模式”来启动我们的项目。实际上，在所有项目中我们都会包含这个命令，因为本地开发环境通常与在生产环境中运行的方式略有不同。

如果你尝试在之前的 Parcel 测试项目中运行此命令，它将可能会报告“dev 脚本丢失”。这是因为 npm、Yarn（或者其他类似的包管理器）会去查找 `package.json` 文件中 `scripts` 属性下的一个名为 `dev` 的属性。

Parcel 可以使用 `parcel serve filename.html` 命令运行开发服务器，我们希望在开发过程中经常使用它。

因此，让我们在 `package.json` 中创建一个自定义缩写命令——“dev”。

如果你按照之前的教程操作，你应该在 parcel-experiment 目录中有一个 `package.json` 文件。打开它，它的 `sripts` 应该如下所示：

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

更新它，使其看起来像这样，并保存文件：

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "parcel serve index.html"
},
```

我们已经将自定义的 `dev` 命令添加为 npm 脚本命令。

现在在终端中尝试运行以下命令，确保你在 `parcel-experiment` 目录中：

```bash
 npm run dev
```

这将启动 Parcel 并在本地开发服务器上提供你的 `index.html` ，就像我们之前看到的一样：

```bash
Server running at http://localhost:1234
✨  Built in 5.48s.
```

此外，npm（和 yarn）命令非常智能，它们会在尝试通过传统方法查找命令行工具之前，先搜索项目中本地安装的工具（计算机通常会存储和允许查找软件）。你可以[了解有关 `run` 命令的技术细节](https://docs.npmjs.com/cli/run-script/)，尽管在大多数情况下，你自己的脚本都可以正常运行。

你可以在 `scripts` 属性中添加各种有助于完成工作的内容。我们肯定会这样做，[其他人也这样做](https://github.com/facebook/create-react-app/blob/c5b96c2853671baa3f1f297ec3b36d7358898304/package.json#L6)。

## 总结

这就是我们对软件包管理器的介绍。接下来，我们将构建一个示例工具链，将我们到目前为止学到的所有知识付诸实践。

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## 参考资料

- [npm scripts 参考](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json 参考](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
