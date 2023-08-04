---
title: React 入门
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

本文会引导我们进入一段 React 学习之旅。我们将逐步了解有关它的背景和用例的一些细节，在自己的电脑上建起基本的 React 工具链，创建并使用一个简单的入门应用程序，以学习一些关于 React 在此过程中如何工作的知识。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        <p>
          熟悉核心 <a href="/zh-CN/docs/Learn/HTML">HTML</a>，<a
            href="/zh-CN/docs/Learn/CSS"
            >CSS</a
          >
          和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，了解<a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >终端/命令行</a
          >。
        </p>
        <p>
          React 使用称为 JSX（JavaScript 和 XML）的 HTML-in-JavaScript
          语法。熟悉 HTML 和 JavaScript 可以帮助您学习
          JSX，并更好地确定应用程序中的错误是与 JavaScript 还是与 React
          的更特定领域相关。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>要设置本地 React 开发环境，创建一个启动应用程序，并了解其工作原理</td>
    </tr>
  </tbody>
</table>

## 你好 React

如其官方口号所示，[React](https://reactjs.org/) 是一个用于构建用户界面的库。React 不是一个框架 —— 它的应用甚至不局限于 Web 开发，它可以与其他库一起使用以渲染到特定环境。例如，[React Native](https://reactnative.dev/) 可用于构建移动应用程序；[React 360](https://facebook.github.io/react-360/) 可用于构建虚拟现实应用程序……

为了构建 Web 应用，开发人员将 React 与 [ReactDOM 结合使用](https://reactjs.org/docs/react-dom.html)。React 和 ReactDOM 通常被与其他真正的 Web 开发框架相提并论，并用于解决相同的问题。当我们将 React 称为“框架”时，就是在进行口语化的理解。

React 的主要目标是最大程度地减少开发人员构建 UI 时发生的错误。它通过使用组件——描述部分用户界面的、自包含的逻辑代码段——来实现此目的。这些组件可以组合在一起以创建完整的 UI，React 将许多渲染工作进行抽象化，使您可以专注于 UI 设计 (译者注：显而易见，此设计不等于视觉稿的设计)。

## 用例

与本模块中涵盖的其他框架不同，React 不会对代码约定或文件组织实施严格的规则。这使团队可以设置最适合自己的约定，并以他们希望的任何方式采用 React。React 可以处理一个按钮，一个界面的几个部分或应用程序的整个用户界面。

尽管 React 可以用于[界面的小片段](https://reactjs.org/docs/add-react-to-a-website.html)中，但要和 jQuery 这样的库，甚至是像 Vue 这样的框架那样“引入”应用程序并不容易 —— 当你使用 React 构建整个应用程序时更容易上手。

另外，许多开发人员的经验对于 React 应用程序也是有用处的，例如使用 JSX 编写界面是需要编译过程的。在网站上添加类似于 Babel 的编译器会让网站上代码的运行速度变慢，因此开发人员通常会在构建项目的时候设置这样的工具。React 对于工具的要求可以说是很高的，但这是能够学习解决的。

本文将重点介绍使用 React 通过 Facebook 的 [create-react-app](https://create-react-app.dev/) 内的工具渲染应用程序中整个用户界面的用例。

## React 如何使用 JavaScript?

React 中的许多模式都使用了现代 JavaScript 的功能。React 与 JavaScript 的最大区别在于 [JSX](https://reactjs.org/docs/introducing-jsx.html) 语法的使用上。JSX 是在 JavaScript 语法上的拓展，因此类似于 HTML 的代码可以和 JSX 共存。例如：

```js
const heading = <h1>Mozilla Developer Network</h1>;
```

该 heading 常量称为 **JSX 表达式**。React 可以使用它在我们的应用程序中渲染 [`<h1>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 标签。

假设出于语义原因，我们想将 heading 包装 [`<header>`](/zh-CN/docs/Web/HTML/Element/header) 在标记中？JSX 方法允许我们将元素彼此嵌套，就像使用 HTML 一样：

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **备注：** 上一个代码段中的括号并非 JSX 的一部分，它对您的应用程序没有任何影响，括号只是用来向您（和您的计算机）表明其中的多行代码属于同一个表达式 (译者注：原文表述实在有点啰嗦)。因此上面的代码等同于：
>
> ```js
> const header = (
>   <header>
>     <h1>Mozilla Developer Network</h1>
>   </header>
> );
> ```
>
> 这看起来多少有点不适感，因为表达式前面的 [`<header>`](/zh-CN/docs/Web/HTML/Element/header) 标记没有缩进与其对应的结束标记相同的位置。

浏览器是无法读取直接解析 JSX 的。我们的 header 表达式经过（ [Babel](https://babeljs.io/) 或 [Parcel](https://parceljs.org/) 之类的工具）编译之后是这样的：

```js
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

*可以*跳过编译步骤，并使用 [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) 自己编写 UI。但是，这样做会失去 JSX 的声明性优势，并且代码变得更难以阅读。编译是开发过程中的一个额外步骤，但是 React 社区中的许多开发人员都认为 JSX 的可读性值得。另外，流行的工具使 JSX-to-JavaScript 编译成为其设置过程的一部分。除非您愿意，否则不必自己配置编译。

由于 JSX 是 HTML 和 JavaScript 的结合，因此一些开发人员认为它很直观。其他人则说它的混合特性使它变得混乱。但是，一旦熟悉了它，它将使您能够更快，更直观地构建用户界面，并使其他人一眼就能更好地理解您的代码库。

要阅读有关 JSX 的更多信息，请查看 React 团队的 [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html) 文章。

## 设置您的第一个 React 应用

有很多使用 React 的方法，但是我们将使用命令行界面（CLI）工具 create-react-app，如前所述，该方法通过安装一些软件包并创建一些软件包来加快开发 React 应用程序的过程。文件供您处理上述工具。

通过将一些 [`<script>`](/zh-CN/docs/Web/HTML/Element/script) 元素复制到 HTML 文件中，可以在[没有 create-react-app 的情况下将 React 添加到网站](https://reactjs.org/docs/add-react-to-a-website.html)，但是 create-react-app CLI 是 React 应用程序的常见起点。使用它可以让您花费更多的时间来构建应用，而花更少的时间进行设置。

### 要求

为了使用 create-react-app，您需要安装 [Node.js](https://nodejs.org/en/)。建议您使用长期支持（LTS）版本。Node 包括 npm（Node 程序包管理器）和 npx（Node 程序包运行器）

您也可以使用 Yarn 软件包管理器作为替代方案，但是我们假设在这套教程中使用 npm。有关 npm 和 yarn 的更多信息，请参见[程序包管理基础](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)。

如果您使用的是 Windows，则需要安装一些软件以与 Unix/macOS 终端保持同等地位，才能使用本教程中提到的终端命令。**Gitbash**（作为 [git Windows 工具集](https://gitforwindows.org/)的一部分提供）或**[适用于 Linux 的 Windows 子系统](https://docs.microsoft.com/en-us/windows/wsl/about)**（**WSL**）均适用。有关这些以及一般终端命令的更多信息，请参见[命令行速成课程](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)。

还请记住，React 和 ReactDOM 生成的应用程序只能在相当现代的一组浏览器上运行 —— 通过某些 polyfill 可以使用 IE9+。在阅读这些教程时，建议您使用 Firefox，Safari 或 Chrome 等现代浏览器。

另外，有关更多信息，请参见以下内容：

- ["What is npm" on nodejs.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- ["Introducing npx" on the npm blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [The create-react-app documentation](https://create-react-app.dev/)

### 初始化您的应用

`create-react-app` ，该命令接受一个参数：即你想给自己的应用所起的名字。`create-react-app` 将为此应用创建一个同名的文件夹，并在其中创建所需文件。在你打算放置你的应用程序的文件夹下打开你的命令终端，并键入命令：

```bash
npx create-react-app moz-todo-react
```

这句命令创建了一个名为 `moz-todo-react` 的文件夹，并在此文件夹里做了如下工作：

- 为你的应用程序安装了一些 npm 包；
- 写入 react 应用启动所需要的脚本文件；
- 创建一系列结构化的子文件夹和文件，奠定应用程序的基础架构；
- 如果你的电脑上安装了 git 的话，顺便帮你把 git 仓库也建好。

> **备注：** 如果你的电脑上安装了 yarn 的话，create-react-app 会默认使用 yarn 而非 npm。如果你同时安装了 yarn 和 npm，但你希望使用 npm 的话，在 create-react-app 的时候需要输入 `--use-npm` **:**
>
> ```bash
> npx create-react-app moz-todo-react --use-npm
> ```

`create-react-app` 运行的时候会在终端上显示一些与其状态相关的信息，通常情况下无需为此担心。运行需要一点时间，在此期间你可以适度放松一下。

处理完成之后，你可以 `cd` 到 `moz-todo-react` 文件夹下，然后键入 `npm start` 命令并回车，先前由 create-react-app 创建的脚本会启动一个地服务 <localhost:3000>，并打开你的默认浏览器来访问这个服务。成功启动浏览器的话，你的浏览器上会显示如下画面：

![Firefox MacOS 的屏幕截图，打开到 localhost：3000，显示了默认的 create-react-app 应用程序](default-create-react-app.png)

### 应用结构

create-react-app 提供了开发 React 应用所需的工具。它的初始文件结构如下：

```
moz-todo-react
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

目录 **`src`** 是我们花费时间最多的地方，因为它是我们 React 应用源码存放的目录。

目录 **`public`** 包含了开发应用时浏览器会读取的文件，其中最重要的就是 `index.html`。React 将目录 **`src`** 中的代码嵌入这个文件，从而浏览器才能运行此文件。 `index.html`中的有些内容关乎 create-react-app 的运作，因此除非你知道自己在做什么样的修改，否则不建议编辑这个文件。当然，你可以修改`index.html`中的 [`<title>`](/zh-CN/docs/Web/HTML/Element/title) 元素的内容来表现此应用程序通俗易懂的名称。

目录 `public` 会在建立并部署此应用的时候更新。此教程不涉及部署，你可以参考 [Deploying our app](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) 这一篇教程。

文件 `package.json` 包含了 Node.js/npm 为了建立该应用程序所管理着的文件信息。这个文件不是 React 应用独有的。你无需理解这个文件也能看懂这篇教程。不过，如果你想了解更多，你可以阅读 [What is the file `package.json`? on NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/) 和 [Package management basics](/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)。

## 探索第一个 React 组件 — `<App/>`

在 React 中，组件是组成应用程序的可重复利用的模块。组件可大可小，但它们都只有单一的、明确的功能。

打开 `src/App.js`，之前打开的页面也提示我们对这个文件进行编辑。这个文件包含了我们第一个组件 `App`，内容如下：

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

文件 `App.js` 主要由三部分组成：顶部的 [`import`](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 语句，中间的 `App` 组件，以及底部的 [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 语句。大多数 React 组件都遵循这个模式。

### import 语句

脚本开头的 `import` 语句允许在此脚本中使用其他文件中的代码，让我们更进一步地了解这些语句。

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
```

第一句代码引入了 React 库，这是为了将代码中的 JSX 语句转为`React.createElement()`，所有的 React 模块都应该引入 React 模块，否则会抛错。

第二句代码引入了 `'./logo.svg'`。注意文件路径以 `./` 开头、由 `.svg` 尾——表明这是一个本地文件，并且它不是 JavaScript 文件。

> **备注：** 我们没有指定 React 模块的路径——表明它并非来自本地文件，而是在 `package.json` 文件中列为依赖项。在整个学习过程中，请务必留心这两种引入方式的不同之处。

第三行引入了我们的组件所需的 CSS 文件。与上面两句不同，这里没有将引入的内容赋给任何变量、也没有用到 `from` 指令。请注意这种特殊的语法并非原生 JS 的语法 —— 它源自前端资源打包工具 webpack，而 create-react-app 正是基于 webpack 配置而来的。

> **备注：** 译者补充：webpack 可用于打包 JS 和非 JS 的内容 (当然，非 JS 的内容需要一些插件或加载器来处理)，但是 JavaScript 标准只有关于 JS 的内容，所以 webpack 社区使用这种特殊的 `import` 语句来声明对非 JS 内容的引用。
>
> 详情参见 webpack 官方和社区，截止目前 (2020 年下旬)，webpack 仍是现代前端工作中必不可少的技能之一。

### `App` 组件

在 import 所需资源之后，我们定义了一个名为 App 的函数，尽管大部分 JavaScript 社区推崇使用驼峰式命名法，如：“helloWorld”。但 React 组件使用帕斯卡命名法，如“HelloWorld”，来帮助用户辨认一个 JSX 元素是 React 组件而非普通的 HTML 标签。如果您将函数名“App”改为“app”，您的浏览器会显示错误。

让我们进一步看下 App 方法。

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
```

App 方法返回一个 JSX 表达式，这个表达式定义了浏览器最终要渲染的 DOM。

表达式中的元素就像以前写的 HTML 一样，都拥有属性，并且遵循 `attribute="value"` 的模式。在第三行，开始标签 [`<div>`](/zh-CN/docs/Web/HTML/Element/div) 有着 `className` 属性。这个属性与在 HTML 中的 [`class`](/zh-CN/docs/Web/HTML/Global_attributes/class) 属性相同，但是由于 JSX 就是 JavaScript, 我们不能使用 `class` 属性 - 这个是关键字，意味着 JavaScript 已经用它执行其他任务，使用 `class` 属性将会在我们的代码中产生冲突。由于同样的原因，一些其他的 HTML 属性在 JSX 中也有着不同的书写方式，当我们碰到它们时，我们将会详述。

把第 6 行的 [`<p>`](/zh-CN/docs/Web/HTML/Element/p) 标签内容改为 "Hello, world!" 并保存文件。你会发现这个改变也会立即在浏览器的`http://localhost:3000` 中同步渲染。现在删掉 [`<a>`](/zh-CN/docs/Web/HTML/Element/a) 标签并保存，"Learn React"链接也会同样被删除。

你的 `App` 组件应该如下所示：

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
      </header>
    </div>
  );
}
```

### Export 语句

在 `App.js` 文件的最底部， `export default App` 语句使得 `App` 组件能被其他模块使用。

## Interrogating the index

现在让我们打开 `src/index.js`, 因为这也是 `App` 组件被用到的地方。这个文件是我们 app 的入口点，在一开始它如下所示

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

就像 `App.js` 一样，这个文件一开始 import 了所有的 JS 模块和其他运行所需要的资源。`src/index.css`定义了运用于整个 app 的 global style。我们可以看到我们的 `App` 组件也被 imported 了，这是在 `App.js` 底部的语句让 import `App` 变得可行。

第七行调用 React 的 `ReactDOM.render()` 函数，并传入两个参数：

- 我们想要渲染的组件，在这个例子中是 `<App />` .
- 我们想要渲染组件所在的 DOM 元素，在这个例子中是带着 `root` 标签的元素。让我们看一下 `public/index.html` 的代码，可以看到这有一个 `<div>` 元素 在 `<body>` 里。

上述所有都告诉 React 我们想把 `App` 组件作为 root 或者第一个组件来渲染我们的 React App。

> **备注：** 在 JSX 中，React 组件和 HTML 元素必须有关闭斜杠（`/`），如 `<App />`，如果我们写 `<App>` 或者 `<img>` 将会报错。

[Service workers](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers) 能让我们的 App 离线运行，但它不在本篇文章的范围中，您可以删除第 5 行和第 9 到 12 行。

您最终的 `index.js` 文件应该如下所示：

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## Variables and props

接下来，我们将使用一些 JavaScript 的技巧来让我们在 React 中编辑组件以及处理数据更加顺手。我们将讨论如何在 JSX 中 使用 variables，并且介绍 props，props 是我们用来往组件里传入数据的一种方法，传入之后我们可以用 variable 访问传入的变量。

### Variables in JSX

回到 `App.js`, 让我们看一下第 9 行：

```js
<img src={logo} className="App-logo" alt="logo" />
```

可以看到，`<img />` 标签的 `src` 属性值是在大括号中的——`{logo}`。这是 JSX 识别变量的方式。React 将会识别 `{logo}`，知道你在我们 app 第二行引入的 logo，然后 React 会读取这个文件它并渲染。

让我们试着设置一个我们自己的变量，在 `App` return 之前，添加 `const subject = 'React';`。您的代码现在应该如下所示：

```js
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
      </header>
    </div>
  );
}
```

把第 8 行的 "world" 替换成我们自己的变量 `subject` ，如下所示：

```js
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}!</p>
      </header>
    </div>
  );
}
```

当我们保存时，浏览器将会显示 "Hello, React!"，而不是 "Hello, world!"

变量十分方便，但是我们没有利用到 React 的特性，接下来我们将介绍 Props。

### Component props

**prop** 是任何传入 React 组件的数据。Props 写在组件中，并且像 HTML 属性一样写成 `prop="value"`。让我们打开 `index.js` 并且为我们的 `<App/>` 添加第一个 prop。

为 `<App/>` 组件添加一个叫 `subject` 并有着 `Clarice` 值的 prop。当完成之后，您的代码应如下所示：

```js
ReactDOM.render(<App subject="Clarice" />, document.getElementById("root"));
```

回到 `App.js`，代码应该如下所示（return 中的内容省略了）

```js
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

改变 `App` 的函数签名，让它接收 `props` 作为一个参数。就像其他参数一样，您可以把 `props` 放在 `console.log()` 中，让其在浏览器打印出来。把它放在您的 `subject` 之后，以及 `return` 之前，您的代码应如下所示：

```js
function App(props) {
  const subject = "React";
  console.log(props);
  return (
    // return statement
  );
}
```

保存您的文件并检查您浏览器中的 JavaScript Console，您将会发现如下所示的语句：

```js
Object { subject: "Clarice" }
```

对象的 `subject` 属性与我们放入 `App` 函数签名的 prop 相对应，并且 `Clarice` 字符串与它的值相对应，在 React 中的组件 props 总是用这种方式传入 object 中。

现在 `subject` 是我们的 props 之一了，让我们在 `App.js` 中使用它。用 `props.subject` 替代原本的 `React` 字符串，如果你想的话，也可以删除 `console.log()`，您的代码将如下所示：

```js
function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}
```

当您保存之后，app 应该会输出 "Hello, Clarice!"。如果您回到 `index.js`，并且修改 `subject` 的值并保存，您输出的字也会随之改变。

## 总结

以上就是我们对 React 的初步认识，包括如何在本地下载它，创建一个初始 app，以及一些基本的操作。在下篇文章，我们将会开始创建我们的第一个 app——一个任务清单。在我们开始下篇文章之前，让我们先复习下我们现在所学的。

在 React 中：

- 组件可以 import 它们需要的模块，并且在文件底部将自身 export，以让其他组件使用。
- 组件是用 `PascalCase` 也就是帕斯卡命名法命名的。
- 通过把变量放在大括号中，您可以读取 JSX 的变量，如`{so}`
- 一些 JSX 属性与 HTML 属性不相同，这样就不会与 JavaScript 的保留字相冲突，比如说，在 HTML 中的 `class` 会在 JSX 中转译为 `className`。注意这些属性都是驼峰式命名的。
- Props 就像属性一样写在组件里，并且传入组件。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
