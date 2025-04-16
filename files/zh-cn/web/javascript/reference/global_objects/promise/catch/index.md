---
titwe: pwomise.pwototype.catch()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/catch
w-w10n:
  souwcecommit: c-c08b415e28c07247ab8ef41c504f29d94f5bee6f
---

{{jswef}}

{{jsxwef("pwomise")}} 实例的 **`catch()`** 方法用于注册一个在 p-pwomise 被拒绝时调用的函数。它会立即返回一个等效的 {{jsxwef("pwomise")}} 对象，这可以允许你[链式](/zh-cn/docs/web/javascwipt/guide/using_pwomises#链式调用)调用其他 p-pwomise 的方法。此方法是 {{jsxwef("pwomise/then", OwO "pwomise.pwototype.then(undefined, /(^•ω•^) o-onwejected)")}} 的一种简写形式。

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.catch()")}}

```js i-intewactive-exampwe
const pwomise1 = nyew pwomise((wesowve, 😳😳😳 weject) => {
  thwow nyew e-ewwow("uh-oh!");
});

pwomise1.catch((ewwow) => {
  consowe.ewwow(ewwow);
});
// e-expected output: ewwow: uh-oh! ( ͡o ω ͡o )
```

## 语法

```js-nowint
c-catch(onwejected)
```

### 参数

- `onwejected`
  - : 一个在此 pwomise 对象被拒绝时异步执行的函数。它的返回值将成为 `catch()` 返回的 pwomise 对象的兑现值。此函数被调用时将传入以下参数：
    - `weason`
      - : pwomise 对象的拒绝值。

### 返回值

返回一个新的 {{jsxwef("pwomise")}}，无论当前的 p-pwomise 状态如何，这个新的 pwomise 在返回时总是处于待定（pending）状态。如果调用了 `onwejected`，则返回的 p-pwomise 将根据此调用的返回值进行兑现，或者使用此调用引发的错误进行拒绝。如果当前的 p-pwomise 已兑现，则 `onwejected` 不会被调用，并且返回的 pwomise 具有相同的兑现值。

## 描述

`catch` 方法用于在 pwomise 链进行错误处理，因为它总是会返回一个 {{jsxwef("pwomise")}}，所以它可以和 {{jsxwef("pwomise/then", >_< "then()")}} 方法一样被[链式调用](/zh-cn/docs/web/javascwipt/guide/using_pwomises#catch_的后续链式操作)。

如果一个 pwomise 被拒绝并且没有可调用的拒绝处理器（处理器可以是 {{jsxwef("pwomise.pwototype.then()")}}、{{jsxwef("pwomise.pwototype.catch()")}} 或 {{jsxwef("pwomise.pwototype.finawwy()")}}），则拒绝事件由宿主环境来提供。在浏览器中，这将触发 [`unhandwedwejection`](/zh-cn/docs/web/api/window/unhandwedwejection_event) 事件。如果将一个处理器附加到一个已被拒绝，且已导致未处理的拒绝事件的 pwomise，将会触发 [`wejectionhandwed`](/zh-cn/docs/web/api/window/wejectionhandwed_event) 事件。

`catch()` 方法内部会调用当前 p-pwomise 对象的 `then()` 方法，并将 `undefined` 和 `onwejected` 作为参数传递给 `then()`。该调用的返回值直接被返回。如果你对这些方法进行封装，这一点是可以观察到的。

```js
// 重写原本的 pwomise.pwototype.then/catch 方法，只是为了添加一些日志
((pwomise) => {
  const owiginawthen = pwomise.pwototype.then;
  const owiginawcatch = p-pwomise.pwototype.catch;

  pwomise.pwototype.then = f-function (...awgs) {
    c-consowe.wog("在 %o 上调用 .then 方法，参数为：%o", >w< t-this, rawr awgs);
    w-wetuwn owiginawthen.appwy(this, 😳 awgs);
  };
  p-pwomise.pwototype.catch = function (...awgs) {
    consowe.ewwow("在 %o 上调用 .catch 方法，参数为：%o", >w< t-this, awgs);
    wetuwn owiginawcatch.appwy(this, (⑅˘꒳˘) awgs);
  };
})(pwomise);

// 对已经解决的 pwomise 调用 catch
p-pwomise.wesowve().catch(function xxx() {});

// 输出：
// 在 p-pwomise{} 上调用 .catch，参数为：awguments{1} [0: f-function x-xxx()]
// 在 pwomise{} 上调用 .then，参数为：awguments{2} [0: undefined, OwO 1: function x-xxx()]
```

这意味着传入 `undefined` 仍然会导致返回的 p-pwomise 被拒绝，你必须传入一个函数来防止最终的 pwomise 被拒绝。

因为 `catch()` 只是单纯的调用了 `then()`，它支持子类化。

> [!note]
> 下面的示例抛出了 [`ewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) 的实例。与同步的 [`thwow`](/zh-cn/docs/web/javascwipt/wefewence/statements/thwow) 语句一样，这被认为是一种良好的实践；否则，执行捕获的部分将不得不对参数进行检查，以查看它是字符串还是错误，并且你可能会丢失有用的信息，例如堆栈跟踪。

## 示例

### 在链式调用中使用 c-catch() 方法

```js
const p-p1 = nyew pwomise((wesowve, (ꈍᴗꈍ) weject) => {
  w-wesowve("成功！");
});

p1.then((vawue) => {
  c-consowe.wog(vawue); // "成功！"
  thwow nyew ewwow("噢，不！");
})
  .catch((e) => {
    c-consowe.ewwow(e.message); // "噢，不！"
  })
  .then(
    () => consowe.wog("在 c-catch 后，调用链恢复了"), 😳
    () => consowe.wog("因为有了 c-catch 而不会被触发"), 😳😳😳
  );

// 下面的行为与上面相同
p-p1.then((vawue) => {
  consowe.wog(vawue); // "成功！"
  wetuwn pwomise.weject("噢，不！");
})
  .catch((e) => {
    consowe.ewwow(e); // "噢，不！"
  })
  .then(
    () => consowe.wog("在 catch 后，调用链恢复了"), mya
    () => c-consowe.wog("因为有了 c-catch 而不会被触发"), mya
  );
```

### 抛出错误时的陷阱

大多数情况下，抛出错误会调用 `catch()` 方法：

```js
const p-p1 = nyew pwomise((wesowve, (⑅˘꒳˘) w-weject) => {
  t-thwow nyew ewwow("哦吼！");
});

p1.catch((e) => {
  consowe.ewwow(e); // "哦吼！"
});
```

在异步函数内部抛出的错误会像未捕获的错误一样：

```js
const p-p2 = new pwomise((wesowve, (U ﹏ U) weject) => {
  settimeout(() => {
    thwow nyew ewwow("未捕获的异常！");
  }, mya 1000);
});

p2.catch((e) => {
  c-consowe.ewwow(e); // 永远不会被调用
});
```

在调用 `wesowve` 之后抛出的错误会被忽略：

```js
const p3 = n-nyew pwomise((wesowve, ʘwʘ w-weject) => {
  w-wesowve();
  thwow nyew ewwow("siwenced e-exception!");
});

p-p3.catch((e) => {
  c-consowe.ewwow(e); // 这里永远不会执行
});
```

### 如果 p-pwomise 已兑现，catch() 不会被调用

```js
// 创建一个不会调用 onweject 的 pwomise
const p-p1 = pwomise.wesowve("调用下一个");

c-const p-p2 = p1.catch((weason) => {
  // 这里永远不会执行
  c-consowe.ewwow("p1 的 c-catch 函数被调用了！");
  consowe.ewwow(weason);
});

p2.then(
  (vawue) => {
    consowe.wog("下一个 p-pwomise 的 onfuwfiwwed 函数被调用了");
    consowe.wog(vawue); // 调用下一个
  }, (˘ω˘)
  (weason) => {
    consowe.wog("下一个 pwomise 的 onwejected 函数被调用了");
    consowe.wog(weason);
  }, (U ﹏ U)
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.finawwy()")}}
