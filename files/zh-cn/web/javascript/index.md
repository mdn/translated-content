---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{JsSidebar}}

**JavaScript**（**JS**）是一种具有{{Glossary("First-class Function", "函数优先")}}特性的轻量级、解释型或者说[即时编译型](https://zh.wikipedia.org/wiki/即時編譯)的编程语言。虽然作为 Web 页面的脚本语言被人所熟知，但是它也被用于[很多非浏览器环境](https://zh.wikipedia.org/wiki/JavaScript#其他)，例如 {{Glossary("Node.js")}}、[Apache CouchDB](https://couchdb.apache.org)、[Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/) 等。进一步说，JavaScript 是一种[基于原型](/zh-CN/docs/Glossary/Prototype-based_programming)、多范式、[单线程](/zh-CN/docs/Glossary/Thread)的[动态](/zh-CN/docs/Glossary/Dynamic_typing)语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

JavaScript 的动态特性包括运行时对象的构造、变量参数列表、函数变量、动态脚本创建（通过 [`eval`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)）、对象内枚举（通过 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 和 [`Object` 工具方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#静态方法)）和源代码恢复（JavaScript 函数会存储其源代码文本，可以使用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) 进行检索）。

本部分文档将专注于 JavaScript 语言本身，而不是专注于 Web 页面或其他宿主环境特有的那部分。想要了解 Web 页面中特有的 {{Glossary("API")}}，请参考 [Web API](/zh-CN/docs/Web/API) 以及 {{Glossary("DOM")}}。

[ECMAScript 语言规范（ECMAScript Language Specification）](https://tc39.es/ecma262/)（ECMA-262）和 [ECMAScript 国际化 API 规范（ECMAScript Internationalization API specification）](https://tc39.es/ecma402/)（ECMA-402）是 JavaScript 的标准。只要一个浏览器实现了某个特性，我们就会尝试详细记录这个特性。这意味着，当某个 [ECMAScript 新特性的提案](https://github.com/tc39/proposals)已经被一些浏览器实现时，MDN 上的文档或示例就可能会涉及到这些新特性。大多数时候，处在[阶段](https://tc39.es/process-document/) 3 和 4 的新特性会被收录到文档中，且收录时间通常早于其正式发布的时间。

不要将 JavaScript 与 [Java 编程语言](https://zh.wikipedia.org/wiki/Java)弄混——**JavaScript 不是“解释型 Java”**。虽然“Java”和“JavaScript”都是 Oracle 公司在美国和其他国家注册（或未注册）的商标，但是这两门语言在语法、语义与用途方面有相当大的不同。

JavaScript 的核心语言特性（大部分是纯 [ECMAScript](/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)）的文档包括以下内容：

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)
- [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)

有关 JavaScript 规范和相关技术的更多信息，请参阅 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)。

## 教程

通过指南和教程学习如何用 JavaScript 编程。

### 面向纯新手

如果你想学习 JavaScript，却从未接触过 JavaScript 或编程，你可以投入到我们的 [JavaScript 主题学习区](/zh-CN/docs/Learn/JavaScript)。下面列出了这部分的所有章节：

- [JavaScript 第一步](/zh-CN/docs/Learn/JavaScript/First_steps)
  - : 回答了一些基本问题，比如“JavaScript 是什么？”、“它长什么样子？”、“它可以用来做什么？”等，同时还谈及了如变量、字符串、数字、数组等 JavaScript 的关键特性。
- [创建 JavaScript 代码块](/zh-CN/docs/Learn/JavaScript/Building_blocks)
  - : 继介绍了 JavaScript 关键的基本特性后，我们需要关注常见的代码块类型，如条件语句、循环、函数、事件等。
- [介绍 JavaScript 对象](/zh-CN/docs/Learn/JavaScript/Objects)
  - : 如果你想进一步提高对语言的了解并编写更高效的代码，理解 JavaScript 的面向对象特性非常重要，因此我们提供了这个模块来帮助你。
- [异步 JavaScript](/zh-CN/docs/Learn/JavaScript/Asynchronous)
  - : 探讨异步 JavaScript，为什么它很重要，以及如何使用它有效地处理潜在的阻塞操作（如从服务器获取资源）。
- [客户端 web API](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs)
  - : 探讨 API 是什么，以及一些你经常在开发工作中遇到的最常见的 API的使用方式。

### JavaScript 指南

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)
  - : 一份更详尽的 JavaScript 指南，适用于有过 JavaScript 或其他语言编程经验的读者。

### 中级

- [理解客户端 Javascript 框架](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript 框架是现代前端 Web 开发的重要组成部分，为开发人员提供了经过验证的用于构建可扩展、交互式的 Web 应用程序的工具。这个模块为你提供了一些关于客户端框架如何工作以及它们如何适应你的工具集的基本背景知识，然后继续涵盖一些当今最流行的框架的教程系列。
- [JavaScript 语言概述](/zh-CN/docs/Web/JavaScript/Language_overview)
  - : 一篇帮助来自其他编程语言的读者加速学习的 JavaScript 基础语法和语义的概述。
- [JavaScript 数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
  - : 概述 JavaScript 中涉及的数据结构。
- [相等比较和相同](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript 提供了三种不同的值比较运算：严格相等运算符 `===`、非严格相等运算符 `==`，以及 {{jsxref("Global_Objects/Object/is", "Object.is()")}} 方法。
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : 不同的逐个访问一组对象属性的方法对可枚举性和属性所有权的处理。
- [闭包](/zh-CN/docs/Web/JavaScript/Closures)
  - : 闭包是由函数及其声明所在的词法环境结合而成。

### 高级

- [继承和原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : 解释被广泛误解与低估的基于原型的继承。
- [内存管理](/zh-CN/docs/Web/JavaScript/Memory_management)
  - : JavaScript 中的内存生命周期和垃圾回收机制。
- [事件循环](/zh-CN/docs/Web/JavaScript/Event_loop)
  - : JavaScript 具有基于“事件循环”的运行时模型。

## 参考

浏览完整的 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)文档。

- [标准对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
  - : 了解 {{jsxref("Array")}}、{{jsxref("Boolean")}}、{{jsxref("Date")}}、{{jsxref("Error")}}、{{jsxref("Function")}}、{{jsxref("JSON")}}、{{jsxref("Math")}}、{{jsxref("Number")}}、{{jsxref("Object")}}、{{jsxref("RegExp")}}、{{jsxref("String")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}} 、{{jsxref("WeakSet")}} 等标准内置对象。
- [表达式和运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)
  - : 学习运算符 {{jsxref("Operators/instanceof", "instanceof")}}、{{jsxref("Operators/typeof", "typeof")}}、{{jsxref("Operators/new", "new")}}、{{jsxref("Operators/this", "this")}}，[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)，以及其他运算符的行为。
- [语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements)
  - : 学习 {{jsxref("Statements/do...while", "do-while")}}、{{jsxref("Statements/for...in", "for-in")}}、{{jsxref("Statements/for...of", "for-of")}}、{{jsxref("Statements/try...catch", "try-catch")}}、{{jsxref("Statements/let", "let")}}、{{jsxref("Statements/var", "var")}}、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/if...else", "if-else")}}、{{jsxref("Statements/switch", "switch")}} 以及其他语句和关键字的作用。
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
  - : 学习如何使用 JavaScript 函数来开发你的应用。
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript 类是进行面向对象编程最合适的方式。
