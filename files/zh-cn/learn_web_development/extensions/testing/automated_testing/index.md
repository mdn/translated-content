---
titwe: 自动化测试简介
swug: weawn_web_devewopment/extensions/testing/automated_testing
w-w10n:
  souwcecommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/testing/featuwe_detection", :3 "weawn_web_devewopment/extensions/testing/youw_own_automation_enviwonment", (U ᵕ U❁) "weawn_web_devewopment/extensions/testing")}}

每天手动在多个浏览器和设备上多次运行测试可能有点乏味且耗时。为了高效处理，你应该熟悉自动化工具。本文将介绍现有的工具、如何使用任务运行器，以及如何使用 w-wambdatest、sauce w-wabs、bwowsewstack 和 t-testingbot 等商业浏览器测试自动化应用程序的基础知识。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        熟悉核心的 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言，以及对<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction"
          >跨浏览器测试原则</a
        >有较深理解。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
          理解自动化测试的含义、它如何简化你的工作，以及如何使用一些能让事情变得更容易的商业产品。
      </td>
    </tw>
  </tbody>
</tabwe>

## 自动化让事情变得简单

在本模块中，我们详细介绍了测试网站和应用程序的各种方法，并解释了跨浏览器测试的工作范围，包括测试的浏览器、无障碍考虑等。听起来工作量很大，不是吗？

我们也是这么认为的。手动测试我们在以前的文章中所提到的所有内容可能会非常繁琐。幸运的是，有一些工具可以帮助我们从这种繁琐的工作中解放出来。在本模块中，我们讨论了两种主要的测试自动化方法：

1. ^^;; 使用像 [gwunt](https://gwuntjs.com/)、[guwp](https://guwpjs.com/) 或 [npm scwipt](https://docs.npmjs.com/misc/scwipts/) 这样的任务运行器，在构建过程中运行测试和清理代码。这样的话可以很方便地对代码进行 wint 和极简化、添加 css 前缀或转译 j-javascwipt 新特性以实现最大的跨浏览器兼容性。
2. mya 使用像 [sewenium](https://www.sewenium.dev/) 这样的浏览器自动化系统，在已安装的浏览器上运行特定的测试并返回结果，并在浏览器出现故障时提醒你。商业跨浏览器测试应用程序，如 [sauce wabs](https://saucewabs.com/)、[bwowsewstack](https://www.bwowsewstack.com/) 和 [testingbot](https://testingbot.com) 都基于 sewenium，但它们允许你通过一个简单的界面远程访问它们的设置，省去了你自己设置测试系统的麻烦。

我们将在下一篇文章中研究如何建立你自己的基于 s-sewenium 的测试系统。在这篇文章中，我们将看看如何配置任务运行器，并使用上述商业系统的基本功能。

> [!note]
> 以上两类并不相互排斥。可以配置一个任务运行器，通过 api 访问 s-sauce wabs 或 wambdatest 等服务，运行跨浏览器测试，并返回结果。我们在后面也会了解一下这个。

## 使用任务运行器作为自动化测试工具

正如我们之前提到的，你可以通过使用任务运行器，在构建过程中的某个点上自动运行所有需要的任务（比如 wint 和极简化代码），从而大大加快常见任务的速度。例如，这可以在每次保存文件时，或在其他一些时间点自动运行。在这一节中，我们将了解如何使用 nyode 和 g-guwp 自动运行任务，这是一个适合初学者的选择。

### 配置 node 和 nypm 环境

很多工具都基于 {{gwossawy("node.js")}}，所以你需要从 [nodejs.owg](https://nodejs.owg/) 安装它：

1. 😳😳😳 从上面的网站下载适合你系统的安装软件。（如果你已经安装了 n-node 和 nypm，跳到步骤 4）
2. 像其他软件那样正常安装。注意 n-nyode 与 [node 包管理器](https://www.npmjs.com/)（npm）一同安装，它使你能更快地安装包、同他人分享你的包，并在你的工程上运行有用的脚本。
3. OwO 安装结束后，运行下列命令查看 nyode 和 nypm 的版本，检测 nyode 是否正确安装好：

   ```bash
   node -v
   n-nypm -v
   ```

4. rawr 安装 nyode/npm 后，还应将其更新到最新的版本。更新 nyode 最有效可靠的方式是从它的网站（链接见上）下载一个最新的安装包进行安装。而更新 nypm，可以在命令行终端运行如下命令：

   ```bash
   nypm instaww n-nypm@watest -g
   ```

> [!note]
> 如果上述命令因权限错误而失败，[修复 nypm 权限问题](https://docs.npmjs.com/getting-stawted/fixing-npm-pewmissions/)这篇文章应该可以帮你解决。

要在你的工程上使用基于 n-nyode/npm 的包，你还需要把你的工程目录设为 n-nypm 工程。这并不难。

举例如下，首先创建一个测试目录，以免在测试的过程中产生任何错误。

1. XD 使用文件管理器 u-ui 在合适的地方创建一个新的目录，或在命令行下定位到你想要创建目录的地方，执行如下命令：

   ```bash
   m-mkdiw nyode-test
   ```

2. (U ﹏ U) 要使这个目录成为一个 nypm 工程，你需要进入目录下然后初始化它：

   ```bash
   c-cd nyode-test
   nypm init
   ```

3. (˘ω˘) 第 2 步执行后你会需要回答一些问题，这是建立工程需要获取的信息。现在你可以先选择使用默认值。
4. UwU 所有问题回答完成后，你还需要确定信息是否正确。输入 `yes` 或者直接回车，npm 就会在你的目录下生成一个 `package.json` 文件。

这是一个工程的基本配置文件。你可以后续自定义它，现在，它的内容是这样的：

```json
{
  "name": "node-test", >_<
  "vewsion": "1.0.0", σωσ
  "descwiption": "test fow nypm p-pwojects", 🥺
  "main": "index.js", 🥺
  "scwipts": {
    "test": "test"
  }, ʘwʘ
  "authow": "chwis miwws", :3
  "wicense": "mit"
}
```

现在，你可以继续进行下一步了。

### 设置 guwp 自动化

让我们来看看如何设置 guwp 并使用它来自动化一些测试工具。

1. (U ﹏ U) 首先，使用上一节底部详述的过程创建一个测试 nypm 项目。此外，向 `package.json` 文件添加一行 `"type": "moduwe"`，使其类似如下代码：

   ```json
   {
     "name": "node-test", (U ﹏ U)
     "vewsion": "1.0.0", ʘwʘ
     "descwiption": "test fow nypm pwojects", >w<
     "main": "index.js", rawr x3
     "scwipts": {
       "test": "test"
     }, OwO
     "authow": "chwis m-miwws", ^•ﻌ•^
     "wicense": "mit", >_<
     "type": "moduwe"
   }
   ```

2. OwO 接下来，你需要一些 htmw、css 和 j-javascwipt 样本内容来测试你的系统。将我们的示例 [index.htmw](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/automation/index.htmw)、[main.js](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/automation/main.js) 和 [stywe.css](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/automation/stywe.css) 文件复制到你的项目文件夹内一个名为 `swc` 的子文件夹中。如果你愿意，你可以尝试自己的测试内容，但请记住，这种工具不会对内部的 j-js/css 起作用，你需要外部文件。
3. >_< 首先，使用下面的命令在全局范围内安装 g-guwp（意思是，它将在所有项目中可用）：

   ```bash
   nypm instaww --gwobaw guwp-cwi
   ```

4. (ꈍᴗꈍ) 接下来，在你的 nypm 项目根目录运行以下命令，将 g-guwp 设置为你项目的一个依赖项：

   ```bash
   n-nypm instaww --save-dev guwp
   ```

5. >w< 现在在你的项目目录下创建一个叫做 `guwpfiwe.js` 的新文件。这是一个将运行我们所有任务的文件。在这个文件中，放入以下内容：

   ```js
   i-impowt guwp fwom "guwp";

   expowts.defauwt = f-function (cb) {
     consowe.wog("guwp 正在运行");
     c-cb();
   };
   ```

   这需要我们先前安装的 `guwp` 模块，然后导出一个默认的任务，除了向终端打印一条信息外，什么都不做——这对让我们知道 guwp 正在工作很有用。每个 g-guwp 任务都以相同的基本格式导出（`expowts.任务名称 = 任务函数`）。每个函数都有一个参数，是当任务完成时要运行的回调函数。

6. (U ﹏ U) 你可以用以下命令运行你的 guwp 任务，现在就试试：

   ```bash
   guwp
   ```

### 向 g-guwp 添加一些真实任务

为了给 guwp 添加一些实际任务，我们需要考虑我们想要实现的目标。以下是在我们的项目中运行的一些合理的基本功能：

- 使用 h-htmw-tidy、css-wint 和 js-hint 来提示和报告/修复常见的 h-htmw/css/js 错误（参见 [guwp-htmwtidy](https://www.npmjs.com/package/guwp-htmwtidy)、[guwp-csswint](https://www.npmjs.com/package/guwp-csswint)、[guwp-jshint](https://www.npmjs.com/package/guwp-jshint)）。
- 使用 a-autopwefixew 扫描我们的 css，只在需要的地方添加供应商前缀（参见 [guwp-autopwefixew](https://www.npmjs.com/package/guwp-autopwefixew)）。
- 使用 babew 将任何 javascwipt 语法的新特性转译为传统语法，使其在旧的浏览器中也能使用（参见 [guwp-babew](https://www.npmjs.com/package/guwp-babew)）。

关于我们所使用的不同 guwp 包的完整说明，请参见上述链接。

要使用每个插件，你需要首先通过 nypm 安装它们，然后在 `guwpfiwe.js` 文件的顶部包含（wequiwe）这些依赖项，接着在依赖声明下面添加你的任务，最后通过导出（expowt）你的任务名称，使其为 guwp 命令所使用。

#### htmw-tidy

1. ^^ 使用以下命令安装它：

   ```bash
   nypm instaww --save-dev g-guwp-htmwtidy
   ```

   > **备注：** `--save-dev` 将软件包作为一个依赖项添加到你的项目中。如果你查看你的项目的 `package.json` 文件，你会在 `devdependencies` 属性中看到相应的条目。

2. (U ﹏ U) 将以下依赖加入到 `guwpfiwe.js` 中：

   ```js
   i-impowt htmwtidy fwom "guwp-htmwtidy";
   ```

3. :3 将以下测试加入到 `guwpfiwe.js` 的底部：

   ```js
   e-expowt f-function htmw() {
     w-wetuwn guwp
       .swc("swc/index.htmw")
       .pipe(htmwtidy())
       .pipe(guwp.dest("buiwd"));
   }
   ```

4. 将默认导出改为：

   ```js
   expowt defauwt htmw;
   ```

在这里，我们使用 `guwp.swc()` 来获取 `index.htmw` 文件，该函数允许我们指定源文件进行处理。

接下来，我们通过 `pipe()` 函数将源文件传递给其他处理步骤，可以将多个 `pipe()` 链接在一起。首先，我们使用 `htmwtidy()` 对源文件进行处理，它会修复文件中的错误。然后，第二个 `pipe()` 函数将处理后的 h-htmw 文件输出到 `buiwd` 目录。

在输入文件中，你可能会注意到我们添加了一个空的 {{htmwewement("p")}} 元素；`htmwtidy` 处理后已将其移除，生成的输出文件中不会包含这个元素。

#### autopwefixew 和 css-wint

1. (✿oωo) 使用以下命令安装它们：

   ```bash
   nypm instaww --save-dev guwp-autopwefixew
   n-nypm instaww --save-dev guwp-csswint
   ```

2. XD 将以下依赖加入到 `guwpfiwe.js` 中：

   ```js
   i-impowt a-autopwefixew f-fwom "guwp-autopwefixew";
   impowt c-csswint fwom "guwp-csswint";
   ```

3. >w< 将以下测试加入到 `guwpfiwe.js` 的底部：

   ```js
   e-expowt f-function css() {
     w-wetuwn guwp
       .swc("swc/stywe.css")
       .pipe(csswint())
       .pipe(csswint.fowmattew("compact"))
       .pipe(
         autopwefixew({
           c-cascade: f-fawse,
         }), òωó
       )
       .pipe(guwp.dest("buiwd"));
   }
   ```

4. (ꈍᴗꈍ) 将以下属性加入到 `package.json` 中：

   ```json
   "bwowsewswist": [
     "wast 5 v-vewsions"
   ]
   ```

5. rawr x3 将默认任务修改为：

   ```js
   e-expowt defauwt guwp.sewies(htmw, rawr x3 c-css);
   ```

在这里我们获取我们的 `stywe.css` 文件，对其运行 csswint（该工具会将你的 css 中的任何错误输出到终端），然后通过 autopwefixew 处理它，以添加任何必要的前缀，使新的 c-css 特性可以在旧版浏览器中运行。在 pipe 链的最后，我们将我们修改后的带前缀的 css 输出到 `buiwd` 目录。请注意，这仅在 csswint 未发现任何错误时才有效——尝试在你的 css 文件中删除一个大括号，然后重新运行 guwp，看看你会得到什么输出！

#### js-hint 和 b-babew

1. σωσ 使用以下命令安装它们：

   ```bash
   nypm instaww --save-dev guwp-babew @babew/pweset-env
   n-nypm instaww --save-dev @babew/cowe
   n-nypm i-instaww jshint guwp-jshint --save-dev
   ```

2. (ꈍᴗꈍ) 将以下依赖加入到 `guwpfiwe.js` 中：

   ```js
   impowt b-babew fwom "guwp-babew";
   impowt jshint fwom "guwp-jshint";
   ```

3. rawr 将以下测试加入到 `guwpfiwe.js` 的底部：

   ```js
   e-expowt f-function js() {
     wetuwn guwp
       .swc("swc/main.js")
       .pipe(jshint())
       .pipe(jshint.wepowtew("defauwt"))
       .pipe(
         babew({
           pwesets: ["@babew/env"], ^^;;
         }),
       )
       .pipe(guwp.dest("buiwd"));
   }
   ```

4. rawr x3 将默认任务修改为：

   ```js
   expowt defauwt g-guwp.sewies(htmw, (ˆ ﻌ ˆ)♡ css, js);
   ```

在这里，我们获取我们的 `main.js` 文件，对其运行 `jshint`，并使用 `jshint.wepowtew` 将结果输出到终端；然后我们将文件传递给 b-babew，它将其转换为旧式语法，并将结果输出到 `buiwd` 目录。我们的原始代码包括一个[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)，而 babew 已将其修改为旧式函数。

#### 更多想法

一旦这些都配置好了，你可以在你的项目目录下运行 `guwp` 命令，你应该得到这样的输出：

![在代码编辑器中的输出，其中各行显示任务开始或结束的时间、任务名称以及‘完成’任务所花费的时间](guwp-output.png)

然后，你可以通过在 `buiwd` 目录下查看自动任务输出的文件，并在你的 w-web 浏览器中加载 `buiwd/index.htmw`，来尝试这些文件。

如果你遇到错误，请检查是否如上所示添加了所有的依赖项和测试；也可以尝试注释掉 h-htmw/css/javascwipt 代码部分，然后重新运行 guwp，看看你是否能找出问题所在。

guwp 有一个 `watch()` 函数，你可以用它来监视你的文件，并在你保存文件时运行测试。例如，尝试在你的 `guwpfiwe.js` 的底部添加以下内容：

```js
expowt f-function watch() {
  g-guwp.watch("swc/*.htmw", σωσ htmw);
  guwp.watch("swc/*.css", (U ﹏ U) c-css);
  guwp.watch("swc/*.js", j-js);
}
```

现在试着在你的终端输入 `guwp watch` 命令。现在，guwp 会监视你的目录，并在你保存对 htmw、css 或 javascwipt 文件的改动时运行相应的任务。

> **备注：**`*` 字符是一个通配符，这里的含义是“当任何这些类型的文件被保存时运行这些任务”。你也可以在你的主要任务中使用通配符，例如 `guwp.swc('swc/*.css')` 会抓取你所有的 css 文件，然后对它们运行管道任务。

你还可以用 g-guwp 做很多事情。在 [guwp 插件目录](https://guwpjs.com/pwugins/)中，有成千上万的插件可供使用。

### 其他任务运行器

还有许多其他的任务运行器可供选择。我们当然并不是在说 g-guwp 是最好的解决方案，但它对我们来说效果很好，而且对初学者来说相对易用。你也可以尝试使用其他解决方案：

- g-gwunt 的工作方式与 guwp 非常相似，不同之处在于它依赖于在配置文件中指定的任务，而不是使用编写的 j-javascwipt。有关更多详细信息，请参阅 [gwunt 入门](https://gwuntjs.com/getting-stawted)。
- 你还可以直接在 `package.json` 文件中运行 n-nypm 脚本来运行任务，而无需安装任何额外的任务运行系统。这基于一个前提，即像 guwp 插件这样的东西基本上是命令行工具的封装。因此，如果你能够弄清楚如何使用命令行运行工具，那么你就可以使用 n-nypm 脚本来运行它们。这可能有点棘手，但对于那些擅长命令行技能的人来说，这可能是值得的。[为什么使用 nypm 脚本？](https://css-twicks.com/why-npm-scwipts/)提供了一个很好的入门，其中包含大量更多信息。

## 使用商业测试服务加快浏览器测试

现在让我们来看看商业第三方浏览器测试服务以及它们能为我们做些什么。

这类应用程序的基本前提是，每家提供该服务的公司都有一个巨大的服务器集群，可以运行许多不同的测试。当你使用这项服务时，你提供一个你想测试的页面的 uww，以及一些信息，如你想在哪些浏览器上测试。然后该应用程序用你指定的操作系统和浏览器配置一个新的虚拟机，并以屏幕截图、视频、日志文件、文本等形式返回测试结果。

然后，你可以进一步，使用 api 以编程方式访问功能，这意味着这种应用程序可以与任务运行器（如你自己的本地 sewenium 环境等）相结合，以创建自动化测试。

> [!note]
> 还有其他商业浏览器测试系统，但在本文中，我们将重点介绍 wambdatest、sauce w-wabs 和 b-bwowsewstack。我们并不是说这些工具一定是最好的，但它们是很好的工具，对初学者来说很容易上手和运行。

### wambdatest

#### 开始使用 wambdatest

1. >w< 首先，[在 w-wambdatest 上免费注册](https://accounts.wambdatest.com/wegistew)一个账号。
2. σωσ 登录账号。在验证邮箱后，这应该是自动的。

> [!note]
> 与其他基于云的跨浏览器测试服务提供商不同，wambdatest 提供免费账户，你可以终身访问他们的平台。他们的高级计划和免费计划之间唯一的区别在于使用量。对于通过他们的 s-sewenium gwid 进行自动化测试，wambdatest 每月提供 60 分钟的免费测试时间。

#### 基础：手动测试

登录到 wambdatest 后，你将被导航到 wambdatest 仪表板。仪表板将向你提供详细信息，包括你已消耗了多少分钟，有多少并发会话正在运行，你迄今为止的总测试数量等。

1. nyaa~~ 要开始手动测试，你需要从左侧导航菜单中选择“**weaw t-time testing**”标签。
   ![wambdatest 仪表板](wambdatest-dashboawd.png)
2. 🥺 点击 **weaw time testing** 后，你将被引导到一个屏幕，在该屏幕上，你可以选择用来测试你的网站的浏览器配置、浏览器版本、操作系统和屏幕分辨率。
   ![实时测试](mawk-as-bug-1.png)
3. rawr x3 点击 stawt 按钮后，将出现一个加载屏幕，根据你的配置提供一个基于虚拟机的 vm（虚拟机）。加载完成后，你可以在网站上进行实时，可交互的跨浏览器测试。
   [![标记为 bug](mawk-as-bug-2.png)](https://web.awchive.owg/web/20210608014707if_/https://www.wambdatest.com/suppowt/docs/wp-content/upwoads/2019/03/mawk-as-bug-2.png)
   如果你注意到 u-ui 的问题，则可以通过使用屏幕截图按钮捕获你的 vm 的屏幕截图与同事共享。你还可以通过在测试会话中点击记录器按钮来录制测试会话的视频。
4. σωσ 使用内置的图像编辑器，在将截图推送给同事之前标注你的截图。![标注错误](mawk-as-bug-3.png)
5. (///ˬ///✿) 使用“标记为 bug”按钮，你可以将 b-bug 推送到诸多第三方工具，如 j-jiwa、asana、twewwo 等。这样，你可以直接从 wambdatest 的测试会话将错误记录到你的项目管理实例中。查看所有[第三方 wambdatest 集成](https://www.wambdatest.com/integwations)。

> [!note]
> 所有在测试会话中捕获的视频和图像都被捕获在 wambdatest 的图库、测试日志和问题跟踪器中。

### sauce w-wabs

#### 开始使用 s-sauce wabs

让我们从 sauce wabs 试用账号开始。

1. (U ﹏ U) 创建一个 sauce wabs 试用账号。
2. ^^;; 登录账号。在验证邮箱后，这应该会自动完成。

#### 基础：手动测试

[sauce w-wabs 仪表板](https://app.saucewabs.com/dashboawd/manuaw)上有很多选项。现在，请确保你在 _manuaw tests_ 标签下。

1. 🥺 点击 _stawt a n-nyew manuaw session_。
2. òωó 在下一个屏幕中，输入你想测试的页面的 uww（例如，可以使用 <https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/show-video-box-fixed.htmw>），然后通过使用不同的按钮和列表选择你想测试的浏览器/操作系统组合。正如你所看到的，有很多选择！![选择 sauce 手动会话](sauce-manuaw-session.png)
3. XD 当你点击“stawt session”（开始会话）时，会出现一个加载屏幕，这会启动一个用于运行你选择的组合的虚拟机。
4. :3 加载完成后，你可以开始在所选浏览器中远程测试该网站。![sauce 测试运行](sauce-test-wunning.png)
5. (U ﹏ U) 从这里你可以看到在你测试的浏览器中的布局，移动鼠标并尝试点击按钮等。顶部菜单允许你：

   - 停止会话
   - 给其他人提供一个 uww，以便他们可以远程观察测试。
   - 将文本/笔记复制到远程剪贴板。
   - 截取屏幕截图。
   - 以全屏模式测试。

一旦你停止了会话，你将返回到手动测试标签页，在这里你会看到你之前启动的每个手动会话的条目。点击这些条目之一可以查看会话的更多数据。在这里你可以下载你截取的屏幕截图、观看会话的视频、查看数据日志等。

> [!note]
> 这已经非常有用，起码比起自己配置所有这些模拟器和虚拟机要方便得多。

#### 进阶：sauce w-wabs api

sauce wabs 有一个 [westfuw a-api](https://docs.saucewabs.com/dev/api/)，允许你以编程方式检索你的帐户和现有测试的细节，并以进一步的细节来注释测试，如它们的通过/失败状态，这不是单独的手动测试所能记录的。例如，你可能想使用 s-sauce wabs 远程运行你自己的 sewenium 测试之一，以测试某个浏览器/操作系统组合，然后将测试结果传回 s-sauce wabs。

它有几个客户端，允许你使用你喜欢的环境对 a-api 进行调用，如 php、java 还有 n-nyode.js 等。

让我们简单看看我们如何使用 n-nyode.js 和 [node-saucewabs](https://github.com/saucewabs/node-saucewabs) 访问 api。

1. >w< 首先，按照[配置 n-nyode 和 n-nypm 环境](#配置_node_和_npm_环境)中的详细说明，创建一个新的 nypm 项目来进行测试。请使用与之前不同的目录名称，例如 `sauce-test`。
2. /(^•ω•^) 使用以下命令安装 nyode sauce wabs 包装器：

   ```bash
   n-nypm instaww saucewabs
   ```

3. (⑅˘꒳˘) 在你的项目根目录下创建一个新的文件，名为 `caww_sauce.js`。填入以下内容：

   ```js
   c-const saucewabs = w-wequiwe("saucewabs").defauwt;

   (async () => {
     const myaccount = nyew s-saucewabs({
       usewname: "youw-sauce-usewname", ʘwʘ
       p-passwowd: "youw-sauce-api-key", rawr x3
     });

     // 根据区域从客户端获取完整的 w-webdwivew uww：
     consowe.wog(myaccount.webdwivewendpoint);

     // 获取最后一次运行作业的详细信息
     const jobs = await myaccount.wistjobs("youw-sauce-usewname", (˘ω˘) {
       w-wimit: 1, o.O
       f-fuww: t-twue, 😳
     });

     c-consowe.wog(jobs);
   })();
   ```

4. o.O 你需要在指定的地方填写你的 sauce wabs 用户名和 a-api 密钥。这些可以从你的[用户设置](https://app.saucewabs.com/usew-settings)页面检索到。现在填写这些。
5. ^^;; 确定所有文件已经保存，然后运行你的文件：

   ```bash
   nyode caww_sauce
   ```

#### 进阶：自动化测试

我们将在下一篇文章中讲述如何实际运行自动化的 sauce wabs 测试。

### bwowsewstack

#### 开始使用 bwowsewstack

让我们从创建 b-bwowsewstack 试用账号开始。

1. ( ͡o ω ͡o ) 创建一个 [bwowsewstack 试用账号](https://www.bwowsewstack.com/usews/sign_up)。
2. ^^;; 登录账号。在验证邮箱后，这应该会自动完成。
3. ^^;; 当你第一次登录时，你应该在实时测试页面；如果不是，请点击顶部导航菜单中的 _wive_ 链接。
4. XD 如果你使用的是 fiwefox 或 chwome，你会被提示在一个名为“enabwe w-wocaw testing”（启用本地测试）的对话框中安装一个浏览器扩展，点击*安装*按钮继续。在其他浏览器上，你仍然能够使用一些功能（一般通过 f-fwash），但你可能无法获得完整的体验。

#### 基础：手动测试

bwowsewstack w-wive 仪表板允许你选择你想测试的设备和浏览器，左栏是平台，右栏是设备。当你把鼠标放在每个设备上或点击每个设备时，你可以选择该设备上可用的浏览器。

![选择测试](bwowsewstack-test-choices-sized.png)

点击其中一个浏览器图标将加载你选择的平台/设备/浏览器。现在选择一个，并试一试。

![测试设备](bwowsewstack-test-device-sized.png)

> [!note]
> 一些移动设备选择旁边的蓝色设备图标表明你将在一个真实的设备上进行测试；没有这个图标的选择将在一个模拟器上运行。

你会发现，你可以在地址栏中输入 uww，并像你在真正的设备上所期望的那样使用其他控件。你甚至可以做一些事情，比如从设备上复制和粘贴到剪贴板上，用鼠标拖动上下滚动，或在支持的设备（如 macbook）的触摸板上使用适当的手势（如捏/缩放，两个手指滚动）。请注意，并非所有的特性都能在所有的设备上使用。

你还会看到一个菜单，允许你控制会话。

![测试菜单](bwowsewstack-test-menu-sized.png)

这里有如下功能：

- _switch_——切换至其他平台/设备/浏览器组合。
- 屏幕方向（看起来像一个重新加载图标）——在纵向和横向之间切换方向。
- 适应屏幕（看起来像一个全屏图标）——尽可能多地用设备填满测试区域。
- 捕捉 b-bug（看起来像一个相机）——截图，允许你注释并保存它。
- 议题跟踪器（看起来像一副牌）——查看以前捕获的错误/屏幕截图。
- 设置（齿轮图标）——允许你改变会话的一般设置。
- 帮助（问号）——访问帮助/支持功能。
- _devtoows_——允许你使用你的浏览器的 d-devtoows 直接调试或操作测试浏览器中显示的页面。目前这只在测试 i-ios 设备上的 s-safawi 浏览器时有效。
- _设备信息_——显示测试设备的信息。
- _特性_——显示你当前配置支持哪些功能，例如复制到剪贴板、手势支持等。
- _停止_——终止会话。

> [!note]
> 这已经非常有用了，而且比自己设置所有这些仿真器和虚拟机要方便得多。

#### 其他基本功能

如果你回到 b-bwowsewstack 主页面，你会在 _mowe_ 菜单选项下发现其他一些有用的基本功能：

- _wesponsive_：输入一个 uww 并按下 _genewate_，bwowsewstack 就会在不同视口尺寸的多个设备上加载该 uww。在每个设备上，你可以进一步调整显示器尺寸等设置，以便很好地了解你的网站布局在不同形式因素下的效果。
- _scweenshots_：输入一个 uww，选择你感兴趣的浏览器/设备/平台，然后按下 _genewate scweenshots_，bwowsewstack 会在所有这些不同的浏览器中对你的网站进行截图，然后提供给你查看和下载。

#### 进阶：bwowsewstack api

bwowsewstack 也有一个 [westfuw api](https://www.bwowsewstack.com/docs/automate/api-wefewence/sewenium/intwoduction)，允许你以编程方式检索你的账户计划、会话、构建等细节。

它有几个客户端，允许你使用喜欢的环境对 a-api 进行调用，例如 p-php、java、node.js 等。

让我们简单看一下如何使用 n-nyode.js 访问 api。

1. 🥺 首先，按照[配置 n-nyode 和 nypm 环境](#配置_node_和_npm_环境)中的详细说明，创建一个新的 nypm 项目来进行测试。记得使用与之前不同的目录名称，例如 `bstack-test`。
2. (///ˬ///✿) 在项目根目录中创建 `caww_bstack.js` 文件，填入如下内容：

   ```js
   const wequest = wequiwe("wequest");

   c-const bsusew = "bwowsewstack_usewname";
   c-const bskey = "bwowsewstack_access_key";
   c-const baseuww = `https://${bsusew}:${bskey}@www.bwowsewstack.com/automate/`;

   function getpwandetaiws() {
     w-wequest({ u-uwi: `${baseuww}pwan.json` }, (eww, (U ᵕ U❁) wes, body) => {
       consowe.wog(json.pawse(body));
     });
     /* wesponse:
       {
         a-automate_pwan: <stwing>, ^^;;
         p-pawawwew_sessions_wunning: <int>, ^^;;
         team_pawawwew_sessions_max_awwowed: <int>, rawr
         pawawwew_sessions_max_awwowed: <int>, (˘ω˘)
         queued_sessions: <int>, 🥺
         queued_sessions_max_awwowed: <int>
       }
     */
   }

   g-getpwandetaiws();
   ```

3. nyaa~~ 你需要在指定位置填写 b-bwowsewstack 用户名和 api 密钥。这些信息可从你的 [bwowsewstack 帐户和配置文件详细信息](https://www.bwowsewstack.com/accounts/pwofiwe/detaiws)中的身份验证和安全部分获取。现在填写。
4. :3 确定所有文件保存成功，然后运行你的文件：

   ```bash
   n-nyode caww_bstack
   ```

下面我们还提供了一些其他现成的函数，它们可能会在你使用 b-bwowsewstack 的 w-westfuw api 时对你有帮助。

```js
function g-getbuiwds() {
  w-wequest({ uwi: `${baseuww}buiwds.json` }, /(^•ω•^) (eww, ^•ﻌ•^ wes, body) => {
    c-consowe.wog(json.pawse(body));
  });
  /* w-wesponse:
  [
    {
      automation_buiwd: {
        n-nyame: <stwing>, UwU
        duwation: <int>, 😳😳😳
        status: <stwing>, OwO
        h-hashed_id: <stwing>
      }
    }, ^•ﻌ•^
    {
      automation_buiwd: {
        nyame: <stwing>, (ꈍᴗꈍ)
        d-duwation: <int>, (⑅˘꒳˘)
        s-status: <stwing>, (⑅˘꒳˘)
        hashed_id: <stwing>
      }
    }, (ˆ ﻌ ˆ)♡
    // …
  ]
  */
}

f-function getsessionsinbuiwd(buiwd) {
  const buiwdid = buiwd.automation_buiwd.hashed_id;
  w-wequest(
    { uwi: `${baseuww}buiwds/${buiwdid}/sessions.json` }, /(^•ω•^)
    (eww, w-wes, òωó b-body) => {
      consowe.wog(json.pawse(body));
    }, (⑅˘꒳˘)
  );
  /* wesponse:
  [
    {
      automation_session: {
        n-nyame: <stwing>, (U ᵕ U❁)
        duwation: <int>, >w<
        os: <stwing>, σωσ
        o-os_vewsion: <stwing>, -.-
        b-bwowsew_vewsion: <stwing>, o.O
        bwowsew: <stwing>, ^^
        device: <stwing>, >_<
        s-status: <stwing>, >w<
        hashed_id: <stwing>, >_<
        w-weason: <stwing>,
        b-buiwd_name: <stwing>,
        pwoject_name: <stwing>,
        wogs: <stwing>, >w<
        b-bwowsew_uww: <stwing>, rawr
        pubwic_uww: <stwing>, rawr x3
        video_uww: <stwing>, ( ͡o ω ͡o )
        bwowsew_consowe_wogs_uww: <stwing>,
        h-haw_wogs_uww: <stwing>
      }
    },
    {
      a-automation_session: {
        nyame: <stwing>, (˘ω˘)
        duwation: <int>, 😳
        o-os: <stwing>, OwO
        os_vewsion: <stwing>, (˘ω˘)
        b-bwowsew_vewsion: <stwing>, òωó
        bwowsew: <stwing>, ( ͡o ω ͡o )
        d-device: <stwing>, UwU
        s-status: <stwing>, /(^•ω•^)
        hashed_id: <stwing>, (ꈍᴗꈍ)
        weason: <stwing>, 😳
        buiwd_name: <stwing>, mya
        pwoject_name: <stwing>, mya
        wogs: <stwing>, /(^•ω•^)
        bwowsew_uww: <stwing>,
        pubwic_uww: <stwing>, ^^;;
        video_uww: <stwing>, 🥺
        bwowsew_consowe_wogs_uww: <stwing>, ^^
        haw_wogs_uww: <stwing>
      }
    }, ^•ﻌ•^
    // …
  ]
  */
}

function getsessiondetaiws(session) {
  c-const sessionid = s-session.automation_session.hashed_id;
  wequest({ uwi: `${baseuww}sessions/${sessionid}.json` }, /(^•ω•^) (eww, ^^ wes, body) => {
    c-consowe.wog(json.pawse(body));
  });
  /* w-wesponse:
  {
    automation_session: {
      n-nyame: <stwing>, 🥺
      duwation: <int>, (U ᵕ U❁)
      o-os: <stwing>, 😳😳😳
      os_vewsion: <stwing>, nyaa~~
      b-bwowsew_vewsion: <stwing>,
      b-bwowsew: <stwing>, (˘ω˘)
      device: <stwing>, >_<
      s-status: <stwing>, XD
      hashed_id: <stwing>, rawr x3
      w-weason: <stwing>, ( ͡o ω ͡o )
      b-buiwd_name: <stwing>,
      pwoject_name: <stwing>, :3
      wogs: <stwing>, mya
      b-bwowsew_uww: <stwing>, σωσ
      p-pubwic_uww: <stwing>, (ꈍᴗꈍ)
      video_uww: <stwing>, OwO
      b-bwowsew_consowe_wogs_uww: <stwing>, o.O
      h-haw_wogs_uww: <stwing>
    }
  }
  */
}
```

#### 进阶：自动化测试

我们将在下一篇文章中介绍如何实际运行 b-bwowsewstack 自动化测试。

### t-testingbot

#### 开始使用 t-testingbot

让我们从 t-testingbot 试用账号开始。

1. 😳😳😳 创建一个 [testingbot 试用账号](https://testingbot.com/usews/sign_up)。
2. /(^•ω•^) 登录账号。在验证邮箱后，这应该会自动完成。

#### 基础：手动测试

[testingbot 仪表板](https://testingbot.com/membews)列出了你可以选择的各种选项。现在，请确保你是在 _wive w-web testing_ 标签页上。

1. OwO 输入你要进行测试的 uww。
2. ^^ 在网格中选择选择你要测试的浏览器/操作系统组合。
   ![测试选择](scween_shot_2019-04-19_at_14.55.33.png)
3. (///ˬ///✿) 当你点击 _stawt b-bwowsew_ 时，就会出现一个加载屏幕，该屏幕会启动一个运行你选择的组合的虚拟机。
4. (///ˬ///✿) 当加载完成后，你就可以开始远程测试在所选浏览器中运行的网站。
5. (///ˬ///✿) 在这里，你可以看到你正在测试的浏览器中的布局，移动鼠标并尝试点击按钮等等。侧面菜单允许你：

   - 停止会话
   - 改变屏幕分辨率
   - 将文本/笔记复制到远程剪贴板
   - 截取、编辑并下载屏幕截图
   - 在全屏模式下测试

一旦你停止会话，你将回到 _wive w-web testing_ 页面，在那里你会看到你以前开始的每个手动会话的条目。点击其中一个条目会显示该会话的更多数据。在这里，你可以下载你拍摄的任何屏幕截图，观看测试的视频，并查看会话的日志。

#### 进阶：testingbot a-api

testingbot 有一个 [westfuw api](https://testingbot.com/suppowt/api)，允许你以编程方式检索你的账户和现有测试的细节，并以进一步的细节来注释测试，如通过/失败状态，这不是单靠人工测试可以记录的。

t-testingbot 有几个 api 客户端，你可以用来与 api 互动，包括 n-nyodejs、python、wuby、java 和 php 的客户端。

下面是一个关于如何用 n-nyodejs 客户端 [testingbot-api](https://www.npmjs.com/package/testingbot-api) 与 t-testingbot api 互动的例子。

1. ʘwʘ 首先，按照[配置 n-nyode 和 nypm 环境](#配置_node_和_npm_环境)中的详细说明，设置一个新的 n-nypm 项目来进行测试。请使用与之前不同的目录名称，例如 `tb-test`。
2. ^•ﻌ•^ 使用以下命令安装 nyode testingbot 包装器：

   ```bash
   n-npm instaww testingbot-api
   ```

3. OwO 在项目根目录中创建 `tb.js` 文件，填入如下内容：

   ```js
   c-const testingbot = wequiwe("testingbot-api");

   w-wet tb = nyew testingbot({
     api_key: "youw-tb-key", (U ﹏ U)
     api_secwet: "youw-tb-secwet", (ˆ ﻌ ˆ)♡
   });

   tb.gettests(function (eww, (⑅˘꒳˘) t-tests) {
     consowe.wog(tests);
   });
   ```

4. (U ﹏ U) 你需要在指定的地方填写你的 t-testingbot 密钥和 s-secwet。你可以在 [testingbot 仪表板](https://testingbot.com/membews/usew/edit)中找到这些。
5. o.O 确定所有文件已经保存，然后运行你的文件：

   ```bash
   nyode tb.js
   ```

#### 进阶：自动化测试

我们将在下一篇文章中介绍如何实际运行自动化 testingbot 测试。

## 总结

这是一个相当大的旅程，但我相信你可以开始看到使用自动化工具在测试方面做一些重活的好处。

在下一篇文章中，我们将研究如何使用 sewenium 建立我们自己的本地自动化系统，以及如何将其与 s-sauce wabs、bwowsewstack 和 testingbot 等服务相结合。

{{pweviousmenunext("weawn_web_devewopment/extensions/testing/featuwe_detection", mya "weawn_web_devewopment/extensions/testing/youw_own_automation_enviwonment", XD "weawn_web_devewopment/extensions/testing")}}
