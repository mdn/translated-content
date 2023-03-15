---
title: JavaScript
slug: Web/JavaScript
---

{{JsSidebar()}}

**JavaScript**（**JS**）是一种具有{{Glossary("First-class Function", "函数优先")}}特性的轻量级、解释型或者说[即时编译型](https://zh.wikipedia.org/wiki/即時編譯)的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多[非浏览器环境](ttps://zh.wikipedia.org/wiki/JavaScript#其他)中，例如 {{Glossary("Node.js")}}、[Apache CouchDB](https://couchdb.apache.org)、[Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/) 等。进一步说，JavaScript 是一种[基于原型](/zh-CN/docs/Glossary/Prototype-based_programming)、多范式、[单线程](/zh-CN/docs/Glossary/Thread)的[动态](/zh-CN/docs/Glossary/Dynamic_typing)语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

JavaScript 的动态特性包括运行时对象的构造、变量参数列表、函数变量、动态脚本创建（通过 [`eval`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)）、对象内枚举（通过 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 和 [`Object` 工具方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#静态方法)）和源代码恢复（JavaScript 函数会存储其源代码文本，可以使用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) 进行检索）。

本部分文档将专注于 JavaScript 语言本身，而非局限于网页或其他运行环境。想要了解网页中特有的 {{Glossary("API")}}，请参考 [Web API](/zh-CN/docs/Web/API) 以及 {{Glossary("DOM")}}。

[ECMAScript 语言规范（ECMAScript Language Specification）](https://tc39.es/ecma262/)（ECMA-262）和[ECMAScript 国际化 API 规范（ECMAScript Internationalization API specification）](https://tc39.es/ecma262/)（ECMA-402）是 Javascript 的标准。当某个 [ECMAScript 新特性的提案](https://github.com/tc39/proposals)已经被一些浏览器实现时，MDN 上的文档或示例就可能会涉及到这些新特性。大多数时候，处在 [stages](https://tc39.es/process-document/) 3 和 4 的新特性会被收录到文档中，且收录时间通常早于其正式发布的时间。

不要将 JavaScript 与 [Java 编程语言](https://zh.wikipedia.org/wiki/Java)混淆——**JavaScript 不是“解释型 Java”**。虽然“Java”和“JavaScript”都是 Oracle 公司在美国和其他国家注册（或未注册）的商标，但是这两门语言在语法、语义与用途方面有相当大的不同。

JavaScript 的核心语言特性（大部分是纯 [ECMAScript](/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)）的文档包括以下内容：

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)
- [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)

有关 JavaScript 规范和相关技术的更多信息，请参阅 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)。

> **标注：** **想成为一名前端网页开发人员吗？**
>
> 为了帮助你实现这个目标，我们总结了一条包含所有必要信息的学习路线。
>
> [**从这里起步**](/zh-CN/docs/Learn/Front-end_web_developer)

## 教程

借助指南和教程来学习如何用 JavaScript 编程。

### 对于完全的初学者

如果你想学习 JavaScript，却从未接触过 JavaScript 或编程，你可以投入到我们的 [JavaScript 主题学习区](/zh-CN/docs/Learn/JavaScript)。下面列出了这部分的所有章节：

- [JavaScript 第一步](/zh-CN/docs/Learn/JavaScript/First_steps)
  - : 回答了一些基本问题，比如“JavaScript 是什么？”、“它长什么样子？”、“它可以用来做什么？”等，同时还谈及了如变量、字符串、数值、数组等 JavaScript 的关键特性。
- [JavaScript 基本结构](/zh-CN/docs/Learn/JavaScript/Building_blocks)
  - : 继介绍了 JavaScript 关键的基本特性后，我们需要关注常见的代码组成部分，如条件语句、循环、函数、事件等。
- [介绍 JavaScript 对象](/zh-CN/docs/Learn/JavaScript/Objects)
  - : 如果你想进一步使用它撰写更有效率的代码，理解 JavaScript 面向对象的特性是很重要的，因此我们提供了该模块来帮助你理解它。
- [异步 JavaScript](/zh-CN/docs/Learn/JavaScript/Asynchronous)
  - : 介绍异步 Javascript，解释为什么这个特性是重要的，以及如何借助这个特性，有效解决诸如从服务器抓取资源这类潜在的阻塞操作。
- [客户端 web API](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs)
  - : 了解 API 是什么，以及如何使用那些在开发工作中常见的 API。

### JavaScript 指南

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)
  - : 一份更详尽的 JavaScript 指南，适用于有过 JavaScript 或其他语言编程经验的读者。

### 中级内容

- [理解客户端 Javascript 框架](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : 作为现代前端 Web 开发中不可或缺的一部分，Javascript 框架给开发者提供了一套经过验证的工具，用来构建可扩展的交互式 Web 应用。在你移步一系列涵盖了当前流行前端框架的教程前，这部分内容提供了一些基础的背景知识，包括这些客户端框架是如何工作的，以及它们如何与你现有的工具集相配合。
- [重新介绍 JavaScript](/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : 给那些 _认为自己了解 Javascript_ 的朋友们准备的 JavaScript 概述。
- [JavaScript 数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
  - : 概述 JavaScript 中涉及的数据结构。
- [相同、相等的比较性判断](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript 提供了三种比较操作符，包括严格比较操作符`===`和非严格的比较操作符 `==`，以及 {{jsxref("Global_Objects/Object/is", "Object.is()")}} 方法。
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
  - : 不同的逐个访问一组对象属性的方法对可枚举性和属性所有权的处理。
- [闭包](/zh-CN/docs/Web/JavaScript/Closures)
  - : 闭包由一个函数与其本身所被定义的词法环境的结合而成。

### 高级内容

- [继承和原型链](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : 基于原型继承被外界广泛地误解与低估，这一版块对基于原型的继承作了阐述。
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
  - : Javascript 类型化数组提供了操作原始二进制数据的机制。
- [内存管理](/zh-CN/docs/Web/JavaScript/Memory_Management)
  - : JavaScript 中的内存生命周期和垃圾回收机制。
- [并发模型以及事件循环](/zh-CN/docs/Web/JavaScript/EventLoop)
  - : JavaScript 具有基于“事件循环”的并发模型。

## 参考

浏览完整的 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)文档。

- [标准对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
  - : 例如 {{jsxref("Array")}}、{{jsxref("Boolean")}}、{{jsxref("Date")}}、{{jsxref("Error")}}、{{jsxref("Function")}}、{{jsxref("JSON")}}、{{jsxref("Math")}}、{{jsxref("Number")}}、{{jsxref("Object")}}、{{jsxref("RegExp")}}、{{jsxref("String")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}} 、{{jsxref("WeakSet")}} 等标准内置对象。
- [表达式和运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)
  - : 运算符的作用{{jsxref("Operators/instanceof", "instanceof")}}、{{jsxref("Operators/typeof", "typeof")}}、{{jsxref("Operators/new", "new")}}、{{jsxref("Operators/this", "this")}}，[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)，以及其他运算符。
- [语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements)
  - : 了解 {{jsxref("Statements/do...while", "do-while")}}、{{jsxref("Statements/for...in", "for-in")}}、{{jsxref("Statements/for...of", "for-of")}}、{{jsxref("Statements/try...catch", "try-catch")}}、{{jsxref("Statements/let", "let")}}、{{jsxref("Statements/var", "var")}}、{{jsxref("Statements/const", "const")}}、{{jsxref("Statements/if...else", "if-else")}}、{{jsxref("Statements/switch", "switch")}} 以及其他语句和关键字的作用。
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
  - : 学习如何使用 JavaScript 函数来开发你的应用。
- [类](/zh-CN/docs/Web/JavaScript/Reference/Classes)
  - : JavaScript 类是进行面向对象编程最合适的方式。
