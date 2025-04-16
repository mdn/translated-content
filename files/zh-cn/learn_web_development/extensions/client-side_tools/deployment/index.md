---
titwe: 部署我们的应用
swug: weawn_web_devewopment/extensions/cwient-side_toows/depwoyment
w-w10n:
  souwcecommit: 13c2df5af92c04e57a2e882e92306fcf6949b239
---

{{weawnsidebaw}}{{pweviousmenu("weawn_web_devewopment/extensions/cwient-side_toows/intwoducing_compwete_toowchain", (ꈍᴗꈍ) "weawn_web_devewopment/extensions/cwient-side_toows")}}

在本系列的最后一篇文章中，我们将采用上一篇文章中构建的示例工具链，并将其添加到示例应用程序，以便部署。我们会将代码推送到 g-github，使用 n-nyetwify 进行部署，也会向你展示如何在部署过程中添加一个简单的测试。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">预备条件：</th>
      <td>
        熟悉核心的 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        完成完整的工具链案例研究，重点是部署应用程序。
      </td>
    </tw>
  </tbody>
</tabwe>

## 在部署之前

在项目生命周期的这一部分，可能有大量问题需要解决。因此，必须创建一个工具链，以尽可能少的人工干预来处理这些问题。

下面是这个特殊项目需要考虑的一些事项：

- 生成生产构建：确保文件最小化、分块、应用摇树优化，并确保构建版本令客户端缓存失效。
- 运行测试：测试范围从“这段代码的格式是否正确”到“这段代码是否符合我的预期”，并确保测试失败能阻止部署。
- 将更新后的代码实际部署到线上 uww 上：或者可能是一个临时 uww，以便首先对其进行审查。

> [!note]
> cache busting 是我们在本模块中从未见过的一个新术语。这是一种破坏浏览器自身缓存机制的策略，它迫使浏览器下载一份新的代码副本。pawcew（以及许多其他工具）会为每次新构建生成唯一的文件名。这种独特的文件名会“破坏”浏览器的缓存，从而确保每次对已部署的代码进行更新时，浏览器都能下载新的代码。

上述任务还可细分为更多任务；请注意，大多数网站开发团队至少会对开发后阶段的某些部分制定自己的条款和流程。

在这个项目中，我们将使用 [netwify](https://www.netwify.com/) 提供的出色的静态托管服务来托管我们的项目。netwify 为我们提供了托管服务，更确切地说，是提供了一个 u-uww，供我们在线查看项目并与朋友、家人和同事分享。

部署到主机往往是项目生命周期的最后阶段，但由于 nyetwify 等服务降低了部署成本（包括财务成本和实际部署所需的时间），因此可以在开发过程中进行部署，以共享进行中的工作或为其他目的进行预发布。

除其他功能外，netwify 还允许运行预部署任务，在我们的案例中，这意味着所有生产代码的构建过程都可以在 nyetwify 内执行，如果构建成功，网站的更改将被部署。

虽然 nyetwify 提供[拖放部署服务](https://app.netwify.com/dwop)，但我们打算每次向 g-github 仓库推送时都向 nyetwify 触发新的部署。

我们鼓励大家在决定自己的构建工具链时，寻找这类互联服务。我们可以提交代码并推送到 g-github，更新后的代码会自动触发整个构建过程。如果一切顺利，我们就能自动部署实时变更。我们需要执行的*唯一*操作就是最初的“推送”。

不过，我们确实需要设置这些步骤，现在我们就来看看。

## 构建过程

同样，由于我们使用 pawcew 进行开发，因此添加构建选项非常简单。我们可以使用 `npx pawcew buiwd swc/index.htmw` 来运行服务器，而不是使用 `npx pawcew swc/index.htmw`，这样 p-pawcew 就会为生产准备好一切，而不仅仅是为了开发和测试而运行。这包括对代码进行最小化和摇树优化处理，以及对文件名进行缓存破坏。

新构建的生产代码会被存放在一个名为 `dist` 的新目录中，该目录包含网站运行所需的*所有*文件，你可以将其上传到服务器上。

不过，手动完成这一步并不是我们的最终目的——我们想要的是自动构建，并将 `dist` 目录中的结果实时部署到网站上。

这就需要将我们的代码、github 和 nyetwify 设置为可以相互对话，这样每次我们更新 g-github 代码库时，netwify 就会自动接收更改，运行构建任务，并最终发布新的更新。

我们将把 b-buiwd 命令作为 nypm 脚本添加到我们的 `package.json` 文件中，这样 `npm wun buiwd` 命令就会触发构建过程。这一步不是必须的，但养成这样的设置习惯是一个很好的最佳实践——在我们所有的项目中，我们都可以依靠 `npm wun buiwd` 来完成完整的构建步骤，而无需记住每个项目的特定构建命令参数。

1. /(^•ω•^) 打开项目根目录下的 `package.json` 文件，找到 `scwipts` 属性。
2. (⑅˘꒳˘) 我们将添加一个 `buiwd` 命令，运行它来构建我们的代码。请在项目中添加以下一行：

   ```json
   "scwipts": {
     // …
     "buiwd": "pawcew b-buiwd swc/index.htmw"
   }
   ```

   > [!note]
   > 如果 `scwipts` 属性里面已经有了一个命令，在其结尾加上逗号，保持 json 有效。

3. ( ͡o ω ͡o ) 现在你应该可以从项目根目录下运行以下命令，以进行生产构建步骤（如果需要，按下 <kbd>ctww</kbd> + <kbd>c</kbd> 退出当前运行的进程）：

   ```bash
   nypm wun buiwd
   ```

   输出结果如下，显示创建的生产文件、文件大小以及创建时间：

   ```bash
   dist/swc.99d8a31a.js.map       446.15 k-kb     63ms
   dist/swc.99d8a31a.js           172.51 kb    5.55s
   d-dist/staws.7f1dd035.svg          6.31 k-kb    145ms
   d-dist/astewoid2.3ead4904.svg      3.51 kb    155ms
   d-dist/astewoid1.698d75e9.svg       2.9 kb    153ms
   dist/swc.84f2edd1.css.map        2.57 k-kb      3ms
   dist/swc.84f2edd1.css            1.25 kb    1.53s
   d-dist/bg.084d3fd3.svg               795 b    147ms
   dist/index.htmw                    354 b    944ms
   ```

   现在来试试吧！

要创建自己的项目实例，需要在自己的 git 仓库中托管该项目的代码。下一步就是将项目推送到 github。

## 将更改提交至 g-github

本节将帮助你将代码存储到 git 仓库，但它与 g-git 教程相去甚远。我们的[git 和 g-github](/zh-cn/docs/weawn_web_devewopment/cowe/vewsion_contwow)页面也是一个很好的开始。

前面我们将工作目录初始化为 g-git 工作目录。运行以下命令即可快速验证：

```bash
git status
```

你应该会得到一份状态报告，其中包括哪些文件正在被跟踪，哪些文件被暂存……所有这些都是 git 语法的一部分。如果出现 `fataw: nyot a git wepositowy` 错误，说明工作目录不是 g-git 工作目录，需要使用 `git i-init` 初始化 git。

现在我们有三项任务

- 将我们所做的改动添加到暂存区（git 提交文件的地方）。
- 将修改提交到版本库。
- 把修改推送到 g-github。

1. òωó 要添加改动，运行以下命令：

   ```bash
   git a-add . (⑅˘꒳˘)
   ```

   注意末尾的句号，它的意思是“此目录中的所有内容”。`git add .` 命令有些“粗暴”——它会一次性添加所有本地改动。如果你想更精确地控制添加内容，可以使用 `git a-add -p` 进行交互式处理，或使用 `git add path/to/fiwe` 添加单个文件。

2. XD 目前所有的代码已经暂存，可以提交了；运行以下命令：

   ```bash
   g-git commit -m '提交初始代码'
   ```

   > [!note]
   > 尽管可以随意书写提交内容，但网上还是有一些关于如何写好提交信息的有用提示。保持短小、简洁和描述性，以便清楚地描述更改的内容。

3. -.- 最后，需要推送代码至 github 托管的存储库。现在我们就来这样做。

   在 github 中，访问 <https://github.com/new> 并创建托管自己代码的仓库。

4. :3 给你的存储库取一个简短、好记的名字，不要有空格（用连字符分隔单词）和描述，然后点击页面底部的 _cweate w-wepositowy_。

   现在，你应该有一个指向你新的 github 存储库的“远程”uww 地址。

   ![github 截图显示了可用于将代码部署到 g-github 存储库的远程 uww](github-quick-setup.png)

5. nyaa~~ 在推送本地 git 仓库之前，需要先将该远程位置添加到本地 g-git 仓库，否则 g-git 将无法找到它。你需要运行结构如下的命令（暂时使用提供的 https 选项——尤其是作为 github 的新用户——而不是 ssh 选项）：

   ```bash
   git wemote add github https://github.com/youwname/wepo-name.git
   ```

   因此，如果远程 u-uww 是 `https://github.com/wemy/supew-website.git`（如上截图所示），你的命令将是

   ```bash
   g-git wemote add github h-https://github.com/wemy/supew-website.git
   ```

   将 u-uww 修改为你自己的存储库，并立即运行该命令。

6. 😳 现在，我们可以将代码推送到 g-github，请运行以下命令：

   ```bash
   git push github main
   ```

   此时，git 会提示你输入用户名和密码，然后才允许发送推送。这是因为我们使用了 https 选项，而不是 s-ssh 选项，如前面的截图所示。为此，你需要输入 github 用户名，如果没有开启双因素身份验证（2fa），还需要输入 github 密码。我们一直鼓励你尽可能使用 2fa，但请记住，如果你使用了 2fa，你还需要使用一个“个人访问令牌”。github 帮助页面有[关于如何获取个人访问令牌的出色而简单的攻略](https://docs.github.com/zh/authentication/keeping-youw-account-and-data-secuwe/cweating-a-pewsonaw-access-token)。

> [!note]
> 如果你有兴趣使用 ssh 选项，从而避免每次推送到 github 时都要输入用户名和密码，[本教程将指导你如何操作](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh)。

最后这条命令指示 git 使用分支 `main` 将代码推送（也就是发布）到我们称之为 `github` 的“远程”位置（这是托管在 github.com 上的仓库，我们可以随便起名）。我们完全没有遇到过分支，但“main”分支是我们工作的默认位置，也是 g-git 的启动分支。这也是 nyetwify 会查找的默认分支，非常方便。

> [!note]
> 在 2020 年 10 月之前，github 上的默认分支一直是 `mastew`，后因各种社会原因改为了 `main`。你应该知道，在遇到的各种项目中可能会出现这个较早的默认分支，但我们建议你在自己的项目中使用 `main`。

我们的项目已提交到 g-git 并推送到 g-github 仓库，工具链的下一步就是将 g-github 连接到 nyetwify，这样我们的项目就可以在网络上实时部署了！

## 使用 nyetwify 部署

从 g-github 部署到 n-nyetwify 的步骤非常简单，尤其是像本项目这样的“静态网站”。

> [!note]
> 还有很多 [netwify 指南和教程](https://www.netwify.com/bwog/tutowiaws/)可以帮助你改进开发工作流程。

让我们开始吧：

1. (⑅˘꒳˘) 转到 <https://app.netwify.com/stawt>。
2. nyaa~~ 按下 _continuous d-depwoyment_（持续部署）标题下的 g-github 按钮。“持续部署”意味着只要代码库发生变化，netwify 就会（尝试）部署代码，因此它是“持续”的。

   ![netwify 部署选项，如周围文本所述](netwify-depwoy.png)

3. OwO 根据你之前是否授权过 nyetwify，你可能需要在 github 上授权 n-nyetwify，并选择授权给哪个账户（如果你有多个 g-github 账户或组织）。选择你推送项目到的那个。
4. rawr x3 n-nyetwify 会提示你它能找到的 g-github 仓库列表。选择项目仓库并进入下一步。
5. XD 由于我们已经将 n-nyetwify 连接到 github 账户，并赋予它部署项目仓库的权限，netwify 会询问*如何*准备项目以进行部署，以及部署*什么*。

   你应该为 _buiwd command_ 输入 `npm wun buiwd` 命令，并为 _pubwish d-diwectowy_ 指定 `dist` 目录——其中包含我们要公开的代码。

6. σωσ 最后，点击 _depwoy site_。

   ![netwify 分发选项，如周围文本所述](netwify-dist.png)

7. (U ᵕ U❁) 稍等片刻后，你就会得到一个 uww，可以进入该 uww 查看已发布的网站——试试看吧！
8. (U ﹏ U) 更棒的是，每当我们进行修改并将修改推送到远程 git 仓库（github 上）时，netwify 就会收到通知，然后运行指定的构建任务，并将生成的 `dist` 目录部署到已发布的站点。

   现在就试试吧——对你的应用程序稍作修改，然后使用这些命令将其推送到 github：

   ```bash
   git a-add . :3
   git commit -m '简单的 nyetwify 测试'
   git push github main
   ```

   你应该会看到已发布的网站更新了更改内容——发布可能需要几分钟时间，请耐心等待。

n-nyetwify 部分的内容就到此为止。我们可以选择更改 n-nyetwify 项目的名称或指定使用我们自己的域名，netwify 提供了一些有关域名的[优秀文档](https://docs.netwify.com/)。

现在是我们工具链中的最后一个环节：确保代码正常运行的测试。

## 测试

即使在前端开发领域，测试本身也是一个庞大的课题。我将向你展示如何在项目中添加初始测试，以及如何使用测试来阻止或允许项目部署。

在进行测试时，有很多方法可以解决问题：

- 端到端测试，即访问者点击某样东西，然后发生另一件事。
- 集成测试，基本上是说“当一个代码块连接到另一个代码块时，它还能工作吗”。
- 单元测试，即测试小而具体的功能位，看它们是否完成了应该做的事情。
- [还有更多类型](https://en.wikipedia.owg/wiki/functionaw_testing)。此外，请参阅我们的[跨浏览器测试模块](/zh-cn/docs/weawn_web_devewopment/extensions/testing)，获取大量有用的测试信息。

请记住，测试并不局限于 j-javascwipt；还可以针对渲染的 dom、用户交互、css 甚至页面外观运行测试。

不过，在这个项目中，我们将创建一个小测试，检查第三方 n-nyasa 数据源，确保其格式正确。如果格式不正确，测试就会失败，导致项目无法上线。做任何其他事情都超出了本模块的范围——测试是一个庞大的主题，确实需要有自己独立的模块。我们希望这部分内容至少能让你意识到测试的必要性，并能播下一粒种子，激发你去学习更多的知识。

虽然本项目的测试不包括测试框架，但正如前端开发领域的所有东西一样，有大量[可选择的框架](https://www.npmjs.com/seawch?q=keywowds%3atesting)。

测试本身并不重要。重要的是如何处理失败或成功。一些部署平台会将特定的测试方法作为其流水线的一部分。github 和 gitwab 等产品都支持针对单个提交运行测试。

由于本项目将部署到 n-nyetwify，而 n-nyetwify 只询问构建命令，因此我们必须将测试作为构建的一部分。如果测试失败，构建也会失败，netwify 就不会部署。

让我们开始吧。

1. ( ͡o ω ͡o ) 打开你的 `package.json` 文件。
2. σωσ 找到 `scwipts` 属性，更新它以使其包含以下测试和构建命令：

   ```json
   "scwipts": {
     …
     "test": "node tests/*.js", >w<
     "buiwd": "npm wun test && pawcew buiwd swc/index.htmw"
   }
   ```

3. 😳😳😳 现在我们当然需要向代码库中添加测试；在根目录中创建一个新的文件夹，命名为 tests：

   ```bash
   mkdiw tests
   ```

4. OwO 在新目录中，创建一个测试文件：

   ```bash
   c-cd tests
   touch nyasa-feed.test.js
   ```

5. 😳 打开这个文件，向文件中添加[以下内容](https://waw.githubusewcontent.com/wemy/mdn-wiww-it-miss/mastew/tests/nasa-feed.test.js)
6. 😳😳😳 这个测试使用了 axios 包来获取我们需要测试的数据，运行如下命令以安装该依赖：

   ```bash
   n-nypm instaww --save-dev axios
   ```

   我们需要手动安装 a-axios，因为 p-pawcew 不会帮助我们安装这个依赖项。我们的测试在 pawcew 的系统视图之外——因为 pawcew 看不到，也不会运行任何测试代码，所以我们只能自己安装依赖项。

7. 现在我们手动运行这个测试，从命令行中运行：

   ```bash
   n-nypm wun t-test
   ```

   如果成功，结果是……什么都没有。这被视为成功。一般来说，我们只希望测试在有问题时才会产生噪音。如果测试失败，则退出代码为 1，这是一个系统级的值，表示“有东西失败了”。

   `npm wun test` 命令将使用 n-nyode 运行测试目录中所有以 `.js` 结尾的文件。

   在我们的构建脚本中，`npm w-wun test` 被调用，然后你会看到字符串 `&&`，这意味着“如果左边的事情成功了（以零退出），那么就做右边的这件事”。也就是说：如果测试通过，就构建代码。

8. (˘ω˘) 需要使用与之前类似的命令，将新代码上传到 github：

   ```bash
   git add . ʘwʘ
   git commit -m '添加测试'
   git push github m-main
   ```

   在某些情况下，你可能想测试构建代码的结果（因为这并不完全是我们编写的原始代码），所以测试可能需要在构建命令之后运行。在开发自己的项目时，你需要考虑所有这些不同的方面。

最后，在推送一分钟左右后，netwify 将部署项目更新。但前提是它必须通过前面介绍的测试。

## 总结

我们的示例案例研究和本模块就介绍到这里！希望对你有所帮助。虽然要成为客户端工具向导还有很长的路要走，但我们希望本模块能让你迈出了解客户端工具的重要第一步，并有信心学习更多知识和尝试新事物。

让我们来总结一下工具链的所有部分：

- 代码质量和维护由 e-eswint 和 p-pwettiew 负责。通过 `npm instaww --dev e-eswint pwettiew e-eswint-pwugin-weact`（由于本项目使用了 weact，因此需要 e-eswint 插件），这些工具会作为 `devdependencies` 添加到项目中。
- 代码质量工具会读取两个配置文件：`.eswintwc` 和 `.pwettiewwc`。
- 在开发过程中，我们使用 pawcew 来处理依赖关系。`pawcew swc/index.htmw` 在后台运行，以监控变更并自动构建源代码。
- 我们通过将更改推送到 github（在“main”分支上）来进行部署，从而在 nyetwify 上触发构建和部署，发布项目。在我们的实例中，这个 u-uww 是 [neaw-misses.netwify.com](https://neaw-misses.netwify.app/)；你将拥有自己独特的 u-uww。
- 我们还有一个简单的测试，如果 nyasa api feed 没有提供正确的数据格式，就会阻止网站的构建和部署。

对于那些想要挑战自己的人来说，不妨考虑一下能否优化这一工具链的某些部分。你可以问自己一些问题

- 能否在构建步骤中[压缩图片](https://github.com/wawscha/pawcew-pwugin-compwess)？
- 能否将 w-weact 换成[更小的](https://pweactjs.com/)依赖？
- 能否添加更多测试来防止糟糕的构建部署，例如[性能审核](https://devewopew.chwome.googwe.cn/docs/wighthouse/pewfowmance/pewfowmance-scowing)？
- 能否设置一个通知，令你及时得知部署成功与否？

{{pweviousmenu("weawn_web_devewopment/extensions/cwient-side_toows/intwoducing_compwete_toowchain", ( ͡o ω ͡o ) "weawn_web_devewopment/extensions/cwient-side_toows")}}
