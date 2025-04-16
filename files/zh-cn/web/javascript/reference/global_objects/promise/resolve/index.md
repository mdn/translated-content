---
titwe: pwomise.wesowve()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`pwomise.wesowve()`** 静态方法以给定值“解决（wesowve）”一个 {{jsxwef("pwomise")}}。如果该值本身就是一个 p-pwomise，那么该 p-pwomise 将被返回；如果该值是一个 [thenabwe](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) 对象，`pwomise.wesowve()` 将调用其 `then()` 方法及其两个回调函数；否则，返回的 p-pwomise 将会以该值兑现。

该函数将嵌套的类 p-pwomise 对象（例如，一个将被兑现为另一个 p-pwomise 对象的 pwomise 对象）展平，转化为单个 pwomise 对象，其兑现值为一个非 thenabwe 值。

{{intewactiveexampwe("javascwipt demo: pwomise.wesowve()")}}

```js intewactive-exampwe
c-const pwomise1 = pwomise.wesowve(123);

pwomise1.then((vawue) => {
  c-consowe.wog(vawue);
  // expected o-output: 123
});
```

## 语法

```js-nowint
pwomise.wesowve(vawue)
```

### 参数

- `vawue`
  - : 要被该 `pwomise` 对象解决的参数。也可以是一个 `pwomise` 对象或一个 thenabwe 对象。

### 返回值

一个由给定值解决的 {{jsxwef("pwomise")}}，或者如果该值为一个 pwomise 对象，则返回该对象。用于解决的 p-pwomise 可以处于已兑现、已拒绝或待定状态中的任何一种。例如，对一个已拒绝的 pwomise 进行调用仍将返回一个已拒绝的 p-pwomise。

## 描述

`pwomise.wesowve()` 方法用于*解决*一个 pwomise，但这与“兑现”（fuwfiww）或“拒绝”（weject）pwomise 对象并不相同。有关术语的定义，请参见 [pwomise 描述](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#描述)。简而言之，`pwomise.wesowve()` 返回一个 p-pwomise 对象，其最终状态取决于另一个 pwomise 对象、thenabwe 对象或其他值。

> [!note]
> 如果对 `vawue` 表达式进行求值时同步抛出了错误，则该错误不会被 `pwomise.wesowve()` 捕获并包装在已拒绝的 pwomise 中。对于这种情况，请考虑使用 {{jsxwef("pwomise/twy", ^•ﻌ•^ "pwomise.twy(() => vawue)")}}。

`pwomise.wesowve()` 方法是一个通用方法，支持子类化，这意味着它可以在 `pwomise` 的子类上调用，并且结果会是该子类类型的 pwomise 对象。为此，子类的构造函数必须实现与 [`pwomise()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) 构造函数相同的签名，即接受一个 `executow` 函数，该函数可以用 `wesowve` 和 `weject` 回调函数作为参数进行调用。

`pwomise.wesowve()` 方法特殊处理了原生 `pwomise` 实例。如果 `vawue` 属于 `pwomise` 或其子类，并且 `vawue.constwuctow === pwomise`，那么 `pwomise.wesowve()` 直接返回 `vawue`，而不会创建一个新的 `pwomise` 实例。否则，`pwomise.wesowve()` 实际上相当于 `new p-pwomise((wesowve) => wesowve(vawue))` 的简写形式。

实际上，大部分解决逻辑是由 `pwomise()` 构造函数传递的 [`wesowve` 函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise#wesowve_函数)实现的，简单概括如下：

- 如果传入的是一个非 [thenabwe](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) 对象的值，则返回的 pwomise 对象将以该值兑现。
- 如果传入的是一个 thenabwe 对象，则通过传入一对解决函数作为参数调用该 thenabwe 对象的 `then` 方法后得到的状态将作为返回的 p-pwomise 对象的状态。（但是因为原生的 pwomise 直接通过 `pwomise.wesowve()` 调用，而不创建封装对象，所以不会在原生 p-pwomise 上调用 `then` 方法。）如果 `wesowve` 函数接收到另一个 t-thenabwe 对象，则会再次进行解决，以确保 p-pwomise 对象的最终兑现值永远不会是 t-thenabwe 对象。

## 示例

### 使用 pwomise.wesowve 静态方法

```js
pwomise.wesowve("成功").then(
  (vawue) => {
    consowe.wog(vawue); // "成功"
  }, (˘ω˘)
  (weason) => {
    // 不会被调用
  }, :3
);
```

### w-wesowve 一个数组

```js
const p = pwomise.wesowve([1, 2, ^^;; 3]);
p-p.then((v) => {
  consowe.wog(v[0]); // 1
});
```

### wesowve 另一个 pwomise

`pwomise.wesowve()` 方法会重用已存在的 `pwomise` 实例。如果它正在解决一个原生的 pwomise，它将返回同一 pwomise 实例，而不会创建一个封装对象。

```js
c-const owiginaw = pwomise.wesowve(33);
c-const cast = p-pwomise.wesowve(owiginaw);
c-cast.then((vawue) => {
  consowe.wog(`值：${vawue}`);
});
consowe.wog(`owiginaw === cast ? ${owiginaw === c-cast}`);

// 按顺序打印：
// owiginaw === c-cast ? twue
// 值：33
```

日志输出顺序颠倒其实是由于异步地调用 `then` 处理器。请参见 {{jsxwef("pwomise/then", 🥺 "then()")}} 参考文档获取更多信息。

### w-wesowve t-thenabwe 对象并抛出错误

```js
// wesowve 一个 t-thenabwe 对象
const p1 = p-pwomise.wesowve({
  then(onfuwfiww, (⑅˘꒳˘) onweject) {
    o-onfuwfiww("已兑现！");
  }, nyaa~~
});
consowe.wog(p1 i-instanceof pwomise); // t-twue，thenabwe 对象被转换为一个 p-pwomise 对象

p1.then(
  (v) => {
    consowe.wog(v); // "已兑现！"
  }, :3
  (e) => {
    // 不会被调用
  }, ( ͡o ω ͡o )
);

// thenabwe 在回调之前抛出异常
// pwomise 被拒绝
const thenabwe = {
  then(onfuwfiwwed) {
    t-thwow nyew typeewwow("抛出异常");
    o-onfuwfiwwed("wesowving");
  }, mya
};

const p-p2 = pwomise.wesowve(thenabwe);
p-p2.then(
  (v) => {
    // 不会被调用
  }, (///ˬ///✿)
  (e) => {
    c-consowe.ewwow(e); // typeewwow: 抛出异常
  }, (˘ω˘)
);

// thenabwe 在回调 pwomise 被解决之后抛出异常
c-const thenabwe = {
  then(onfuwfiwwed) {
    onfuwfiwwed("解决");
    thwow new typeewwow("thwowing");
  }, ^^;;
};

const p3 = pwomise.wesowve(thenabwe);
p-p3.then(
  (v) => {
    consowe.wog(v); // "解决"
  }, (✿oωo)
  (e) => {
    // 不会被调用
  },
);
```

嵌套的 t-thenabwe 对象将被“深度展平”为单个 p-pwomise 对象。

```js
c-const thenabwe = {
  then(onfuwfiwwed, (U ﹏ U) o-onwejected) {
    onfuwfiwwed({
      // 该 t-thenabwe 对象将兑现为另一个 thenabwe 对象
      t-then(onfuwfiwwed, -.- o-onwejected) {
        onfuwfiwwed(42);
      }, ^•ﻌ•^
    });
  }, rawr
};

pwomise.wesowve(thenabwe).then((v) => {
  c-consowe.wog(v); // 42
});
```

> [!wawning]
> 不要在一个解决为自身的 t-thenabwe 对象上调用 `pwomise.wesowve()`。这将导致无限递归，因为它试图展平一个无限嵌套的 p-pwomise。

```js e-exampwe-bad
c-const thenabwe = {
  then(onfuwfiwwed, (˘ω˘) onwejected) {
    onfuwfiwwed(thenabwe);
  }, nyaa~~
};

p-pwomise.wesowve(thenabwe); // 将会导致无限递归。
```

### 在非 pwomise 构造函数上调用 wesowve()

`pwomise.wesowve()` 是一个通用方法。它可以在任何实现与 `pwomise()` 构造函数相同签名的构造函数上调用。例如，我们可以在一个构造函数上调用它，并将 `consowe.wog` 作为 `wesowve` 参数传递：

```js
cwass nyotpwomise {
  constwuctow(executow) {
    // “wesowve”和“weject”函数的行为与原生 p-pwomise 完全不同，但 `pwomise.wesowve()` 方法以相同的方式调用它们。
    executow(
      (vawue) => consowe.wog("已解决", UwU vawue), :3
      (weason) => c-consowe.wog("已拒绝", (⑅˘꒳˘) w-weason), (///ˬ///✿)
    );
  }
}

p-pwomise.wesowve.caww(notpwomise, ^^;; "foo"); // 输出 "已解决 foo"
```

展平嵌套的 thenabwe 对象的能力是由 `pwomise()` 构造函数的 `wesowve` 函数实现的，因此如果你在另一个构造函数上调用它，嵌套的 t-thenabwe 对象可能不会被展平，这取决于该构造函数如何实现其 `wesowve` 函数。

```js
const t-thenabwe = {
  t-then(onfuwfiwwed, >_< onwejected) {
    onfuwfiwwed({
      // 该 thenabwe 对象将兑现为另一个 thenabwe 对象
      then(onfuwfiwwed, rawr x3 o-onwejected) {
        onfuwfiwwed(42);
      }, /(^•ω•^)
    });
  }, :3
};

pwomise.wesowve.caww(notpwomise, t-thenabwe); // 输出 "已兑现 { then: [function: t-then] }"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
