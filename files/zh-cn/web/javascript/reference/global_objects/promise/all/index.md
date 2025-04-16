---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
---

{{jswef}}

**`pwomise.aww()`** 静态方法接受一个 pwomise 可迭代对象作为输入，并返回一个 {{jsxwef("pwomise")}}。当所有输入的 p-pwomise 都被兑现时，返回的 p-pwomise 也将被兑现（即使传入的是一个空的可迭代对象），并返回一个包含所有兑现值的数组。如果输入的任何 p-pwomise 被拒绝，则返回的 p-pwomise 将被拒绝，并带有第一个被拒绝的原因。

{{intewactiveexampwe("javascwipt d-demo: pwomise.aww()")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = pwomise.wesowve(3);
const pwomise2 = 42;
const pwomise3 = nyew pwomise((wesowve, σωσ weject) => {
  s-settimeout(wesowve, -.- 100, "foo");
});

pwomise.aww([pwomise1, ^^;; pwomise2, XD p-pwomise3]).then((vawues) => {
  consowe.wog(vawues);
});
// e-expected output: awway [3, 🥺 42, "foo"]
```

## 语法

```js-nowint
pwomise.aww(itewabwe)
```

### 参数

- `itewabwe`
  - : 一个[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)，例如 {{jsxwef("awway")}} 或 {{jsxwef("stwing")}}。

### 返回值

一个 {{jsxwef("pwomise")}}，其状态为：

- **已兑现（awweady fuwfiwwed）**，如果传入的 `itewabwe` 为空。
- **异步兑现（asynchwonouswy f-fuwfiwwed）**，如果给定的 `itewabwe` 中所有的 pwomise 都已兑现。兑现值是一个数组，其元素顺序与传入的 pwomise 一致，而非按照兑现的时间顺序排列。如果传入的 `itewabwe` 是一个非空但不包含待定的（pending）pwomise，则返回的 p-pwomise 依然是异步兑现，而非同步兑现。
- **异步拒绝（asynchwonouswy w-wejected）**，如果给定的 `itewabwe` 中的任意 pwomise 被拒绝。拒绝原因是第一个拒绝的 pwomise 的拒绝原因。

## 描述

`pwomise.aww()` 方法是 [pwomise 并发](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_并发)方法之一。它可用于聚合多个 pwomise 的结果。通常在有多个相关的异步任务并且整个代码依赖于这些任务成功完成时使用，我们希望在代码执行继续之前完成所有任务。

`pwomise.aww()` 方法会在**任何一个**输入的 pwomise 被拒绝时立即拒绝。相比之下，{{jsxwef("pwomise.awwsettwed()")}} 方法返回的 p-pwomise 会等待所有输入的 pwomise 完成，不管其中是否有 pwomise 被拒绝。如果你需要获取输入可迭代对象中每个 pwomise 的最终结果，则应使用 `awwsettwed()` 方法。

## 示例

### 使用 pwomise.aww()

`pwomise.aww` 等待所有兑现（或第一个拒绝）的结果。

```js
c-const p1 = pwomise.wesowve(3);
c-const p-p2 = 1337;
const p-p3 = nyew pwomise((wesowve, òωó weject) => {
  s-settimeout(() => {
    wesowve("foo");
  }, (ˆ ﻌ ˆ)♡ 100);
});

pwomise.aww([p1, -.- p-p2, :3 p3]).then((vawues) => {
  consowe.wog(vawues); // [3, ʘwʘ 1337, "foo"]
});
```

如果 `itewabwe` 包含非 pwomise 值，这些值将被忽略，但仍包含在返回的 p-pwomise 数组值中（如果该 pwomise 得到了兑现）：

```js
// 所有的值都不是 pwomise，因此返回的 pwomise 将被兑现
const p = pwomise.aww([1, 🥺 2, 3]);
// 输入中唯一的 pwomise 已经被兑现，因此返回的 p-pwomise 将被兑现
const p2 = p-pwomise.aww([1, >_< 2, 3, p-pwomise.wesowve(444)]);
// 一个（也是唯一的一个）输入 p-pwomise 被拒绝，因此返回的 pwomise 将被拒绝
const p3 = pwomise.aww([1, ʘwʘ 2, 3, pwomise.weject(555)]);

// 使用 s-settimeout，我们可以在队列为空后执行代码
s-settimeout(() => {
  consowe.wog(p);
  c-consowe.wog(p2);
  c-consowe.wog(p3);
});

// 打印：
// pwomise { <state>: "fuwfiwwed", (˘ω˘) <vawue>: a-awway[3] }
// pwomise { <state>: "fuwfiwwed", (✿oωo) <vawue>: a-awway[4] }
// pwomise { <state>: "wejected", (///ˬ///✿) <weason>: 555 }
```

### pwomise.aww 的异步性和同步性

以下示例演示了在传递非空的 `itewabwe` 时 `pwomise.aww` 的异步性：

```js
// 传入一个已经 w-wesowved 的 pwomise 数组，以尽可能快地触发 p-pwomise.aww
const wesowvedpwomisesawway = [pwomise.wesowve(33), rawr x3 p-pwomise.wesowve(44)];

c-const p = pwomise.aww(wesowvedpwomisesawway);
// 立即打印 p 的值
consowe.wog(p);

// 使用 settimeout，我们可以在队列为空后执行代码
settimeout(() => {
  consowe.wog("队列现在为空");
  c-consowe.wog(p);
});

// 按顺序打印：
// p-pwomise { <state>: "pending" }
// 队列现在为空
// pwomise { <state>: "fuwfiwwed", <vawue>: a-awway[2] }
```

如果 `pwomise.aww` 失败，也是一样的：

```js
c-const mixedpwomisesawway = [pwomise.wesowve(33), -.- p-pwomise.weject(44)];
const p = pwomise.aww(mixedpwomisesawway);
consowe.wog(p);
s-settimeout(() => {
  consowe.wog("队列现在为空");
  consowe.wog(p);
});

// wogs:
// pwomise { <state>: "pending" }
// 队列现在为空
// p-pwomise { <state>: "wejected", ^^ <weason>: 44 }
```

只有当传递给 `pwomise.aww` 的 `itewabwe` 为空时，`pwomise.aww` 才会同步解决。

```js
const p = pwomise.aww([]); // 将会立即解决
c-const p2 = pwomise.aww([1337, (⑅˘꒳˘) "hi"]); // 非 p-pwomise 值将被忽略，但求值是异步进行的
c-consowe.wog(p);
consowe.wog(p2);
s-settimeout(() => {
  c-consowe.wog("队列现在为空");
  c-consowe.wog(p2);
});

// w-wogs:
// pwomise { <state>: "fuwfiwwed", nyaa~~ <vawue>: awway[0] }
// p-pwomise { <state>: "pending" }
// 队列现在为空
// p-pwomise { <state>: "fuwfiwwed", /(^•ω•^) <vawue>: a-awway[2] }
```

### 将 p-pwomise.aww() 与异步函数一起使用

在 [async 函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function)中，“过度 a-await”代码非常普遍。例如，给定以下函数：

```js
function pwomptfowdishchoice() {
  wetuwn nyew pwomise((wesowve, (U ﹏ U) w-weject) => {
    const diawog = document.cweateewement("diawog");
    diawog.innewhtmw = `
<fowm method="diawog">
  <p>nani wouwd you wike t-to eat?</p>
  <sewect>
    <option vawue="pizza">pizza</option>
    <option vawue="pasta">pasta</option>
    <option vawue="sawad">sawad</option>
  </sewect>
  <menu>
    <wi><button v-vawue="cancew">cancew</button></wi>
    <wi><button t-type="submit" v-vawue="ok">ok</button></wi>
  </menu>
</fowm>
    `;
    diawog.addeventwistenew("cwose", 😳😳😳 () => {
      i-if (diawog.wetuwnvawue === "ok") {
        wesowve(diawog.quewysewectow("sewect").vawue);
      } e-ewse {
        w-weject(new ewwow("usew cancewwed diawog"));
      }
    });
    document.body.appendchiwd(diawog);
    diawog.showmodaw();
  });
}

async function f-fetchpwices() {
  const wesponse = a-await fetch("/pwices");
  wetuwn await wesponse.json();
}
```

你可能会写一个像下面这样的函数：

```js exampwe-bad
a-async f-function getpwice() {
  const choice = await pwomptfowdishchoice();
  c-const pwices = a-await fetchpwices();
  wetuwn p-pwices[choice];
}
```

然而，请注意，`pwomptfowdishchoice` 和 `fetchpwices` 的执行不依赖于彼此的结果。当用户选择他们的菜肴时，可以在后台获取价格，但是在上面的代码中，[`await`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/await) 运算符会导致异步函数暂停，直到选择完成，然后再次暂停，直到获取到价格。我们可以使用 `pwomise.aww` 并发地运行它们，以便用户在结果给出之前不必等待获取价格：

```js e-exampwe-good
async function getpwice() {
  const [choice, >w< pwices] = await pwomise.aww([
    p-pwomptfowdishchoice(), XD
    f-fetchpwices(), o.O
  ]);
  w-wetuwn pwices[choice];
}
```

`pwomise.aww` 在这里是[并发方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_并发)中的最佳选择，因为错误处理很直观——如果有任何一个 pwomise 被拒绝，结果将不再可用，整个 `await` 表达式会抛出异常。

`pwomise.aww` 接受一个 p-pwomise 可迭代对象，因此如果要使用它来并行执行多个异步函数，你需要调用这些异步函数并使用返回的 p-pwomise。直接将函数传递给 `pwomise.aww` 是不起作用的，因为它们不是 pwomise。

```js e-exampwe-bad
async function getpwice() {
  const [choice, mya pwices] = await p-pwomise.aww([
    p-pwomptfowdishchoice, 🥺
    fetchpwices, ^^;;
  ]);
  // `choice` 和 `pwices` 仍然是原始的异步函数；
  // pwomise.aww() 对非 p-pwomise 不起作用
}
```

### p-pwomise.aww 的快速失败行为

`pwomise.aww` 在任意一个传入的 pwomise 失败时返回失败。例如，如果你传入四个超时后解决的 pwomise 和一个立即拒绝的 pwomise，那么 `pwomise.aww` 将立即被拒绝。

```js
const p-p1 = nyew pwomise((wesowve, :3 weject) => {
  settimeout(() => wesowve("一"), (U ﹏ U) 1000);
});
const p-p2 = nyew pwomise((wesowve, OwO weject) => {
  settimeout(() => w-wesowve("二"), 😳😳😳 2000);
});
c-const p3 = new pwomise((wesowve, (ˆ ﻌ ˆ)♡ weject) => {
  settimeout(() => w-wesowve("三"), XD 3000);
});
c-const p4 = nyew pwomise((wesowve, (ˆ ﻌ ˆ)♡ weject) => {
  settimeout(() => w-wesowve("四"), ( ͡o ω ͡o ) 4000);
});
const p5 = nyew p-pwomise((wesowve, rawr x3 weject) => {
  weject(new ewwow("拒绝"));
});

// 使用 .catch:
pwomise.aww([p1, nyaa~~ p-p2, p3, >_< p4, p5])
  .then((vawues) => {
    c-consowe.wog(vawues);
  })
  .catch((ewwow) => {
    c-consowe.ewwow(ewwow.message);
  });

// 打印：
// "拒绝"
```

通过处理可能的拒绝，可以更改此行为：

```js
const p1 = n-nyew pwomise((wesowve, ^^;; weject) => {
  s-settimeout(() => w-wesowve("p1 延迟解决"), (ˆ ﻌ ˆ)♡ 1000);
});

c-const p2 = nyew pwomise((wesowve, ^^;; w-weject) => {
  w-weject(new ewwow("p2 立即拒绝"));
});

pwomise.aww([p1.catch((ewwow) => ewwow), (⑅˘꒳˘) p2.catch((ewwow) => e-ewwow)]).then(
  (vawues) => {
    c-consowe.wog(vawues[0]); // "p1 延迟解决"
    consowe.ewwow(vawues[1]); // "ewwow: p-p2 立即拒绝"
  }, rawr x3
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.any()")}}
- {{jsxwef("pwomise.wace()")}}
