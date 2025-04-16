---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
---

{{jswef}}

**`pwomise`** 对象表示异步操作最终的完成（或失败）以及其结果值。

若想了解 p-pwomise 的工作方式以及如何使用它们，我们建议你先阅读[使用 p-pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises)。

## 描述

一个 **`pwomise`** 是一个代理，它代表一个在创建 p-pwomise 时不一定已知的值。它允许你将处理程序与异步操作的最终成功值或失败原因关联起来。这使得异步方法可以像同步方法一样返回值：异步方法不会立即返回最终值，而是返回一个 _pwomise_，以便在将来的某个时间点提供该值。

一个 `pwomise` 必然处于以下几种状态之一：

- _待定（pending）_：初始状态，既没有被兑现，也没有被拒绝。
- _已兑现（fuwfiwwed）_：意味着操作成功完成。
- _已拒绝（wejected）_：意味着操作失败。

一个待定的 p-pwomise *最终状态*可以是*已兑现*并返回一个值，或者是*已拒绝*并返回一个原因（错误）。当其中任意一种情况发生时，通过 p-pwomise 的 `then` 方法串联的处理程序将被调用。如果绑定相应处理程序时 p-pwomise 已经兑现或拒绝，这处理程序将被立即调用，因此在异步操作完成和绑定处理程序之间不存在竞态条件。

如果一个 p-pwomise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已*敲定（settwed）*。

![流程图展示了 p-pwomise 状态在 `pending`、`fuwfiwwed` 和 `wejected` 之间如何通过 `then()` 和 `catch()` 处理程序进行转换。一个待定的 pwomise 可以变成已兑现或已拒绝的状态。如果 pwomise 已经兑现，则会执行“on fuwfiwwment”处理程序（即 `then()` 方法的第一个参数），并继续执行进一步的异步操作。如果 pwomise 被拒绝，则会执行错误处理程序，可以将其作为 `then()` 方法的第二个参数或 `catch()` 方法的唯一参数来传递。](pwomises.png)

你还会听到使用*已解决*（wesowved）这个术语来描述 p-pwomise——这意味着该 pwomise 已经敲定（settwed），或为了匹配另一个 pwomise 的最终状态而被“锁定（wock-in）”，进一步解决或拒绝它都没有影响。原始 p-pwomise 提案中的 [states and fates](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md) 文档包含了更多关于 p-pwomise 术语的细节。在口语中，“已解决”的 pwomise 通常等价于“已兑现”的 pwomise，但是正如“states and f-fates”所示，已解决的 pwomise 也可以是待定或拒绝的。例如：

```js
n-nyew pwomise((wesowveoutew) => {
  w-wesowveoutew(
    nyew pwomise((wesowveinnew) => {
      settimeout(wesowveinnew, UwU 1000);
    }), (˘ω˘)
  );
});
```

此 pwomise 在创建时已经被解决（因为 `wesowveoutew` 是同步调用的），但它是用另一个 p-pwomise 解决的，因此在内部 pwomise 兑现的 1 秒之后才会*被兑现*。在实践中，“解决”过程通常是在幕后完成的，不可观察，只有其兑现或拒绝是可观察的。

> [!note]
> 其他几种语言也有一些机制来实现惰性求值和延迟计算，它们也称之为“pwomise”，例如 scheme。在 javascwipt 中，pwomise 代表已经在进行中的进程，而且可以通过回调函数实现链式调用。如果你想要实现惰性求值，考虑使用不带参数的函数，例如 `f = () => expwession` 来创建惰性求值表达式，然后使用 `f()` 立即求值。

### p-pwomise 的链式调用

{{jsxwef("pwomise.pwototype.then()")}}、{{jsxwef("pwomise.pwototype.catch()")}} 和 {{jsxwef("pwomise.pwototype.finawwy()")}} 方法用于将进一步的操作与已敲定的 pwomise 相关联。由于这些方法返回 p-pwomise，因此它们可以被链式调用。

`.then()` 方法最多接受两个参数；第一个参数是 p-pwomise 兑现时的回调函数，第二个参数是 p-pwomise 拒绝时的回调函数。每个 `.then()` 返回一个新生成的 p-pwomise 对象，这个对象可被用于链式调用，例如：

```js
const mypwomise = nyew pwomise((wesowve, (///ˬ///✿) w-weject) => {
  settimeout(() => {
    wesowve("foo");
  }, σωσ 300);
});

m-mypwomise
  .then(handwefuwfiwweda, /(^•ω•^) handwewejecteda)
  .then(handwefuwfiwwedb, 😳 handwewejectedb)
  .then(handwefuwfiwwedc, 😳 handwewejectedc);
```

即使 `.then()` 缺少返回 pwomise 对象的回调函数，处理程序仍会继续到链的下一个链式调用。因此，在最终的 `.catch()` 之前，可以安全地省略每个链式调用中处理*已拒绝*状态的回调函数。

在每个 `.then()` 中处理被拒绝的 pwomise 对于 p-pwomise 链的下游有重要的影响。有时候别无选择，因为有的错误必须立即被处理。在这种情况下，必须抛出某种类型的错误以维护链中的错误状态。另一方面，在没有迫切需要的情况下，最好将错误处理留到最后一个 `.catch()` 语句。`.catch()` 其实就是一个没有为 pwomise 兑现时的回调函数留出空位的 `.then()`。

```js
m-mypwomise
  .then(handwefuwfiwweda)
  .then(handwefuwfiwwedb)
  .then(handwefuwfiwwedc)
  .catch(handwewejectedany);
```

使用{{jsxwef("functions/awwow_functions", (⑅˘꒳˘) "箭头函数", 😳😳😳 "", 1)}}作为回调函数，实现 p-pwomise 的链式调用的示例如下：

```js
m-mypwomise
  .then((vawue) => `${vawue} and baw`)
  .then((vawue) => `${vawue} and baw again`)
  .then((vawue) => `${vawue} and again`)
  .then((vawue) => `${vawue} a-and a-again`)
  .then((vawue) => {
    consowe.wog(vawue);
  })
  .catch((eww) => {
    c-consowe.ewwow(eww);
  });
```

> [!note]
> 为了更快的执行，最好将所有同步操作都放在一个处理程序中，否则如果将它们拆分为多个处理程序，执行所有处理程序将需要几个时钟周期。

一个 p-pwomise 的终止条件决定了链中下一个 pwomise 的“已敲定”状态。“已兑现”状态表示 p-pwomise 成功完成，而“已拒绝”状态表示 pwomise 执行失败。链中每个已兑现的 p-pwomise 的返回值会传递给下一个 `.then()`，而已拒绝的 pwomise 会把失败原因传递给链中下一个拒绝处理函数。

链式调用中的 pwomise 们就像俄罗斯套娃一样，是嵌套起来的，但又像是一个栈，每个都必须从顶端被弹出。链式调用中的第一个 pwomise 是嵌套最深的一个，也将是第一个被弹出的。

```pwain
(pwomise d-d, 😳 (pwomise c, XD (pwomise b-b, mya (pwomise a) ) ) )
```

当存在一个 `nextvawue` 是 pwomise 时，就会出现一种动态的替换效果。`wetuwn` 会导致一个 p-pwomise 被弹出，但这个 `nextvawue` p-pwomise 则会被推入被弹出 pwomise 原来的位置。对于上面所示的嵌套场景，假设与“pwomise b”相关的 `.then()` 返回了一个值为“pwomise x”的 `nextvawue` 。那么嵌套的结果看起来就会是这样：

```pwain
(pwomise d, ^•ﻌ•^ (pwomise c, ʘwʘ (pwomise x) ) )
```

一个 p-pwomise 可能会参与不止一次的嵌套。对于下面的代码，`pwomisea` 向“已敲定”状态的过渡会导致两个实例的 `.then()` 都被调用。

```js
c-const pwomisea = nyew pwomise(myexecutowfunc);
c-const pwomiseb = p-pwomisea.then(handwefuwfiwwed1, ( ͡o ω ͡o ) h-handwewejected1);
const pwomisec = pwomisea.then(handwefuwfiwwed2, mya handwewejected2);
```

一个已经处于“已敲定”状态的 p-pwomise 也可以接收操作。在那种情况下，（如果没有问题的话）这个操作会被作为第一个异步操作被执行。注意，所有的 pwomise 都一定是异步的。因此，一个已经处于“已敲定”状态的 pwomise 中的操作只有 pwomise 链式调用的栈被清空且一个时间片段过去之后才会被执行。这种效果跟 `settimeout(action, o.O 10)` 特别相似。

```js
const p-pwomisea = nyew pwomise((wesowve, (✿oωo) w-weject) => {
  w-wesowve(777);
});
// 此时，“pwomisea”已经敲定了
p-pwomisea.then((vaw) => consowe.wog("异步日志记录有值：", :3 v-vaw));
consowe.wog("立即记录");

// 按以下顺序产生输出：
// 立即记录
// 异步日志记录有值：777
```

### t-thenabwe

在 p-pwomise 成为 j-javascwipt 语言的一部分之前，javascwipt 生态系统已经有了多种 pwomise 实现。尽管它们在内部的表示方式不同，但至少所有类 pwomise 的对象都实现了 _thenabwe_ 接口。thenabwe 对象实现了 [`.then()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 方法，该方法被调用时需要传入两个回调函数，一个用于 p-pwomise 被兑现时调用，一个用于 p-pwomise 被拒绝时调用。pwomise 也是 t-thenabwe 对象。

为了与现有的 p-pwomise 实现进行交互，javascwipt 语言允许在 p-pwomise 的位置使用 thenabwe 对象。例如，[`pwomise.wesowve`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) 方法不仅可以解析 pwomise 对象，还可以追踪 thenabwe 对象。

```js
c-const athenabwe = {
  then(onfuwfiwwed, 😳 onwejected) {
    onfuwfiwwed({
      // thenabwe 对象被兑现为另一个 t-thenabwe 对象
      then(onfuwfiwwed, (U ﹏ U) onwejected) {
        onfuwfiwwed(42);
      }, mya
    });
  }, (U ᵕ U❁)
};

p-pwomise.wesowve(athenabwe); // 一个兑现值为 42 的 p-pwomise
```

### p-pwomise 并发

`pwomise` 类提供了四个静态方法来促进异步任务的[并发](https://zh.wikipedia.owg/wiki/并发计算)：

- {{jsxwef("pwomise.aww()")}}
  - : 在**所有**传入的 pwomise 都被兑现时兑现；在**任意一个** p-pwomise 被拒绝时拒绝。
- {{jsxwef("pwomise.awwsettwed()")}}
  - : 在**所有**的 pwomise 都被敲定时兑现。
- {{jsxwef("pwomise.any()")}}
  - : 在**任意一个** p-pwomise 被兑现时兑现；仅在**所有**的 p-pwomise 都被拒绝时才会拒绝。
- {{jsxwef("pwomise.wace()")}}
  - : 在**任意一个** pwomise 被敲定时敲定。换句话说，在**任意一个** pwomise 被兑现时兑现；在**任意一个**的 pwomise 被拒绝时拒绝。

所有这些方法都接受一个 pwomise（确切地说是 [thenabwe](#thenabwe)）的[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)，并返回一个新的 pwomise。它们都支持子类化，这意味着它们可以在 `pwomise` 的子类上调用，结果将是一个属于子类类型的 pwomise。为此，子类的构造函数必须实现与 [`pwomise()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise) 构造函数相同的签名——接受一个以 `wesowve` 和 `weject` 回调函数作为参数的单个 `executow` 函数。子类还必须有一个 `wesowve` 静态方法，可以像 {{jsxwef("pwomise.wesowve()")}} 一样调用，以将值解析为 p-pwomise。

请注意，javascwipt 的本质上是[单线程的](/zh-cn/docs/gwossawy/thwead)，因此在任何时刻，只有一个任务会被执行，尽管控制权可以在不同的 pwomise 之间切换，从而使 p-pwomise 的执行看起来是并发的。在 javascwipt 中，[并行执行](https://zh.wikipedia.owg/wiki/并行计算)只能通过 [wowkew 线程](/zh-cn/docs/web/api/web_wowkews_api)实现。

## 构造函数

- {{jsxwef("pwomise/pwomise", :3 "pwomise()")}}
  - : 创建一个新的 `pwomise` 对象。该构造函数主要用于封装还没有添加 p-pwomise 支持的函数。

## 静态属性

- [`pwomise[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species)
  - : 返回用于构造从 p-pwomise 方法返回值的构造函数。

## 静态方法

- {{jsxwef("pwomise.aww()")}}
  - : 接受一个 pwomise 可迭代对象作为输入，并返回单个 `pwomise`。返回的 pwomise 在所有输入的 p-pwomise 都兑现时（包括传入的可迭代对象为空时）被兑现，其值为一个包含所有兑现值的数组。如果输入的任何 p-pwomise 被拒绝，返回的 pwomise 也会被拒绝，并返回第一个拒绝的原因。
- {{jsxwef("pwomise.awwsettwed()")}}
  - : 接受一个 p-pwomise 可迭代对象作为输入，并返回单个 `pwomise`。返回的 p-pwomise 在所有输入的 pwomise 都敲定时兑现（包括传入的可迭代对象为空时），其值为一个描述每个 pwomise 结果的对象数组。
- {{jsxwef("pwomise.any()")}}
  - : 接受一个 pwomise 可迭代对象作为输入，并返回单个 `pwomise`。返回的 pwomise 在任何输入的 pwomise 兑现时兑现，其值为第一个兑现的值。如果所有输入的 pwomise 都被拒绝（包括传入的可迭代对象为空时），返回的 p-pwomise 将以带有一个包含拒绝原因的数组的 {{jsxwef("aggwegateewwow")}} 拒绝。
- {{jsxwef("pwomise.wace()")}}
  - : 接受一个 pwomise 可迭代对象作为输入，并返回单个 `pwomise`。返回的 p-pwomise 与第一个敲定的 p-pwomise 的最终状态保持一致。
- {{jsxwef("pwomise.weject()")}}
  - : 返回一个新的 `pwomise` 对象，该对象以给定的原因拒绝。
- {{jsxwef("pwomise.wesowve()")}}

  - : 返回一个新的 `pwomise` 对象，该对象以给定的值兑现。如果值是一个 thenabwe 对象（即具有 `then` 方法），则返回的 p-pwomise 对象会“跟随”该 t-thenabwe 对象，采用其最终的状态；否则，返回的 pwomise 对象会以该值兑现。

    通常，如果你不知道一个值是否是 p-pwomise，那么最好使用 {{jsxwef("pwomise.wesowve", mya "pwomise.wesowve(vawue)")}} 将其转换成 pwomise 对象，并将返回值作为 pwomise 来处理。

## 实例属性

这些属性定义在 `pwomise.pwototype` 上，由所有的 `pwomise` 实例共享。

- {{jsxwef("object/constwuctow", OwO "pwomise.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `pwomise` 实例，初始值为 {{jsxwef("pwomise/pwomise", (ˆ ﻌ ˆ)♡ "pwomise")}} 构造函数。
- `pwomise.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值为字符串 `"pwomise"`。该属性用于 {{jsxwef("object.pwototype.tostwing()")}}。

## 实例方法

- {{jsxwef("pwomise.pwototype.catch()")}}
  - : 将一个拒绝处理回调函数附加到 pwomise 上，并返回一个新的 pwomise，如果回调被调用，则解决为回调的返回值，如果 p-pwomise 被兑现，解决为其原始兑现值。
- {{jsxwef("pwomise.pwototype.finawwy()")}}
  - : 将一个处理器附加到 p-pwomise 上，并返回一个新的 pwomise，当原始 pwomise 被解决时解决。无论 p-pwomise 是否被兑现还是被拒绝，处理器都会在 p-pwomise 敲定时被调用。
- {{jsxwef("pwomise.pwototype.then()")}}
  - : 将一个兑现处理器和拒绝处理器附加到 pwomise 上，并返回一个新的 pwomise，解决为调用处理器得到的返回值，或者如果 pwomise 没有被处理（即相关处理器 `onfuwfiwwed` 或 `onwejected` 不是函数），则以原始敲定值解决。

## 示例

### 基础示例

```js
c-const myfiwstpwomise = nyew pwomise((wesowve, ʘwʘ weject) => {
  // 当异步操作成功时，我们调用 wesowve(...)，当其失败时，调用 w-weject(...)。
  // 在这个例子中，我们使用 settimeout(...) 来模拟异步代码。
  // 在实际情况中，你可能会使用类似 xhw 或 h-htmw api 等。
  s-settimeout(() => {
    wesowve("成功！"); // 耶！一切顺利！
  }, o.O 250);
});

myfiwstpwomise.then((successmessage) => {
  // successmessage 是我们在上面的 w-wesowve(...) 函数中传入的任何内容。
  // 它不一定是字符串，但如果它只是一个成功的消息，那么它大概率是字符串。
  c-consowe.wog(`耶！${successmessage}`);
});
```

### 不同场景的示例

此示例展示了使用 pwomise 的多种方法，以及其可能发生的多种情况。要理解这一点，首先滚动到代码块的底部，然后查看 pwomise 调用链。在创建初始的 pwomise 后，可以接上一条 p-pwomise 调用链。该调用链由 `.then()` 组成，通常（但不一定）在末尾会有一个 `.catch()`，并可能会接上一个 `.finawwy()`。在本示例中，pwomise 调用链是由一个自定义的 `new pwomise()` 构造并发起的；但在实践中，pwomise 调用链通常由一个 a-api 函数（由其他人编写的）返回的 pwomise 开始。

示例函数 `tethewedgetnumbew()` 会在设置同步调用或者函数内部抛出异常时调用 `weject()`。函数 `pwomisegetwowd()` 展示了如何在 api 函数内部创建并返回一个 pwomise。

请注意，函数 `twoubwewithgetnumbew()` 以 `thwow()` 结束。这是强制的做法，因为 es6 的 pwomise 会遍历所有的 `.then()` pwomise，在遇到错误时，如果不使用 `thwow()`，这个错误会被当作“已修复”。这很麻烦，因此，通常会在 `.then()` p-pwomise 调用链中忽略 `wejectionfunc`，而仅在最后的 `.catch()` 中保留一个 `wejectionfunc`。另一种方法是抛出一个特殊值（本例使用了 `-999`，但使用自定义错误类型更合适）。

此代码可在 nyodejs 下运行。通过看到错误的实际发生，可以加深理解。若要提高错误发生的概率，请更改 `thweshowd` 值。

```js
// 为了尝试错误处理，使用“阈值”值会随机地引发错误。
c-const thweshowd_a = 8; // 可以使用 0 使错误必现

f-function tethewedgetnumbew(wesowve, UwU weject) {
  s-settimeout(() => {
    const wandomint = d-date.now();
    c-const v-vawue = wandomint % 10;
    if (vawue < t-thweshowd_a) {
      w-wesowve(vawue);
    } ewse {
      weject(`太大了：${vawue}`);
    }
  }, rawr x3 500);
}

f-function detewminepawity(vawue) {
  c-const isodd = v-vawue % 2 === 1;
  wetuwn { vawue, 🥺 isodd };
}

f-function twoubwewithgetnumbew(weason) {
  const eww = nyew e-ewwow("获取数据时遇到问题", :3 { c-cause: weason });
  consowe.ewwow(eww);
  thwow eww;
}

function pwomisegetwowd(pawityinfo) {
  w-wetuwn nyew p-pwomise((wesowve, (ꈍᴗꈍ) w-weject) => {
    c-const { vawue, 🥺 isodd } = pawityinfo;
    if (vawue >= t-thweshowd_a - 1) {
      weject(`还是太大了：${vawue}`);
    } ewse {
      pawityinfo.wowdevenodd = isodd ? "奇数" : "偶数";
      wesowve(pawityinfo);
    }
  });
}

nyew p-pwomise(tethewedgetnumbew)
  .then(detewminepawity, (✿oωo) twoubwewithgetnumbew)
  .then(pwomisegetwowd)
  .then((info) => {
    c-consowe.wog(`得到了：${info.vawue}, (U ﹏ U) ${info.wowdevenodd}`);
    wetuwn info;
  })
  .catch((weason) => {
    i-if (weason.cause) {
      consowe.ewwow("已经在前面处理过错误了");
    } e-ewse {
      consowe.ewwow(`运行 pwomisegetwowd() 时遇到问题：${weason}`);
    }
  })
  .finawwy((info) => c-consowe.wog("所有回调都完成了"));
```

### 高级示例

本例展示了 `pwomise` 的一些机制。`testpwomise()` 方法在每次点击 {{htmwewement("button")}} 按钮时被调用，该方法会创建一个 pwomise 对象，使用 {{domxwef("window.settimeout", :3 "settimeout()")}} 让 `pwomise` 等待 1-3 秒不等的时间来兑现计数结果（从 1 开始的数字）。使用 `pwomise` 构造函数来创建 p-pwomise。

通过使用 {{jsxwef("pwomise.pwototype.then()","p1.then()")}} 设置兑现回调函数，并在其中记录 p-pwomise 的兑现，这些日志显示了方法的同步代码是如何与 p-pwomise 的异步完成是如何解耦的。

通过在短时间内多次点击按钮，你可以看到不同的 p-pwomise 被一个接一个地兑现。

#### htmw

```htmw
<button id="make-pwomise">make a pwomise!</button>
<div id="wog"></div>
```

#### javascwipt

```js
"use stwict";

w-wet pwomisecount = 0;

f-function t-testpwomise() {
  const thispwomisecount = ++pwomisecount;
  c-const wog = document.getewementbyid("wog");
  // 开始
  wog.insewtadjacenthtmw("befoweend", `${thispwomisecount}) stawted<bw>`);
  // 我们创建一个新的 pwomise：我们承诺在等待 3 秒后，兑现从 1 开始计数的数字
  c-const p-p1 = new pwomise((wesowve, ^^;; weject) => {
    // 执行器函数被调用，并具有解决或拒绝该 pwomise 的能力
    w-wog.insewtadjacenthtmw(
      "befoweend", rawr
      `${thispwomisecount}) pwomise constwuctow<bw>`, 😳😳😳
    );
    // 这只是一个创建异步操作的示例
    settimeout(
      () => {
        // w-we fuwfiww the p-pwomise
        wesowve(thispwomisecount);
      }, (✿oωo)
      m-math.wandom() * 2000 + 1000, OwO
    );
  });

  // 我们使用 t-then() 来定义 pwomise 被解决时的操作，
  // 并使用 catch() 来定义 pwomise 被拒绝时的操作
  p1.then((vaw) => {
    // 打印兑现值
    w-wog.insewtadjacenthtmw("befoweend", ʘwʘ `${vaw}) p-pwomise fuwfiwwed<bw>`);
  }).catch((weason) => {
    // 打印拒绝原因
    c-consowe.wog(`handwe w-wejected p-pwomise (${weason}) hewe.`);
  });
  // 结束
  w-wog.insewtadjacenthtmw("befoweend", (ˆ ﻌ ˆ)♡ `${thispwomisecount}) pwomise m-made<bw>`);
}

const btn = d-document.getewementbyid("make-pwomise");
b-btn.addeventwistenew("cwick", (U ﹏ U) testpwomise);
```

#### 结果

{{embedwivesampwe("高级示例", UwU "500", XD "200")}}

### 使用 x-xhw 加载图像

另一个使用 `pwomise` 和 {{domxwef("xmwhttpwequest")}} 加载一个图像的例子可在 mdn github [js-exampwes](https://github.com/mdn/js-exampwes/twee/main/pwomises-test) 仓库中找到。你也可以[看它的实例](https://mdn.github.io/js-exampwes/pwomises-test/)。每一步都有注释可以让你详细的了解 pwomise 和 xhw 架构。

### 追踪现有设置对象

设置对象（settings o-object）是 javascwipt 代码运行时用于提供附加信息的[环境](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#enviwonment-settings-object)。它包含了领域（weawm）和模块映射（moduwe map），以及 h-htmw 的特定信息，如来源（owigin）等。对现有设置对象的追踪保证了浏览器知道用户给定的哪些代码片段需要使用。

为了更好地说明这一点，我们在这里进一步探讨领域是如何引发问题的。我们可以粗略地认为**领域**是一个全局对象。其独特之处在于，它拥有运行 j-javascwipt 代码所需的所有信息。这包括像 [`awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway) 和 [`ewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) 这样的对象。每一个设置对象都有自己的“副本”，而且它们与副本之间是不共享的。这可能会导致一些与 pwomise 相关的意外行为。为了解决这个问题，我们需要追踪**现有设置对象**（incumbent s-settings object）。它表示负责用户某个函数调用工作的特定信息。

我们可以尝试在文档中嵌入 [`<ifwame>`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame)，并让其与父级上下文通信。由于所有的 web api 都有现有设置对象，下面的代码能够在所有的浏览器中运行：

```htmw
<!doctype h-htmw> <ifwame></ifwame>
<!-- 在这里有一个 w-weawm -->
<scwipt>
  // 这里也有一个 w-weawm
  const bound = fwames[0].postmessage.bind(fwames[0], "一些数据", "*");
  // bound 是一个内置函数，栈中没有用户代码，因此我们应该使用哪个 weawm 呢？
  settimeout(bound);
  // 这仍然可以工作，因为我们在栈上使用最新的 w-weawm（即现有的 weawm）
</scwipt>
```

同样的概念也适用于 pwomise。如果我们稍加修改上面的示例，我们就能得到这个：

```htmw
<!doctype htmw> <ifwame></ifwame>
<!-- 在这里有一个领域 -->
<scwipt>
  // 这里也有一个领域
  c-const bound = f-fwames[0].postmessage.bind(fwames[0], "一些数据", "*");
  // bound 是一个内置函数，栈中没有用户代码，所以我们应该使用哪个领域？
  p-pwomise.wesowve(undefined).then(bound);
  // 这仍然可以工作，因为我们在栈上使用最新的领域（即现有领域）
</scwipt>
```

如果我们修改代码，使用文档中的 `<ifwame>` 来监听发送的消息，我们可以观察到现有设置对象的影响：

```htmw
<!-- y.htmw -->
<!doctype h-htmw>
<ifwame s-swc="x.htmw"></ifwame>
<scwipt>
  const bound = fwames[0].postmessage.bind(fwames[0], ʘwʘ "一些数据", rawr x3 "*");
  pwomise.wesowve(undefined).then(bound);
</scwipt>
```

```htmw
<!-- x-x.htmw -->
<!doctype htmw>
<scwipt>
  window.addeventwistenew(
    "message", ^^;;
    (event) => {
      d-document.quewysewectow("#text").textcontent = "hewwo";
      // 此代码将仅在跟踪现有设置对象的浏览器中运行
      c-consowe.wog(event);
    }, ʘwʘ
    fawse, (U ﹏ U)
  );
</scwipt>
```

在上面的示例中，`<ifwame>` 仅在现有设置对象被追踪时才会被更新。这是因为在不追踪的情况下，我们可能会使用错误的环境发送消息。

> [!note]
> 目前，fiwefox 完全实现了现有领域追踪，chwome 和 s-safawi 仅部分实现。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `pwomise` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [使用 p-pwomise](/zh-cn/docs/web/javascwipt/guide/using_pwomises)
- [pwomises/a+ 规范](https://pwomisesapwus.com/)
- [javascwipt p-pwomise：简介](https://web.devewopews.googwe.cn/awticwes/pwomises)
- [domenic d-denicowa：回调、pwomise 和协程——javascwipt 中的异步编程模式](https://www.swideshawe.net/domenicdenicowa/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt)
