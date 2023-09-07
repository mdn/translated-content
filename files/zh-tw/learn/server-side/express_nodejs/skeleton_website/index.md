---
title: "Express 教學 2: 創建一個骨架網站"
slug: Learn/Server-side/Express_Nodejs/skeleton_website
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}

在 [Express 教程](/zh-TW/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)的第二篇文章，演示如何創建一個 "骨架" 網站項目，你可以接著在裡面加入網站特定的路由、模板/視圖、和數据庫調用。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前置條件:</th>
      <td>
        <a
          href="/zh-TW/docs/Learn/Server-side/Express_Nodejs/development_environment"
          >架設一個Node 開發環境</a
        >。回顧Express 教程。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>能夠使用<em>Express 應用產生器，</em>創建自己新的網頁項目。</td>
    </tr>
  </tbody>
</table>

## 概覽

本文演示如何使用 [Express 應用產生器](https://expressjs.com/en/starter/generator.html) 工具，創建一個 "骨架" 網站，然後您可以使用特定於站點的路由，視圖/模板和數據庫調用來填充它們。在這個教程，我們將使用該工具，為我們的本地圖書館網站創建框架，我們稍後將添加該網站所需的所有其他代碼。該過程非常簡單，只需要在命令行上，用新項目名稱調用生成器，還可以指定站點的模板引擎和 CSS 生成器。

以下部分向您展示如何調用應用程序生成器，並提供關於視圖或 CSS 的不同選項的一些解釋。我們還將解釋骨架網站的結構。最後，我們將展示如何運行網站，來驗證它是否有效。

> **備註：** Express Application Generator 並非 Express 應用程序的唯一生成器，生成的項目不是構建文件和目錄的唯一可行方式。然而，生成的網站具有易於擴展和理解的模塊化結構。有關最小 Express 應用程序的信息，請參閱 [Hello world](https://expressjs.com/en/starter/hello-world.html) 示例（Express docs）。

## 使用應用產生器

您應該已經安裝了生成器，作為設置 Node 開發環境的一部分。作為快速提醒，您可以使用 NPM 軟件包管理器，在整個站點安裝生成器工具，如下所示：

```bash
npm install express-generator -g
```

生成器有許多選項，您可以使用`--help`（或`-h`）命令，在命令行上查看它們：

```bash
> express --help

  Usage: express [options] [dir]

  Options:

    -h, --help           output usage information
        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
```

您可以使用 Jade 視圖引擎和純 CSS 來指定 `express`，以在當前目錄中創建項目（如果指定目錄名，則項目將創建在具有該名稱的子文件夾中）。

```bash
express
```

您還可以使用`--view`選擇視圖（模板）引擎，並且/或者使用`--css`選擇 CSS 生成引擎。

> **備註：** 選擇模板引擎的其他選項（例如 `--hogan`, `--ejs`, `--hbs`等）已被棄用。請用 `--view` (或 `-v`)!

### 我應該用哪個視圖引擎?

Express Application Generator 允許您配置許多流行的視圖/模板引擎，包括 [EJS](https://www.npmjs.com/package/ejs), [Hbs](http://github.com/donpark/hbs), [Pug](https://pugjs.org/api/getting-started.html) (Jade), [Twig](https://www.npmjs.com/package/twig), 和 [Vash](https://www.npmjs.com/package/vash)，但如果您沒有指定視圖選項，它會默認選擇 Jade。 Express 本身也可以支持大量其他模板語言，是「[開箱即可使用](https://github.com/expressjs/express/wiki#template-engines)」的。

> **備註：** 如果要使用生成器不支持的模板引擎，請參閱[在 Express 中使用模板引擎（Express 文檔）](https://expressjs.com/en/guide/using-template-engines.html)，並參閱目標視圖引擎的文檔。

一般來說，您應該選擇一種「可以提供您所需的所有功能」的模板引擎，
並使您能夠儘早提高生產力 - 換句話說，就像您選擇其他組件一樣！比較模板引擎時需要考慮的一些事項如下：

- 具備生產力之前所需要花費的時間 — 如果您的團隊已經有模板語言的經驗，那麼使用該語言可能會更快地提高生產力。如果不是，那麼你應該考慮候選模板引擎的相對學習曲線（即以投入時間與得到的生產力為 XY 座標所繪製的曲線）。
- 人氣和活躍 — 回顧引擎的普及程度以及它是否擁有活躍的社區。當您在網站的生命週期中遇到問題時，能夠獲得對引擎的支持非常重要。
- 風格 — 某些模板引擎使用特定的標記，來指示在 「普通」 HTML 內插入的內容，而其他模板引擎使用不同的語法（例如，使用縮進和區塊名稱）構造 HTML。
- 性能/渲染時間。
- 特點 — 你應該考慮你看中的引擎是否具有以下功能：

  - 佈局繼承：允許您定義基本模板，然後 「繼承」 它的一部分，使特定頁面可以有不同的呈現。比起通過包含大量必需組件，或每次從頭開始構建模板，這通常是更好的方式。
  - "Include" 支持：允許您通過包含其他模板，來構建模板。
  - 簡潔的變量和循環控制語法。
  - 能夠在模板級別過濾變量值（例如，將變量設置為大寫，或格式化日期值）。
  - 能夠生成 HTML 以外的輸出格式（例如 JSON 或 XML）。
  - 支持異步操作和流媒體。
  - 可以在客戶端和服務器上使用。如果可以在客戶端上使用模板引擎，則允許提供數據，並有可能在客戶端完成所有渲染，或大部分渲染。

> **備註：** 互聯網上有許多資源，可幫助您比較不同的視圖/模板引擎選擇！

對於這個項目，我們將使用 [Pug](https://pugjs.org/api/getting-started.html) 模板引擎（這是最近更名的 Jade 引擎），因為這是最流行的 Express / JavaScript 模板語言之一，並且應用發生器支持開箱即用。

### 我應該用哪個 CSS 樣式引擎?

Express 應用生成器允許您創建一個項目，並配置最常見的 CSS 樣式表引擎：[LESS](http://lesscss.org/), [SASS](http://sass-lang.com/), [Compass](http://compass-style.org/), [Stylus](http://stylus-lang.com/)。

> **備註：** CSS 有一些限制，使某些任務變得困難。 CSS 樣式表引擎允許您使用更強大的語法來定義您的 CSS，然後將定義編譯為純粹的舊式 CSS，以供瀏覽器使用。

與模板引擎一樣，您應該使用樣式表引擎，這樣可以讓您的團隊獲得最高生產力。對於這個項目，我們將使用普通的 CSS（默認值），因為我們的 CSS 要求不夠複雜，沒有必要使用其他任何東西。

### 我應該用哪個數據庫?

生成的代碼不使用/包含任何數據庫。 Express 應用程序可以使用 Node 支持的任何[數據庫機制](https://expressjs.com/en/guide/database-integration.html)（Express 本身並未針對數據庫管理，定義任何特定的附加行為/要求）。
我們將在後面的文章中，討論如何與數據庫集成。

## 創建項目

對於我們要構建的示例 Local Library 應用程序，我們將使用 Pug 模板庫，創建一個名為 express-locallibrary-tutorial 的項目，並且不使用 CSS 樣式表引擎。

首先到要創建項目的位置，然後在命令提示符下，運行 Express 應用生成器，如下所示：

```bash
express express-locallibrary-tutorial --view=pug
```

成器將創建（並列出）項目的文件。

```bash
   create : express-locallibrary-tutorial
   create : express-locallibrary-tutorial/package.json
   create : express-locallibrary-tutorial/app.js
   create : express-locallibrary-tutorial/public/images
   create : express-locallibrary-tutorial/public
   create : express-locallibrary-tutorial/public/stylesheets
   create : express-locallibrary-tutorial/public/stylesheets/style.css
   create : express-locallibrary-tutorial/public/javascripts
   create : express-locallibrary-tutorial/routes
   create : express-locallibrary-tutorial/routes/index.js
   create : express-locallibrary-tutorial/routes/users.js
   create : express-locallibrary-tutorial/views
   create : express-locallibrary-tutorial/views/index.pug
   create : express-locallibrary-tutorial/views/layout.pug
   create : express-locallibrary-tutorial/views/error.pug
   create : express-locallibrary-tutorial/bin
   create : express-locallibrary-tutorial/bin/www

   install dependencies:
     > cd express-locallibrary-tutorial && npm install

   run the app:
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

在輸出結束時，生成器提供關於「如何安裝依賴關係」的指示信息（如 **package.json** 文件中所列），以及如何運行應用程序（上述說明適用於 Windows；在 Linux / macOS 上，它們會略有不同）。

## 運行骨架網站

在這一時間點上，我們有一個完整的骨架項目。該網站實際上並沒有做太多工作，但運行它，能夠展示它是如何工作的。

1. 首先安裝依賴項（`install`安裝命令，將獲取項目的 **package.json** 文件中列出的所有依賴項包）。

   ```bash
   cd express-locallibrary-tutorial
   npm install
   ```

2. 然後運行該應用程序。

   - 在 Windows 上，使用此命令:

     ```bash
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - 在 macOS 或 Linux，使用此命令:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. 然後在瀏覽器中加載 `http://localhost:3000/`，以訪問該應用程序。

你應該會看到一個瀏覽器頁面，就像這樣:

![Browser for default Express app generator website](expressgeneratorskeletonwebsite.png)

你有一個能工作的 Express 應用了，讓它在 `http://localhost:3000/` 服務。

> **備註：** 你也可以使用 `npm start` 命令啟動應用程序。如下圖所示，指定 DEBUG 變量可啟用控制台日誌記錄/調試。例如，當你訪問上面的頁面時，你會看到像這樣的調試輸出：
>
> ```bash
> >SET DEBUG=express-locallibrary-tutorial:* & npm start
>
> > express-locallibrary-tutorial@0.0.0 start D:\express-locallibrary-tutorial
> > node ./bin/www
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 200 288.474 ms - 170
> GET /stylesheets/style.css 200 5.799 ms - 111
> GET /favicon.ico 404 34.134 ms - 1335
> ```

## 讓伺服器在檔案更改時重新啟動

在您重新啟動服務器之前，您對 Express 網站所做的任何更改，目前都不可見。每次進行更改時，必須停止並重新啟動服務器，很快變得非常煩人，因此值得花時間使服務器在需要時，自動重新啟動。

這種工具中，最簡單的之一就是 [nodemon](https://github.com/remy/nodemon)。這通常是全局安裝的（因為它是一個「工具」），但在這裡，我們將在本地安裝和使用它，作為開發人員依賴項，以便任何使用該項目的開發人員，在安裝應用程序時自動獲取它。在骨架項目的根目錄中，使用以下命令：

```bash
npm install --save-dev nodemon
```

如果您打開項目的 **package.json** 文件，您現在將看到一個具有此依賴關係的新區段：

```json
  "devDependencies": {
    "nodemon": "^1.14.11"
  }
```

由於該工具沒有全局安裝，我們無法從命令行啟動它（除非我們將其添加到路徑中），但是我們可以從 NPM 腳本中調用它，因為 NPM 知道所有關於安裝的軟件包的信息。找到你的 package.json 的腳本 scripts 區塊。我們更新 `scripts` 區塊，最初的一行，以"`start`"開頭，在該行的末尾添加逗號，並添加 "`devstart`" 開頭的一行，如下所示：

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

現在我們可以用與前面幾乎完全相同的方式，啟動服務器，但使用指定的 devstart 命令：

- 在 Windows，使用此命令:

  ```bash
  SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
  ```

- 在 macOS or Linux，使用此命令:

  ```bash
  DEBUG=express-locallibrary-tutorial:* npm run devstart
  ```

> **備註：** 現在，如果您編輯項目中的任何文件，服務器將重新啟動（或者您可以隨時在命令提示符下，鍵入`rs`來重新啟動它）。您仍需要重新加載瀏覽器，以刷新頁面。
>
> 我們現在必須調用「`npm run <scriptname>`」而不是 `npm start`，因為「start」實際上是映射到指定腳本的 NPM 命令。我們可以在啟動腳本中替換該命令，但我們只想在開發期間使用 nodemon，因此創建新的腳本命令是有意義的。

## 從產生器得到的項目

現在我們來看看我們剛剛創建的項目。

### 目錄結構

從產生器得到的生成項目，現在已經安裝了依賴項，具有以下文件結構 （**不帶**前綴 「/」 的項目，表示文件）。 **package.json** 文件定義了應用程序依賴項，和其他信息。它還定義了一個啟動腳本，它將調用應用程序入口點 JavaScript 文件 **/bin/www**。這設置了一些應用程序的錯誤處理，然後加載 **app.js** ，來完成剩下的工作。應用程序路徑，存儲在 **/routes** 目錄下的單獨模塊中。模板存儲在 **/views** 目錄下。

```plain
/express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    /node_modules
        [about 4,500 subdirectories and files]
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

以下各節將詳細介紹這些文件。

### package.json

**package.json** 文件定義了應用程序依賴關係，和其他訊息：

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.18.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.2",
    "morgan": "~1.9.0",
    "pug": "~2.0.0-rc.4",
    "serve-favicon": "~2.4.5"
  },
  "devDependencies": {
    "nodemon": "^1.14.11"
  }
}
```

依賴關係包括 express 套件，和我們所選視圖引擎（pug）的套件。另外，我們還有以下的套件，在許多 Web 應用程序中很有用：

- [body-parser](https://www.npmjs.com/package/body-parser): 這解析傳入 HTTP 請求的正文 body 部分，並更容易提取包含信息的不同部分。例如，您可以使用它來讀取 `POST` 參數。
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): 用於解析 cookie header 並填充 `req.cookies`（本質上提供了訪問 cookie 信息的便捷方法）。
- [debug](https://www.npmjs.com/package/debug): 一個小型 node 調試程序，仿照 node 核心的調試技術建立的。
- [morgan](https://www.npmjs.com/package/morgan): 搭配 node 使用的 HTTP 請求記錄器中間層軟件。
- [serve-favicon](https://www.npmjs.com/package/serve-favicon): 用於提供收藏圖標 [favicon](https://en.wikipedia.org/wiki/Favicon) 的 node 中間層軟件（這是用於表示瀏覽器選項卡、書籤等網站內的圖標）。

腳本部分，定義了一個「開始」 "start" 腳本，當我們調用 `npm start` 來啟動服務器時，這就是我們所調用的腳本。從腳本定義中，您可以看到這實際上用 node 啟動了 JavaScript 文件 **./bin/www**。它還定義了一個「devstart」 腳本，我們在調用 `npm run devstart` 時調用它。這將啟動相同的 **./bin/www** 文件，但使用 nodemon 調用而不是 node 。

```json
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```

### www 文件

文件 **/bin/www** 是應用程序入口點！它做的第一件事是 `require()` 「真正的」 應用程序入口點（即項目根目錄中的 app.js ），**app.js** 會設置並返回 [`express()`](http://expressjs.com/en/api.html)應用程序的對象。

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require("../app");
```

> **備註：** `require()` 是一個全局 node 函數，用於將模塊導入當前文件。這裡我們使用相對路徑指定 **app.js** 模塊，並省略可選的（**.js**）文件擴展名。

此文件中的其餘代碼，將設置一個 node 運行的 HTTP 服務器，並將應用 app 設置為特定的端口（在環境變量中定義，如果變量未定義，則定義為 3000），並開始監聽和報告服務器錯誤和連接。現在你並不需要知道代碼的其他內容（這個文件中的所有內容都是 「樣板文件」 ），但如果你感興趣，可以隨時查看它。

### app.js

此文件創建一個 `express` 應用程序對象（按傳統命名為 `app`），使用各種設置和中間件，以設置應用程序，然後從模塊導出應用程序。下面的代碼只顯示了文件的一部分，創建和導出應用程序對象的部分：

```js
var express = require('express');
var app = express();
...
module.exports = app;
```

回到上面的 **www** 入口點文件，它是在導入該文件時，提供給調用者的這個 `module.exports` 對象。

讓我們詳細了解 **app.js** 文件。首先，我們使用 `require()`將一些有用的 node 庫導入到文件中，其中包括我們先前使用 NPM 為應用程序下載的 express，serve-favicon，morgan，cookie-parser 和 body-parser；和 path 庫，它是解析文件和目錄路徑的核心 node 庫。

```js
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
```

然後我們用 `require()`導入來自我們的路由目錄的模塊。這些模塊/文件包含用於處理特定的相關「路由」集合（URL 路徑）的代碼。當我們擴展骨架應用程序，例如列出圖書館中的所有書籍時，我們將添加一個新文件，來處理與書籍相關的路由。

```js
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
```

> **備註：** 此時我們剛剛導入了模塊；我們還沒有真正使用過它的路由（在文件的更下方一點將使用到路由）。

接下來，我們使用導入的 express 模塊 ，創建應用程序 `app` 對象，然後使用它來設置視圖（模板）引擎。引擎的設置有兩個部分。首先我們設置 '`views`' 值，來指定模板將被存儲的文件夾（在這種情況下是子文件夾 **/views**）。然後我們設置 '`view engine`' 的值，來指定模板庫（在本例中為 「pug」 ）。

```js
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

下一組函數調用 `app.use()`，將中間件的庫，添加到請求處理鏈中。除了我們之前導入的第三方庫之外，我們還使用 `express.static` 中間件，來使 Express 提供在項目根目錄下，**/public** 目錄中的所有靜態文件。

```js
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
```

現在所有其他中間件都已設置完畢，我們將（先前導入的）路由處理代碼，添加到請求處理鏈中。導入的代碼，將為網站的不同部分定義特定路由：

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> **備註：** 上面指定的路徑 ('/' and '`/users`')，被視為定義在導入文件中的路由前綴。因此，例如，如果導入的用戶模塊 **users**為`/profile`定義了路由，則可以在 `/users/profile`中訪問該路由。我們將在後面的文章中，詳細討論路由。

文件中的最後一個中間件，為錯誤和 HTTP 404 響應添加了處理程序方法。

```js
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
```

Express 應用程序對象（app）現已完全完成配置。最後一步，是將其添加到模塊導出（這允許它通過 **/bin/www** 導入）。

```js
module.exports = app;
```

### 路由

路由文檔 **/routes/users.js** 如下所示（路由文件共享一個類似的結構，所以我們不需要也顯示 **index.js**）。首先加載 express 模塊 ，並使用它獲取 `express.Router`對象。然後它在該對像上指定一個路由，最後從模塊中導出路由器（這就是允許將文件導入到 **app.js** 中的路由）。

```js
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
```

該路由定義了一個回調，只要檢測到具有正確模式的 HTTP `GET` 請求，就會調用該回調。匹配模式是模塊導入時指定的路由（'`/users`'），加上（'`/`'）文件中定義的任何內容。換句話說，當收到`/users/`的 URL 時，將使用此路由。

> **備註：** 嘗試運行帶有 node 的服務器，並在瀏覽器中訪問以下 URL: <http://localhost:3000/users/>。您應該看到一條消息：'respond with a resource'。

上面有趣的事情是，回調函數有第三個參數 '`next`'，因此是一個中間件函數，而不是簡單的路由回調。雖然代碼當前不使用 `next` 參數，但如果要在'`/`'根路由路徑中，添加多個路由處理程序，將來可能會有用。

### 視圖(模板)

視圖（模板）存儲在 **/views** 目錄中（如 **app.js** 中指定的）並且被賦予文件擴展名**.pug**。方法 [`Response.render()`](http://expressjs.com/en/4x/api.html#res.render)用於呈現指定的模板，以及在對像中傳遞的命名變量的值，然後將結果作為響應發送。在來自 **/routes/index.js** 的以下代碼中，您可以看到，該路由如何使用模板 "index" 傳遞模板變量 "title" ，以呈現響應。

```js
/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});
```

上面路由的相應模板在下面給出（**index.pug**）。我們稍後會詳細討論這個語法。您現在需要知道的是，標題變量 `title`（值為 '`Express`'）將插入模板中指定的位置。

```plain
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## 挑戰自己

在 **/routes/users.js** 中創建一個新路由，它將在 `/users/cool/`上顯示文本 「You're so cool」。通過運行服務器，並在瀏覽器中訪問 <http://localhost:3000/users/cool/> 來測試它。

## 總結

你現在為 本地圖書館 創建了一個骨架網站項目，並且用 node 驗證了它能夠運行。最重要的，你也理解了項目的結構，因此你也明白了我們需要為本地圖書館加上路由和視圖。

接下來我們將開始修改骨架，讓它能像一個圖書館網站一樣運作。

## 參閱

- [Express application generator](https://expressjs.com/en/starter/generator.html) (Express docs)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html) (Express docs)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn/Server-side/Express_Nodejs/mongoose", "Learn/Server-side/Express_Nodejs")}}
