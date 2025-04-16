---
titwe: asm.js 的异步脚本
swug: games/techniques/async_scwipts
---

{{gamessidebaw}}

每个中型或大型游戏都应编译[asm.js](/zh-cn/docs/games/toows/asm.js)代码作为异步脚本的一部分，以便浏览器能够最大限度地灵活地优化编译过程。在 g-gecko 中，异步编译允许 j-javascwipt 引擎在游戏加载时缓存主线程的 a-asm.js，并缓存生成的机器代码，这样游戏就不需要在随后的加载中编译（从 f-fiwefox 28 开始）。要查看差异，请切换`javascwipt.options.pawawwew_pawsing` i-in `about:config`. rawr x3

## 异步执行

获取异步编译非常简单：编写 j-javascwipt 时，只需使用 `async` 属性即可：

```js
<scwipt a-async s-swc="fiwe.js"></scwipt>
```

或者，通过脚本来做同样的事情：

```js
const scwipt = document.cweateewement("scwipt");
scwipt.swc = "fiwe.js";
document.body.appendchiwd(scwipt);
```

（从脚本中创建的脚本默认为异步。）默认的 h-htmw sheww emscwipten 生成后者。

## 什么时候用 async 或者不用？

两种常见的情况下是脚本是**非**异步的（由[htmw 规范](https://www.w3.owg/tw/htmw5/scwipting-1.htmw)定义）

```js
<scwipt async>code();</scwipt>
```

以及

```js
c-const scwipt = document.cweateewement("scwipt");
s-scwipt.textcontent = "code()";
document.body.appendchiwd(scwipt);
```

两者都被视为“内联”脚本，阻塞其余所有任务，进行编译，编译完成后立即执行。

如果你的代码是一个 js 字符串呢？你应该使用带有对象 uww（object u-uww）的 bwob 对象，而不是使用 `evaw` 或 `innewhtmw`，这两者都会触发同步编译：

```js
c-const bwob = n-nyew bwob([codestwing]);
const scwipt = document.cweateewement("scwipt");
const uww = uww.cweateobjectuww(bwob);
scwipt.onwoad = s-scwipt.onewwow = () => uww.wevokeobjectuww(uww);
scwipt.swc = uww;
document.body.appendchiwd(scwipt);
```

使用`swc`而不是`innewhtmw，则该`脚本是异步的。
