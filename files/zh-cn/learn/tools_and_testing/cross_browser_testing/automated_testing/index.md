---
title: 自动化测试简介
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

每天数次在几个浏览器和设备上手动运行测试可能会变得乏味和费时。为了有效地处理这个问题，你应该熟悉自动化工具。在这篇文章中，我们看看有哪些可用的工具，如何使用任务运行器，以及如何使用 LambdaTest、Sauce Labs、BrowserStack 和 TestingBot 等商业浏览器测试自动化应用程序的基础知识。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a href="/zh-CN/docs/Learn/CSS">CSS</a> 和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，以及对<a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >跨浏览器测试原则</a
        >的较深理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
          理解自动化测试如何使你的生活更容易，以及如何利用一些使事情更容易的商业产品。
      </td>
    </tr>
  </tbody>
</table>

## 自动化让事情变得简单

在本模块中，我们详细介绍了测试网站和应用程序的各种方法，并解释了跨浏览器测试工作的范围，包括测试的浏览器、无障碍考虑等。听起来像有很多工作，不是吗？

我们也是这么认为的。手动测试我们在以前的文章中所看到的所有东西可能是一个真正的痛苦。幸运的是，有一些工具可以帮助我们从这种痛苦解放出来。有两种主要方式可以使我们在本模块中讨论的测试自动化：

1. 使用像 [Grunt](https://gruntjs.com/)、[Gulp](https://gulpjs.com/) 或 [npm script](https://docs.npmjs.com/misc/scripts/) 这样的任务运行器在构建过程中运行测试和清理代码。这是执行对代码进行 linting 和压缩、添加 CSS 前缀或转译新生的 JavaScript 功能以达到最大的跨浏览器效果等任务的较好方式。
2. 使用像 [Selenium](https://www.selenium.dev/) 这样的浏览器自动化系统，在已安装的浏览器上运行特定的测试并返回结果，在浏览器出现故障时提醒你。商业跨浏览器测试应用程序，如 [LambdaTest](https://www.lambdatest.com/)、[Sauce Labs](https://saucelabs.com/)、[BrowserStack](https://www.browserstack.com/) 和 [TestingBot](https://testingbot.com) 都基于 Selenium，但允许你使用一个简单的界面远程访问它们的设置，省去你设置自己测试系统的麻烦。

我们将在下一篇文章中研究如何建立你自己的基于 Selenium 的测试系统。在这篇文章中，我们将看看如何设置一个任务运行器，并使用像上面提到的那些商业系统的基本功能。

> **备注：** 以上两类并不相互排斥。可以设置一个任务运行器，通过 API 访问 Sauce Labs 或 LambdaTest 等服务，运行跨浏览器测试，并返回结果。我们在下面也会看一下这个。

## 使用任务运行器作为自动化测试工具

正如我们上面所说的，你可以通过使用任务运行器，在构建过程中的某个点上自动运行你需要的所有东西，从而大大加快常见任务的速度，比如 linting 和压缩代码。例如，这可能是每次你保存文件时，或在其他一些时间点。在这一节中，我们将看看如何用 Node 和 Gulp 自动运行任务，这是一个适合初学者的选择。

### 设置 Node 和 npm 环境

很多工具都基于 {{Glossary("Node.js")}}，所以你需要从 [nodejs.org](https://nodejs.org/) 安装它：

1. 从上面的网站下载适合你系统的安装软件。（如果你已经安装了 Node 和 npm，跳到步骤 4）
2. 像其他软件那样正常安装。注意 Node 与 [Node Package Manager](https://www.npmjs.com/)（npm）一同安装，它使你能更快地安装包、同他人分享你的包，并在你的工程上运行有用的脚本。
3. 安装结束后，运行下列命令查看 Node 和 npm 的版本，检测 node 是否正确安装好：

   ```bash
   node -v
   npm -v
   ```

4. 安装 Node/npm 后，还应将其更新到最新的版本。更新 Node 最有效可靠的方式是从它的网站（链接见上）下载一个最新的安装包进行安装。而更新 npm，可以在你的命令行终端运行如下命令：

   ```bash
   npm install npm@latest -g
   ```

> **备注：** 如果上述命令因权限错误而失败，[修复 npm 权限问题](https://docs.npmjs.com/getting-started/fixing-npm-permissions/)这篇文章应该可以帮你解决。

要在你的工程上使用基于 Node/npm 的包，你还需要把你的工程目录设为 npm 工程。这并不难。

举例如下，首先创建一个测试目录，以免在测试的过程中产生任何错误。

1. 使用文件管理器 UI 在合适的地方创建一个新的目录，或在命令行下定位到你想要创建目录的地方，执行如下命令：

   ```bash
   mkdir node-test
   ```

2. 要使这个目录成为一个 npm 工程，你需要进入目录下然后初始化它：

   ```bash
   cd node-test
   npm init
   ```

3. 第 2 步执行后你会看到要回答一些问题，这是建立工程需要获取的信息。现在你可以先选择使用默认值。
4. 所有问题回答完成后，你还需要确定信息是否 OK。输入 `yes` 或者直接回车，npm 就会在你的目录下生成一个 `package.json` 文件。

这是一个工程的基本配置文件。你可以后续自定义它，现在，它的内容是这样的：

```json
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test for npm projects",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT"
}
```

现在，你可以继续进行下一步了。

### 设置 Gulp 自动化

让我们来看看如何设置 Gulp 并使用它来自动化一些测试工具。

1. 首先，使用上一节底部详述的过程创建一个测试 npm 项目。
2. 接下来，你需要一些 HTML、CSS 和 JavaScript 样本内容来测试你的系统。将我们的样本 [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html)、[main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) 和 [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) 文件复制到你的项目文件夹内一个名为 `src` 的子文件夹中。如果你愿意，你可以尝试自己的测试内容，但请记住，这种工具不会对内部的 JS/CSS 起作用，你需要外部文件。
3. 首先，使用下面的命令在全局范围内安装 gulp（意思是，它将在所有项目中可用）：

   ```bash
   npm install --global gulp-cli
   ```

4. 接下来，在你的 npm 项目根目录运行以下命令，将 gulp 设置为你项目的一个依赖项：

   ```bash
   npm install --save-dev gulp
   ```

5. 现在在你的项目目录下创建一个叫做 `gulpfile.js` 的新文件。这是一个将运行我们所有任务的文件。在这个文件中，放入以下内容：

   ```js
   const gulp = require("gulp");

   exports.default = function (cb) {
     console.log("Gulp running");
     cb();
   };
   ```

   这需要我们先前安装的 `gulp` 模块，然后导出一个默认的任务，除了向终端打印一条信息外，什么都不做——这对让我们知道 Gulp 正在工作很有用。每个 Gulp 任务都以相同的基本格式导出（`exports.taskName = taskFunction`）。每个函数都有一个参数，是当任务完成时要运行的回调函数。

6. 你可以用以下命令运行你的 gulp 任务，现在就试试：

   ```bash
   gulp
   ```

### 向 Gulp 添加一些现实任务

为了给 Gulp 添加一些真正的任务，我们需要思考我们想要做什么。在我们的项目上运行的一套合理的基本功能如下：

- html-tidy、css-lint 和 js-hint来提示和报告/修复常见的 HTML/CSS/JS 错误（见 [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy)、[gulp-csslint](https://www.npmjs.com/package/gulp-csslint)、[gulp-jshint](https://www.npmjs.com/package/gulp-jshint)）。
- Autoprefixer 扫描我们的 CSS，只在需要的地方添加供应商前缀（见 [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)）。
- babel 可以将任何新的 JavaScript 语法特征转译为传统的语法，在旧的浏览器中也可以使用（见 [gulp-babel](https://www.npmjs.com/package/gulp-babel)）。

关于我们所使用的不同 gulp 包的完整说明，请看上面的链接。

要使用每个插件，你需要首先通过 npm 安装它，然后在 `gulpfile.js` 文件的顶部包含（require）任何依赖，然后在它的底部添加你的测试，最后通过 gulp 的命令导出你的任务名称。

#### html-tidy

1. 使用以下命令安装它：

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **备注：** `--save-dev` 将软件包作为一个依赖项添加到你的项目中。如果你查看你的项目的 `package.json` 文件，你会在 `devDependencies` 属性中看到相应的依赖项。

2. 将以下依赖加入到 `gulpfile.js` 中：

   ```js
   const htmltidy = require("gulp-htmltidy");
   ```

3. 将以下测试加入到 `gulpfile.js` 的底部：

   ```js
   function html(cb) {
     return gulp
       .src("src/index.html")
       .pipe(htmltidy())
       .pipe(gulp.dest("build"));
     cb();
   }
   ```

4. 使用下列命令导出 html 任务：

   ```js
   exports.html = html;
   ```

5. 将默认导出改为：

   ```js
   exports.default = html;
   ```

这里我们用 `gulp.src()` 抓取我们开发的 `index.html` 文件，这个函数允许我们抓取一个源文件来做一些事情。

我们接下来使用 `pipe()` 函数将该源码传递给另一个命令来做其他事情。我们可以根据自己的需要把这些命令连在一起。我们首先在源文件上运行 `htmltidy()`，它将浏览并修复我们文件中的错误。第二个 `pipe()` 函数将输出的 HTML 文件写到 `build` 目录中。

在文件的输入版本中，你可能已经注意到我们放了一个空的 {{htmlelement("p")}} 元素；在创建输出文件时，htmltidy 已将其删除。

#### Autoprefixer 和 css-lint

1. 使用以下命令安装它们：

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. 将以下依赖加入到 `gulpfile.js` 中：

   ```js
   const autoprefixer = require("gulp-autoprefixer");
   const csslint = require("gulp-csslint");
   ```

3. 将以下测试加入到 `gulpfile.js` 的底部：

   ```js
   function css(cb) {
     return gulp
       .src("src/style.css")
       .pipe(csslint())
       .pipe(csslint.formatter("compact"))
       .pipe(
         autoprefixer({
           cascade: false,
         }),
       )
       .pipe(gulp.dest("build"));
     cb();
   }
   ```

4. 将以下属性加入到 `package.json` 中：

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. 在 const 定义后加入这一行：

   ```js
   const { series } = require("gulp");
   ```

6. 使用以下代码导出 css 任务：

   ```js
   exports.css = css;
   ```

7. 将默认任务修改为：

   ```js
   exports.default = series(html, css);
   ```

在这里，我们抓取 `style.css` 文件，对其运行 csslint（它向终端输出 CSS 中的任何错误列表），然后通过 autoprefixer 运行，添加任何需要的前缀，使新生的 CSS 功能在旧的浏览器中运行。在管道链的末端，我们将修改后的前缀 CSS 输出到 `build` 目录中。注意，这只有在 csslint 没有发现任何错误的情况下才有效——试着从你的 CSS 文件中删除一个大括号，然后重新运行 gulp，看看你会得到什么输出！

#### js-hint 和 babel

1. 使用以下命令安装它们：

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. 将以下依赖加入到 `gulpfile.js` 中：

   ```js
   const babel = require("gulp-babel");
   const jshint = require("gulp-jshint");
   ```

3. 将以下测试加入到 `gulpfile.js` 的底部：

   ```js
   function js(cb) {
     return gulp
       .src("src/main.js")
       .pipe(jshint())
       .pipe(jshint.reporter("default"))
       .pipe(
         babel({
           presets: ["@babel/env"],
         }),
       )
       .pipe(gulp.dest("build"));
     cb();
   }
   ```

4. 使用以下代码导出 js 任务：

   ```js
   exports.js = js;
   ```

5. 将默认任务修改为：

   ```js
   exports.default = series(html, css, js);
   ```

这里我们抓取我们的 `main.js` 文件，对其运行 `jshint`，并使用 `jshint.reporter` 将结果输出到终端；然后我们将该文件传递给 babel，它将其转换为旧式语法并将结果输出到 `build` 目录。我们的原始代码包括一个[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，babel 将其修改为旧式函数。

#### 更多想法

一旦这些都设置好了，你可以在你的项目目录下运行 `gulp` 命令，你应该得到这样的输出：

![在代码编辑器中的输出，行中显示任务开始或结束的时间，任务名称，以及'完成'任务的持续时间。](gulp-output.png)

然后，你可以通过在 `build` 目录下查看自动任务输出的文件，并在你的 web 浏览器中加载 `build/index.html`，来尝试这些文件。

如果你遇到错误，请检查是否如上所示添加了所有的依赖项和测试；也可以尝试注释掉 HTML/CSS/JavaScript 代码部分，然后重新运行 gulp，看看你是否能分离出问题所在。

Gulp 有一个 `watch()` 函数，你可以用它来监视你的文件，并在你保存文件时运行测试。例如，尝试在你的 `gulpfile.js` 的底部添加以下内容：

```js
function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}

exports.watch = watch;
```

现在试着在你的终端输入 `gulp watch` 命令。现在，Gulp 会监视你的目录，并在你保存 HTML、CSS 或 JavaScript 文件的改动时运行相应的任务。

> **备注：** `*` 字符是一个通配符，这里的含义是“当任何这些类型的文件被保存时运行这些任务”。你也可以在你的主要任务中使用通配符，例如 `gulp.src('src/*.css')` 会抓取你所有的 CSS 文件，然后对它们运行管道任务。

你还可以用 Gulp 做很多事情。在 [Gulp 插件目录](https://gulpjs.com/plugins/)中，有成千上万的插件可供搜索。

### 其他任务运行器

还有许多其他的任务运行器可以使用。我们当然不是想说 Gulp 是最好的解决方案，但它对我们来说是可行的，而且对初学者来说也是相当容易的。你也可以尝试使用其他解决方案：

- Grunt 的工作方式与 Gulp 非常相似，只是它依赖于配置文件中指定的任务，而不是使用编写的 JavaScript。更多细节见[开始使用 Grunt](https://gruntjs.com/getting-started)。
- 你也可以直接使用位于 `package.json` 文件内的 npm 脚本来运行任务，而不需要安装任何一种额外的任务运行器系统。这样做的前提是，像 Gulp 插件这样的东西基本上是对命令行工具的包装。所以，如果你能想出如何使用命令行来运行这些工具，你就可以使用 npm 脚本来运行它们。这在工作中有点棘手，但对于那些有很强的命令行技能的人来说，会有收获。文章[为什么使用 npm 脚本](https://css-tricks.com/why-npm-scripts/)提供了一个很好的介绍，并提供了大量的进一步信息。

## 使用商业测试服务加快浏览器测试

现在让我们来看看商业性的第三方浏览器测试服务，以及它们能为我们做什么。

这类应用程序的基本前提是，运行每一个应用程序的公司都有一个巨大的服务器群，可以运行许多不同的测试。当你使用这项服务时，你提供一个你想测试的页面的 URL，以及一些信息，如你想在哪些浏览器上测试。然后该应用程序用你指定的操作系统和浏览器配置一个新的虚拟机，并以屏幕截图、视频、日志文件、文本等形式返回测试结果。

然后，你可以提高档次，使用 API 以编程方式访问功能，这意味着这种应用程序可以与任务运行器（如你自己的本地 Selenium 环境等）相结合，以创建自动化测试。

> **备注：** 还有其他商业浏览器测试系统，但在本文中，我们将重点介绍 LambdaTest、Sauce Labs 和 BrowserStack。我们并不是说这些工具一定是最好的，但它们是很好的工具，对初学者来说很容易上手和运行。

### LambdaTest

#### 开始使用 LambdaTest

1. 首先，[在 LambdaTest 上免费注册](https://accounts.lambdatest.com/register)一个账号。
2. 登录账号。在验证邮箱后，这应该是自动的。

> **备注：** 与其他基于云的跨浏览器测试服务提供商不同，LambdaTest 提供了一个免费账户，你可以终身使用这个平台。高级计划和免费计划之间的唯一区别在于消费的数量。对于通过其 Selenium 网格进行的自动化测试，LambdaTest 提供每月 60 分钟的免费测试。

#### 基础：手动测试

一旦你登录到 LambdaTest，你将被引导到 LambdaTest 仪表板。仪表板将为你提供所消耗的分钟数、正在运行的并发会话数、迄今为止的测试总数等有关的详细信息。

1. 要开始进行手动测试，你需要从左边的导航菜单中选择 **"Real Time Testing"** 标签页。
   ![LambdaTest 仪表板](lambdatest-dashboard.png)
2. 当你点击 **Real Time Testing** 时，你将被引导到一个屏幕，你可以选择浏览器配置、浏览器版本、操作系统和屏幕分辨率，以测试你的网站。
   ![Real Time Testing](mark-as-bug-1.png)
3. 当你点击开始按钮时，会出现一个加载屏幕，为你提供一个基于你的配置的虚拟机。一旦加载完成，你就可以用一个网站进行实时、互动的跨浏览器测试。
   [![Mark as bug](mark-as-bug-2.png)](https://web.archive.org/web/20210608014707if_/https://www.lambdatest.com/support/docs/wp-content/uploads/2019/03/mark-as-bug-2.png)
   如果你注意到用户界面的问题，那么你可以用截图按钮捕捉虚拟机的截图，与你的同事分享。你还可以通过点击测试会话中的录音机按钮来录制你的测试会话的视频。
4. 有了内置的图像编辑器，在推送给同事之前，可以以问题所在之处标记你的屏幕截图。![强调问题所在](mark-as-bug-3.png)
5. 使用“标记为 bug”的按钮，你可以将 bug 推送到许多第三方工具，如 Jira、Asana、Trello 等。这样，你就可以直接从 LambdaTest 的测试会话中记录一个 bug 到你的项目管理实例中。查看所有的[第三方 LambdaTest 集成](https://www.lambdatest.com/integrations)。

> **备注：** 所有在测试会话中捕获的视频和图像都被捕获在 LambdaTest 的图库、测试日志和问题跟踪器中。

### Sauce Labs

#### 开始使用 Sauce Labs

让我们从 Sauce Labs 试用账号开始。

1. 创建一个 [Sauce Labs 试用账号](https://saucelabs.com/signup/trial)。
2. 登录账号。在验证邮箱后，这应该是自动的。

#### 基础：手动测试

[Sauce Labs 仪表板](https://saucelabs.com/beta/dashboard/manual)上有很多可用的选项。现在，请确保你是在 _Manual Tests_ 标签上。

1. 点击 _Start a new manual session_。
2. 在下一个屏幕中，输入你要测试的页面的 URL（例如使用 <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>），然后通过不同的按钮和列表选择你要测试的浏览器/操作系统组合。有很多选择，你会看到！！![选择 sauce manual session](sauce-manual-session.png)
3. 当你点击“Start session”时，就会出现一个加载屏幕，它启动了一个虚拟机，运行你选择的组合。
4. 当加载完成后，你就可以开始远程测试在所选浏览器中运行的网站。![Sauce 测试正在运行](sauce-test-running.png)
5. 在这里，你可以看到你正在测试的浏览器中的布局，移动鼠标并尝试点击按钮，等等。顶部的菜单允许你：

   - 停止会话
   - 给其他人一个 URL，以远程观察测试。
   - 复制文本/笔记到远程剪贴板。
   - 进行屏幕截图。
   - 以全屏模式测试。

一旦你停止了会话，你就会回到 Manual Tests 标签，在那里你会看到你以前开始的每个手动会话的条目。点击其中一个条目，就可以看到该环节的更多数据。在这里，你可以下载你拍摄的任何屏幕截图，观看会话的视频，查看数据日志等等。

> **备注：** 这已经非常有用了，而且比自己设置所有这些仿真器和虚拟机要方便得多。

#### 进阶：Sauce Labs API

Sauce Labs 有一个 [restful API](https://docs.saucelabs.com/dev/api/)，允许你以编程方式检索你的帐户和现有测试的细节，并以进一步的细节来注释测试，如他们的通过/失败状态，这不是单独的手动测试所能记录的。例如，你可能想使用 Sauce Labs 远程运行你自己的 Selenium 测试之一，以测试某个浏览器/操作系统组合，然后将测试结果传回 Sauce Labs。

它有几个客户端，允许你使用你喜欢的环境对 API 进行调用，无论是 PHP、Java、Node.js 等。

让我们简单看看我们如何使用 Node.js 和 [node-saucelabs](https://github.com/saucelabs/node-saucelabs) 访问 API。

1. 首先，按照[设置 Node 和 npm 环境](#设置_node_和_npm_环境)中的详细说明，设置一个新的 npm 项目来进行测试。使用一个与之前不同的目录名称，例如 `sauce-test`。
2. 使用以下命令安装 Node Sauce Labs 包装器：

   ```
   npm install saucelabs
   ```

3. 在你的项目根目录下创建一个新的文件，名为 `call_sauce.js`。填入以下内容：

   ```js
   const SauceLabs = require("saucelabs");

   let myAccount = new SauceLabs({
     username: "your-sauce-username",
     password: "your-sauce-api-key",
   });

   myAccount.getAccountDetails((err, res) => {
     console.log(res);
     myAccount.getServiceStatus((err, res) => {
       // Status of the Sauce Labs services
       console.log(res);
       myAccount.getJobs((err, jobs) => {
         // Get a list of all your jobs
         for (const job of jobs) {
           myAccount.showJob(job.id, (err, res) => {
             let str = `${res.id}: Status: ${res.status}`;
             if (res.error) {
               str += `\x1b[31m Error: ${res.error}\x1b[0m`;
             }
             console.log(str);
           });
         }
       });
     });
   });
   ```

4. 你需要在指定的地方填写你的 Sauce Labs 用户名和 API 密钥。这些可以从你的[用户设置](https://app.saucelabs.com/user-settings)页面检索到。现在填写这些。
5. 确定所有文件已经保存，然后运行你的文件：

   ```bash
   node call_sauce
   ```

#### 进阶：自动化测试

我们将在下一篇文章中讲述如何实际运行自动化的 Sauce Labs 测试。

### BrowserStack

#### 开始使用 BrowserStack

让我们从 BrowserStack 试用账号开始。

1. 创建一个 [BrowserStack 试用账号](https://www.browserstack.com/users/sign_up)。
2. 登录账号。在验证邮箱后，这应该是自动的。
3. 当你第一次登录时，你应该在实时测试页面；如果不是，请点击顶部导航菜单中的 _Live_ 链接。
4. 如果你使用的是 Firefox 或 Chrome，你会被提示在一个名为“启用本地测试”的对话框中安装一个浏览器扩展，点击*安装*按钮继续。在其他浏览器上，你仍然能够使用一些功能（一般通过 Flash），但你可能无法获得完整的体验。

#### 基础：手动测试

BrowserStack Live 仪表板允许你选择你想测试的设备和浏览器，左栏是平台，右栏是设备。当你把鼠标放在每个设备上或点击每个设备时，你可以选择该设备上可用的浏览器。

![选择测试](browserstack-test-choices-sized.png)

点击其中一个浏览器图标将加载你选择的平台/设备/浏览器。现在选择一个，并试一试。

![测试设备](browserstack-test-device-sized.png)

> **备注：** 一些移动设备选择旁边的蓝色设备图标表明你将在一个真实的设备上进行测试；没有这个图标的选择将在一个模拟器上运行。

你会发现，你可以在地址栏中输入 URL，并像你在真正的设备上所期望的那样使用其他控件。你甚至可以做一些事情，比如从设备上复制和粘贴到剪贴板上，用鼠标拖动上下滚动，或在支持设备（如 MacBook）的触摸板上使用适当的手势（如捏/缩放，两个手指滚动）。请注意，并非所有的功能都能在所有的设备上使用。

你还会看到一个菜单，允许你控制会话。

![测试菜单](browserstack-test-menu-sized.png)

这里有如下功能：

- _Switch_——切换至其他平台/设备/浏览器组合。
- 屏幕方向（看起来像一个重载图标）——在纵向和横向之间切换方向。
- 适应屏幕（看起来像一个全屏图标）——尽可能多地用设备填满测试区域。
- 捕捉 bug（看起来像一个相机）——截图，允许你注释并保存它。
- Issue 跟踪器（看起来像一副牌）——查看以前捕获的错误/屏幕截图。
- 设置（齿轮图标）——允许你改变会话的一般设置。
- 帮助（问号）——访问帮助/支持功能。
- _Devtools_——允许你使用你的浏览器的 devtools 直接调试或操作测试浏览器中显示的页面。目前这只在测试 iOS 设备上的 Safari 浏览器时有效。
- _设备信息_——显示测试设备的信息。
- _特性_——显示你当前配置支持哪些功能，例如复制到剪贴板、手势支持等。
- _停止_——终止会话。

> **备注：** 这已经非常有用了，而且比自己设置所有这些仿真器和虚拟机要方便得多。

#### 其他基本功能

如果你回到 BrowserStack 主页面，你会在 _More_ 菜单选项下发现其他一些有用的基本功能：

- _Responsive_：输入一个 URL 并按下 _Generate_，BrowserStack 就会在不同视口尺寸的多个设备上加载该 URL。在每个设备上，你可以进一步调整显示器尺寸等设置，以便很好地了解你的网站布局在不同形式因素下的效果。
- _Screenshots_：输入一个 URL，选择你感兴趣的浏览器/设备/平台，然后按下 _Generate screenshots_，BrowserStack 会在所有这些不同的浏览器中对你的网站进行截图，然后提供给你查看和下载。

#### 进阶：BrowserStack API

BrowserStack 也有一个 [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction)，允许你以编程方式检索你的账户计划、会话、构建等细节。

它有几个客户端，允许你使用你喜欢的环境对 API 进行调用，无论是 PHP、Java、Node.js 等。

让我们简单看一下我们如何使用 Node.js 访问 API。

1. 首先，按照[设置 Node 和 npm 环境](#设置_node_和_npm_环境)中的详细说明，设置一个新的 npm 项目来进行测试。使用一个与之前不同的目录名称，例如 `bstack-test`。
2. 在项目根目录中创建 `call_bstack.js` 文件，填入如下内容：

   ```js
   const request = require("request");

   const bsUser = "BROWSERSTACK_USERNAME";
   const bsKey = "BROWSERSTACK_ACCESS_KEY";
   const baseUrl = `https://${bsUser}:${bsKey}@www.browserstack.com/automate/`;

   function getPlanDetails() {
     request({ uri: `${baseUrl}plan.json` }, (err, res, body) => {
       console.log(JSON.parse(body));
     });
     /* Response:
       {
         automate_plan: <string>,
         parallel_sessions_running: <int>,
         team_parallel_sessions_max_allowed: <int>,
         parallel_sessions_max_allowed: <int>,
         queued_sessions: <int>,
         queued_sessions_max_allowed: <int>
       }
     */
   }
   getPlanDetails();
   ```

3. 你需要在指定的地方填写你的 BrowserStack 用户名和 API 密钥。这些可以从你的 [BrowserStack 自动化仪表板](https://www.browserstack.com/automate)上获取。现在就把这些填上。
4. 确定所有文件已经保存，然后运行你的文件：

   ```bash
   node call_bstack
   ```

下面我们还提供了一些其他现成的函数，你可能会发现在使用 BrowserStack 的 restful API 时很有用。

```js
function getBuilds() {
  request({ uri: `${baseUrl}builds.json` }, (err, res, body) => {
    console.log(JSON.parse(body));
  });
  /* Response:
  [
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    // …
  ]
  */
}

function getSessionsInBuild(build) {
  const buildId = build.automation_build.hashed_id;
  request(
    { uri: `${baseUrl}builds/${buildId}/sessions.json` },
    (err, res, body) => {
      console.log(JSON.parse(body));
    },
  );
  /* Response:
  [
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
    // …
  ]
  */
}

function getSessionDetails(session) {
  const sessionId = session.automation_session.hashed_id;
  request({ uri: `${baseUrl}sessions/${sessionId}.json` }, (err, res, body) => {
    console.log(JSON.parse(body));
  });
  /* Response:
  {
    automation_session: {
      name: <string>,
      duration: <int>,
      os: <string>,
      os_version: <string>,
      browser_version: <string>,
      browser: <string>,
      device: <string>,
      status: <string>,
      hashed_id: <string>,
      reason: <string>,
      build_name: <string>,
      project_name: <string>,
      logs: <string>,
      browser_url: <string>,
      public_url: <string>,
      video_url: <string>,
      browser_console_logs_url: <string>,
      har_logs_url: <string>
    }
  }
  */
}
```

#### 进阶：自动化测试

我们将在下一篇文章中介绍实际运行 BrowserStack 自动化测试。

### TestingBot

#### 开始使用 TestingBot

让我们从 TestingBot 试用账号开始。

1. 创建一个 [TestingBot 试用账号](https://testingbot.com/users/sign_up)。
2. 登录账号。在验证邮箱后，这应该是自动的。

#### 基础：手动测试

[TestingBot 仪表板](https://testingbot.com/members)列出了你可以选择的各种选项。现在，请确保你是在 _Live Web Testing_ 标签页上。

1. 输入你要进行测试的 URL。
2. 在网格中选择选择你要测试的浏览器/操作系统组合。
   ![测试选择](screen_shot_2019-04-19_at_14.55.33.png)
3. 当你点击 _Start Browser_ 时，就会出现一个加载屏幕，该屏幕会启动一个运行你选择的组合的虚拟机。
4. 当加载完成后，你就可以开始远程测试在所选浏览器中运行的网站。
5. 在这里，你可以看到你正在测试的浏览器中的布局，移动鼠标并尝试点击按钮等等。侧面菜单允许你：

   - 停止会话
   - 改变屏幕分辨率
   - 将文本/笔记复制到远程剪贴板
   - 截取、编辑并下载屏幕截图
   - 在全屏模式下测试

一旦你停止会话，你将回到 _Live Web Testing_ 页面，在那里你会看到你以前开始的每个手动会话的条目。点击其中一个条目会显示该会话的更多数据。在这里，你可以下载你拍摄的任何屏幕截图，观看测试的视频，并查看会话的日志。

#### 进阶：TestingBot API

TestingBot 有一个 [restful API](https://testingbot.com/support/api)，允许你以编程方式检索你的账户和现有测试的细节，并以进一步的细节来注释测试，如通过/失败状态，这不是单靠人工测试可以记录的。

TestingBot 有几个 API 客户端，你可以用来与 API 互动，包括 NodeJS、Python、Ruby、Java 和 PHP 的客户端。

下面是一个关于如何用 NodeJS 客户端 [testingbot-api](https://www.npmjs.com/package/testingbot-api) 与 TestingBot API 互动的例子。

1. 首先，按照[设置 Node 和 npm 环境](#设置_node_和_npm_环境)中的详细说明，设置一个新的 npm 项目来进行测试。使用一个与之前不同的目录名称，例如 `tb-test`。
2. 使用以下命令安装 Node TestingBot 包装器：

   ```
   npm install testingbot-api
   ```

3. 在项目根目录中创建 `tb.js` 文件，填入如下内容：

   ```js
   const TestingBot = require("testingbot-api");

   let tb = new TestingBot({
     api_key: "your-tb-key",
     api_secret: "your-tb-secret",
   });

   tb.getTests(function (err, tests) {
     console.log(tests);
   });
   ```

4. 你需要在指定的地方填写你的 TestingBot 密钥和 Secret。你可以在 [TestingBot 仪表板](https://testingbot.com/members/user/edit)中找到这些。
5. 确定所有文件已经保存，然后运行你的文件：

   ```bash
   node tb.js
   ```

#### 进阶：自动化测试

我们将在下一篇文章中介绍实际运行自动化 TestingBot 测试的情况。

## 总结

这是一个相当大的旅程，但我相信你可以开始看到使用自动化工具在测试方面做一些重活的好处。

在下一篇文章中，我们将研究如何使用 Selenium 建立我们自己的本地自动化系统，以及如何将其与 Sauce Labs、BrowserStack 和 TestingBot 等服务相结合。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
