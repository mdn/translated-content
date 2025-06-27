---
title: 自动化测试简介
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

每天手动在多个浏览器和设备上多次运行测试可能有点乏味且耗时。为了高效处理，你应该熟悉自动化工具。本文将介绍现有的工具、如何使用任务运行器，以及如何使用 LambdaTest、Sauce Labs、BrowserStack 和 TestingBot 等商业浏览器测试自动化应用程序的基础知识。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言，以及对<a
          href="/zh-CN/docs/Learn_web_development/Extensions/Testing/Introduction"
          >跨浏览器测试原则</a
        >有较深理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
          理解自动化测试的含义、它如何简化你的工作，以及如何使用一些能让事情变得更容易的商业产品。
      </td>
    </tr>
  </tbody>
</table>

## 自动化让事情变得简单

在本模块中，我们详细介绍了测试网站和应用程序的各种方法，并解释了跨浏览器测试的工作范围，包括测试的浏览器、无障碍考虑等。听起来工作量很大，不是吗？

我们也是这么认为的。手动测试我们在以前的文章中所提到的所有内容可能会非常繁琐。幸运的是，有一些工具可以帮助我们从这种繁琐的工作中解放出来。在本模块中，我们讨论了两种主要的测试自动化方法：

1. 使用像 [Grunt](https://gruntjs.com/)、[Gulp](https://gulpjs.com/) 或 [npm script](https://docs.npmjs.com/misc/scripts/) 这样的任务运行器，在构建过程中运行测试和清理代码。这样的话可以很方便地对代码进行 lint 和极简化、添加 CSS 前缀或转译 JavaScript 新特性以实现最大的跨浏览器兼容性。
2. 使用像 [Selenium](https://www.selenium.dev/) 这样的浏览器自动化系统，在已安装的浏览器上运行特定的测试并返回结果，并在浏览器出现故障时提醒你。商业跨浏览器测试应用程序，如 [Sauce Labs](https://saucelabs.com/)、[BrowserStack](https://www.browserstack.com/) 和 [TestingBot](https://testingbot.com) 都基于 Selenium，但它们允许你通过一个简单的界面远程访问它们的设置，省去了你自己设置测试系统的麻烦。

我们将在下一篇文章中研究如何建立你自己的基于 Selenium 的测试系统。在这篇文章中，我们将看看如何配置任务运行器，并使用上述商业系统的基本功能。

> [!NOTE]
> 以上两类并不相互排斥。可以配置一个任务运行器，通过 API 访问 Sauce Labs 或 LambdaTest 等服务，运行跨浏览器测试，并返回结果。我们在后面也会了解一下这个。

## 使用任务运行器作为自动化测试工具

正如我们之前提到的，你可以通过使用任务运行器，在构建过程中的某个点上自动运行所有需要的任务（比如 lint 和极简化代码），从而大大加快常见任务的速度。例如，这可以在每次保存文件时，或在其他一些时间点自动运行。在这一节中，我们将了解如何使用 Node 和 Gulp 自动运行任务，这是一个适合初学者的选择。

### 配置 Node 和 npm 环境

很多工具都基于 {{Glossary("Node.js")}}，所以你需要从 [nodejs.org](https://nodejs.org/) 安装它：

1. 从上面的网站下载适合你系统的安装软件。（如果你已经安装了 Node 和 npm，跳到步骤 4）
2. 像其他软件那样正常安装。注意 Node 与 [Node 包管理器](https://www.npmjs.com/)（npm）一同安装，它使你能更快地安装包、同他人分享你的包，并在你的工程上运行有用的脚本。
3. 安装结束后，运行下列命令查看 Node 和 npm 的版本，检测 node 是否正确安装好：

   ```bash
   node -v
   npm -v
   ```

4. 安装 Node/npm 后，还应将其更新到最新的版本。更新 Node 最有效可靠的方式是从它的网站（链接见上）下载一个最新的安装包进行安装。而更新 npm，可以在命令行终端运行如下命令：

   ```bash
   npm install npm@latest -g
   ```

> [!NOTE]
> 如果上述命令因权限错误而失败，[修复 npm 权限问题](https://docs.npmjs.com/getting-started/fixing-npm-permissions/)这篇文章应该可以帮你解决。

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

3. 第 2 步执行后你会需要回答一些问题，这是建立工程需要获取的信息。现在你可以先选择使用默认值。
4. 所有问题回答完成后，你还需要确定信息是否正确。输入 `yes` 或者直接回车，npm 就会在你的目录下生成一个 `package.json` 文件。

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

1. 首先，使用上一节底部详述的过程创建一个测试 npm 项目。此外，向 `package.json` 文件添加一行 `"type": "module"`，使其类似如下代码：

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
     "license": "MIT",
     "type": "module"
   }
   ```

2. 接下来，你需要一些 HTML、CSS 和 JavaScript 样本内容来测试你的系统。将我们的示例 [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html)、[main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) 和 [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) 文件复制到你的项目文件夹内一个名为 `src` 的子文件夹中。如果你愿意，你可以尝试自己的测试内容，但请记住，这种工具不会对内部的 JS/CSS 起作用，你需要外部文件。
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
   import gulp from "gulp";

   exports.default = function (cb) {
     console.log("Gulp 正在运行");
     cb();
   };
   ```

   这需要我们先前安装的 `gulp` 模块，然后导出一个默认的任务，除了向终端打印一条信息外，什么都不做——这对让我们知道 Gulp 正在工作很有用。每个 Gulp 任务都以相同的基本格式导出（`exports.任务名称 = 任务函数`）。每个函数都有一个参数，是当任务完成时要运行的回调函数。

6. 你可以用以下命令运行你的 gulp 任务，现在就试试：

   ```bash
   gulp
   ```

### 向 Gulp 添加一些真实任务

为了给 Gulp 添加一些实际任务，我们需要考虑我们想要实现的目标。以下是在我们的项目中运行的一些合理的基本功能：

- 使用 html-tidy、css-lint 和 js-hint 来提示和报告/修复常见的 HTML/CSS/JS 错误（参见 [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy)、[gulp-csslint](https://www.npmjs.com/package/gulp-csslint)、[gulp-jshint](https://www.npmjs.com/package/gulp-jshint)）。
- 使用 Autoprefixer 扫描我们的 CSS，只在需要的地方添加供应商前缀（参见 [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)）。
- 使用 babel 将任何 JavaScript 语法的新特性转译为传统语法，使其在旧的浏览器中也能使用（参见 [gulp-babel](https://www.npmjs.com/package/gulp-babel)）。

关于我们所使用的不同 gulp 包的完整说明，请参见上述链接。

要使用每个插件，你需要首先通过 npm 安装它们，然后在 `gulpfile.js` 文件的顶部包含（require）这些依赖项，接着在依赖声明下面添加你的任务，最后通过导出（export）你的任务名称，使其为 gulp 命令所使用。

#### html-tidy

1. 使用以下命令安装它：

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` 将软件包作为一个依赖项添加到你的项目中。如果你查看你的项目的 `package.json` 文件，你会在 `devDependencies` 属性中看到相应的条目。

2. 将以下依赖加入到 `gulpfile.js` 中：

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. 将以下测试加入到 `gulpfile.js` 的底部：

   ```js
   export function html() {
     return gulp
       .src("src/index.html")
       .pipe(htmltidy())
       .pipe(gulp.dest("build"));
   }
   ```

4. 将默认导出改为：

   ```js
   export default html;
   ```

在这里，我们使用 `gulp.src()` 来获取 `index.html` 文件，该函数允许我们指定源文件进行处理。

接下来，我们通过 `pipe()` 函数将源文件传递给其他处理步骤，可以将多个 `pipe()` 链接在一起。首先，我们使用 `htmltidy()` 对源文件进行处理，它会修复文件中的错误。然后，第二个 `pipe()` 函数将处理后的 HTML 文件输出到 `build` 目录。

在输入文件中，你可能会注意到我们添加了一个空的 {{htmlelement("p")}} 元素；`htmltidy` 处理后已将其移除，生成的输出文件中不会包含这个元素。

#### Autoprefixer 和 css-lint

1. 使用以下命令安装它们：

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. 将以下依赖加入到 `gulpfile.js` 中：

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. 将以下测试加入到 `gulpfile.js` 的底部：

   ```js
   export function css() {
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
   }
   ```

4. 将以下属性加入到 `package.json` 中：

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. 将默认任务修改为：

   ```js
   export default gulp.series(html, css);
   ```

在这里我们获取我们的 `style.css` 文件，对其运行 csslint（该工具会将你的 CSS 中的任何错误输出到终端），然后通过 autoprefixer 处理它，以添加任何必要的前缀，使新的 CSS 特性可以在旧版浏览器中运行。在 pipe 链的最后，我们将我们修改后的带前缀的 CSS 输出到 `build` 目录。请注意，这仅在 csslint 未发现任何错误时才有效——尝试在你的 CSS 文件中删除一个大括号，然后重新运行 gulp，看看你会得到什么输出！

#### js-hint 和 babel

1. 使用以下命令安装它们：

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. 将以下依赖加入到 `gulpfile.js` 中：

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. 将以下测试加入到 `gulpfile.js` 的底部：

   ```js
   export function js() {
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
   }
   ```

4. 将默认任务修改为：

   ```js
   export default gulp.series(html, css, js);
   ```

在这里，我们获取我们的 `main.js` 文件，对其运行 `jshint`，并使用 `jshint.reporter` 将结果输出到终端；然后我们将文件传递给 babel，它将其转换为旧式语法，并将结果输出到 `build` 目录。我们的原始代码包括一个[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，而 babel 已将其修改为旧式函数。

#### 更多想法

一旦这些都配置好了，你可以在你的项目目录下运行 `gulp` 命令，你应该得到这样的输出：

![在代码编辑器中的输出，其中各行显示任务开始或结束的时间、任务名称以及‘完成’任务所花费的时间](gulp-output.png)

然后，你可以通过在 `build` 目录下查看自动任务输出的文件，并在你的 web 浏览器中加载 `build/index.html`，来尝试这些文件。

如果你遇到错误，请检查是否如上所示添加了所有的依赖项和测试；也可以尝试注释掉 HTML/CSS/JavaScript 代码部分，然后重新运行 gulp，看看你是否能找出问题所在。

Gulp 有一个 `watch()` 函数，你可以用它来监视你的文件，并在你保存文件时运行测试。例如，尝试在你的 `gulpfile.js` 的底部添加以下内容：

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

现在试着在你的终端输入 `gulp watch` 命令。现在，Gulp 会监视你的目录，并在你保存对 HTML、CSS 或 JavaScript 文件的改动时运行相应的任务。

> [!NOTE]
> `*` 字符是一个通配符，这里的含义是“当任何这些类型的文件被保存时运行这些任务”。你也可以在你的主要任务中使用通配符，例如 `gulp.src('src/*.css')` 会抓取你所有的 CSS 文件，然后对它们运行管道任务。

你还可以用 Gulp 做很多事情。在 [Gulp 插件目录](https://gulpjs.com/plugins/)中，有成千上万的插件可供使用。

### 其他任务运行器

还有许多其他的任务运行器可供选择。我们当然并不是在说 Gulp 是最好的解决方案，但它对我们来说效果很好，而且对初学者来说相对易用。你也可以尝试使用其他解决方案：

- Grunt 的工作方式与 Gulp 非常相似，不同之处在于它依赖于在配置文件中指定的任务，而不是使用编写的 JavaScript。有关更多详细信息，请参阅 [Grunt 入门](https://gruntjs.com/getting-started)。
- 你还可以直接在 `package.json` 文件中运行 npm 脚本来运行任务，而无需安装任何额外的任务运行系统。这基于一个前提，即像 Gulp 插件这样的东西基本上是命令行工具的封装。因此，如果你能够弄清楚如何使用命令行运行工具，那么你就可以使用 npm 脚本来运行它们。这可能有点棘手，但对于那些擅长命令行技能的人来说，这可能是值得的。[为什么使用 npm 脚本？](https://css-tricks.com/why-npm-scripts/)提供了一个很好的入门，其中包含大量更多信息。

## 使用商业测试服务加快浏览器测试

现在让我们来看看商业第三方浏览器测试服务以及它们能为我们做些什么。

这类应用程序的基本前提是，每家提供该服务的公司都有一个巨大的服务器集群，可以运行许多不同的测试。当你使用这项服务时，你提供一个你想测试的页面的 URL，以及一些信息，如你想在哪些浏览器上测试。然后该应用程序用你指定的操作系统和浏览器配置一个新的虚拟机，并以屏幕截图、视频、日志文件、文本等形式返回测试结果。

然后，你可以进一步，使用 API 以编程方式访问功能，这意味着这种应用程序可以与任务运行器（如你自己的本地 Selenium 环境等）相结合，以创建自动化测试。

> [!NOTE]
> 还有其他商业浏览器测试系统，但在本文中，我们将重点介绍 LambdaTest、Sauce Labs 和 BrowserStack。我们并不是说这些工具一定是最好的，但它们是很好的工具，对初学者来说很容易上手和运行。

### LambdaTest

#### 开始使用 LambdaTest

1. 首先，[在 LambdaTest 上免费注册](https://accounts.lambdatest.com/register)一个账号。
2. 登录账号。在验证邮箱后，这应该是自动的。

> [!NOTE]
> 与其他基于云的跨浏览器测试服务提供商不同，LambdaTest 提供免费账户，你可以终身访问他们的平台。他们的高级计划和免费计划之间唯一的区别在于使用量。对于通过他们的 Selenium Grid 进行自动化测试，LambdaTest 每月提供 60 分钟的免费测试时间。

#### 基础：手动测试

登录到 LambdaTest 后，你将被导航到 LambdaTest 仪表板。仪表板将向你提供详细信息，包括你已消耗了多少分钟，有多少并发会话正在运行，你迄今为止的总测试数量等。

1. 要开始手动测试，你需要从左侧导航菜单中选择“**Real Time Testing**”标签。
2. 点击 **Real Time Testing** 后，你将被引导到一个屏幕，在该屏幕上，你可以选择用来测试你的网站的浏览器配置、浏览器版本、操作系统和屏幕分辨率。
3. 点击 Start 按钮后，将出现一个加载屏幕，根据你的配置提供一个基于虚拟机的 VM（虚拟机）。加载完成后，你可以在网站上进行实时，可交互的跨浏览器测试。
   如果你注意到 UI 的问题，则可以通过使用屏幕截图按钮捕获你的 VM 的屏幕截图与同事共享。你还可以通过在测试会话中点击记录器按钮来录制测试会话的视频。
4. 使用内置的图像编辑器，在将截图推送给同事之前标注你的截图。
5. 使用“标记为 bug”按钮，你可以将 bug 推送到诸多第三方工具，如 Jira、Asana、Trello 等。这样，你可以直接从 LambdaTest 的测试会话将错误记录到你的项目管理实例中。查看所有[第三方 LambdaTest 集成](https://www.lambdatest.com/integrations)。

> [!NOTE]
> 所有在测试会话中捕获的视频和图像都被捕获在 LambdaTest 的图库、测试日志和问题跟踪器中。

### Sauce Labs

#### 开始使用 Sauce Labs

让我们从 Sauce Labs 试用账号开始。

1. 创建一个 Sauce Labs 试用账号。
2. 登录账号。在验证邮箱后，这应该会自动完成。

#### 基础：手动测试

[Sauce Labs 仪表板](https://app.saucelabs.com/dashboard/manual)上有很多选项。现在，请确保你在 _Manual Tests_ 标签下。

1. 点击 _Start a new manual session_。
2. 在下一个屏幕中，输入你想测试的页面的 URL（例如，可以使用 <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>），然后通过使用不同的按钮和列表选择你想测试的浏览器/操作系统组合。正如你所看到的，有很多选择！![选择 Sauce 手动会话](sauce-manual-session.png)
3. 当你点击“Start session”（开始会话）时，会出现一个加载屏幕，这会启动一个用于运行你选择的组合的虚拟机。
4. 加载完成后，你可以开始在所选浏览器中远程测试该网站。![Sauce 测试运行](sauce-test-running.png)
5. 从这里你可以看到在你测试的浏览器中的布局，移动鼠标并尝试点击按钮等。顶部菜单允许你：
   - 停止会话
   - 给其他人提供一个 URL，以便他们可以远程观察测试。
   - 将文本/笔记复制到远程剪贴板。
   - 截取屏幕截图。
   - 以全屏模式测试。

一旦你停止了会话，你将返回到手动测试标签页，在这里你会看到你之前启动的每个手动会话的条目。点击这些条目之一可以查看会话的更多数据。在这里你可以下载你截取的屏幕截图、观看会话的视频、查看数据日志等。

> [!NOTE]
> 这已经非常有用，起码比起自己配置所有这些模拟器和虚拟机要方便得多。

#### 进阶：Sauce Labs API

Sauce Labs 有一个 [restful API](https://docs.saucelabs.com/dev/api/)，允许你以编程方式检索你的帐户和现有测试的细节，并以进一步的细节来注释测试，如它们的通过/失败状态，这不是单独的手动测试所能记录的。例如，你可能想使用 Sauce Labs 远程运行你自己的 Selenium 测试之一，以测试某个浏览器/操作系统组合，然后将测试结果传回 Sauce Labs。

它有几个客户端，允许你使用你喜欢的环境对 API 进行调用，如 PHP、Java 还有 Node.js 等。

让我们简单看看我们如何使用 Node.js 和 [node-saucelabs](https://github.com/saucelabs/node-saucelabs) 访问 API。

1. 首先，按照[配置 Node 和 npm 环境](#配置_node_和_npm_环境)中的详细说明，创建一个新的 npm 项目来进行测试。请使用与之前不同的目录名称，例如 `sauce-test`。
2. 使用以下命令安装 Node Sauce Labs 包装器：

   ```bash
   npm install saucelabs
   ```

3. 在你的项目根目录下创建一个新的文件，名为 `call_sauce.js`。填入以下内容：

   ```js
   const SauceLabs = require("saucelabs").default;

   (async () => {
     const myAccount = new SauceLabs({
       username: "your-sauce-username",
       password: "your-sauce-api-key",
     });

     // 根据区域从客户端获取完整的 WebDriver URL：
     console.log(myAccount.webdriverEndpoint);

     // 获取最后一次运行作业的详细信息
     const jobs = await myAccount.listJobs("your-sauce-username", {
       limit: 1,
       full: true,
     });

     console.log(jobs);
   })();
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

让我们从创建 BrowserStack 试用账号开始。

1. 创建一个 [BrowserStack 试用账号](https://www.browserstack.com/users/sign_up)。
2. 登录账号。在验证邮箱后，这应该会自动完成。
3. 当你第一次登录时，你应该在实时测试页面；如果不是，请点击顶部导航菜单中的 _Live_ 链接。
4. 如果你使用的是 Firefox 或 Chrome，你会被提示在一个名为“Enable Local Testing”（启用本地测试）的对话框中安装一个浏览器扩展，点击*安装*按钮继续。在其他浏览器上，你仍然能够使用一些功能（一般通过 Flash），但你可能无法获得完整的体验。

#### 基础：手动测试

BrowserStack Live 仪表板允许你选择你想测试的设备和浏览器，左栏是平台，右栏是设备。当你把鼠标放在每个设备上或点击每个设备时，你可以选择该设备上可用的浏览器。

![选择测试](browserstack-test-choices-sized.png)

点击其中一个浏览器图标将加载你选择的平台/设备/浏览器。现在选择一个，并试一试。

![测试设备](browserstack-test-device-sized.png)

> [!NOTE]
> 一些移动设备选择旁边的蓝色设备图标表明你将在一个真实的设备上进行测试；没有这个图标的选择将在一个模拟器上运行。

你会发现，你可以在地址栏中输入 URL，并像你在真正的设备上所期望的那样使用其他控件。你甚至可以做一些事情，比如从设备上复制和粘贴到剪贴板上，用鼠标拖动上下滚动，或在支持的设备（如 MacBook）的触摸板上使用适当的手势（如捏/缩放，两个手指滚动）。请注意，并非所有的特性都能在所有的设备上使用。

你还会看到一个菜单，允许你控制会话。

![测试菜单](browserstack-test-menu-sized.png)

这里有如下功能：

- _Switch_——切换至其他平台/设备/浏览器组合。
- 屏幕方向（看起来像一个重新加载图标）——在纵向和横向之间切换方向。
- 适应屏幕（看起来像一个全屏图标）——尽可能多地用设备填满测试区域。
- 捕捉 bug（看起来像一个相机）——截图，允许你注释并保存它。
- 议题跟踪器（看起来像一副牌）——查看以前捕获的错误/屏幕截图。
- 设置（齿轮图标）——允许你改变会话的一般设置。
- 帮助（问号）——访问帮助/支持功能。
- _Devtools_——允许你使用你的浏览器的 devtools 直接调试或操作测试浏览器中显示的页面。目前这只在测试 iOS 设备上的 Safari 浏览器时有效。
- _设备信息_——显示测试设备的信息。
- _特性_——显示你当前配置支持哪些功能，例如复制到剪贴板、手势支持等。
- _停止_——终止会话。

> [!NOTE]
> 这已经非常有用了，而且比自己设置所有这些仿真器和虚拟机要方便得多。

#### 其他基本功能

如果你回到 BrowserStack 主页面，你会在 _More_ 菜单选项下发现其他一些有用的基本功能：

- _Responsive_：输入一个 URL 并按下 _Generate_，BrowserStack 就会在不同视口尺寸的多个设备上加载该 URL。在每个设备上，你可以进一步调整显示器尺寸等设置，以便很好地了解你的网站布局在不同形式因素下的效果。
- _Screenshots_：输入一个 URL，选择你感兴趣的浏览器/设备/平台，然后按下 _Generate screenshots_，BrowserStack 会在所有这些不同的浏览器中对你的网站进行截图，然后提供给你查看和下载。

#### 进阶：BrowserStack API

BrowserStack 也有一个 [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction)，允许你以编程方式检索你的账户计划、会话、构建等细节。

它有几个客户端，允许你使用喜欢的环境对 API 进行调用，例如 PHP、Java、Node.js 等。

让我们简单看一下如何使用 Node.js 访问 API。

1. 首先，按照[配置 Node 和 npm 环境](#配置_node_和_npm_环境)中的详细说明，创建一个新的 npm 项目来进行测试。记得使用与之前不同的目录名称，例如 `bstack-test`。
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

3. 你需要在指定位置填写 BrowserStack 用户名和 API 密钥。这些信息可从你的 [BrowserStack 帐户和配置文件详细信息](https://www.browserstack.com/accounts/profile/details)中的身份验证和安全部分获取。现在填写。
4. 确定所有文件保存成功，然后运行你的文件：

   ```bash
   node call_bstack
   ```

下面我们还提供了一些其他现成的函数，它们可能会在你使用 BrowserStack 的 restful API 时对你有帮助。

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

我们将在下一篇文章中介绍如何实际运行 BrowserStack 自动化测试。

### TestingBot

#### 开始使用 TestingBot

让我们从 TestingBot 试用账号开始。

1. 创建一个 [TestingBot 试用账号](https://testingbot.com/users/sign_up)。
2. 登录账号。在验证邮箱后，这应该会自动完成。

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

1. 首先，按照[配置 Node 和 npm 环境](#配置_node_和_npm_环境)中的详细说明，设置一个新的 npm 项目来进行测试。请使用与之前不同的目录名称，例如 `tb-test`。
2. 使用以下命令安装 Node TestingBot 包装器：

   ```bash
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

我们将在下一篇文章中介绍如何实际运行自动化 TestingBot 测试。

## 总结

这是一个相当大的旅程，但我相信你可以开始看到使用自动化工具在测试方面做一些重活的好处。

在下一篇文章中，我们将研究如何使用 Selenium 建立我们自己的本地自动化系统，以及如何将其与 Sauce Labs、BrowserStack 和 TestingBot 等服务相结合。

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
