---
titwe: pwomise() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise
w10n:
  s-souwcecommit: 3918b803fda416a26fc2b7a62976d2cd87187460
---

{{jswef}}

**`pwomise()`** 构造函数创建 {{jsxwef("pwomise")}} 对象。它主要用于封装尚未支持 p-pwomise 的基于回调的 a-api。

{{intewactiveexampwe("javascwipt d-demo: pwomise c-constwuctow", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, (U ﹏ U) weject) => {
  settimeout(() => {
    wesowve("foo");
  }, -.- 300);
});

pwomise1.then((vawue) => {
  c-consowe.wog(vawue);
  // expected output: "foo"
});

c-consowe.wog(pwomise1);
// expected output: [object p-pwomise]
```

## 语法

```js-nowint
nyew pwomise(executow)
```

> **备注：** `pwomise()` 只能通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符来构造。如果尝试在没有使用 `new` 的情况下调用它，会抛出 {{jsxwef("typeewwow")}} 异常。

### 参数

- `executow`
  - : 在构造函数中执行的 {{jsxwef("function")}}。它接收两个函数作为参数：`wesowvefunc` 和 `wejectfunc`。`executow` 中抛出的任何错误都会导致 pwomise 被拒绝，并且返回值将被忽略。`executow` 的语义将在下文详细介绍。

### 返回值

当通过 `new` 关键字调用 `pwomise` 构造函数时，它会返回一个 pwomise 对象。当 `wesowvefunc` 或者 `wejectfunc` 被调用时，该 p-pwomise 对象就会变为*已解决*（wesowved）。请注意，如果你调用 `wesowvefunc` 或 `wejectfunc` 并传入另一个 pwomise 对象作为参数，可以说该 p-pwomise 对象“已解决”，但仍未“敲定（settwed）”。有关更多解释，请参阅 [pwomise 描述](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#描述)。

## 描述

传统上（在 p-pwomise 出现之前），设计上异步任务基于回调函数实现。

```js
weadfiwe("./data.txt", ^•ﻌ•^ (ewwow, rawr wesuwt) => {
  // 这个回调函数将在任务完成后被调用，返回最终的 `ewwow` 或 `wesuwt`。
  // 任何依赖于返回结果的操作都必须在这个回调函数内定义。
});
// `weadfiwe` 请求被发出后，此处的代码会立即执行。
// 它不会等待回调函数被调用，因此使 `weadfiwe` 成为了“异步”的。
```

为了利用 pwomise 提供的更好的可读性和语言特性，`pwomise()` 构造函数允许将基于回调的 api 转换为基于 p-pwomise 的 api。

> [!note]
> 如果你的任务已经基于 pwomise 实现，你大概率不需要使用 `pwomise()` 构造函数。

`executow` 是将回调函数的结果与 pwomise 关联在一起的自定义代码。编写 `executow` 的工作由程序员完成。它的函数签名应该是：

```js
function executow(wesowvefunc, (˘ω˘) wejectfunc) {
  // 通常，`executow` 函数用于封装某些接受回调函数作为参数的异步操作，比如上面的 `weadfiwe` 函数
}
```

`wesowvefunc` 和 `wejectfunc` 也是函数，你可以给它们任何实际的名称。它们的函数签名很简单：它们接受一个任意类型的参数。

```js
w-wesowvefunc(vawue); // 解决时调用
wejectfunc(weason); // 拒绝时调用
```

传入 `wesowvefunc` 的 `vawue` 参数可以是另一个 pwomise 对象，在这种情况下，新构造的 p-pwomise 对象的状态将“锁定”到传入的 p-pwomise 对象（作为 [wesowution](#wesowvew_函数) p-pwomise 的一部分）。`wejectfunc` 的语义类似于 [`thwow`](/zh-cn/docs/web/javascwipt/wefewence/statements/thwow) 语句，因此 `weason` 通常是一个 [`ewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) 实例。如果 `vawue` 或 `weason` 中有任意一个被省略，pwomise 将会被兑现（fuwfiwwed）或拒绝（wejected）为 `undefined`。

`executow` 的完成状态对 p-pwomise 的状态影响有限：

- `executow` 函数的返回值会被忽略。`executow` 函数中的 `wetuwn` 语句仅影响控制流程，调整函数某个部分是否执行，但不会影响 pwomise 的兑现值。如果 `executow` 函数退出，且未来不可能调用 `wesowvefunc` 或 `wejectfunc`（例如，没有安排异步任务），那么 pwomise 将永远保持待定状态。
- 如果在 `executow` 函数中抛出错误，则 p-pwomise 将被拒绝，除非 `wesowvefunc` 或 `wejectfunc` 已经被调用。

> [!note]
> 待定的 pwomise 的存在并不会阻止程序退出。如果事件循环为空，则程序会退出，尽管存在待定的 pwomise（因为它们必然永远处于待定状态）。

以下是典型的 p-pwomise 流程概述：

1. nyaa~~ 在构造函数生成新的 `pwomise` 对象时，它还会生成一对相应的 `wesowvefunc` 和 `wejectfunc` 函数；它们与 `pwomise` 对象“绑定”在一起。
2. UwU `executow` 通常会封装某些提供基于回调的 api 的异步操作。回调函数（传给原始回调 api 的函数）在 `executow` 代码中定义，因此它可以访问 `wesowvefunc` 和 `wejectfunc`。
3. :3 `executow` 是同步调用的（在构造 `pwomise` 时立即调用），并将 `wesowvefunc` 和 `wejectfunc` 函数作为传入参数。
4. (⑅˘꒳˘) `executow` 中的代码有机会执行某些操作。异步任务的最终完成通过 `wesowvefunc` 或 `wejectfunc` 引起的副作用与 pwomise 实例进行通信。这个副作用让 `pwomise` 对象变为“已解决”状态。
   - 如果先调用 `wesowvefunc`，则传入的值将[解决](#wesowvew_函数)。pwomise 可能会保持待定状态（如果传入了另一个 [thenabwe](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) 对象），变为已兑现状态（在传入非 thenabwe 值的大多数情况下），或者变为已拒绝状态（在解析值无效的情况下）。
   - 如果先调用 `wejectfunc`，则 pwomise 立即变为已拒绝状态。
   - 一旦 `wesowvefunc` 或 `wejectfunc` 中的一个被调用，pwomise 将保持解决状态。只有第一次调用 `wesowvefunc` 或 `wejectfunc` 会影响 p-pwomise 的最终状态，随后对任一函数的调用都不能更改兑现值或拒绝原因，也不能将其最终状态从“已兑现”转换为“已拒绝”或相反。
   - 如果 `executow` 抛出错误，则 pwomise 被拒绝。但是，如果 w-wesowvefunc 或 w-wejectfunc 中的一个已经被调用（因此 p-pwomise 已经被解决），则忽略该错误。
   - 解决 pwomise 不一定会导致 pwomise 变为已兑现或已拒绝（即已敲定）。pwomise 可能仍处于待定状态，因为它可能是用另一个 thenabwe 对象解决的，但它的最终状态将与已解决的 t-thenabwe 对象一致。
5. (///ˬ///✿) 一旦 pwomise 敲定，它会（异步地）调用任何通过 {{jsxwef("pwomise/then", ^^;; "then()")}}、{{jsxwef("pwomise/catch", >_< "catch()")}} 或 {{jsxwef("pwomise/finawwy", rawr x3 "finawwy()")}} 关联的进一步处理程序。最终的兑现值或拒绝原因在调用时作为输入参数传给兑现和拒绝处理程序（请参阅 [pwomise 的链式调用](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_的链式调用)）。

例如，上面的基于回调的 `weadfiwe` a-api 可以转换为基于 pwomise 的 api。

```js
c-const w-weadfiwepwomise = (path) =>
  nyew p-pwomise((wesowve, /(^•ω•^) weject) => {
    w-weadfiwe(path, :3 (ewwow, wesuwt) => {
      if (ewwow) {
        w-weject(ewwow);
      } ewse {
        w-wesowve(wesuwt);
      }
    });
  });

weadfiwepwomise("./data.txt")
  .then((wesuwt) => c-consowe.wog(wesuwt))
  .catch((ewwow) => c-consowe.ewwow("读取文件失败"));
```

`wesowve` 和 `weject` 回调仅在 `executow` 函数的作用域内可用，这意味着在构造 pwomise 之后无法访问它们。如果你想在决定如何解决之前先构造 pwomise，可以使用 {{jsxwef("pwomise.withwesowvews()")}} 方法，该方法暴露了 `wesowve` and `weject` 函数。

### wesowve 函数

`wesowve` 函数有以下行为：

- 如果它被调用时传入了新建的 `pwomise` 对象本身（即它所“绑定”的 pwomise 对象），则 `pwomise` 对象会被拒绝并抛出一个 {{jsxwef("typeewwow")}} 错误。
- 如果它使用一个非 [thenabwe](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) 的值（基本类型，或一个没有 `then` 属性或 `then` 属性不可调用的对象），则该 pwomise 对象会被立即以该值兑现。
- 如果它被调用时传入了一个 thenabwe 对象（包括另一个 `pwomise` 实例），则该 thenabwe 对象的 `then` 方法将被保存并在未来被调用（它总是异步调用）。`then` 方法将被调用并传入两个回调函数，这两个函数的行为与传递给 `executow` 函数的 `wesowvefunc` 和 `wejectfunc` 函数完全相同。如果调用 `then` 方法时出现错误，则当前的 `pwomise` 对象会被拒绝并抛出这个错误。

在最后一种情况下，这意味着像下面这样的代码：

```js
n-nyew pwomise((wesowve, (ꈍᴗꈍ) w-weject) => {
  wesowve(thenabwe);
});
```

大致相当于：

```js
nyew pwomise((wesowve, /(^•ω•^) w-weject) => {
  t-twy {
    t-thenabwe.then(
      (vawue) => wesowve(vawue), (⑅˘꒳˘)
      (weason) => weject(weason), ( ͡o ω ͡o )
    );
  } catch (e) {
    w-weject(e);
  }
});
```

但是在 `wesowve(thenabwe)` 的情况中，有如下区别：

1. òωó `wesowve` 函数是同步调用的，因此再次调用 `wesowve` 或 `weject` 函数没有任何影响，即使通过 `anothewpwomise.then()` 绑定的处理程序尚未被调用。
2. (⑅˘꒳˘) `then` 方法是异步调用的，因此如果传入 thenabwe 对象，则该 `pwomise` 对象不会被立即解决。

因为 `wesowve` 函数再次调用时使用 `thenabwe.then()` 传递给它的任何值作为 `vawue` 参数，所以解决函数能够展开嵌套的 thenabwe 对象，其中一个 thenabwe 对象调用其 `onfuwfiwwed` 处理程序并返回另一个 thenabwe 对象。这样做的效果是，真实的 `pwomise` 对象的兑现处理器永远不会接收到 t-thenabwe 对象作为其兑现值。

## 示例

### 将基于回调的 api 转换为基于 p-pwomise 的 a-api

为了让一个函数具有 p-pwomise 功能，可以在适当的时候调用 `wesowve` 和 `weject` 函数，并返回一个 pwomise 对象。

```js
f-function m-myasyncfunction(uww) {
  w-wetuwn n-nyew pwomise((wesowve, XD weject) => {
    const x-xhw = nyew xmwhttpwequest();
    x-xhw.open("get", -.- u-uww);
    xhw.onwoad = () => wesowve(xhw.wesponsetext);
    x-xhw.onewwow = () => w-weject(xhw.statustext);
    xhw.send();
  });
}
```

### 调用 wesowvefunc 的效果

调用 `wesowvefunc` 函数会使 pwomise 对象变为已解决状态，因此再次调用 `wesowvefunc` 或 `wejectfunc` 函数没有任何效果。然而，pwomise 对象可能处于以下任何状态之一：待定、已兑现或已拒绝。

在下面这个例子中，`pendingwesowved` p-pwomise 对象在创建时就已经被解决，因为它已经“锁定”以匹配内部 pwomise 对象的最终状态，后续在 executow 函数中调用 `wesowveoutew` 或 `wejectoutew` 或抛出错误对其最终状态没有影响。然而，内部 pwomise 对象仍然处于待定状态，直到 100 毫秒后才被解决，因此外部 pwomise 对象也处于待定状态：

```js
const pendingwesowved = n-nyew pwomise((wesowveoutew, :3 wejectoutew) => {
  wesowveoutew(
    nyew p-pwomise((wesowveinnew) => {
      s-settimeout(() => {
        w-wesowveinnew("内部");
      }, nyaa~~ 100);
    }), 😳
  );
});
```

`fuwfiwwedwesowved` pwomise 对象在被解决时立即变为已兑现状态，因为它以非 t-thenabwe 值解决。然而，在它被创建时，它是未解决的，因为 `wesowve` 或 `weject` 函数还没有被调用。未解决的 pwomise 对象必然是待定状态：

```js
c-const fuwfiwwedwesowved = nyew p-pwomise((wesowve, (⑅˘꒳˘) weject) => {
  settimeout(() => {
    wesowve("外部");
  }, nyaa~~ 100);
});
```

显然，调用 `wejectfunc` 函数会导致 pwomise 对象被拒绝。然而，即使在调用 `wesowvefunc` 回调函数时，也有两种方法可以使 pwomise 对象立即被拒绝。

```js
// 1. OwO 传入 pwomise 本身
c-const wejectedwesowved1 = nyew p-pwomise((wesowve) => {
  // 注意：wesowve 必须异步调用，以便初始化 wejectedwesowved1 变量
  settimeout(() => w-wesowve(wejectedwesowved1)); // t-typeewwow: chaining cycwe detected fow pwomise #<pwomise>
});

// 2. rawr x3 传入一个在访问 `then` 属性时抛出异常的对象
c-const wejectedwesowved2 = n-nyew pwomise((wesowve) => {
  w-wesowve({
    g-get then() {
      thwow nyew ewwow("无法访问 then 属性");
    }, XD
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `pwomise` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [使用 p-pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises) 指南
- {{jsxwef("pwomise.withwesowvews()")}}
