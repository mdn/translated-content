---
title: 介绍
slug: Web/JavaScript/Guide/Introduction
---

{{jsSidebar("JavaScript 指南")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

本章节介绍了 JavaScript，并且讨论了它的一些基本概念。

## 你应该已经掌握哪些知识？

我们假设你已经掌握了以下基础技能：

- 对互联网和万维网（{{Glossary("WWW")}}）有基本的认识。
- 熟悉超文本标记语言（{{Glossary("HTML")}}）。
- 一些编程经验。如果您初识编程，请先试着看看主页列出的有关 [JavaScript](/zh-CN/docs/Web/JavaScript) 的教程。

## 去哪里获取有关 JavaScript 的信息？

MDN 上的 JavaScript 文档包括以下内容：

- [认识 Web](/zh-CN/Learn) 为初学者提供信息，并介绍一些关于编程和互联网的基本概念。
- [JavaScript 入门](/zh-CN/docs/Web/JavaScript/Guide) （即本教程）提供 JavaScript 这门语言及其目标的概述。
- [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference) 提供关于 JavaScript 的详细参考资料。

如果你刚开始学习 JavaScript，请详细阅读 [学习区（Learning area）](/zh-CN/Learn) 和 [JavaScript 入门](/zh-CN/docs/Web/JavaScript/Guide) 的文章。如果你已经掌握了 JavaScript 基础知识，你可以通过 [JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference) 来了解更多关于单个（individual）对象和语句的细节。

## 什么是 JavaScript?

JavaScript 是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）。另外还有高级的服务端 Javascript 版本，例如 Node.js，它可以让你在网页上添加更多功能，不仅仅是下载文件（例如在多台电脑之间的协同合作）。在宿主环境（例如 web 浏览器）中，JavaScript 能够通过其所连接的环境提供的编程接口进行控制。

JavaScript 内置了一些对象的标准库，比如数组（`Array`），日期（`Date`），数学（`Math`）和一套核心语句，包括运算符、流程控制符以及声明方式等。JavaScript 的核心部分可以通过添加对象来扩展语言以适应不同用途；例如：

- 客户端的 JavaScript 通过提供对象，控制浏览器及其文档对象模型（DOM），来扩展语言核心。例如：客户端的拓展代码允许应用程序将元素放在某个 HTML 表单中，并且支持响应用户事件，比如鼠标点击、表单提交和页面导航。
- 服务端的 JavaScript 则通过提供有关在服务器上运行 JavaScript 的对象来可扩展语言核心。例如：服务端版本直接支持应用和数据库通信，提供应用不同调用间的信息连续性，或者在服务器上执行文件操作。

这意味着，在浏览器中，JavaScript 可以改变网页（DOM）的外观与样式。同样地，在服务器上，Node.js 中的 JavaScript 可以对浏览器上编写的代码发出的客户端请求做出响应。

## JavaScript 和 Java

JavaScript 和 Java 有一些共性但是在另一些方面有着根本性区别。JavaScript 语言类似 Java 但是并没有 Java 的静态类型和强类型检查特性。JavaScript 遵循了 Java 的表达式语法，命名规范以及基础流程控制，这也是 JavaScript 从 LiveScript 更名的原因。

与 Java 通过声明的方式构建类的编译时系统不同，JavaScript 采用基于少量的数据类型如数字、布尔、字符串值的运行时系统。JavaScript 拥有基于原型的对象模型提供的动态继承；也就是说，独立对象的继承是可以改变的。JavaScript 支持匿名函数。函数也可以作为对象的属性被当做宽松的类型方式执行。

与 Java 相比，Javascript 是一门形式自由的语言。你不必声明所有的变量，类和方法。你不必关心方法是否是公有、私有或者受保护的，也不需要实现接口。无需显式指定变量、参数、方法返回值的数据类型。

Java 是基于类的编程语言，设计的初衷就是为了确保快速执行和类型安全。类型安全，举个例子，你不能将一个 Java 整数变量转化为一个对象引用，或者由 Java 字节码访问专有存储器。Java 基于类的模型，意味着程序包含专有的类及其方法。Java 的类继承和强类型要求紧耦合的对象层级结构。这些要求使得 Java 编程比 JavaScript 要复杂的多。

相比之下，JavaScript 传承了 HyperTalk 和 dBASE 语句精简、动态类型等精髓，这些脚本语言为更多开发者提供了一种语法简单、内置功能强大以及用最小需求创建对象的编程工具。

| JavaScript                                                                         | Java                                                                                   |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 面向对象。不区分对象类型。通过原型机制继承，任何对象的属性和方法均可以被动态添加。 | 基于类系统。分为类和实例，通过类层级的定义实现继承。不能动态增加对象或类的属性或方法。 |
| 变量类型不需要提前声明 (动态类型)。                                                | 变量类型必须提前声明 (静态类型)。                                                      |
| 不能直接自动写入硬盘。                                                             | 可以直接自动写入硬盘。                                                                 |

请查看章节 [对象模型的详情](/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model) 来了解更多 JavaScript 和 Java 的不同。

## JavaScript 和 ECMAScript 规范

JavaScript 的标准化组织是 [ECMA](http://www.ecma-international.org/) ——这个欧洲信息与通信系统标准化协会提供基于 Javascript 的标准化方案（ECMA 原先是欧洲计算机制造商协会的首字母缩写）。这种标准化版本的 JavaScript 被称作 ECMAScript，在所有支持该标准的应用中以相同的方式工作。公司可以使用开放标准语言来开发他们自己的 JavaScript 实现版本。ECMAScript 标准在 ECMA－262 规范中进行文档化。参照 [JavaScript 的新特性](/zh-CN/docs/Web/JavaScript/New_in_JavaScript) 以便学习更多关于不同版本的 JavaScript 和 ECMAScript 规范版本。

ECMA-262 标准也通过了 国际标准化组织（[ISO](http://www.iso.ch/)）的 ISO-16262。你可以[在这里](http://www.ecma-international.org/publications/standards/Ecma-262.htm)找到该规范文件。ECMAScript 规范并没有描述文档对象模型（[DOM](/zh-CN/docs/Web/API/Document_Object_Model)），该模型由 万维网联盟（[W3C](http://www.w3.org/)）制定。DOM 定义了 HTML 文件对象被脚本操作的方法。为了更清楚地了解当使用 JavaScript 编程时用到的不同技术，请参阅 [JavaScript 技术概述](/zh-CN/docs/Web/JavaScript/JavaScript_technologies_overview)。

### JavaScript 文献 和 ECMAScript 规范

ECMAScript 规范是实现 ECMAScript 的一组需求;如果您想在 ECMAScript 实现或引擎 (如 Firefox 中的 SpiderMonkey 或 Chrome 中的 V8) 中实现符合标准的语言特性，那么它是非常有用的。

ECMAScript 文档不是用来帮助脚本程序员的;使用 JavaScript 文档获取关于编写脚本的信息。

ECMAScript 规范使用了 JavaScript 程序员可能不熟悉的术语和语法。尽管 ECMAScript 中对语言的描述可能有所不同，但语言本身保持不变。JavaScript 支持 ECMAScript 规范中列出的所有功能。

JavaScript 文档描述了适合 JavaScript 程序员的语言方面。

## JavaScript 入门

开始使用 JavaScript 很容易，你只需要一个现代 Web 浏览器。这篇教程包含了一些只在最新版本的火狐浏览器上才有的功能，所以建议大家使用最新版本的火狐浏览器。

火狐浏览器内置的 Web 控制台非常适合学习 JavaScript,Web 控制台包含两个输入模式——单行模式、多行模式。

### 单行模式

[Web 控制台](/zh-CN/docs//Tools/Web_Console) 不仅可以展示当前已加载页面的信息，还包含一个可以在当前页面执行 Javascript 表达式的 [命令行。](/zh-CN/docs/Tools/Web_Console#The_command_line_interpreter)

在火狐浏览器菜单栏的“工具" => "浏览器工具" => "Web 开发者工具"( 在 Windows 和 Linux 上<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> ，Mac 上<kbd>Cmd</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>)，选择"Web 开发者工具栏"的控制台选项卡，它会如期出现在浏览器窗口的底部。如图，最下一行就是可以执行输入的命令行，面板上可以显示执行结果：

![](2019-04-04_00-15-29.png)

控制台的工作方式与 eval 完全相同：返回最后输入的表达式。为了简单起见，可以想象每次输入到控制台的东西实际上都被 console.log 所包围。

```js
console.log(eval("3 + 5"));
```

### 多行模式

Web 控制台的单行模式非常适合用来测试单个的 JavaScript 表达式，对于复杂的 JavaScript 表达式或者一定规模的代码块就显得力不从心了。这正是[多行模式](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode)要解决的！

### Hello world

让我们用 Web 控制台的多行模式来写一个“Hello World"程序吧！JavaScript code:

```js
(function () {
  "use strict";
  function greetMe(yourName) {
    alert("Hello " + yourName);
  }

  greetMe("World");
})();
```

输入完成后，按下<kbd>Cmd</kbd>+<kbd>Enter</kbd>或者<kbd>Ctrl</kbd>+<kbd>Enter</kbd>(或者单击运行按钮) 就可以在浏览器中看到执行结果了！

在接下来的章节里，我们将向你介绍 JavaScript 的语法以及语言特性，届时你将可以使用它编写更加复杂的程序。

但是现在请记住，始终将 `(function(){"use strict";` 添加到你的代码之前，始终将`})();`添加到你的代码之后。[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)和[IIFE](/zh-CN/docs/Glossary/IIFE)这两篇文章详细解释了它们的作用。现在关于它们的作用你只要知道以下两点：

1. 防止 JavaScript 的语义影响初学者
2. 防止控制台中的代码片段之间发生意料之外的交互

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
