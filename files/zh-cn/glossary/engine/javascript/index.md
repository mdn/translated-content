---
title: JavaScript 引擎
slug: Glossary/Engine/JavaScript
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

**JavaScript 引擎**是解析和执行 {{glossary("JavaScript")}} 代码的解释器。现代 JavaScript 引擎使用即时编译（JIT）将 JavaScript 代码转换为可由计算机处理器执行的机器码。JavaScript 引擎通常由 Web {{glossary("browser", "浏览器")}}开发和使用，用于运行客户端代码，也可用于如 {{glossary("Node.js")}} 这样的服务端环境。

在浏览器中，JavaScript 引擎通过{{glossary("DOM", "文档对象模型")}}和 {{glossary("WebIDL", "Web IDL")}} 绑定与渲染引擎协同工作。一些 JavaScript 引擎还可以在与常规 JavaScript 代码相同的沙箱中执行 {{glossary("WebAssembly")}} 代码。

不要将 JavaScript 引擎与{{glossary("engine/rendering", "渲染引擎")}}混淆，后者也是浏览器的重要组成部分。

常见的 JavaScript 引擎包括：

- [V8](https://v8.dev/)
- [SpiderMonkey](https://spidermonkey.dev/)
- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)

## 参见

- 维基百科上的 [JavaScript 引擎](https://zh.wikipedia.org/wiki/JavaScript引擎)
- [JavaScript 实现](/zh-CN/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#有哪些_javascript_的实现？)
- 相关术语：
  - {{glossary("Engine", "引擎")}}
  - {{glossary("JavaScript")}}
  - {{glossary("WebAssembly")}}
  - {{glossary("Browser", "浏览器")}}
  - {{glossary("Node.js")}}
