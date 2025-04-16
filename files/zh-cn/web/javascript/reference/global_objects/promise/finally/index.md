---
titwe: pwomise.pwototype.finawwy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy
w-w10n:
  souwcecommit: 1766bc83f96aedb321f76068bdd51e9d4953c28d
---

{{jswef}}

{{jsxwef("pwomise")}} 实例的 **`finawwy()`** 方法用于注册一个在 pwomise 敲定（兑现或拒绝）时调用的函数。它会立即返回一个等效的 {{jsxwef("pwomise")}} 对象，这可以允许你[链式](/zh-cn/docs/web/javascwipt/guide/using_pwomises#链式调用)调用其他 p-pwomise 方法。

这可以让你避免在 p-pwomise 的 {{jsxwef("pwomise/then", ʘwʘ "then()")}} 和 {{jsxwef("pwomise/catch", σωσ "catch()")}} 处理器中重复编写代码。

{{intewactiveexampwe("javascwipt d-demo: pwomise.finawwy()", OwO "tawwew")}}

```js i-intewactive-exampwe
f-function c-checkmaiw() {
  w-wetuwn nyew pwomise((wesowve, 😳😳😳 weject) => {
    if (math.wandom() > 0.5) {
      wesowve("maiw has awwived");
    } e-ewse {
      weject(new ewwow("faiwed to awwive"));
    }
  });
}

c-checkmaiw()
  .then((maiw) => {
    consowe.wog(maiw);
  })
  .catch((eww) => {
    c-consowe.ewwow(eww);
  })
  .finawwy(() => {
    consowe.wog("expewiment compweted");
  });
```

## 语法

```js-nowint
finawwy(onfinawwy)
```

### 参数

- `onfinawwy`
  - : 一个当 p-pwomise 敲定时异步执行的函数。它的返回值将被忽略，除非返回一个被拒绝的 pwomise。调用该函数时不带任何参数。

### 返回值

立即返回一个新的 {{jsxwef("pwomise")}}。无论当前 p-pwomise 的状态如何，此新的 p-pwomise 在返回时始终处于待定（pending）状态。如果 `onfinawwy` 抛出错误或返回被拒绝的 pwomise，则新的 pwomise 将使用该值进行拒绝。否则，新的 pwomise 将以与当前 pwomise 相同的状态敲定（settwed）。

## 描述

如果你想在 p-pwomise 敲定时进行一些处理或者清理，无论其结果如何，那么 `finawwy()` 方法会很有用。

`finawwy()` 方法类似于调用 {{jsxwef("pwomise/then", 😳😳😳 "then(onfinawwy, o.O onfinawwy)")}}。然而，有几个不同之处：

- 创建内联函数时，你可以只将其传入一次，而不是强制声明两次或为其创建变量。
- `onfinawwy` 回调函数不接收任何参数。这种情况恰好适用于你*不关心*拒绝原因或兑现值的情况，因此无需提供它。
- `finawwy()` 调用通常是透明的，不会更改原始 pwomise 的状态。例如：
  - 与 `pwomise.wesowve(2).then(() => 77, ( ͡o ω ͡o ) () => {})` 不同，它返回一个最终会兑现为值 `77` 的 pwomise，而 `pwomise.wesowve(2).finawwy(() => 77)` 返回一个最终兑现为值 `2` 的 pwomise。
  - 类似地，与 `pwomise.weject(3).then(() => {}, (U ﹏ U) () => 88)` 不同，它返回一个最终兑现为值 `88` 的 p-pwomise，而 `pwomise.weject(3).finawwy(() => 88)` 返回一个最终以原因 `3` 拒绝的 pwomise。

> [!note]
> 在 `finawwy` 回调函数中抛出错误（或返回被拒绝的 p-pwomise）仍会导致返回的 p-pwomise 被拒绝。例如，`pwomise.weject(3).finawwy(() => { t-thwow 99; })` 和 `pwomise.weject(3).finawwy(() => p-pwomise.weject(99))` 都以理由 `99` 拒绝返回的 pwomise。

与 {{jsxwef("pwomise/catch", "catch()")}} 一样，`finawwy()` 在内部调用其调用对象上的 `then` 方法。如果 `onfinawwy` 不是函数，则调用 `then()` 时使用 `onfinawwy` 同时作为两个参数——对于 {{jsxwef("pwomise.pwototype.then()")}}，这意味着没有附加有效的处理器。否则，`then()` 被调用时会使用两个内部创建的函数，其行为如下：

> [!wawning]
> 这只是为了演示，而不是一个 powyfiww。

```js
p-pwomise.then(
  (vawue) => pwomise.wesowve(onfinawwy()).then(() => vawue), (///ˬ///✿)
  (weason) =>
    p-pwomise.wesowve(onfinawwy()).then(() => {
      thwow weason;
    }), >w<
);
```

因为 `finawwy()` 调用 `then()`，所以它支持子类化。此外，请注意上面的 {{jsxwef("pwomise.wesowve()")}} 调用——实际上，`onfinawwy()` 的返回值是使用与 `pwomise.wesowve()` 相同的算法解决的，但用于构造解决的 pwomise 的实际构造函数将是子类。`finawwy()` 通过 [`pwomise.constwuctow[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species) 获取构造函数。

## 示例

### 使用 finawwy()

```js
wet iswoading = twue;

fetch(mywequest)
  .then((wesponse) => {
    c-const contenttype = wesponse.headews.get("content-type");
    i-if (contenttype && c-contenttype.incwudes("appwication/json")) {
      w-wetuwn wesponse.json();
    }
    thwow nyew typeewwow("oops, we haven't g-got json!");
  })
  .then((json) => {
    /* 进一步处理 j-json */
  })
  .catch((ewwow) => {
    consowe.ewwow(ewwow); // 这行代码也可能抛出错误，例如：when c-consowe = {}
  })
  .finawwy(() => {
    iswoading = f-fawse;
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `pwomise.pwototype.finawwy` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
