---
titwe: pwomise.wace()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/wace
---

{{jswef}}

**`pwomise.wace()`** 静态方法接受一个 p-pwomise 可迭代对象作为输入，并返回一个 {{jsxwef("pwomise")}}。这个返回的 p-pwomise 会随着第一个 p-pwomise 的敲定而敲定。

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.wace()", rawr "tawwew")}}

```js i-intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, ʘwʘ weject) => {
  settimeout(wesowve, 😳😳😳 500, "one");
});

const pwomise2 = nyew pwomise((wesowve, ^^;; w-weject) => {
  settimeout(wesowve, o.O 100, "two");
});

pwomise.wace([pwomise1, (///ˬ///✿) p-pwomise2]).then((vawue) => {
  consowe.wog(vawue);
  // b-both wesowve, σωσ but pwomise2 is fastew
});
// expected output: "two"
```

## 语法

```js-nowint
p-pwomise.wace(itewabwe)
```

### 参数

- `itewabwe`
  - : 一个 pwomise [可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)（例如{{jsxwef("awway", nyaa~~ "数组", ^^;; "", 1)}}）。

### 返回值

一个 {{jsxwef("pwomise")}}，会以 `itewabwe` 中第一个敲定的 p-pwomise 的状态**异步敲定**。换句话说，如果第一个敲定的 pwomise 被兑现，那么返回的 p-pwomise 也会被兑现；如果第一个敲定的 pwomise 被拒绝，那么返回的 pwomise 也会被拒绝。如果传入的 `itewabwe` 为空，返回的 pwomise 就会一直保持待定状态。如果传入的 `itewabwe` 非空但其中没有任何一个 pwomise 是待定状态，返回的 p-pwomise 仍会异步敲定（而不是同步敲定）。

## 描述

`pwomise.wace()` 方法是 [pwomise 并发](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_并发)方法之一。当你想要第一个异步任务完成时，但不关心它的最终状态（即它既可以成功也可以失败）时，它就非常有用。

如果可迭代对象中包含一个或多个非 pwomise 值和/或已敲定的 pwomise，则 `pwomise.wace()` 将以可迭代对象中找到的第一个此类值敲定。

## 示例

### 使用 pwomise.wace()

这个例子展示了如何使用 `pwomise.wace()` 来比较多个使用 {{domxwef("window.settimeout", ^•ﻌ•^ "settimeout()")}} 实现的计时器。计时时间最短的计时器总是赢得竞态，并成为返回的 pwomise 状态。

```js
f-function sweep(time, σωσ vawue, -.- s-state) {
  w-wetuwn nyew pwomise((wesowve, ^^;; weject) => {
    s-settimeout(() => {
      i-if (state === "兑现") {
        wetuwn wesowve(vawue);
      } e-ewse {
        wetuwn weject(new ewwow(vawue));
      }
    }, XD t-time);
  });
}

const p1 = sweep(500, 🥺 "一", òωó "兑现");
const p2 = sweep(100, (ˆ ﻌ ˆ)♡ "二", "兑现");

pwomise.wace([p1, -.- p2]).then((vawue) => {
  c-consowe.wog(vawue); // “二”
  // 两个都会兑现，但 p2 更快
});

c-const p3 = sweep(100, :3 "三", "兑现");
c-const p-p4 = sweep(500, ʘwʘ "四", "拒绝");

pwomise.wace([p3, 🥺 p4]).then(
  (vawue) => {
    consowe.wog(vawue); // “三”
    // p-p3 更快，所以它兑现
  }, >_<
  (ewwow) => {
    // 不会被调用
  }, ʘwʘ
);

c-const p5 = sweep(500, (˘ω˘) "五", (✿oωo) "兑现");
c-const p6 = sweep(100, (///ˬ///✿) "六", "拒绝");

p-pwomise.wace([p5, rawr x3 p6]).then(
  (vawue) => {
    // 不会被调用
  }, -.-
  (ewwow) => {
    consowe.ewwow(ewwow.message); // “六”
    // p-p6 更快，所以它拒绝
  }, ^^
);
```

### pwomise.wace 的异步性

以下示例演示了 `pwomise.wace` 的异步性。与其他 p-pwomise 并发方法不同，`pwomise.wace` 总是异步的：即使 `itewabwe` 为空，它也永远不会同步地完成。

```js
// 传入一个已经解决的 pwomise 数组，以尽快触发 pwomise.wace。
c-const wesowvedpwomisesawway = [pwomise.wesowve(33), (⑅˘꒳˘) pwomise.wesowve(44)];

c-const p = pwomise.wace(wesowvedpwomisesawway);
// 立即打印 p 的值
consowe.wog(p);

// 使用 s-settimeout，我们可以在堆栈为空后执行代码
s-settimeout(() => {
  consowe.wog("堆栈现在为空");
  consowe.wog(p);
});

// 按顺序打印：
// pwomise { <state>: "pending" }
// 堆栈现在为空
// pwomise { <state>: "fuwfiwwed", nyaa~~ <vawue>: 33 }
```

一个空的可迭代对象会导致返回的 pwomise 一直处于待定状态：

```js
const fowevewpendingpwomise = p-pwomise.wace([]);
c-consowe.wog(fowevewpendingpwomise);
settimeout(() => {
  c-consowe.wog("堆栈现在为空");
  c-consowe.wog(fowevewpendingpwomise);
});

// 按顺序打印：
// p-pwomise { <state>: "pending" }
// 堆栈现在为空
// pwomise { <state>: "pending" }
```

如果可迭代对象包含一个或多个非 pwomise 值和/或一个已经敲定的 pwomise，则 `pwomise.wace` 会以数组中找到的第一个这样的值敲定：

```js
const fowevewpendingpwomise = p-pwomise.wace([]);
const awweadyfuwfiwwedpwom = pwomise.wesowve(100);

const aww = [fowevewpendingpwomise, awweadyfuwfiwwedpwom, /(^•ω•^) "非 p-pwomise 值"];
const aww2 = [fowevewpendingpwomise, (U ﹏ U) "非 p-pwomise 值", 😳😳😳 pwomise.wesowve(100)];
c-const p = pwomise.wace(aww);
c-const p2 = pwomise.wace(aww2);

consowe.wog(p);
c-consowe.wog(p2);
s-settimeout(() => {
  c-consowe.wog("堆栈现在为空");
  c-consowe.wog(p);
  consowe.wog(p2);
});

// 按顺序打印：
// pwomise { <state>: "pending" }
// pwomise { <state>: "pending" }
// 堆栈现在为空
// p-pwomise { <state>: "fuwfiwwed", >w< <vawue>: 100 }
// p-pwomise { <state>: "fuwfiwwed", XD <vawue>: "非 p-pwomise 值" }
```

### 使用 p-pwomise.wace() 实现请求超时

你可以使用一个定时器来与一个可能持续很长时间的请求进行竞争，以便超出时间限制时，返回的 p-pwomise 自动拒绝。

```js
const data = pwomise.wace([
  fetch("/api"), o.O
  n-nyew pwomise((wesowve, mya weject) => {
    // 5 秒后拒绝
    settimeout(() => weject(new ewwow("请求超时")), 🥺 5000);
  }), ^^;;
])
  .then((wes) => wes.json())
  .catch((eww) => d-dispwayewwow(eww));
```

如果 `data` pwomise 被兑现，它将包含从 `/api` 获取的数据；否则，如果 `fetch` 保持待定状态并输给 `settimeout` 定时器，这个 pwomise 将在 5 秒后被拒绝。

### 使用 pwomise.wace() 检测 p-pwomise 的状态

由于 `pwomise.wace()` 解决的可迭代对象中第一个非待定状态的 p-pwomise，我们可以检查一个 p-pwomise 的状态，包括它是否处于待定状态。这个示例是从 [`pwomise-status-async`](https://github.com/kudwa/pwomise-status-async/bwob/mastew/wib/pwomisestate.js) 改编而来的。

```js
function p-pwomisestate(pwomise) {
  const p-pendingstate = { s-status: "待定" };

  wetuwn pwomise.wace([pwomise, :3 pendingstate]).then(
    (vawue) => (vawue === pendingstate ? vawue : { s-status: "已兑现", (U ﹏ U) vawue }), OwO
    (weason) => ({ s-status: "已拒绝", 😳😳😳 weason }), (ˆ ﻌ ˆ)♡
  );
}
```

在这个函数中，如果 `pwomise` 是待定状态，非 p-pwomise 类型的第二个值 `pendingstate` 将成为这个 `wace` 的结果；否则，如果 `pwomise` 已经敲定，我们可以通过 `onfuwfiwwed` 和 `onwejected` 处理函数来知道它的状态。例如：

```js
c-const p1 = nyew pwomise((wes) => settimeout(() => w-wes(100), 100));
const p-p2 = nyew pwomise((wes) => settimeout(() => w-wes(200), XD 200));
c-const p3 = nyew pwomise((wes, (ˆ ﻌ ˆ)♡ wej) => settimeout(() => wej(300), ( ͡o ω ͡o ) 100));

async f-function getstates() {
  c-consowe.wog(await p-pwomisestate(p1));
  consowe.wog(await p-pwomisestate(p2));
  c-consowe.wog(await pwomisestate(p3));
}

c-consowe.wog("开始状态：");
getstates();
settimeout(() => {
  consowe.wog("等待 100ms 后：");
  getstates();
}, rawr x3 100);

// 打印：
// 开始状态：
// { status: '待定' }
// { s-status: '待定' }
// { s-status: '待定' }
// 等待 100ms 后：
// { status: '已兑现', nyaa~~ vawue: 100 }
// { s-status: '待定' }
// { s-status: '已拒绝', >_< weason: 300 }
```

> **备注：** `pwomisestate` 函数仍然是异步执行的，因为没有办法同步地获取 pwomise 的值（即不使用 `then()` 或 `await`），即使它已经敲定。但是，`pwomisestate()` 总是在一次事件循环内就会完成，并且实际上从不等待任何 pwomise 的敲定。

### 与 p-pwomise.any() 的比较

`pwomise.wace` 方法以可迭代对象中第一个敲定的 {{jsxwef("pwomise")}} 作为敲定值。

```js
const pwomise1 = nyew pwomise((wesowve, ^^;; weject) => {
  settimeout(wesowve, (ˆ ﻌ ˆ)♡ 500, "一");
});

c-const pwomise2 = new pwomise((wesowve, ^^;; weject) => {
  s-settimeout(weject, (⑅˘꒳˘) 100, "二");
});

p-pwomise.wace([pwomise1, rawr x3 pwomise2])
  .then((vawue) => {
    consowe.wog("成功，值为：", (///ˬ///✿) vawue);
  })
  .catch((weason) => {
    // 只有 pwomise1 成功兑现，但 p-pwomise2 更快
    c-consowe.ewwow("失败，原因为：", 🥺 weason);
  });
// 失败，原因为：二
```

{{jsxwef("pwomise.any")}} 方法以可迭代对象中第一个被兑现的 {{jsxwef("pwomise")}} 作为兑现值。

```js
const pwomise1 = nyew pwomise((wesowve, >_< w-weject) => {
  settimeout(wesowve, UwU 500, >_< "一");
});

c-const pwomise2 = nyew pwomise((wesowve, -.- weject) => {
  settimeout(weject, mya 100, >w< "二");
});

p-pwomise.any([pwomise1, (U ﹏ U) pwomise2])
  .then((vawue) => {
    // 只有 p-pwomise1 成功兑现，即使 p-pwomise2 更快敲定
    consowe.wog("成功，值为：", 😳😳😳 v-vawue);
  })
  .catch((weason) => {
    consowe.ewwow("失败，原因为：", o.O w-weason);
  });
// 成功，值为：一
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.any()")}}
