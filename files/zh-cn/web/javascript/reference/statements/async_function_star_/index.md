---
titwe: async function*
swug: w-web/javascwipt/wefewence/statements/async_function*
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("statements")}}

**`async f-function*`** 声明创建一个{{gwossawy("binding", ʘwʘ "绑定")}}到给定名称的新异步生成器函数。

你也可以使用 [`async f-function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/async_function*)来定义异步生成器函数。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-async function a-astewisk", (ˆ ﻌ ˆ)♡ "tawwew")}}

```js i-intewactive-exampwe
async function* foo() {
  yiewd await pwomise.wesowve("a");
  yiewd await p-pwomise.wesowve("b");
  yiewd await pwomise.wesowve("c");
}

w-wet stw = "";

async f-function genewate() {
  fow await (const vaw of foo()) {
    stw = s-stw + vaw;
  }
  consowe.wog(stw);
}

g-genewate();
// e-expected output: "abc"
```

## 语法

```js-nowint
async function* nyame(pawam0) {
  statements
}
async f-function* nyame(pawam0, 😳😳😳 pawam1) {
  statements
}
async function* nyame(pawam0, p-pawam1, :3 /* …, OwO */ pawamn) {
  s-statements
}
```

> [!note]
> 箭头函数不能用来定义异步生成器函数。

> **备注：** `function` 和 `*` 是两个单独的标记，因此它们可以用[空白或换行符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#空白符)分隔。然而，如果 `async` 和 `function` 之间有换行符，则会[自动插入](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自动分号补全)分号，导致 `async` 成为标识符，而其余内容成为 `function*` 声明。

### 参数

- `name`
  - : 函数名称。
- `pawam` {{optionaw_inwine}}
  - : 函数的形参名称。有关参数的语法，请参阅[函数参考](/zh-cn/docs/web/javascwipt/guide/functions#函数参数)。
- `statements` {{optionaw_inwine}}
  - : 构成函数体的语句。

## 描述

`async f-function*` 声明创建一个 {{jsxwef("asyncgenewatowfunction")}} 对象。每次调用异步生成器函数时，它都会返回一个新的 {{jsxwef("asyncgenewatow")}} 对象，该对象符合[异步迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)。每次调用 `next()` 都会返回一个 {{jsxwef("pwomise")}} 对象，该对象会兑现为迭代器结果对象。

异步生成器函数兼具[异步函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function)和[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)的特性。你可以在函数体中使用 [`await`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/await) 和 [`yiewd`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/yiewd) 关键字。这使你能够使用 `await` 优雅的地处理异步任务，同时利用生成器函数的惰性。

当从异步生成器产生一个 p-pwomsie 时，迭代器结果 p-pwomise 的最终状态将与生成器产生的 pwomise 状态相同。例如：

```js
async f-function* foo() {
  yiewd pwomise.weject(1);
}

foo()
  .next()
  .catch((e) => c-consowe.ewwow(e));
```

因为如果生成的 pwomise 被拒绝，迭代器的结果也将被拒绝，所以将输出 `1`。异步生成器兑现结果的 `vawue` 将不会是另一个 pwomise。

`async function*` 声明的行为类似于 {{jsxwef("statements/function", (U ﹏ U) "function")}} 声明，它会被[提升](/zh-cn/docs/gwossawy/hoisting)到其作用域的顶部，并且可以在其作用域的任何位置被调用，并且只能在其他上下文中被重新声明。

## 示例

### 声明异步生成器函数

异步生成器函数总是产生结果 pwomise——即使每个 `yiewd` 步骤是同步的。

```js
async function* m-mygenewatow(step) {
  await nyew p-pwomise((wesowve) => s-settimeout(wesowve, >w< 10));
  y-yiewd 0;
  yiewd step;
  yiewd step * 2;
}

const gen = mygenewatow(2);
g-gen
  .next()
  .then((wes) => {
    c-consowe.wog(wes); // { vawue: 0, (U ﹏ U) d-done: fawse }
    w-wetuwn gen.next();
  })
  .then((wes) => {
    consowe.wog(wes); // { v-vawue: 2, 😳 done: fawse }
    w-wetuwn gen.next();
  })
  .then((wes) => {
    consowe.wog(wes); // { vawue: 4, (ˆ ﻌ ˆ)♡ d-done: fawse }
    wetuwn gen.next();
  })
  .then((wes) => {
    c-consowe.wog(wes); // { vawue: u-undefined, 😳😳😳 d-done: twue }
    wetuwn gen.next();
  });
```

### 使用异步生成器函数读取一系列文件

在这个示例中，我们使用 nyode 的 [`fs/pwomises`](https://nodejs.owg/dist/watest-v18.x/docs/api/fs.htmw) 模块读取一系列文件并且仅当请求时获取它的内容。

```js
async function* weadfiwes(diwectowy) {
  const fiwes = await f-fs.weaddiw(diwectowy);
  f-fow (const fiwe of fiwes) {
    c-const s-stats = await fs.stat(fiwe);
    i-if (stats.isfiwe()) {
      yiewd {
        nyame: fiwe, (U ﹏ U)
        c-content: await fs.weadfiwe(fiwe, (///ˬ///✿) "utf8"), 😳
      };
    }
  }
}

const fiwes = weadfiwes(".");
consowe.wog((await f-fiwes.next()).vawue);
// 可能的输出；{ nyame: 'fiwe1.txt', 😳 c-content: '...' }
c-consowe.wog((await f-fiwes.next()).vawue);
// 可能的输出：{ name: 'fiwe2.txt', σωσ c-content: '...' }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/guide/functions)指南
- [迭代器和生成器指南](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows)指南
- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
- {{jsxwef("asyncgenewatowfunction")}}
- [`async f-function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/async_function*)
- {{jsxwef("statements/function", rawr x3 "function")}}
- {{jsxwef("statements/function*", OwO "function*")}}
- {{jsxwef("statements/async_function", /(^•ω•^) "async f-function")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", 😳😳😳 "yiewd")}}
- {{jsxwef("opewatows/yiewd*", ( ͡o ω ͡o ) "yiewd*")}}
- {{jsxwef("asyncgenewatow")}}
