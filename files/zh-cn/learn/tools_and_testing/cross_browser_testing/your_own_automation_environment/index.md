---
title: Setting up your own test automation environment
slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

在这篇文章中，我们将教会您如何安装自己的自动化测试环境，并使用 Selenium/WebDriver，和一种测试库（比如：selenium-webdriver for Node）运行自己的测试。我们还将着眼于如何将本地测试环境与上一篇文章中讨论的商业工具集成在一起。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/zh-CN/docs/Learn/HTML">HTML</a>,
        <a href="/zh-CN/docs/Learn/CSS">CSS</a>, and
        <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> languages; an idea
        of the high level
        <a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >principles of cross browser testing</a
        >, and
        <a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing"
          >automated testing</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To show how to set up a Selenium testing environment locally and run
        tests with it, and how to integrate it with tools like Sauce Labs and
        BrowserStack.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](http://www.seleniumhq.org/)是最流行的浏览器自动化测试工具。最易使用的方法是使用基于 Selenium 的 WebDriver API，它通过调用浏览器接口实现自动化，执行诸如“打开网页”、“移动网页上的元素”、“点击链接”、“查看链接是否打开 URL”等。对于运行自动化测试来说是一个十分理想的方法。

安装和使用 WebDriver 的方式取决于你的编程环境。常见的环境都提供有安装 WebDriver 的包或框架，并且支持与 WebDriver 通信的多语言绑定，如 Java, C#, Ruby, Python, JavaScript (Node) 等。查看[建立一个 Selenium-WebDriver 的工程](http://www.seleniumhq.org/docs/03_webdriver.jsp#setting-up-a-selenium-webdriver-project)了解 Selenium 在不同语言下建立的更多细节。

不同的浏览器需要使用不同的驱动，来使 WebDriver 能够与浏览器交互并控制浏览器。查看[支持 Selenium 的平台](http://www.seleniumhq.org/about/platforms.jsp)来了解获取浏览器驱动的信息。

我们将使用 Node.js 来编写和运行 Selenium 测试用例。Node.js 是一个前端开发者都很熟悉，并且容易上手的开发环境。

> **备注：** 如果你需要了解在其他服务器端环境下使用 WebDriver 的方式，也可以点击[支持 Selenium 的平台](http://www.seleniumhq.org/about/platforms.jsp)来获取更多有用的链接。

### 在 Node 下建立 Selenium

1. 参考上一个章节[创建 Node 和 npm](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#Setting_up_Node_and_npm)，创建一个新的 npm 工程，取一个不同的名字，如`selenium-test`.
2. 接下来，我们需要安装一个框架来允许我们从 Node 中运行 Selenium。我们选择 selenium 官方提供的 [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), 它的文档更新得很好，维护得也很好。如果你想要其它的选择，[webdriver.io](http://webdriver.io/) 和 [nightwatch.js](http://nightwatchjs.org/)也都不错。要安装 selenium-webdriver，在你的工程目录下运行如下命令：

    ```bash
    npm install selenium-webdriver
    ```

> **备注：** 即使你已经安装过 selenium-webdriver 并下载了浏览器驱动，我们仍然建议你按照步骤再来一遍，确定所有东西都是最新的。

接下来，你需要下载相应的驱动，使 WebDriver 能控制你需要测试的浏览器。在[selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (第一部分的表格) 页面查看如何下载。显然，有的浏览器是 OS 定制的，我们将使用 Firefox 和 Chrome, 它们在主流的 OS 下都支持。

1. 下载最新版本的 [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) ( Firefox) 和 [ChromeDriver](http://chromedriver.storage.googleapis.com/index.html) 驱动。
2. 将它们解压到一个简单的目录下，如用户根目录。
3. 把 `chromedriver` 和 `geckodriver` 驱动的目录添加到你的系统 `PATH` 变量。这应该是从你的硬盘根目录开始的一个绝对路径。举个例子，如果我们使用的是一个 Mac OS X 机器，用户名为 bob, 我们把驱动放到了用户的根目录下，那这个路径就是 `/Users/bob`。

> **备注：** 重申一下，添加到 `PATH` 的路径是到包含驱动的那一级目录，而不是驱动目录自身！这是一个常犯的错误。

在 Mac OS X 或大多数 Linux 系统中设置`PATH` 变量的操作如下：

1. 打开 `.bash_profile` (或 `.bashrc`) 文件 (如果看不到隐藏文件，需要将它们显示出来，查看 [Mac OSX 显示/隐藏文件](http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) 或 [Ubuntu 显示隐藏文件夹](http://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-ubuntu-14-04)）。
2. 把下面语句粘贴到文件的最后 (就像平常在机器上更新 path):

    ```bash
    #Add WebDriver browser drivers to PATH

    export PATH=$PATH:/Users/bob
    ```

3. 保存并关闭文件，然后重启命令终端以生效 Bash 的配置。
4. 在命令终端上敲下面命令，查看新的路径是否已经添加到 `PATH` 变量中：

    ```bash
    echo $PATH
    ```

5. 你应该可以在打印出来的信息中找到。

在 Windows 下设置 `PATH` 变量，参考 [如何添加一个新的文件目录到系统路径？](http://windowsitpro.com/systems-management/how-can-i-add-new-folder-my-system-path)

OK，现在我们来做一个快速的测试来验证一下一切是否正常。

1. 在你的工程目录下创建一个新的文件`google_test.js`:
2. 将下面代码复制到文件中保存：

    ```js
    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

    var driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();

    driver.get('http://www.google.com');

    driver.findElement(By.name('q')).sendKeys('webdriver');

    driver.sleep(1000).then(function() {
      driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
    });

    driver.findElement(By.name('btnK')).click();

    driver.sleep(2000).then(function() {
      driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
          console.log('Test passed');
        } else {
          console.log('Test failed');
        }
      });
    });

    driver.quit();
    ```

3. 在终端上，记住在你的工程目录下，输入如下命令：

    ```bash
    node google_test
    ```

你会看到 Firefox 自动打开了一个窗口！Google 自动加载到 tab 中，"webdriver" 被输入到搜索框，然后搜索按钮被点击。WebDriver 等待 2 秒; 然后获取文本标题，如果标题是"webdriver - Google Search", 将返回测试成功的消息。然后 WebDriver 关闭 Firefox 窗口并结束。

## 一次测试多个浏览器

接下来，让我们来试一下同时在多个浏览器上进行测试。这也是你经常碰到的情况！

1. 在你的工程目录下创建另外一个新文件`google_test_multiple.js`.你可以根据实际需要测试的浏览器情况，对我们添加的浏览器进行修改或删除等操作。但确保系统安装了正确的浏览器驱动。关于如何填写`.forBrowser()` 方法中对浏览器描述的字符串，请参考 [Browser enum](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Browser.html) .
2. 将下面代码复制到文件中保存：

    ```js
    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

    var driver_fx = new webdriver.Builder()
        .forBrowser('firefox')
        .build();

    var driver_chr = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    searchTest(driver_fx);
    searchTest(driver_chr);

    function searchTest(driver) {
      driver.get('http://www.google.com');
      driver.findElement(By.name('q')).sendKeys('webdriver');

      driver.sleep(1000).then(function() {
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
      });

      driver.findElement(By.name('btnK')).click();

      driver.sleep(2000).then(function() {
        driver.getTitle().then(function(title) {
          if(title === 'webdriver - Google Search') {
            console.log('Test passed');
          } else {
            console.log('Test failed');
          }
        });
      });

      driver.quit();
    }
    ```

3. 在终端上，记住在你的工程目录下，输入如下命令：

    ```bash
    node google_test_multiple
    ```

4. 如果你用的是 Mac 测试 Safari，可能会产生一个错误信息： "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." 如果是这样，根据指示重新尝试一遍。

现在，我们像上次一样完成了测试，这一次浏览器的测试代码放到了`searchTest()`函数中。我们对多个浏览器创建了新的浏览器实例，然后将每一个实例传递给函数，这样就可以在 3 个浏览器下执行测试！

有意思吧？接下来我们继续，来了解一下 WebDriver 的语法基础。

## WebDriver 语法速成课程

现在我们来看一下 webdriver 的一些关键语法。更完整的细节，可以参考[selenium-webdriver JavaScript API 参考](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/) , 以及 Selenium 主要的文档[Selenium WebDriver](http://www.seleniumhq.org/docs/03_webdriver.jsp) 和 [WebDriver: 高级使用手册](http://www.seleniumhq.org/docs/04_webdriver_advanced.jsp) , 里面有用不同语言编写的丰富的学习示例。

### 启动一个新的测试

要启动一次新的测试，你需要包含如下的`selenium-webdriver` 代码模块：

```js
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
```

接下来，通过 `new webdriver.Builder()` 构造器来创建一个新的驱动实例，通过`forBrowser()` 方法指定测试的浏览器类型，最后调用 `build()` 来实际创建它。 (查看 [Builder class reference](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Builder.html) 了解更多).

```js
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
```

在`forBrowser()` 中，你还可以设置浏览器的更多配置选项，如版本和操作系统：

```js
var driver = new webdriver.Builder()
    .forBrowser('firefox', '46', 'MAC')
    .build();
```

你还可以通过设置环境变量的方式来配置这些选项，如：

```bash
SELENIUM_BROWSER=firefox:46:MAC
```

让我们来创建一个新的测试验证一下。在你的 selenium 测试工程目录下，新建一个文件 `quick_test.js`, 将下面代码赋值进去：

```js
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
```

### 获取测试的 document

通过刚创建的驱动实例的 `get()` 方法，加载你需要测试的网页：

```js
driver.get('http://www.google.com');
```

> **备注：** 可以查看 [WebDriver class reference](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html) 了解这一部分提到内容的详情。

你可以使用包含`file://` 的 URL 来指向需要测试的本地文件：

```js
driver.get('file:///Users/chrismills/git/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html');
```

或

```js
driver.get('http://localhost:8888/fake-div-buttons.html');
```

使用一个远程的服务器地址代码会更灵活 — 当你启用远程服务器运行测试时，如果企图使用本地路径，代码会中断。

现在添加下面代码到`quick_test.js` 的最后：

```js
driver.get('http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html');
```

### 同 document 交互

得到测试的 document 后，我们就需要同它进行交互操作了，比如获取特定的元素对它进行某种测试。WebDriver 提供了[通过多种方法选择 UI 元素](http://www.seleniumhq.org/docs/03_webdriver.jsp#locating-ui-elements-webelements)，比如通过 ID, class, element name 等等。具体的选择通过 `findElement()` 方法完成，只需要将选择的元素作为参数传给它即可。举例来说，通过 ID 选择一个元素：

```js
var element = driver.findElement(By.id('myElementId'));
```

通过 CSS 查找一个元素的最常用方法是使用 By.css 方法，它可以通过 CSS 选择器的方式来选择元素。把下面代码敲到 `quick_test.js` 的最后面：

```js
var button = driver.findElement(By.css('button:nth-of-type(1)'));
```

### 测试 element

同 web documents 和 elements 交互的方式很多。在 WebDriver 的文档中有很多常用的例子，你可以从[获取文本值](http://www.seleniumhq.org/docs/03_webdriver.jsp#getting-text-values)开始。

比如获取 button 上的文本，可以这样操作：

```js
button.getText().then(function(text) {
  console.log('Button text is \'' + text + '\'');
});
```

把这段代码也添加到 `quick_test.js` 中。

在你的工程目录下，运行测试：

```bash
node quick_test.js
```

你可以看到 button 的文本标签打印到控制台。

现在进一步尝试一下。将上面输入的代码删除，然后添加下面的这行代码：

```js
button.click();
```

重新运行测试；button 被点击，你会看到 alert() 框弹出来，这样就知道 button 是正常工作的。

你还可以与弹出框进行交互。将下面代码添加到代码最后，再运行一下测试：

```js
var alert = driver.switchTo().alert();

alert.getText().then(function(text) {
  console.log('Alert text is \'' + text + '\'');
});

alert.accept();
```

接下来，我们试一下在表单的一个元素中输入文本。添加如下代码并运行测试：

```js
var input = driver.findElement(By.id('input1'));
input.sendKeys('Filling in my form');
```

你可以提交一些使用常规`webdriver.Key`属性不能代表的按键操作。举个例子，下面我们使用指令在提交前将 tab 从 input 移走：

```js
driver.sleep(1000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});
```

### 等待操作完成

有时候，在进行下一步处理之前我们需要 WebDriver 等待一些操作完成。比如装载一个新的页面，在与页面元素交互之前，需要等待 DOM 完成加载，否则测试有可能会失败。

例如在 `google_test.js` 中，有这样一段代码块：

```js
driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'webdriver - Google Search') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  });
});
```

`sleep()` 方法的参数指明需要等待的毫秒时间 — 然后在时间完成时，调用`then()` 内的代码块。在这里例子中，我们通过`getTitle()`方法获得当前页面的 title，然后根据 title 的值返回成功或失败的消息。

添加一个 `sleep()` 方法到我们的 `quick_test.js` 中 — 将最后的代码修改成如下代码块：

```js
driver.sleep(2000).then(function() {
  input.sendKeys('Filling in my form');
  input.getAttribute("value").then(function(value) {
    if(value !== '') {
      console.log('Form input editable');
    }
  });
});
```

WebDriver 等待 2 秒然后填充表单的文本框。接下来我们使用`getAttribute()`获取它的`value`属性值，并对它进行测试（如是否为空），最后将测试结果打印出来。

> **备注：** 还有一个方法叫 [`wait()`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html#wait), 它是在一定的时间内对某个条件进行反复测试，然后再继续执行代码，它也使用了 [util 库](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html)，其中定义了使用`wait()` 的常见条件。

### 使用后关闭驱动

完成一次测试后，需要关闭所有打开的驱动实例，确保你的机器上不会出现一堆泛滥的浏览器实例。只需要调用驱动实例的 `quit()` 方法即可。现在将下面这行代码添加到你的 `quick_test.js` 最后：

```js
driver.quit();
```

运行测试文件，这次你会看到在测试执行完毕后浏览器被关掉了。这很有用，如果你不希望电脑被一堆浏览器实例搞挂。

## 测试最佳实践

有很多编写最佳测试的实践方法，你可以参考[测试设计考虑](http://www.seleniumhq.org/docs/06_test_design_considerations.jsp)来了解一些背景。总的来说，测试应该遵循如下几点：

1. 使用好的定位策略：当你同 document 交互时，确保你使用的定位器和页面对象是不变的 — 如对元素进行测试，确保这个元素有固定的 ID 或页面位置，这样可以通过 CSS 选择器定位到它，不至于在下一个迭代就发生变化。尽可能让你的测试稳健，而不是有一点改动就会 break。
2. 写原子测试：一个测试只测一件事，这样有利于跟踪哪一个测试文件执行的是哪种测试。举例来说，前面的`google_test.js` 就只测试了一个简单的用例 — 页面的搜索结果标题是否正确。我们可以给它改一个名字，这样当我们添加更多的测试文件时它的作用会更直观，比如改为 `results_page_title_set_correctly.js` 。
3. 写独立的测试：每一个测试只需要自己执行，不需要依赖其它的测试。

除此之外，我们还要提一下测试结果/测试报告 — 在前面的例子中，我们只是简单的把测试结果通过 `console.log()` 语句打印出来，这个完全只在 JavaScript 中完成，你可以使用任何你想要的测试运行和报告系统，如[Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/)/或者其它的组合。

1. 举个例子，将 [`mocha_test.js`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/selenium/mocha_test.js) 拷贝到你的工程目录下。把它放到一个叫做 `test`的子文件夹内，这个例子使用了一长串的 promise 来执行测试的所有步骤 — WebDriver 使用这些基于 promise 的方法保证正常工作。
2. 执行下面的命令在你的工程目录下安装 mocha 测试工具：

    ```bash
    npm install --save-dev mocha
    ```

3. 然后通过下面的命令运行测试（所有你放到 test 目录下的测试）:

    ```bash
    mocha --no-timeouts
    ```

4. 使用`--no-timeouts` 参数确保测试不会因 Mocha 的 3 秒超时时限而中途失败退出。

> **备注：** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) 中包含了一些关于如何设置不同测试/断言工具组合的有用示例。

## 运行远程测试

在远端服务器上运行测试并不比在本地执行测试要困难多少，只需要在创建驱动实例的时候多配置几个特征参数，如测试的浏览器类型、服务器地址和用户权限（如果需要）就可以。

### BrowserStack

在 BrowserStack 进行 Selenium 远程测试很简单，参考下面的代码示例：

1. 在你的工程目录下，新建一个文件`bstack_google_test.js`.
2. 复制下面内容：

    ```js
    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

    // Input capabilities
    var capabilities = {
       'browserName' : 'Firefox',
       'browser_version' : '56.0 beta',
       'os' : 'OS X',
       'os_version' : 'Sierra',
       'resolution' : '1280x1024',
       'browserstack.user' : 'YOUR-USER-NAME',
       'browserstack.key' : 'YOUR-ACCESS-KEY',
       'browserstack.debug' : 'true',
       'build' : 'First build'
    };

    var driver = new webdriver.Builder().
      usingServer('http://hub-cloud.browserstack.com/wd/hub').
      withCapabilities(capabilities).
      build();

    driver.get('http://www.google.com');
    driver.findElement(By.name('q')).sendKeys('webdriver');

    driver.sleep(1000).then(function() {
      driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
    });

    driver.findElement(By.name('btnK')).click();

    driver.sleep(2000).then(function() {
      driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
          console.log('Test passed');
        } else {
          console.log('Test failed');
        }
      });
    });

    driver.quit();
    ```

3. 在 [BrowserStack automation dashboard](https://www.browserstack.com/automate), 获取你的用户名和 Key (查看 _Username 和 Access Keys_)，替换代码中 `YOUR-USER-NAME` 和`YOUR-ACCESS-KEY` 的对应值。(确保它们依然安全).
4. 执行下面命令：

    ```bash
    node bstack_google_test
    ```

    测试被发送给 BrowserStackces, 测试结果会返回到你的控制台。这体现了包含报告机制的重要性！

5. 现在回到 [BrowserStack automation dashboard](https://www.browserstack.com/automate) 页面，你会看到测试列出来的结果：
    ![](bstack_automated_results.png)

点击测试链接，会打开一个屏幕播放记录了测试的视频，和在测试过程中相关的 log 详情。

> **备注：** Browserstack 自动化仪表盘的 Resources 菜单选项上 提供了许多运行自动化测试的有用信息。查看 [关于 Node JS 编写自动化测试的文档](https://www.browserstack.com/automate/node) 获取相关信息。研究一下使用 BrowserStack 可以帮你做到哪些事情。

> **备注：** 如果你不想自己写测试用例，可以使用 docs 中嵌入的生成器，查看 [在手机浏览器上运行测试](https://www.browserstack.com/automate/node#run-tests-on-mobile)和[在桌面浏览器上运行测试](https://www.browserstack.com/automate/node#setting-os-and-browser).

#### 编程填充 BrowserStack 的测试详情

使用 BrowserStack REST API 和其它功能可以给测试添加更多详情，如测试是否通过，为什么通过，测试属于工程的哪个部分等，BrowserStack 默认并没有这些细节！

让我们来更新一下 `bstack_google_test.js` 示例，看看它们是怎样运作的：

1. 首先，导入 node 需要的模块，用来发送 requests 给 REST API.在代码的顶端添加如下语句：

    ```js
    var request = require("request");
    ```

2. 现在更新一下 `capabilities` 对象，添加工程名 — 在右大括号前添加下面代码，记得要在上一行末增加一个逗号 (在 BrowserStack 自动化仪表盘上，你可以修改 build 和 project 名称来组织不同窗口下的测试):

    ```js
    'project' : 'Google test 2'
    ```

3. 接下来获取当前会话的 `sessionId` , 就知道往哪儿发送 request ( 后面你会看到，ID 包含在 request 的 URL 中). 将下面代码添加到创建 `driver` 对象 (`var driver ...`) 的代码块下面：

    ```js
    var sessionId;

    driver.session_.then(function(sessionData) {
        sessionId = sessionData.id_;
    });
    ```

4. 最后，修改下面 `driver.sleep(2000)` ... 的代码，添加 REST API 调用 (同样，使用你的真实用户名和 key 替换 `YOUR-USER-NAME` 和`YOUR-ACCESS-KEY` 的值):

    ```js
    driver.sleep(2000).then(function() {
      driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
          console.log('Test passed');
          request({uri: "https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/" + sessionId + ".json", method:"PUT", form:{"status":"passed","reason":"Google results showed correct title"}});
        } else {
          console.log('Test failed');
          request({uri: "https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/" + sessionId + ".json", method:"PUT", form:{"status":"failed","reason":"Google results showed wrong title"}});
        }
      });
    });
    ```

代码很直观 — 测试一完成，就会发送一个 API 调用到 BrowserStack 来更新测试状态是通过还是完成，并且给出相关的原因。

现在回到 [BrowserStack 自动化仪表盘](https://www.browserstack.com/automate) 页面，你会看到测试会话如之前一样正常运行，并且增加了更新的数据：

![](bstack_custom_results.png)

### Sauce Labs

在 Sauce Labs 远程运行 Selenium 测试与在 BrowserStack 一样简单，尽管它们有一些语法的差异。代码示例如下：

1. 在你的工程目录下，新建一个文件 `sauce_google_test.js`.
2. 复制下面内容：

    ```js
    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until,
        username = "YOUR-USER-NAME",
        accessKey = "YOUR-ACCESS-KEY";

    var driver = new webdriver.Builder()
        .withCapabilities({
          'browserName': 'chrome',
          'platform': 'Windows XP',
          'version': '43.0',
          'username': username,
          'accessKey': accessKey
        })
        .usingServer("https://" + username + ":" + accessKey +
              "@ondemand.saucelabs.com:443/wd/hub")
        .build();

    driver.get('http://www.google.com');

    driver.findElement(By.name('q')).sendKeys('webdriver');

    driver.sleep(1000).then(function() {
      driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
    });

    driver.findElement(By.name('btnK')).click();

    driver.sleep(2000).then(function() {
      driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
          console.log('Test passed');
        } else {
          console.log('Test failed');
        }
      });
    });

    driver.quit();
    ```

3. 从你的 [Sauce Labs 用户设置](https://saucelabs.com/beta/user-settings), 获取你的用户名和 key. 并替换代码中对于 `YOUR-USER-NAME` 和`YOUR-ACCESS-KEY` 的值 (确保它们依然安全).
4. 执行如下命令运行测试：

    ```bash
    node sauce_google_test
    ```

    测试会被发送到，并返回相应的测试结果到你的控制台。这体现了包含报告机制的重要性！

5. 现在访问你的 [Sauce Labs 自动化测试仪表盘](https://saucelabs.com/beta/dashboard/tests) 页面，会看到列出的测试; 同样你也可以看到视频、截屏和其他类似的数据。
    ![](sauce_labs_automated_test.png)

> **备注：** Sauce Labs' [Platform Configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator/#/) is a useful tool for generating capability objects to feed to your driver instances, based on what browser/OS you want to test on.

> **备注：** 你可以查看 [使用 Selenium 进行 Web 自动化测试](https://wiki.saucelabs.com/display/DOCS/Getting+Started+with+Selenium+for+Automated+Website+Testing), 和 [实时 Selenium Node.js 测试](https://wiki.saucelabs.com/display/DOCS/Instant+Selenium+Node.js+Tests)获取更多关于 Sauce Labs 和 Selenium 测试的有用信息。

#### 编程填充 Sauce Labs 的测试详情

使用 Sauce Labs API 可以给测试添加更多详情，如测试是否通过，测试名称等等，Sauce Labs 默认并没有这些细节！

示例如下：

1. 安装 Node Sauce Labs 套件 (如果你之前没有运行过):

    ```bash
    npm install saucelabs --save-dev
    ```

2. Require saucelabs — 在 `sauce_google_test.js` 文件顶端，就在之前的变量声明下面添加如下代码：

    ```js
    var SauceLabs = require('saucelabs');
    ```

3. 接着添加如下代码，创建一个新的 SauceLabs 实例：

    ```js
    var saucelabs = new SauceLabs({
        username : "YOUR-USER-NAME",
        password : "YOUR-ACCESS-KEY"
    });
    ```

    同样，用真实的用户名和 key 来替换`YOUR-USER-NAME` 和 `YOUR-ACCESS-KEY` 的值 (注意 saucelabs 的 npm 包使用的是 `password`, 而不是`accessKey`). Since you are using these twice now, you may want to create a couple of helper variables to store them in.

4. 在 `driver` 变量定义的下方 (就在 `build()` 行后面), 添加下面代码块 — 获取正确的驱动 `sessionID` 来将数据写入进程 (在后面的代码中操作):

    ```js
    driver.getSession().then(function (sessionid){
          driver.sessionID = sessionid.id_;
    });
    ```

5. 最后，将代码末尾的 replace the `driver.sleep(2000)` ... 替换如下：

    ```js
    driver.sleep(2000).then(function() {
      driver.getTitle().then(function(title) {
        if(title === 'webdriver - Google Search') {
          console.log('Test passed');
          var testPassed = true;
        } else {
          console.log('Test failed');
          var testPassed = false;
        }

        saucelabs.updateJob(driver.sessionID, {
          name: 'Google search results page title test',
          passed: testPassed
        });
      });
    });
    ```

这里，我们根据测试结果是通过或失败，将 `testPassed` 变量设置为`true` 或 `false` , 然后使用 `saucelabs.updateJob()` 方法来更新详情。

回到 [Sauce Labs 自动化测试仪表盘](https://saucelabs.com/beta/dashboard/tests) 页面，你会看到新的进程更新了信息：

![](sauce_labs_updated_job_info.png)

### 您自己的远程服务器

如果你不想使用 Sauce Labs 或 BrowserStack 之类的服务，你也可以设置自己的远程测试服务器。具体操作如下：

1. Selenium 的远端服务器要求运行 Java，从 [Java SE 下载页面](http://www.oracle.com/technetwork/java/javase/downloads/index.html)下载适合你平台的最新 JDK 并安装。
2. 接着，下载最新的 [Selenium 单机服务器](http://selenium-release.storage.googleapis.com/index.html) — 它作为你的脚本和浏览器驱动之间的一个代理。选择最新的稳定版本 (比如不要选一个 beta 版本), 从列表中选择以 "selenium-server-standalone"开头的文件。下载完成后，放到一个靠谱的地方，比如 home 目录下。如果你还没有将位置添加到 `PATH`, 现在就需要添加了 (查看 "在 Node 中创建 Selenium"章节).
3. 在作为服务器的电脑终端上执行如下代码，安装单机版服务器

    ```bash
    java -jar selenium-server-standalone-3.0.0.jar
    ```

    (修改 `.jar` 文件名为你获取的文件名称）

4. 服务会运行在 [`http://localhost:4444/wd/hub`](http://localhost:4444/wd/hub) — 你可以去试试看是什么效果。

现在服务器运行起来了，让我们在 selenium 服务器上来创建一个 demo 测试。

1. 复制 `google_test.js` 文件，改名为 `google_test_remote.js`; 放到工程目录下。
2. 将第二段代码 ( `var driver =` 开头的代码段) 修改如下

    ```js
    var driver = new webdriver.Builder()
        .forBrowser('firefox')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
    ```

3. 运行测试，你会看到它如期执行 ; 只不过这次是在服务器端：

    ```bash
    node google_test_remote.js
    ```

是不是很酷。我们是在本地测试的，但你可以任何一台服务器上使用相关的浏览器驱动进行测试，使用相应的 URL 将你的脚本和服务器连接起来就可以了。

## 将 selenium 和 CI 工具集成

另外，将 Selenium 同 Sauce Labs 之类的其它工具集成到持续集成（CI）工具中是很有用的，这意味着你可以通过 CI 工具来运行测试，只有测试通过才允许提交代码的修改。

在这里不对这个话题进行深入探讨，但是我们建议你从 Travis CI 开始 — 这大概是最容易入门的 CI 工具了，它与 GitHub 和 Node 等 web 工具都有很好的集成。

作为入门，可以查看一些例子：

- [Travis CI for complete beginners](https://docs.travis-ci.com/user/for-beginners)
- [Building a Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (with Travis)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

## 总结

This module should have proven fun, and should have given you enough of an insight into writing and running automated tests for you to get going with writing your own automated tests.

{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
