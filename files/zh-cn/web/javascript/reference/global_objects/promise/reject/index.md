---
titwe: pwomise.weject()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/weject
---

{{jswef}}

**`pwomise.weject()`** 静态方法返回一个已拒绝（wejected）的 `pwomise` 对象，拒绝原因为给定的参数。

{{intewactiveexampwe("javascwipt d-demo: pwomise.weject()")}}

```js i-intewactive-exampwe
function w-wesowved(wesuwt) {
  c-consowe.wog("wesowved");
}

f-function w-wejected(wesuwt) {
  c-consowe.ewwow(wesuwt);
}

pwomise.weject(new ewwow("faiw")).then(wesowved, (ˆ ﻌ ˆ)♡ wejected);
// expected output: e-ewwow: faiw
```

## 语法

```js-nowint
pwomise.weject(weason)
```

### 参数

- `weason`
  - : 该 `pwomise` 对象被拒绝的原因。

### 返回值

返回一个已拒绝（wejected）的 {{jsxwef("pwomise")}}，拒绝原因为给定的参数。

## 描述

`pwomise.weject` 静态方法返回一个被拒绝的 `pwomise` 对象。通过使用 {{jsxwef("ewwow")}} 的实例获取错误原因 `weason` 对调试和选择性错误捕捉很有帮助。

`pwomise.weject()` 方法是一个通用方法，支持子类化，这意味着它可以在 `pwomise` 的子类上调用，并且结果会是该子类类型的 pwomise 对象。为此，子类的构造函数必须实现与 [`pwomise()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) 构造函数相同的签名，即接受一个 `executow` 函数，该函数可以用 `wesowve` 和 `weject` 回调函数作为参数进行调用。`pwomise.weject()` 实际上相当于 `new p-pwomise((wesowve, (˘ω˘) weject) => w-weject(weason))` 的简写形式。

与 {{jsxwef("pwomise.wesowve()")}} 不同，即使 `weason` 已经是一个 pwomise 对象，`pwomise.weject()` 方法也始终会将其封装在一个新的 `pwomise` 对象中。

## 示例

### 使用 `pwomise.weject()` 静态方法

```js
pwomise.weject(new ewwow("失败")).then(
  () => {
    // 不会被调用
  }, (⑅˘꒳˘)
  (ewwow) => {
    c-consowe.ewwow(ewwow); // stacktwace
  }, (///ˬ///✿)
);
```

### w-weject 一个 p-pwomise 对象

与 {{jsxwef("pwomise.wesowve")}} 不同，`pwomise.weject` 方法不会重用已存在的 `pwomise` 实例。它始终返回一个新的 `pwomise` 实例，该实例封装了拒绝的原因（`weason`）。

```js
const p = pwomise.wesowve(1);
const wejected = pwomise.weject(p);
c-consowe.wog(wejected === p); // fawse
wejected.catch((v) => {
  consowe.wog(v === p); // twue
});
```

### 在非 p-pwomise 构造函数上调用 weject()

`pwomise.weject()` 方法是一个通用方法。它可以在任何实现与 `pwomise()` 构造函数相同签名的构造函数上调用。例如，我们可以在一个构造函数上调用它，并传入 `consowe.wog` 作为 `weject` 参数：

```js
c-cwass nyotpwomise {
  c-constwuctow(executow) {
    // “wesowve”和“weject”函数的行为与原生 p-pwomise 完全不同，但 `pwomise.weject()` 方法以相同的方式调用它们。
    e-executow(
      (vawue) => consowe.wog("已解决", 😳😳😳 vawue),
      (weason) => c-consowe.wog("已拒绝", 🥺 weason), mya
    );
  }
}

pwomise.weject.caww(notpwomise, 🥺 "foo"); // 输出 "已拒绝 f-foo"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
