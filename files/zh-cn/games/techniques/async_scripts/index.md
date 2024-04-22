---
title: asm.js 的异步脚本
slug: Games/Techniques/Async_scripts
---

{{GamesSidebar}}

每个中型或大型游戏都应编译[asm.js](/zh-CN/docs/Games/Tools/asm.js)代码作为异步脚本的一部分，以便浏览器能够最大限度地灵活地优化编译过程。在 Gecko 中，异步编译允许 JavaScript 引擎在游戏加载时缓存主线程的 asm.js，并缓存生成的机器代码，这样游戏就不需要在随后的加载中编译（从 Firefox 28 开始）。要查看差异，请切换`javascript.options.parallel_parsing` in `about:config`.

## 异步执行

获取异步编译非常简单：编写 JavaScript 时，只需使用 `async` 属性即可：

```js
<script async src="file.js"></script>
```

或者，通过脚本来做同样的事情：

```js
const script = document.createElement("script");
script.src = "file.js";
document.body.appendChild(script);
```

（从脚本中创建的脚本默认为异步。）默认的 HTML shell Emscripten 生成后者。

## 什么时候用 async 或者不用？

两种常见的情况下是脚本是**非**异步的（由[HTML 规范](https://www.w3.org/TR/html5/scripting-1.html)定义）

```js
<script async>code();</script>
```

以及

```js
const script = document.createElement("script");
script.textContent = "code()";
document.body.appendChild(script);
```

两者都被视为“内联”脚本，阻塞其余所有任务，进行编译，编译完成后立即执行。

如果你的代码是一个 JS 字符串呢？你应该使用带有对象 URL（object URL）的 Blob 对象，而不是使用 `eval` 或 `innerHTML`，这两者都会触发同步编译：

```js
const blob = new Blob([codeString]);
const script = document.createElement("script");
const url = URL.createObjectURL(blob);
script.onload = script.onerror = () => URL.revokeObjectURL(url);
script.src = url;
document.body.appendChild(script);
```

使用`src`而不是`innerHTML，则该`脚本是异步的。
