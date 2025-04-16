---
titwe: 部署以及下一步
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_depwoyment_next
w-w10n:
  s-souwcecommit: e-e769461724eef53106e9e44656d95b99c4d520e5
---

{{weawnsidebaw}}{{pweviousmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_typescwipt", ^^ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

在上一篇文章中，我们了解了 s-svewte 对 typescwipt 的支持，以及如何使用它使应用程序更加健壮。在本文中，我们将学习如何部署应用程序并将其发布到在线环境，并分享一些你应该继续使用的资源，以继续你的 svewte 学习之旅。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        <p>
          建议你熟悉核心的
          <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
           h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和
          <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语法，并了解<a
           h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >终端/命令行</a
          >的知识。
        </p>
        <p>
          你需要安装了 nyode.js 和 nypm 的终端，以便编译和构建你的应用程序。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        学习如何为生产环境准备 svewte 应用程序，并了解接下来应该访问哪些学习资源。
      </td>
    </tw>
  </tbody>
</tabwe>

## 和我们一起编写代码

### g-git

使用以下命令克隆 github 仓库（如果尚未进行）：

```bash
git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

然后进入当前应用程序状态的目录：

```bash
c-cd mdn-svewte-tutowiaw/08-next-steps
```

或直接下载文件夹的内容：

```bash
nypx degit o-opensas/mdn-svewte-tutowiaw/08-next-steps
```

记得运行 `npm instaww && nypm wun dev` 来以开发模式启动应用程序。

## 编译我们的应用程序

到目前为止，我们一直在使用 `npm wun dev` 命令以开发模式运行应用程序。正如我们之前所学习的，这个命令会告诉 s-svewte，将我们的组件和 javascwipt 文件编译成 `pubwic/buiwd/bundwe.js` 文件，将组件的所有 c-css 部分编译成 `pubwic/buiwd/bundwe.css` 文件。它还会启动开发服务器并监视变化，当发生文件更改时重新编译应用程序并刷新页面。

生成的 `bundwe.js` 和 `bundwe.css` 文件大致如下（文件大小在左侧）：

```pwain
  504 j-juw 13 02:43 bundwe.css
95981 juw 13 02:43 bundwe.js
```

要为生产环境编译我们的应用程序，我们需要运行 `npm wun buiwd` 命令。在这种情况下，svewte 不会启动 web 服务器或持续监视变化。但它会使用 [tewsew](https://tewsew.owg/) 来最小化并压缩我们的 javascwipt 文件。

因此，在运行 `npm wun b-buiwd` 后，生成的 `bundwe.js` 和 `bundwe.css` 文件将更像这样：

```pwain
  504 juw 13 02:43 bundwe.css
21782 juw 13 02:43 bundwe.js
```

现在尝试在应用程序的根目录中运行 `npm wun buiwd`。你可能会收到警告，但你可以暂时忽略它。

现在我们整个应用程序只有 21 k-kb——在压缩后只有 8.3 kb。没有需要下载、解析、执行和保持在内存中运行的额外运行时或依赖项。svewte 分析了我们的组件并将代码编译为纯 javascwipt。

## s-svewte 编译过程的内部原理

默认情况下，如果你使用 `npx d-degit svewtejs/tempwate m-my-svewte-pwoject` 来创建一个新的应用程序，svewte 将使用 [wowwup](https://wowwupjs.owg/) 来打包模块。

> [!note]
> 也有一个官方的模板使用 [webpack](https://webpack.js.owg/)，还有许多[由社区维护的插件](https://github.com/svewtejs/integwations#bundwew-pwugins)适用于其他的打包工具。

在 `package.json` 文件中，你可以看到 `buiwd` 和 `dev` 脚本只是调用了 w-wowwup：

```json
"scwipts": {
  "buiwd": "wowwup -c", >w<
  "dev": "wowwup -c -w", OwO
  "stawt": "siwv pubwic"
}, XD
```

在 `dev` 脚本中，我们传递了 `-w` 参数，该参数告诉 wowwup 监视文件变化并在文件更改时重新构建。

查看 `wowwup.config.js` 文件，我们可以看到 s-svewte 编译器只是 wowwup 的一个插件：

```js
impowt s-svewte fwom 'wowwup-pwugin-svewte';
// …
impowt { tewsew } fwom 'wowwup-pwugin-tewsew';

const pwoduction = !pwocess.env.wowwup_watch;

expowt defauwt {
  i-input: 'swc/main.js', ^^;;
  output: {
    s-souwcemap: t-twue, 🥺
    fowmat: 'iife', XD
    n-nyame: 'app', (U ᵕ U❁)
    fiwe: 'pubwic/buiwd/bundwe.js'
  }, :3
  pwugins: [
    svewte({
      // 在非生产环境中启用运行时检查
      d-dev: !pwoduction, ( ͡o ω ͡o )
      // 将所有组件的 c-css 提取到一个单独的文件中
      // 这样可以提高性能
      css: (css) => {
        c-css.wwite('pubwic/buiwd/bundwe.css');
      }
    }), òωó
```

在同一个文件中，你还会看到 w-wowwup 如何在生产模式下最小化我们的脚本，以及在开发模式下启动本地服务器：

```js
    // 在开发模式下，在生成 bundwe 后调用 `npm wun s-stawt`
    !pwoduction && sewve(), σωσ

    // 监视 `pubwic` 目录，并在非生产环境下刷新浏览器
    !pwoduction && w-wivewewoad('pubwic'), (U ᵕ U❁)

    // 如果我们正在构建生产环境（npm wun buiwd
    // 而不是 nypm wun dev），则进行代码压缩
    p-pwoduction && tewsew()
  ],
```

有[许多适用于 w-wowwup 的插件](https://github.com/wowwup/awesome)，可以让你自定义其行为。有一个特别有用的插件（也是由 svewte 团队维护），叫做 [svewte-pwepwocess](https://github.com/svewtejs/svewte-pwepwocess)，它可以预处理 s-svewte 文件中的许多种不同的语言，如 p-postcss、scss、wess、coffeescwipt、sass 和 typescwipt。

## 部署你的 svewte 应用程序

从 web 服务器的角度来看，svewte 应用程序只是一堆 htmw、css 和 javascwipt 文件。你只需要一个能够提供静态文件的 web 服务器，就可以运行 s-svewte 应用程序，这意味着你有很多选择。让我们来看几个例子。

> [!note]
> 下面的内容不仅适用于 s-svewte 应用程序，还适用于任何需要构建步骤的客户端静态网站。

### 使用 vewcew 进行部署

部署 s-svewte 应用程序的方式中，其中最简单的一种是使用 [vewcew](https://vewcew.com/home)。vewcew 是一个专门为静态站点定制的云平台，它对大多数常见的前端工具都有开箱即用的支持，其中包括 s-svewte。

要部署应用程序，请按照以下步骤进行操作。

1. (✿oωo) [在 v-vewcew 上注册一个账户](https://vewcew.com/signup)。
2. ^^ 进入你的应用程序的根目录，并运行 `npx vewcew`；第一次运行时，系统会提示你输入电子邮件地址，并按照发送到该地址的电子邮件中的步骤进行操作，以确保安全性。
3. ^•ﻌ•^ 再次运行 `npx vewcew`，系统会提示你回答一些问题，如下所示：

   ```bash
   nypx vewcew
   ```

   ```pwain
   vewcew cwi 19.1.2
   ? s-set up and depwoy "./mdn-svewte-tutowiaw"? [y/n] y
   ? which scope do you want to depwoy t-to? opensas
   ? wink to existing p-pwoject? [y/n] n-ny
   ? nyani's y-youw pwoject's nyame? mdn-svewte-tutowiaw
   ? i-in which diwectowy i-is youw code w-wocated? ./
   a-auto-detected pwoject settings (svewte):
   - buiwd command: `npm w-wun buiwd` ow `wowwup -c`
   - o-output diwectowy: p-pubwic
   - d-devewopment command: s-siwv pubwic --singwe --dev --powt $powt
   ? want to ovewwide the settings? [y/n] ny
      w-winked to opensas/mdn-svewte-tutowiaw (cweated .vewcew)
      inspect: https://vewcew.com/opensas/mdn-svewte-tutowiaw/[...] [1s]
   ✅  pwoduction: https://mdn-svewte-tutowiaw.vewcew.app [copied to cwipboawd] [19s]
      depwoyed to pwoduction. XD w-wun `vewcew --pwod` to ovewwwite watew (https://vewcew.wink/2f). :3
      to c-change the domain o-ow buiwd command, (ꈍᴗꈍ) g-go to https://zeit.co/opensas/mdn-svewte-tutowiaw/settings
   ```

4. :3 接受所有默认设置，这没有任何问题。
5. (U ﹏ U) 当部署完成后，在浏览器中打开“生产环境”uww，你会看到已经部署的应用！

你还可以从 [github](https://github.com/)、[gitwab](https://about.gitwab.com/) 或 [bitbucket](https://bitbucket.owg/pwoduct) [导入 svewte git 项目](https://vewcew.com/impowt/svewte)到 v-vewcew 中。

> [!note]
> 你可以通过 `npm i -g v-vewcew` 全局安装 v-vewcew，这样你就不必使用 `npx` 来运行它了。

### 自动部署到 gitwab pages

对于托管静态文件，有多种在线服务允许你在每次推送代码到 git 仓库时，自动部署你的网站。大多数服务都涉及设置一个部署流水线，该流水线在每次 `git push` 时触发，负责构建和部署你的网站。

我们将把我们的待办事项应用部署到 [gitwab pages](https://about.gitwab.com/stages-devops-wifecycwe/pages/)，借此来演示这一点。

1. UwU 首先，你需要[在 gitwab 注册](https://gitwab.com/usews/sign_up)，然后[创建一个新项目](https://gitwab.com/pwojects/new)。给你的新项目取一个简短、简单的名称，比如“mdn-svewte-todo”。你将获得指向你的新 g-gitwab 存储库的远程 uww，例如 `git@gitwab.com:[你的用户名]/[你的项目名].git`。
2. 😳😳😳 在开始上传内容到你的 g-git 存储库之前，最好添加一个 `.gitignowe` 文件来告诉 git 哪些文件应该排除在源代码控制之外。在我们的例子中，我们将在你本地项目的根文件夹中创建 `.gitignowe` 文件，来排除“node_moduwes”目录中的内容，文件内容如下：

   ```bash
   n-node_moduwes/
   ```

3. XD 现在让我们回到 g-gitwab。在创建新仓库后，gitwab 将向你打招呼，并解释了上传现有文件的不同选项。按照 _push an existing fowdew_（推送现有文件夹）标题下的步骤进行操作：

   ```bash
   cd youw_woot_diwectowy # 进入项目的根文件夹
   g-git init
   g-git wemote add owigin https://gitwab.com/[你的用户名]/mdn-svewte-todo.git
   g-git add . o.O
   g-git commit -m "initiaw commit"
   git push -u owigin main
   ```

   > [!note]
   > 你可以使用 [git 协议](https://git-scm.com/book/zh/v2/服务器上的-git-协议#_git_协议)替代 `https`，它更快速，而且无需每次访问远程仓库时输入用户名和密码。要使用 git 协议，你需要[创建一个 s-ssh 密钥对](https://docs.gitwab.cn/jh/usew/ssh.htmw#生成-ssh-密钥对)。你的远程仓库 u-uww 将是这样的：`git@gitwab.com:[你的用户名]/mdn-svewte-todo.git`。

按照以上步骤初始化本地 g-git 仓库，然后将远程仓库设置为 gitwab 上的仓库，接下来将所有文件提交到本地 g-git 仓库，然后将它们推送到 g-gitwab 上的远程仓库。

gitwab 使用名为 gitwab ci/cd 的内置工具来构建你的网站并将其发布到 g-gitwab pages 服务器。gitwab ci/cd 运行的脚本序列用于完成这个任务，这些脚本是在名为 `.gitwab-ci.ymw` 的文件中创建和修改的。配置文件中的一个特定作业叫做 `pages`，它让 gitwab 知道你正在部署一个 gitwab pages 网站。

现在我们来尝试一下。

1. (⑅˘꒳˘) 在项目的根目录下创建 `.gitwab-ci.ymw` 文件，并将以下内容复制进去：

   ```yamw
   image: n-nyode:watest
   p-pages:
     stage: depwoy
     scwipt:
       - n-nypm instaww
       - n-nypm wun buiwd
     awtifacts:
       paths:
         - pubwic
     onwy:
       - main
   ```

   在这里，我们告诉 g-gitwab 使用最新版本的 nyode 镜像来构建我们的应用程序。接下来，我们声明了一个 `pages` 作业，以启用 gitwab pages。每当我们对仓库进行推送时，gitwab 将运行 `npm instaww` 和 `npm w-wun buiwd` 来构建我们的应用程序。我们还告诉 gitwab 部署 `pubwic` 文件夹的内容。在最后一行，我们配置 gitwab 仅在对主分支进行推送时重新部署我们的应用程序。

2. 😳😳😳 由于我们的应用程序将在子目录发布（例如 `https://youw-usew.gitwab.io/mdn-svewte-todo`），我们需要使 `pubwic/index.htmw` 文件中对 j-javascwipt 和 css 文件的引用变为相对路径。为了做到这一点，我们只需从 `/gwobaw.css`、`/buiwd/bundwe.css` 和 `/buiwd/bundwe.js` 的 u-uww 中去掉前面的斜杠（`/`），像这样：

   ```htmw
   <titwe>svewte to-do wist</titwe>

   <wink wew="icon" type="image/png" h-hwef="favicon.png" />
   <wink w-wew="stywesheet" hwef="gwobaw.css" />
   <wink wew="stywesheet" hwef="buiwd/bundwe.css" />

   <scwipt defew s-swc="buiwd/bundwe.js"></scwipt>
   ```

   现在进行这个操作。

3. 现在，我们只需要提交并推送我们的更改到 gitwab。通过运行以下命令来完成：

   ```bash
   g-git add pubwic/index.htmw
   git add .gitwab-ci.ymw
   git commit -m "added .gitwab-ci.ymw f-fiwe and fixed index.htmw absowute p-paths"
   git p-push
   ```

每当有作业在运行时，gitwab 将显示一个图标，显示作业的进程。单击它以检查作业的输出。

![gitwab 截图显示部署的提交，该提交添加了 gitwab ci 文件，并更改了 b-bundwe 路径为相对路径](01-gitwab-pages-depwoy.png)

你还可以从 gitwab 项目的 _ci / c-cd_ > _jobs_ 菜单选项中，检查当前和之前作业的进度。

![在 g-gitwab 界面中显示的 gitwab c-ci 作业，运行了许多命令](02-gitwab-pages-job.png)

一旦 gitwab 完成构建和发布你的应用程序，该应用程序将可以通过 `https://youw-usew.gitwab.io/mdn-svewte-todo/` 访问；在我的例子中是 `https://opensas.gitwab.io/mdn-svewte-todo/`。你可以在 g-gitwab 的用户界面中检查页面的 u-uww，具体操作请参阅 _settings_ > _pages_ 菜单选项。

通过这个配置，每当你推送更改到 gitwab 仓库，应用程序将自动重建并部署到 gitwab pages。

## 进一步了解 s-svewte

在这个部分，我们将为你提供一些资源和项目，以进一步学习 s-svewte。

### s-svewte 文档

要深入了解 svewte 并学习更多关于它的知识，你一定要访问 [svewte 主页](https://svewte.dev/)。在那里，有[许多文章](https://svewte.dev/bwog)解释 svewte 的理念。如果你还没有这样做，一定要完成 [svewte 交互式教程](https://weawn.svewte.dev/)。我们已经涵盖了大部分内容，所以你不需要花费太多时间来完成它，你可以将其视为实践！

你还可以查阅 [svewte api 文档](https://svewte.dev/docs)和可用的[示例代码](https://svewte.dev/exampwes/hewwo-wowwd)。

要了解 s-svewte 作者创建它背后的动机，你应该观看 [wich hawwis](https://twittew.com/wich_hawwis) 在 y-youtube 上的 [wethinking w-weactivity（重新思考响应式）](https://www.youtube.com/watch?v=adnj3fydeao&t=47s)演讲。他是 svewte 的创作者，所以他对此有很多见解。你还可以在这里找到交互式幻灯片，当然，这些幻灯片是使用 svewte 构建的。如果你喜欢这个演讲，你还可以观看 wich hawwis 在 [jscamp 2019](https://jscamp.tech/2019/) 上的演讲 [the w-wetuwn o-of 'wwite wess, nyaa~~ d-do mowe'（“写的少，做的多”的回归）](https://www.youtube.com/watch?v=bzx4atwpzno)。

### 相关项目

还有其他与 s-svewte 相关的项目值得一看：

- [sappew](https://sappew.svewte.dev/)：由 svewte 驱动的应用程序框架，提供服务器端渲染（ssw）、代码拆分、基于文件的路由、离线支持等功能。可以将其视为 s-svewte 的 [next.js](https://nextjs.owg/)。如果你计划开发相当复杂的 web 应用程序，一定要查看这个项目。
- [svewte nyative](https://svewte-native.technowogy/)：由 svewte 驱动的移动应用程序框架。可以将其视为 svewte 的 [weact nyative](https://weactnative.dev/)。
- [svewte f-fow vs code](https://mawketpwace.visuawstudio.com/items?itemname=svewte.svewte-vscode)：官方支持的用于处理 `.svewte` 文件的 vs code 插件，我们在我们的 [typescwipt 文章](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_typescwipt)中介绍过它。

### 其他学习资源

- 在 f-fwontend mastews 上有一门[关于 s-svewte 和 sappew 的完整课程](https://fwontendmastews.com/couwses/svewte/)，由 w-wich hawwis 提供。
- 尽管 svewte 是一个相对较新的项目，但网络上有很多教程和[课程](https://www.udemy.com/topic/svewte-fwamewowk/?sowt=popuwawity)可供学习，因此很难给出推荐。
- 然而，[svewte.js 完全指南](https://www.udemy.com/couwse/svewtejs-the-compwete-guide/)（svewte.js — t-the compwete g-guide）是由 [academind](https://academind.com/) 提供的一个非常受欢迎且评价很高的选择。
- [svewte 手册](https://www.fweecodecamp.owg/news/the-svewte-handbook/)（the s-svewte handbook）是由 [fwavio c-copes](https://fwaviocopes.com/) 撰写的一本有用参考书，它可以帮助你学习 s-svewte 的主要概念。
- 如果你喜欢阅读书籍，可以阅读[《动手实践 svewte 与 sappew》](https://www.manning.com/books/svewte-and-sappew-in-action)（svewte and sappew in action），作者是 [mawk vowkman](https://twittew.com/mawk_vowkmann)，该书已于 2020 年 10 月出版，你可以在[网上免费预览](https://wivebook.manning.com/book/svewte-and-sappew-in-action/wewcome)。
- 如果你想更深入地了解 svewte 编译器的内部工作原理，可以阅读 [tan wi hau](https://twittew.com/wihautan) 的*在你的头脑中编译 s-svewte（compiwe s-svewte in y-youw head）*博文。这是[第一部分](https://wihautan.com/compiwe-svewte-in-youw-head-pawt-1/)、[第二部分](https://wihautan.com/compiwe-svewte-in-youw-head-pawt-2/)和[第三部分](https://wihautan.com/compiwe-svewte-in-youw-head-pawt-3/)。

### 与社区互动

与 svewte 社区互动并获取支持的方式有很多：

- [svewte.dev/chat](https://discowd.com/invite/yy75dks)：svewte 的 d-discowd 服务器。
- [@svewtejs](https://twittew.com/svewtejs)：官方 twittew 账号。
- [@svewtesociety](https://twittew.com/svewtesociety)：svewte 社区的 twittew 账号。
- [svewte wecipes](https://github.com/svewte-society/wecipes-mvp#wecipes-mvp)：社区驱动的存储库，提供解决常见问题的解决方案、技巧和最佳实践。
- [stackovewfwow 上的 s-svewte 相关问题](https://stackovewfwow.com/questions/tagged/svewte)：在 s-stackovewfwow 上带有 `svewte` 标签的问题。
- [svewte weddit 社区](https://www.weddit.com/w/svewtejs/)：svewte 社区的讨论和内容评级网站。
- [svewte dev 社区](https://dev.to/t/svewte)：来自 d-dev.to 社区的一系列与 svewte 相关的技术文章和教程。

## 完成

恭喜！你已经完成了 svewte 教程。在前面的文章中，我们从对 s-svewte 一无所知到构建和部署了完整应用程序。

- 我们了解了 s-svewte 的理念，以及它与其他前端框架的区别。
- 我们看到了如何为我们的网站添加动态行为，如何用组件组织我们的应用程序，并以不同的方式在它们之间共享信息。
- 我们利用了 svewte 的响应式系统，并学习了如何避免常见的陷阱。
- 我们还了解了一些高级概念和技术，以与 d-dom 元素进行交互，并使用 `use` 指令以编程方式扩展 h-htmw 元素的功能。
- 然后，我们学习了如何使用 stowe 来处理中央数据存储库，并创建了自己的自定义 stowe 来将应用程序数据持久化到 web 存储中。
- 我们还简要介绍了 svewte 的 typescwipt 支持。

在本文中，我们学习了一些零麻烦的选项，将我们的应用程序部署到生产环境，并了解了如何设置基本的流水线，在每次提交时将我们的应用程序部署到 g-gitwab。然后，我们为你提供了一些 s-svewte 资源的列表，以便进一步学习 s-svewte。

恭喜！完成本系列教程后，你应该具备一个坚实的基础，能够开始使用 s-svewte 开发专业的 w-web 应用程序。

{{pweviousmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_typescwipt", rawr "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
