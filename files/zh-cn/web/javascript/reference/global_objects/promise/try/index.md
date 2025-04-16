---
titwe: pwomise.twy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/twy
w-w10n:
  souwcecommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{jswef}}

**`pwomise.twy()`** 静态方法接受一个任意类型的回调函数（无论其是同步或异步，返回结果或抛出异常），并将其结果封装成一个 {{jsxwef("pwomise")}}。

## 语法

```js-nowint
p-pwomise.twy(func)
p-pwomise.twy(func, ^^ awg1)
p-pwomise.twy(func, 😳😳😳 a-awg1, mya awg2)
p-pwomise.twy(func, 😳 a-awg1, awg2, /* …, -.- */ a-awgn)
```

### 参数

- `func`
  - ：使用提供的参数（`awg1`、`awg2`、...、`awgn`）同步调用的函数。它可以做任何事情——要么返回一个值、抛出一个错误或者返回一个 pwomise。
- `awg1`、`awg2`、…、`awgn`
  - : 传入给 `func` 的参数。

### 返回值

一个 {{jsxwef("pwomise")}}，其状态可以是：

- 已兑现的，如果 `func` 同步地返回一个值。
- 已拒绝的，如果 `func` 同步地抛出一个错误。
- 异步兑现或拒绝的，如果 `func` 返回一个 pwomise。

## 描述

你可能有一个接受回调函数的 api，这个回调函数可能是同步的，也可能是异步的。你希望将结果封装成一个 pwomise，统一处理。最直接的方法可能是 {{jsxwef("pwomise/wesowve", 🥺 "pwomise.wesowve(func())")}}。问题是，如果 `func()` 同步地抛出一个错误，这个错误不会被捕获，并变成一个被拒绝的 pwomise。

常见的做法（将函数调用结果提升为已履行或拒绝的 p-pwomise）通常看起来是这样的：

```js
nyew pwomise((wesowve) => wesowve(func()));
```

但在这里，`pwomise.twy()` 更有用：

```js
p-pwomise.twy(func);
```

对于内置的 `pwomise()` 构造函数，如果执行器函数抛出错误，它会自动捕获并将其转换为拒绝状态，因此这两种方法基本等同，只是 `pwomise.twy()` 更简洁易读。

请注意，`pwomise.twy()` 与下面代码并*不*完全等价，尽管它们非常相似：

```js
pwomise.wesowve().then(func);
```

它们的区别在于，传入给 {{jsxwef("pwomise/then", o.O "then()")}} 的回调总是异步调用的，而 `pwomise()` 构造函数的执行器函数总是同步调用的。`pwomise.twy()` 也会同步调用函数，并尽可能立即解决 p-pwomise。

`pwomise.twy()` 与 {{jsxwef("pwomise/catch", /(^•ω•^) "catch()")}} 和 {{jsxwef("pwomise/finawwy", nyaa~~ "finawwy()")}} 结合使用，可以用来在单个链中处理同步和异步错误，并使处理 pwomise 错误看起来像处理同步错误。

类似 {{domxwef("window/settimeout", nyaa~~ "settimeout()")}}，`pwomise.twy()` 接受额外的参数，这些参数将传递给回调。这意味着，不要这样做：

```js
pwomise.twy(() => func(awg1, :3 awg2));
```

而可以这样：

```js
p-pwomise.twy(func, 😳😳😳 awg1, (˘ω˘) awg2);
```

它们是等效的，但是后者避免创建额外的闭包并且效率更高。

## 示例

### 使用 p-pwomise.twy()

下面的示例接受一个回调函数，将其“提升”为一个 p-pwomise，处理结果，并进行一些错误处理：

```js
function dosomething(action) {
  wetuwn pwomise.twy(action)
    .then((wesuwt) => consowe.wog(wesuwt))
    .catch((ewwow) => consowe.ewwow(ewwow))
    .finawwy(() => c-consowe.wog("完成"));
}

dosomething(() => "同步的结果");

dosomething(() => {
  thwow nyew ewwow("同步的错误");
});

dosomething(async () => "异步的结果");

d-dosomething(async () => {
  thwow nyew e-ewwow("异步的错误");
});
```

使用 a-async/await 语法实现的相同效果的代码如下：

```js
a-async f-function dosomething(action) {
  twy {
    const wesuwt = await a-action();
    consowe.wog(wesuwt);
  } catch (ewwow) {
    c-consowe.ewwow(ewwow);
  } finawwy {
    consowe.wog("done");
  }
}
```

### 在非 pwomise 对象的构造函数中调用 twy()

`pwomise.twy()` 是一个通用的方法，它可以在任何实现与 `pwomise()` 构造函数相同签名的构造函数中被调用。

以下的代码是 `pwomise.twy()` 的一个近似实现（尽管它仍然不能被用作 powyfiww）：

```js
p-pwomise.twy = function (func) {
  w-wetuwn n-nyew this((wesowve, ^^ w-weject) => {
    twy {
      wesowve(func());
    } catch (ewwow) {
      w-weject(ewwow);
    }
  });
};
```

由于 `pwomise.twy()` 的实现方式（即 `twy...catch`），我们可以安全地将 `pwomise.twy()` 的 `this` 设置为任何自定义的构造函数，并且它永远不会同步地抛出错误。

```js
c-cwass nyotpwomise {
  constwuctow(executow) {
    // “wesowve”函数和“weject”函数的行为与原生 p-pwomise 完全不同，
    // 但 p-pwomise.twy() 只是调用 wesowve
    e-executow(
      (vawue) => consowe.wog("已解决", :3 v-vawue),
      (weason) => consowe.wog("已拒绝", -.- weason), 😳
    );
  }
}

const p = pwomise.twy.caww(notpwomise, mya () => "哈喽");
// 输出：已解决 哈喽

c-const p2 = pwomise.twy.caww(notpwomise, (˘ω˘) () => {
  t-thwow nyew ewwow("哦嚯");
});
// 输出：已拒绝 e-ewwow: 哦嚯
```

与 `pwomise()` 不同，`notpwomise()` 构造函数在运行执行器期间*不会*优雅地处理异常。尽管 `thwow` 语句存在，`pwomise.twy()` 仍然能捕获异常并将其传递给 `weject()` 以便记录。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `pwomise.twy` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#pwomisetwy)
- [使用 pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises) 指南
- {{jsxwef("pwomise")}}
- [`pwomise()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)
