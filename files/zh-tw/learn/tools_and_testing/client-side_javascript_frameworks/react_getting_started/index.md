---
title: React 新手入門
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

在本文中，我們將向 React 打個招呼。我們將探索其背後與範例的一些細節，在自己電腦設置基本的 React 工具鏈環境，並建立一個簡單入門的應用程式——好瞭解 React 基本架構。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">預備知識：</th>
      <td>
        <p>
          熟悉基本的<a href="/zh-TW/docs/Learn/HTML">HTML</a>、<a
            href="/zh-TW/docs/Learn/CSS"
            >CSS</a
          >、以及<a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a
          >程式語言，具備<a
            href="/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >終端機/命令列環境</a
          >的基本知識。
        </p>
        <p>
          React使用稱為JSX（JavaScript和XML）的HTML-in-JavaScript語法。熟悉HTML和JavaScript將幫助您學習JSX，並更好地確定應用程式內的錯誤是與JavaScript有關還是與React更具體的領域有關。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">學習目標：</th>
      <td>
        設立本機的React開發環境，建立初始應用程式，瞭解React基本運作方式。
      </td>
    </tr>
  </tbody>
</table>

## Hello React

正如其官方標語所述，[React](https://reactjs.org/)是一個用來建構使用者介面的函式庫。React 不是框架——它甚至不是 web 獨有的開發技術，它可以和其他函式庫或套件搭配使用，以在特定環境中渲染。例如，[React Native](https://reactnative.dev/)可用來建立手機應用程式；[React 360](https://facebook.github.io/react-360/)可以用來建立 VR 應用程式；除此之外還有很多的可能性。

為了要建構 web，開發者將 React 與[ReactDOM](https://reactjs.org/docs/react-dom.html)搭配使用。React 與 ReactDOM 的組合經常與其他 web 開發框架相提並論——以用於解決相同的問題。當我們稱呼 React 為「框架（framework）」時，我們是使用口語化的理解好加以討論。

(使用)React 的主要目標是最大限度減少開發者建構 UI 介面時出現的錯誤。它通過使用元件——描述部分使用者界面且自成一體的邏輯與程式碼段落來實現這點。這些元件可以組合在一起以建立完整的 UI 界面，React 將大部分的渲染邏輯給抽象化出來，讓你可以專注於 UI 層的程式設計。

## 使用範例

與本文章模組中涵蓋的其他框架不同，React 不會對程式碼風格規範或檔案組織實施嚴格的規則限制。這允許團隊設置最適合他們的開發規範，並以任何他們想要的方式採用 React。React 可以處理單一個按鈕、界面的幾個部分或應用程式整個使用者界面。

儘管 React*可以*用來開發[介面的少許部分](https://reactjs.org/docs/add-react-to-a-website.html)，但它沒辦法像 jQuery 函式庫，甚至像 Vue 這樣的框架能簡單「引入（drop into）」進應用程式中——當你使用 React 建構應用程式時，它會更加平易近人。

此外，React 應用程式有許多開發者體驗(developer-experience)優勢，例如使用 JSX 編寫介面時會需要編譯過程。添加如 Babel 這樣的編譯器到網站上會讓程式碼執行效率變慢，因此開發者通常會在建構階段中設置此類開發工具。React 對開發工具需求蠻吃重的，但這些都是可以學習的。

本文將重點介紹透過 Facebook 提供的[create-react-app](https://create-react-app.dev/)工具，來使用 React 渲染應用程式使用者界面的範例。

## React 如何使用 JavaScript？

React 在許多設計模式中利用了現代 JavaScript 特性。它與 JavaScript 最大的區別在於使用[JSX](https://reactjs.org/docs/introducing-jsx.html)語法。JSX 擴展了 JavaScript 語法，以便能與類似 HTML 的程式碼並存。例如：

```js
const heading = <h1>Mozilla Developer Network</h1>;
```

這個`heading`變數又稱為**JSX expression（JSX 表達式）**。React 可以在我們的應用程式中使用它，以渲染顯示[`<h1>`](/zh-TW/docs/Web/HTML/Element/Heading_Elements)標籤

假如我們出於語義化的原因，想要將`heading`包裹在[`<header>`](/zh-TW/docs/Web/HTML/Element/header)標籤中，那該怎麼做呢？JSX 方法允許我們將元素互相嵌套，就像我們在使用 HTML 一樣：

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **備註：** 前面程式碼中的括號`(`、`)`不是 JSX 獨有的，這對你的應用程式沒有任何影響。它們會向你（和你的電腦）發出訊號，表示括號其中的多行程式碼是同個表達式的一部分。你也可以像這樣編寫表達式：
>
> ```js
> const header = (
>   <header>
>     <h1>Mozilla Developer Network</h1>
>   </header>
> );
> ```
>
> 然而，這樣寫看起來有點不對勁，因為這段表達式[`<header>`](/zh-TW/docs/Web/HTML/Element/header)的開始標籤沒有縮排到與其對應結束標籤相同的位置。

當然，若沒有其他的幫助，你的瀏覽器是無法直接讀取解析 JSX 的，當編譯完成（藉由使用像[Babel](https://babeljs.io/)或[Parcel](https://parceljs.org/)之類的工具），我們的 header 表達式看起來像這樣：

```js
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

是*可以*跳過編譯階段，並使用[`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement)來撰寫你自己的 UI 介面的。但是，這樣做會失去 JSX 的聲明性優勢，並且程式碼更難閱讀。雖然編譯是開發過程的額外步驟，但是許多 React 社群的開發者認為為了可讀性，使用 JSX 是值得的。此外，各種流行工具能使 JSX 到 JavaScript 的編譯成為其設置過程的一部分。除非你想，否則你不必自己配置編譯設定。

因為 JSX 是 HTML 和 JavaScript 的混合體，有一些開發者覺得它很直觀。也有其他人認為 JSX 的混合性使其變得混亂。但是，一旦你對它開始熟悉，JSX 能讓你更快、更直觀地建構使用者界面，並允許其他人一眼就能更好地理解你的程式碼（codebase）。

要閱讀更多有關 JSX 的資訊，可以查看 React 團隊的[JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)文章。

## 設置你的第一個 React 應用程式

有很多方法可以使用 React，但我們將使用命令行界面（CLI）工具 create-react-app。如前面所說，它可以透過安裝一些套件和創建一些文件檔案以處理上面描述的工具，使其可以用來加速開發 React 應用程式的過程。

是可以[不使用 create-react-app 就將 React 加入到網站裡](https://zh-hant.reactjs.org/docs/add-react-to-a-website.html)的，藉由複製一些[`<script>`](/zh-TW/docs/Web/HTML/Element/script)元素並加進 HTML 檔案中即可，但 create-react-app CLI 確實是開發 React 應用程式的常見起點。使用它可以讓你花更少的時間在設置上，好使用更多的時間專注在建構應用程式上。

### 環境要求

為了使用[create-react-app](https://create-react-app.dev/)，你需要先安裝[Node.js](https://nodejs.org/en/)。建議你使用長期支援（LTS）版本。Node.js 包括 npm（Node.js 套件管理器）和 npx（Node.js 套件運行器）。

你也可以使用 Yarn 套件管理器作為替代方案，但我們假設你在這個教學中使用 npm。參閱[Package management basics](/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)可取得有關 npm 和 yarn 的更多資訊。

如果你使用的系統是 Windows，你需要安裝一些軟體來讓 Windows 與 Unix/macOS 的終端機 terminal 保持同等環境，以便使用本教學中提到的 terminal 終端機指令。**Gitbash**（它包含在[git for Windows toolset](https://gitforwindows.org/)工具的其中之一）或者**[Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about)**（**WSL**）也同樣適合。有關這些以及一般終端指令的詳細資訊，可以參閱[Command line crash course](/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)。

另外要記住的是，React 和 ReactDOM 建立的應用程式只能在相當現代的瀏覽器上執行——通過一些 polyfills 才可以在 IE9+上運作。建議你使用現代瀏覽器來學習這些教學，例如：Firefox、Microsoft Edge、Safari 或 Chrome 等。

此外，請參閱以下內容以取得更多資訊：

- ["What is npm" on nodejs.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- ["Introducing npx" on the npm blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [The create-react-app documentation](https://create-react-app.dev/)

### 初始化你的應用程式

`create-react-app`需要一個參數：一個你給予應用程式的名字。`create-react-app`會使用該名稱建立一個新目錄，並在其中建立必要的文件檔案。確保你有`cd`到你希望該應用程式在你電腦硬碟裡的資料夾位置，然後在你電腦終端機 terminal 執行以下指令：

```bash
npx create-react-app moz-todo-react
```

此指令會建立一個名為`moz-todo-react`的資料夾目錄，並在其中做了幾件事：

- 安裝一些對 React 應用程式至關重要的 npm 套件。
- 編寫用來啟動 React 應用程式的腳本語言。
- 建立定義基本應用程式架構的文件和目錄結構。
- 如果你的電腦已有安裝 git 版控，則將該資料夾目錄初始化為 git 存儲庫。

> **備註：** 如果您已有安裝 yarn 套件管理器，`create-react-app`默認將使用它而不是使用 npm。如果你已安裝 yarn 和 npm 兩個套件管理器並且堅持繼續使用 npm，當你要執行`create-react-app`指令時，你可以添加指令`--use-npm`
>
> ```bash
> npx create-react-app moz-todo-react --use-npm
> ```

`create-react-app`執行時會在你的終端機 terminal 顯示一些訊息；這是正常的！執行可能需要一小段時間，所以現在可能是暫時泡杯茶休息的好時機。

當這個過程完成後，`cd`切換進`moz-todo-react`資料夾目錄並執行指令`npm start`。這個藉由`create-react-app`安裝的腳本將會在本機伺服器(電腦)的`localhost:3000`啟動以提供服務，並在新瀏覽器分頁打開該應用程式。你的瀏覽器將顯示如下內容：

![Screenshot of Firefox MacOS, open to localhost:3000, showing the default create-react-app application](default-create-react-app.png)

### 應用程式的結構

`create-react-app`提供我們開發 React 應用程式所需的一切。其初始資料夾目錄結構如下：

```plain
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

The **`src`** directory is where we'll spend most of our time, as it's where the source code for our application lives.

The **`public`** directory contains files that will be read by your browser while you're developing the app; the most important of these is `index.html`. React injects your code into this file so that your browser can run it. There's some other markup that helps create-react-app function, so take care not to edit it unless you know what you're doing. You very much should change the text inside the [`<title>`](/zh-TW/docs/Web/HTML/Element/title) element in this file to reflect the title of your application. Accurate page titles are important for accessibility!

The `public` directory will also be published when you build and deploy a production version of your app. We won't cover deployment in this tutorial, but you should be able to use a similar solution to that described in our [Deploying our app](/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment) tutorial.

The `package.json` file contains information about our project that Node.js/npm uses to keep it organized. This file is not unique to React applications; create-react-app merely populates it. You don't need to understand this file at all to complete this tutorial, however, if you'd like to learn more about it, you can read [What is the file \`package.json\`? on NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/); we also talk about it in our [Package management basics](/zh-TW/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) tutorial.

## 探索我們的第一個 React 元件——`<App/>`

In React, a **component** is a reusable module that renders a part of our app. These parts can be big or small, but they are usually clearly defined: they serve a single, obvious purpose.

Let's open `src/App.js`, since our browser is prompting us to edit it. This file contains our first component, `App`, and a few other lines of code:

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

The `App.js` file consists of three main parts: some [`import`](/zh-TW/docs/Web/JavaScript/Reference/Statements/import) statements at the top, the `App` component in the middle, and an [`export`](/zh-TW/docs/Web/JavaScript/Reference/Statements/export) statement at the bottom. Most React components follow this pattern.

### Import 引入語法

The `import` statements at the top of the file allow `App.js` to use code that has been defined elsewhere. Let's look at these statements more closely.

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
```

The first statement imports the React library itself. Because React turns the JSX we write into `React.createElement()`, all React components must import the `React` module. If you skip this step, your application will produce an error.

The second statement imports a logo from `'./logo.svg'`. Note the use of `./` at the beginning of the path, and the `.svg` extension at the end — these tell us that the file is local and that it is not a JavaScript file. Indeed, the `logo.svg` file lives in our source directory.

We don't write a path or extension when importing the `React` module — this is not a local file; instead, it is listed as a dependency in our `package.json` file. Be careful of this distinction as you work through this lesson!

The third statement imports the CSS related to our App component. Note that there is no variable name and no `from` directive. This particular import syntax is not native to JavaScript module syntax — it comes from Webpack, the tool create-react-app uses to bundle all our JavaScript files together and serve them to the browser.

### `App`元件

After the imports, we have a function named `App`. Whereas most of the JavaScript community prefers camel-case names like `helloWorld`, React components use pascal-case variable names, like `HelloWorld`, to make it clear that a given JSX element is a React component, and not a regular HTML tag. If you were to rename the `App` function to `app`, your browser would show you an error.

Let's look at `App` more closely.

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

The `App` function returns a JSX expression. This expression defines what your browser ultimately renders to the DOM.

Some elements in the expression have attributes, which are written just like in HTML, following a pattern of `attribute="value"`. On line 3, the opening [`<div>`](/zh-TW/docs/Web/HTML/Element/div) tag has a `className` attribute. This is the same as the [`class`](/zh-TW/docs/Web/HTML/Global_attributes/class) attribute in HTML, but because JSX is JavaScript, we can't use the word `class` — it's reserved, meaning JavaScript already uses it for a specific purpose and it would cause problems here in our code. A few other HTML attributes are written differently in JSX than they are in HTML too, for the same kind of reason. We'll cover them as we encounter them.

Take a moment to change the [`<p>`](/zh-TW/docs/Web/HTML/Element/p) tag on line 6 so that it reads "Hello, world!", then save your file. You'll notice that this change is immediately rendered in the development server running at `http://localhost:3000` in your browser. Now delete the [`<a>`](/zh-TW/docs/Web/HTML/Element/a) tag and save; the "Learn React" link will be gone.

Your `App` component should now look like this:

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

### Export 匯出語法

在`App.js`文件中的最底部，這個陳述語法`export default App`可以使我們的`App`元件能用在其他模組。

## 查詢索引

Let's open `src/index.js`, because that's where the `App` component is being used. This file is the entry point for our app, and it initially looks like this:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

As with `App.js`, the file starts by importing all the JS modules and other assets it needs to run. `src/index.css` holds global styles that are applied to our whole app. We can also see our `App` component imported here; it is made available for import thanks to the `export` statement at the bottom of `App.js`.

Line 7 calls React's `ReactDOM.render()` function with two arguments:

- The component we want to render, `<App />` in this case.
- The DOM element inside which we want the component to be rendered, in this case the element with an ID of `root`. If you look inside `public/index.html`, you'll see that this is a `<div>` element just inside the `<body>`.

All of this tells React that we want to render our React application with the `App` component as the root, or first component.

> **備註：** In JSX, React components and HTML elements must have closing slashes. Writing just `<App>` or just `<img>` will cause an error.

[Service workers](/zh-TW/docs/Web/API/Service_Worker_API/Using_Service_Workers) are interesting pieces of code that help application performance and allow features of your web applications to work offline, but they're not in scope for this article. You can delete line 5, as well as most of the code below it.

Your final `index.js` file should look like this:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## Variables and props

接下來，我們將使用一些 JavaScript 技巧好更輕鬆地在 React 中編輯元件與處理數據資料。我們將談談變數是如何在 JSX 中被使用的，並介紹 props，這是一種將資料傳遞到其他元件（接著就可以用變數形式來使用）的方式。

### JSX 中的變數

回到`App.js`，讓我們關注第 9 行：

```js
<img src={logo} className="App-logo" alt="logo" />
```

在這裡，`<img />`標籤的`src`屬性值在花括號（即大括號`{`與`}`）中，這就是 JSX 識別變數的方式。React 將會監聽`{logo}`，它知道你指的是我們在應用程式第 2 行引入的 logo，然後檢索 logo 檔案並呈現它。

讓我們嘗試創造一個自己的變數。在`App`的 return 語句之前，加入`const subject = 'React';`。你的`App`元件現在應該看起來是這樣：

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

至第 8 行改成我們的`subject`變數而不是單字「world」，像這樣：

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

當你存檔時，你的瀏覽器應該顯示「Hello, React!」而不是「Hello, world!」

變數很方便，但我們剛剛設置的變數並沒有充分利用 React 的特性。接下來該是 props 出場了。

### Component props

A **prop** is any data passed into a React component. React props are comparable to HTML attributes. Where HTML elements have attributes, React components have props. Props are written inside component calls, and use the same syntax as HTML attributes — `prop="value"`. In React, dataflow is unidirectional: props can only be passed from Parent components down to Child components; and props are read-only.

Let's open `index.js` and give our `<App/>` call its first prop.

Add a prop of `subject` to the `<App/>` component call, with a value of `Clarice`. When you are done, your code should look something like this:

```js
ReactDOM.render(<App subject="Clarice" />, document.getElementById("root"));
```

Back in `App.js`, let's revisit the App function itself, which reads like this (with the `return` statement shortened for brevity):

```js
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

Change the signature of the `App` function so that it accepts `props` as a parameter, and delete the `subject` const. Just like any other function parameter, you can put `props` in a `console.log()` to print it to your browser's console. Go ahead and do that before the `return` statement, like so:

```js
function App(props) {
  console.log(props);
  return (
    // return statement
  );
}
```

保存文件並檢查瀏覽器的 JavaScript 控制台 console。你應該會看到這樣的記錄：

```js
Object { subject: "Clarice" }
```

物件屬性`subject`與我們添加到到`<App />`元件調用的 prop`subject`相對應，並且字串`Clarice`與它的值對應。React 的元件 props 總是以這種方式傳遞到物件中。

現在`subject`是我們的 props 之一了，讓我們在`App.js`中使用它。用`props.subject`代替原本的`React`字串，如果你想的話，也可以刪除`console.log()`，你的程式碼看起來會是這樣：

```js
function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}
```

當你保存時, 應用程式現在應該會向你打招呼「Hello, Clarice!」。如果你返回`index.js`檔案內修改`subject`的值並存檔，你的字串將發生變化。

## 總結

我們對 React 的初步瞭解就到此結束了，包括如何在本機環境安裝它、建立入門應用程式及如何運作的基本知識。在下個章節中，我們將開始建構我們的第一個合適的應用程式——一個待辦清單。然而，在我們這樣做之前，先回顧一下我們學到的一些東西。

在 React 中：

- 元件可以引入（import）它們需要的模組，且必須在它們的文件檔案底部將自己匯出（export）。
- 元件函式的命名是`PascalCase`大駝峰式命名法。
- 你可以透過將 JSX 變數放在大括號之間來讀取它們，例如`{so}`。
- 某些 JSX 屬性與 HTML 屬性不同，因此它們不會與 JavaScript 保留字衝突。例如，HTML 中的`class`在 JSX 中會轉成`className`。注意多字組合而成的屬性名稱是駝峰式（camel-cased）命名的。
- Props 就像元件中被調用的屬性一樣被撰寫並傳遞到元件中。

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
