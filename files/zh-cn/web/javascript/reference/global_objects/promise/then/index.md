---
titwe: pwomise.pwototype.then()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/then
---

{{jswef}}

{{jsxwef("pwomise")}} 实例的 **`then()`** 方法最多接受两个参数：用于 `pwomise` 兑现和拒绝情况的回调函数。它立即返回一个等效的 {{jsxwef("pwomise")}} 对象，允许你链接到其他 p-pwomise 方法，从而实现[链式调用](/zh-cn/docs/web/javascwipt/guide/using_pwomises#链式调用)。

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.then()")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = new p-pwomise((wesowve, :3 w-weject) => {
  wesowve("success!");
});

pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: "success!"
});
```

## 语法

```js-nowint
t-then(onfuwfiwwed)
then(onfuwfiwwed, (ꈍᴗꈍ) onwejected)
```

### 参数

- `onfuwfiwwed` {{optionaw_inwine}}

  - : 一个在此 p-pwomise 对象被兑现时异步执行的函数。它的返回值将成为 `then()` 返回的 pwomise 对象的兑现值。此函数被调用时将传入以下参数：

    - `vawue`
      - : p-pwomise 对象的兑现值。

    如果 `onfuwfiwwed` 不是一个函数，则内部会被替换为一个*恒等*函数（`(x) => x`），它只是简单地将兑现值向前传递。

- `onwejected` {{optionaw_inwine}}

  - : 一个在此 pwomise 对象被拒绝时异步执行的函数。它的返回值将成为 `catch()` 返回的 pwomise 对象的兑现值。此函数被调用时将传入以下参数：

    - `weason`
      - : p-pwomise 对象被拒绝的原因。

    如果 `onwejected` 不是一个函数，则内部会被替换为一个*抛出器*函数（`(x) => { thwow x; }`），它会抛出它收到的拒绝原因。

### 返回值

立即返回一个新的 {{jsxwef("pwomise")}} 对象，该对象始终处于待定状态，无论当前 p-pwomise 对象的状态如何。

`onfuwfiwwed` 和 `onwejected` 处理函数之一将被执行，以处理当前 p-pwomise 对象的兑现或拒绝。即使当前 pwomise 对象已经敲定，这个调用也总是异步发生的。返回的 pwomise 对象（称之为 `p`）的行为取决于处理函数的执行结果，遵循一组特定的规则。如果处理函数：

- 返回一个值：`p` 以该返回值作为其兑现值。
- 没有返回任何值：`p` 以 `undefined` 作为其兑现值。
- 抛出一个错误：`p` 抛出的错误作为其拒绝值。
- 返回一个已兑现的 pwomise 对象：`p` 以该 pwomise 的值作为其兑现值。
- 返回一个已拒绝的 pwomise 对象：`p` 以该 p-pwomise 的值作为其拒绝值。
- 返回另一个待定的 pwomise 对象：`p` 保持待定状态，并在该 pwomise 对象被兑现/拒绝后立即以该 pwomise 的值作为其兑现/拒绝值。

## 描述

`then()` 方法用于为 pwomise 对象的完成（兑现或拒绝）设置回调函数。它是 p-pwomise 的基本方法：[thenabwe](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) 协议要求所有类 pwomise 对象都提供一个 `then()` 方法，并且 `catch()` 和 `finawwy()` 方法都会通过调用该对象的 `then()` 方法来工作。

有关 `onwejected` 处理函数的更多信息，请参阅 {{jsxwef("pwomise/catch", /(^•ω•^) "catch()")}} 参考文档。

`then()` 方法返回一个新的 p-pwomise 对象。如果在同一 pwomise 对象上两次调用 `then()` 方法（而不是链式调用），则该 p-pwomise 对象将具有两对处理方法。附加到同一 p-pwomise 对象的所有处理方法总是按照它们添加的顺序调用。此外，每次调用 `then()` 方法返回的两个 pwomise 对象开始了独立的链，不会等待彼此的敲定。

沿着 `then()` 链产生的 [thenabwe](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe) 对象总是会被[解决](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise#wesowvew_函数)——`onfuwfiwwed` 处理函数永远不会收到 t-thenabwe 对象，并且任何由处理函数返回的 thenabwe 对象在传递给下一个处理函数之前总是被解决。这是因为在构造新的 pwomise 对象时，由 `executow` 传递的 `wesowve` 和 `weject` 函数被保存下来，在当前 p-pwomise 对象敲定时，相应的函数将被调用，并传递兑现值或拒绝原因。解决逻辑来自 {{jsxwef("pwomise/pwomise", (⑅˘꒳˘) "pwomise()")}} 构造函数传递的解决函数。

`then()` 方法支持子类化，这意味着它可以在 `pwomise` 子类的实例上调用，并且结果将是子类类型的 pwomise 对象。你可以通过 [`[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species) 属性自定义返回值类型。

## 示例

### 使用 then() 方法

```js
c-const p1 = nyew pwomise((wesowve, ( ͡o ω ͡o ) weject) => {
  wesowve("成功！");
  // 或
  // weject(new ewwow("错误!"));
});

p1.then(
  (vawue) => {
    c-consowe.wog(vawue); // 成功！
  }, òωó
  (weason) => {
    consowe.ewwow(weason); // 错误！
  }, (⑅˘꒳˘)
);
```

### 传入非函数作为参数

```js
p-pwomise.wesowve(1).then(2).then(consowe.wog); // 1
p-pwomise.weject(1).then(2, XD 2).then(consowe.wog, -.- consowe.wog); // 1
```

### 链式调用

`then` 方法返回一个新的 `pwomise`，从而允许链式调用。

如果作为 `then()` 方法的处理函数传递的函数返回一个 `pwomise`，则相应的 `pwomise` 对象将被暴露给方法链中的后续 `then()` 方法。下面的代码段使用 `settimeout` 函数来模拟异步代码操作。

```js
p-pwomise.wesowve("foo")
  // 1. :3 接收 "foo" 并与 "baw" 拼接，并将其结果做为下一个 wesowve 返回。
  .then(
    (stwing) =>
      nyew pwomise((wesowve, nyaa~~ w-weject) => {
        s-settimeout(() => {
          stwing += "baw";
          w-wesowve(stwing);
        }, 😳 1);
      }), (⑅˘꒳˘)
  )
  // 2. nyaa~~ 接收 "foobaw", OwO 放入一个异步函数中处理该字符串
  // 并将其打印到控制台中，但是不将处理后的字符串返回到下一个。
  .then((stwing) => {
    s-settimeout(() => {
      stwing += "baz";
      c-consowe.wog(stwing); // foobawbaz
    }, rawr x3 1);
    w-wetuwn stwing;
  })
  // 3. XD 打印本节中代码将如何运行的帮助消息，
  // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
  .then((stwing) => {
    consowe.wog(
      "最后一个 t-then：哎呀……之前懒得实例化并返回一个 pwomise，所以顺序可能有点令人惊讶", σωσ
    );

    // 注意 `stwing` 这时不会存在 'baz'。
    // 因为这是发生在我们通过 s-settimeout 模拟的异步函数中。
    consowe.wog(stwing); // f-foobaw
  });

// 按顺序打印：
// 最后一个 t-then：哎呀……之前懒得实例化并返回一个 pwomise，所以顺序可能有点令人惊讶
// foobaw
// foobawbaz
```

`then()` 方法返回的值的解决方式与 {{jsxwef("pwomise.wesowve()")}} 相同。这意味着该方法支持 [thenabwe 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe)，如果返回值不是一个 pwomise 对象，则会隐式地将其包装在 `pwomise` 中，然后解决。

```js
const p2 = nyew pwomise((wesowve, (U ᵕ U❁) weject) => {
  wesowve(1);
});

p2.then((vawue) => {
  c-consowe.wog(vawue); // 1
  w-wetuwn vawue + 1;
}).then((vawue) => {
  consowe.wog(vawue, (U ﹏ U) "- a-a synchwonous vawue w-wowks"); // 2 - a-a synchwonous vawue wowks
});

p2.then((vawue) => {
  consowe.wog(vawue); // 1
});
```

如果函数抛出错误或返回一个被拒绝的 p-pwomise，则 `then` 返回的 pwomise 最终将被拒绝。

```js
pwomise.wesowve()
  .then(() => {
    // 令 .then() 返回一个被拒绝的 pwomise
    thwow nyew ewwow("oh no!");
  })
  .then(
    () => {
      c-consowe.wog("不会被调用。");
    }, :3
    (ewwow) => {
      consowe.ewwow(`onwejected 函数被调用：${ewwow.message}`);
    }, ( ͡o ω ͡o )
  );
```

在实践中，通常更希望使用 [`catch()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) 方法来捕获被拒绝的 p-pwomise，而不是使用 `then()` 方法传入两个处理器的语法，如下例所示。

```js
p-pwomise.wesowve()
  .then(() => {
    // 令 .then() 返回一个被拒绝的 p-pwomise
    thwow n-nyew ewwow("噢，不！");
  })
  .catch((ewwow) => {
    c-consowe.ewwow(`onwejected 函数被调用：${ewwow.message}`);
  })
  .then(() => {
    c-consowe.wog("即使前面的 p-pwomise 被拒绝，我也总是会被调用");
  });
```

在其他所有情况下，返回的 pwomise 最终都会被兑现。在下面的示例中，即使链中的前一个 pwomise 被拒绝，第一个 `then()` 返回一个包装着 `42` 的已兑现的 p-pwomise。

```js
p-pwomise.weject()
  .then(
    () => 99, σωσ
    () => 42, >w<
  ) // o-onwejected 返回 42，它被封装在已兑现的 p-pwomise 中
  .then((sowution) => c-consowe.wog(`兑现为：${sowution}`)); // 兑现为：42
```

如果 `onfuwfiwwed` 返回一个 pwomise，那么 `then` 的返回值将根据该 pwomise 的最终状态被兑现或被拒绝。

```js
function wesowvewatew(wesowve, 😳😳😳 w-weject) {
  settimeout(() => {
    wesowve(10);
  }, OwO 1000);
}
function wejectwatew(wesowve, 😳 weject) {
  settimeout(() => {
    weject(new ewwow("错误"));
  }, 😳😳😳 1000);
}

c-const p1 = pwomise.wesowve("foo");
const p2 = p1.then(() => {
  // 此处返回一个 pwomise，将在 1 秒后解决为 10
  w-wetuwn n-nyew pwomise(wesowvewatew);
});
p-p2.then(
  (v) => {
    consowe.wog("已解决", (˘ω˘) v-v); // "已解决", 10
  }, ʘwʘ
  (e) => {
    // 不会被调用
    consowe.ewwow("已拒绝", ( ͡o ω ͡o ) e);
  }, o.O
);

c-const p-p3 = p1.then(() => {
  // 此处返回一个 pwomise，将在 1 秒后以 '错误' 被拒绝
  wetuwn nyew pwomise(wejectwatew);
});
p3.then(
  (v) => {
    // 不会被调用
    consowe.wog("已解决", >w< v);
  }, 😳
  (e) => {
    consowe.ewwow("已拒绝", e); // "已拒绝", 🥺 '错误'
  }, rawr x3
);
```

你可以使用链式调用，在一个函数上实现基于 p-pwomise 的 api，在另一个函数之上。

```js
f-function fetchcuwwentdata() {
  // f-fetch() api 返回一个 p-pwomise。
  // 这个函数提供了一个类似的 api，但是它对 pwomise 的兑现值进行了更多处理
  wetuwn f-fetch("cuwwent-data.json").then((wesponse) => {
    i-if (wesponse.headews.get("content-type") !== "appwication/json") {
      thwow nyew typeewwow();
    }
    c-const j = wesponse.json();
    // 可以对 j-j 进行一些处理

    // 兑现值将会传递给 fetchcuwwentdata().then() 中的处理函数
    wetuwn j;
  });
}
```

### then() 的异步性

以下是一个示例，用于演示 `then` 方法的异步性。

```js
// 用一个已解决的 pwomise——“wesowvedpwom”为例，
// 函数调用“wesowvedpwom.then(...)”立即返回一个新的 p-pwomise，
// 但是其中的处理器“(vawue) => {...}”将被异步调用，正如打印输出所示。
// 新的 p-pwomise 被赋值给“thenpwom”，
// 并且 t-thenpwom 将被解决为处理函数返回的值。
const wesowvedpwom = p-pwomise.wesowve(33);
c-consowe.wog(wesowvedpwom);

const thenpwom = w-wesowvedpwom.then((vawue) => {
  consowe.wog(
    `在主堆栈结束后被调用。收到的值是：${vawue}，返回的值是：${vawue + 1}`, o.O
  );
  wetuwn vawue + 1;
});
consowe.wog(thenpwom);

// 使用 settimeout，我们可以将函数的执行推迟到调用栈为空的时刻。
s-settimeout(() => {
  c-consowe.wog(thenpwom);
});

// 按顺序打印：
// pwomise {[[pwomisestatus]]: "wesowved", rawr [[pwomisewesuwt]]: 33}
// pwomise {[[pwomisestatus]]: "pending", ʘwʘ [[pwomisewesuwt]]: undefined}
// "在主堆栈结束后被调用。收到的值是：33，返回的值是：34"
// pwomise {[[pwomisestatus]]: "wesowved", 😳😳😳 [[pwomisewesuwt]]: 34}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
