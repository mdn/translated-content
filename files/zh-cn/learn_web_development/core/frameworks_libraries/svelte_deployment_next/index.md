---
title: 部署以及下一步
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next
l10n:
  sourceCommit: e769461724eef53106e9e44656d95b99c4d520e5
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

在上一篇文章中，我们了解了 Svelte 对 TypeScript 的支持，以及如何使用它使应用程序更加健壮。在本文中，我们将学习如何部署应用程序并将其发布到在线环境，并分享一些你应该继续使用的资源，以继续你的 Svelte 学习之旅。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        <p>
          建议你熟悉核心的
          <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a
           href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和
          <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语法，并了解<a
           href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >终端/命令行</a
          >的知识。
        </p>
        <p>
          你需要安装了 Node.js 和 npm 的终端，以便编译和构建你的应用程序。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何为生产环境准备 Svelte 应用程序，并了解接下来应该访问哪些学习资源。
      </td>
    </tr>
  </tbody>
</table>

## 和我们一起编写代码

### Git

使用以下命令克隆 GitHub 仓库（如果尚未进行）：

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

然后进入当前应用程序状态的目录：

```bash
cd mdn-svelte-tutorial/08-next-steps
```

或直接下载文件夹的内容：

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

记得运行 `npm install && npm run dev` 来以开发模式启动应用程序。

## 编译我们的应用程序

到目前为止，我们一直在使用 `npm run dev` 命令以开发模式运行应用程序。正如我们之前所学习的，这个命令会告诉 Svelte，将我们的组件和 JavaScript 文件编译成 `public/build/bundle.js` 文件，将组件的所有 CSS 部分编译成 `public/build/bundle.css` 文件。它还会启动开发服务器并监视变化，当发生文件更改时重新编译应用程序并刷新页面。

生成的 `bundle.js` 和 `bundle.css` 文件大致如下（文件大小在左侧）：

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

要为生产环境编译我们的应用程序，我们需要运行 `npm run build` 命令。在这种情况下，Svelte 不会启动 Web 服务器或持续监视变化。但它会使用 [terser](https://terser.org/) 来最小化并压缩我们的 JavaScript 文件。

因此，在运行 `npm run build` 后，生成的 `bundle.js` 和 `bundle.css` 文件将更像这样：

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

现在尝试在应用程序的根目录中运行 `npm run build`。你可能会收到警告，但你可以暂时忽略它。

现在我们整个应用程序只有 21 KB——在压缩后只有 8.3 KB。没有需要下载、解析、执行和保持在内存中运行的额外运行时或依赖项。Svelte 分析了我们的组件并将代码编译为纯 JavaScript。

## Svelte 编译过程的内部原理

默认情况下，如果你使用 `npx degit sveltejs/template my-svelte-project` 来创建一个新的应用程序，Svelte 将使用 [rollup](https://rollupjs.org/) 来打包模块。

> [!NOTE]
> 也有一个官方的模板使用 [webpack](https://webpack.js.org/)，还有许多[由社区维护的插件](https://github.com/sveltejs/integrations#bundler-plugins)适用于其他的打包工具。

在 `package.json` 文件中，你可以看到 `build` 和 `dev` 脚本只是调用了 rollup：

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

在 `dev` 脚本中，我们传递了 `-w` 参数，该参数告诉 rollup 监视文件变化并在文件更改时重新构建。

查看 `rollup.config.js` 文件，我们可以看到 Svelte 编译器只是 rollup 的一个插件：

```js
import svelte from 'rollup-plugin-svelte';
// …
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      // 在非生产环境中启用运行时检查
      dev: !production,
      // 将所有组件的 CSS 提取到一个单独的文件中
      // 这样可以提高性能
      css: (css) => {
        css.write('public/build/bundle.css');
      }
    }),
```

在同一个文件中，你还会看到 rollup 如何在生产模式下最小化我们的脚本，以及在开发模式下启动本地服务器：

```js
    // 在开发模式下，在生成 bundle 后调用 `npm run start`
    !production && serve(),

    // 监视 `public` 目录，并在非生产环境下刷新浏览器
    !production && livereload('public'),

    // 如果我们正在构建生产环境（npm run build
    // 而不是 npm run dev），则进行代码压缩
    production && terser()
  ],
```

有[许多适用于 rollup 的插件](https://github.com/rollup/awesome)，可以让你自定义其行为。有一个特别有用的插件（也是由 Svelte 团队维护），叫做 [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)，它可以预处理 Svelte 文件中的许多种不同的语言，如 PostCSS、SCSS、Less、CoffeeScript、SASS 和 TypeScript。

## 部署你的 Svelte 应用程序

从 Web 服务器的角度来看，Svelte 应用程序只是一堆 HTML、CSS 和 JavaScript 文件。你只需要一个能够提供静态文件的 Web 服务器，就可以运行 Svelte 应用程序，这意味着你有很多选择。让我们来看几个例子。

> [!NOTE]
> 下面的内容不仅适用于 Svelte 应用程序，还适用于任何需要构建步骤的客户端静态网站。

### 使用 Vercel 进行部署

部署 Svelte 应用程序的方式中，其中最简单的一种是使用 [Vercel](https://vercel.com/home)。Vercel 是一个专门为静态站点定制的云平台，它对大多数常见的前端工具都有开箱即用的支持，其中包括 Svelte。

要部署应用程序，请按照以下步骤进行操作。

1. [在 Vercel 上注册一个账户](https://vercel.com/signup)。
2. 进入你的应用程序的根目录，并运行 `npx vercel`；第一次运行时，系统会提示你输入电子邮件地址，并按照发送到该地址的电子邮件中的步骤进行操作，以确保安全性。
3. 再次运行 `npx vercel`，系统会提示你回答一些问题，如下所示：

   ```bash
   npx vercel
   ```

   ```plain
   Vercel CLI 19.1.2
   ? Set up and deploy "./mdn-svelte-tutorial"? [Y/n] y
   ? Which scope do you want to deploy to? opensas
   ? Link to existing project? [y/N] n
   ? What's your project's name? mdn-svelte-tutorial
   ? In which directory is your code located? ./
   Auto-detected Project Settings (Svelte):
   - Build Command: `npm run build` or `rollup -c`
   - Output Directory: public
   - Development Command: sirv public --single --dev --port $PORT
   ? Want to override the settings? [y/N] n
      Linked to opensas/mdn-svelte-tutorial (created .vercel)
      Inspect: https://vercel.com/opensas/mdn-svelte-tutorial/[...] [1s]
   ✅  Production: https://mdn-svelte-tutorial.vercel.app [copied to clipboard] [19s]
      Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
      To change the domain or build command, go to https://zeit.co/opensas/mdn-svelte-tutorial/settings
   ```

4. 接受所有默认设置，这没有任何问题。
5. 当部署完成后，在浏览器中打开“生产环境”URL，你会看到已经部署的应用！

你还可以从 [GitHub](https://github.com/)、[GitLab](https://about.gitlab.com/) 或 [BitBucket](https://bitbucket.org/product) [导入 Svelte git 项目](https://vercel.com/import/svelte)到 Vercel 中。

> [!NOTE]
> 你可以通过 `npm i -g vercel` 全局安装 Vercel，这样你就不必使用 `npx` 来运行它了。

### 自动部署到 GitLab Pages

对于托管静态文件，有多种在线服务允许你在每次推送代码到 git 仓库时，自动部署你的网站。大多数服务都涉及设置一个部署流水线，该流水线在每次 `git push` 时触发，负责构建和部署你的网站。

我们将把我们的待办事项应用部署到 [GitLab Pages](https://about.gitlab.com/stages-devops-lifecycle/pages/)，借此来演示这一点。

1. 首先，你需要[在 GitLab 注册](https://gitlab.com/users/sign_up)，然后[创建一个新项目](https://gitlab.com/projects/new)。给你的新项目取一个简短、简单的名称，比如“mdn-svelte-todo”。你将获得指向你的新 GitLab 存储库的远程 URL，例如 `git@gitlab.com:[你的用户名]/[你的项目名].git`。
2. 在开始上传内容到你的 git 存储库之前，最好添加一个 `.gitignore` 文件来告诉 git 哪些文件应该排除在源代码控制之外。在我们的例子中，我们将在你本地项目的根文件夹中创建 `.gitignore` 文件，来排除“node_modules”目录中的内容，文件内容如下：

   ```bash
   node_modules/
   ```

3. 现在让我们回到 GitLab。在创建新仓库后，GitLab 将向你打招呼，并解释了上传现有文件的不同选项。按照 _Push an existing folder_（推送现有文件夹）标题下的步骤进行操作：

   ```bash
   cd your_root_directory # 进入项目的根文件夹
   git init
   git remote add origin https://gitlab.com/[你的用户名]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > 你可以使用 [git 协议](https://git-scm.com/book/zh/v2/服务器上的-Git-协议#_git_协议)替代 `https`，它更快速，而且无需每次访问远程仓库时输入用户名和密码。要使用 git 协议，你需要[创建一个 SSH 密钥对](https://docs.gitlab.cn/jh/user/ssh.html#生成-ssh-密钥对)。你的远程仓库 URL 将是这样的：`git@gitlab.com:[你的用户名]/mdn-svelte-todo.git`。

按照以上步骤初始化本地 git 仓库，然后将远程仓库设置为 GitLab 上的仓库，接下来将所有文件提交到本地 git 仓库，然后将它们推送到 GitLab 上的远程仓库。

GitLab 使用名为 GitLab CI/CD 的内置工具来构建你的网站并将其发布到 GitLab Pages 服务器。GitLab CI/CD 运行的脚本序列用于完成这个任务，这些脚本是在名为 `.gitlab-ci.yml` 的文件中创建和修改的。配置文件中的一个特定作业叫做 `pages`，它让 GitLab 知道你正在部署一个 GitLab Pages 网站。

现在我们来尝试一下。

1. 在项目的根目录下创建 `.gitlab-ci.yml` 文件，并将以下内容复制进去：

   ```yaml
   image: node:latest
   pages:
     stage: deploy
     script:
       - npm install
       - npm run build
     artifacts:
       paths:
         - public
     only:
       - main
   ```

   在这里，我们告诉 GitLab 使用最新版本的 Node 镜像来构建我们的应用程序。接下来，我们声明了一个 `pages` 作业，以启用 GitLab Pages。每当我们对仓库进行推送时，GitLab 将运行 `npm install` 和 `npm run build` 来构建我们的应用程序。我们还告诉 GitLab 部署 `public` 文件夹的内容。在最后一行，我们配置 GitLab 仅在对主分支进行推送时重新部署我们的应用程序。

2. 由于我们的应用程序将在子目录发布（例如 `https://your-user.gitlab.io/mdn-svelte-todo`），我们需要使 `public/index.html` 文件中对 JavaScript 和 CSS 文件的引用变为相对路径。为了做到这一点，我们只需从 `/global.css`、`/build/bundle.css` 和 `/build/bundle.js` 的 URL 中去掉前面的斜杠（`/`），像这样：

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   现在进行这个操作。

3. 现在，我们只需要提交并推送我们的更改到 GitLab。通过运行以下命令来完成：

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

每当有作业在运行时，GitLab 将显示一个图标，显示作业的进程。单击它以检查作业的输出。

![gitlab 截图显示部署的提交，该提交添加了 gitlab ci 文件，并更改了 bundle 路径为相对路径](01-gitlab-pages-deploy.png)

你还可以从 GitLab 项目的 _CI / CD_ > _Jobs_ 菜单选项中，检查当前和之前作业的进度。

![在 gitlab 界面中显示的 gitlab ci 作业，运行了许多命令](02-gitlab-pages-job.png)

一旦 GitLab 完成构建和发布你的应用程序，该应用程序将可以通过 `https://your-user.gitlab.io/mdn-svelte-todo/` 访问；在我的例子中是 `https://opensas.gitlab.io/mdn-svelte-todo/`。你可以在 GitLab 的用户界面中检查页面的 URL，具体操作请参阅 _Settings_ > _Pages_ 菜单选项。

通过这个配置，每当你推送更改到 GitLab 仓库，应用程序将自动重建并部署到 GitLab Pages。

## 进一步了解 Svelte

在这个部分，我们将为你提供一些资源和项目，以进一步学习 Svelte。

### Svelte 文档

要深入了解 Svelte 并学习更多关于它的知识，你一定要访问 [Svelte 主页](https://svelte.dev/)。在那里，有[许多文章](https://svelte.dev/blog)解释 Svelte 的理念。如果你还没有这样做，一定要完成 [Svelte 交互式教程](https://learn.svelte.dev/)。我们已经涵盖了大部分内容，所以你不需要花费太多时间来完成它，你可以将其视为实践！

你还可以查阅 [Svelte API 文档](https://svelte.dev/docs)和可用的[示例代码](https://svelte.dev/examples/hello-world)。

要了解 Svelte 作者创建它背后的动机，你应该观看 [Rich Harris](https://twitter.com/Rich_Harris) 在 YouTube 上的 [Rethinking reactivity（重新思考响应式）](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s)演讲。他是 Svelte 的创作者，所以他对此有很多见解。你还可以在这里找到交互式幻灯片，当然，这些幻灯片是使用 Svelte 构建的。如果你喜欢这个演讲，你还可以观看 Rich Harris 在 [JSCAMP 2019](https://jscamp.tech/2019/) 上的演讲 [The Return of 'Write Less, Do More'（“写的少，做的多”的回归）](https://www.youtube.com/watch?v=BzX4aTRPzno)。

### 相关项目

还有其他与 Svelte 相关的项目值得一看：

- [Sapper](https://sapper.svelte.dev/)：由 Svelte 驱动的应用程序框架，提供服务器端渲染（SSR）、代码拆分、基于文件的路由、离线支持等功能。可以将其视为 Svelte 的 [Next.js](https://nextjs.org/)。如果你计划开发相当复杂的 Web 应用程序，一定要查看这个项目。
- [Svelte Native](https://svelte-native.technology/)：由 Svelte 驱动的移动应用程序框架。可以将其视为 Svelte 的 [React Native](https://reactnative.dev/)。
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)：官方支持的用于处理 `.svelte` 文件的 VS Code 插件，我们在我们的 [TypeScript 文章](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript)中介绍过它。

### 其他学习资源

- 在 Frontend Masters 上有一门[关于 Svelte 和 Sapper 的完整课程](https://frontendmasters.com/courses/svelte/)，由 Rich Harris 提供。
- 尽管 Svelte 是一个相对较新的项目，但网络上有很多教程和[课程](https://www.udemy.com/topic/svelte-framework/?sort=popularity)可供学习，因此很难给出推荐。
- 然而，[Svelte.js 完全指南](https://www.udemy.com/course/sveltejs-the-complete-guide/)（Svelte.js — The Complete Guide）是由 [Academind](https://academind.com/) 提供的一个非常受欢迎且评价很高的选择。
- [Svelte 手册](https://www.freecodecamp.org/news/the-svelte-handbook/)（The Svelte Handbook）是由 [Flavio Copes](https://flaviocopes.com/) 撰写的一本有用参考书，它可以帮助你学习 Svelte 的主要概念。
- 如果你喜欢阅读书籍，可以阅读[《动手实践 Svelte 与 Sapper》](https://www.manning.com/books/svelte-and-sapper-in-action)（Svelte and Sapper in Action），作者是 [Mark Volkman](https://twitter.com/mark_volkmann)，该书已于 2020 年 10 月出版，你可以在[网上免费预览](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome)。
- 如果你想更深入地了解 Svelte 编译器的内部工作原理，可以阅读 [Tan Li Hau](https://twitter.com/lihautan) 的*在你的头脑中编译 Svelte（Compile Svelte in your head）*博文。这是[第一部分](https://lihautan.com/compile-svelte-in-your-head-part-1/)、[第二部分](https://lihautan.com/compile-svelte-in-your-head-part-2/)和[第三部分](https://lihautan.com/compile-svelte-in-your-head-part-3/)。

### 与社区互动

与 Svelte 社区互动并获取支持的方式有很多：

- [svelte.dev/chat](https://discord.com/invite/yy75DKs)：Svelte 的 Discord 服务器。
- [@sveltejs](https://twitter.com/sveltejs)：官方 Twitter 账号。
- [@sveltesociety](https://twitter.com/sveltesociety)：Svelte 社区的 Twitter 账号。
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp)：社区驱动的存储库，提供解决常见问题的解决方案、技巧和最佳实践。
- [StackOverflow 上的 Svelte 相关问题](https://stackoverflow.com/questions/tagged/svelte)：在 StackOverflow 上带有 `svelte` 标签的问题。
- [Svelte Reddit 社区](https://www.reddit.com/r/sveltejs/)：Svelte 社区的讨论和内容评级网站。
- [Svelte DEV 社区](https://dev.to/t/svelte)：来自 DEV.to 社区的一系列与 Svelte 相关的技术文章和教程。

## 完成

恭喜！你已经完成了 Svelte 教程。在前面的文章中，我们从对 Svelte 一无所知到构建和部署了完整应用程序。

- 我们了解了 Svelte 的理念，以及它与其他前端框架的区别。
- 我们看到了如何为我们的网站添加动态行为，如何用组件组织我们的应用程序，并以不同的方式在它们之间共享信息。
- 我们利用了 Svelte 的响应式系统，并学习了如何避免常见的陷阱。
- 我们还了解了一些高级概念和技术，以与 DOM 元素进行交互，并使用 `use` 指令以编程方式扩展 HTML 元素的功能。
- 然后，我们学习了如何使用 store 来处理中央数据存储库，并创建了自己的自定义 store 来将应用程序数据持久化到 Web 存储中。
- 我们还简要介绍了 Svelte 的 TypeScript 支持。

在本文中，我们学习了一些零麻烦的选项，将我们的应用程序部署到生产环境，并了解了如何设置基本的流水线，在每次提交时将我们的应用程序部署到 GitLab。然后，我们为你提供了一些 Svelte 资源的列表，以便进一步学习 Svelte。

恭喜！完成本系列教程后，你应该具备一个坚实的基础，能够开始使用 Svelte 开发专业的 Web 应用程序。

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
