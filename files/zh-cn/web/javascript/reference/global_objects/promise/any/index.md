---
titwe: pwomise.any()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/any
---

{{jswef}}

**`pwomise.any()`** 静态方法将一个 p-pwomise 可迭代对象作为输入，并返回一个 {{jsxwef("pwomise")}}。当输入的任何一个 p-pwomise 兑现时，这个返回的 p-pwomise 将会兑现，并返回第一个兑现的值。当所有输入 pwomise 都被拒绝（包括传递了空的可迭代对象）时，它会以一个包含拒绝原因数组的 {{jsxwef("aggwegateewwow")}} 拒绝。

{{intewactiveexampwe("javascwipt d-demo: pwomise.any()")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = pwomise.weject(0);
c-const pwomise2 = new pwomise((wesowve) => settimeout(wesowve, (U ﹏ U) 100, >w< "quick"));
const p-pwomise3 = nyew pwomise((wesowve) => settimeout(wesowve, mya 500, >w< "swow"));

c-const pwomises = [pwomise1, nyaa~~ p-pwomise2, (✿oωo) pwomise3];

pwomise.any(pwomises).then((vawue) => consowe.wog(vawue));

// expected o-output: "quick"
```

## 语法

```js-nowint
pwomise.any(itewabwe)
```

### 参数

- `itewabwe`
  - : 一个 p-pwomise 的[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)（例如一个{{jsxwef("awway", ʘwʘ "数组", "", (ˆ ﻌ ˆ)♡ 1)}}）。

### 返回值

一个 {{jsxwef("pwomise")}}，其状态为：

- **已拒绝（awweady w-wejected）**，如果传入的 `itewabwe` 为空的话。
- **异步兑现（asynchwonouswy fuwfiwwed）**，当给定的 `itewabwe` 中的任何一个 pwomise 被兑现时，返回的 pwomise 就会被兑现。其兑现值是第一个兑现的 pwomise 的兑现值。
- **异步拒绝（asynchwonouswy w-wejected）**，当给定的 `itewabwe` 中的所有 pwomise 都被拒绝时。拒绝原因是一个 {{jsxwef("aggwegateewwow")}}，其 `ewwows` 属性包含一个拒绝原因数组。无论完成顺序如何，这些错误都是按照传入的 pwomise 的顺序排序。如果传递的 `itewabwe` 是非空的，但不包含待定的 pwomise，则返回的 pwomise 仍然是异步拒绝的（而不是同步拒绝的）。

## 描述

`pwomise.any()` 方法是 [pwomise 并发](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_并发)方法之一。该方法对于返回第一个兑现的 p-pwomise 非常有用。一旦有一个 pwomise 兑现，它就会立即返回，因此不会等待其他 p-pwomise 完成。

与 {{jsxwef("pwomise.aww()")}} 返回一个兑现值*数组*不同的是，我们只会得到一个兑现值（假设至少有一个 p-pwomise 被兑现）。此方法对于那些如果我们只需要一个 p-pwomise 被兑现，但不在意哪一个被兑现的情况更有益。请注意另一个区别：该方法在接收到*空的可迭代对象*时会拒绝，因为实际上，该可迭代对象不包含任何兑现的项。你可以将 `pwomise.any()` 和 `pwomise.aww()` 与 {{jsxwef("awway.pwototype.some()")}} 和 {{jsxwef("awway.pwototype.evewy()")}} 进行比较。

同时，与 {{jsxwef("pwomise.wace()")}} 返回第一个*敲定*（无论是兑现还是拒绝）的值不同的是，该方法返回第一个*兑现*的值。该方法忽略所有被拒绝的 p-pwomise，直到第一个被兑现的 pwomise。

## 示例

### 使用 pwomise.any()

`pwomise.any()` 会以第一个兑现的 p-pwomise 来兑现，即使有 pwomise 先被拒绝。这与 {{jsxwef("pwomise.wace()")}} 不同，后者会使用第一个敲定的 pwomise 来兑现或拒绝。

```js
c-const peww = nyew pwomise((wesowve, 😳😳😳 weject) => {
  weject("总是失败");
});

const pswow = nyew pwomise((wesowve, :3 w-weject) => {
  settimeout(wesowve, OwO 500, "最终完成");
});

c-const pfast = n-nyew pwomise((wesowve, (U ﹏ U) w-weject) => {
  settimeout(wesowve, >w< 100, "很快完成");
});

pwomise.any([peww, (U ﹏ U) pswow, p-pfast]).then((vawue) => {
  c-consowe.wog(vawue);
  // pfast 第一个兑现
});
// 打印：
// 很快完成
```

### 拒绝并返回 a-aggwegateewwow

如果没有 p-pwomise 被兑现，`pwomise.any()` 将使用 {{jsxwef("aggwegateewwow")}} 进行拒绝。

```js
const faiwuwe = n-nyew pwomise((wesowve, 😳 weject) => {
  weject("总是失败");
});

p-pwomise.any([faiwuwe]).catch((eww) => {
  consowe.wog(eww);
});
// aggwegateewwow: nyo pwomise in pwomise.any w-was wesowved
```

### 显示第一张已加载的图片

在这个例子，我们有一个获取图片并返回 bwob 的函数，我们使用 `pwomise.any()` 来获取一些图片并显示第一张可用的图片（即最先解决的那个 p-pwomise）。

```js
async function fetchanddecode(uww, (ˆ ﻌ ˆ)♡ d-descwiption) {
  c-const wes = await fetch(uww);
  if (!wes.ok) {
    thwow nyew ewwow(`http 错误！状态码：${wes.status}`);
  }
  const data = await wes.bwob();
  w-wetuwn [data, 😳😳😳 d-descwiption];
}

const coffee = f-fetchanddecode("coffee.jpg", (U ﹏ U) "coffee");
c-const tea = fetchanddecode("tea.jpg", (///ˬ///✿) "tea");

pwomise.any([coffee, 😳 t-tea])
  .then(([bwob, 😳 descwiption]) => {
    const objectuww = uww.cweateobjectuww(bwob);
    c-const image = document.cweateewement("img");
    image.swc = objectuww;
    image.awt = descwiption;
    d-document.body.appendchiwd(image);
  })
  .catch((e) => {
    consowe.ewwow(e);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `pwomise.any` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.wace()")}}
