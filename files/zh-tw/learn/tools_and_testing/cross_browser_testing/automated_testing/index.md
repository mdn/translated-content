---
title: 自動化測試介紹
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

每天在好幾個瀏覽器與設備上，運行手動測試數次，既乏味又浪費時間。要有效率的處理這種事，就要開始熟悉自動化工具。我們會在這篇文章看看有哪些可用的工具、如何使用它們、以及如何使用如 Sauce Labs 與 Browser Stack 的商業化瀏覽器測試程式之基本講述。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先決條件：</th>
      <td>
        熟悉 <a href="/zh-TW/docs/Learn/HTML">HTML</a>、<a
          href="/zh-TW/docs/Learn/CSS"
          >CSS</a
        >、<a href="/zh-TW/docs/Learn/JavaScript">JavaScript</a>
        核心語言的基本；<a
          href="/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >跨瀏覽器測試的重要原則</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標：</th>
      <td>
        提供理解自動化測試的需求、它如何讓你生活變得簡單、還有如何透過一些商業產品令事情更簡易。
      </td>
    </tr>
  </tbody>
</table>

## 自動化讓事情變簡單

在這個模組中，我們詳細介紹了不同的方式，來測試你的網站和應用程序，並解釋了跨瀏覽器測試工作應該在哪些瀏覽器上進行測試、輔助功能要點……等等。聽來要做很多事呢，不是嗎？

我們同意手動測試前述的一切，真的很累。幸好有很多工具，可以讓我們不用這麼累。有兩個主要方法，可以自動執行我們討論過的測試：

1. 使用如 [Grunt](http://gruntjs.com/) 或 [Gulp](http://gulpjs.com/) 或 [Gulp](http://gulpjs.com/) 或 [npm scripts](https://docs.npmjs.com/misc/scripts) 之類的任務執行器（task runner）來跑測試，並在組建過程中清理你的程式碼。這個方法很適合如清理並最小化程式碼、增加 CSS 前輟或最大化跨瀏覽器的 transpiling nascent JavaScript 功能...之類的任務。
2. 使用如 [Selenium](http://www.seleniumhq.org/) 之類的瀏覽器自動化系統，在安裝好的瀏覽器跑指定測試並傳回結果，並在瀏覽器出問題的時候警告你。諸如 [Sauce Labs](https://saucelabs.com/) 與 [Browser Stack](https://www.browserstack.com/) 之類的商業跨瀏覽器測試程式都是基於 Selenium，但能讓你用簡單的介面，遠端訪問他們設好的東西，如此一來，就能省下自己架設測試系統的心力。

我們會在下一篇文章，專注於如何設定基於 Selenium 的個人測試系統。這篇文章則會專注於如何設定任務執行器，並簡單與系統化地，使用前述的商業系統。

> **備註：** 這兩件事情並不互斥。我們可以用任務執行器來訪問服務。例如，你可以用 Sauce Labs 的 API 來跑跨瀏覽器測試，並顯示結果。我們會在下面解釋這件事。

## 使用任務執行器以自動化測試工具

如同前述，你可以透過任務執行器運行在組建功能中，所有想要自動化的常見任務，例如在每次存檔，或其他時候，清理並壓縮程式碼。在這個章節，我們將專注於如何用對初學者友善的選項，透過 Node 與 Gulp 執行自動化任務。

### 設定 Node 與 npm

今日，此類工具大都基於 {{Glossary("Node.js")}}。所以，你需要從 [nodejs.org](https://nodejs.org/) 安裝它：

1. 從上面的網站下載安裝程式。
2. 如同安裝其他程式般地安裝它。注意 Node 還會安裝 [Node Package Manager](https://www.npmjs.com/)（npm），它能讓你輕易安裝套件(package)、分享你自己寫的套件、還有在你的專案運行腳本。
3. 安裝完成後，請輸入以下指令以測試 node 是否已安裝到電腦裡面，它會回傳 Node 與 npm 的版本：

   ```bash
   node -v
   npm -v
   ```

4. 如果已經安裝過 Node/npm，你應該更新它們到最新版本。要更新 Node 的最可行方法，是從上述網站下載並安裝更新的軟體包。要更新 npm，請在文字介面輸入以下指令：

   ```bash
   npm install npm@latest -g
   ```

> **備註：** 如果因為權限問題而失敗，[Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) 應該對你有所幫助。

要在專案裡面使用 node/npm 套件，你需要把專案所在目錄設為 npm 專案。它很簡單。

例如說，先來做個 test 目錄，以便不操心自己搞壞什麼。

1. 選個合適的地方建立目錄。可以在檔案管理員的 UI 完成，或是輸入以下指令：

   ```bash
   mkdir node-test
   ```

2. 要把這目錄變成 npm 專案，就要到 test 把此目錄初始化。請輸入：

   ```bash
   cd node-test
   npm init
   ```

3. 第二個指令（`npm init`）會問你幾個問題，以便取得專案所需的資訊。你可以把一切都以預設帶過。
4. 問完所有問題後，它會問你是否對設定滿意。輸入 `yes` 並按下 <kbd>Enter</kbd> 鍵，npm 就會在目錄產生一個稱為 `package.json` 的檔案。

這個檔案基本上就是個專案的設定檔。你可以之後再來設定，但目前它大概長成這個樣子：

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

有了這個檔案，你已經可以開始了。

### 設定 Gulp 自動化

來看看怎麼用 Gulp 設定一些測試工具的自動化。

1. 要開始的話，得先建立一個 test npm 專案。使用的程式會在下面的章節提到。
2. 接著，你需要有些簡單的 HTML、CSS、JavaScript 來測試系統：你可以複製我們的 [index.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/automation/index.html)、[main.js](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/automation/main.js)、[style.css](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/automation/style.css) 到專案裡面，一個稱為 `src` 的目錄。現在你可以隨意嘗試測試內容，不過請注意這些工具不會直接在 JS/CSS 裡面運作：你需要外部的檔案。
3. 首先，你要下這個指令，以全域（意思是說，它能在所有專案使用）的形式安裝 gulp：

   ```bash
   npm install --global gulp-cli
   ```

4. 接著在 npm 專案輸入以下指令，以便專案將 gulp 認定為安裝所須：

   ```bash
   npm install --save-dev gulp
   ```

5. 在專案裡面建立一個叫 `gulpfile.js` 的檔案。這個檔案能運行所有我們需要做的任務。在檔案裡面加這個指令：

   ```js
   var gulp = require("gulp");

   gulp.task("default", function () {
     console.log("Gulp running");
   });
   ```

   這檔案需要我們之前安裝過的 `gulp` 模組，接著會跑些只顯示訊息的基本任務：它至少讓我們知道 Gulp 可以動。每個 gulp task 的基本格式都一樣——`gulp` 會執行 `task()` 方法，並給出兩個參數——任務的名稱、還有指示如何完成任務的回傳函式。

6. 現在你可以跑 gulp task 了——輸入這個指令吧：

   ```bash
   gulp
   ```

### 讓 Gulp 做些實際的工作

要讓 Gulp 真的能幹些事情，就得先想想我們想要它做什麼。我們的專案想要做這些合理的基本功能：

- 用 html-tidy、css-lint、js-hint 來 lint、報告、修理 HTML/CSS/JS 的常見錯誤（請參見 [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy/)、[gulp-csslint](https://www.npmjs.com/package/gulp-csslint/)、[gulp-jshint](https://www.npmjs.com/package/gulp-jshint/)）。
- 用 Autoprefixer 掃描我們的 CSS 並在需要時增加 vendor prefixes（請參見 [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer/)）
- 用 babel 把新式的 JavaScript 語法轉換為能在老舊瀏覽器運作的語法（請參見 [gulp-babel](https://www.npmjs.com/package/gulp-babel/)）

請詳見上面我們使用的 gulp 套件連結，以獲取完整指引。

要用套件的話，要先透過 npm 安裝之，之後在 `gulpfile.js` 上面引用需要的套件，再接著到下面加入想測試的東西，最後把你的任務命名為 `default`。

在往下一步開始進發以前，把 default task 改成：

```js
gulp.task("default", []);
```

在陣列裡面寫下所有想在命令列輸入 `gulp` 後，希望 Gulp 運作的命令。

#### html-tidy

1. 輸入以下指令安裝：

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **備註：** `--save-dev` 會把此套件加到開發相依設定中。如果去看專案的 `package.json` 檔，你會在 `devDependencies` 屬性看到它被放在裡面。

2. 在 `gulpfile.js` 增加這個相依：

   ```js
   var htmltidy = require("gulp-htmltidy");
   ```

3. 在 `gulpfile.js` 的底部加入以下測試：

   ```js
   gulp.task("html", function () {
     return gulp
       .src("src/index.html")
       .pipe(htmltidy())
       .pipe(gulp.dest("build"));
   });
   ```

4. 在 `default` 任務的陣列裡面加入 `'html'` 項目。

在這裡我們抓到了 `index.html` 開發檔：`gulp.src()` 讓我們抓取需要完成事情所需的原始檔。

我們接著會用 `pipe()` 函式以通行另一個執行用的指令。我們可以應自己需求，把盡可能多的指令連接起來。在原始碼裡面，我們先執行能修復錯誤的 `htmltidy()` 函式。第二個 `pipe()` 函式會寫出 HTML 檔案的輸出至 `build` 目錄。

在 input 版本的檔案內，你可能發現到我們放了空白的 {{htmlelement("p")}} 元素，htmltidy 會在這個輸出檔創建後移除。

#### Autoprefixer 與 css-lint

1. 輸入以下指令安裝：

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. 在 `gulpfile.js` 增加這個相依：

   ```js
   var autoprefixer = require("gulp-autoprefixer");
   var csslint = require("gulp-csslint");
   ```

3. 在 `gulpfile.js` 的底部加入以下測試：

   ```js
   gulp.task("css", function () {
     return gulp
       .src("src/style.css")
       .pipe(csslint())
       .pipe(csslint.formatter("compact"))
       .pipe(
         autoprefixer({
           browsers: ["last 5 versions"],
           cascade: false,
         }),
       )
       .pipe(gulp.dest("build"));
   });
   ```

4. 在 `default` 任務的陣列裡面加入 `'css'` 項目。

我們在此選定了 `style.css` 檔案，對它執行了 csslint（它會在終端機上面列出所有 CSS 的錯誤），接著透過運行 autoprefixer 來增加所有為了在舊瀏覽器運行所需要的前輟修飾子。在 pipe chain 的最後面，我們把已經 modified prefixed CSS 輸出到 build 目錄。注意，這只有在 csslint 沒有找到錯誤的時候才能動 ── 試著把 CSS 檔案內的大括弧移掉，看看會發生什麼事！

#### js-hint 與 babel

1. 輸入以下指令安裝：

   ```bash
   npm install --save-dev gulp-babel babel-preset-es2015
   npm install jshint gulp-jshint --save-dev
   ```

2. 在 `gulpfile.js` 增加這個相依：

   ```js
   var babel = require("gulp-babel");
   var jshint = require("gulp-jshint");
   ```

3. 在 `gulpfile.js` 的底部加入以下測試：

   ```js
   gulp.task("js", function () {
     return gulp
       .src("src/main.js")
       .pipe(jshint())
       .pipe(jshint.reporter("default"))
       .pipe(
         babel({
           presets: ["es2015"],
         }),
       )
       .pipe(gulp.dest("build"));
   });
   ```

4. 在 `default` 任務的陣列裡面加入 `'js'` 項目。

我們在這裡抓了 `main.js` 檔案，對其運行 `jshint` 並使用 `jshint.reporter` 對終端機輸出結果；我們接著把檔案 pass 到 babel，它將其轉換至舊語法並將結果輸出至 `build` 目錄。我們原本的程式碼包含了 [fat 箭頭函式](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，babel 會將其編寫為舊語法。

#### 進一步的點子

把一切都設定好後，在專案目錄內用運行 `gulp` 指令，你應該能看到像這樣的輸出：

![](gulp-output.png)

你可以試著把自動任務產生的檔案放在 `build` 目錄，並從瀏覽器的 `build/index.html` 觀察之。

如果出了問題，檢查下是不是加了上面寫的所有相依套件與測試，也請試著把 HTML/CSS/JavaScript 程式碼通通註解掉、接著執行 gulp 以便檢查能否忽略出錯的地方。

Gulp 還有個 `watch()` 函式能監視，並在每次存檔完就跑測試。例如，你可以試著在 `gulpfile.js` 底下增加以下程式碼：

```js
gulp.task("watch", function () {
  gulp.watch("src/*.html", ["html"]);
  gulp.watch("src/*.css", ["css"]);
  gulp.watch("src/*.js", ["js"]);
});
```

現在來輸入 `gulp watch` 指令。Gulp 會開始監視目錄，並在儲存 HTML、CSS、JavaScript 檔的時候，運行適當的任務。

> **備註：** `*` 是通配字符（wildcard character）－－這裡的意思是「當任何檔案被儲存的時候，執行這些任務」。你也可以在主要任務內使用通配，例如 `gulp.src('src/*.css')` 會抓取所有的 CSS 檔案並執行 piped task。

> **備註：** 在我們的 watch 指令有個問題，那就是我們的 CSSLint/Autoprefixer combination throws full-blown errors when a CSS error is encountered, which stops the watch working. You'll have to restart the watch once a CSS error is encountered, or find another way to do this.

你還可以用 Gulp 做很多事情。[Gulp plugin directory](http://gulpjs.com/plugins/) 收錄了近千個可搜尋的套件。

### 其他任務執行器

其實還有很多任務執行器能用。我們不會說 Gulp 是最好的解決方案，但它對我們而言很好用、而且也對新手友善。你可以嘗試這些解決方案：

- Grunt 與 Gulp 很像，不過它依靠的是事先指定的設定檔，而不是 JavaScript 檔。請參見 [Getting started with Grunt](http://gruntjs.com/getting-started) 以獲取詳情。
- 你也可以在不安裝任何任務執行器的情況下，直接使用 `package.json` 內的 npm 腳本。它行得通的前提，是 Gulp 之類的套件基本上靠著命令列工具運作。所以如果你知道如何透過命令列工具跑工具，你就可以透過 npm 腳本運行。這麼做會更麻煩點，但對那些懂命令列的來說這很值得。[Why npm scripts?](https://css-tricks.com/why-npm-scripts/) 有進一步的介紹。

## 使用 Sauce Labs 加快瀏覽器測試

有很多商業化的瀏覽器測試系統可供選擇，不過在這裡我們會探討 Sauce Labs。這並不是說它是可用工具裡面最好的，而是說它對初學者而言，是其中一個好上手的。

這種程式的基本前提，是存在一家擁有很多伺服器的公司，以便跑很多不同的測試。在使用服務的時候，你會給服務一個需要測試的 URL，還有諸如什麼瀏覽器需要測試之類的資訊。程式接著會設置擁有指定作業系統的虛擬機，並回傳螢幕截圖、視頻、日誌文件，文字之類的測試結果。

You can then step up a gear, using an API to access functionality programmatically, which means that such apps can be combined with task runners, your own local Selenium environments, etc., to create automated tests.

### 開始用 Sauce Labs

來透過 Sauce Labs Trial 開始熟悉吧。

1. 建立 [Sauce Labs trial 帳號](https://saucelabs.com/signup/trial)。
2. 登入。通常在驗證電子郵件後，就能自動登入。

### 基本的手動測試

[Sauce Labs dashboard](https://saucelabs.com/beta/dashboard/manual) 有很多可用選項。現在，先確認是否位於 _Manual Tests_ tab。

1. 點選 _Start a new manual session_。
2. 在下個螢幕，輸入想測試的 URL（像是本例中要輸入 <http://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>）接著透過不同的按鈕與清單，選擇想測試的瀏覽器／作業系統組合。如你所見，有很多很多的組合！ ![](sauce-manual-session.png)
3. When you click Start session, a loading screen will then appear, which spins up a virtual machine running the combination you chose.
4. When loading has finished, you can then start to remotely test the web site running in the chosen browser. ![](sauce-test-running.png)
5. From here you can see the layout as it would look in the browser you are testing, move the mouse around and try clicking buttons, etc. The top menu allows you to:

   - Stop the session
   - Give someone else a URL so they can observe the test remotely.
   - Copy text/notes to a remote clipboard.
   - Take a screenshot.
   - Test in full screen mode.

Once you stop the session, you'll return to the Manual Tests tab, where you'll see an entry for each of the previous manual sessions you started. Clicking on one of these entries shows more data for the session. In here you can for example download any screenshots you took, watch a video of the session, and view data logs for the session.

> **備註：** This is already very useful, and way more convenient than having to set all these emulators and virtual machines by yourself.

### 進階：The Sauce Labs API

Sauce Labs 有個能允許程式化檢索帳號與現有測試詳情的 [restful API](https://wiki.saucelabs.com/display/DOCS/The+Sauce+Labs+REST+API)，並講解測試與進一步細節，如手動測試無法錄製的 pass/fail 狀態。For example, you might want to run one of your own Selenium tests remotely using a Sauce Labs, to test a certain browser/OS combination, and then pass the test results back to Sauce Labs.

It has a number of clients available to allow you to make calls to the API using your favourite environment, be it PHP, Java, Node.js, etc.

Let's have a brief look at how we'd access the API using Node.js and [node-saucelabs](https://github.com/danjenkins/node-saucelabs).

1. First, set up a new npm project to test this out, as detailed in [Setting up Node and npm](#設定_node_與_npm). Use a different directory name than before, like `sauce-test` for example.
2. 使用以下指令安裝 Node Sauce Labs wrapper：

   ```bash
   npm install saucelabs
   ```

3. 在專案根目錄下建立個稱作 `call-sauce.js` 的新檔案。寫入以下內容：

   ```js
   var SauceLabs = require("saucelabs");

   var myAccount = new SauceLabs({
     username: "your-sauce-username",
     password: "your-sauce-api-key",
   });

   myAccount.getAccountDetails(function (err, res) {
     console.log(res);
     myAccount.getServiceStatus(function (err, res) {
       // Status of the Sauce Labs services
       console.log(res);
       myAccount.getJobs(function (err, jobs) {
         // Get a list of all your jobs
         for (var k in jobs) {
           if (jobs.hasOwnProperty(k)) {
             myAccount.showJob(jobs[k].id, function (err, res) {
               var str = res.id + ": Status: " + res.status;
               if (res.error) {
                 str += "\033[31m Error: " + res.error + " \033[0m";
               }
               console.log(str);
             });
           }
         }
       });
     });
   });
   ```

4. You'll need to fill in your Sauce Labs username and API key in the indicated places. These can be retrieved from your [User Settings](https://saucelabs.com/beta/user-settings) page. Fill these in now.
5. Make sure everything is saved, and run your file like so:

   ```bash
   node call-sauce
   ```

### 進階：自動化測試

我們會在下一章覆蓋實際運行的 Sauce Lab 自動化測試。

## 總結

這是一切都還蠻簡單的，但我想你能看到自動化工具，在測試方面提供了很大的幫助。

下篇文章我們來關注怎麼用 Selenium 設定你自己的區域自動化系統，並與 Sauce Labs 做結合。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
