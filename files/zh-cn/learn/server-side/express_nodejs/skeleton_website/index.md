---
title: Express 教程 2：创建站点框架
slug: Learn/Server-side/Express_Nodejs/skeleton_website
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

本节将演示如何创建一个可添加路由、模板/视图、和数据库调用的“骨架”站点。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        <a
          href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/development_environment"
          >配置 Node 开发环境</a
        >。复习 Express 教程。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>掌握用 <strong>Express 应用生成器</strong> 创建站点的方法。</td>
    </tr>
  </tbody>
</table>

## 概览

本节演示了如何使用 [Express 应用生成器](http://www.expressjs.com.cn/starter/generator.html) 创建一个可添加路由、模板/视图和数据库调用的“骨架”网站。这里我们将使用该生成器为 [本地图书馆网站](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) 创建框架，以便在以后章节添加其他代码。过程非常简单，只需要在命令行运行“生成器 + 项目名称”即可，此外还可以指定站点的模板引擎和 CSS 生成器。

以下内容介绍了应用生成器的用法，以及视图 / CSS 的一些不同选项。还介绍了骨架站点的组织结构。最后，我们将介绍站点的运行方法，从而对其进行验证。

> **备注：** Express 应用生成器并非唯一的 Express 应用生成工具，而且生成项目的结构也不是组织文件和目录的唯一可行方式。但生成项目具有易于扩展和理解的模块化结构。最简单的 Express 应用请参阅 [Hello world 示例](http://expressjs.com.cn/starter/hello-world.html)（Express 镜像站）。

## 使用应用生成器

> **备注：** 本教程中命令操作基于 Linux/macOS 的 bash 终端，Windows 的命令提示符 cmd/PowerShell 与 bash 的概念和用法略有不同，为在 Windows 上获得一致的体验，可以：
>
> - 自己弄懂 cmd/PowerShell 与 bash 的区别。
> - 使用 [Git](https://git-scm.com/) 或 [MSYS2](http://www.msys2.org/) 为 Windows 提供的 bash。（推荐）
> - 使用 Windows 的 Linux 子系统。（到 Microsoft Store 中搜索“Linux”，安装喜欢的版本（Ubuntu 18.04、openSUSE 42、Debian 等），仅限 Windows 10，使用前需要先安装 [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)）

> **备注：** 你可能已经发现国内用 NPM 太慢了！这是由众所周知的不可抗力造成的。可用淘宝提供的 [CNPM](https://npm.taobao.org/) 代替之，功能和用法基本一致（只是不能上传自己的包）。

你应该已经安装好了生成器，它是 [设置 Node 开发环境](/zh-CN/docs/Learn/Server-side/Express_Nodejs/development_environment) 的一部分。可以使用 NPM 来安装全局的生成器，如下所示：

```bash
sudo npm install express-generator -g
```

生成器有许多选项，可以使用 `--help`（或 `-h`）命令进行查看：

![express 生成器的帮助信息](express-help.png)

大意如下：

```bash
$ express --help

  用法：express [选项] [目录]

  选项：

        --version        打印版本号
    -e, --ejs            添加 ejs 引擎支持
        --pug            添加 pug 引擎支持
        --hbs            添加 handlebars 引擎支持
    -H, --hogan          添加 hogan.js 引擎支持
    -v, --view <engine>  添加 <engine> 视图引擎支持 (ejs|hbs|hjs|jade|pug|twig|vash) (默认为 jade)
    -c, --css <engine>   添加 <engine> 样式表引擎支持 (less|stylus|compass|sass) (默认为纯 css)
        --git            添加 .gitignore
    -f, --force          对非空文件夹强制执行
    -h, --help           打印帮助信息
```

可以直接运行 express 命令，将使用 Jade 视图引擎和纯 CSS 在当前目录中创建项目。（如果指定目录名，则在子目录中创建项目）。

```bash
express
```

还可以使用 `--view` 选择视图（模板）引擎，并且/或者使用 `--css` 选择 CSS 生成引擎。

> **备注：** 不推荐用 `--hogan`、`--ejs`、`--hbs` 等参数选用模板引擎。请使用 `--view`（或 `-v`）。

### 我应该用哪个视图引擎？

Express 应用生成器支持多款流行的视图/模板引擎，包括 [EJS](https://www.npmjs.com/package/ejs)、[Hbs](http://github.com/donpark/hbs)、[Pug](https://pugjs.org/api/getting-started.html) (Jade)、[Twig](https://www.npmjs.com/package/twig) 和 [Vash](https://www.npmjs.com/package/vash)，缺省选项是 Jade。Express 本身也支持大量其他模板语言，[开箱即用](https://github.com/expressjs/express/wiki#template-engines)。

> **备注：** 如果要使用生成器不支持的模板引擎，请参阅 [在 Express 中使用模板引擎](http://expressjs.com.cn/guide/using-template-engines.html)（Express 文档）和所选视图引擎的文档。

一般来说，你应该选择一个大而全的模板引擎，可以尽快进入生产状态。就像你选择其他组件一样！选用模板引擎需要考虑以下因素：

- 进入生产状态的时间——如果你的团队已经有某个模板语言的经验，那么用它可能更快进入生产状态。否则你应该考虑所选模板引擎的学习曲线。
- 流行度和活跃度——要评估所选引擎的流行程度，以及它是否拥有活跃的社区。在网站的生命周期中遇到问题时，是否能够获得相关支持非常重要。
- 风格——某些模板引擎使用特定标记，来标识插入“普通”HTML 中的内容，而另一些模板引擎使用不同的语法（例如使用缩进和块名称）构造 HTML。
- 性能/渲染时间。
- 功能——你应该考虑所选引擎是否具有以下功能：

  - 布局继承：可以定义基本模板，然后“继承”它的一部分，使不同页面可以有不同的呈现。这通常比包含大量所需组件，或每次从头开始构建模板更好。
  - “包含”支持：可以通过包含其他模板来构建新模板。
  - 简明的变量和循环控制语法。
  - 能够在模板级别过滤变量值（例如，将变量设置为大写，或格式化日期值）。
  - 能够生成 HTML 以外的输出格式（例如 JSON 或 XML）。
  - 支持异步操作和流。
  - 可以在同时在客户端和服务器上使用。如果一款模板引擎可以在客户端使用，那么就使在客户端托管数据并完成所有（或大多数）渲染成为可能。

> **备注：** 互联网上有许多资源，可帮助你选择合适的视图/模板引擎。

本项目选用 [Pug](https://pugjs.org/api/getting-started.html) 模板引擎（Jade 是它不久前的曾用名），它是最流行的 Express / JavaScript 模板语言之一，且对 Express 生成器 [开箱即用](https://github.com/expressjs/express/wiki#template-engines)。

### 我应该用哪个 CSS 引擎？

Express 应用生成器支持最常见的 CSS 引擎：[LESS](http://lesscss.org/), [SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Stylus](http://stylus-lang.com/)。

> **备注：** CSS 的一些限制导致某些任务完成起来非常困难。CSS 引擎提供了更强大的语法来定义 CSS，然后将定义编译为纯 CSS 供浏览器使用。

与模板引擎一样，你也应该使用样式表引擎，这可以最大化团队生产力。本项目将使用原始 CSS（默认的），因为我们对 CSS 要求不复杂，没有必要使用引擎。

### 我应该用哪个数据库？

生成器生成的代码不使用、也不包含任何数据库。Express 应用可以使用 Node 支持的所有 [数据库](https://expressjs.com/en/guide/database-integration.html)（Express 本身不提供数据库管理机制）。

我们后续讨论数据库集成问题。

## 创建项目

我们为本地图书馆应用创建一个名为 express-locallibrary-tutorial 的项目，使用 Pug 模板库，不使用 CSS 引擎。

首先，进入准备放置项目的目录，然后在命令提示符运行 Express 应用生成器，生成器将创建（并列出）项目的文件：

![用 express 生成器生成一个应用](express.png)

生成器在最后还告诉你如何安装（**package.json** 中所列的）依赖，以及如何运行该应用。

## 运行骨架网站

现在我们已经拥有一个完整的项目骨架。虽然这个网站现在还做不了什么，但运行一下，展示一下工作原理也是值得的。

1. 首先，安装依赖项（`install` 命令将获取项目的 **package.json** 文件中列出的所有依赖项包）。

   ```bash
   npm install
   ```

2. 然后运行该应用。

   ```bash
   DEBUG=express-locallibrary-tutorial:* npm start
   ```

3. 最后在浏览器中导航至 <http://localhost:3000/> ，就可以访问该应用。你应该可以看到： ![Express 应用生成器生成的应用启动成功](success.png)

一个 Express 应用就配置成功了，它托管于 localhost:3000。

> **备注：** 指定 DEBUG 变量可启用控制台日志记录/调试。例如，当你访问上面的页面时，你会看到像这样的调试输出： ![用 npm start 启动这个应用](npm-start.png) 直接通过 `npm start` 命令启动应用也可以，但不会看到调试信息。

## 文件改动时重启服务器

只有重启服务器才能看到 Express 网站所做的改动。每次改动后手动启停服务器实在太烦人了，有必要花点时间让这项工作自动化。

[nodemon](https://github.com/remy/nodemon) 是最简便的自动化工具之一。通常将其全局安装（因为它是一个“工具”）：

```bash
sudo npm install -g nodemon
```

这里还可以把它作为开发依赖将安装在本地，于是使用这个项目的开发人员只要安装这个应用就能自动获得。通过以下命令将其安装在骨架项目的根目录：

```bash
npm install --save-dev nodemon
```

项目的 **package.json** 文件将自动添加一个新的属性：

```json
  "devDependencies": {
    "nodemon": "^1.18.9"
  }
```

如果没有全局安装该工具，就无法从命令行启动它（除非我们将其添加到路径中），但是可以在 NPM 脚本中调用它，因为 NPM 掌握所有已安装包的信息。找到 package.json 的 `scripts` 部分。在 `"start"` 一行的末尾添加逗号，并在新的一行中添加 `"devstart"`，如下所示：

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

现在可以用新建的 `devstart` 命令启动服务器：

```bash
DEBUG=express-locallibrary-tutorial:* npm run devstart
```

现在，如果编辑项目中的任何文件，服务器将自动重启（或者可以随时使用 rs 命令来重启）。查看更新后的页面需要点击浏览器的“刷新”按钮。

> **备注：** 这里必须使用“`npm run <scriptname>`”命令，而不是 `npm start`，因为“start”本质上是映射到脚本的一条 NPM 命令。我们可以在 `start` 脚本中替换它，但我们只想在开发期间使用 nodemon，因此有必要创建一条新的脚本命令。

## 生成的项目

我们来看看刚刚创建的项目。

### 目录结构

安装好依赖项的生成项目具有如下文件结构（**不**带“/”前缀的是文件）：

```plain
/express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    /node_modules
        [约 4,500 个子文件夹和文件]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

**package.json** 文件定义依赖项和其他信息，以及一个调用应用入口（**/bin/www**，一个 JavaScript 文件）的启动脚本，脚本中还设置了一些应用的错误处理，加载 **app.js** 来完成其余工作。**/routes** 目录中用不同模块保存应用路由。/**views** 目录保存模板。

下面来详细介绍这些文件。

### package.json

**package.json** 文件中定义了应用依赖和其他信息：

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
    "devstart": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "http-errors": "~1.6.2",
    "morgan": "~1.9.0",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^1.18.9"
  }
}
```

依赖包括 _express_ 包，和选用的视图引擎包（_pug_）。还有以下一些实用的包：

- [cookie-parser](https://www.npmjs.com/package/cookie-parser)：用于解析 cookie 头来填充 `req.cookies`（提供了访问 cookie 信息的便捷方法）。
- [debug](https://www.npmjs.com/package/debug)：一个小型 node 调试程序，仿照 node 核心的调试技术建立。
- [http-errors](https://www.npmjs.com/package/http-errors)：处理错误中间件。
- [morgan](https://www.npmjs.com/package/morgan)：node 专用 HTTP 请求记录器中间件。

"`scripts`" 部分，定义了一个 "`start`" 脚本，当运行 `npm start` 时会调用它来启动服务器。在脚本定义中可以看到 `start` 实际上运行了 "node **./bin/www"**。还有一个 "`devstart`" 脚本，可以通过运行 `npm run devstart` 来运行 "nodemon **./bin/www**"。

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

### www 文件

文件 **/bin/www** 是应用入口！它做的第一件事是 `require()` “真实”的应用入口（即项目根目录中的 **app.js** ），**app.js** 会设置并返回 [`express()`](http://expressjs.com/en/api.html)应用对象。

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 * 模块依赖项。
 */

var app = require("../app");
```

> **备注：** `require()` 是一个全局的 node 函数，可将模块导入当前文件。这里使用相对路径指定 **app.js** 模块，并省略了 .**js** 扩展名（可选）。

文件的其余部分先为 `app` 设置端口（环境变量中的预定义值或默认值 3000），再创建一个 HTTP 服务器，然后开始监听请求，报告服务器错误和连接信息。其他内容可暂时忽略（这里所有内容都是机器生成的模板），但感兴趣的话可以随时回来看看。

### app.js

此文件创建一个 `express` 应用对象（依照惯例命名为 `app`），通过各种设置选项和中间件来设置这个应用，然后从该模块中导出。以下代码只展示了文件中创建和导出应用对象的部分：

```js
var express = require('express');
var app = express();
...
module.exports = app;
```

上文的 **www** 入口文件中 `require()` 的 `app` 就是这里导出的。

我们来详细了解一下 **app.js** 文件。首先，它使用 `require()` 导入了一些实用 node 库，其中包括之前用 NPM 下载的 _`express`_、_`http-errors`_、_`morgan`_ 和 _`cookie-parser`_，还有一个 _`path`_ 库，它是用于解析文件和目录的核心 node 库。

```js
var express = require("express");
var createError = require("http-errors");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var path = require("path");
```

然后 `require()` 的是用户路由目录中的模块。这些模块/文件用于处理特定的“路由”（URL 路径）。可以通过添加新文件来扩展骨架应用，比如添加图书相关的路由来列出所有馆藏书目。

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
```

> **备注：** 此时我们刚刚导入了模块；还没有真正使用过其中的路由（稍后会使用）。

下面我们用导入的 `express` 模块来创建 `app` 对象，然后使用它来设置视图（模板）引擎。设置引擎分两步：首先设置 '`views`' 以指定模板的存储文件夹（此处设为子文件夹 **/views**）。然后设置 '`view engine`' 以指定模板库（本例中设为“pug” ）。

```js
var app = express();

// view engine setup
// 视图引擎设定
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

下一组 `app.use()` 调用将中间件库添加进请求处理链。除了之前导入的第三方库之外，我们还使用 `express.static` 中间件将项目 **/public** 目录下所有静态文件托管至根目录。

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
```

所有中间件都已设置完毕，现在把（之前导入的）路由处理器添加到请求处理链中。从而为网站的不同部分定义具体的路由：

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> **备注：** 这些路径（`'/'` 和 '`/users'`）将作为导入路由的前缀。如果导入的模块 `users` 在 `/profile` 定义了路由，则可以在 `/users/profile` 访问该路由。我们将在后面的文章中，详细讨论路由。

最后一个中间件为错误和 HTTP 404 响应添加处理方法。

```js
// catch 404 and forward to error handler
// 捕获 404 并抛给错误处理器
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// 错误处理器
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // 设置 locals，只在开发环境提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  // 渲染出错页面
  res.status(err.status || 500);
  res.render("error");
});
```

Express 应用对象（`app`）现已完成配置。最后一步是将其添加到 `exports` 模块（使它可以通过 **/bin/www** 导入）。

```js
module.exports = app;
```

### 路由

路由文档 **/routes/users.js** 如下所示（由于路由文件均使用类似结构，所以 **index.js** 略过不讲）。首先加载 `express` 模块 并获取 `express.Router` 对象（命名为 `router`）。然后为 `router` 指定路由，最后导出 `router`（就可以导入 **app.js** 了）。

```js
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
```

该路由定义了一个回调，在检测到正确模式的 HTTP `GET` 请求时将调用该回调。正确模式即导入模块时指定的路由（'`/users`'）加该模块（'`/`'）中定义的任何内容。换句话说，在收到 `/users/` URL 时使用此路由。

> **备注：** 用 node 启动该应用并访问 <http://localhost:3000/users/>，浏览器会返回一条消息：'respond with a resource'。

值得注意的是，上述回调函数有第三个参数 '`next`'，因此它是一个中间件函数，而不是简单的路由回调。`next` 参数暂时还用不到，在 `'/'` 路径中添加多个路由处理器时才会涉及。

### 视图（模板）

视图（模板）存保存在 **/views** 目录中（ **app.js** 中指定），使用 **.pug** 扩展名。 [`Response.render()`](http://expressjs.com/en/4x/api.html#res.render) 方法用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。在 **/routes/index.js** 中可以看到，该路由使用 '`index`' 模板和一个模板变量 `title` 来渲染响应。

```js
/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});
```

以下是上文代码中涉及到的模板（**index.pug**）。pug 语法稍后再详细讨论。现在只需要知道：`title` 变量将以 `'Express'` 作为值插入模板的指定位置。

```plain
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## 挑战自我

在 **/routes/users.js** 中添加一个新路由，在 URL `/users/cool/` 处显示文本“你好酷”。运行服务器，并在浏览器中访问 `http://localhost:3000/users/cool/`，测试一下是否成功。

## 小结

现在你已经为 [本地图书馆](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) 创建好了骨架，并且成功在 node 上运行起来。同时最重要的是，你了解了项目的结构，从而了解了如何为本地图书馆添加路由和视图。

下一节我们开始修改骨架，让它具备一些图书馆网站的功能。

## 参见

- [Express 应用程序生成器](https://expressjs.com/zh-cn/starter/generator.html)（Express 文档）
- [将模板引擎用于 Express](https://expressjs.com/zh-cn/guide/using-template-engines.html)（Express 文档）

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
