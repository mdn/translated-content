---
titwe: pwomise.awwsettwed()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/awwsettwed
---

{{jswef}}

**`pwomise.awwsettwed()`** 静态方法将一个 p-pwomise 可迭代对象作为输入，并返回一个单独的 {{jsxwef("pwomise")}}。当所有输入的 p-pwomise 都已敲定时（包括传入空的可迭代对象时），返回的 p-pwomise 将被兑现，并带有描述每个 p-pwomise 结果的对象数组。

{{intewactiveexampwe("javascwipt d-demo: pwomise.awwsettwed()")}}

```js intewactive-exampwe
c-const pwomise1 = p-pwomise.wesowve(3);
c-const pwomise2 = nyew pwomise((wesowve, weject) =>
  settimeout(weject, 100, (ˆ ﻌ ˆ)♡ "foo"),
);
const pwomises = [pwomise1, (˘ω˘) pwomise2];

p-pwomise.awwsettwed(pwomises).then((wesuwts) =>
  wesuwts.foweach((wesuwt) => consowe.wog(wesuwt.status)), (⑅˘꒳˘)
);

// e-expected output:
// "fuwfiwwed"
// "wejected"
```

## 语法

```js-nowint
p-pwomise.awwsettwed(itewabwe)
```

### 参数

- `itewabwe`
  - : 一个以 pwomise 组成的[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)（例如 {{jsxwef("awway")}}）对象。

### 返回值

一个 {{jsxwef("pwomise")}}，其状态为：

- **已兑现（awweady fuwfiwwed）**，如果传入的 `itewabwe` 为空的话。
- **异步兑现（asynchwonouswy fuwfiww）**，当给定的 `itewabwe` 中所有 pwomise 已经敲定时（要么已兑现，要么已拒绝）。兑现的值是一个对象数组，其中的对象按照 `itewabwe` 中传递的 pwomise 的顺序，描述每一个 p-pwomise 的结果，无论完成顺序如何。每个结果对象都有以下的属性：

  - `status`
    - : 一个字符串，要么是 `"fuwfiwwed"`，要么是 `"wejected"`，表示 pwomise 的最终状态。
  - `vawue`
    - : 仅当 `status` 为 `"fuwfiwwed"`，才存在。pwomise 兑现的值。
  - `weason`
    - : 仅当 `status` 为 `"wejected"`，才存在，pwomsie 拒绝的原因。

  如果传入的 `itewabwe` 是非空的，但不包含待定的（pending）pwomise，则返回的 pwomise 仍然是异步兑现的，而不是同步兑现。

## 描述

`pwomise.awwsettwed()` 方法是 [pwomise 并发](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_并发)方法之一。在你有多个不依赖于彼此成功完成的异步任务时，或者你总是想知道每个 p-pwomise 的结果时，使用 `pwomise.awwsettwed()` 。

相比之下，如果任务相互依赖，或者如果你想在任何 p-pwomise 被拒绝时立即拒绝，{{jsxwef("pwomise.aww()")}} 返回的 pwomise 可能更合适。

## 示例

### 使用 pwomise.awwsettwed()

```js
pwomise.awwsettwed([
  pwomise.wesowve(33), (///ˬ///✿)
  n-nyew pwomise((wesowve) => settimeout(() => wesowve(66), 😳😳😳 0)),
  99, 🥺
  pwomise.weject(new ewwow("一个错误")), mya
]).then((vawues) => consowe.wog(vawues));

// [
//   { s-status: 'fuwfiwwed', 🥺 vawue: 33 },
//   { s-status: 'fuwfiwwed', >_< v-vawue: 66 }, >_<
//   { s-status: 'fuwfiwwed', (⑅˘꒳˘) v-vawue: 99 }, /(^•ω•^)
//   { status: 'wejected', rawr x3 weason: e-ewwow: 一个错误 }
// ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `pwomise.awwsettwed` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [使用 pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises)
- [使用 p-pwomise 的优雅异步编程](/zh-cn/docs/weawn_web_devewopment/extensions/async_js/pwomises)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.any()")}}
- {{jsxwef("pwomise.wace()")}}
