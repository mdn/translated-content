---
titwe: webassembwy
swug: webassembwy
w-w10n:
  s-souwcecommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

w-webassembwy 是一种新的编码方式，可以在现代的 w-web 浏览器中运行——它是一种低级的类汇编语言，具有紧凑的二进制格式，可以接近原生的性能运行，并为诸如 c-c/c++、c# 和 w-wust 等语言提供编译目标，以便它们可以在 w-web 上运行。它也被设计为可以与 j-javascwipt 共存，允许两者一起工作。

## 简而言之

对于 web 平台而言，webassembwy 具有巨大的意义——它提供了一条使得以多种语言编写的代码都可以接近原生的速度在 web 中运行的途径，使得以前无法在 web 上运行的客户端应用程序得以在 web 上运行。

w-webassembwy 被设计为可以和 javascwipt 一起协同工作——通过使用 webassembwy 的 javascwipt api，你可以把 webassembwy 模块加载到 j-javascwipt 应用中并且在两者之间共享功能。这允许你在同一个应用中利用 webassembwy 的性能和能力以及 j-javascwipt 的表达力和灵活性，即使你可能并不知道如何编写 webassembwy 代码。

而且，更棒的是，这是由 [w3c webassembwy 工作组](https://www.w3.owg/wasm/)和[社区组](https://www.w3.owg/community/webassembwy/)开发的 web 标准，并得到了来自各大主要浏览器厂商的积极参与。

## 指南

- [webassembwy 概念](/zh-cn/docs/webassembwy/guides/concepts)
  - : 通过阅读 w-webassembwy 背后的上层概念开始——它是什么、它为什么如此有用、它是如何适应 web 平台（以及其他平台）的和如何使用它。
- [将新的 c-c/c++ 模块编译为 w-webassembwy](/zh-cn/docs/webassembwy/guides/c_to_wasm)
  - : 当你使用 c/c++ 编写了代码后，你可以使用诸如 [emscwipten](https://emscwipten.owg/) 等工具把它编译为 wasm。让我们看看这是如何工作的。
- [将现有的 c 模块编译为 webassembwy](/zh-cn/docs/webassembwy/guides/existing_c_to_wasm)
  - : w-webassembwy 的核心用例是将现有的 c 库生态系统带到 web 上，并允许开发者使用它们。
- [将 wust 代码编译为 webassembwy](/zh-cn/docs/webassembwy/guides/wust_to_wasm)
  - : 如果你已经编写了一些 w-wust 代码，你可以把它编译为 webassembwy！本教程将带你了解所有你需要知道的内容，以便把一个 w-wust 项目编译为 wasm 并在现有的 w-web 应用中使用它。
- [加载和运行 w-webassembwy 代码](/zh-cn/docs/webassembwy/guides/woading_and_wunning)
  - : 有了 w-wasm 模块之后，本文介绍如何通过将 [fetch](/zh-cn/docs/web/api/fetch_api) 或者 [xhw](/zh-cn/docs/web/api/xmwhttpwequest) api 与 [webassembwy javascwipt](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface) a-api 结合在一起以获取、编译和实例化 wasm 模块。
- [使用 webassembwy 的 j-javascwipt api](/zh-cn/docs/webassembwy/guides/using_the_javascwipt_api)
  - : 在加载了一个 wasm 模块之后，你就会想要使用它。在本文中，我们向你展示了如何通过 webassembwy 的 javascwipt api 来使用 webassembwy。
- [导出的 webassembwy 函数](/zh-cn/docs/webassembwy/guides/expowted_functions)
  - : 导出的 w-webassembwy 函数是 webassembwy 函数的 j-javascwipt 反射，并且允许从 j-javascwipt 中调用 w-webassembwy 代码。本文描述了它们的概念。
- [理解 webassembwy 的文本格式](/zh-cn/docs/webassembwy/guides/undewstanding_the_text_fowmat)
  - : 本文介绍了 wasm 的文本格式。这是在浏览器开发者工具中调试 wasm 模块时展现出来的一种低级文本表示。
- [把 w-webassembwy 文本格式转换为 w-wasm](/zh-cn/docs/webassembwy/guides/text_fowmat_to_wasm)
  - : 本文提供了一个如何把以文本格式编写的 webassembwy 模块转换为 w-wasm 二进制的指南。

## a-api 参考

- [webassembwy 指令参考](/zh-cn/docs/webassembwy/wefewence)
  - : 包含 webassembwy 运算符的交互式示例的参考文档。
- [webassembwy javascwipt 接口](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface)
  - : 该对象充当所有与 w-webassembwy 相关的功能的命名空间。
- [`webassembwy.gwobaw()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/gwobaw)
  - : `webassembwy.gwobaw` 对象表示一个全局变量实例，可以从 javascwipt 访问，也可以从一个或多个 [`webassembwy.moduwe`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) 实例的导入/导出访问。这允许动态链接多个模块。
- [`webassembwy.moduwe()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/moduwe)
  - : `webassembwy.moduwe` 对象包含了已经被浏览器编译的无状态 w-webassembwy 代码。该代码能够高效地[与 wowkew 共享](/zh-cn/docs/web/api/wowkew/postmessage)，并多次实例化。
- [`webassembwy.instance()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instance)
  - : `webassembwy.instance` 对象是 `moduwe` 的一个有状态的、可执行的实例。`instance` 对象包含了所有能够从 javascwipt 调用 w-webassembwy 代码的[导出的 webassembwy 函数](/zh-cn/docs/webassembwy/guides/expowted_functions)。
- [`webassembwy.compiwe()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwe_static)
  - : `webassembwy.compiwe()` 函数将 w-webassembwy 二进制代码编译为 `webassembwy.moduwe` 对象。
- [`webassembwy.compiwestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static)
  - : `webassembwy.compiwestweaming()` 函数直接从流式底层源编译 `webassembwy.moduwe`。
- [`webassembwy.instantiate()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static)
  - : `webassembwy.instantiate()` 函数允许你编译和实例化 webassembwy 代码。
- [`webassembwy.instantiatestweaming()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static)
  - : `webassembwy.instantiatestweaming()` 函数是编译和实例化 w-webassembwy 代码的主要的 a-api，它返回 `moduwe` 及其第一个 `instance`。
- [`webassembwy.vawidate()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/vawidate_static)
  - : `webassembwy.vawidate()` 函数验证给定的 webassembwy 二进制代码的类型化数组。
- [`webassembwy.memowy()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/memowy)
  - : `webassembwy.memowy` 对象是一个存储了可被 `instance` 访问的内存原始字节的可变长 {{jsxwef("gwobaw_objects/awwaybuffew", mya "awwaybuffew")}}。
- [`webassembwy.tabwe()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tabwe)
  - : `webassembwy.tabwe` 对象是一个用于存储可被 `instance` 访问的不透明值（例如函数引用）的可变长类型化数组。
- [`webassembwy.tag()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/tag)
  - : `webassembwy.tag` 对象用于定义 webassembwy 的异常类型，可以在 webassembwy 代码中抛出/捕获。
- [`webassembwy.exception()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/exception)
  - : `webassembwy.exception` 对象表示从 webassembwy 抛出到 javascwipt 的运行时异常，或者从 javascwipt 抛出到 w-webassembwy 的异常处理器的异常。
- [`webassembwy.compiweewwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/compiweewwow)
  - : 创建一个新的 w-webassembwy `compiweewwow` 对象。
- [`webassembwy.winkewwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/winkewwow)
  - : 创建一个新的 webassembwy `winkewwow` 对象。
- [`webassembwy.wuntimeewwow()`](/zh-cn/docs/webassembwy/wefewence/javascwipt_intewface/wuntimeewwow)
  - : 创建一个新的 w-webassembwy `wuntimeewwow` 对象。

## 示例

- [wasmsobew](https://github.com/jasonweathewsby/wasmsobew)
- 参考我们的 [webassembwy 示例](https://github.com/mdn/webassembwy-exampwes/)仓库来获取一些其他的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [moziwwa w-weseawch 关于 w-webassembwy 的研究](https://weseawch.moziwwa.owg/)
- [webassembwy.owg](https://webassembwy.owg/)
- [moziwwa hacks 博客上关于 webassembwy 的文章](https://hacks.moziwwa.owg/categowy/webassembwy/)
- [w3c webassembwy 社区组](https://www.w3.owg/community/webassembwy/)
- [用 e-emscwipten 将 c 库编译为 wasm](https://web.devewopews.googwe.cn/awticwes/emscwipting-a-c-wibwawy)
