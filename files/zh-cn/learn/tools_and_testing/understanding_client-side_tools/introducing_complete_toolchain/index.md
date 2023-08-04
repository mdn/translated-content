---
title: 介绍完整的工具链
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

在本系列的最后几篇文章中，我们将通过演示如何构建一个示例案例工具链来巩固你的工具知识。我们将从设置合理的开发环境和设置转换工具开始，一直到在 Netlify 上实际部署应用程序。在本文中，我们将介绍研究案例、设置开发环境和设置代码构建转换工具。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a href="/zh-CN/docs/Learn/CSS">CSS</a> 和
        <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        通过完成完整的工具链案例研究来巩固我们已经学到的知识。
      </td>
    </tr>
  </tbody>
</table>

实际上，工具和使用方法的组合是无限的，本文和下一篇文章中介绍的只是使用特定工具的*一种*方式。

> **备注：** 也值得重申的是，并非所有这些工具都需要在命令行上运行。许多当今的代码编辑器（如 VS Code 和 Atom）都通过插件支持*许多*工具的集成。

## 介绍我们的学习案例

我们在本文中创建的工具链将用于构建和部署一个迷你网站，该网站列出了有关潜在危险的空间物体的数据（取自 [NASA 开放 API](https://api.nasa.gov/) 之一），这些物体威胁着我们在地球上的存在！它看起来像这样：

![示例网站“will it miss”的屏幕截图](will-it-miss-screenshot.png)

你可以在 [near-misses.netlify.com](https://near-misses.netlify.app/) 上看到该网站的实时版本。

## 工具链中使用的工具

在本文中，我们将使用以下工具和功能：

- [JSX](https://reactjs.org/docs/introducing-jsx.html)，一组与 [React](https://reactjs.org) 相关的语法扩展，允许你在 JavaScript 中定义组件结构等。你不需要了解 React 就可以按照本教程进行操作，但我们已经包含了这一点，以便让你了解非原生 Web 语言如何集成到工具链中。
- 最新的 JavaScript 内置特性（在撰写本文时），例如 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import)。
- 有用的开发工具，例如用于格式化的 [Prettier](https://prettier.io/) 和用于代码规范检测的 [ESLint](https://eslint.org/)。
- [PostCSS](https://postcss.org/) 提供 CSS 嵌套功能。
- [Parcel](https://parceljs.org/) 用于构建和压缩我们的代码，并自动为我们编写一堆配置文件内容。
- [GitHub](/zh-CN/docs/Learn/Tools_and_testing/GitHub) 用于管理我们的源代码。
- [Netlify](https://www.netlify.com/) 用于自动化我们的部署过程。

你可能不熟悉上述所有功能和工具或它们的作用，但不要惊慌——随着我们在本文中的深入讨论，我们将解释每个部分。

## 工具链及其固有的复杂性

与任何链条一样，你的工具链中的环节越多，它就越复杂，潜在的脆弱性也就越大——例如，它可能更难配置，更容易出问题。相反，环节越少，工具链就越稳定可靠。

所有 Web 项目都是不同的，你需要考虑工具链的哪些部分是必要的，并仔细考虑剩余的每个部分。

最小的工具链是根本没有工具链。你可以手动编写 HTML，使用“vanilla JavaScript”（即没有框架或中介语言），并手动将其全部上传到服务器进行托管。

然而，更复杂的软件很可能会需要使用工具来帮助简化开发过程。此外，你应该在将软件部署到生产服务器之前包括测试，以确保你的软件按预期工作——这已经听起来像是必要的工具链。

对于我们的示例项目，我们将使用专门设计的工具链来帮助我们的软件开发并支持软件设计阶段所做的技术选择。但是，我们将避免使用任何多余的工具，以最小化复杂程度。

例如，我们*可以*在构建过程中包含一个工具，以缩小我们的 SVG 文件大小。但是，该项目只有 4 个 SVG 图像，这些图像在添加到项目之前已经使用 [SVGO](https://www.npmjs.com/package/svgo) 进行了手动缩小。

## 一些先决条件

除了我们将安装的工具之外，我们在上面的工具列表中提到了两个 Web 服务。现在让我们确保我们已经准备好使用它们了。如果你希望完成本教程，你需要在 GitHub 和 Netlify 中创建帐户。

- 如前所述，GitHub 是一个源代码存储库服务，还包含了社区功能，例如问题跟踪、关注项目发布等等。在下一章中，我们将推送到 GitHub 代码库，这将导致级联效应——这（应该）将自动所有软件部署到 Web 上。
- Netlify 是一个用于静态网站（即完全由不实时更改的文件组成的网站）的托管服务，它允许我们每天部署多次，并免费托管各种静态站点。Netlify 就是提供上述“网络主页”的服务——为我们提供免费托管以部署我们的测试应用程序。

如果你已经注册了 [GitHub](https://github.com/)（如果你还没有帐户，请单击主页上的“注册”链接并按照说明操作），你可以使用 GitHub 帐户进行身份验证 [Netlify](https://www.netlify.com/)（单击“注册”，然后从“以下账户之一注册”列表中选择“GitHub”），因此从技术上讲，你只需要创建一个新帐户。

稍后，你需要将 Netlify 帐户连接到 GitHub 存储库，以部署此项目；我们将在下一章中看到如何执行此操作。

## 工具的三个阶段

正如我们在[第一章](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)中所讨论的那样，工具链将分为以下阶段：

- **安全的网络**：使软件开发体验稳定且更高效。我们也可能将其称为开发环境。
- **编译与构建**：允许我们在开发过程中使用编程语言（例如 JavaScript）的最新特性或其他语言（例如 JSX 或 TypeScript），然后转译我们的代码，以便生产版本仍在各种浏览器上运行，无论是现代的和陈旧的。
- **开发后**：在完成开发主体后发挥作用的工具，以确保你的软件持续运行。在这个案例中，我们将研究如何向你的代码添加测试流程，并使用 Netlify 部署你的应用程序，以便所有人都可以访问。

让我们从开发环境开始。

## 创建开发环境

这部分工具链有时被视为耽搁实际工作的原因，因为它很容易使开发者陷入工具的“兔子洞”中，花费大量时间尝试使环境“恰到好处”。

但是你可以用以看待布置实际工作环境相同的方式来看待这一点。椅子需要舒适，并设置合适的位置以帮助你调整姿势。你需要电源、Wi-Fi 和 USB 接口！可能有重要的装饰或音乐可以帮助你改善精神状态——这些都是做好工作的重要因素，而且如果设置得当，它们也应该只需要设置一次。

同样，如果做得好，设置你的开发环境只需要做一次，并且应该可以在许多未来的项目中重复使用。你可能需要定期审查工具链的这一部分，并考虑是否应该引入任何升级或更改，但这不应该太经常需要。

你的工具链将取决于你自己的需求，但是对于这个（可能的）完整工具链的示例，将在开始阶段安装以下工具：

- 软件包安装工具——用于添加依赖项。
- 代码修订控制。
- 代码格式化工具——用于整理 JavaScript、CSS 和 HTML。
- 代码检查工具——用于检查我们的代码和规范。

### 软件包安装工具

我们将使用 npm 安装我们的工具，我们已经在第二章中介绍了它。你应该已经安装了 Node.js 和 npm，但如果没有，请[参考该部分](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#添加工具)。

> **备注：** 虽然不清楚具体的安装过程，但安装 npm 时还会安装一个名为 npx 的补充工具。我们稍后将使用 npx 来帮助运行作为项目本地依赖项安装的工具。

npm 将用于安装我们工具链的后续部分。接下来，我们将安装 git 来帮助进行修订控制和代码管理。

### 代码修订控制

你可能之前听说过“git”。[Git](https://git-scm.com/) 是目前开发人员可用的最流行的源代码修订控制工具——版本控制提供了许多优势，例如在远程位置备份你的工作，以及在同一项目上团队合作而不必担心互相覆盖彼此的代码。

对于一些人来说，这可能是显而易见的，但是需要重申：Git 不同于 GitHub。Git 是版本控制工具，而 [GitHub](https://github.com/) 是 git 存储库的在线存储库（附带了许多有用的相关工具）。请注意，尽管我们在本章中使用 GitHub，但还有几个替代方案，包括 [GitLab](https://about.gitlab.com/) 和 [Bitbucket](https://www.atlassian.com/software/bitbucket)，你甚至可以托管自己的 git 存储库。

在你的项目中使用修订控制并将其作为工具链的一部分将有助于管理代码的演变。它提供了一种方法，可以在开发过程中“提交”工作块，以及诸如“实现 X 新功能”或“由于 Y 更改，Bug Z 现在已修复”之类的注释。修订控制还可以允许你为项目代码创建*分支*，创建一个单独的版本，并在上面尝试新功能，而不会影响你的原始代码。

最后，如果你在代码中引入了错误并且难以修复它，则它可以帮助你撤消更改或将代码恢复到“它正常工作时”——这是所有开发者的保命技能！

Git 可以通过 git-scm 网站[下载和安装](https://git-scm.com/downloads)——下载适用于你系统的相关安装程序，运行它，并按照屏幕上的提示操作。干就完事了。

你可以以多种不同的方式与 git 进行交互，从使用命令行发出命令，到使用 [git GUI 应用程序](https://git-scm.com/downloads/guis)通过按按钮发出相同的命令，甚至从直接在代码编辑器内部使用，如下面的 Visual Studio Code 示例所示：

![在 VS Code 中显示的 GitHub 集成](vscode-git.png)

好了，现在安装好 git 就足够了。让我们继续。

### 代码格式化工具

我们将在本项目中使用 Prettier——我们在第二章中介绍了它——来格式化我们的代码。如果你按照[安装 Prettier](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#下载pprettier) 部分中的说明进行操作，那么你可能已经安装了 Prettier。如果没有，我们将让你立即使用终端将 Prettier 安装为全局程序。

你可以使用以下命令检查是否已在全局安装它：

```bash
prettier -v
```

如果已安装，你将获得返回的版本号，例如 2.0.2；如果没有，它将返回类似于“找不到命令”的内容。如果是这种情况，请使用以下命令安装它：

```bash
npm install prettier -g
```

现在，我们可以使用 Prettier 来格式化我们的代码。在终端中，切换到项目的根目录，然后运行以下命令：

```bash
prettier --write ./src/index.html
```

> **备注：** 在上面的命令中，我使用了 Prettier 的 `--write` 选项。这对 Prettier 意味着“如果我的代码格式有任何问题，请继续修复它们，然后保存我的文件”。这对于我们的开发过程来说很好，但是我们也可以只使用 `prettier` 而不使用选项，它将仅检查文件。检查文件（而不保存它）对于运行在发布之前的检查（例如“不要发布任何未经适当格式化的代码”）非常有用。

对每个文件运行初始命令可能很繁琐，有一个单一的命令来为我们执行此操作将非常有用（我们的代码检查工具也是如此）。

有许多解决此问题的方法；以下是其中的一些：

- 使用 npm 脚本在一次命令中从命令行运行多个命令，例如 `npm run tidy-code`。
- 使用特殊的“git 钩子”在提交之前测试代码是否已格式化。
- 使用代码编辑器插件在每次保存文件时运行 Prettier 命令。

> **备注：** 什么是 git 钩子？Git（而不是 GitHub）提供了一种系统，可以让我们将预操作和后操作附加到我们使用 git 执行的任务（例如提交代码）。尽管 git 钩子可能有点过于复杂（在笔者看来），但是一旦它们配置就绪，就可以非常强大。如果你有兴趣使用钩子，[Husky](https://github.com/typicode/husky) 是使用钩子的一个很方便的途径。

对于 VS Code，一个有用的扩展是 [Esben Petersen 编写的 Prettier Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)，它允许 VSCode 在保存时自动格式化代码。这意味着我们正在开发的项目中的任何文件都会得到合适的格式化，包括 HTML、CSS、JavaScript、JSON、markdown 等。编辑器所需的只是启用“保存时格式化”。

与许多比较新的工具一样，Prettier 带有“合理的默认值”。这意味着你将能够使用 Prettier 而无需配置任何内容（如果[默认值](https://prettier.io/docs/en/configuration.html)满足你的要求）。这使你可以专注于重要的事情：创意工作。

### 代码检查工具

代码检查有助于提高代码质量，也是在开发过程中更早地捕获潜在错误的一种方法。它是良好工具链的关键组成部分，许多开发项目默认包含它。

Web 开发的代码规范检查工具主要用于 JavaScript 中（尽管有一些可用于 HTML 和 CSS）。这是因为，如果使用未知的 HTML 元素或无效的 CSS 属性，由于这两种语言的弹性特性，可能不会出现任何问题。JavaScript 则比较脆弱——例如错误地调用不存在的函数会导致 JavaScript 中断；因此，对于较大的项目，对 JavaScript 进行代码检查尤其重要。

JavaScript 代码检查的首选工具是 [ESLint](https://eslint.org/)。它是一个非常强大的多功能工具，但是正确配置它可能会很棘手，你可能会花费很多时间来获得一个“完美的”配置！

默认情况下，ESLint 将报错——无法找到配置文件。配置文件支持多种格式，但是对于此项目，我们将使用 `.eslintrc.json`（前缀的 `.` 表示文件默认情况下是隐藏的）。

ESLint 通过 npm 安装，根据第二章中的讨论，你可以选择在本地或全局安装此工具。建议同时使用两者：

- 对于你打算共享的项目，你应始终将 ESLint 作为本地依赖项包含在内，以便任何拷贝自己的版本的人都可以遵循你应用于项目的规则。
- 你还应考虑全局安装 ESLint，以便你可以快速使用它来检查任何文件。

为简单起见，在本章中，我们不会探讨所有 ESLint 功能，但是我们将提供适用于我们特定项目及其要求的配置。但是，请记住，如果需要细化和强制执行有关代码规范（或验证）的规则，很可能可以通过使用正确的 ESLint 配置来实现这一需求。

稍后在本章中，我们将提供 ESLint 配置。一旦有了工作配置，我们将使用它来检查我们的代码。下面是一个 ESLint 输出示例：

```bash
./my-project/src/index.js
   2:8 error 'React' is defined but never used  no-unused-vars
 22:20 error 'body' is defined but never used   no-unused-vars
 96:19 error 'b' is defined but never used      no-unused-vars

✖ 3 problems (3 errors, 0 warnings)
```

> **备注：** 我们将在下一节安装 ESLint；暂时不要担心这个。

与其他工具一样，代码编辑器集成支持通常对 ESLint 有好处，并且可能更有用，因为它可以在出现问题时向我们提供实时反馈：

![VS Code 中集成 ESLint 显示的错误](eslint-error.png)

安装完成后，我们需要配置 Prettier，以便它可以与 ESLint 配合使用。我们将在下一节中进行此操作。

### 配置初始项目

使用这些工具，可以安全地建立一个新项目，因为许多“基本”问题将在早期被发现。

使用命令行，我们可以创建项目、安装初始工具并创建基本配置文件。再次重复此过程几次后，你将对默认设置有所了解。当然，这*只是一种*可能的配置。

### 初始设置

好的，让我们先完成初始项目设置。

1. 首先打开终端，切换到一个你能够轻松找到并访问的地方。例如桌面、主目录或文档文件夹。
2. 接下来，运行以下命令创建一个文件夹来保存你的项目，并进入该文件夹：

   ```bash
   mkdir will-it-miss
   cd will-it-miss
   ```

3. 现在，我们将为所有网站开发代码创建一个新目录，运行以下命令：

   ```bash
   mkdir src
   ```

   代码组织结构往往因团队而异。对于这个项目，源代码将位于 `src` 中。

4. 确保你在 `will-it-miss` 目录的根目录中，输入以下命令以启动 git 的源代码控制功能：

   ```bash
   git init
   ```

   这意味着你现在可以开始存储文件夹内容的修订版本，将其保存到远程存储库等。这部份内容我们稍后细讲！

5. 接下来，输入以下命令，将你的目录转换为 npm 包，这样我们就可以利用前一篇文章中讨论的优势：

   ```bash
   npm init --force
   ```

   这将创建一个默认的 `package.json` 文件，如果需要，我们可以稍后对其进行配置。`--force` 选项使命令立即创建一个默认的 `package.json` 文件，而不会询问你有关其内容的所有通常问题（如我们之前提到的）。现在我们只需要默认值，因此这可以节省我们一些时间。

#### 获取项目代码文件

此时，我们将获取项目的代码文件（HTML、CSS、JavaScript 等），并将它们放在我们的 `src` 目录中。我们不会教你它们的工作原理，因为这不是本章的重点。我们只是在这里运行它们，教你如何使用*它们*。

1. 要获取代码文件，请访问 <https://github.com/remy/mdn-will-it-miss>，下载并解压缩此仓库的内容到本地硬盘的某个位置。你可以通过选择 _Clone or download_ > _Download ZIP_ 下载整个项目的 zip 文件。

   ![GitHub 上托管的“will it miss”仓库](github-will-it-miss.png)

2. 现在将项目的 `src` 目录的内容复制到你当前的空 `src` 目录中。

我们已经准备好了项目文件。这就是我们现在需要做的全部内容！

> **备注：** 要在本地上设置项目，请转到解压缩文件夹的根目录，在该位置打开终端，并在终端中执行 `npm install` 命令。这将安装在 `package.json` 文件中提到的所有项目依赖项。

#### 安装我们的工具

现在是时候安装我们将在开发环境中使用的初始工具集了。从项目的根目录中运行以下命令：

```bash
npm install --save-dev eslint prettier babel-eslint
```

你刚刚运行的命令有两个重要的事情需要注意。第一是我们将依赖项安装到项目的本地位置——在特定项目中安装工具更好。本地安装（不包括 `--global` 选项）使我们能够轻松地在其他机器上重新创建此设置。

这个安装命令的第二个重要部分是 `--save-dev` 选项。这告诉 npm 工具这些特定的依赖项只用于开发（因此 npm 将它们列在 `package.json` 文件中的 `devDependencies` 下，而不是 `dependencies` 下）。这意味着如果这个项目在生产模式下安装，这些依赖项将不会被安装。一个 "典型" 的项目可以有许多开发依赖项，这些依赖项在实际运行代码时并不需要。将它们作为单独的依赖项保持分离，可以减少在部署到生产环境时的不必要工作（我们将在下一章中讨论）。

在开始实际应用程序代码的开发之前，需要进行一些配置，以使我们的工具正常工作。这不是 Web 开发的前提条件，但如果这些工具在开发过程中有助于捕捉错误，正确配置工具是非常有用的，特别是 ESLint。

### 配置我们的工具

在项目的根目录下（而不是 `src` 目录下），我们将添加配置文件来配置我们的一些工具，即 Prettier 和 ESLint。这是工具配置的一般实践——你往往会在项目根目录中找到配置文件，其中往往包含用 JSON 结构表达的配置选项（尽管我们的工具和许多其他工具也支持 YAML，如果这是你喜欢的配置文件格式，你可以切换到它）。

1. 首先，在 `will-it-miss` 目录的根目录下创建一个名为 `.prettierrc.json` 的文件。
2. 要配置 Prettier，请将 `.prettierrc.json` 内容设置为以下内容：

   ```json
   {
     "singleQuote": true,
     "trailingComma": "es5"
   }
   ```

   使用这些设置，当 Prettier 为你格式化 JavaScript 代码时，它将对所有带引号的值使用单引号，并且不使用尾随逗号（这是 ECMAScript 的新特性，在旧版浏览器中这会导致错误）。你可以在 [Prettier 文档](https://prettier.io/docs/en/configuration.html)中找到更多关于配置 Prettier 的信息。

3. 接下来，我们将配置 ESLint——在 `will-it-miss` 目录的根目录中创建另一个名为 `.eslintrc.json` 的文件，并将其设置为以下内容：

   ```json
   {
     "env": {
       "es6": true,
       "browser": true
     },
     "extends": "eslint:recommended",
     "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module"
     },
     "rules": {
       "no-console": 0
     }
   }
   ```

   上述 ESLint 配置表示我们想使用"推荐的"的 ESLint 设置，我们将允许使用 ES6 特性（例如 [`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 或 [`Set()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)），我们可以使用模块的 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 语句，并且允许使用 [`console.log()`](/zh-CN/docs/Web/API/console/log)。

4. 然而，在项目的源文件中，我们使用了 React JSX 语法（对于你的实际项目，你可能会使用 React 或 Vue 或任何其他框架，或者不使用任何框架！）。

   在我们的 JavaScript 代码中使用 JSX 语法会导致 ESLint 很快报错，因此我们需要添加更多的配置以使其接受 JSX 特性。

   最终的配置文件应该看起来像这样——添加粗体字部分并保存：

   ```json
   {
     "env": {
       "es6": true,
       "browser": true
     },
     "extends": ["eslint:recommended", "plugin:react/recommended"],
     "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true
       }
     },
     "plugins": ["react"],
     "rules": {
       "semi": "error",
       "no-console": 0,
       "react/jsx-uses-vars": "error"
     }
   }
   ```

   由于配置现在使用了一个名为 "React" 的插件，因此还需要安装该插件作为开发依赖项，以便为运行该部分的代码检查过程提供代码。

5. 在项目文件夹的根目录下运行以下终端命令：

   ```bash
   npm install --save-dev eslint-plugin-react
   ```

   这里有一个完整的 [ESLint 规则列表](https://eslint.org/docs/rules/)，你可以根据自己的需求进行调整和配置，许多公司和团队已发布了自己的 [ESLint 配置](https://www.npmjs.com/search?q=keywords:eslintconfig)，这对于选择一个适合自己标准的配置有时可能有用，可以帮助我们获得灵感。不过需要提醒的是：ESLint 配置是一个非常深的“兔子洞”问题！

到此为止，我们的开发环境设置完成了。现在，最后，我们（几乎）准备好编写代码了。

## 构建和转换工具

如上所述，本项目将使用 React，这也意味着源代码将使用 JSX。该项目还将使用最新的 JavaScript 特性。

一个迫在眉睫的问题是，没有任何浏览器原生支持 JSX——它是一种中间语言，旨在被编译成浏览器可以理解的语言。

如果浏览器尝试运行源 JavaScript 代码，它将立即报错。因此这个项目需要一个构建工具来将源代码转换为浏览器可以兼容运行的代码。

转换工具有很多选择，尽管 WebPack 是一个特别流行的选择，但本项目将使用 Parcel——因为它只需要很少的配置。

Parcel 的工作原理是它会尝试根据你的开发需求进行动态配置。Parcel 会监视代码并在开发过程中运行实时重新加载的 Web 服务器。这也意味着 Parcel 会自动安装我们的软件依赖项，因为它们在源代码中被引用，就像我们在[第三章](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management#使用软件包生态系统)中所看到的那样。

Parcel 将处理安装任何所需的转换工具和配置，而我们不需要干预（在大多数情况下）。

最后，Parcel 还可以捆绑和准备代码以进行生产部署，处理代码压缩和浏览器兼容性要求。

因此，我们还需要在项目中安装 parcel 的依赖项——在终端中运行以下命令：

```bash
npm install --save-dev parcel-bundler
```

### 使用未来的特性

我们的项目代码使用了一些新的 Web 功能，包括一些尚未完全标准化的特性。例如，本项目使用 W3C 提出的 [CSS 嵌套](https://drafts.csswg.org/css-nesting/)，而不是像 [Sass](https://sass-lang.com/) 这样的工具。CSS 嵌套允许我们将 CSS 选择器和属性嵌套在彼此内，从而创建更具体的选择器范围。Sass 是第一个支持嵌套的预处理器之一（如果不是第一个），但现在经过多年的发展，CSS 嵌套看起来很快就会标准化，这意味着我们将在不需要构建工具的情况下在浏览器中使用它。

在此之前，Parcel 将使用 [PostCSS](https://postcss.org/) 的帮助在嵌套 CSS 和本地支持的 CSS 之间进行转换，Parcel 可以直接使用 PostCSS。由于我们明确决定本项目应使用 CSS 嵌套（而不是 Sass），因此该项目将需要包含一个 PostCSS 插件。

让我们使用 [postcss-preset-env](https://preset-env.cssdb.org/)，它可以让我们“立即体验未来的 CSS”。要使用它，请按照以下步骤操作：

1. 在项目目录的根目录下添加一个名为 `.postcssrc` 的文件。
2. 将以下内容添加到新文件中，这将自动为我们提供最新的 CSS 功能的完全访问权限：

   ```json
   {
     "plugins": {
       "postcss-preset-env": {
         "stage": 0
       }
     }
   }
   ```

这就是我们需要做的全部——请记住，Parcel 默认会为我们安装依赖项！

尽管我们的工具链的这个阶段可能会非常痛苦，因为我们选择了一个旨在减少配置和复杂性的工具，但在开发阶段我们真的不需要做更多的事情。模块已正确导入，嵌套的 CSS 已正确转换为“常规 CSS”，我们的开发不受构建过程的影响。

现在我们的软件已准备好开始编写了！

## 构建和运行

要开始处理我们的项目，我们将在命令行上运行 Parcel 服务器。在其默认模式下，它将监测你的代码中的更改并自动安装你的依赖项。这很好，因为我们不必在代码和命令行之间来回切换。

1. 要在后台启动 Parcel，请转到终端并运行以下命令：

   ```bash
   npx parcel src/index.html
   ```

   你应该会看到像这样的输出（如果安装了依赖项）：

   ```bash
   Server running at http://localhost:1234
   ✨  Built in 129ms.
   ```

   Parcel 还安装了我们将在代码中使用的依赖项，包括 react、react-dom、react-async-hook、date-fns 和 format-number。因此，这第一次运行将比 Parcel 的典型运行时间更长。

   > **备注：** 如果你在此项目上运行 Parcel 并遇到像 `Error: ENOENT: no such file or directory` 这样的错误，请使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> 停止该进程，然后尝试重新运行它。

   服务器现在正在输出的 URL 上运行（在本例中为 localhost:1234）。

2. 在浏览器中打开此 URL，你将看到示例应用正在运行！

Parcel 的另一个聪明技巧是，对源代码的任何更改现在都会触发浏览器中的更新。试试：

1. 在你喜欢的文本编辑器中打开文件 `src/components/App.js`。
2. 搜索文本“near misses”，并将其替换为一些搞怪的东西，比如“flying pigs”。
3. 保存文件，然后直接返回在浏览器中运行的应用程序。你会注意到浏览器已自动刷新，并且页面顶部的“\<date> there will be \<number> near misses”一行已经发生了更改！

你还可以尝试使用 ESLint 和 Prettier，尝试故意从其中一个文件中删除大量空格，然后运行 Prettier 以清理它，或者在其中一个 JavaScript 文件中引入语法错误，然后查看当你尝试使用 Parcel 再次构建它时，ESLint 给你什么错误提示。

## 总结

在本章中，我们已经走了很长的路，建立了一个相当不错的本地开发环境，用于创建应用程序。

在 Web 软件开发过程中的这一点上，你通常会为你打算构建的软件编写代码。由于本模块是关于学习 Web 开发周围的工具，而不是 Web 开发代码本身，因此我们不会教授任何实际的编码——你可以在 MDN 的其它部分中找到这些教程！

相反，我们为你编写了一个示例项目，供你使用你的工具。我们建议你使用我们的示例代码来完成本章的其余部分，然后你可以尝试更改 src 目录的内容以适应你自己的项目，并将其发布到 Netlify 上！事实上，将部署到 Netlify 将是下一章的最终目标！

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Package_management","Learn/Tools_and_testing/Understanding_client-side_tools/Deployment", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
