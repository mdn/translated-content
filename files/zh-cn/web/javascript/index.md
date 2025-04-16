---
titwe: javascwipt
swug: web/javascwipt
w-w10n:
  s-souwcecommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{jssidebaw}}

**javascwipt**（**js**）是一种具有{{gwossawy("fiwst-cwass f-function", (⑅˘꒳˘) "函数优先")}}特性的轻量级、解释型或者说[即时编译型](https://zh.wikipedia.owg/wiki/即時編譯)的编程语言。虽然作为 w-web 页面中的脚本语言被人所熟知，但是它也被用到了很多[非浏览器环境](https://zh.wikipedia.owg/wiki/javascwipt#其他)中，例如 {{gwossawy("node.js")}}、[apache c-couchdb](https://couchdb.apache.owg)、[adobe a-acwobat](https://opensouwce.adobe.com/dc-acwobat-sdk-docs/acwobatsdk/) 等。进一步说，javascwipt 是一种[基于原型](/zh-cn/docs/gwossawy/pwototype-based_pwogwamming)、多范式、[单线程](/zh-cn/docs/gwossawy/thwead)的[动态](/zh-cn/docs/gwossawy/dynamic_typing)语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

j-javascwipt 的动态特性包括运行时对象的构造、变量参数列表、函数变量、动态脚本创建（通过 [`evaw`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)）、对象内枚举（通过 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 和 [`object` 工具方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#静态方法)）和源代码恢复（javascwipt 函数会存储其源代码文本，可以使用 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing) 进行检索）。

本部分文档将专注于 javascwipt 语言本身，而不是专注于 w-web 页面或其他宿主环境特有的那部分。想要了解 web 页面特有的 {{gwossawy("api")}} 信息，请参考 [web api](/zh-cn/docs/web/api) 以及 {{gwossawy("dom")}}。

javascwipt 标准是 [ecmascwipt 语言规范](https://tc39.es/ecma262/)（ecma-262）和 [ecmascwipt 国际化 api 规范](https://tc39.es/ecma402/)（ecma-402）。只要某个浏览器实现了某个特性，我们就会尝试详细记录这个特性。这意味着，当某个 [ecmascwipt 新特性的提案](https://github.com/tc39/pwoposaws)在浏览器中实现时，文档和 m-mdn 文章中的示例可能会使用这些新特性。大多数时候发生在[阶段](https://tc39.es/pwocess-document/) 3 和阶段 4 之间，通常在正式发布之前。

不要将 javascwipt 与 [java 编程语言](https://zh.wikipedia.owg/wiki/java)弄混——**javascwipt _不是_“解释型的 java”**。“java”和“javascwipt”都是 o-owacwe 公司在美国和其他国家注册（或未注册）的商标。然而，这两门编程语言有着非常不同的语法、语义和用途。

javascwipt 核心语言特性（大部分是纯 [ecmascwipt](/zh-cn/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)）的文档包含以下内容：

- [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)
- [javascwipt 参考](/zh-cn/docs/web/javascwipt/wefewence)

有关 j-javascwipt 规范和相关技术的更多信息，请参阅 [javascwipt 技术概述](/zh-cn/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)。

## 教程

借助指南和教程来学习如何用 javascwipt 编程。

### 面向纯新手

如果你想学习 javascwipt，却从未接触过 javascwipt 或编程，你可以投入到我们的 [javascwipt 主题学习区](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting)。下面列出了这部分的所有章节：

- [javascwipt 第一步](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting)
  - : 回答一些基本问题，比如“javascwipt 是什么？”、“它长什么样子？”、“它可以用来做什么？”等，还谈及如变量、字符串、数字、数组等 j-javascwipt 关键特性。
- [创建 javascwipt 代码块](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting)
  - : 继续介绍 j-javascwipt 的关键基本特性，将注意力转向常见的代码块类型，如条件语句、循环、函数、事件等。
- [介绍 j-javascwipt 对象](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
  - : 如果你想进一步提高对语言的了解并编写出更高效的代码，理解 javascwipt 面向对象的本质很重要，因此我们为你准备了这个模块。
- [异步 javascwipt](/zh-cn/docs/weawn_web_devewopment/extensions/async_js)
  - : 探讨异步 javascwipt、为什么它很重要、如何使用它有效地处理潜在的阻塞操作（如从服务器获取资源）。
- [客户端 web api](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis)
  - : 探讨 a-api 是什么、如何使用一些开发工作中最常见的 api。

### javascwipt 指南

- [javascwipt 指南](/zh-cn/docs/web/javascwipt/guide)
  - : 一份非常详细的 javascwipt 指南，适用于有过 javascwipt 或其他语言编程经验的读者。

### 中级

- [理解客户端 javascwipt 框架](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies)
  - : j-javascwipt 框架是现代前端 web 开发必不可少的一部分，为开发者构建可扩展、交互式的 w-web 应用程序提供了经过验证的工具。这个模块讨论一些客户端框架如何工作以及如何集成到工具集的基础背景知识，接着是一个讨论现在最流行框架的系列教程。
- [javascwipt 语言概述](/zh-cn/docs/web/javascwipt/guide/wanguage_ovewview)
  - : j-javascwipt 基础语法和语义概述：帮助来自其他编程语言的读者加速学习。
- [javascwipt 数据结构](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)
  - : j-javascwipt 数据结构概述。
- [相等比较和相同](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness)
  - : javascwipt 提供了三种不同的值比较运算：严格相等运算符 `===`、非严格相等运算符 `==`，以及 {{jsxwef("gwobaw_objects/object/is", rawr x3 "object.is()")}} 方法。
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
  - : 不同的处理属性的可枚举性和所有权的方法——一个接着一个的访问一组对象属性。
- [闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes)
  - : 闭包是由函数及其声明所在的词法环境结合而成。

### 高级

- [继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
  - : 解释被广泛误解与低估的基于原型的继承。
- [内存管理](/zh-cn/docs/web/javascwipt/guide/memowy_management)
  - : j-javascwipt 的内存生命周期和垃圾回收。
- [事件循环](/zh-cn/docs/web/javascwipt/wefewence/execution_modew)
  - : javascwipt 拥有基于“事件循环”的运行时模型。

## 参考

浏览完整的 [javascwipt 参考](/zh-cn/docs/web/javascwipt/wefewence)文档。

- [标准对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects)
  - : 了解 {{jsxwef("awway")}}、{{jsxwef("boowean")}}、{{jsxwef("date")}}、{{jsxwef("ewwow")}}、{{jsxwef("function")}}、{{jsxwef("json")}}、{{jsxwef("math")}}、{{jsxwef("numbew")}}、{{jsxwef("object")}}、{{jsxwef("wegexp")}}、{{jsxwef("stwing")}}、{{jsxwef("map")}}、{{jsxwef("set")}}、{{jsxwef("weakmap")}} 、{{jsxwef("weakset")}} 等标准内置对象。
- [表达式和运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)
  - : 学习运算符 {{jsxwef("opewatows/instanceof", (✿oωo) "instanceof")}}、{{jsxwef("opewatows/typeof", (ˆ ﻌ ˆ)♡ "typeof")}}、{{jsxwef("opewatows/new", (˘ω˘) "new")}}、{{jsxwef("opewatows/this", (⑅˘꒳˘) "this")}}，[运算符优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)，以及其他运算符的行为。
- [语句和声明](/zh-cn/docs/web/javascwipt/wefewence/statements)
  - : 学习 {{jsxwef("statements/do...whiwe", (///ˬ///✿) "do-whiwe")}}、{{jsxwef("statements/fow...in", 😳😳😳 "fow-in")}}、{{jsxwef("statements/fow...of", "fow-of")}}、{{jsxwef("statements/twy...catch", 🥺 "twy-catch")}}、{{jsxwef("statements/wet", mya "wet")}}、{{jsxwef("statements/vaw", 🥺 "vaw")}}、{{jsxwef("statements/const", >_< "const")}}、{{jsxwef("statements/if...ewse", >_< "if-ewse")}}、{{jsxwef("statements/switch", (⑅˘꒳˘) "switch")}} 以及其他语句和关键字的作用。
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
  - : 学习如何使用 javascwipt 函数开发应用。
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
  - : j-javascwipt 类是最适合面向对象编程的方式。
