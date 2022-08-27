---
title: JavaScript 技术概览
slug: Web/JavaScript/JavaScript_technologies_overview
---
{{JsSidebar("Introductory")}}

## 介绍

[HTML](/zh-CN/docs/Web/HTML) 定义网页的结构与内容，[CSS](/zh-CN/docs/Web/CSS) 定义其格式与样式，而 [JavaScript](/zh-CN/docs/Web/JavaScript) 则为网页增加可交互性，创作功能丰富的 Web 应用。

但是，如果从浏览器的范畴去理解“JavaScript”这个术语，它包含了截然不同的两个方面。一方面是 JavaScript 的核心语言（ECMAScript），另一方面是大量的 [Web API](/zh-CN/docs/Web/Reference/API) 们，包括 DOM（文档对象模型）。

## JavaScript 核心语言（ECMAScript）

JavaScript 的核心语言是 [ECMAScript](/zh-CN/docs/JavaScript/Language_Resources)。ECMAScript 是一门由 ECMA TC39 委员会标准化的编程语言。

该核心语言同样可以被用在非浏览器环境之中，例如 [node.js](https://nodejs.org/)。

### 哪些内容被纳入 ECMAScript 范畴之中？

除却一些其他元素，ECMAScript 定义了：

- 语法（解析规则，关键词，流程控制，对象初始化，等等）
- 错误处理机制（{{jsxref("Statements/throw", "throw")}}、 {{jsxref("Statements/try...catch", "try...catch")}}，以及创建用户定义{{jsxref("Error", "错误")}}类型的能力）
- 类型（布尔值，数字，字符串，函数，对象，等等）
- 全局对象。在浏览器环境中，这个全局对象就是 {{domxref("Window", "window")}} 对象，但是 ECMAScript 只定义那些不特定于浏览器的 API（例如，{{jsxref("parseInt")}}、{{jsxref("parseFloat")}}、{{jsxref("decodeURI")}}、{{jsxref("encodeURI")}}，等等）
- 基于原型的继承机制
- 内置对象和函数（{{jsxref("JSON")}}、{{jsxref("Math")}}、{{jsxref("Array.prototype", "Array.prototype", "Methods")}} 方法、{{jsxref("Object", "对象")}}内省（自检、自我检查，introspection）方法，等等）
- [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

### 浏览器支持

As of October 2016, the current versions of the major Web browsers implement [ECMAScript 5.1](/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla) and [ECMAScript 2015](/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla), but older versions (still in use) implement ECMAScript 5 only.

截止 2014 年 8 月份，主流浏览器的最新版本都已经支持 ECMAScript 5.1，但是旧版本的浏览器大多仅支持 ECMAScript 3 和 ECMAScript 5 的部分标准。[这里](http://kangax.github.com/es5-compat-table/)是一些关于 ECMAScript 5 的浏览器支持情况的资料。如今，主流浏览器的最新版本已经支持 ECMAScript 6 的大部分标准。

### 未来

The major 6th Edition of ECMAScript was officially approved and published as a standard on June 17, 2015 by the ECMA General Assembly. Since then ECMAScript Editions are published on a yearly basis.

ECMA-262（**ECMAScript 4** 或者 **ES4**）第 4 版的提议本应成为自 1999 年第 3 版发布以来的一次重要更新，但是在 2008 年 8 月份，ECMAScript 第 4 版被回退到一个代号为[ECMAScript Harmony](http://en.wikipedia.org/wiki/ECMAScript#ECMAScript_Harmony)的项目，像`const`关键字以及对象代理等内容都被涵盖其中。你可以在[这里](http://wiki.ecmascript.org/doku.php)跟踪这个项目的进展。ECMA 委员会已经在 2015 年 6 月 17 号，正式发布了第 6 版标准。

## 国际化 API

由 ECMA TC39 进行标准化的[ECMAScript 国际化 API 规范](http://ecma-international.org/ecma-402/1.0/)是在 ECMAScript 语言规范之上额外增加的。国际化 API 为 JavaScript 提供了国际化的规则排序（字符串比较）、数字格式化、日期时间格式化等功能，能够让应用选择语言，并根据实际需要选用功能。本标准在 2012 年 12 月审批通过，可以在 MDN 的 {{jsxref("Intl")}} 页面查看各个浏览器对其的实现情况。The Internationalization specification is nowadays also ratified on a yearly basis and browsers constantly improve their implementation.

## DOM API

### WebIDL

[WebIDL 规范](http://dev.w3.org/2006/webapi/WebIDL/)定义了 ECMAScript 和 DOM 技术之间的交互规范。

### DOM 的核心

文档对象模型（DOM）是用来表达 HTML、XHTML 及 XML 文档中的对象或与其进行交互的**约定**，它是跨平台的，并且与**编程语言无关**。通过调用**DOM 树**上对象的方法可以操纵这些对象。文档对象模型核心是由 {{glossary("W3C")}} 进行标准化的，它将 HTML 和 XML 文档抽象成对象，并在其上定义接口以及操纵这些对象的机制，DOM 定义的元素有：

- [DOM 核心](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html)中定义了文档结构，树模型，以及 DOM 事件架构，包括： {{domxref("Node")}}、{{domxref("Element")}}、{{domxref("DocumentFragment")}}、{{domxref("Document")}}、{{domxref("DOMImplementation")}}、{{domxref("Event")}}、{{domxref("EventTarget")}} 等等…
- [DOM 事件](http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html)中包括对于 DOM 事件架构的一个不太严格的定义，以及一些特殊事件。
- [DOM 元素遍历](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html)以及 [DOM 范围](http://html5.org/specs/dom-range.html)对象等其它内容。

从 ECMAScript 的角度来看，DOM 规范中定义的对象被称作“宿主对象”。

### HTML DOM

[HTML](http://www.whatwg.org/html)，Web 的标记语言，是根据 DOM 定义的。位于 DOM 核心抽象概念之上，HTML 还定义了元素的意义。比如元素的 `className` 属性以及例如 {{domxref("document.body")}} 这样的 API。

HTML 规范同时还约束了元素之间的关系，例如无序列表 {{htmlelement("ul")}} 元素中，只能以 {{htmlelement("li")}} 元素作为子元素来表达列表项。还有就是禁止使用标准中未定义的元素和属性。

想了解更多关于 {{domxref("Document")}} 对象、{{domxref("Window")}} 对象以及其他 DOM 元素的信息？请访问 MDN 的 [DOM 文档](/zh-CN/docs/Web/API/Document_Object_Model)。

## 其他值得关注的 API

- {{domxref("WindowTimers.setTimeout", "setTimeout")}} 和 {{domxref("WindowTimers.setInterval", "setInterval")}} 函数最早被定义在 HTML 标准的 {{domxref("Window")}} 接口下。
- [XMLHttpRequest](http://dev.w3.org/2006/webapi/XMLHttpRequest-2/) 使得发起异步 HTTP 请求成为可能。
- [CSS 对象模型](http://dev.w3.org/csswg/cssom/) 将 CSS 规则抽象成对象。
- [WebWorkers](http://www.whatwg.org/specs/web-workers/current-work/) 允许进行并行计算。
- [WebSockets](http://www.whatwg.org/C/#network) 允许进行底层双向通信。
- [Canvas 2D Context](http://www.whatwg.org/html/#2dcontext) {{htmlelement("canvas")}} 元素的绘图 API。

## DOM 浏览器支持

相信每个 Web 开发人员都曾经有过“[DOM 就是一团糟](http://ejohn.org/blog/the-dom-is-a-mess/)”的体验，因为浏览器对 DOM 的支持千差万别。造成这种局面的主要原因是 DOM 规范并未清晰定义很多重要的 DOM 特性。另外，一些浏览器也增加了不兼容的特性（例如 Intenet Explorer 的事件模型）。自 2011 年 6 月以来，W3C，特别是 WHATWG 都在对旧特性进行细节定义，以提高互通性。浏览器也在基于这些更加详细的规范改善它们的实现方式。

要实现跨浏览器的兼容性，一个常见的但可能不是最可靠的方式就是使用 JavaScript 库。这些库对于 DOM 特性进行抽象，以确保它们所提供的 API 在不同的浏览器上行为一致。被广泛采用的框架有 [jQuery](http://jquery.com/)，[prototype](http://www.prototypejs.org/) 和 [YUI](http://developer.yahoo.com/yui/)。
