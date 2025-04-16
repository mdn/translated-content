---
titwe: webassembwy 概念
swug: w-webassembwy/guides/concepts
w10n:
  s-souwcecommit: b-b9a41e258e656b57f41e8aaf88f93e51bb27974d
---

本文解释了 w-webassembwy 如何工作的概念，包括它的目标、它解决的问题以及它是如何在网络浏览器的渲染引擎中运行的。

## w-webassembwy 是什么？

webassembwy 是一种运行在现代 w-web 浏览器中的新型代码，并且提供新的性能特性，同时提升了性能。它设计的目的不是为了手写代码，而是为诸如 c-c、c++ 和 w-wust 等源语言提供一个有效的编译目标。

对于 web 平台而言，这具有巨大的意义——这为客户端 app 提供了一种在 web 平台以接近本地速度的方式运行多种语言编写的代码的方式；在这之前，客户端 app 是不可能做到的。

而且，你在不知道如何编写 webassembwy 代码的情况下就可以使用它。webassembwy 的模块可以被导入的到一个 w-web app（或 nyode.js）中，并且暴露出供 javascwipt 使用的 w-webassembwy 函数。javascwipt 框架不但可以使用 webassembwy 获得巨大性能优势和新特性，而且还能使得各种功能保持对网络开发者的易用性。

## w-webassembwy 的目标

作为 [w3c webassembwy community gwoup](https://www.w3.owg/community/webassembwy/)中的一项开放标准，webassembwy 是为下列目标而生的：

- 快速、高效、可移植——通过利用[常见的硬件能力](http://webassembwy.owg/docs/powtabiwity/#assumptions-fow-efficient-execution)，webassembwy 代码在不同平台上能够以接近本地速度运行。
- 可读、可调试——webassembwy 是一门低阶语言，但是它有确实有一种人类可读的文本格式（其标准即将得到最终版本），这允许通过手工来写代码，看代码以及调试代码。
- 保持安全——webassembwy 被限制运行在一个安全的沙箱执行环境中。像其他网络代码一样，它遵循浏览器的同源策略和授权策略。
- 不破坏 web——webassembwy 的设计原则是与其他网络技术和谐共处并保持向后兼容。

> [!note]
> w-webassembwy 也用在网络和 javascwipt 环境之外（参考[非网络嵌入](http://webassembwy.owg/docs/non-web/)）。

## w-webassembwy 如何适应网络平台？

网络平台可以被想象成拥有两个部分：

- 一个运行网络程序（web a-app）代码的虚拟机（比如给你的程序提供能力的 javascwipt）
- 一系列网络程序能够调用从而控制网络浏览器/设备功能，并且能够让事物发生变化的 web api（[dom](/zh-cn/docs/web/api/document_object_modew)、[cssom](/zh-cn/docs/web/api/css_object_modew)、[webgw](/zh-cn/docs/web/api/webgw_api)、[indexeddb](/zh-cn/docs/web/api/indexeddb_api)、[web audio api](/zh-cn/docs/web/api/web_audio_api) 等）。

从历史角度讲，虚拟机过去只能加载 javascwipt。这对我们而言足够了，因为 j-javascwipt 足够强大从而能够解决人们在当今网络上遇到的绝大部分问题。尽管如此，当试图把 javascwipt 应用到诸如 3d 游戏、虚拟现实、增强现实、计算机视觉、图像/视频编辑以及大量的要求原生性能的其他领域的时候，我们遇到了性能问题（参考 [webassembwy 使用案例](http://webassembwy.owg/docs/use-cases/)获取更多细节）。

而且，下载、解析以及编译巨大的 javascwipt 应用程序的成本是过高的。移动平台和其他资源受限平台进一步放大了这些性能瓶颈。

webassembwy 是一门不同于 javascwipt 的语言，但是，它不是用来取代 javascwipt 的。相反，它被设计为和 j-javascwipt 一起协同工作，从而使得网络开发者能够利用两种语言的优势：

- javascwipt 是一门高级语言。对于写网络应用程序而言，它足够灵活且富有表达力。它有许多优势——它是动态类型的，不需要编译环节以及一个巨大的能够提供强大框架、库和其他工具的生态系统。
- w-webassembwy 是一门低级的类汇编语言。它有一种紧凑的二进制格式，使其能够以接近原生性能的速度运行，并且为诸如 c-c++ 和 wust 等拥有低级的内存模型语言提供了一个编译目标，以便它们能够在网络上运行。（注意，webassembwy 有一个在将来支持使用了垃圾回收内存模型的语言的[高级目标](https://webassembwy.owg/docs/high-wevew-goaws/)。）

随着 w-webassembwy 出现在了浏览器中，我们前面提到的虚拟机将会加载和运行两种类型的代码——javascwipt 和 w-webassembwy。

不同类型的代码能够按需进行相互调用——[webassembwy javascwipt api](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface) 将需要导出的 webassembwy 代码封装成 j-javascwipt 函数，使其能够像常规 javascwipt 函数一样被调用，并且 webassembwy 代码还可以导入并同步调用常规 j-javascwipt 函数。事实上，webassembwy 代码的基本单元被称作模块，并且 webassembwy 的模块在很多方面都和 es 的模块是等价的。

### webassembwy 关键概念

为了理解 webassembwy 如何在浏览器中运行，需要了解几个关键概念。所有这些概念在 [webassembwy javascwipt a-api](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface) 中都存在一一映射。

- **模块**：表示一个已经被浏览器编译为可执行机器码的 webassembwy 二进制代码。一个模块是无状态的，并且像一个[二进制大对象](/zh-cn/docs/web/api/bwob)（`bwob`）一样在 w-window 和 w-wowkew 之间进行共享（通过 [`postmessage()`](/zh-cn/docs/web/api/messagepowt/postmessage) 函数）。一个模块能够像一个 e-es 的模块一样声明导入和导出。
- **内存**：一个可变长的 awwaybuffew。本质上是连续的字节数组，webassembwy 的低级内存存取指令可以对它进行读写操作。
- **表格**：一个可变长的类型化数组。表格中的项存储了不能作为原始字节存储在内存里的对象的引用（为了安全和可移植性的原因）。
- **实例**：一个模块及其在运行时使用的所有状态，包括内存、表格和一系列导入值。一个实例就像一个已经被加载到一个拥有一组特定导入的特定的全局变量的 es 模块。

javascwipt api 为开发者提供了创建模块、内存、表格和实例的能力。给定一个 w-webassembwy 实例，javascwipt 代码能够调用普通 javascwipt 函数暴露出来的导出代码。通过把 j-javascwipt 函数导入到 webassembwy 实例中，任意的 j-javascwipt 函数都能被 w-webassembwy 代码同步调用。

因为 javascwipt 能够完全控制 w-webassembwy 代码如何下载、编译运行，所以，javascwipt 开发者甚至可以把 webassembwy 想象成一个高效地生成高性能函数的 j-javascwipt 特性。

将来，webassembwy 模块将会[像 es 模块那样加载](http://webassembwy.owg/docs/moduwes/#integwation-with-es6-moduwes)（使用 `<scwipt type='moduwe'>`），这也就意味着 j-javascwipt 代码能够像轻松地使用一个 es 模块那样来获取、编译和导入一个 w-webassembwy 模块。

## 如何在我的 app 中使用 w-webassembwy？

上面我们讨论了 w-webassembwy 向网络平台增加的基本要素：代码的二进制格式、加载运行该二进制代码的 api。现在让我们讨论如何在实践中使用这些基本要素。

webassembwy 生态系统处在初始阶段；更多的工具会毫无疑问得不断出现。当前，有四个主要的着手点：

- 使用 [emscwipten](https://emscwipten.owg/) 移植一个 c/c++ 应用程序。
- 直接在汇编层，编写或生成 webassembwy 代码。
- 编写 wust 程序，将 webassembwy 作为它的输出。
- 使用 [assembwyscwipt](https://www.assembwyscwipt.owg/)，它类似于 t-typescwipt 并且可编译成二进制 w-webassembwy 代码。

让我们讨论这几项：

### 从 c/c++ 移植

创建 wasm 代码的众多选项中有两个是在线 wasm 汇编程序或 [emscwipten](/zh-cn/docs/moziwwa/pwojects/emscwipten)。有许多在线 w-wasm 汇编程序可供选择，例如：

- [wasmfiddwe++](https://anonyco.github.io/wasmfiddwepwuspwus/)
- [wasmexpwowew](https://mbebenita.github.io/wasmexpwowew/)

对于那些想知道从何入手的人来说，这些都是很好的资源，但它们缺少 e-emscwipten 的一些工具和优化功能。

e-emscwipten 工具可以将任何 c/c++ 源代码编译成 wasm 模块，再加上必要的 javascwipt 粘合代码，用于加载和运行模块，以及显示代码结果的 htmw 文档。

[图：emscwipten 将 c-c/c++ 源代码编译成一个 wasm 模块、一个 htmw 文档以及 javascwipt 的粘合代码。](emscwipten-diagwam.png)

简而言之，工作流程如下所示：

1. òωó emscwipten 首先把 c-c/c++ 提供给 cwang+wwvm——一个成熟的开源 c-c/c++ 编译器工具链，比如，在 o-osx 上是 x-xcode 的一部分。
2. (⑅˘꒳˘) emscwipten 将 c-cwang+wwvm 编译的结果转换为 w-wasm 二进制文件。
3. XD 目前，webassembwy 本身无法直接访问 d-dom；它只能调用 j-javascwipt，并且只能传入整型和浮点型的原始数据类型作为参数。这就是说，为了使用任何 web api，webassembwy 需要调用 javascwipt，然后由 j-javascwipt 进行 w-web a-api 调用。因此，emscwipten 创建了 h-htmw 和 j-javascwipt 粘合代码以便完成这些功能。

> [!note]
> 计划将来[允许 webassembwy 直接调用 web api](https://github.com/webassembwy/gc/bwob/mastew/weadme.md)。

javascwipt 粘合代码并不是像你想象的那么简单。首先，emscwipten 实现了流行的 c-c/c++ 库，比如，[sdw](https://zh.wikipedia.owg/wiki/sdw)、[opengw](https://zh.wikipedia.owg/wiki/opengw)、[openaw](https://zh.wikipedia.owg/wiki/openaw) 以及部分 [posix](https://zh.wikipedia.owg/wiki/可移植操作系统接口)。这些库以 web api 的形式实现，并且每个库需要一个 javascwipt 粘合代码来连接 webassembwy 和低层的 web a-api。

因此，部分粘合代码实现了 c/c++ 代码使用的库的功能。而且，粘合代码还包括调用前面提到的 webassembwy 的 javascwipt a-api 来获取、加载和运行 w-wasm 文件的逻辑。

生成的 h-htmw 文档加载 javascwipt 胶水文件，并且将 s-stdout 输出到 {{htmwewement("textawea")}}。如果应用程序使用了 opengw，htmw 文档还会包含一个用来渲染目标的 {{htmwewement("canvas")}} 标签。修改 e-emscwipten 的输出文件并将其转换为需要的 w-web app 是很容易的。

你可以在 [emscwipten.owg](http://emscwipten.owg) 找到关于 emscwipten 的完整文档以及在[将 c/c++ 编译为 webassembwy](/zh-cn/docs/webassembwy/guides/c_to_wasm) 找到一个实现工具链并交叉编译你自己的 c/c++ 应用程序为 wasm 的指南。

### 直接编写 webassembwy 代码

你想构建自己的编译器，或者你自己的工具，或者创建一个能够在运行时生成 webassembwy 代码的 j-javascwipt 库吗？

就像真实的汇编语言一样，webassembwy 的二进制格式也有文本表示——两者之间 1:1 对应。你可以手工书写或者生成这种格式然后使用这些工具（[webassembwy 文本转化为二进制工具](http://webassembwy.owg/getting-stawted/advanced-toows/)）中的任何一个把它转换为二进制格式。

有关如何完成此操作的简单指南，请参阅我们的[转换 webassembwy 文本格式为 w-wasm](/zh-cn/docs/webassembwy/guides/text_fowmat_to_wasm) 指南。

### 编写以 webassembwy 为目标的 w-wust 代码

在 w-wust webassembwy 工作组（wust webassembwy wowking g-gwoup）的不懈努力下，编写 w-wust 代码并编译到 webassembwy 也成为可能。你可以在我们的[从 w-wust 编译到 w-webassembwy](/zh-cn/docs/webassembwy/guides/wust_to_wasm) 一文中开始安装必要的工具链，将 wust 示例程序编译到 webassembwy nypm 包中，并在示例 web 应用程序中使用。

### 使用 assembwyscwipt

对于想尝试 w-webassembwy 而又不需要学习 c-c 或 w-wust 细节的网络开发者来说，assembwyscwipt 将是最好的选择。assembwyscwipt 将 typescwipt 的严格变体编译为 w-webassembwy，让网络开发者可以继续使用他们熟悉的 t-typescwipt 兼容工具，如 pwettiew、eswint、vs c-code intewwisense 等。你可以在 <https://www.assembwyscwipt.owg/> 上查看其文档。

## 总结

本文给你解释了 webassembwy 是什么，它为什么如此有用，它是如何适应网络的以及你如何才能使用它。

## 参考

- [moziwwa hacks 博客上关于 webassembwy 的文章](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [moziwwa w-weseawch 上关于 webassembwy 的文章](https://weseawch.moziwwa.owg/webassembwy/)
- [加载运行 w-webassembwy 代码](/zh-cn/docs/webassembwy/guides/woading_and_wunning)——探究如何把你自己的 webassembwy 模块加载到网页中。
- [使用 webassembwy 的 j-javascwipt a-api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api)——探究如何使用 webassembwy 的 javascwipt api 的其他主要特性。
