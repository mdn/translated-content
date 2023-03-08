---
title: JavaScript 技术概览
slug: Web/JavaScript/JavaScript_technologies_overview
---

{{JsSidebar("Introductory")}}

[HTML](/zh-CN/docs/Web/HTML) 定义网页的结构与内容，[CSS](/zh-CN/docs/Web/CSS) 定义其格式与样式，而 [JavaScript](/zh-CN/docs/Web/JavaScript) 则为网页增加可交互性，创作功能丰富的 Web 应用。

但是，如果从浏览器的范畴去理解“JavaScript”这个术语，它包含了截然不同的两个方面。一方面是 JavaScript 的核心语言（ECMAScript），另一方面是大量的 [Web API](/zh-CN/docs/Web/Reference/API)，包括 DOM（文档对象模型）。

## JavaScript 核心语言（ECMAScript）

JavaScript 的核心语言是 ECMAScript，是一门由 ECMA TC39 委员会标准化的编程语言。“ECMAScript”是语言标准的术语，但“ECMAScript”和“JavaScript”是可以互换使用的。

该核心语言同样可以被用在非浏览器环境之中，例如 [Node.js](https://nodejs.org)。

### 哪些内容被纳入 ECMAScript 范畴之中？

除却一些其他元素，ECMAScript 定义了：

- 语法（解析规则、关键词、流程控制、对象初始化，等等）
- 错误处理机制（{{jsxref("Statements/throw", "throw")}}、{{jsxref("Statements/try...catch", "try...catch")}}，以及创建用户自定义{{jsxref("Error", "错误", "", 1)}}类型的能力）
- 类型（布尔值、数字、字符串、函数、对象，等等）
- 基于原型的继承机制
- 内置对象和函数（{{jsxref("JSON")}}、{{jsxref("Math")}}、[Array](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 方法、{{jsxref("parseInt")}}、{{jsxref("decodeURI")}}，等等）
- [严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
- [模块系统](/zh-CN/docs/Web/JavaScript/Guide/Modules)
- 基本内存模型

### 标准化流程

ECMAScript 版本由每年的 ECMA 大会批准并作为标准发布。所有的进展都在 [Ecma TC39 GitHub 组织](https://github.com/tc39)上公开，该组织托管提案、官方规范文本和会议记录。

在 ECMAScript 第 6 版（称为 ES6）之前，规范是几年发布一次，通常用它们的主要版本号来指代（ES3、ES5 等）。在 ES6 之后，规范以发布年份命名（ES2017、ES2018 等）。ES6 是 ES2015 的代名词。_ESNext_ 是一个动态名称，指的是撰写本文时的下一个版本。ESNext 中的特性更准确地称为提案，因为根据定义，规范尚未最终确定。

目前委员会批准的 ECMA-262 的快照有 [PDF 版本](https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)和 [HTML 版本](https://262.ecma-international.org/13.0/)。ECMA-262 和 ECMA-402 正处于维护状态，仍在由规范编辑者更新；TC39 网站托管了最新版本的 [ECMA-262](https://tc39.es/ecma262/) 和 [ECMA-402](https://tc39.es/ecma402/)。

新的语言特性，包括新的语法和 API 的引入以及现有行为的修订，都以提案的形式进行讨论。每个提案都需要经过 [4 个阶段的过程](https://tc39.es/process-document/)，通常在第 3 或 第 4 阶段时，JavaScript 引擎会实现这些提案，以供公众使用。

有关 ECMAScript 历史的更多信息，请参阅[维基百科上的 ECMAScript 条目](https://zh.wikipedia.org/wiki/ECMAScript)。

## 国际化 API

由 ECMA TC39 进行标准化的 [ECMAScript 国际化 API 规范](https://402.ecma-international.org/1.0/)是在 ECMAScript 语言规范之上额外增加的。国际化 API 为 JavaScript 提供了国际化的规则排序（字符串比较）、数字格式化、日期时间格式化等功能，能够让应用选择语言，并根据实际需要选用功能。本标准在 2012 年 12 月审批通过，可以在 {{jsxref("Intl")}} 对象页面查看各个浏览器对其的实现情况。如今，国际化规范也每年批准一次，浏览器不断改进其实现。

### 相关资源

你可以通过多种方式参与或跟踪 ECMAScript 语言规范和 ECMAScript 国际化 API 规范和相关资源的目前的工作：

- [ECMAScript 语言规范仓库](https://github.com/tc39/ecma262)
- [ECMAScript 国际化 API 规范仓库](https://github.com/tc39/ecma402)
- [ECMAScript 提案仓库](https://github.com/tc39/proposals)
- [ECMAScript 一致性测试套件仓库](https://github.com/tc39/test262)
- [TC39 会议记录](https://github.com/tc39/notes)
- [ECMAScript 规范讨论；当前邮件列表](https://es.discourse.group/)
- [ECMAScript 规范讨论；历史邮件列表档案（至 2021 年 3 月）](https://esdiscuss.org/)

## DOM API

### WebIDL

[WebIDL 规范](https://webidl.spec.whatwg.org/)定义了 ECMAScript 和 DOM 技术之间的交互规范。

### DOM 的核心

文档对象模型（DOM）是用来表达 HTML、XHTML 及 XML 文档中的对象或与其进行交互的**约定**，它是跨平台的，并且与**编程语言无关**。通过调用**DOM 树**上对象的方法可以操纵这些对象。文档对象模型核心是由 [W3C](/zh-CN/docs/Glossary/W3C) 进行标准化的，它将 HTML 和 XML 文档抽象成对象，并在其上定义接口以及操纵这些对象的机制，DOM 定义的元素有：

- [DOM 核心](https://dom.spec.whatwg.org/)中定义了文档结构、树模型，以及 DOM 事件架构，包括：[`Node`](/zh-CN/docs/Web/API/Node)、[`Element`](/zh-CN/docs/Web/API/Element)、[`DocumentFragment`](/zh-CN/docs/Web/API/DocumentFragment)、[`Document`](/zh-CN/docs/Web/API/Document)、[`DOMImplementation`](/zh-CN/docs/Web/API/DOMImplementation)、[`Event`](/zh-CN/docs/Web/API/Event)、[`EventTarget`](/zh-CN/docs/Web/API/EventTarget)，等等
- [DOM 事件](https://w3c.github.io/uievents/)中包括对于 DOM 事件架构的一个不太严格的定义，以及一些特殊事件。
- [DOM 元素遍历](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html)以及 [DOM 范围](https://dom.spec.whatwg.org/#ranges)对象等其他内容。

从 ECMAScript 的角度来看，DOM 规范中定义的对象被称作“宿主对象”。

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/)，Web 的标记语言，是根据 DOM 定义的。位于 DOM 核心抽象概念之上，HTML 还定义了元素的意义。比如元素的 `className` 属性以及例如 [`document.body`](/zh-CN/docs/Web/API/Document/body) 这样的 API。

HTML 规范同时还约束了元素之间的关系，例如无序列表 [`<ul>`](/zh-CN/docs/Web/HTML/Element/ul) 元素中，只能以 [`<li>`](/zh-CN/docs/Web/HTML/Element/li) 元素作为子元素来表达列表项。还有就是禁止使用标准中未定义的元素和属性。

想了解更多关于 [`Document`](/zh-CN/docs/Web/API/Document) 对象、[`Window`](/zh-CN/docs/Web/API/Window) 对象以及其他 DOM 元素的信息？请访问 MDN 的 [DOM 文档](/zh-CN/docs/Web/API/Document_Object_Model)。

## 其他值得关注的 API

- [`setTimeout`](/zh-CN/docs/Web/API/setTimeout) 和 [`setInterval`](/zh-CN/docs/Web/API/setInterval) 函数最早被定义在 HTML 标准的 [`Window`](/zh-CN/docs/Web/API/Window) 接口下。
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) 使得发起异步 HTTP 请求成为可能。
- [Fetch API](https://fetch.spec.whatwg.org/) 为网络请求提供了更符合人体工程学的抽象。
- [CSS 对象模型](https://drafts.csswg.org/cssom/) 将 CSS 规则抽象成对象。
- [WebWorker](https://html.spec.whatwg.org/multipage/workers.html) 允许进行并行计算。
- [WebSocket](https://html.spec.whatwg.org/multipage/#network) 允许进行底层双向通信。
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) 是 [`<canvas>`](/zh-CN/docs/Web/HTML/Element/canvas) 元素的绘图 API。
- [WebAssembly 接口](https://webassembly.github.io/spec/js-api) 提供了 JavaScript 代码和 [WebAssembly](/zh-CN/docs/WebAssembly) 模块之间的通信工具。

非浏览器环境（如 Node.js）通常不提供 DOM API——因为它们不与文档进行交互，但它们仍然会实现很多 web API，例如 [`fetch()`](/zh-CN/docs/Web/API/fetch) 和 [`setTimeout()`](/zh-CN/docs/Web/API/setTimeout)。

## 有哪些 JavaScript 的实现？

mozilla.org 上托管了两个 JavaScript 实现。**首个** JavaScript 由网景公司的 Brendan Eich 创建，并不断地更新以符合 ECMA-262 Edition 5 及其之后的标准版本。这个引擎，代号 [SpiderMonkey](/zh-CN/docs/Mozilla/Projects/SpiderMonkey) ，是由 C/C++ 语言开发的。而 [Rhino](/zh-CN/docs/Rhino) 引擎，主要由 Norris Boyd（同样也是在网景公司）创建，则是一个 Java 语言开发的 JavaScript 实现。与 SpiderMonkey 类似，Rhino 符合 ECMA-262 Edition 5 标准。

有很多优化技术如 TraceMonkey (Firefox 3.5)、JägerMonkey (Firefox 4) 和 IonMonkey 被不断添加到了 SpiderMonkey JavaScript 引擎。并且提升 JavaScript 执行效率的工作一直在进行。

除了以上实现，还有其他一些流行的 JavaScript 引擎，如：

- Google 的 [V8](http://code.google.com/p/v8/)，在 Google Chrome 浏览器和较新的 Opera 浏览器中使用。这同时也是[Node.js](https://nodejs.org/en/)使用的引擎。
- [JavaScriptCore](http://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro)，被用在了一些 WebKit 浏览器如 Apple Safari。
- [Carakan](http://my.opera.com/ODIN/blog/carakan-faq)，用在旧版本 Opera 中。
- [Chakra](http://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) 引擎，用在 Internet Explorer 中（尽管它实现的语言被正式地称作为“JScript”来避免商标问题）。

每个 mozilla.org 的 JavaScript 引擎都提供了 公用 API 使程序开发者能将其 JavaScript 嵌入自己的软件中。目前最常见的 JavaScript 宿主环境是网页浏览器。浏览器一般通过 API 创建“宿主对象”来负责将[DOM](http://www.w3.org/DOM/) 反射到 JavaScript 中。

另一个常见的 JavaScript 应用是作为服务端脚本语言。JavaScript 服务器提供宿主对象代表 HTTP 请求和响应，随后可以通过 JavaScript 程序来动态的生成 Web 页面。[Node.js](https://nodejs.org/en/)便是一个流行的例子。

## Shell

JavaScript shell 允许你快速测试代码片段或 JavaScript 代码，而无需重载 web 页面。其在开发和代码调试中非常有用。

### 独立的 JavaScript shell

以下 JavaScript shell 是与 Perl 或 Python 类似的独立的环境：

- [Node.js](https://nodejs.org/)——Node.js 是用于构建快速、可扩展的网络应用的平台。
- [ShellJS](https://github.com/shelljs/shelljs)——用于 Node.js 的便携式 Unix shell 命令。

### 基于浏览器的 JavaScript shell

以下 JavaScript shell 是通过浏览器的 JavaScript 引擎运行代码的：

- Firefox 有一个[内置的 JavaScript 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html)，支持多行编辑。
- [Babel 交互式解释器](https://babeljs.io/repl)——一个基于浏览器的、用于试验下一代 JavaScript 特性的[交互式解释器](https://zh.wikipedia.org/wiki/读取﹣求值﹣输出循环)。
- [TypeScript playground](https://www.typescriptlang.org/play)——一个基于浏览器的在线运行环境，用于试验新的 JavaScript 特性（通过 tsc 编译器）和 TypeScript 语法。

## 工具和资源

用于编写和调试 JavaScript 代码的实用工具。

- [Firefox 开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : 包括 [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)、[JavaScript Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)、[Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) 等。
- [JavaScript Shell](/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview#shell)
  - : Javascript Shell 使你可以即时测试 JavaScript 代码片段。
- [TogetherJS](https://togetherjs.com/)
  - : 添加 TogetherJS 到你的网站，让用户实时互助，协作更简单。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : 你可以在 StackOverflow 查看或者发布带有 JavaScript 标签的问题。
- [JSFiddle](https://jsfiddle.net/)
  - : 编辑 JavaScript、CSS 和 HTML 并获得实时结果。使用外置资源，并同你的团队在线合作。
- [Plunker](https://plnkr.co/)
  - : Plunker 是一个在线社区，用于创建、协作和共享您的 Web 开发创意。编辑您的 JavaScript、CSS 和 HTML 文件并获取实时结果和文件结构。
- [JSBin](https://jsbin.com/)
  - : JS Bin 是一个开源的协作式的 web 开发调试工具。
- [Codepen](https://codepen.io/)
  - : Codepen 也是一个 Web 协作工具，可用作展示实时结果的 playground。
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz 同样是一个支持调试的在线 playground，它支持部署使用了 React、Angular 等技术的全栈应用
- [RunJS](https://runjs.app/)
  - : RunJS 是一个桌面端便笺式 playground，可提供实时执行结果并支持调用 Node 与浏览器 API。
