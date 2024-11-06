---
title: 全局对象
slug: Glossary/Global_object
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

一个全局对象是一个永远存在于{{glossary("global scope", "全局作用域")}}的{{glossary("object", "对象")}}。

在 JavaScript 中，总是会定义一个全局对象。在 Web 浏览器中，当脚本使用 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 关键字定义全局变量时，它们被创建为全局对象的成员（但是，在 {{Glossary("Node.js")}} 中并非如此）。全局对象的{{Glossary("interface", "接口")}}取决于脚本运行的执行上下文。例如：

- 在 Web 浏览器中，脚本未明确启动为后台任务的任何代码都将具有一个 {{domxref("Window")}} 作为其全局对象。这是 Web 上绝大多数 JavaScript 代码的情况。
- 在 {{domxref("Worker")}} 中运行的代码具有一个 {{domxref("WorkerGlobalScope")}} 对象作为其全局对象。
- 在 {{Glossary("Node.js")}} 下运行的脚本具有一个名为 global 的对象作为其全局对象。

[`globalThis`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 全局属性允许无论当前环境如何都能访问全局对象。

在 JavaScript 中，使用 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 语句和[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)创建的顶级属性都是全局对象的属性。另一方面，{{jsxref("Statements/let", "let")}} 和 {{jsxref("Statements/const", "const")}} 声明永远不会创建全局对象的属性。

全局对象的属性会自动添加到{{glossary("global scope", "全局作用域")}}中。

在 JavaScript 中，全局对象始终保留对自身的引用：

```js
console.log(globalThis === globalThis.globalThis); // true（在任何地方）
console.log(window === window.window); // true（在浏览器中）
console.log(self === self.self); // true（在浏览器中或在 Web Worker 中）
console.log(frames === frames.frames); // true (在浏览器中)
console.log(global === global.global); // true（在 Node.js 中）
```

## 参见

- [MDN Web 文档术语](/zh-CN/docs/Glossary)

  - {{glossary("global scope", "全局作用域")}}
  - {{glossary("object", "对象")}}

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
