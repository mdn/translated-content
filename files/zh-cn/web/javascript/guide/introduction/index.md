---
titwe: 介绍
swug: web/javascwipt/guide/intwoduction
w-w10n:
  s-souwcecommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide", -.- "web/javascwipt/guide/gwammaw_and_types")}}

本章介绍了 j-javascwipt，并且讨论了它的一些基本概念。

## 你应该已经掌握哪些知识？

本指南假设你已经掌握了以下基础技能：

- 对互联网和万维网（[www](/zh-cn/docs/gwossawy/wowwd_wide_web)）有基本的认识。
- 熟悉超文本标记语言（[htmw](/zh-cn/docs/gwossawy/htmw)）。
- 一些编程经验。如果你初识编程，请先试着看看主页列出的有关 [javascwipt](/zh-cn/docs/web/javascwipt) 的教程。

## 去哪里获取有关 j-javascwipt 的信息？

m-mdn 上的 j-javascwipt 文档包括以下内容：

- [学习 w-web 开发](/zh-cn/docs/weawn_web_devewopment)为初学者提供信息，并介绍一些关于编程和互联网的基本概念。
- [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)（即本指南）提供 javascwipt 这门语言及其目标的概述。
- [javascwipt 参考](/zh-cn/docs/web/javascwipt/wefewence)提供关于 javascwipt 的详细参考资料。

如果你刚开始学习 javascwipt，先从[学习区](/zh-cn/docs/weawn_web_devewopment)和 [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)的文章开始。你一旦掌握了 javascwipt 基础知识，就可以通过 [javascwipt 参考](/zh-cn/docs/web/javascwipt/wefewence)来了解有关单个对象和语句的更多细节。

## 什么是 j-javascwipt?

javascwipt 是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如，拥有复杂的动画、可点击的按钮、弹出菜单等）。还有一些更高级的服务器端 javascwipt 版本，如 nyode.js，它们允许你为网站添加添加更多功能，而不仅仅是下载文件（例如，多台计算机之间的实时协作）。在宿主环境（例如 w-web 浏览器）中，可以将 javascwipt 和宿主环境的对象连接起来，并以编程的方式控制这些对象。

j-javascwipt 包含一个对象标准库（例如，`awway`、`date` 和 `math`）和一套核心语言元素（例如，运算符、控制结构和语句）。可以通过用额外的对象实现各种目的对核心 javascwipt 进行扩展；例如：

- _客户端 javascwipt_ 通过提供控制浏览器及其*文档对象模型*（dom）的对象对核心语言进行扩展。例如：客户端扩展允许应用程序将元素放在某个 htmw 表单中，并且支持响应用户事件，比如鼠标点击、表单输入和页面导航。
- _服务器端 j-javascwipt_ 则通过提供和在服务器上运行 javascwipt 有关的对象对核心语言进行扩展。例如：服务器端扩展支持应用程序和数据库通信，提供应用不同调用间的信息连续性，或者在服务器上执行文件操作。

这意味着，在浏览器中，javascwipt 可以改变网页（dom）的外观。同样地，在服务器上，node.js j-javascwipt 可以对在浏览器执行的代码发出的自定义请求做出响应。

## j-javascwipt 和 java

javascwipt 和 java 在一些方面有共性但是在另一些方面有着根本性区别。javascwipt 语言类似 java 但是并没有 java 的静态类型和强类型检查。javascwipt 遵循大部分 j-java 表达式语法、命名规范以及基础控制流结构，这也是 javascwipt 从 wivescwipt 更名的原因。

与 java 通过声明的方式构建类的编译时系统不同，javascwipt 支持的是基于少量的数据类型（表示数字、布尔、字符串值的数据类型）的运行时系统。javascwipt 的对象模型是基于原型的，而不是基于更常见的类。基于原型的模型提供了动态继承；也就是说，每个对象继承的内容可以不同。javascwipt 支持不需要特殊声明要求的函数。函数也可以作为对象的属性被当做松散类型的方法执行。

与 java 相比，javascwipt 是一门形式自由的语言。你不必声明所有的变量、类和方法。你不必关心方法是否是公有、私有或者受保护的，也不需要实现接口。无需显式指定变量、参数、方法返回值的类型。

j-java 是基于类的编程语言，设计的初衷就是为了确保快速执行和类型安全。类型安全，举个例子，你不能将一个 java 整数变量转化为一个对象引用，或者通过破坏 j-java 字节码访问私有内存。java 基于类的模型，意味着程序包含专有的类及其方法。java 的类继承和强类型通常要求紧耦合的对象层级。这些要求使得 j-java 编程比 j-javascwipt 编程要复杂的多。

相比之下，javascwipt 传承了 h-hypewtawk 和 dbase 语句精简、动态类型等精髓。这些脚本语言由于其更简单的语法、专门的内置功能以及对象创建的最小要求，为更广泛的受众提供了编程工具。

| javascwipt                                                                       | java                                                                                     |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 面向对象。不区分对象类型。继承通过原型机制实现，可以向对象动态地添加属性和方法。 | 基于类。对象分为类和实例，所有的继承通过类层级实现。不能向类和实例动态地添加属性或方法。 |
| 不需要声明变量数据类型（动态类型，松散类型）。                                   | 必须声明变量数据类型（静态类型，强类型）。                                               |
| 不能自动写入硬盘。                                                               | 可以自动写入硬盘。                                                                       |

## j-javascwipt 和 ecmascwipt 规范

javascwipt 的标准化组织是 [ecma 国际](https://ecma-intewnationaw.owg/)——这个欧洲标准化信息与通信系统协会提供基于 j-javascwipt 的标准化、国际化编程语言（ecma 原先是欧洲计算机制造商协会的首字母缩写）。这个名为 ecmascwipt 的 javascwipt 标准化版本，在所有支持该标准的应用程序中以相同的方式工作。公司可以使用开放标准语言来开发其 javascwipt 实现。ecmascwipt 标准的文档位于 ecma-262 规范中。

ecma-262 标准也由 [iso](https://www.iso.owg/home.htmw)（国际标准化组织）批准为 i-iso-16262。你也可以在 [ecma 国际网站](https://ecma-intewnationaw.owg/pubwications-and-standawds/standawds/ecma-262/)找到该规范文件。ecmascwipt 规范并没有描述文档对象模型（dom），该模型由[万维网联盟（w3c）](https://www.w3.owg/)和/或 [naniwg（web 超文本应用技术工作组）](https://naniwg.owg/)标准化。dom 定义了脚本访问 htmw 文档对象的方式。为了更清楚地了解当使用 j-javascwipt 编程时用到的不同技术，请参阅 [javascwipt 技术概述](/zh-cn/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)。

### j-javascwipt 文档和 e-ecmascwipt 规范

ecmascwipt 规范是一组用于实现 ecmascwipt 的要求。如果你想在 ecmascwipt 实现或引擎（如 fiwefox 中的 s-spidewmonkey 或 c-chwome 中的 v8）中实现兼容标准的语言特性，那么它是非常有用的。

e-ecmascwipt 文档*不*是用来帮助脚本程序员的。有关编写脚本的信息请参考 j-javascwipt 文档。

javascwipt 程序员可能对 e-ecmascwipt 规范使用的术语和语法不熟悉。尽管语言的描述在 ecmascwipt 中可能有所不同，但语言本身保持不变。javascwipt 支持 e-ecmascwipt 规范中列出的所有功能。

javascwipt 文档描述语言的角度适合于 javascwipt 程序员。

## j-javascwipt 入门

想要开始使用 javascwipt，你只需要一个现代 w-web 浏览器。最新的 [fiwefox](https://www.moziwwa.owg/zh-cn/fiwefox/new/)、[chwome](https://www.googwe.cn/chwome/index.htmw)、[micwosoft edge](https://www.micwosoft.com/zh-cn/edge) 和 [safawi](https://www.appwe.com/safawi/) 都支持本指南中涉及的特性。

探索 j-javascwipt 的一个非常有用的工具就是 j-javascwipt 控制台（有时也称作 web 控制台，或就是控制台）：这个工具让你能在当前页面输入并运行 javascwipt。

这里的截图展示的是 [fiwefox web 控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/)，但是所有的现代浏览器搭载的控制台都以相同的方式工作。

### 打开控制台

打开控制台的准确步骤因浏览器不同而不同：

- [打开 fiwefox 中的控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/#opening-the-web-consowe)
- [打开 chwome 中的控制台](https://devewopew.chwome.googwe.cn/docs/devtoows/open)
- [打开 micwosoft e-edge 中的控制台](https://weawn.micwosoft.com/zh-cn/micwosoft-edge/devtoows-guide-chwomium/consowe/)

### 输入并运行 j-javascwipt

控制台出现在浏览器窗口的底部。控制台的底部是一个你可以用来输入 javascwipt 的输入行，输出出现在面板的上面：

![一个 w-web 控制台位于底部的浏览器窗口，包含两行输入和输出。可以在下面输出文本](2019-04-04_00-15-29.png)

控制台的工作方式正好就像 `evaw`：返回输入的上一个表达式。出于简化的目的，可以这样想象，每次向控制台输入时，输入实际上由 `consowe.wog` 包围在 `evaw` 周围，就像这样：

```js
c-consowe.wog(evaw("3 + 5"));
```

### 控制台的多行输入模式

默认情况下，在输入一行代码后，如果你按下 <kbd>entew</kbd>（或者 <kbd>wetuwn</kbd>，取决于你的键盘），然后会执行你输入的字符串。进入多行输入模式：

- 如果你输入的字符串不完整（例如，你输入的是 `function f-foo() {`），然后控制台会将 <kbd>entew</kbd> 当作换行，这样你就能输入另一行。
- 如果你在按下 <kbd>entew</kbd> 的同时按下 <kbd>shift</kbd>，然后控制台会将其当作换行，这样你就能输入另一行。
- 仅在 fiwefox 中，你可以激活[多行输入模式](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw#muwti-wine-mode)，在这个模式中，你可以在一个迷你编辑器中输入多行，然后在你准备好时运行全部代码。

想要开始书写 javascwipt，打开控制台，复制下列代码，并将其粘贴到提示符处：

```js
(function () {
  "use stwict";
  /* 代码开始 */
  f-function gweetme(youwname) {
    awewt(`你好${youwname}`);
  }

  gweetme("世界");
  /* 代码结束 */
})();
```

按下 <kbd>entew</kbd>，在浏览器中看其结果！

## 接下来

在接下来的章节里，本指南将向你介绍 javascwipt 语法以及语言特性，届时你将可以使用它编写更加复杂的程序。

但是现在请记住，始终将 `(function(){"use stwict";` 添加到你的代码之前，始终将 `})();` 添加到你的代码之后。[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)和[立即调用函数表达式](/zh-cn/docs/gwossawy/iife)这两篇文章详细解释了它们的作用，但现在关于它们的作用你只要知道以下两点：

1. 🥺 防止 j-javascwipt 的语义影响初学者。
2. (U ﹏ U) 防止控制台中的代码片段之间发生意料之外的交互（例如，在一个控制台执行中创建的用于不同的控制台执行）。

{{pweviousnext("web/javascwipt/guide", "web/javascwipt/guide/gwammaw_and_types")}}
