---
title: 关于 JavaScript
slug: Web/JavaScript/About_JavaScript
---

{{JsSidebar()}}

## 什么是 JavaScript?

JavaScript®（通常简写为 JS）是一种轻量的、解释性的、面向对象的[头等函数](https://zh.wikipedia.org/wiki/%E5%A4%B4%E7%AD%89%E5%87%BD%E6%95%B0)语言，其最广为人知的应用是作为网页的脚本语言，但同时它也在很多[非浏览器环境下使用](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_web_pages)。JS 是一种动态的[基于原型](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9E%8B%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88)和多[范式](https://zh.wikipedia.org/wiki/%E7%BC%96%E7%A8%8B%E8%8C%83%E5%9E%8B)的脚本语言，支持面向对象、命令式和函数式的编程风格。

JavaScript 运行在网页的客户端，能被用来设计和编程网页在事件发生时的行为。JavaScript 不仅易学而且强大，因此广泛用于对网页的控制。

与流行的误解相反，JavaScript 并不是“解释性 Java”。简单来说，JavaScript 是一个动态脚本语言，支持 [基于原型的](/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#Class-Based_vs._Prototype-Based_Languages) 对象构造。其基本语法被设计地与 Java 和 C++ 接近，来减少学习语言所需要的新概念。语言结构，如条件语句（if）、循环（for，while）、分支（switch）、异常捕获（try...catch）等和这些语言一致或者很接近。

JavaScript 既是一个 [面向过程的语言](http://en.wikipedia.org/wiki/Procedural_programming) 又是一个 [面向对象的语言](/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)。在 JavaScript 中，通过**在运行时**给空对象附加方法和属性来创建对象，与编译语言如 C++ 和 Java 中常见的通过语法来定义类相反。对象构造后，它可以用作是创建相似对象的原型。

JavaScript 的动态特性包括运行时构造对象、可变参数列表、函数变量、动态脚本执行（通过 [`eval`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)）、对象内枚举（通过 `for ... in`）和源码恢复（JavaScript 程序可以将函数反编译回源代码）。

如果您需要了解更多 JavaScript 编程信息，请参见下方的 [JavaScript 资源](#JavaScript_resources) 链接。

## 有哪些 JavaScript 的实现？

mozilla.org 上托管了两个 JavaScript 实现。**首个** JavaScript 由网景公司的 Brendan Eich 创建，并不断地更新以符合 ECMA-262 Edition 5 及其之后的标准版本。这个引擎，代号 [SpiderMonkey](/zh-CN/docs/Mozilla/Projects/SpiderMonkey) ，是由 C/C++ 语言开发的。而 [Rhino](/zh-CN/docs/Rhino) 引擎，主要由 Norris Boyd（同样也是在网景公司）创建，则是一个 Java 语言开发的 JavaScript 实现。与 SpiderMonkey 类似，Rhino 符合 ECMA-262 Edition 5 标准。

有很多优化技术如 TraceMonkey (Firefox 3.5)、JägerMonkey (Firefox 4) 和 IonMonkey 被不断添加到了 SpiderMonkey JavaScript 引擎。并且提升 JavaScript 执行效率的工作一直在进行。

除了以上实现，还有其他一些流行的 JavaScript 引擎，如：

- Google 的 [V8](http://code.google.com/p/v8/)，在 Google Chrome 浏览器和较新的 Opera 浏览器中使用。这同时也是[Node.js](https://nodejs.org/en/)使用的引擎。
- [JavaScriptCore](http://www.webkit.org/projects/javascript/index.html) (SquirrelFish/Nitro)，被用在了一些 WebKit 浏览器如 Apple Safari。
- [Carakan](http://my.opera.com/ODIN/blog/carakan-faq)，用在旧版本 Opera 中。
- The [Chakra](http://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29) 引擎，用在 Internet Explorer 中（尽管它实现的语言被正式地称作为“JScript”来避免商标问题）。

每个 mozilla.org 的 JavaScript 引擎都提供了 公用 API 使程序开发者能将其 JavaScript 嵌入自己的软件中。目前最常见的 JavaScript 宿主环境是网页浏览器。浏览器一般通过 API 创建“宿主对象”来负责将[DOM](http://www.w3.org/DOM/) 反射到 JavaScript 中。

另一个常见的 JavaScript 应用是作为服务端脚本语言。JavaScript 服务器提供宿主对象代表 HTTP 请求和响应，随后可以通过 JavaScript 程序来动态的生成 Web 页面。[Node.js](https://nodejs.org/en/)便是一个流行的例子。

## JavaScript 资源

- [SpiderMonkey](/zh-CN/docs/Mozilla/Projects/SpiderMonkey)
  - : Mozilla 使用 C/C++ 引擎实现 JavaScript（又称为 SpiderMonkey），以及如何在应用中嵌入使用的相关信息。
- [Rhino](/zh-CN/docs/Rhino)
  - : Rhino（Java 语言实现的 JavaScript）的相关信息。
- [语言资源](/zh-CN/docs/Web/JavaScript/Language_Resources)
  - : 已经公布的 JavaScript 标准。
- [重新认识 JavaScript](/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide) 和 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)。

JavaScript® 是 Oracle 于美国和其他国家注册和拥有的商标。
