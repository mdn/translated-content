---
title: 搭建自己的自动化测试环境
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
original_slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

在本文中，我们将教你如何搭建自己的自动化测试环境，并使用 Selenium/WebDriver 以及一种测试库（如 selenium-webdriver for Node）来运行测试。我们还将探讨如何将本地测试环境与上一篇文章中提到的商业工具集成。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言的核心知识，对<a
          href="/zh-CN/docs/Learn_web_development/Extensions/Testing/Introduction"
          >跨浏览器测试原则</a
        >和<a
          href="/zh-CN/docs/Learn_web_development/Extensions/Testing/Automated_testing"
          >自动化测试</a
        >有基本理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        展示如何在本地建立 Selenium 测试环境并运行测试，以及如何将其与 LambdaTest、Sauce Labs 和 BrowserStack 等工具集成。
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) 是最流行的浏览器自动化测试工具。使用 Selenium 有很多种方式，但最佳方式是通过其强大的 WebDriver API，它建立在 Selenium 的基础上，通过调用浏览器接口实现自动化，执行诸如“打开网页”、“移动网页上的元素”、“点击链接”、“查看链接是否打开 URL”等操作。这是运行自动化测试的理想选择。

安装和使用 WebDriver 的方式取决于你的编程环境。常见的环境都提供安装 WebDriver 的包或框架，并且支持与 WebDriver 通信的多语言绑定，如 Java、C#、Ruby、Python、JavaScript（Node）等。查看[建立一个 Selenium-WebDriver 的工程](https://www.selenium.dev/zh-cn/documentation/webdriver/getting_started/)以了解 Selenium 在不同语言下的具体配置。

不同的浏览器需要使用不同的驱动程序，使 WebDriver 能够与浏览器交互并控制它们。查看[支持 Selenium 的平台](https://www.selenium.dev/downloads/)以获取浏览器驱动程序的信息。

我们将使用 Node.js 来编写和运行 Selenium 测试用例。Node.js 是一个前端开发者熟悉且易于上手的开发环境。

> [!NOTE]
> 如果你需要了解在其他服务器端环境下使用 WebDriver 的方式，也可以点击[支持 Selenium 的平台](https://www.selenium.dev/downloads/)来获取更多有用的链接。

### 在 Node 下搭建 Selenium 环境

1. 参考上一个章节[配置 Node 和 npm 环境](/zh-CN/docs/Learn_web_development/Extensions/Testing/Automated_testing#配置_node_和_npm_环境)，创建一个新的 npm 工程，并取一个不同的名字，如 `selenium-test`。
2. 接下来，我们需要安装一个框架从而能够在 Node 中运行 Selenium。我们选择 Selenium 官方提供的 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)，它的文档更新及时，维护良好。如果你想要其他选择，[webdriver.io](https://webdriver.io/) 和 [nightwatch.js](https://nightwatchjs.org/) 也都是不错的选择。要安装 selenium-webdriver，在你的工程目录下运行以下命令：

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> 即使你已经安装过 selenium-webdriver 并下载了浏览器驱动，我们仍然建议你按照步骤再来一遍，以确保所有内容都是最新的。

接下来，你需要下载相应的驱动，使 WebDriver 能控制你需要测试的浏览器。在 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) 页面（参见第一部分的表格）查看如何下载。显然，有些浏览器是操作系统特定的，我们将坚持使用 Firefox 和 Chrome，因为它们可以在所有主要的操作系统上使用。

1. 下载最新版本的 [GeckoDriver](https://github.com/mozilla/geckodriver/releases/)（用于 Firefox）和 [ChromeDriver](https://developer.chrome.google.cn/docs/chromedriver/downloads) 驱动。
2. 将它们解压到一个容易访问的地方，比如你的主用户目录的根目录。
3. 将 `chromedriver` 和 `geckodriver` 驱动的目录添加到你的系统 `PATH` 变量中，这应该是从你的硬盘根目录开始的一个绝对路径。举个例子，如果我们使用的是 macOS 机器，用户名为 bob，并且将驱动放在用户的根目录下，那么路径就是 `/Users/bob`。

> [!NOTE]
> 重申一下，添加到 `PATH` 的路径是到包含驱动的目录，而不是驱动自身！这是一个常见的错误。

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

4. 保存并关闭文件，然后重启命令终端以使 Bash 的配置生效。
5. 在命令终端上输入以下命令，查看新的路径是否已经添加到 `PATH` 变量中：

   ```bash
   echo $PATH
   ```

6. 你应该可以在打印出来的信息中找到刚刚设置的路径。

在 Windows 下设置 `PATH` 变量，参考[如何添加一个新的文件目录到系统路径？](https://www.itprotoday.com/)

OK，现在我们来做一个快速的测试来验证一下一切是否正常。

1. 在你的工程目录下创建一个新的文件 `google_test.js`：
2. 将以下内容复制到上述文件中，然后保存：

   ```js
   const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

   (async function example() {
     const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
     try {
       await driver.get("https://www.google.com/ncr");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
     } finally {
       await driver.sleep(2000); // 延迟足够长的时间以看到搜索页面！
       await driver.quit();
     }
   })();
   ```

   > [!NOTE]
   > 此函数是一个 {{glossary("IIFE")}}（立即调用函数表达式）。

3. 在终端上，确保在你的项目目录下输入如下命令：

   ```bash
   node google_test
   ```

你会看到 Firefox 自动打开一个窗口！Google 会自动加载到标签页中，并在搜索框中输入“webdriver”，然后点击搜索按钮。接着，WebDriver 会等待 1 秒钟，然后获取页面标题。如果标题是“webdriver - Google Search”，我们将返回一条消息，表示测试通过。然后我们再等待四秒钟，之后 WebDriver 会关闭 Firefox 窗口并停止。

## 一次测试多个浏览器

接下来，让我们来试一下同时在多个浏览器上进行测试。

1. 在你的工程目录下创建另外一个新文件 `google_test_multiple.js`。你可以根据实际需要测试的浏览器情况，对我们添加的浏览器进行修改或删除等操作。但确保系统安装了正确的浏览器驱动。关于如何填写 `.forBrowser()` 方法中对浏览器描述的字符串，请参考 [Browser 枚举值](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser)页面。
2. 将下面代码复制到文件中保存：

   ```js
   const { Builder, Browser, By, Key } = require("selenium-webdriver");

   const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();

   const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

   async function searchTest(driver) {
     try {
       await driver.get("http://www.google.com");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000).then(async () => {
         await driver.getTitle().then(async (title) => {
           if (title === "webdriver - Google Search") {
             console.log("Test passed");
           } else {
             console.log("Test failed");
           }
         });
       });
     } finally {
       driver.quit();
     }
   }

   searchTest(driver_fx);
   searchTest(driver_chr);
   ```

3. 在终端上，确保在你的项目目录下输入如下命令：

   ```bash
   node google_test_multiple
   ```

4. 如果你用的是 Mac，并决定测试 Safari 浏览器，可能会产生一个错误信息：“Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver.”（无法创建会话：你必须启用 Safari 的“开发”菜单中的“允许远程自动化”选项，才能通过 WebDriver 控制 Safari）。如果是这样，请根据指示操作并重新尝试一遍。

现在，我们像上次一样完成了测试，这一次浏览器的测试代码放到了 `searchTest()` 函数中。我们对多个浏览器创建了新的浏览器实例，然后将每一个实例传递给函数，这样就可以在全部 3 个浏览器下执行测试！

有意思吧？接下来我们继续，来了解一下 WebDriver 的语法基础。

## WebDriver 语法速成课程

现在我们来看一下 webdriver 的一些关键语法。更完整的细节，可以参考 [selenium-webdriver JavaScript API 参考](https://www.selenium.dev/selenium/docs/api/javascript/)以及 Selenium 主要的文档 [Selenium WebDriver](https://www.selenium.dev/zh-cn/documentation/webdriver/)，里面有用不同语言编写的丰富的学习示例。

### 启动新的测试

要启动一个新的测试，你需要包含 `selenium-webdriver` 模块，并导入 `Builder` 构造函数和 `Browser` 接口：

```js
const { Builder, Browser } = require("selenium-webdriver");
```

你可以使用 `Builder()` 构造函数创建一个新的驱动实例，并链式调用 `forBrowser()` 方法来指定你希望使用的浏览器。`build()` 方法在链式调用的末尾用于实际构建驱动实例（有关这些功能的详细信息，请参阅 [Builder 类参考](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html)）。

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

请注意，你可以为要测试的浏览器设置特定的配置选项。例如，你可以在 `forBrowser()` 方法中设置特定的版本和操作系统：

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "46", "MAC").build();
```

你也可以使用环境变量来设置这些选项，例如：

```bash
SELENIUM_BROWSER=firefox:46:MAC
```

让我们创建一个新测试，以便在讨论这些代码时进行探索。在你的 Selenium 测试项目目录中，创建一个名为 `quick_test.js` 的新文件，并添加以下代码：

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

### 获取测试的文档

通过刚创建的驱动实例的 `get()` 方法，加载你需要测试的网页：

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> 可以查看 [WebDriver 类参考](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html)了解这一部分和下面提到的内容的详情。

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

更新 `example()` 函数如下：

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
})();
```

### 同文档交互

得到测试的文档后，我们就需要同它进行交互操作了，比如获取特定的元素对它进行某种测试。WebDriver 提供了[多种方法来选择 UI 元素](https://www.selenium.dev/zh-cn/documentation/webdriver/elements/)，比如通过 ID、class、元素名称等。具体的选择通过 `findElement()` 方法完成，只需要将选择的元素作为参数传给它即可。举例来说，通过 ID 选择元素：

```js
const element = driver.findElement(By.id("myElementId"));
```

通过 CSS 查找元素的最常用方法是使用 `By.css()` 方法，它可以通过 CSS 选择器的方式来选择元素。

现在更新 `example()` 函数如下：

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
  const button = driver.findElement(By.css("button:nth-of-type(1)"));
})();
```

### 测试元素

同 web 文档和元素交互的方式很多。在 WebDriver 的文档中有很多常用的例子，你可以从[获取文本值](https://www.selenium.dev/zh-cn/documentation/webdriver/elements/information/#文本内容)开始。

如果需要获取按钮中的文本，可以这样操作：

```js
button.getText().then((text) => {
  console.log(`按钮中的文本是 '${text}'`);
});
```

如下所示，将此添加到 `example()` 函数的底部：

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.getText().then((text) => {
    console.log(`按钮中的文本是 '${text}'`);
  });
})();
```

在你的项目目录下，运行测试：

```bash
node quick_test.js
```

你应该可以看到控制台打印出按钮的文本内容。

让我们做点更有用的事情吧。如下所示，用代码 `button.click();` 替换前面的代码：

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();
})();
```

重新运行测试；按钮被点击，你会看到 `alert()` 框弹出来，这样就知道按钮是正常工作的了！

你还可以与弹出框进行交互。更新 `example()` 函数如下，再运行一下测试：

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();

  await driver.wait(until.alertIsPresent());

  const alert = driver.switchTo().alert();

  alert.getText().then((text) => {
    console.log(`提示文本是 '${text}'`);
  });

  alert.accept();
})();
```

接下来，我们试一下在表单元素中输入文本。更新 `example()` 函数如下并运行测试：

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("填充表单");

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();
  await driver.wait(until.alertIsPresent());

  const alert = driver.switchTo().alert();

  alert.getText().then((text) => {
    console.log(`提示文本是 '${text}'`);
  });

  alert.accept();
})();
```

你可以使用 `Key` 对象的属性提交无法用普通字符表示的按键。例如，我们在上面使用了这种代码，以便在提交表单输入之前按下 Tab 键：

```js
driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(Key.TAB);
});
```

### 等待操作完成

有时候，在进行下一步处理之前我们需要 WebDriver 等待一些操作完成。比如加载一个新的页面，在与页面元素交互之前，需要等待 DOM 完成加载，否则测试有可能会失败。

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

同样添加 `sleep()` 方法到我们的 `quick_test.js` 中，将 `example()` 函数更新如下：

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

(async function example() {
  try {
    driver.get(
      "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
    );

    driver.sleep(2000).then(() => {
      const input = driver.findElement(By.id("name"));

      input.sendKeys("填充表单");
      input.getAttribute("value").then((value) => {
        if (value !== "") {
          console.log("表单输入可编辑");
        }
      });
    });

    const button = driver.findElement(By.css("button:nth-of-type(1)"));

    button.click();

    await driver.wait(until.alertIsPresent());

    const alert = driver.switchTo().alert();

    alert.getText().then((text) => {
      console.log(`提示文本是 '${text}'`);
    });

    alert.accept();
  } finally {
    await driver.sleep(4000); // 延迟足够长的时间以看到搜索页面！
    driver.quit();
  }
})();
```

WebDriver 会等待 2 秒然后填充表单的文本框。接下来我们使用 `getAttribute()` 获取它的 `value` 属性值，并对它进行测试（如是否为空），最后将测试结果打印出来。

> [!NOTE]
> 还有一个方法叫 [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait)，它是在一定的时间内对某个条件进行反复测试，然后再继续执行代码，它也使用了 [util 库](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html)，其中定义了使用 `wait()` 的常见条件。

### 使用后关闭驱动

完成一次测试后，你需要关闭所有已打开的驱动实例，以确保你的机器上不会运行一大堆浏览器实例。只需要调用驱动实例的 `quit()` 方法即可。现在将下面这行代码添加到你的 `quick_test.js` 最后：

```js
driver.quit();
```

运行该程序时，你应该会看到测试正在执行，并且在测试完成后，浏览器实例会自动关闭。这有助于防止计算机因过多的浏览器实例而变得杂乱无章，特别是在浏览器实例过多导致计算机速度减慢的情况下。

## 测试最佳实践

有很多编写最佳测试的实践方法，你可以参考[测试设计考虑](https://www.selenium.dev/zh-cn/documentation/test_practices/)来了解一些背景。总的来说，测试应该遵循如下几点：

1. 使用好的定位策略：当你[同文档交互](#同文档交互)时，确保你使用的定位器和页面对象是不变的。如对元素进行测试，确保这个元素有固定的 ID 或页面位置，这样可以通过 CSS 选择器定位到它，不至于在下一个迭代就发生变化。尽可能让你的测试稳健，而不是有一点改动就会崩溃。
2. 写原子测试：一个测试只测一件事，这样有利于跟踪哪一个测试文件执行的是哪种测试。举例来说，前面的 `google_test.js` 就只测试了一个简单的用例——页面的搜索结果标题是否正确。我们可以给它改一个名字，比如改为 `results_page_title_set_correctly.js`，这样当我们添加更多的测试文件时它的作用会更直观。
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

> **备注：** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) 中包含了一些关于如何配置不同测试/断言工具组合的有用示例。

## 运行远程测试

在远端服务器上运行测试并不比在本地执行测试要困难多少，只需要在创建驱动实例的时候多配置几个特征参数，如要测试的浏览器的功能、服务器地址以及访问服务器所需的用户凭据（如果有的话）。

### LambdaTest

让 Selenium 测试在 LambdaTest 上远程运行非常简单。你需要的代码应该遵循下面的模式。

我们来写个示例：

1. 在你的项目目录中，创建一个新文件 `lambdatest_google_test.js`。
2. 将下列内容复制到文件中：

   ```js
   const { By, Builder } = require("selenium-webdriver");

   // 用户名：用户名可以在自动化仪表板上找到
   const USERNAME = "{username}";

   // 访问密钥：访问密钥可以从自动化仪表板或个人资料部分生成
   const KEY = "{accessKey}";

   // 网格 URL：网格 URL 可以在自动化仪表板上找到
   const GRID_HOST = "hub.lambdatest.com/wd/hub";

   function searchTextOnGoogle() {
     // 配置功能
     const capabilities = {
       platform: "windows 10",
       browserName: "chrome",
       version: "67.0",
       resolution: "1280x800",
       network: true,
       visual: true,
       console: true,
       video: true,
       name: "Test 1", // 测试名称
       build: "NodeJS build", // 构建名称
     };

     // URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
     const gridUrl = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

     // 设置并构建 Selenium 驱动对象
     const driver = new Builder()
       .usingServer(gridUrl)
       .withCapabilities(capabilities)
       .build();

     // 导航到 URL，搜索文本并获取页面标题
     driver.get("https://www.google.com/ncr").then(function () {
       driver
         .findElement(By.name("q"))
         .sendKeys("LambdaTest\n")
         .then(function () {
           driver.getTitle().then((title) => {
             setTimeout(() => {
               if (title === "LambdaTest - Google Search") {
                 driver.executeScript("lambda-status=passed");
               } else {
                 driver.executeScript("lambda-status=failed");
               }
               driver.quit();
             }, 5000);
           });
         });
     });
   }

   searchTextOnGoogle();
   ```

3. 访问你的 [LambdaTest 自动测试仪表板](https://www.lambdatest.com/selenium-automation)，通过点击右上方的 **key** 图标来获取你的 LambdaTest 的用户名和访问密钥（见 _Username and Access Keys_）。将代码中的 `{username}` 和 `{accessKey}` 占位符替换为你的实际用户名和访问密钥值（并确保它们不泄露）。

4. 在终端中运行以下命令，以执行测试：

   ```bash
   node lambdatest_google_test
   ```

   测试将发送到 LambdaTest，其输出将反馈在 LambdaTest 控制台中。
   如果你希望从 LambdaTest 平台提取这些结果用于报告，那么你可以通过使用 [LambdaTest restful API](https://www.lambdatest.com/blog/lambdatest-launches-api-for-selenium-automation/) 来实现。

5. 现在，如果访问你的 [LambdaTest 自动测试仪表板](https://accounts.lambdatest.com/dashboard)，你会看到你的测试被列出；从这里你可以看到视频、屏幕截图和其他此类数据。你还会看到 **passed** 或 **failed** 的状态，而不是 **completed**，因为有 `if` 或 `else` 代码块。

   [![LambdaTest 自动测试仪表板](automation-logs-1.jpg)](https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Automation-logs-1.jpg)

   你可以检索网络、命令、异常和 Selenium 日志，用于你测试构建中的每个测试。你还会发现你的 Selenium 脚本执行的视频记录。

> [!NOTE]
> LambdaTest 自动测试仪表板上的 _HELP_ 按钮将为你提供大量的信息，帮助你开始使用 LambdaTest 自动化。你也可以关注我们关于[在 Node JS 中运行第一个 Selenium 脚本](https://www.lambdatest.com/support/docs/quick-guide-to-run-node-js-tests-on-lambdatest-selenium-grid/)的文档。

> [!NOTE]
> 如果你不想手写测试的 capability 对象，你可以用 [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) 来生成它们。

### BrowserStack

在 BrowserStack 进行 Selenium 远程测试很简单，你需要的代码应遵循以下模式。

我们来写一个例子：

1. 在你的工程目录下，新建一个文件 `bstack_google_test.js`。
2. 复制下面内容：

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const request = require("request");

   // 输入能力
   const capabilities = {
     "bstack:options": {
       os: "OS X",
       osVersion: "Sonoma",
       browserVersion: "17.0",
       local: "false",
       seleniumVersion: "3.14.0",
       userName: "YOUR-USER-NAME",
       accessKey: "YOUR-ACCESS-KEY",
     },
     browserName: "Safari",
   };

   const driver = new Builder()
     .usingServer("http://hub-cloud.browserstack.com/wd/hub")
     .withCapabilities(capabilities)
     .build();

   (async function bStackGoogleTest() {
     try {
       await driver.get("https://www.google.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000);
       const title = await driver.getTitle();
       if (title === "webdriver - Google Search") {
         console.log("测试通过");
       } else {
         console.log("测试失败");
       }
     } finally {
       await driver.sleep(4000); // 延迟足够长的时间以看到搜索页面！
       await driver.quit();
     }
   })();
   ```

3. 从 [BrowserStack Account - Summary](https://www.browserstack.com/accounts/profile/details) 获取用户名和访问密钥（请参阅*用户名和访问密钥*）。用实际用户名和访问密钥值替换代码中的 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 占位符（并确保它们不泄露）。
4. 执行下面命令：

   ```bash
   node bstack_google_test
   ```

   测试被发送给 BrowserStack，测试结果会返回到你的控制台。这体现了包含报告机制的重要性！

5. 现在回到 [BrowserStack 自动化仪表板](https://www.browserstack.com/automate)页面，你会看到测试列出来的结果：
   ![BrowserStack 自动测试结果](bstack_automated_results.png)

如果你点击了测试链接，就会进入一个新的屏幕，在那里可以看到测试的视频记录，以及与测试相关的多个详细信息记录。

> [!NOTE]
> Browserstack 自动化仪表盘的 _Resources_ 菜单选项上提供了许多运行自动化测试的有用信息。查看[使用 Node JS 编写自动化测试的文档](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs)获取相关信息，研究一下使用 BrowserStack 可以帮你做到哪些事情。

> [!NOTE]
> 如果你不想手写 capability 对象，可以使用文档中嵌入的生成器，参见[运行你的首个测试](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs#run-your-first-test)）。

#### 编程填充 BrowserStack 的测试详情

使用 BrowserStack REST API 和其他功能可以给测试添加更多详情，如测试是否通过，为什么通过，测试属于工程的哪个部分等，BrowserStack 默认并没有这些细节！

让我们来更新一下 `bstack_google_test.js` 示例，看看它们是怎样运作的：

1. 在项目目录下运行以下命令，安装请求模块：

   ```js
   npm install request
   ```

2. 之后，导入 node 需要的模块，用来给 REST API 发送请求。在代码的顶端添加如下语句：

   ```js
   const request = require("request");
   ```

3. 现在更新一下 `capabilities` 对象，添加工程名——在右大括号前添加下面代码，记得要在上一行末增加一个逗号（在 BrowserStack 自动化仪表盘上，你可以修改 build 和 project 名称来组织不同窗口下的测试）：

   ```js
   'project' : 'Google test 2'
   ```

4. 接下来获取当前会话的 `sessionId`，从而知道往哪儿发送请求（后面你会看到，ID 包含在请求的 URL 中）。将下面代码添加到创建 `driver` 对象（`let driver …`）的代码块下面：

   ```js
   let sessionId;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
   });
   ```

5. 最后，修改下面 `driver.sleep(2000)` 的代码，添加 REST API 调用（同样，使用你的真实用户名和访问密钥替换 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的值）：

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("测试通过");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "passed",
             reason: "Google results showed correct title",
           },
         });
       } else {
         console.log("测试失败");
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

现在回到 [BrowserStack 自动化仪表盘](https://live.browserstack.com/dashboard)页面，你会看到测试会话如之前一样正常运行，并且增加了更新的数据：

![BrowserStack 自定义结果](bstack_custom_results.png)

### Sauce Labs

在 Sauce Labs 远程运行 Selenium 测试与在 BrowserStack 一样简单，尽管它们有一些语法的差异。所需的代码应该遵循以下模式。

我们来撰写一个示例：

1. 在你的工程目录下，新建一个文件 `sauce_google_test.js`.
2. 复制下面内容：

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const username = "YOUR-USER-NAME";
   const accessKey = "YOUR-ACCESS-KEY";

   const driver = new Builder()
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
     driver.findElement(By.name("q")).sendKeys(Key.TAB);
   });

   driver.findElement(By.name("btnK")).click();

   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("测试成功");
       } else {
         console.log("测试失败");
       }
     });
   });

   driver.quit();
   ```

3. 从你的 [Sauce Labs 用户设置](https://app.saucelabs.com/user-settings)，获取你的用户名和访问密钥，并替换代码中 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的值（确保它们依然不泄露）。
4. 执行如下命令运行测试：

   ```bash
   node sauce_google_test
   ```

   测试会被发送到 Sauce Labs，并返回相应的测试结果到你的控制台。这体现了包含报告机制的重要性！

5. 现在访问你的 [Sauce Labs 自动化测试仪表盘](https://app.saucelabs.com/dashboard/tests) 页面，会看到列出的测试；同样你也可以看到视频、截屏和其他类似的数据。
   ![Sauce Labs 自动化测试](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs 的[平台配置器](https://saucelabs.com/platform/platform-configurator#/)是一个有用的工具，可以根据你想测试的浏览器或操作系统，生成 capability 对象，以反馈给你的驱动实例。

> [!NOTE]
> 你可以查看[使用 Selenium 进行 Web 自动化测试](https://docs.saucelabs.com/web-apps/automated-testing/selenium/)和[实时 Selenium Node.js 测试](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs)获取更多关于 Sauce Labs 和 Selenium 测试的有用信息。

#### 编程填充 Sauce Labs 的测试详情

使用 Sauce Labs API 可以给测试添加更多详情，如测试是否通过、测试名称等等，Sauce Labs 默认并没有这些细节！

为此，你需要：

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

   同样，用真实的用户名和访问密钥来替换 `YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的值（注意，saucelabs 的 npm 包使用的是 `password`，而不是 `accessKey`）。由于你现在使用这些东西两次了，建议你创建几个辅助变量来存储它们。

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
         console.log("测试通过");
         testPassed = true;
       } else {
         console.error("测试失败");
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

如果你不想使用 Sauce Labs 或 BrowserStack 之类的服务，你也可以配置自己的远程测试服务器。具体操作如下：

1. Selenium 的远端服务器要求运行 Java，从 [Java SE 下载页面](https://www.oracle.com/java/technologies/downloads/)下载适合你平台的最新 JDK 并安装。
2. 接着，下载最新的 [Selenium 单机服务器](http://selenium-release.storage.googleapis.com/index.html)，它作为你的脚本和浏览器驱动之间的一个代理。选择最新的稳定版本（最好不要选 beta 版本），从列表中选择以“selenium-server-standalone”开头的文件。下载完成后，放到一个靠谱的地方，比如主目录下。如果你还没有将位置添加到 `PATH`，现在就需要添加了（查看[在 Node 中搭建 Selenium 环境](#在_node_下搭建_selenium_环境)小节）。
3. 在作为服务器的电脑终端上执行如下代码，安装独立服务器。

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   修改 `.jar` 文件名为你获取的文件名称。

4. 服务会运行在 `http://localhost:4444/wd/hub`，你可以去试试看是什么效果。

现在服务器运行起来了，让我们在 selenium 服务器上来创建一个示例测试。

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

另外，建议将 Selenium 同 Sauce Labs 之类的其他工具集成到持续集成（CI）工具中，这意味着你可以通过 CI 工具来运行测试，只有测试通过才允许提交代码的修改。

在这里不对这个话题进行深入探讨，但是我们建议你从 Travis CI 开始——这大概是最容易入门的 CI 工具了，它与 GitHub 和 Node 等 web 工具都有很好的集成。

作为入门，可以查看一些例子：

- [为初学者准备的 Travis CI 教程](https://docs.travis-ci.com/user/for-beginners)
- [建立 Node.js 项目](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (with Travis)
- [集成 Travis CI 的 LambdaTest](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [集成 CircleCI 的 LambdaTest](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [集成 Jenkins 的 LambdaTest](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [集成 Travis CI 的 Sauce Labs](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> 如果你希望用**无代码自动化**进行持续测试，那么你可以使用 [Endtest](https://endtest.io) 或 [TestingBot](https://testingbot.com)。

## 总结

这个模块应该很有趣，并且应该让你对编写和运行自动化测试有足够的了解，以便你开始编写自己的自动化测试。

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
