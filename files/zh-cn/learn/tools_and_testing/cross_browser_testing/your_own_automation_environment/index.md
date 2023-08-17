---
title: 建立自己的自动化测试环境
slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

在这篇文章中，我们将教会你如何安装自己的自动化测试环境，并使用 Selenium/WebDriver 和一种测试库（如 selenium-webdriver for Node）运行自己的测试。我们还将着眼于如何将本地测试环境与上一篇文章中讨论的商业工具集成在一起。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        熟悉 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a href="/zh-CN/docs/Learn/CSS">CSS</a> 和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言的核心知识，对<a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >跨浏览器测试原则</a
        >和<a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing"
          >自动化测试</a
        >的理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        展示如何在本地建立一个 Selenium 测试环境并运行测试，以及如何将其与 LambdaTest、Sauce Labs 和 BrowserStack 等工具集成。
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) 是最流行的浏览器自动化测试工具。最易使用的方法是使用基于 Selenium 的 WebDriver API，它通过调用浏览器接口实现自动化，执行诸如“打开网页”、“移动网页上的元素”、“点击链接”、“查看链接是否打开 URL”等。对于运行自动化测试来说是一个十分理想的方法。

安装和使用 WebDriver 的方式取决于你的编程环境。常见的环境都提供有安装 WebDriver 的包或框架，并且支持与 WebDriver 通信的多语言绑定，如 Java、C#、Ruby、Python、JavaScript（Node）等。查看[建立一个 Selenium-WebDriver 的工程](https://www.selenium.dev/zh-cn/documentation/webdriver/getting_started/)来了解 Selenium 在不同语言下建立的更多细节。

不同的浏览器需要使用不同的驱动，来使 WebDriver 能够与浏览器交互并控制浏览器。查看[支持 Selenium 的平台](https://www.selenium.dev/downloads/)来了解获取浏览器驱动的信息。

我们将使用 Node.js 来编写和运行 Selenium 测试用例。Node.js 是一个前端开发者都很熟悉，并且容易上手的开发环境。

> **备注：** 如果你需要了解在其他服务器端环境下使用 WebDriver 的方式，也可以点击[支持 Selenium 的平台](https://www.selenium.dev/downloads/)来获取更多有用的链接。

### 在 Node 下建立 Selenium

1. 参考上一个章节[创建 Node 和 npm](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#Setting_up_Node_and_npm) 创建一个新的 npm 工程，取一个不同的名字，如 `selenium-test`。
2. 接下来，我们需要安装一个框架来允许我们从 Node 中运行 Selenium。我们选择 selenium 官方提供的 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)，它的文档更新得很好，维护得也很好。如果你想要其他的选择，[webdriver.io](http://webdriver.io/) 和 [nightwatch.js](http://nightwatchjs.org/) 也都不错。要安装 selenium-webdriver，在你的工程目录下运行如下命令：

   ```bash
   npm install selenium-webdriver
   ```

> **备注：** 即使你已经安装过 selenium-webdriver 并下载了浏览器驱动，我们仍然建议你按照步骤再来一遍，确保所有东西都是最新的。

接下来，你需要下载相应的驱动，使 WebDriver 能控制你需要测试的浏览器。在 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)（第一部分的表格）页面查看如何下载。显然，有些浏览器是操作系统特定的，我们将坚持使用 Firefox 和 Chrome，因为它们可以在所有主要的操作系统上使用。

1. 下载最新版本的 [GeckoDriver](https://github.com/mozilla/geckodriver/releases/)（为 Firefox 使用）和 [ChromeDriver](http://chromedriver.storage.googleapis.com/index.html) 驱动。
2. 将它们解压到相当容易浏览的地方，比如你的主用户目录的根部。
3. 把 `chromedriver` 和 `geckodriver` 驱动的目录添加到你的系统 `PATH` 变量，这应该是从你的硬盘根目录开始的一个绝对路径。举个例子，如果我们使用的是一个 macOS 机器，用户名为 bob, 我们把驱动放到了用户的根目录下，那这个路径就是 `/Users/bob`。

> **备注：** 重申一下，添加到 `PATH` 的路径是到包含驱动的那一级目录，而不是驱动目录自身！这是一个常犯的错误。

在 macOS 或大多数 Linux 系统中设置 `PATH` 变量的操作如下：

1. 如果没有使用 `bash` 命令行（像 macOS 这样的系统会默认使用 `zsh` 命令行），切换到它：

   ```bash
   exec bash
   ```

2. 打开 `.bash_profile`（或 `.bashrc`）文件（如果看不到隐藏文件，需要将它们显示出来，查看[在 macOS 中显示/隐藏文件](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) 或[显示 Ubuntu 的隐藏文件夹](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)）。
3. 把下面语句粘贴到文件的最后（就像平常在机器上更新 path）：

   ```bash
   # 将 WebDriver 浏览器驱动添加到 PATH

   export PATH=$PATH:/Users/bob
   ```

4. 保存并关闭文件，然后重启命令终端以生效 Bash 的配置。
5. 在命令终端上敲下面命令，查看新的路径是否已经添加到 `PATH` 变量中：

   ```bash
   echo $PATH
   ```

6. 你应该可以在打印出来的信息中找到刚刚设置的路径。

在 Windows 下设置 `PATH` 变量，参考[如何添加一个新的文件目录到系统路径？](https://www.itprotoday.com/)

OK，现在我们来做一个快速的测试来验证一下一切是否正常。

1. 在你的工程目录下创建一个新的文件 `google_test.js`：
2. 将下面代码复制到文件中保存：

   ```js
   const webdriver = require("selenium-webdriver");
   const By = webdriver.By;
   const until = webdriver.until;

   const driver = new webdriver.Builder().forBrowser("firefox").build();

   driver.get("http://www.google.com");

   driver.findElement(By.name("q")).sendKeys("webdriver");

   driver.sleep(1000).then(() => {
     driver.findElement(By.name("q")).sendKeys(webdriver.Key.TAB);
   });

   driver.findElement(By.name("btnK")).click();

   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
       driver.quit();
     });
   });
   ```

3. 在终端上，确保在你的工程目录下输入如下命令：

   ```bash
   node google_test
   ```

你会看到 Firefox 自动打开了一个窗口！Google 自动加载到标签页中，“webdriver”被输入到搜索框，然后搜索按钮被点击。然后，WebDriver 等待 2 秒，然后获取文本标题，如果标题是“webdriver - Google Search”, 将返回测试成功的消息。然后 WebDriver 关闭 Firefox 窗口并结束。

## 一次测试多个浏览器

接下来，让我们来试一下同时在多个浏览器上进行测试。这也是你经常碰到的情况！

1. 在你的工程目录下创建另外一个新文件 `google_test_multiple.js`。你可以根据实际需要测试的浏览器情况，对我们添加的浏览器进行修改或删除等操作。但确保系统安装了正确的浏览器驱动。关于如何填写 `.forBrowser()` 方法中对浏览器描述的字符串，请参考 [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Browser.html)。
2. 将下面代码复制到文件中保存：

   ```js
   const webdriver = require("selenium-webdriver");
   const By = webdriver.By;
   const until = webdriver.until;

   let driver_fx = new webdriver.Builder().forBrowser("firefox").build();

   let driver_chr = new webdriver.Builder().forBrowser("chrome").build();

   searchTest(driver_fx);
   searchTest(driver_chr);

   function searchTest(driver) {
     driver.get("http://www.google.com");
     driver.findElement(By.name("q")).sendKeys("webdriver");

     driver.sleep(1000).then(() => {
       driver.findElement(By.name("q")).sendKeys(webdriver.Key.TAB);
     });

     driver.findElement(By.name("btnK")).click();

     driver.sleep(2000).then(() => {
       driver.getTitle().then((title) => {
         if (title === "webdriver - Google Search") {
           console.log("Test passed");
         } else {
           console.log("Test failed");
         }
         driver.quit();
       });
     });
   }
   ```

3. 在终端上，确保在你的工程目录下输入如下命令：

   ```bash
   node google_test_multiple
   ```

4. 如果你用的是 Mac，并决定测试 Safari 浏览器，可能会产生一个错误信息：“Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver.”如果是这样，根据指示重新尝试一遍。

现在，我们像上次一样完成了测试，这一次浏览器的测试代码放到了 `searchTest()` 函数中。我们对多个浏览器创建了新的浏览器实例，然后将每一个实例传递给函数，这样就可以在 3 个浏览器下执行测试！

有意思吧？接下来我们继续，来了解一下 WebDriver 的语法基础。

## WebDriver 语法速成课程

现在我们来看一下 webdriver 的一些关键语法。更完整的细节，可以参考 [selenium-webdriver JavaScript API 参考](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/)以及 Selenium 主要的文档 [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/)，里面有用不同语言编写的丰富的学习示例。

### 启动一个新的测试

要启动一次新的测试，你需要包含如下的 `selenium-webdriver` 代码模块：

```js
const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;
```

接下来，通过 `new webdriver.Builder()` 构造器来创建一个新的驱动实例，通过 `forBrowser()` 方法指定测试的浏览器类型，最后调用 `build()` 来实际创建它。（关于这些功能的详细信息，请参见 [Builder 类参考资料](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Builder.html)）。

```js
let driver = new webdriver.Builder().forBrowser("firefox").build();
```

注意，可以为要测试的浏览器设置特定的配置选项，例如，你可以在 `forBrowser()` 方法中设置一个特定的版本和操作系统来测试：

```js
let driver = new webdriver.Builder().forBrowser("firefox", "46", "MAC").build();
```

你还可以通过设置环境变量的方式来配置这些选项，如：

```bash
SELENIUM_BROWSER=firefox:46:MAC
```

让我们来创建一个新的测试验证一下。在你的 selenium 测试工程目录下，新建一个文件 `quick_test.js`, 将下面代码复制进去：

```js
const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

const driver = new webdriver.Builder().forBrowser("firefox").build();
```

### 获取测试的文档

通过刚创建的驱动实例的 `get()` 方法，加载你需要测试的网页：

```js
driver.get("http://www.google.com");
```

> **备注：** 可以查看 [WebDriver class reference](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html) 了解这一部分提到内容的详情。

你可以使用包含 `file://` 的 URL 来指向需要测试的本地文件：

```js
driver.get(
  "file:///Users/chrismills/git/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html",
);
```

或

```js
driver.get("http://localhost:8888/fake-div-buttons.html");
```

使用一个远程的服务器地址代码会更灵活——当你启用远程服务器运行测试时，如果企图使用本地路径，代码会中断。

现在添加下面代码到 `quick_test.js` 的最后：

```js
driver.get(
  "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
);
```

### 同文档交互

得到测试的文档后，我们就需要同它进行交互操作了，比如获取特定的元素对它进行某种测试。WebDriver 提供了[通过多种方法选择 UI 元素](https://www.selenium.dev/zh-cn/documentation/webdriver/elements/)，比如通过 ID、class、元素名称等。具体的选择通过 `findElement()` 方法完成，只需要将选择的元素作为参数传给它即可。举例来说，通过 ID 选择一个元素：

```js
const element = driver.findElement(By.id("myElementId"));
```

通过 CSS 查找一个元素的最常用方法是使用 By.css 方法，它可以通过 CSS 选择器的方式来选择元素。把下面代码敲到 `quick_test.js` 的最后面：

```js
const button = driver.findElement(By.css("button:nth-of-type(1)"));
```

### 测试元素

同 web 文档和元素交互的方式很多。在 WebDriver 的文档中有很多常用的例子，你可以从[获取文本值](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content)开始。

如果需要获取按钮中的文本，可以这样操作：

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

把这段代码也添加到 `quick_test.js` 中。

在你的工程目录下，运行测试：

```bash
node quick_test.js
```

你可以看到按钮的文本标签打印到控制台。

现在进一步尝试一下。将上面输入的代码删除，然后添加下面的这行代码：

```js
button.click();
```

重新运行测试；按钮被点击，你会看到 `alert()` 框弹出来，这样就知道按钮是正常工作的。

你还可以与弹出框进行交互。将下面代码添加到代码最后，再运行一下测试：

```js
const alert = driver.switchTo().alert();

alert.getText().then((text) => {
  console.log(`Alert text is '${text}'`);
});

alert.accept();
```

接下来，我们试一下在表单的一个元素中输入文本。添加如下代码并运行测试：

```js
const input = driver.findElement(By.id("name"));
input.sendKeys("Filling in my form");
```

你可以提交一些使用常规 `webdriver.Key` 属性不能代表的按键操作。举个例子，下面我们使用指令在提交前将 tab 从 input 移走：

```js
driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(webdriver.Key.TAB);
});
```

### 等待操作完成

有时候，在进行下一步处理之前我们需要 WebDriver 等待一些操作完成。比如装载一个新的页面，在与页面元素交互之前，需要等待 DOM 完成加载，否则测试有可能会失败。

在 `google_test.js` 示例中，有这样一段代码块：

```js
driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    if (title === "webdriver - Google Search") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  });
});
```

`sleep()` 方法的参数指明需要等待的毫秒时间。该方法返回在时间完成时兑现的 promise，那时将调用 `then()` 内的代码块。在这里的示例中，我们通过 `getTitle()` 方法获得当前页面的标题，然后根据标题的值返回成功或失败的消息。

添加一个 `sleep()` 方法到我们的 `quick_test.js` 中，将最后的代码修改成如下代码块：

```js
driver.sleep(2000).then(() => {
  input.sendKeys("Filling in my form");
  input.getAttribute("value").then((value) => {
    if (value !== "") {
      console.log("Form input editable");
    }
  });
});
```

WebDriver 等待 2 秒然后填充表单的文本框。接下来我们使用 `getAttribute()` 获取它的 `value` 属性值，并对它进行测试（如是否为空），最后将测试结果打印出来。

> **备注：** 还有一个方法叫 [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait), 它是在一定的时间内对某个条件进行反复测试，然后再继续执行代码，它也使用了 [util 库](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html)，其中定义了使用 `wait()` 的常见条件。

### 使用后关闭驱动

完成一次测试后，需要关闭所有打开的驱动实例，确保你的机器上不会出现一堆泛滥的浏览器实例。只需要调用驱动实例的 `quit()` 方法即可。现在将下面这行代码添加到你的 `quick_test.js` 最后：

```js
driver.quit();
```

当你运行它时，应该看到测试在执行，并且在测试完成后浏览器实例关闭。这对于不使你的计算机被大量的浏览器实例弄得杂乱无章是很有用的，特别是浏览器实例太多，导致计算机速度减慢。

## 测试最佳实践

有很多编写最佳测试的实践方法，你可以参考[测试设计考虑](https://www.selenium.dev/zh-cn/documentation/test_practices/)来了解一些背景。总的来说，测试应该遵循如下几点：

1. 使用好的定位策略：当你[同文档交互](#同文档交互)时，确保你使用的定位器和页面对象是不变的。如对元素进行测试，确保这个元素有固定的 ID 或页面位置，这样可以通过 CSS 选择器定位到它，不至于在下一个迭代就发生变化。尽可能让你的测试稳健，而不是有一点改动就会崩溃。
2. 写原子测试：一个测试只测一件事，这样有利于跟踪哪一个测试文件执行的是哪种测试。举例来说，前面的`google_test.js` 就只测试了一个简单的用例——页面的搜索结果标题是否正确。我们可以给它改一个名字，这样当我们添加更多的测试文件时它的作用会更直观，比如改为 `results_page_title_set_correctly.js`。
3. 写独立的测试：每一个测试只需要自己执行，不需要依赖其他的测试。

除此之外，我们还要提一下测试结果/测试报告——在前面的例子中，我们只是简单的把测试结果通过 `console.log()` 语句打印出来，这个完全只在 JavaScript 中完成，你可以使用任何你想要的测试运行和报告系统，如 [Mocha](https://mochajs.org/)、[Chai](https://www.chaijs.com/) 或其他的工具。

1. 举个例子，将 [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) 拷贝到你的工程目录下。把它放到一个叫做 `test` 的子文件夹内，这个例子使用了一长串的 promise 来执行测试的所有步骤，WebDriver 使用这些基于 promise 的方法保证正常工作。
2. 执行下面的命令在你的工程目录下安装 mocha 测试工具：

   ```bash
   npm install --save-dev mocha
   ```

3. 现在可以通过下面的命令运行测试（和任意放到 `test` 目录下的其他东西）:

   ```bash
   npx mocha --no-timeouts
   ```

4. 使用 `--no-timeouts` 参数确保测试不会因 Mocha 的 3 秒超时时限而中途失败退出。

> **备注：** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) 中包含了一些关于如何设置不同测试/断言工具组合的有用示例。

## 运行远程测试

在远端服务器上运行测试并不比在本地执行测试要困难多少，只需要在创建驱动实例的时候多配置几个特征参数，如测试的浏览器类型、服务器地址和用户权限（如果需要）就可以。

### LambdaTest

让 Selenium 测试在 LambdaTest 上远程运行是非常简单的。你需要的代码应该遵循下面的模式。

我们来写个示例：

1. 在你的项目目录中，创建一个新文件 `lambdatest_google_test.js`。
2. 将下列内容复制到文件中：

   ```js
   const webdriver = require("selenium-webdriver");
   const By = webdriver.By;
   const until = webdriver.until;

   // username: Username can be found at automation dashboard
   const USERNAME = "{username}";

   // AccessKey: AccessKey can be generated from automation dashboard or profile section
   const KEY = "{accessKey}";

   // gridUrl: gridUrl can be found at automation dashboard
   const GRID_HOST = "hub.lambdatest.com/wd/hub";

   function searchTextOnGoogle() {
     // Setup Input capabilities
     const capabilities = {
       platform: "windows 10",
       browserName: "chrome",
       version: "67.0",
       resolution: "1280x800",
       network: true,
       visual: true,
       console: true,
       video: true,
       name: "Test 1", // name of the test
       build: "NodeJS build", // name of the build
     };

     // URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
     const gridUrl = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

     // setup and build selenium driver object
     const driver = new webdriver.Builder()
       .usingServer(gridUrl)
       .withCapabilities(capabilities)
       .build();

     // navigate to a URL, search for a text and get title of page
     driver.get("https://www.google.com/ncr").then(function () {
       driver
         .findElement(webdriver.By.name("q"))
         .sendKeys("LambdaTest\n")
         .then(function () {
           driver.getTitle().then((title) => {
             setTimeout(() => {
               console.log(title);
               driver.quit();
             }, 5000);
           });
         });
     });
   }

   searchTextOnGoogle();
   ```

3. 访问你的 [LambdaTest 自动测试仪表板](https://www.lambdatest.com/selenium-automation)，通过点击右上方的 **key** 图标来获取你的 LambdaTest 的用户名和访问密钥（见*Username and Access Keys*）。将代码中的 `{username}` 和 `{accessKey}` 占位符替换为你的实际用户名和访问密钥值（并确保它们是安全的）。
4. 在终端中运行以下命令，以执行测试：

   ```bash
   node lambdatest_google_test
   ```

   测试将发送到 LambdaTest，其输出将反馈在 LambdaTest 控制台中。
   如果你希望从 LambdaTest 平台提取这些结果用于报告，那么你可以通过使用 [LambdaTest restful API](https://www.lambdatest.com/blog/lambdatest-launches-api-for-selenium-automation/) 来实现。

5. 现在，如果访问你的 [LambdaTest 自动测试仪表板](https://www.lambdatest.com/selenium-automation)，你会看到你的测试被列出；从这里你可以看到视频、屏幕截图和其他此类数据。

   [![LambdaTest 自动测试仪表板](automation-logs-1.jpg)](https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Automation-logs-1.jpg)

   你可以检索网络、命令、异常和 Selenium 日志，用于你测试构建中的每个测试。你还会发现你的 Selenium 脚本执行的视频记录。

> **备注：** LambdaTest 自动测试仪表板上的 _HELP_ 按钮将为你提供大量的信息，帮助你开始使用 LambdaTest 自动化。你也可以关注我们关于[在 Node JS 中运行第一个 Selenium 脚本](https://www.lambdatest.com/support/docs/quick-guide-to-run-node-js-tests-on-lambdatest-selenium-grid/)的文档。

> **备注：** 如果你不想手写测试的 capability 对象，你可以用 [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) 来生成它们。

#### 编程填充 LambdaTest 的测试详情

当执行许多自动化测试时，将它们的状态标记为通过或失败，使任务变得更加容易。

1. 使用下面的命令将 LambdaTest 的状态标记为**通过**。

   ```bash
   driver.executeScript("lambda-status=passed");
   ```

2. 使用以下命令将 LambdaTest 的状态标记为**失败**。

   ```bash
   driver.executeScript("lambda-status=failed");
   ```

### BrowserStack

在 BrowserStack 进行 Selenium 远程测试很简单，参考下面的代码示例：

1. 在你的工程目录下，新建一个文件 `bstack_google_test.js`.
2. 复制下面内容：

   ```js
   const webdriver = require("selenium-webdriver");
   const By = webdriver.By;
   const until = webdriver.until;

   // Input capabilities
   const capabilities = {
     browserName: "Firefox",
     browser_version: "56.0 beta",
     os: "OS X",
     os_version: "Sierra",
     resolution: "1280x1024",
     "browserstack.user": "YOUR-USER-NAME",
     "browserstack.key": "YOUR-ACCESS-KEY",
     "browserstack.debug": "true",
     build: "First build",
   };

   const driver = new webdriver.Builder()
     .usingServer("http://hub-cloud.browserstack.com/wd/hub")
     .withCapabilities(capabilities)
     .build();

   driver.get("http://www.google.com");
   driver.findElement(By.name("q")).sendKeys("webdriver");

   driver.sleep(1000).then(() => {
     driver.findElement(By.name("q")).sendKeys(webdriver.Key.TAB);
   });

   driver.findElement(By.name("btnK")).click();

   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     });
   });

   driver.quit();
   ```

3. 在 [BrowserStack automation dashboard](https://www.browserstack.com/automate) 中获取你的用户名和访问密钥（查看 _Username and Access Keys_），替换代码中 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的对应值（并确保它们安全存放）。
4. 执行下面命令：

   ```bash
   node bstack_google_test
   ```

   测试被发送给 BrowserStackces, 测试结果会返回到你的控制台。这体现了包含报告机制的重要性！

5. 现在回到 [BrowserStack automation dashboard](https://www.browserstack.com/automate) 页面，你会看到测试列出来的结果：
   ![BrowserStack 自动测试结果](bstack_automated_results.png)

点击测试链接，会打开一个播放记录了测试视频的屏幕和在测试过程中相关的日志详情。

> **备注：** Browserstack 自动化仪表盘的 _Resources_ 菜单选项上提供了许多运行自动化测试的有用信息。查看[使用 Node JS 编写自动化测试的文档](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs)获取相关信息，研究一下使用 BrowserStack 可以帮你做到哪些事情。

> **备注：** 如果你不想自己写测试用例，可以使用文档中嵌入的生成器，参见[运行你的首个测试](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs#run-your-first-test)）。

#### 编程填充 BrowserStack 的测试详情

使用 BrowserStack REST API 和其他功能可以给测试添加更多详情，如测试是否通过，为什么通过，测试属于工程的哪个部分等，BrowserStack 默认并没有这些细节！

让我们来更新一下 `bstack_google_test.js` 示例，看看它们是怎样运作的：

1. 首先，导入 node 需要的模块，用来给 REST API 发送请求。在代码的顶端添加如下语句：

   ```js
   const request = require("request");
   ```

2. 现在更新一下 `capabilities` 对象，添加工程名——在右大括号前添加下面代码，记得要在上一行末增加一个逗号（在 BrowserStack 自动化仪表盘上，你可以修改 build 和 project 名称来组织不同窗口下的测试）：

   ```js
   'project' : 'Google test 2'
   ```

3. 接下来获取当前会话的 `sessionId` , 就知道往哪儿发送请求（后面你会看到，ID 包含在请求的 URL 中）。将下面代码添加到创建 `driver` 对象（`var driver ...`）的代码块下面：

   ```js
   let sessionId;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
   });
   ```

4. 最后，修改下面 `driver.sleep(2000)` 的代码，添加 REST API 调用（同样，使用你的真实用户名和访问密钥替换 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的值）：

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "passed",
             reason: "Google results showed correct title",
           },
         });
       } else {
         console.log("Test failed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "failed",
             reason: "Google results showed wrong title",
           },
         });
       }
     });
   });
   ```

代码很直观——测试一完成，就会发送一个 API 调用到 BrowserStack 来更新测试状态是通过还是完成，并且给出相关的原因。

现在回到 [BrowserStack 自动化仪表盘](https://www.browserstack.com/automate)页面，你会看到测试会话如之前一样正常运行，并且增加了更新的数据：

![BrowserStack 自定义结果](bstack_custom_results.png)

### Sauce Labs

在 Sauce Labs 远程运行 Selenium 测试与在 BrowserStack 一样简单，尽管它们有一些语法的差异。所需的代码应该满足以下样式。

我们来撰写一个示例：

1. 在你的工程目录下，新建一个文件 `sauce_google_test.js`.
2. 复制下面内容：

   ```js
   const webdriver = require("selenium-webdriver");
   const By = webdriver.By;
   const until = webdriver.until;
   const username = "YOUR-USER-NAME";
   const accessKey = "YOUR-ACCESS-KEY";

   const driver = new webdriver.Builder()
     .withCapabilities({
       browserName: "chrome",
       platform: "Windows XP",
       version: "43.0",
       username,
       accessKey,
     })
     .usingServer(
       `https://${username}:${accessKey}@ondemand.saucelabs.com:443/wd/hub`,
     )
     .build();

   driver.get("http://www.google.com");

   driver.findElement(By.name("q")).sendKeys("webdriver");

   driver.sleep(1000).then(() => {
     driver.findElement(By.name("q")).sendKeys(webdriver.Key.TAB);
   });

   driver.findElement(By.name("btnK")).click();

   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     });
   });

   driver.quit();
   ```

3. 从你的 [Sauce Labs 用户设置](https://app.saucelabs.com/user-settings), 获取你的用户名和访问密钥，并替换代码中对于 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的值（确保它们依然安全）。
4. 执行如下命令运行测试：

   ```bash
   node sauce_google_test
   ```

   测试会被发送到 Sauce Labs，并返回相应的测试结果到你的控制台。这体现了包含报告机制的重要性！

5. 现在访问你的 [Sauce Labs 自动化测试仪表盘](https://app.saucelabs.com/dashboard/tests) 页面，会看到列出的测试; 同样你也可以看到视频、截屏和其他类似的数据。
   ![Sauce Labs 自动化测试](sauce_labs_automated_test.png)

> **备注：** Sauce Labs 的[平台配置器](https://saucelabs.com/platform/platform-configurator#/)是一个有用的工具，可以根据你想测试的浏览器或操作系统，生成 capability 对象，以反馈给你的驱动实例。

> **备注：** 你可以查看[使用 Selenium 进行 Web 自动化测试](https://docs.saucelabs.com/web-apps/automated-testing/selenium/)和[实时 Selenium Node.js 测试](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs)获取更多关于 Sauce Labs 和 Selenium 测试的有用信息。

#### 编程填充 Sauce Labs 的测试详情

使用 Sauce Labs API 可以给测试添加更多详情，如测试是否通过、测试名称等等，Sauce Labs 默认并没有这些细节！

示例如下：

1. 安装 Node Sauce Labs 套件（如果你之前没有运行过）：

   ```bash
   npm install saucelabs --save-dev
   ```

2. 依赖 saucelabs。在 `sauce_google_test.js` 文件顶端，就在之前的变量声明下面添加如下代码：

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. 接着添加如下代码，创建一个新的 SauceLabs 实例：

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   同样，用真实的用户名和访问密钥来替换 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的值（注意，saucelabs 的 npm 包使用的是 `password`，而不是 `accessKey`）。由于你现在正在使用这些东西两次，你可能需要创建几个辅助变量来存储它们。

4. 在 `driver` 变量定义的下方（就在 `build()` 行后面）添加下面代码块，它将获取正确的驱动 `sessionID` 来将数据写入进程（你可以在下一个代码块中看到它的动作）：

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. 最后，将代码末尾的 `driver.sleep(2000)` 代码块替换如下：

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       let testPassed = false;
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         testPassed = true;
       } else {
         console.error("Test failed");
       }

       saucelabs.updateJob(driver.sessionID, {
         name: "Google search results page title test",
         passed: testPassed,
       });
     });
   });
   ```

这里，我们根据测试结果是通过或失败，将 `testPassed` 变量设置为 `true` 或 `false`，然后使用 `saucelabs.updateJob()` 方法来更新详情。

回到 [Sauce Labs 自动化测试仪表盘](https://app.saucelabs.com/dashboard/tests)页面，你应该看到你刚创建的 job 现在有更新的数据附在上面：

![Sauce Labs 更新过的 Job 信息](sauce_labs_updated_job_info.png)

### 自己的远程服务器

如果你不想使用 Sauce Labs 或 BrowserStack 之类的服务，你也可以设置自己的远程测试服务器。具体操作如下：

1. Selenium 的远端服务器要求运行 Java，从 [Java SE 下载页面](https://www.oracle.com/java/technologies/downloads/)下载适合你平台的最新 JDK 并安装。
2. 接着，下载最新的 [Selenium 单机服务器](http://selenium-release.storage.googleapis.com/index.html)，它作为你的脚本和浏览器驱动之间的一个代理。选择最新的稳定版本（最好不要选 beta 版本），从列表中选择以“selenium-server-standalone”开头的文件。下载完成后，放到一个靠谱的地方，比如家目录下。如果你还没有将位置添加到 `PATH`，现在就需要添加了（查看[在 Node 中创建 Selenium](#在_node_下建立_selenium) 小节）。
3. 在作为服务器的电脑终端上执行如下代码，安装单机版服务器

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   修改 `.jar` 文件名为你获取的文件名称。

4. 服务会运行在 `http://localhost:4444/wd/hub`，你可以去试试看是什么效果。

现在服务器运行起来了，让我们在 selenium 服务器上来创建一个 demo 测试。

1. 复制 `google_test.js` 文件，改名为 `google_test_remote.js`，放到项目目录下。
2. 将第二段代码（以 `let driver = …` 开头的代码段）修改如下：

   ```js
   let driver = new webdriver.Builder()
     .forBrowser("firefox")
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. 运行测试，你会看到它如期执行，只不过这次是在独立服务器端：

   ```bash
   node google_test_remote.js
   ```

是不是很酷？我们是在本地测试的，但你可以任何一台服务器上使用相关的浏览器驱动进行测试，使用相应的 URL 将你的脚本和服务器连接起来就可以了。

## 将 selenium 和 CI 工具集成

另外，将 Selenium 同 Sauce Labs 之类的其他工具集成到持续集成（CI）工具中是很有用的，这意味着你可以通过 CI 工具来运行测试，只有测试通过才允许提交代码的修改。

在这里不对这个话题进行深入探讨，但是我们建议你从 Travis CI 开始——这大概是最容易入门的 CI 工具了，它与 GitHub 和 Node 等 web 工具都有很好的集成。

作为入门，可以查看一些例子：

- [为初学者准备的 Travis CI 教程](https://docs.travis-ci.com/user/for-beginners)
- [建立 Node.js 项目](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (with Travis)
- [集成 Travis CI 的 LambdaTest](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [集成 CircleCI 的 LambdaTest](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [集成 Jenkins 的 LambdaTest](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [集成 Travis CI 的 Sauce Labs](https://docs.travis-ci.com/user/sauce-connect/)

> **备注：** 如果你希望用**无代码自动化**进行持续测试，那么你可以使用 [Endtest](https://endtest.io) 或 [TestingBot](https://testingbot.com)。

## 总结

这个模块应该是有趣的，并且应该给你足够的洞察力来编写和运行自动化测试，以便你开始编写自己的自动化测试。

{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
