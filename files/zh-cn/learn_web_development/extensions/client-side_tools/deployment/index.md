---
title: 部署我们的应用
slug: Learn_web_development/Extensions/Client-side_tools/Deployment
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

在本系列的最后一篇文章中，我们将采用上一篇文章中构建的示例工具链，并将其添加到示例应用程序，以便部署。我们会将代码推送到 GitHub，使用 GitHub Pages 进行部署，也会向你展示如何在部署过程中添加一个简单的测试。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        完成完整的工具链案例研究，重点是部署应用程序。
      </td>
    </tr>
  </tbody>
</table>

## 在部署之前

在项目生命周期的这一部分，可能有大量问题需要解决。因此，必须创建一个工具链，以尽可能少的人工干预来处理这些问题。

下面是这个特殊项目需要考虑的一些事项：

- 生成生产构建：确保文件最小化、分块、应用摇树优化，并确保构建版本令客户端缓存失效。
- 运行测试：测试范围从“这段代码的格式是否正确”到“这段代码是否符合我的预期”，并确保测试失败能阻止部署。
- 将更新后的代码实际部署到线上 URL 上：或者可能是一个临时 URL，以便首先对其进行审查。

> [!NOTE]
> Cache busting（缓存破坏）是我们在本模块中从未见过的一个新术语。这是一种破坏浏览器自身缓存机制的策略，它迫使浏览器下载一份新的代码副本。Vite（以及许多其他工具）会为每次新构建生成唯一的文件名。这种独特的文件名会“破坏”浏览器的缓存，从而确保每次对已部署的代码进行更新时，浏览器都能下载新的代码。

上述任务还可细分为更多任务；请注意，大多数 web 开发团队至少会对开发后阶段的某些部分制定自己的条款和流程。

在这个项目中，我们将使用 [GitHub Pages](https://pages.github.com/) 提供的出色的静态托管服务来托管我们的项目。它不仅在互联网上托管我们的网站，还为我们提供了指向网站的 URL。这太棒了——许多 MDN 示例网站都托管在 GitHub Pages 上。

部署到主机往往是项目生命周期的最后阶段，但由于 GitHub Pages 等服务降低了部署成本（包括财务成本和实际部署所需的时间），因此可以在开发过程中进行部署，以共享进行中的工作或为其他目的进行预发布。

GitHub 提供了一套流畅的工作流程，可将新代码转化为实时网站：

- 将代码推送到 GitHub。
- 定义一个 [GitHub Action](https://docs.github.com/zh/actions)，当主分支有新代码推送时触发该操作，它会构建代码并将其放置在特定位置。
- GitHub Pages 随后通过特定网址提供这些代码。

我们鼓励大家在决定自己的构建工具链时，寻找这类互联服务。我们可以提交代码并推送到 GitHub，更新后的代码会自动触发整个构建过程。如果一切顺利，我们就能自动部署实时变更。我们需要执行的*唯一*操作就是最初的“推送”。

不过，我们确实需要设置这些步骤，现在我们就来看看。

## 构建过程

由于我们使用 Vite 进行开发，因此添加构建选项极其简单。如前所述，我们已拥有自定义脚本 `npm run build`，它能让 Vite 构建完整的生产环境，而非仅用于开发测试。这包括执行代码[压缩](/zh-CN/docs/Glossary/Minification)和[摇树优化](/zh-CN/docs/Glossary/Tree_shaking)，并清除文件名缓存。

在项目中始终定义一个 `build` 脚本是良好的最佳实践，这样我们就能依赖 `npm run build` 来执行完整的构建步骤，而无需记住每个项目的具体构建命令参数。

新构建的生产代码会被存放在一个名为 `dist` 的新目录中，该目录包含网站运行所需的*所有*文件，你可以将其上传到服务器上。

不过，手动完成这一步并不是我们的最终目的——我们想要的是自动构建，并将 `dist` 目录中的结果实时部署到网站上。

## 将更改提交至 GitHub

本节将帮助你将代码存储到 git 仓库，但它与 git 教程相去甚远。网络上有很多很棒的教程和书籍，我们的 [Git 和 GitHub](/zh-CN/docs/Learn_web_development/Core/Version_control) 页面也是一个很好的开始。

前面我们将工作目录初始化为 git 工作目录。运行以下命令即可快速验证：

```bash
git status
```

你应该会得到一份状态报告，其中包括哪些文件正在被跟踪，哪些文件被暂存……所有这些都是 git 语法的一部分。如果出现 `fatal: not a git repository` 错误，说明工作目录不是 git 工作目录，需要使用 `git init` 初始化 git。

现在我们有三项任务：

- 将我们所做的改动添加到暂存区（git 提交文件的地方）。
- 将修改提交到仓库。
- 把修改推送到 GitHub。

1. 要添加改动，运行以下命令：

   ```bash
   git add .
   ```

   注意末尾的句号，它的意思是“此目录中的所有内容”。`git add .` 命令有些“粗暴”——它会一次性添加所有本地改动。如果你想更精确地控制添加内容，可以使用 `git add -p` 进行交互式处理，或使用 `git add path/to/file` 添加单个文件。

2. 目前所有的代码已经暂存，可以提交了；运行以下命令：

   ```bash
   git commit -m '提交初始代码'
   ```

   > [!NOTE]
   > 尽管可以随意书写提交内容，但网上还是有一些关于如何写好提交信息的有用提示。保持短小、简洁和描述性，以便清楚地描述更改的内容。

3. 最后，需要推送代码至 GitHub 托管的仓库。现在我们就来这样做。

   在 GitHub 中，访问 <https://github.com/new> 并创建托管自己代码的仓库。

4. 给你的仓库取一个简短、好记的名字，不要有空格（用连字符分隔单词）和描述，然后点击页面底部的 _Create repository_。

   现在，你应该有一个指向你新的 GitHub 仓库的“远程”URL 地址。

   ![GitHub 截图显示了可用于将代码部署到 GitHub 仓库的远程 URL](github-quick-setup.png)

5. 在推送本地 Git 仓库之前，需要先将该远程位置添加到本地 Git 仓库，否则 Git 将无法找到它。你需要运行结构如下的命令（暂时使用提供的 HTTPS 选项——尤其是作为 GitHub 的新用户——而不是 SSH 选项）：

   ```bash
   git remote add github https://github.com/yourname/repo-name.git
   ```

   因此，如果远程 URL 是 `https://github.com/remy/super-website.git`（如上截图所示），你的命令将是

   ```bash
   git remote add github https://github.com/remy/super-website.git
   ```

   将 URL 修改为你自己的仓库，并立即运行该命令。

   > [!NOTE]
   > 在你选择了仓库名称之后，确保你的 `vite.config.js` 文件中的 `base` 选项与你的仓库名称一致，就像[上一章](/zh-CN/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#javascript_转换)中提到的那样。否则，JavaScript 和 CSS 资源将无法正确链接。

6. 现在，我们可以将代码推送到 GitHub，请运行以下命令：

   ```bash
   git push github main
   ```

   此时，Git 会提示你输入用户名和密码，然后才允许发送推送。这是因为我们使用了 HTTPS 选项，而不是 SSH 选项，如前面的截图所示。为此，你需要输入 GitHub 用户名，如果没有开启双因素身份验证（2FA），还需要输入 GitHub 密码。我们一直鼓励你尽可能使用 2FA，但请记住，如果你使用了 2FA，你还需要使用一个“个人访问令牌”。GitHub 帮助页面有[关于如何获取个人访问令牌的出色而简单的攻略](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)。

> [!NOTE]
> 如果你有兴趣使用 SSH 选项，从而避免每次推送到 GitHub 时都要输入用户名和密码，[本教程将指导你如何操作](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh)。

最后这条命令指示 git 使用分支 `main` 将代码推送（也就是发布）到我们称之为 `github` 的“远程”位置（这是托管在 github.com 上的仓库，我们可以随便起名）。我们完全没有遇到过分支，但“main”分支是我们工作的默认位置，也是 git 的启动分支。当我们定义用于构建网站的操作（action）时，我们也会让它监听“main”分支上的更改。

> [!NOTE]
> 在 2020 年 10 月之前，GitHub 上的默认分支一直是 `master`，后因各种社会原因改为了 `main`。你应该知道，在遇到的各种项目中可能会出现这个较早的默认分支，但我们建议你在自己的项目中使用 `main`。

因此，在将项目提交到 Git 并推送到 GitHub 仓库后，工具链的下一步是定义构建操作，以便将项目部署到实时 web 环境！

## 使用 GitHub Actions 部署

GitHub Actions 如同 ESLint 配置一样，是另一个值得深入探索的领域。初次尝试往往难以完美实现，但对于“构建静态网站并部署到 GitHub Pages”这类常见任务，已有大量可直接复制粘贴的示例可供参考。可参考[使用自定义 GitHub Actions 工作流发布](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site##使用自定义-github-actions-工作流进行发布)中的指引。可查阅[我们的 GitHub Action 文件](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml)获取可运行的示例。（文件名不影响使用。）

将此文件提交到主分支后，应能在提交标题旁看到一个小绿勾：

![GitHub 截图，在提交标题后有一个绿色的对勾](build-action-pass.png)

若看到黄色圆点，表示操作正在运行；若看到红色叉号，则表示操作失败。点击图标即可查看构建操作（本例中名为“Deploy build”）的状态和日志。

稍等片刻后，访问你的 GitHub Pages 网址即可查看网站上线效果。链接格式为 `https://<你的用户名>.github.io/<仓库名称>`。本例中网址为 <https://mdn.github.io/client-toolchain-example/>。

现在进入工具链的最后一步：通过测试确保代码正常运行。

## 测试

即使在前端开发领域，测试本身也是一个庞大的课题。我将向你展示如何在项目中添加初始测试，以及如何使用测试来阻止或允许项目部署。

在进行测试时，有很多方法可以解决问题：

- 端到端测试，即访问者点击某样东西，然后发生另一件事。
- 集成测试，基本上是说“当一个代码块连接到另一个代码块时，它还能工作吗”。
- 单元测试，即测试小而具体的功能位，看它们是否完成了应该做的事情。
- [还有更多类型](https://zh.wikipedia.org/wiki/黑盒测试)。此外，请参阅我们的[跨浏览器测试模块](/zh-CN/docs/Learn_web_development/Extensions/Testing)，获取大量有用的测试信息。

请记住，测试并不局限于 JavaScript；还可以针对渲染的 DOM、用户交互、CSS 甚至页面外观运行测试。

然而，在这个项目中，我们将创建一个小型测试来检查 GitHub API 数据是否格式正确。若格式不符，测试将失败并阻止项目上线。超出本模块范围的其他操作——测试本身是一个庞大的课题，确实需要单独的模块来探讨。我们希望本节至少能让你意识到测试的必要性，并为你播下探索更多知识的种子。

测试本身并不重要，关键在于如何处理测试的失败或成功。由于我们已经编写了自定义构建操作，可以在构建前添加一个运行测试的步骤。若测试失败，构建将终止，部署也不会进行。

好消息是：由于我们使用的是 Vite，它本身就提供了优秀的集成测试工具：[Vitest](https://vitest.dev/guide/)。

让我们开始吧。

1. 安装 Vitest：

   ```bash
   npm install --save-dev vitest
   ```

2. 在 package.json 文件中，找到 `scripts` 成员，更新它使得它包含这些测试和构建命令：

   ```json
   {
     "scripts": {
       // …
       "test": "vitest"
     }
   }
   ```

   > [!NOTE]
   > 使用 Vite 搭配 Vitest 的优势在于：若采用其他测试框架，需额外添加描述测试文件转换规则的配置；而 Vitest 会自动采用 Vite 的配置。

3. 现在我们需要将测试添加到代码库中。通常，若要测试某个文件（例如 `App.jsx`）的功能，会在其旁边添加名为 `App.test.jsx` 的文件。但本次我们仅需测试数据，因此另建一个目录存放测试文件。你可以打开前一章下载的示例仓库，将其中的 `tests` 文件夹复制过来。

4. 现在要手动运行测试，我们可以在命令行中执行：

   ```bash
   npm run test
   ```

   你应该看到类似于这样的输出：

   ```plain
   > client-toolchain-example@1.0.0 test
   > vitest


   DEV  v1.6.0 /Users/joshcena/Desktop/work/Tech/projects/mdn/client-toolchain-example

   ✓ tests/api.test.js (1) 896ms
     ✓ GitHub API returns the right response 896ms

   Test Files  1 passed (1)
        Tests  1 passed (1)
     Start at  23:12:25
     Duration  1.03s (transform 15ms, setup 0ms, collect 5ms, tests 896ms, environment 0ms, prepare 38ms)


   PASS  Waiting for file changes...
         press h to show help, press q to quit
   ```

   这意味着测试通过。与 Vite 类似，它会监视文件变化，并在保存文件时自动重新运行测试。按下 <kbd>q</kbd> 即可退出。

5. 我们仍需将测试与构建操作关联，确保测试失败时阻塞构建流程。请打开 `.github/workflows/github-pages.yml` 文件（或为构建操作命名的文件），在执行 `npm run build` 的步骤之前添加以下操作：

   ```yaml
   - name: Install deps
     run: npm ci

   # 添加此配置
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   这将在构建步骤之前运行测试。如果测试失败，构建将失败，部署将不会发生。

6. 需要使用与之前类似的命令，将新代码上传到 GitHub：

   ```bash
   git add .
   git commit -m '添加测试'
   git push github main
   ```

   在某些情况下，你可能想测试构建代码的结果（因为这并不完全是我们编写的原始代码），所以测试可能需要在构建命令之后运行。在开发自己的项目时，你需要考虑所有这些不同的方面。

最后，在推送一分钟左右后，GitHub Pages 将部署项目更新。但前提是它必须通过前面介绍的测试。

## 总结

以上就是我们的案例研究示例，也是本模块的全部内容！希望对你有所帮助。虽然要成为客户端工具专家还有很长的路要走，但我们希望本模块能让你迈出了解客户端工具的重要第一步，并有信心学习更多知识和尝试新事物。

让我们来总结一下工具链的所有部分：

- 代码质量和维护由 ESLint 和 Prettier 负责。通过 `npm install --dev eslint prettier eslint-plugin-react`（由于本项目使用了 React，因此需要 ESLint 插件），这些工具会作为 `devDependencies` 添加到项目中。
- 代码质量工具会读取两个配置文件：`.eslintrc` 和 `.prettierrc`。
- 在开发过程中，我们持续通过 npm 添加依赖项。Vite 开发服务器在后台运行，实时监听代码变更并自动构建源文件。
- 部署通过将更改推送到 GitHub（“main”分支）来完成，这将触发使用 GitHub Actions 进行构建和部署以发布项目。对于我们的实例，该 URL 为 <https://mdn.github.io/client-toolchain-example/>；你将拥有自己的唯一 URL。
- 我们还设计了一个简单测试，当 GitHub API 数据源未能提供正确数据格式时，该测试将阻止网站的构建与部署。

对于那些想要挑战自己的人来说，不妨考虑一下能否优化这一工具链的某些部分。你可以问自己一些问题

- 能否仅提取我们所需的 plotly.js 功能？这将减少 JavaScript 包的大小。
- 也许你想添加其他工具，比如用于类型检查的 TypeScript，或者用于 CSS 代码检查的 stylelint？
- 能否将 React 换成[更小的](https://preactjs.com/)依赖？
- 能否添加更多测试来防止糟糕的构建部署，例如[性能审核](https://developer.chrome.google.cn/docs/lighthouse/performance/performance-scoring)？
- 能否设置一个通知，令你及时得知部署成功与否？

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
