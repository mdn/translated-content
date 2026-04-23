---
title: 介绍
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

本章介绍了 JavaScript，并且讨论了它的一些基本概念。

## 你应该已经掌握哪些知识？

本指南假设你已经掌握了以下基础技能：

- 对互联网和万维网（[WWW](/zh-CN/docs/Glossary/World_Wide_Web)）有基本的认识。
- 熟悉超文本标记语言（[HTML](/zh-CN/docs/Glossary/HTML)）。
- 一些编程经验。如果你初识编程，请先试着看看主页列出的有关 [JavaScript](/zh-CN/docs/Web/JavaScript) 的教程。

## 去哪里获取有关 JavaScript 的信息？

MDN 上的 JavaScript 文档包括以下内容：

- [学习 Web 开发](/zh-CN/docs/Learn_web_development)为初学者提供信息，并介绍一些关于编程和互联网的基本概念。
- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)（即本指南）提供 JavaScript 这门语言及其目标的概述。
- [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)提供关于 JavaScript 的详细参考资料。

如果你刚开始学习 JavaScript，先从[学习区](/zh-CN/docs/Learn_web_development)和 [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)的文章开始。你一旦掌握了 JavaScript 基础知识，就可以通过 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)来了解有关单个对象和语句的更多细节。

## 什么是 JavaScript?

JavaScript 是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如，拥有复杂的动画、可点击的按钮、弹出菜单等）。还有一些更高级的服务器端 JavaScript 版本，如 Node.js，它们允许你为网站添加添加更多功能，而不仅仅是下载文件（例如，多台计算机之间的实时协作）。在宿主环境（例如 Web 浏览器）中，可以将 JavaScript 和宿主环境的对象连接起来，并以编程的方式控制这些对象。

JavaScript 包含一个对象标准库（例如，`Array`、`Date` 和 `Math`）和一套核心语言元素（例如，运算符、控制结构和语句）。可以通过用额外的对象实现各种目的对核心 JavaScript 进行扩展；例如：

- _客户端 JavaScript_ 通过提供控制浏览器及其*文档对象模型*（DOM）的对象对核心语言进行扩展。例如：客户端扩展允许应用程序将元素放在某个 HTML 表单中，并且支持响应用户事件，比如鼠标点击、表单输入和页面导航。
- _服务器端 JavaScript_ 则通过提供和在服务器上运行 JavaScript 有关的对象对核心语言进行扩展。例如：服务器端扩展支持应用程序和数据库通信，提供应用不同调用间的信息连续性，或者在服务器上执行文件操作。

这意味着，在浏览器中，JavaScript 可以改变网页（DOM）的外观。同样地，在服务器上，Node.js JavaScript 可以对在浏览器执行的代码发出的自定义请求做出响应。

## JavaScript 和 Java

JavaScript 和 Java 在一些方面有共性但是在另一些方面有着根本性区别。JavaScript 语言类似 Java 但是并没有 Java 的静态类型和强类型检查。JavaScript 遵循大部分 Java 表达式语法、命名规范以及基础控制流结构，这也是 JavaScript 从 LiveScript 更名的原因。

与 Java 通过声明的方式构建类的编译时系统不同，JavaScript 支持的是基于少量的数据类型（表示数字、布尔、字符串值的数据类型）的运行时系统。JavaScript 的对象模型是基于原型的，而不是基于更常见的类。基于原型的模型提供了动态继承；也就是说，每个对象继承的内容可以不同。JavaScript 支持不需要特殊声明要求的函数。函数也可以作为对象的属性被当做松散类型的方法执行。

与 Java 相比，Javascript 是一门形式自由的语言。你不必声明所有的变量、类和方法。你不必关心方法是否是公有、私有或者受保护的，也不需要实现接口。无需显式指定变量、参数、方法返回值的类型。

Java 是基于类的编程语言，设计的初衷就是为了确保快速执行和类型安全。类型安全，举个例子，你不能将一个 Java 整数变量转化为一个对象引用，或者通过破坏 Java 字节码访问私有内存。Java 基于类的模型，意味着程序包含专有的类及其方法。Java 的类继承和强类型通常要求紧耦合的对象层级。这些要求使得 Java 编程比 JavaScript 编程要复杂的多。

相比之下，JavaScript 传承了 HyperTalk 和 dBASE 语句精简、动态类型等精髓。这些脚本语言由于其更简单的语法、专门的内置功能以及对象创建的最小要求，为更广泛的受众提供了编程工具。

| JavaScript                                                                       | Java                                                                                     |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 面向对象。不区分对象类型。继承通过原型机制实现，可以向对象动态地添加属性和方法。 | 基于类。对象分为类和实例，所有的继承通过类层级实现。不能向类和实例动态地添加属性或方法。 |
| 不需要声明变量数据类型（动态类型，松散类型）。                                   | 必须声明变量数据类型（静态类型，强类型）。                                               |
| 不能自动写入硬盘。                                                               | 可以自动写入硬盘。                                                                       |

## JavaScript 和 ECMAScript 规范

JavaScript 的标准化组织是 [Ecma 国际](https://ecma-international.org/)——这个欧洲标准化信息与通信系统协会提供基于 Javascript 的标准化、国际化编程语言（ECMA 原先是欧洲计算机制造商协会的首字母缩写）。这个名为 ECMAScript 的 JavaScript 标准化版本，在所有支持该标准的应用程序中以相同的方式工作。公司可以使用开放标准语言来开发其 JavaScript 实现。ECMAScript 标准的文档位于 ECMA-262 规范中。

ECMA-262 标准也由 [ISO](https://www.iso.org/home.html)（国际标准化组织）批准为 ISO-16262。你也可以在 [Ecma 国际网站](https://ecma-international.org/publications-and-standards/standards/ecma-262/)找到该规范文件。ECMAScript 规范并没有描述文档对象模型（DOM），该模型由[万维网联盟（W3C）](https://www.w3.org/)和/或 [WHATWG（Web 超文本应用技术工作组）](https://whatwg.org/)标准化。DOM 定义了脚本访问 HTML 文档对象的方式。为了更清楚地了解当使用 JavaScript 编程时用到的不同技术，请参阅 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)。

### JavaScript 文档和 ECMAScript 规范

ECMAScript 规范是一组用于实现 ECMAScript 的要求。如果你想在 ECMAScript 实现或引擎（如 Firefox 中的 SpiderMonkey 或 Chrome 中的 V8）中实现兼容标准的语言特性，那么它是非常有用的。

ECMAScript 文档*不*是用来帮助脚本程序员的。有关编写脚本的信息请参考 JavaScript 文档。

JavaScript 程序员可能对 ECMAScript 规范使用的术语和语法不熟悉。尽管语言的描述在 ECMAScript 中可能有所不同，但语言本身保持不变。JavaScript 支持 ECMAScript 规范中列出的所有功能。

JavaScript 文档描述语言的角度适合于 JavaScript 程序员。

## JavaScript 入门

想要开始使用 JavaScript，你只需要一个现代 Web 浏览器。最新的 [Firefox](https://www.mozilla.org/zh-CN/firefox/new/)、[Chrome](https://www.google.cn/chrome/index.html)、[Microsoft Edge](https://www.microsoft.com/zh-cn/edge) 和 [Safari](https://www.apple.com/safari/) 都支持本指南中涉及的特性。

探索 JavaScript 的一个非常有用的工具就是 JavaScript 控制台（有时也称作 Web 控制台，或就是控制台）：这个工具让你能在当前页面输入并运行 JavaScript。

这里的截图展示的是 [Firefox Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/)，但是所有的现代浏览器搭载的控制台都以相同的方式工作。

### 打开控制台

打开控制台的准确步骤因浏览器不同而不同：

- [打开 Firefox 中的控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [打开 Chrome 中的控制台](https://developer.chrome.google.cn/docs/devtools/open)
- [打开 Microsoft Edge 中的控制台](https://learn.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/console/)

### 输入并运行 JavaScript

控制台出现在浏览器窗口的底部。控制台的底部是一个你可以用来输入 JavaScript 的输入行，输出出现在面板的上面：

![一个 Web 控制台位于底部的浏览器窗口，包含两行输入和输出。可以在下面输出文本](2019-04-04_00-15-29.png)

控制台的工作方式正好就像 `eval`：返回输入的上一个表达式。出于简化的目的，可以这样想象，每次向控制台输入时，输入实际上由 `console.log` 包围在 `eval` 周围，就像这样：

```js
console.log(eval("3 + 5"));
```

### 控制台的多行输入模式

默认情况下，在输入一行代码后，如果你按下 <kbd>Enter</kbd>（或者 <kbd>Return</kbd>，取决于你的键盘），然后会执行你输入的字符串。进入多行输入模式：

- 如果你输入的字符串不完整（例如，你输入的是 `function foo() {`），然后控制台会将 <kbd>Enter</kbd> 当作换行，这样你就能输入另一行。
- 如果你在按下 <kbd>Enter</kbd> 的同时按下 <kbd>Shift</kbd>，然后控制台会将其当作换行，这样你就能输入另一行。
- 仅在 Firefox 中，你可以激活[多行输入模式](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode)，在这个模式中，你可以在一个迷你编辑器中输入多行，然后在你准备好时运行全部代码。

想要开始书写 JavaScript，打开控制台，复制下列代码，并将其粘贴到提示符处：

```js
(function () {
  "use strict";
  /* 代码开始 */
  function greetMe(yourName) {
    alert(`你好${yourName}`);
  }

  greetMe("世界");
  /* 代码结束 */
})();
```

按下 <kbd>Enter</kbd>，在浏览器中看其结果！

## 接下来

在接下来的章节里，本指南将向你介绍 JavaScript 语法以及语言特性，届时你将可以使用它编写更加复杂的程序。

但是现在请记住，始终将 `(function(){"use strict";` 添加到你的代码之前，始终将 `})();` 添加到你的代码之后。[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)和[立即调用函数表达式](/zh-CN/docs/Glossary/IIFE)这两篇文章详细解释了它们的作用，但现在关于它们的作用你只要知道以下两点：

1. 防止 JavaScript 的语义影响初学者。
2. 防止控制台中的代码片段之间发生意料之外的交互（例如，在一个控制台执行中创建的用于不同的控制台执行）。

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
