---
title: 设置 Node 开发环境
slug: Learn/Server-side/Express_Nodejs/development_environment
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}

你已经了解了 Express 的用途，接下来将在 Windows、Linux（Ubuntu）和 Mac OS X 下搭建 Node/Express 开发环境。本节将介绍主流操作系统下开发 Express 程序的必备知识。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>会打开终端 / 命令行。会为开发用操作系统安装软件包。</td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>在电脑上搭建 Express 开发环境。</td>
    </tr>
  </tbody>
</table>

## Express 开发环境概述

使用 Node 和 Express 搭建 web 应用程序开发环境非常简便。这一章节将简述所需的工具，在主流操作系统（Ubuntu、macOS 和 Windows）上安装 Node 的步骤，以及测试安装是否成功的方法。

### 什么是 Express 开发环境？

完整的 Express 本地开发环境包括 Nodejs、NPM 包管理器和 **Express 应用生成器**（可选）。

Node 和 NPM 包管理器可以用二进制包、安装程序或系统包管理器一并安装（下文将介绍）。然后在开发每个 Express web 应用时，由 NPM 针对当前应用将 Express（以及模板引擎、数据库驱动程序、身份验证中间件、静态文件托管中间件等其他库）作为依赖项进行安装。

NPM 也可以安装（全局的）**Express 应用生成器**，可用于创建遵循 [MVC 模式](/zh-CN/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture) 的 Express 应用框架。它不是必备的，因为无需这个工具就可以创建 Express 应用（或相同架构布局或依赖的 Express 应用）。但我们还是会使用它，因为它更容易上手，还有助于应用结构的模块化管理。

> **备注：** 与某些其他 Web 框架不同，开发环境不包含单独的开发 Web 服务器。在 Node / Express 中，Web 应用程序将创建并运行自己的 Web 服务器！

典型的开发环境中还需要一些外围工具，包括用于编写代码的 [文本编辑器](/zh-CN/docs/Learn/Common_questions/实用文本编辑器) 或 IDE，用于代码控制管理的工具（比如代码版本控制工具 [Git](https://git-scm.com/)）。这里假定你已经安装了这些工具（尤其是文本编辑器）。

### 支持哪些操作系统？

Node 可以在 Windows、macOS、Linux 的诸多发行版本或 Docker 等环境运行（完整列表见 Node [下载页面](https://nodejs.org/zh-cn/download/)）。几乎所有的个人电脑都具备 Node 开发所需性能。Express 运行在 Node 环境中，因此可运行 Node 的平台均可运行 Express。

本文将介绍 Windows、macOS 和 Ubuntu Linux 上的安装步骤。

### 应该选择 Node/Express 的哪个版本？

Node 有许多 [发行版本](https://nodejs.org/zh-cn/blog/release/)，新版包含 bug 修复、对最新版本 ECMAScript 标准的支持，以及 API 的改进。

通常应该选择最新的 LTS（Long-term supported，长期支持版）发行版，因为它比当前发布版（current）更稳定。当前发布版包含最新的特性（维护中），如果需要 LTS 版本中没有提供的特征，那么可以选择它。

Express 应选用最新版本。

### 数据库和其他依赖该如何选择？

其他依赖（例如数据库驱动程序、模板引擎、身份认证引擎等）是应用的一部分，使用 NPM 将它们引入到应用环境中。稍后进行讨论。

## 安装 Node

先在操作系统上安装 Node.js 和 NPM 后才可使用 Express。接下来将介绍如何最简便地在 Ubuntu 18.04、macOS Mojave 以及 Windows 10 上安装 Node.js 最新的 LTS 版本。.

> **备注：** 以下内容将介绍在上述三种 OS 上安装 Node 和 NPM 的最简便方法。对于其他操作系统，以及更多的安装方法，可以参考 [通过包管理器方式安装 Node.js](https://nodejs.org/zh-cn/download/package-manager/) (nodejs.org).

### Windows 和 macOS

在 Windows 和 macOS 上安装 Node 和 NPM 非常简单明了，使用现成的安装包就行了：

1. 下载安装包：

   1. 访问 <https://nodejs.org/zh-cn/>
   2. 左侧按钮上写着“推荐多数用户使用（LTS）”，点击下载。

2. 双击下载的安装包，按照提示即可安装。

### Ubuntu 18.04

安装 Node 最新的 LTS 版本的最简便方法就是使用[包管理器](https://nodejs.org/zh-cn/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages)，可以直接从 Ubuntu 二进制发行仓库中下载。通过在终端运行以下两行简单的命令就可以做到：

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

> **警告：** 直接从 Ubuntu 默认仓库中下载的 Node 是 8.x 版本的。

### 测试 Node.js 和 NPM 是否安装成功

检查 Node 是否成功安装的最简单方法就是在终端（或命令行）中运行 "`version`" 命令，看是否返回版本号字符串：

```bash
$ node -v
v10.15.0
```

NPM 应该与 Node.js 一同成功安装，可以使用同样的方法来测试一下：

```bash
$ npm -v
6.7.0
```

下面的测试也许会带来小小激动：创建一个非常基础的“纯 Node”服务器，在浏览器中访问正确的 URL 地址时将直接打印 "Hello world"：

1. 以下代码使用了纯 Node 的特性（与 Express 无关）和一些 ES6 的语法，把它复制到 **hellonode.js** 文件中：

   ```js
   // 加载 HTTP 模块
   const http = require("http");
   const hostname = "127.0.0.1";
   const port = 3000;

   // 创建 HTTP 服务器
   const server = http.createServer((req, res) => {
     // 用 HTTP 状态码和内容类型（Content-Type）设置 HTTP 响应头
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");

     // 发送响应体
     res.end("Hello World\n");
   });

   // 监听 3000 端口的请求，注册一个回调函数记录监听开始
   server.listen(port, hostname, () => {
     console.log(`服务器运行于 http://${hostname}:${port}/`);
   });
   ```

   代码导入了 `"http"` 模块，并用它（`createServer()`）创建了一个服务器来监听 3000 端口的 HTTP 请求。随后在控制台打印一条信息，提示测试服务器的正确 URL。`createServer()` 函数接受一个回调函数作为参数，并在接收 HTTP 请求后进行回调。直接返回了 HTTP 状态码 200（"`OK`"），以及纯文本信息 "Hello World"。

   > **备注：** 现在看不懂这些代码请不要担心，开始使用 Express 后候会进行更加详细的解释。

2. 在命令行工具中进入 hellonode.js 文件所在的目录，输入“node + 文件名”并运行，服务器就启动了：

   ```bash
   $ node hellonode.js
   服务器运行于 http://127.0.0.1:3000/
   ```

3. 在浏览器中访问这个 URL（[http://127.0.0.1:3000/](http://127.0.0.1:8000/)），如果一切正常，浏览器会直接显示出 "Hello world" 字符串。

## 使用 NPM

构建 Node 应用过程中，[NPM](https://docs.npmjs.com/) 是除了 Node 本身之外最重要的工具。可用于获取应用开发、测试以及生产所需的所有包（JavaScript 库）。也可运行开发过程中使用的测试单元和工具。

> **备注：** 以 Node 的角度来看，Express 只是一个用 NPM 安装、供人使用的包而已。

可以用 NPM 手动逐个安装所需包。但通常可用 [package.json](https://docs.npmjs.com/files/package.json) 文件来管理依赖。把每个依赖以一个 JavaScript“包”的形式（其中包括名称、版本、描述，初始执行文件、生产依赖，开发依赖、支持的 _Node_ 版本，等等）罗列在这个文件中。package.json 文件包含 NPM 获取和运行应用程序所需的所有内容（在编写可重用的库时，可以用它把包上传到 NPM 仓库中供其他用户使用）。

### 添加依赖项

下面介绍用 NPM 下载包、将包保存进工程依赖树，以及在 Node 应用中调用包的方法和步骤。

> **备注：** 现在来讲解获取和安装 Express 包的步骤。稍后解释为什么可以直接对 Express 包（乃至其他包）使用 **Express 应用生成器**。这段对理解 NPM 的工作原理和应用生成器的工作机制有一定的帮助。

1. 首先为新应用创建一个目录，并进入它：

   ```bash
   mkdir myapp
   cd myapp
   ```

2. 然后，使用 NPM 的 init 命令为应用创建一个 **package.json** 文件。这个命令将请求一系列的信息，包括应用的名称和版本，程序初始进入点的文件名（默认为 **index.js**）。现在先接受默认信息即可：

   ```bash
   npm init
   ```

   **package.json** 文件中保存了所接受的默认信息，最后一条是许可证信息：

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC"
   }
   ```

3. 接下来在 **myapp** 目录中安装 Express，用下面的命令将 Express 保存在 **package.json** 文件中的依赖表里：

   ```bash
   npm install express
   ```

   此时 **package.json** 文件的底部会出现依赖列表（"dependencies"），其中包含 Express：

   ```json
   {
     "name": "myapp",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "",
     "license": "ISC",
     "dependencies": {
       "express": "^4.16.4"
     }
   }
   ```

4. 可以调用 `require()` 函数来使用库：

   ```js
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
     res.send("Hello World!");
   });

   app.listen(8000, () => {
     console.log("示例程序正在监听 8000 端口！");
   });
   ```

   以上代码展示了一个最简单的 "HelloWorld" Express 应用。它导入了 "express" 模块并用它创建了一个服务器（app）来监听 8000 端口，并且在控制台打印了一条信息以提示测试服务器的正确 URL。`app.get()` 函数只响应对特定路径（`'/'`）的 HTTP `GET` 请求，此处的响应就是发送 "Hello World!"。

   在 myapp 应用的根目录下新建一个 **index.js** 文件，将上述代码粘贴进来并保存。

5. 在命令行输入 node + 文件名 即可启动服务器：

   ```bash
   $ node index.js
   示例程序正在监听 8000 端口！
   ```

6. 在浏览器中访问这个 URL（<http://127.0.0.1:8000/>），如果一切正常，浏览器会直接显示出 "Hello world!" 字符串。

### 开发依赖（Development dependencies）

如果一个依赖只在开发过程中用到，应该将其保存为“开发依赖”（这样，包的用户便无需在生产环境中安装它们）。比如，如果要使用 [eslint](http://eslint.org/)（一款流行的 JavaScript lint 工具）可以这样调用 NPM：

```bash
npm install eslint --save-dev
```

当前应用的 **package.json** 文件中将自动添加以下项目：

```js
  "devDependencies": {
    "eslint": "^5.12.0"
  }
```

> **备注：** "[lint](https://zh.wikipedia.org/wiki/Lint)" 是用于对软件进行静态分析的工具，可以发现并报告软件是否遵循某些最佳编程惯例。

### 运行任务

在 **package.json** 中，除了定义和获取依赖，还可以定义脚本，然后通过 NPM 的 [run-script](https://docs.npmjs.com/cli/run-script) 命令来运行。这个用法普遍用于自动运行测试单元或部分应用，也可用于构建工具链（比如运行工具来压缩 JavaScript 文件或图片，lint 或分析代码，等等）。

> **备注：** [Gulp](http://gulpjs.com/) 和 [Grunt](http://gruntjs.com/) 等任务运行器可用于运行测试单元或其他外部工具。

比如，可以在 **package.json** 文件中添加以下内容来定义一个脚本，从而对上文的代码运行 eslint（假设应用代码在 /src/js 文件夹下）：

```js
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```

深入解释一下，eslint src/js 命令可以在终端/命令行对应用目录下的 src/js 目录中的 JavaScript 文件运行 eslint。把上面一段脚本添加进应用的 package.json 中还可以为此命令提供一个快捷方式—— lint。

然后就可以用 NPM 这样运行 eslint 了：

```bash
npm run-script lint
```

或使用别名：

```bash
npm run lint
```

这个示例看上去并没有让原始命令简洁多少，但在 NPM 脚本中可以加入更长的命令，甚至是多命令链。比如可以让单一的 NPM 脚本来一次运行所有的测试单元。

## 安装 Express 应用生成器

[Express 应用生成器](https://expressjs.com/en/starter/generator.html) 工具可以生成一个 Express 应用的“框架”。可以用 NPM 这样安装它（-g 参数可以把该工具全局安装，那样就可以在任意应用中使用了）：

```bash
npm install express-generator -g
```

进入应用目录，运行以下命令，即可创建一个名为 "helloworld" 的 Express 应用：

```bash
express helloworld
```

> **备注：** 也可以指定模板库来使用其他丰富的设置。可通过 help 命令来查看所有选项：
>
> ```bash
> $ express --help
> ```

NPM 将在当前位置的子目录中创建新的 Express 应用，可以在控制台看到构建的过程。在完成时，NPM 会提示你需要安装哪些 Node 依赖，以及如何开启应用。

> **备注：** 新应用的根目录有一个 **package.json** 文件。可以打开它看看都安装了哪些依赖，其中可以看到 Express 和 Jade 模板库：
>
> ```js
> {
>   "name": "helloworld",
>   "version": "0.0.0",
>   "private": true,
>   "scripts": {
>     "start": "node ./bin/www"
>   },
>   "dependencies": {
>     "cookie-parser": "~1.4.3",
>     "debug": "~2.6.9",
>     "express": "~4.16.0",
>     "http-errors": "~1.6.2",
>     "jade": "~1.11.0",
>     "morgan": "~1.9.0"
>   }
> }
> ```

用下列命令可为 helloworld 应用安装所有依赖：

```bash
cd helloworld
npm install
```

然后运行这个应用（Windows 环境）：

```bash
> SET DEBUG=helloworld:* & npm start
```

（Linux/macOS 环境）：

```bash
DEBUG=helloworld:* npm start
```

DEBUG 命令可以展示应用运行时返回的有用的日志信息，如下所示：

![设置 DEBUG 命令显示的日志信息](debug.png)

打开浏览器并访问 <http://127.0.0.1:3000/> 将看到 Express 的默认欢迎页面。

![生成应用的默认主页](express.png)

稍后在创建应用框架一节中将讨论生成应用的具体细节。

## 小结

现在 Node 开发环境已经配置好了，可以用于创建 Express 应用了。你还了解了用 NPM 导入 Express 的步骤，以及如何创建（使用 Express 应用生成器）和运行 web 应用。

下一节将开始用上述的环境和工具通过实战逐步搭建一个完整的 web 应用。

## 参见

- [Node.js 下载页面](https://nodejs.org/zh-cn/download/) （nodejs.org 官方中文页面）
- [通过包管理器方式安装 Node.js](https://nodejs.org/zh-cn/download/package-manager/) （nodejs.org 官方中文页面）
- [安装 Express](http://www.expressjs.com.cn/starter/installing.html) （expressjs.com.cn 中文镜像页面）
- [Express 应用程序生成器](http://www.expressjs.com.cn/starter/generator.html) （expressjs.com.cn 中文镜像页面）

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Introduction", "Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs")}}
