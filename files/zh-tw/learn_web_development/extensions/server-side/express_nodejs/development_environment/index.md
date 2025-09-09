---
title: Setting up a Node development environment
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

現在你已經了解 Express 的目的了，接下來繼續說明如何設定和測試 Windows、Linux (Ubuntu)和 Mac OS X 上的 Node/Express 開發環境。不管你用的是什麼作業系統，你都能在本文中找到開發 Express 應用的入門需知。

<table>
  <tbody>
    <tr>
      <th scope="row">前置需求:</th>
      <td>
        了解如何開啟terminal / command line. 了解如何在開發系統上安裝套件。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>在你的電腦上設定Express(X.XX)開發環境。</td>
    </tr>
  </tbody>
</table>

## Express 開發環境概覽

為了使你能快速的開發 web 應用，_Node_ 和 _Express_ 非常容易安裝，這個部分說明哪些工具是需要的、在 Ubuntu、macOS 和 Windows 中安裝 Node 和 Express 的最簡單方法、展示如何測試安裝成功與否。

### 什麼是 Express 開發環境?

_Express_ 開發環境包含 _Nodejs、NPM_ 套件管理器的安裝, 還有 _Express Application_ 產生器(可選)。

_Node_ 和 _NPM_ 套件管理器會從準備好的 binary package、安裝檔、 作業系統的套件管理器或是從源檔一起安裝。接著 _Express_ 會透過 NPM 進行安裝，成為你所有個別 Express web 應用的依賴項(以及其他函式庫，如模板引擎，資料庫驅動程式，身份驗證中間層，用於提供靜態文件的中間件等)

NPM 也可用來安裝 Express 應用程式產生器(全域用)，一個方便的工具幫助你創造符合 [MVC 模式](/zh-TW/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)的 Express web app 骨架。你不一定要使用應用程式產生器，因為每個 Express 應用程式不需要擁有同樣的檔案結構或依賴項。但為了專注於學習本身以及習慣模組化架構，我們會在接下來的教學中使用它。

> [!NOTE]
> 與其他不包含單獨的 web 開發伺服器的 Web 框架不同。 在 Node / Express 中，Web 應用程式創建並運行自己的 Web 伺服器！

典型的開發環境還包含其他工具，例如：編輯程式碼使用的[文字編輯器](/zh-TW/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors)、IDE，進行版本控置管理不同版本程式碼的 [Git](/zh-TW/docs/Glossary/Git)。這邊假設你已經有這種工具了(尤其是文字編輯器)

### 哪些作業系統有支援?

Node 可以執行在 Windows、macOS、各種 Linux、Docker 等等(nodejs 的[下載](https://nodejs.org/en/download/)頁面有完整的列表)，在開發階段中個人電腦應該都有足夠的效能來執行 Node 。Express 執行在 Node 環境中，所以也能所有有安裝 Node 的平台上執行。

在這份教學中我們提供 Windows、macOS 和 Ubuntu Linux 的 Node 安裝教學。

### 該用什麼版本的 Node/Express?

Node 有許多[版本](https://nodejs.org/en/blog/release/)，更新的版本代表著 bug 的修復、支援更新版本的 ECMAScript(JavaScript)標準和更好的 Node APIs 。

基本上你應該使用最新的 LTS 版本(*long-term supported，*長期維護版)。這種版本比『Current』版本更穩定而且還擁有最新的功能及持續性的更新維護。除非 LTS 不支援你需要的功能才使用『Current』版本。

而 Express ？永遠使用最新版！

### 關於資料庫和其他依賴項呢?

諸如資料庫、模版引擎、驗證引擎等等都屬於應用程式的一部分，這些依賴項會透過 NPM 導入應用程式環境中，在後續的章節將會進一步探討。

## 安裝 Node

為了使用 Express，首先要在你的電腦上安裝 Node 和[Node Package Manager (NPM)](https://docs.npmjs.com/)。接下來用最簡單的方法在 Ubuntu Linux 16.04、 macOS 和 Windows 10 上安裝 Nodejs 的 Long Term Supported (LTS)版本吧

> [!NOTE]
> 以下的部分用最簡單的方法在上述的作業系統中安裝 Node 和 NPM。如果你使用其他作業系統或想看看其他平台的安裝方式，請查閱[透過套件管理器安裝 Node.js](https://nodejs.org/en/download/package-manager/) (nodejs.org)。

### Windows 和 macOS

直接使用安裝檔吧！

1. 下載需要的安裝檔：
   1. 開啟 <https://nodejs.org/en/>
   2. 對於大部分的使用者來說，直接下載 LTS 版本

2. 下載完成後雙擊安裝檔，並照著安裝流程繼續。

### Ubuntu 16.04

安裝 Node 8.x LTS 版本最簡單的方法是使用[套件管理器](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)，只要在 terminal 上執行兩行指令

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

> [!WARNING]
> 不要直接從普通的 Ubuntu repositories 安裝，那邊只有很舊的版本。

### 測試 Nodejs 和 NPM 的安裝

測試 Node 安裝最簡單的方法是在 terminal/command 上執行"version"這個指令，它會顯示當前的 Node 版本:

```bash
>node -v
v8.9.4
```

NPM 應該會隨著 Node 一起安裝，可以用相同的方法進行測試:

```bash
>npm -v
5.6.0
```

接著用稍為令人興奮的方法來測試吧！讓我們創件一個非常基本的『純 Node』伺服器，當你開啟正確的網頁時它會在瀏覽器上顯示"Hello World"

1. 複製以下的文字到名為**hellonode.js**的檔案中，目前我們只用到 Node 而已。

   ```js
   //載入HTTP模組
   var http = require("http");

   //創建HTTP 伺服器並監聽8000埠
   http
     .createServer(function (request, response) {
       // Set the response HTTP header with HTTP status and Content type
       response.writeHead(200, { "Content-Type": "text/plain" });

       // Send the response body "Hello World"
       response.end("Hello World\n");
     })
     .listen(8000);

   // Print URL for accessing server
   console.log("Server running at http://127.0.0.1:8000/");
   ```

   這段程式載入『http』模組，並創建一個伺服器 (`createServer()`，並在 8000 埠上監聽 HTTP requests。 The script then prints a message to the console about what browser URL you can use to test the server. The `createServer()` function takes as an argument a callback function that will be invoked when an HTTP request is received — this simply returns a response with an HTTP status code of 200 ("OK") and the plain text "Hello World".

   > [!NOTE]
   > Don't worry if you don't understand exactly what this code is doing yet! We'll explain our code in greater detail once we start using Express!

2. Start the server by navigating into the same directory as your `hellonode.js` file in your command prompt, and calling `node` along with the script name, like so:

   ```bash
   >node hellonode.js
   Server running at http://127.0.0.1:8000/
   ```

3. Navigate to the URL (<http://127.0.0.1:8000/>). If everything is working, the browser should simply display the string "Hello World".

## Using NPM

Next to _Node_ itself, [NPM](https://docs.npmjs.com/) is the most important tool for working with _Node_ applications. NPM is used to fetch any packages (JavaScript libraries) that an application needs for development, testing, and/or production, and may also be used to run tests and tools used in the development process.

> [!NOTE]
> From Node's perspective, _Express_ is just another package that you need to install using NPM and then require in your own code.

You can manually use NPM to separately fetch each needed package. Typically we instead manage dependencies using a plain-text definition file named [package.json](https://docs.npmjs.com/files/package.json). This file lists all the dependencies for a specific JavaScript "package", including the package's name, version, description, initial file to execute, production dependencies, development dependencies, versions of _Node_ it can work with, etc. The **package.json** file should contain everything NPM needs to fetch and run your application (if you were writing a reusable library you could use this definition to upload your package to the npm respository and make it available for other users).

### Adding dependencies

The following steps show how you can use NPM to download a package, save it into the project dependencies, and then require it in a Node application.

> [!NOTE]
> Here we show the instructions to fetch and install the _Express_ package. Later on we'll show how this package, and others, are already specified for us using the _Express Application Generator_. This section is provided because it is useful to understand how NPM works and what is being created by the application generator.

1. First create a directory for your new application and navigate into it:

   ```bash
   mkdir myapp
   cd myapp
   ```

2. Use the npm `init` command to create a **package.json** file for your application. This command prompts you for a number of things, including the name and version of your application and the name of the initial entry point file (by default this is **index.js**). For now, just accept the defaults:

   ```bash
   npm init
   ```

   If you display the **package.json** file (`cat package.json`), you will see the defaults that you accepted, ending with the license.

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

3. Now install the _Express_ library in the **myapp** directory. The package will automatically be saved to the dependencies list in your **package.json** file.

   ```bash
   npm install express
   ```

   The dependencies section of your **package.json** will now appear at the end of the **package.json** file and will include _Express_.

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
       "express": "^4.16.2"
     }
   }
   ```

4. To use the library you call the `require()` function as shown below.

   ```js
   var express = require("express");
   var app = express();

   app.get("/", function (req, res) {
     res.send("Hello World!");
   });

   app.listen(8000, function () {
     console.log("Example app listening on port 8000!");
   });
   ```

   This code shows a minimal "HelloWorld" Express web application. This imports the "express" module and uses it to create a server (`app`) that listens for HTTP requests on port 8000 and prints a message to the console explaining what browser URL you can use to test the server. The `app.get()` function only responds to HTTP `GET` requests with the specified URL path ('/'), in this case by calling a function to send our _Hello World!_ message.

   Create a file named **index.js** in the root of the "myapp" application directory and give it the contents shown above.

5. You can start the server by calling node with the script in your command prompt:

   ```bash
   >node index.js
   Example app listening on port 8000
   ```

6. Navigate to the URL (<http://127.0.0.1:8000/>). If everything is working, the browser should simply display the string "Hello World!".

### Development dependencies

If a dependency is only used during development, you should instead save it as a "development dependency" (so that your package users don't have to install it in production). For example, to use the popular JavaScript Linting tool [eslint](http://eslint.org/) you would call NPM as shown:

```bash
npm install eslint --save-dev
```

The following entry would then be added to your application's **package.json**:

```js
  "devDependencies": {
    "eslint": "^4.12.1"
  }
```

> [!NOTE]
> "[Linters](<https://en.wikipedia.org/wiki/Lint_(software)>)" are tools that perform static analysis on software in order to recognise and report adherence/non-adherance to some set of coding best practice.

### Running tasks

In addition to defining and fetching dependencies you can also define _named_ scripts in your **package.json** files and call NPM to execute them with the [run-script](https://docs.npmjs.com/cli/run-script) command. This approach is commonly used to automate running tests and parts of the development or build toolchain (e.g., running tools to minify JavaScript, shrink images, LINT/analyse your code, etc).

> [!NOTE]
> Task runners like [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com/) can also be used to run tests and other external tools.

For example, to define a script to run the _eslint_ development dependency that we specified in the previous section we might add the following script block to our **package.json** file (assuming that our application source is in a folder /src/js):

```js
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
```

To explain a little further, `eslint src/js` is a command that we could enter in our terminal/command line to run `eslint` on JavaScript files contained in the `src/js` directory inside our app directory. Including the above inside our app's package.json file provides a shortcut for this command — `lint`.

We would then be able to run _eslint_ using NPM by calling:

```bash
npm run-script lint
# OR (using the alias)
npm run lint
```

This example may not look any shorter than the original command, but you can include much bigger commands inside your npm scripts, including chains of multiple commands. You could identify a single npm script that runs all your tests at once.

## Installing the Express Application Generator

The [Express Application Generator](https://expressjs.com/en/starter/generator.html) tool generates an Express application "skeleton". Install the generator using NPM as shown (the `-g` flag installs the tool globally so that you can call it from anywhere):

```plain
npm install express-generator -g
```

To create an _Express_ app named "helloworld" with the default settings, navigate to where you want to create it and run the app as shown:

```bash
express helloworld
```

> [!NOTE]
> You can also specify the template library to use and a number of other settings. Use the `help` command to see all the options:
>
> ```bash
> express --help
> ```

NPM will create the new Express app in a sub folder of your current location, displaying build progress on the console. On completion, the tool will display the commands you need to enter to install the Node dependencies and start the app.

> [!NOTE]
> The new app will have a **package.json** file in its root directory. You can open this to see what dependencies are installed, including Express and the template library Jade:
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
>     "body-parser": "~1.18.2",
>     "cookie-parser": "~1.4.3",
>     "debug": "~2.6.9",
>     "express": "~4.15.5",
>     "jade": "~1.11.0",
>     "morgan": "~1.9.0",
>     "serve-favicon": "~2.4.5"
>   }
> }
> ```

Install all the dependencies for the helloworld app using NPM as shown:

```bash
cd helloworld
npm install
```

Then run the app (the commands are slightly different for Windows and Linux/macOS), as shown below:

```bash
# Run the helloworld on Windows
SET DEBUG=helloworld:* & npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

The DEBUG command creates useful logging, resulting in an output like that shown below.

```bash
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\Github\expresstests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
```

Open a browser and navigate to <http://127.0.0.1:3000/> to see the default Express welcome page.

![Express - Generated App Default Screen](express_default_screen.png)

We'll talk more about the generated app when we get to the article on generating a skeleton application.

## 總結

你現在有一個 Node 開發環境在你的電腦上運行，可以用來創造 Express 網頁應用。你也看到如何用 NPM 來加載 Express 到一個應用中，以及看到如何使用 Express 應用產生器，創建應用，然後執行它們。

下一篇文章，我們開始跟著教程一步一步實作，使用這個開發環境與搭配工具，建立一個完整的網頁應用。

## 參見

- [Downloads](https://nodejs.org/en/download/) page (nodejs.org)
- [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) (nodejs.org)
- [Installing Express](http://expressjs.com/en/starter/installing.html) (expressjs.com)
- [Express Application Generator](https://expressjs.com/en/starter/generator.html) (expressjs.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
