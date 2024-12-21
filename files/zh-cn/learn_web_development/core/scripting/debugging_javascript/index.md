---
title: 处理常见的 JavaScript 问题
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
original_slug: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
l10n:
  sourceCommit: e8d495591fefeb3c0c484b989cc155b84b50bb57
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

现在，我们将探讨常见的跨浏览器 JavaScript 问题以及如何解决它们。这包括使用浏览器开发者工具来跟踪和修复问题，使用 polyfill 和库来解决问题，在较旧的浏览器中使用现代 JavaScript 特性等信息。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟练使用 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言，了解<a href="/zh-CN/docs/Learn_web_development/Extensions/Testing/Introduction"
          >跨浏览器测试的核心概念</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        可以分析一些常见的 JavaScript 跨浏览器问题，使用合适的工具和技术修复它们。
      </td>
    </tr>
  </tbody>
</table>

## JavaScript 的问题

历史上，JavaScript 一直困扰于跨浏览器兼容性问题——在 1990 年代，当时主要的浏览器选择（Internet Explorer 和 Netscape）以不同的语言风格实现了脚本编程（Netscape 有 JavaScript，IE 有 JScript，还提供了 VBScript），虽然 JavaScript 和 JScript 在某种程度上是兼容的（都基于 {{glossary("ECMAScript")}} 规范），但它们通常是以互相冲突、不兼容的方式实现的，给开发人员带来了许多噩梦。

这种不兼容性问题一直持续到 2000 年代初期，因为旧浏览器仍在使用，仍需要支持。例如，创建 {{domxref("XMLHttpRequest")}} 对象的代码必须特别处理 Internet Explorer 6：

```js
if (window.XMLHttpRequest) {
  // Mozilla、Safari、IE7+ ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 6 和更老的浏览器
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

这也是像 [jQuery](https://jquery.com/) 这样的库出现的主要原因之一——它们可以抽象掉浏览器实现的差异，这样开发人员就可以只使用例如 [`jQuery.ajax()`](https://api.jquery.com/jquery.ajax/) 这样的，背后会处理这些差异的函数。

自那时以来，情况已经大大改善；现代浏览器可以很好地支持“经典 JavaScript 特性”，随着对旧浏览器的支持需求减少，使用这种代码的需求也减少了（但请注意它们并没有完全消失）。

如今，大多数跨浏览器 JavaScript 问题出现在：

- 当低劣的浏览器嗅探代码、特性检测代码和供应商前缀的使用阻止浏览器运行它们本来可以使用的代码时。
- 当开发人员在代码中使用新的/新出现的 JavaScript 特性、现代 Web API 等，然而这些特性在旧浏览器中不起作用时。

我们将在下面探讨所有这些问题及更多问题。

## 修复一般的 JavaScript 问题

正如我们在关于 HTML/CSS 的[前一篇文章](/zh-CN/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#首先：解决一般问题)中所说，你应该先确保你的代码能够正常工作，然后再去集中解决跨浏览器问题。如果你还不熟悉[如何查找 JavaScript 代码的错误](/zh-CN/docs/Learn_web_development/Core/Scripting/What_went_wrong)的基本内容，你应该在继续学习之前学习这篇文章。你要注意一些常见的 JavaScript 问题，比如说：

- 基本的语法和逻辑问题（再次重申，请参阅[如何查找 JavaScript 代码的错误](/zh-CN/docs/Learn_web_development/Core/Scripting/What_went_wrong)）。
- 确保变量等定义在正确的作用域中，并且你不会遇到在不同地方声明的内容之间的冲突（见[函数作用域和冲突](/zh-CN/docs/Learn_web_development/Core/Scripting/Functions#函数作用域和冲突)）。
- 对 [this](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 的困惑，表现在它适用于什么作用域，它的值是否是你所期望的。你可以阅读[“this”的含义](/zh-CN/docs/Learn_web_development/Core/Scripting/Object_basics#“this”的含义)，它做了一点浅显的介绍；你还应该研究像[这样](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143)的例子，它显示了一个典型的模式，即把 `this` 作用域保存到一个单独的变量中，然后在嵌套函数中使用这个变量，这样你就可以确定能够把功能应用到正确的 `this` 作用域。
- 在使用全局变量进行迭代的循环中不正确地使用函数（更普遍的是“弄错作用域”）。

> [!CALLOUT]
> 例如，在 [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) 中（见[源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)），我们使用一个用 `var` 定义的变量循环了 10 次，每次都创建一个段落并给它添加 [onclick](/zh-CN/docs/Web/API/Element/click_event) 事件处理器。当点击时，我们希望每个段落都能显示一个包含其编号（创建时的 `i` 值）的警告信息。但是，它们都报告 `i` 为 11，因为 `for` 循环在调用嵌套函数之前就完成了所有的迭代。
>
> 最简单的解决方案是用 `let` 而不是 `var` 来声明迭代变量，这样与函数相关的 `i` 的值对每个迭代都是唯一的。请参阅 [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html)（也可以参阅[源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)）以查看能正常工作的版本。

- 确保在你试图使用[异步操作](/zh-CN/docs/Learn_web_development/Extensions/Async_JS)返回的值之前，其已经完成。这通常需要了解如何使用 _promise_：适当地使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 或在 promise 的 {{jsxref("Promise.then()", "then()")}} 处理器中运行代码来处理异步调用的结果。有关此主题的介绍，请参见[如何使用 promise](/zh-CN/docs/Learn_web_development/Extensions/Async_JS/Promises)。

> **备注：** [JavaScript 代码中的 Bug：JavaScript 开发人员的 10 个最常见错误](https://www.toptal.com/javascript/10-most-common-javascript-mistakes)对这些常见错误及更多内容有很好的讨论。

### Linter

就像 [HTML 和 CSS](/zh-CN/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#linter) 所说的一样，使用 linter 可以确保编写出质量更高，错误更少的 JavaScript 代码，它可以指出错误，也可以标记出关于不良做法的警告等，并且可以自定义为更严格或更宽松的错误/警告报告。我们推荐的 JavaScript/ECMAScript linter 包括 [JSHint](https://jshint.com/) 和 [ESLint](https://eslint.org/)；它们能以多种方式使用，其中一些我们将在下面详细介绍。

#### 在线检查器

[JSHint 主页](https://jshint.com/)提供了一个在线 linter，它可以让你在左侧输入 JavaScript 代码，并在右侧提供包含指标、警告和错误的输出。

![JSHint 屏幕截图。左边面板是一个有代码高亮并且显示行数的代码编辑器。右边面板为关于函数和警告的数量、大小和构成的指标。警告包括问题和所在行号。](jshint-online.png)

#### 代码编辑器插件

每次把代码复制并粘贴到网页上以检查其有效性并不方便，你真正需要的是能融入你的标准工作流程的 linter，而且麻烦最少。许多代码编辑器都有 linter 插件，例如，请参见 [JSHint 安装页面](https://jshint.com/install/)的“文本编辑器和 IDE 的插件”部分。

#### 其他方式

还有其他的方法来使用这种 linter；你可以在 [JSHint](https://jshint.com/install/) 和 [ESLint](https://eslint.org/docs/user-guide/getting-started) 的安装页面上读到这些方法。

值得一提的是命令行的使用——你可以使用 npm（Node 包管理器——你必须先安装 [NodeJS](https://nodejs.org/zh-cn/)）将这些工具作为命令行工具来安装（可通过 CLI——命令行界面）。例如，下面的命令安装了 JSHint：

```bash
npm install -g jshint
```

然后，你可以用这些工具处理你想 lint 的 JavaScript 文件，比如说：

![命令行输入了 jshint filename.js。响应是一个有行号的列表和对发现的错误的描述。](js-hint-commandline.png)

你也可以将这些工具与任务运行器/构建工具（如 [Gulp](https://gulpjs.com/) 或 [Webpack](https://webpack.github.io/)）一起使用，以便在开发过程中自动对你的 JavaScript 进行 lint。（见后面文章中的[使用任务运行器来自动测试工具](/zh-CN/docs/Learn_web_development/Extensions/Testing/Automated_testing#使用任务运行器作为自动化测试工具)。）关于 ESLint 选项，请参见 [ESLint 集成](https://eslint.org/docs/user-guide/integrations)；Grunt 开箱即支持 JSHint，并且还有其他可用的集成，例如 [Webpack 的 JSHint 加载器](https://github.com/webpack-contrib/jshint-loader)。

> [!NOTE]
> 尽管 ESLint 的安装和配置过程比起 JSHint 更繁琐，但是它也更强大。

### 浏览器开发者工具

浏览器开发工具有许多有用的特性，可以帮助调试 JavaScript。首先，JavaScript 控制台会报告代码中的错误。

下载示例 [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken) 到本地（也可以查看[源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-broken)）。

如果查看控制台，你会看到一条错误消息。确切的语句会因浏览器而异，但大致会是：“Uncaught TypeError: heroes is not iterable”（未捕获的类型错误：heroes 不可迭代），并且引用的行号是 25。如果我们查看源代码，相关的代码部分如下：

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

所以当我们尝试使用 `jsonObj`（正如你所料，它应该是一个 [JSON 对象](/zh-CN/docs/Learn_web_development/Core/Scripting/JSON)）时，代码就会崩溃。这个 JSON 对象应该通过以下 {{domxref("fetch()")}} 调用从外部的 `.json` 文件中获取：

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

但是它失败了。

#### Console API

你可能已经知道这段代码有什么问题，但让我们更深入地探讨一下，以了解你该如何调查这个问题。首先，有一个 [Console](/zh-CN/docs/Web/API/console) API，借助它 JavaScript 代码可以与浏览器的 JavaScript 控制台进行交互。它有许多可用的特性，但最常用的是 [`console.log()`](/zh-CN/docs/Web/API/console/log_static)，它可以将自定义消息打印到控制台。

尝试添加一个 `console.log()` 调用来记录 `fetch()` 的返回值，像这样：

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`返回值：${response}`);
const superHeroes = response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

在浏览器中刷新页面。这次，在错误消息之前，你会看到一条新的消息记录在控制台上：

```plain
Response value: [object Promise]
```

`console.log()` 的输出显示，`fetch()` 的返回值不是 JSON 数据，而是一个 {{jsxref("Promise")}}。`fetch()` 函数是异步的：它返回一个 `Promise`，只有在实际从网络接收到响应时，这个 `Promise` 才会兑现。在我们使用响应之前，我们必须等待 `Promise` 被兑现。

我们可以通过将使用响应的代码放在返回的 `Promise` 的 {{jsxref("Promise.prototype.then()", "then()")}} 方法中来实现这一点，像这样：

```js
const response = fetch(requestURL);
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

总之，每当有东西不工作，并且某个值在代码的某个点上不是它应该是的样子时，你都可以使用 `console.log()` 来打印出它，了解发生了什么。

#### 使用 JavaScript 调试器

不幸的是，我们仍然有同样的错误，问题并没有消失。现在让我们使用浏览器开发工具的一个更复杂的特性来调查一下这个问题，它在 Firefox 中被称为 [JavaScript 调试器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)。

> [!NOTE]
> 其他浏览器中也有类似的工具；Chrome 中的[来源面板](https://developer.chrome.google.cn/docs/devtools#sources)、Safari 中的调试器（见 [Safari Web 开发工具](https://developer.apple.com/safari/tools/)）等。

在 Firefox 中，调试器标签页大致如图所示：

![Firefox 调试器](debugger-tab.png)

- 在左边，你可以选择你要调试的脚本（在本例中我们只有一个）。
- 中间的面板显示了所选脚本中的代码。
- 右边的面板显示了与当前环境有关的有用细节——_断点_、*调用栈*和当前活动的*作用域*。

这类工具的主要特点是能够为代码添加断点，这些是代码执行停止的点，在这一点上，你可以检查环境的当前状态，了解正在发生什么。

让我们开始工作吧。现在错误是在第 26 行抛出的。在中间的面板上点击第 26 行，给它添加一个断点（你会看到一个蓝色的箭头出现在它的上方）。现在刷新页面（Cmd/Ctrl + R），浏览器将在第 26 行暂停执行代码。在这一点上，右侧将更新显示一些非常有用的信息。

![含有断点的 Firefox 调试器](breakpoint.png)

- 在*断点*下，你会看到你设置的断点的详细信息。
- 在*调用栈*下，你会看到几个条目——这基本上是导致当前函数被调用的一系列函数的列表。在顶部，是 `showHeroes()` 函数（我们当前正在查看的函数），第二个是 `onload`，它存储了包含对 `showHeroes()` 的调用的事件处理函数。
- 在*作用域*下，你会看到我们正在查看的函数的当前活动作用域。我们只有三个——`showHeroes`、`block` 和 `Window`（全局作用域）。可以展开每个作用域以查看在执行代码被停止时作用域内部变量的值。

这里面有一些非常有用的信息。

1. 展开 `showHeroes` 作用域，你可以从中看到 `heroes` 变量是 `undefined`，表示对 `jsonObj` 的 `members` 属性的访问（函数的第一行）没有成功。
2. 你也可以看到 `jsonObj` 变量存储的是一个 {{domxref("Response")}} 对象，而不是一个 JSON 对象。

`showHeroes()` 的参数是 `fetch()` promise 兑现得到的值。所以这个 promise 不是 JSON 格式的：它是一个 `Response` 对象。还需要额外的步骤来将响应内容转换为 JSON 对象。

我们希望你自己尝试修复这个问题。作为起点，请查看 {{domxref("Response")}} 对象的文档。如果遇到困难，可以在 <https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> 找到修复后的源代码。

> [!NOTE]
> 调试器标签页还有许多其他有用的特性，我们没有在这里讨论，比如条件断点和观察表达式。更多信息，请参见[调试器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)页面。

### 性能问题

随着应用程序变得越来越复杂，你可能会开始使用更多的 JavaScript。这时，你可能会遇到性能问题（尤其是在较慢的设备上）。性能优化是一个广泛的话题，我们无法在此详尽讨论，但以下是一些快速优化建议：

- 为了避免加载不必要的 JavaScript，建议使用 [Browserify](https://browserify.org/) 等工具将脚本打包成单个文件。总体而言，减少 HTTP 请求的数量可以很好地提升性能。
- 在将文件部署到生产服务器之前，应通过极简化（minification）减小文件体积。极简化会将所有代码合并成一行，从而显著减少文件大小。虽然简化后的代码可读性较差，但你不需要直接阅读它！推荐使用 [Uglify](https://github.com/mishoo/UglifyJS) 等极简化工具（还有在线版本，请访问 [JSCompress.com](https://jscompress.com/)）。
- 使用 API 时，请确保在不需要时关闭 API 特性；因为某些 API 调用在处理能力方面可能非常耗费资源。例如，在显示视频流时，如果视频不在视线范围内，请确保关闭它。在使用重复调用的地理位置 API 跟踪设备位置时，如果用户不再需要，也应及时关闭。
- 动画可能会对性能造成重大影响。尽管许多 JavaScript 库提供了由 JavaScript 控制的动画功能，但使用浏览器原生特性（如 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)或新兴的 [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)）执行动画通常更高效。建议阅读 Brian Birtles 的文章[使用 Element.animate 制作不重要的动画](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/)，了解动画成本高昂的原因、提升动画性能的技巧，以及 Web 动画 API 的相关信息。

> [!NOTE]
> 阿迪—奥斯曼尼的[编写快速、内存效率高的 JavaScript 代码](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/)包含了大量细节和一些有助于提高 JavaScript 性能的出色建议。

## 跨浏览器 JavaScript 问题

在本节中，我们将研究一些比较常见的跨浏览器的 JavaScript 问题。我们将把它分为：

- 使用了现代核心 JavaScript 特性
- 使用了现代 Web API 特性
- 使用了糟糕的浏览器嗅探代码
- 性能问题

### 使用了现代 JavaScript/API 特性

在[之前的文章](/zh-CN/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#浏览器不支持新特性)中，我们描述了由于 HTML 和 CSS 的语言性质，处理 HTML 和 CSS 错误和不被识别特性的一些方法。然而，JavaScript 不像 HTML 和 CSS 那么宽容，如果 JavaScript 引擎遇到错误或不被识别的语法（例如在使用新的不受支持的 特性时），它通常会抛出错误。

有几种处理新特性支持的策略可以探索，让我们来探讨一下最常见的几种。

> [!NOTE]
> 这些策略并不是相互独立的——当然，你可以根据需要将它们结合使用。例如，你可以使用特性检测来确定是否支持某项特性；如果不支持，你可以运行代码来加载 polyfill 或库来处理缺乏支持的情况。

#### 特性检测

特性检测的核心理念在于，通过执行测试来确认当前浏览器是否支持某个 JavaScript 特性，进而有条件地执行代码。这样做可以确保无论浏览器是否支持该特性，都能提供一个可接受的用户体验。以[地理位置 API](/zh-CN/docs/Web/API/Geolocation_API) 为例——该 API 能够访问网络浏览器所在设备的位置数据，它主要通过全局 [Navigator](/zh-CN/docs/Web/API/Navigator) 对象的 `geolocation` 属性来使用。因此，你可以采用如下方法来检测浏览器是否支持地理位置特性：

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // 在地图上显示位置，可能会用到 Google Maps API
  });
} else {
  // 也许可以让用户选择静态地图
}
```

你也可以为 CSS 特性编写这样的测试，例如通过测试 _[element.style.property](/zh-CN/docs/Web/API/HTMLElement/style)_ 的存在（比如 `paragraph.style.transform !== undefined`）。如果你希望在支持某个 CSS 特性的情况下应用样式，可以直接使用 [@supports](/zh-CN/docs/Web/CSS/@supports) 规则（也称为特性查询）。例如，要检查浏览器是否支持 CSS 容器查询，可以这样做：

```css
@supports (container-type: inline-size) {
  /* 如果支持则使用容器查询 */
}
```

最后一点，不要将特性检测与**浏览器嗅探**（检测访问站点的特定浏览器）混淆——这是一种应该被全面反对的做法。有关更多详细信息，请参见后文的[不要嗅探浏览器](#不要嗅探浏览器)。

> [!NOTE]
> 特性检测将在本模块的专门文章中详细介绍。

#### 库

JavaScript 库本质上是一组第三方代码，你可以将其集成到你的网页中，它们提供了大量现成的功能，从而为你节省宝贵的时间。许多 JavaScript 库的诞生，可能源于其开发者编写了一系列常用的实用函数以便节省未来项目的开发时间，并决定将它们开源，因为这些功能对其他人来说也可能非常有用。

JavaScript 库往往有几个主要的种类（有些库包含其中的一个以上的目的）：

- 实用程序库：提供一组函数，使日常的任务更容易管理，不那么枯燥。例如，[jQuery](https://jquery.com/) 提供了自己的全功能选择器和 DOM 操作库，允许在 JavaScript 中进行 CSS 选择器类型的元素选择，并更容易建立 DOM。现在我们有了现代的特性，如 {{domxref("Document.querySelector()")}}、{{domxref("Document.querySelectorAll()")}}、{{domxref("Node")}} 方法，在各浏览器中可用，这就不那么重要了，但在旧的浏览器需要支持时，它仍然有用。
- 方便性库：让困难的事情更容易做。例如，直接使用 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 很复杂且有挑战性，而 [Three.js](https://threejs.org/) 库（和其他类似的库）是建立在 WebGL 之上的，为创建普通 3D 对象、照明、纹理等提供了更容易的 API。[Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 的使用也非常复杂，所以代码库已经开始出现，以使常见的 Service Worker 用例更容易实现（参见 [Service Worker 指导书](https://github.com/mdn/serviceworker-cookbook)，以获得一些有用的代码示例）。
- 效果库：这些库的设计是为了让你能够轻松地在你的网站上添加特殊效果。在“DHTML”是一个流行的流行语的时候，这是很有用的（当时实现一个效果需要很多复杂的 JavaScript），但现在的浏览器有很多内置的 CSS 特性和 API，可以更容易地实现效果。
- UI 库：提供实现复杂的 UI 特性的方法，没有 UI 库的话，这些特性的实现和跨浏览器的工作会很困难，例如 [Foundation](https://get.foundation/)、[Bootstrap](https://getbootstrap.com/) 和 [Material-UI](https://mui.com/)（后者是一套用于 React 框架的组件）。这些往往被用作整个网站布局的基础；仅仅为了一个 UI 特性而把它们放入其中往往是很困难的。
- 标准化库：给你一个简单的语法，让你轻松完成一个任务，而不必担心跨浏览器的差异。该库将在后台操作适当的 API，所以无论什么浏览器，该功能都可以使用（理论上）。例如， [LocalForage](https://github.com/localForage/localForage) 是一个用于客户端数据存储的库，它为存储和检索数据提供了一个简单的语法。在后台，它使用浏览器可用的最好的 API 来存储数据，无论是 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)、[Web Storage](/zh-CN/docs/Web/API/Web_Storage_API)，甚至是 Web SQL（现在已经废弃了，但在基于 Chromium 的浏览器安全上下文中仍然支持）。

在选择使用一个库时，要确保它能在你想支持的一系列浏览器中工作，并对你的实现进行彻底的测试。还要确保这个库是受欢迎的，得到良好的支持，并且不可能在下周就被淘汰。与其他开发者交谈，了解他们的建议，看看该库在 GitHub（或其他存放它的地方）上有多少活动和贡献者，等等。

库的基本用法往往包括下载库的文件（JavaScript，可能还有一些 CSS 或其他依赖项）并将其附加到你的页面上（例如通过 {{htmlelement("script")}} 元素），尽管这些库通常还有许多其他用法选择，例如将其作为 [Bower](https://bower.io/) 组件安装，或通过 [Webpack](https://webpack.github.io/) 模块捆绑器将其作为依赖项。你需要阅读这些库的单独安装页面以获得更多信息。

> [!NOTE]
> 你也会在 web 上遇到一些 JavaScript 框架，比如 [Ember](https://emberjs.com/) 和 [Angular](https://angularjs.org/)。库通常可用于解决个别问题并放入现有网站中，而框架则更倾向于开发复杂 web 应用的完整解决方案。

#### Polyfill

Polyfill 也由第三方的 JavaScript 文件组成，你可以把它们放到你的项目中，但它们与库不同。库倾向于加强现有的功能，使一些需求可以更容易实现，而 Polyfill 提供的是根本不存在的功能。Polyfill 完全使用 JavaScript 或其他技术来建立对浏览器不支持的特性的支持。例如，你可以使用 [es6-promise](https://github.com/stefanpenner/es6-promise) 这样的 polyfill 来使 promise 在没有原生支持的浏览器中也能工作。

让我们一起来完成一个练习——在这个示例中，我们将使用 Fetch polyfill 和 es6-promise polyfill。虽然现代浏览器已经完全支持 Fetch 和 Promise，但如果我们的目标浏览器不支持 Fetch，那么这种浏览器很可能也不支持 Promise，因为 Fetch 依赖于 Promise。

1. 为了开始工作，在一个新的目录中复制我们的 [fetch-polyfill.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill.html) 示例文件和[漂亮的鲜花图片](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/flowers.jpg)。我们将编写代码来获取花的图片并在页面中显示。
2. 接下来，在与 HTML 相同的目录中保存一份 [Fetch polyfill](https://raw.githubusercontent.com/github/fetch/master/fetch.js) 的副本。
3. 使用以下代码将 polyfill 脚本应用到页面上，将这些脚本放在现有的 {{htmlelement("script")}} 元素上方，这样当我们开始尝试使用 Fetch 时，它们就已经在页面上可用了（我们还从 CDN 加载一个 Promise polyfill，因为 IE11 支持 promise，这是 fetch 所需要的）：

   ```html
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
   <script src="fetch.js"></script>
   ```

4. 在原来的 {{htmlelement("script")}} 元素内添加下列代码：

   ```js
   const myImage = document.querySelector(".my-image");

   fetch("flowers.jpg").then((response) => {
     response.blob().then((myBlob) => {
       const objectURL = URL.createObjectURL(myBlob);
       myImage.src = objectURL;
     });
   });
   ```

5. 即使你在不支持 [Fetch](/zh-CN/docs/Web/API/Window/fetch) 的浏览器中加载它，你仍然能够看到花的图像——这不是很酷吗？
   ![一个 fetch 基本示例的标题，配一张紫色花朵的照片](fetch-image.jpg)

> [!NOTE]
> 你可以在 [fetch-polyfill-finished.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) 找到我们的完成版（也请看[源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html)）。

> [!NOTE]
> 在此重申，polyfill 有许多种方法可以利用——具体请查阅每个 polyfill 单独的文档。

你可能会问：“为什么我们要加载 polyfill 代码，即便在不需要的时候？”这是一个合理的疑问。随着网站变得更加复杂，开始引入更多的库和 polyfill，你可能会加载大量不必要的代码。这会影响网站性能，尤其是在性能较低的设备上。因此，只有在需要时才加载相应的文件是明智的。

要做到这一点，你需要在 JavaScript 代码中进行一些额外的配置。你需要进行特性检测，以确定浏览器是否支持你想要使用的特性：

```js
if (browserSupportsAllFeatures()) {
  main();
} else {
  loadScript("polyfills.js", main);
}

function main(err) {
  // 主要的应用代码
}
```

因此，我们首先执行一个条件判断，检查 `browserSupportsAllFeatures()` 函数是否返回 `true`。如果返回 `true`，我们就执行 `main()` 函数（该函数包含我们应用程序的全部代码）。`browserSupportsAllFeatures()` 函数的实现可能如下所示：

```js
function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}
```

在这段代码中，我们检测浏览器是否支持 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象和 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 函数。如果浏览器支持这两者，函数就会返回 `true`。如果函数返回 `false`，我们将执行条件语句的第二部分，调用名为 `loadScript()` 的函数来将 polyfill 加载到页面，然后执行 `main()` 函数。`loadScript()` 函数的实现可能是这样的：

```js
function loadScript(src, done) {
  const js = document.createElement("script");
  js.src = src;
  js.onload = () => {
    done();
  };
  js.onerror = () => {
    done(new Error(`Failed to load script ${src}`));
  };
  document.head.appendChild(js);
}
```

此函数创建一个新的 `<script>` 元素，并设置其 `src` 属性为我们在上述代码中调用时指定的路径（`'polyfills.js'`）。脚本加载完成后，会执行我们第二个参数指定的函数（`main()`）。如果在加载脚本时发生错误，该函数仍会被调用，但会传入一个自定义错误，这样如果出现问题，我们可以通过这个错误来进行调试。

请注意，`polyfills.js` 实际上是将我们正在使用的两个 polyfill 合并到一个文件中。虽然我们是手动完成这一过程的，但也有更智能的工具可以自动为你生成捆绑文件——例如 [Browserify](https://browserify.org/)（你可以参考 [Browserify 基础教程](https://www.sitepoint.com/getting-started-browserify/)来了解如何开始使用）。将多个 JavaScript 文件捆绑在一起是一个好方法，它通过减少所需进行的 HTTP 请求数量来提升网站性能。

你可以在 [fetch-polyfill-only-when-needed.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html) 查看这段代码的实际运行情况（也可查看[源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html)）。我们需要指出的是，这段代码的原创者是 Philip Walton。你可以阅读他的文章[只在需要时加载 Polyfill](https://philipwalton.com/articles/loading-polyfills-only-when-needed/)，了解更多关于原始代码的信息，以及围绕这个主题的许多有用讨论。

#### 转译 JavaScript

对于那些想要使用现代 JavaScript 特性的开发者来说，另一个选择是将采用 ECMAScript 6/ECMAScript 2015 特性的代码转换成能够在旧版浏览器上运行的版本。

> [!NOTE]
> 这个过程被称为“转译”。这并不是将代码编译到更低级别以便在计算机上运行（像 C 语言代码那样）；而是将代码转换为另一种同等抽象级别的语法，使其可以以类似的方式运行，尽管细节上有所不同（在这个例子中，是将一种 JavaScript 风格转换为另一种风格）。

[Babel.js](https://babeljs.io/) 是一种常见的转译器，但还有其他转译器。

### 不要嗅探浏览器

在历史上，开发人员曾使用*浏览器嗅探代码*来检测用户使用的浏览器，并为该浏览器提供适当的代码。

所有浏览器都有一个**用户代理**字符串，它标识了浏览器的身份（版本、名称、操作系统等）。许多开发人员实现的浏览器嗅探代码非常糟糕，而且没有进行维护。这导致支持的浏览器无法访问网站，即使它们可以轻松渲染网页。这种情况变得极其普遍，以至于浏览器开始在其用户代理字符串中隐藏真实身份（或声称它们都是浏览器），以规避嗅探代码。浏览器还实现了允许用户更改 JavaScript 查询得到的用户代理字符串的功能。这些都使浏览器嗅探变得更加容易出错，最终变得毫无意义。

Aaron Andersen 撰写的[浏览器用户代理字符串的历史](https://webaim.org/blog/user-agent-string-history/)中讲述了这段有用且有趣的浏览器探测历史。使用[特性检测](#特性检测)（以及 CSS @supports 进行 CSS 特性检测）来检测是否支持某个特性要可靠地多。这样，当新的浏览器版本出现时，你就不需要更改代码。

### 处理 JavaScript 前缀

在上一篇文章中，我们详细讨论了[处理 CSS 前缀](/zh-CN/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#处理_css_前缀)的内容。新的 JavaScript 实现有时也会使用前缀，但与 CSS 使用{{Glossary("kebab_case", "连字符")}}不同，JavaScript 采用{{Glossary("camel_case", "驼峰命名")}}。例如，如果一个新的 jshint API 对象名为 `Object`，不同的浏览器厂商会使用以下前缀：

- Mozilla 会使用 `mozObject`
- Chrome、Opera、Safari 会使用 `webkitObject`
- Microsoft 会使用 `msObject`

以下是一个例子，来自我们的 [violent-theremin 演示](https://mdn.github.io/webaudio-examples/violent-theremin/)（参见[源代码](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)），它结合使用了 [Canvas API](/zh-CN/docs/Web/API/Canvas_API) 和 [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)，创造了一个既有趣（又喧闹）的绘画工具：

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

关于 Web Audio API，在 Chrome/Opera 中使用该 API 的主要方式是通过带有 `webkit` 前缀的版本（尽管现在它们也支持无前缀版本）。一种简单的方法是为带前缀的对象创建一个新版本，并将其设置为等同于无前缀版本，或者是带有前缀的版本（具体取决于用户当前使用的浏览器支持哪一个）。

接下来，我们使用这个新对象来操作 API，而不是原始对象。在这个例子中，我们创建了一个修改版的 [AudioContext](/zh-CN/docs/Web/API/AudioContext) 构造函数，然后用它来创建新的音频上下文实例，用于我们的 Web Audio 编程。

这种模式几乎可以应用于所有带前缀的 JavaScript 特性。JavaScript 库/ployfill 也采用这种代码，以最大程度地屏蔽为开发者屏蔽浏览器之间的细节差异。

同样，前缀特性本不应在生产环境网站中使用——它们可能会在没有任何警告的情况下被更改或删除，从而导致跨浏览器兼容性问题。如果你仍然需要使用带前缀的特性，请确保你使用的是正确的特性。你可以在 MDN 的参考页面和 [caniuse.com](https://caniuse.com/) 等网站上查询哪些浏览器需要对不同的 JavaScript/API 特性使用前缀。如果你不确定，也可以通过在浏览器中进行测试来获取相关信息。

例如，尝试进入你的浏览器的开发者控制台，开始输入

```js
window.AudioContext;
```

如果你的浏览器支持这一特性，它将带有自动完成提示。

## 寻求帮助

在使用 JavaScript 的过程中，你还会遇到很多其他问题；最重要的是知道如何在网上找到答案。请参考 HTML 和 CSS 文章的[寻找帮助部分](/zh-CN/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS#寻找帮助)，了解我们的最佳建议。

## 总结

所以，这就是 JavaScript 的基本情况。听起来简单吗？可能并不完全如此，但希望这篇文章至少为你提供了一个开始的地方，以及一些关于如何解决你可能遇到的 JavaScript 相关问题的思路。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
