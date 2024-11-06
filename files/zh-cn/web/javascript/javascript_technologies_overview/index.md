---
title: JavaScript 技术概览
slug: Web/JavaScript/JavaScript_technologies_overview
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{JsSidebar("Introductory")}}

[HTML](/zh-CN/docs/Web/HTML) 定义网页的结构与内容，[CSS](/zh-CN/docs/Web/CSS) 定义其格式与样式，而 [JavaScript](/zh-CN/docs/Web/JavaScript) 则为网页增加交互性，创作功能丰富的 Web 应用。

但是，如果从浏览器的范畴去理解“JavaScript”这个术语，它包含了截然不同的两个方面。一方面是 JavaScript 的核心语言（ECMAScript），另一方面是大量的 [Web API](/zh-CN/docs/Web/API)，包括 DOM（文档对象模型）。

## JavaScript 核心语言（ECMAScript）

JavaScript 的核心语言由 ECMA TC39 委员会标准化为称作 ECMAScript 的语言。“ECMAScript”是表示语言标准的术语，但“ECMAScript”和“JavaScript”是可以互换使用的。

该核心语言同样可以被用在非浏览器环境之中，例如 [Node.js](https://nodejs.org)。

### 哪些内容被纳入 ECMAScript 范畴之中？

除却一些其他元素，ECMAScript 定义了：

- 语法（解析规则、关键字、流程控制、对象字面量初始化，等等）
- 错误处理机制（{{jsxref("Statements/throw", "throw")}}、{{jsxref("Statements/try...catch", "try...catch")}}，以及创建用户自定义 {{jsxref("Error")}} 类型的能力）
- 类型（布尔、数字、字符串、函数、对象，等等）
- 基于原型的继承机制
- 内置对象和函数（{{jsxref("JSON")}}、{{jsxref("Math")}}、[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)方法、{{jsxref("parseInt")}}、{{jsxref("decodeURI")}}，等等）
- [严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
- [模块系统](/zh-CN/docs/Web/JavaScript/Guide/Modules)
- 基本内存模型

### 标准化流程

ECMAScript 版本由每年的 ECMA 大会批准并作为标准发布。所有的进展都在 [Ecma TC39 GitHub 组织](https://github.com/tc39)上公开，该组织托管提案、官方规范文本和会议记录。

在 ECMAScript 第 6 版（称为 ES6）之前，规范是几年发布一次，通常用它们的主要版本号来指代（ES3、ES5 等）。在 ES6 之后，规范以发布年份命名（ES2017、ES2018 等）。ES6 是 ES2015 的代名词。_ESNext_ 是一个动态名称，指的是撰写本文时的下一个版本。ESNext 中的特性更准确地称为提案，因为根据定义，规范尚未最终确定。

目前委员会批准的 ECMA-262 的快照位于 Ecma International 的 [ECMA-262 语言规范页面](https://ecma-international.org/publications-and-standards/standards/ecma-262/)，有 PDF 和 HTML 两个格式可用。ECMA-262 和 ECMA-402 正处于维护状态，仍在由规范编辑者更新；TC39 网站托管了最新版本的 [ECMA-262](https://tc39.es/ecma262/) 和 [ECMA-402](https://tc39.es/ecma402/)。

新的语言特性，包括新的语法和 API 的引入以及现有行为的修订，都以提案的形式进行讨论。每个提案都需要经过 [4 个阶段的过程](https://tc39.es/process-document/)，通常在第 3 或第 4 阶段时，JavaScript 引擎会实现这些提案，以供公众使用。

有关 ECMAScript 历史的更多信息，请参阅[维基百科上的 ECMAScript 条目](https://zh.wikipedia.org/wiki/ECMAScript)。

## 国际化 API

由 ECMA TC39 进行标准化的 [ECMAScript 国际化 API 规范](https://402.ecma-international.org/1.0/)是在 ECMAScript 语言规范之上额外增加的。国际化 API 为 JavaScript 应用程序提供了国际化的规则排序（字符串比较）、数字格式化、日期时间格式化等功能，能够让应用选择语言，并根据实际需要选用功能。初始标准在 2012 年 12 月审批通过；可以在 {{jsxref("Intl")}} 对象的文档中查看各个浏览器的实现状态。如今，国际化规范每年都会得到批准，浏览器也会不断改进其实现。

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

文档对象模型（DOM）是一种跨平台以及**编程语言无关的约定**，用于表示 HTML、XHTML 及 XML 文档中的对象并与之交互。通过调用 **DOM 树**中的对象的方法对其进行定位和操纵。[W3C](/zh-CN/docs/Glossary/W3C) 将核心文档对象模型标准化，该模型定义了与语言无关的接口，将 HTML 和 XML 文档抽象为对象，还定义了操作这种抽象的机制。在由 DOM 定义的事物中，我们可以发现：

- [DOM 核心](https://dom.spec.whatwg.org/)中的文档结构、树模型，以及 DOM 事件架构，包括：{{domxref("Node")}}、{{domxref("Element")}}、{{domxref("DocumentFragment")}}、{{domxref("Document")}}、{{domxref("DOMImplementation")}}、{{domxref("Event")}}、{{domxref("EventTarget")}}，等等。
- [DOM 事件](https://w3c.github.io/uievents/)中的一个不太严谨的 DOM 事件架构的定义，以及一些特殊事件。
- [DOM 遍历](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html)以及 [DOM 范围](https://dom.spec.whatwg.org/#ranges)等其他内容。

从 ECMAScript 的角度来看，DOM 规范中定义的对象称作“宿主对象”。

### HTML DOM

[HTML](https://html.spec.whatwg.org/multipage/)，Web 的标记语言，是以 DOM 的形式定义的，位于 DOM 核心抽象概念之上。HTML 还定义了元素的*意义*。HTML DOM 包括：元素的 `className` 属性以及 {{domxref("Document.body")}} API，等等。

HTML 规范同时还约束了元素之间的关系，例如无序列表 {{htmlelement("ul")}} 元素中，只能以 {{htmlelement("li")}} 元素作为子元素来表达列表项。还有就是禁止使用标准中未定义的元素和属性。

想了解更多关于 {{domxref("Document")}} 对象、{{domxref("Window")}} 对象以及其他 DOM 元素的信息？阅读 [DOM 文档](/zh-CN/docs/Web/API/Document_Object_Model)。

## 其他值得关注的 API

- {{domxref("Window.setTimeout", "setTimeout()")}} 和 {{domxref("Window.setInterval", "setInterval()")}} 函数最早被定义在 HTML 标准的 {{domxref("Window")}} 接口下。
- [XMLHttpRequest](https://xhr.spec.whatwg.org/) 使得发起异步 HTTP 请求成为可能。
- [Fetch API](https://fetch.spec.whatwg.org/) 为网络请求提供了更符合人体工程学的抽象。
- [CSS 对象模型](https://drafts.csswg.org/cssom/) 将 CSS 规则抽象成对象。
- [WebWorker](https://html.spec.whatwg.org/multipage/workers.html) 允许进行并行计算。
- [WebSocket](https://html.spec.whatwg.org/multipage/#network) 允许进行底层双向通信。
- [Canvas 2D Context](https://html.spec.whatwg.org/multipage//#2dcontext) 是 [`<canvas>`](/zh-CN/docs/Web/HTML/Element/canvas) 元素的绘图 API。
- [WebAssembly 接口](https://webassembly.github.io/spec/js-api)为 JavaScript 代码和 [WebAssembly](/zh-CN/docs/WebAssembly) 模块之间提供通信工具。

非浏览器环境（如 Node.js）通常不提供 DOM API——因为它们不与文档进行交互，但它们仍然会实现很多 Web API，例如 {{domxref("Window.fetch", "fetch()")}} 和 {{domxref("Window.setTimeout", "setTimeout()")}}。

## 有哪些 JavaScript 的实现？

有三个主要的用于浏览器环境和其他环境的 JavaScript 实现：

- Mozilla 的 [SpiderMonkey](https://spidermonkey.dev/)，用于 Firefox。它是*首*款 JavaScript 引擎，由 Netscape 公司的 Brendan Eich 创建。
- Google 的 [V8](https://v8.dev/)，用于 Google Chrome、Opera、Edge、[Node.js](https://nodejs.org/)、[Deno](https://deno.com/)、[Electron](https://www.electronjs.org/)，等等。
- Apple 的 [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore)（也称为 SquirrelFish/Nitro），用于 WebKit 浏览器（如 Apple Safari）和 [Bun](https://bun.sh/)。

除了以上实现，还有其他流行的 JavaScript 引擎，如：

- [Carakan](https://zh.wikipedia.org/wiki/Presto#JavaScript引擎)，用于早期版本的 Opera。
- Microsoft 的 [Chakra](<https://zh.wikipedia.org/wiki/Chakra_(JScript引擎)>) 引擎，用于 Internet Explorer（尽管它实现的语言正式名称为“JScript”，为了避免商标问题）。早期版本的 Edge 使用的新 JavaScript 引擎，令人困惑的是，它也叫作 [Chakra](<https://zh.wikipedia.org/wiki/Chakra_(JavaScript引擎)>)。
- [LibJS](https://serenityos.github.io/libjs-website/)，用于 [SerenityOS](https://serenityos.org/) 的浏览器实现。
- Mozilla 的 [Rhino](<https://zh.wikipedia.org/wiki/Rhino_(JavaScript引擎)>) 引擎，用 Java 语言实现的 JavaScript 引擎，主要由 Norris Boyd（也曾在 Netscape）创建。

还有一些引擎是专门为非浏览器用途定制的：

- [Engine262](https://engine262.js.org/)，用 JavaScript 实现的 JavaScript 引擎。创建的目的是为 JavaScript 开发者探索规范中的新语言特性和查找规范中的问题。
- [Moddable XS](https://www.moddable.com/)，用于嵌入式系统，如 IoT。
- [QuickJS](https://bellard.org/quickjs/)，一个小型、嵌入式的 JavaScript 引擎。
- Meta 的 [Hermes](https://github.com/facebook/hermes) 引擎，为 [React Native](https://reactnative.dev/docs/hermes) 进行优化的引擎。
- Oracle 的 [GraalJS](https://www.graalvm.org/)，由 Oracle Labs 在 GraalVM 上构建的高性能引擎。

JavaScript 引擎暴露了应用程序开发者用于将 JavaScript 整合到软件中的公共 API，JavaScript 大多数常见的宿主环境是 Web 浏览器。Web 浏览器一般使用公共的 API 创建用于将 [DOM](https://dom.spec.whatwg.org/) 反射到 JavaScript 的**宿主对象**。

JavaScript 另一个常见的应用是作为（Web）服务器端脚本语言。JavaScript Web 服务器通过暴露表示 HTTP 请求和响应的宿主对象，然后 JavaScript 程序就能操作这些对象动态地生成 Web 页面。[Node.js](https://nodejs.org/) 是流行的服务器端脚本语言的宿主环境。

## Shell

JavaScript shell 允许你快速测试 JavaScript 代码片段，而无需重载 Web 页面。其在开发和代码调试中非常有用。

### 独立的 JavaScript shell

以下 JavaScript shell 是与 Perl 或 Python 类似的独立的环境：

- [Node.js](https://nodejs.org/)——Node.js 是可轻松构建快速、可扩展网络应用程序的平台。
- [ShellJS](https://github.com/shelljs/shelljs)——用于 Node.js 的便携式 Unix shell 命令。

### 基于浏览器的 JavaScript shell

以下 JavaScript shell 通过浏览器的 JavaScript 引擎运行代码：

- Firefox 有一个[内置的 JavaScript 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html)，支持多行编辑。
- [Babel 交互式解释器](https://babeljs.io/repl)——一个基于浏览器的、用于试验下一代 JavaScript 特性的[交互式解释器](https://zh.wikipedia.org/wiki/读取﹣求值﹣输出循环)。
- [TypeScript playground](https://www.typescriptlang.org/play)——一个基于浏览器的在线运行环境，用于试验新的 JavaScript 特性（通过 tsc 编译器）和 TypeScript 语法。

## 工具和资源

用于编写和调试 JavaScript 代码的实用工具。

- [Firefox 开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : 包括 [Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)、[JavaScript 性能分析](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)、[调试器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)等。
- [学习 JavaScript](https://learnjavascript.online/)
  - : 为有进取心的 Web 开发人员准备的优秀资源——在交互式环境中通过自动评估引导的短课程和交互式测试学习 JavaScript。前 40 节课为免费课程，而完整的课程仅需一次性支付少量费用。
- [TogetherJS](https://togetherjs.com/)
  - : 添加 TogetherJS 到你的网站，让用户实时互助，协作更简单。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : 你可以在 StackOverflow 查看或者发布带有 JavaScript 标签的问题。
- [JSFiddle](https://jsfiddle.net/)
  - : 编辑 JavaScript、CSS 和 HTML 并获得实时结果。使用外置资源，并同你的团队在线合作。
- [Plunker](https://plnkr.co/)
  - : Plunker 是一个在线社区，用于创建、协作和共享你的 Web 开发创意。编辑你的 JavaScript、CSS 和 HTML 文件并获取实时结果和文件结构。
- [JSBin](https://jsbin.com/)
  - : JS Bin 是一个开源的协作式的 Web 开发调试工具。
- [Codepen](https://codepen.io/)
  - : Codepen 也是一个 Web 开发协作工具，可用作展示实时结果的 playground。
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz 同样是一个支持调试的在线 playground，它支持托管和部署使用了 React、Angular 等技术的全栈应用。
- [RunJS](https://runjs.app/)
  - : RunJS 是一个桌面端便笺式 playground，可提供实时执行结果并支持调用 Node 与浏览器 API。
