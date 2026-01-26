---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

**JavaScript**（**JS**）是一种具有{{Glossary("First-class Function", "函数优先")}}特性的轻量级、解释型或者说[即时编译型](https://zh.wikipedia.org/wiki/即時編譯)的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多[非浏览器环境](https://zh.wikipedia.org/wiki/JavaScript#其他)中，例如 {{Glossary("Node.js")}}、[Apache CouchDB](https://couchdb.apache.org)、[Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/) 等。进一步说，JavaScript 是一种[基于原型](/zh-CN/docs/Glossary/Prototype-based_programming)、多范式、[单线程](/zh-CN/docs/Glossary/Thread)的[动态](/zh-CN/docs/Glossary/Dynamic_typing)语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

JavaScript 的动态特性包括运行时对象的构造、变量参数列表、函数变量、动态脚本创建（通过 [`eval`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)）、对象内枚举（通过 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 和 [`Object` 工具方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#静态方法)）和源代码恢复（JavaScript 函数会存储其源代码文本，可以使用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) 进行检索）。

本部分文档将专注于 JavaScript 语言本身，而不是专注于 Web 页面或其他宿主环境特有的那部分。想要了解 Web 页面特有的 {{Glossary("API")}} 信息，请参考 [Web API](/zh-CN/docs/Web/API) 以及 {{Glossary("DOM")}}。

JavaScript 标准是 [ECMAScript 语言规范](https://tc39.es/ecma262/)（ECMA-262）和 [ECMAScript 国际化 API 规范](https://tc39.es/ecma402/)（ECMA-402）。只要某个浏览器实现了某个特性，我们就会尝试详细记录这个特性。这意味着，当某个 [ECMAScript 新特性的提案](https://github.com/tc39/proposals)在浏览器中实现时，文档和 MDN 文章中的示例可能会使用这些新特性。大多数时候发生在[阶段](https://tc39.es/process-document/) 3 和阶段 4 之间，通常在正式发布之前。

不要将 JavaScript 与 [Java 编程语言](https://zh.wikipedia.org/wiki/Java)弄混——**JavaScript _不是_“解释型的 Java”**。“Java”和“JavaScript”都是 Oracle 公司在美国和其他国家注册（或未注册）的商标。然而，这两门编程语言有着非常不同的语法、语义和用途。

JavaScript 核心语言特性（大部分是纯 [ECMAScript](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)）的文档包含以下内容：

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)
- [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)

有关 JavaScript 规范和相关技术的更多信息，请参阅 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)。

## 教程

借助指南和教程来学习如何用 JavaScript 编程。

### 面向纯新手

如果你想学习 JavaScript，却从未接触过 JavaScript 或编程，你可以投入到我们的 [JavaScript 主题学习区](/zh-CN/docs/Learn_web_development/Core/Scripting)。下面列出了这部分的所有章节：

- [JavaScript 第一步](/zh-CN/docs/Learn_web_development/Core/Scripting)
  - : 回答一些基本问题，比如“JavaScript 是什么？”、“它长什么样子？”、“它可以用来做什么？”等，还谈及如变量、字符串、数字、数组等 JavaScript 关键特性。
- [创建 JavaScript 代码块](/zh-CN/docs/Learn_web_development/Core/Scripting)
  - : 继续介绍 JavaScript 的关键基本特性，将注意力转向常见的代码块类型，如条件语句、循环、函数、事件等。
- [介绍 JavaScript 对象](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : 如果你想进一步提高对语言的了解并编写出更高效的代码，理解 JavaScript 面向对象的本质很重要，因此我们为你准备了这个模块。
- [异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS)
  - : 探讨异步 JavaScript、为什么它很重要、如何使用它有效地处理潜在的阻塞操作（如从服务器获取资源）。
- [客户端 web API](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : 探讨 API 是什么、如何使用一些开发工作中最常见的 API。

### JavaScript 指南

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)
  - : 一份非常详细的 JavaScript 指南，适用于有过 JavaScript 或其他语言编程经验的读者。

### 中级

- [理解客户端 Javascript 框架](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries)
  - : JavaScript 框架是现代前端 Web 开发中不可或缺的一部分，它为开发者提供了构建可扩展、交互式 Web 应用的成熟工具。如今，许多企业已将框架作为标准开发工具链的一部分，因此越来越多的前端开发岗位都要求具备框架使用经验。本系列文章将提供一个轻松的入门指南，帮助你开始学习这些框架。
- [JavaScript 语言概述](/zh-CN/docs/Web/JavaScript/Guide/Language_overview)
  - : JavaScript 基础语法和语义概述：帮助来自其他编程语言的读者加速学习。
- [JavaScript 数据结构](/zh-CN/docs/Web/JavaScript/Guide/Data_structures)
  - : JavaScript 数据结构概述。
- [相等比较和相同](/zh-CN/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript 提供了三种不同的值比较运算：严格相等运算符 `===`、非严格相等运算符 `==`，以及 {{jsxref("Global_Objects/Object/is", "Object.is()")}} 方法。
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : 不同的处理属性的可枚举性和所有权的方法——一个接着一个的访问一组对象属性。
- [闭包](/zh-CN/docs/Web/JavaScript/Guide/Closures)
  - : 闭包是由函数及其声明所在的词法环境结合而成。

### 高级

- [继承与原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : 解释被广泛误解与低估的基于原型的继承。
- [内存管理](/zh-CN/docs/Web/JavaScript/Guide/Memory_management)
  - : JavaScript 的内存生命周期和垃圾回收。
- [事件循环](/zh-CN/docs/Web/JavaScript/Reference/Execution_model)
  - : JavaScript 拥有基于“事件循环”的运行时模型。

## 参考

浏览完整的 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)文档。

- [标准对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
  - : 了解 {{jsxref("Array")}}、{{jsxref("Boolean")}}、{{jsxref("Date")}}、{{jsxref("Error")}}、{{jsxref("Function")}}、{{jsxref("JSON")}}、{{jsxref("Math")}}、{{jsxref("Number")}}、{{jsxref("Object")}}、{{jsxref("RegExp")}}、{{jsxref("String")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}} 、{{jsxref("WeakSet")}} 等标准内置对象。
- [表达式和运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)
  - : 学习运算符 {{jsxref("Operators/instanceof", "instanceof")}}、{{jsxref("Operators/typeof", "typeof")}}、{{jsxref("Operators/new", "new")}}、{{jsxref("Operators/this", "this")}}，[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)，以及其他运算符的行为。
- [语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements)
  - : 学习 {{jsxref("Statements/do...while", "do-while")}}、{{jsxref("Statements/for...in", "for-in")}}、{{jsxref("Statements/for...of", "for-of")}}、{{jsxref("Statements/try...catch", "try-catch")}}、{{jsxref("Statements/let", "let")}}、{{jsxref("Statements/var", "var")}}、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/if...else", "if-else")}}、{{jsxref("Statements/switch", "switch")}} 以及其他语句和关键字的作用。
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
  - : 学习如何使用 JavaScript 函数开发应用。
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript 类是最适合面向对象编程的方式。
