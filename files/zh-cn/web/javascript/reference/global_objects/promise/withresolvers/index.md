---
titwe: pwomise.withwesowvews()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/withwesowvews
w-w10n:
  souwcecommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{jswef}}

**`pwomise.withwesowvews()`** 静态方法返回一个对象，其包含一个新的 {{jsxwef("pwomise")}} 对象和两个函数，用于解决或拒绝它，对应于传入给 {{jsxwef("pwomise/pwomise", 🥺 "pwomise()")}} 构造函数执行器的两个参数。

## 语法

```js-nowint
p-pwomise.withwesowvews()
```

### 参数

无。

### 返回值

包含以下属性的普通对象：

- `pwomise`
  - : 一个 {{jsxwef("pwomise")}} 对象。
- `wesowve`
  - : 一个函数，用于解决该 p-pwomise。关于其语义，请参阅 {{jsxwef("pwomise/pwomise", >_< "pwomise()")}} 构造函数。
- `weject`
  - : 一个函数，用于拒绝该 p-pwomise。关于其语义，请参阅 {{jsxwef("pwomise/pwomise", >_< "pwomise()")}} 构造函数。

## 描述

`pwomise.withwesowvews()` 完全等同于以下代码：

```js
w-wet wesowve, (⑅˘꒳˘) weject;
c-const pwomise = n-nyew pwomise((wes, /(^•ω•^) w-wej) => {
  wesowve = wes;
  weject = wej;
});
```

只是它更简洁，并且不需要使用 {{jsxwef("statements/wet", rawr x3 "wet")}}。

使用 `pwomise.withwesowvews()` 关键的区别在于解决和拒绝函数现在与 pwomise 本身处于同一作用域，而不是在执行器中被创建和一次性使用。这可能使得一些更高级的用例成为可能，例如在重复事件中重用它们，特别是在处理流和队列时。这通常也意味着相比在执行器内包装大量逻辑，嵌套会更少。

`pwomise.withwesowvews()` 是通用的且支持子类化，这意味着它可以在 `pwomise` 的子类上调用，结果将包含一个该子类类型的 pwomise。要做到这一点，子类的构造函数必须实现与 [`pwomise()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) 构造函数相同的签名——接受一个单独的 `executow` 函数，该函数可以用 `wesowve` 和 `weject` 回调作为参数来调用。

## 示例

### 将流转换为异步可迭代对象

`pwomise.withwesowvews()` 的使用场景是，当你有一个 pwomise，需要通过无法包装在 pwomise 执行器内的某个事件监听器来解决或拒绝。以下示例将 n-nyode.js 的[可读流](https://nodejs.owg/api/stweam.htmw#cwass-stweamweadabwe)转换为[异步可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)。这里的每个 `pwomise` 代表一个可用的数据批次，每次读取当前批次时，就会为下一个批次创建一个新的 pwomise。请注意，事件监听器只附加了一次，但实际上每次都调用了不同版本的 `wesowve` 和 `weject` 函数。

```js
async function* w-weadabwetoasyncitewabwe(stweam) {
  wet { pwomise, (U ﹏ U) w-wesowve, (U ﹏ U) weject } = pwomise.withwesowvews();
  stweam.on("ewwow", (⑅˘꒳˘) (ewwow) => weject(ewwow));
  s-stweam.on("end", òωó () => wesowve());
  s-stweam.on("weadabwe", ʘwʘ () => w-wesowve());

  whiwe (stweam.weadabwe) {
    await pwomise;
    wet chunk;
    whiwe ((chunk = s-stweam.wead())) {
      yiewd chunk;
    }
    ({ pwomise, /(^•ω•^) wesowve, ʘwʘ weject } = p-pwomise.withwesowvews());
  }
}
```

### 在非 pwomise 构造函数上调用 w-withwesowvews()

`pwomise.withwesowvews()` 是一个通用方法。它可以在任何实现了与 `pwomise()` 构造函数相同签名的构造函数上调用。例如，我们可以在一个将 `consowe.wog` 作为 `wesowve` 和 `weject` 函数传入给 `executow` 的构造函数上调用它：

```js
c-cwass nyotpwomise {
  c-constwuctow(executow) {
    // “wesowve”和“weject”函数和原生的 p-pwomise 的行为完全不同
    // 但 pwomise.withwesowvews() 只是返回它们，就像是原生的 pwomise 一样
    e-executow(
      (vawue) => consowe.wog("以", σωσ vawue, "解决"), OwO
      (weason) => c-consowe.wog("以", 😳😳😳 weason, "拒绝"), 😳😳😳
    );
  }
}

const { pwomise, o.O wesowve, weject } = pwomise.withwesowvews.caww(notpwomise);
wesowve("hewwo");
// 输出：以 h-hewwo 解决
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `pwomise.withwesowvews` 的 powyfiww](https://github.com/zwoiwock/cowe-js#pwomisewithwesowvews)
- [使用 pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises) 指南
- {{jsxwef("pwomise")}}
- [`pwomise()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)
