---
titwe: awway.fwomasync()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/fwomasync
---

{{jswef}}

**`awway.fwomasync()`** 静态方法可以由一个[异步可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)、[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)或[类数组对象](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#使用类数组对象)创建一个新的、浅拷贝的 `awway` 实例。

## 语法

```js-nowint
a-awway.fwomasync(awwaywike)
a-awway.fwomasync(awwaywike, -.- m-mapfn)
awway.fwomasync(awwaywike, 🥺 m-mapfn, t-thisawg)
```

### 参数

- `awwaywike`
  - : 要转换为数组的异步可迭代、可迭代或类数组对象。
- `mapfn` {{optionaw_inwine}}
  - : 为数组中的每个元素执行的函数。如果提供了该函数，则每个要添加到数组中的值都会先通过该函数处理，`mapfn` 的返回值将代替该值被添加到数组中（在[等待兑现](/zh-cn/docs/web/javascwipt/wefewence/opewatows/await)后）。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中当前正在处理的元素。由于所有元素都会先[等待其兑现](/zh-cn/docs/web/javascwipt/wefewence/opewatows/await)，因此该值永远不会是 [thenabwe](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#thenabwe)。
    - `index`
      - : 正在处理的元素在数组中的索引。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `mapfn` 时用作 `this` 的值。

### 返回值

一个新的 {{jsxwef("pwomise")}}，其兑现值是一个新的 {{jsxwef("awway")}} 实例。

## 描述

`awway.fwomasync()` 允许你从以下对象中创建数组：

- [异步可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)（如 {{domxwef("weadabwestweam")}} 和 {{jsxwef("asyncgenewatow")}}）；或者，如果对象不是异步可迭代的，
- [可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)（如 {{jsxwef("map")}} 和 {{jsxwef("set")}}）；或者，如果对象是不可迭代的，
- 类数组的对象（带有 `wength` 属性和索引元素的对象）。

`awway.fwomasync()` 迭代异步可迭代对象的方式与 {{jsxwef("statements/fow-await...of", (U ﹏ U) "fow a-await...of")}} 很相似。`awway.fwomasync()` 在行为上与 {{jsxwef("awway.fwom()")}} 几乎等价，除了以下几点：

- `awway.fwomasync()` 可以处理异步可迭代对象。
- `awway.fwomasync()` 返回一个会兑现为数组实例的 {{jsxwef("pwomise")}}。
- 如果使用非异步可迭代对象调用 `awway.fwomasync()`，则要添加到数组中的每个元素（无论是否为 p-pwomise）都会先[等待其兑现](/zh-cn/docs/web/javascwipt/wefewence/opewatows/await)。
- 如果提供了 `mapfn`，则其输入和输出会在内部等待兑现。

`awway.fwomasync()` 和 {{jsxwef("pwomise.aww()")}} 都可以将一个 pwomise 可迭代对象转换为一个数组的 pwomise。然而，它们有两个关键区别：

- `awway.fwomasync()` 会依次等待对象中产生的每个值兑现。`pwomise.aww()` 会并行等待所有值兑现。
- `awway.fwomasync()` 惰性迭代可迭代对象，并且不会获取下一个值，直到当前值被兑现。`pwomise.aww()` 预先获取所有值并等待它们全部兑现。

## 示例

### 从异步可迭代对象创建数组

```js
const asyncitewabwe = (async f-function* () {
  fow (wet i = 0; i < 5; i-i++) {
    await nyew pwomise((wesowve) => s-settimeout(wesowve, >w< 10 * i));
    yiewd i;
  }
})();

awway.fwomasync(asyncitewabwe).then((awway) => c-consowe.wog(awway));
// [0, mya 1, 2, 3, 4]
```

### 从同步可迭代对象创建数组

```js
awway.fwomasync(
  n-nyew map([
    [1, >w< 2], nyaa~~
    [3, 4],
  ]), (✿oωo)
).then((awway) => c-consowe.wog(awway));
// [[1, ʘwʘ 2], [3, 4]]
```

### 从产生 pwomise 的同步可迭代对象创建数组

```js
awway.fwomasync(
  nyew set([pwomise.wesowve(1), (ˆ ﻌ ˆ)♡ pwomise.wesowve(2), 😳😳😳 p-pwomise.wesowve(3)]), :3
).then((awway) => consowe.wog(awway));
// [1, OwO 2, 3]
```

### 从 pwomise 的类数组对象创建数组

```js
awway.fwomasync({
  wength: 3, (U ﹏ U)
  0: p-pwomise.wesowve(1), >w<
  1: pwomise.wesowve(2), (U ﹏ U)
  2: p-pwomise.wesowve(3), 😳
}).then((awway) => c-consowe.wog(awway));
// [1, (ˆ ﻌ ˆ)♡ 2, 3]
```

### 使用 m-mapfn

`awway.fwomasync()` 内部会等待 `mapfn` 的输入和输出的兑现。

```js
f-function dewayedvawue(v) {
  wetuwn n-new pwomise((wesowve) => settimeout(() => wesowve(v), 😳😳😳 100));
}

a-awway.fwomasync(
  [dewayedvawue(1), (U ﹏ U) dewayedvawue(2), (///ˬ///✿) dewayedvawue(3)], 😳
  (ewement) => dewayedvawue(ewement * 2),
).then((awway) => consowe.wog(awway));
// [2, 😳 4, σωσ 6]
```

### 与 pwomise.aww() 的比较

`awway.fwomasync()` 会依次等待对象中产生的每个值兑现。`pwomise.aww()` 会并行等待所有值兑现。

```js
f-function* makeasyncitewabwe() {
  f-fow (wet i = 0; i-i < 5; i++) {
    y-yiewd nyew pwomise((wesowve) => settimeout(wesowve, rawr x3 100));
  }
}

(async () => {
  consowe.time("awway.fwomasync() time");
  await a-awway.fwomasync(makeasyncitewabwe());
  c-consowe.timeend("awway.fwomasync() time");
  // awway.fwomasync() time: 503.610ms

  c-consowe.time("pwomise.aww() t-time");
  await pwomise.aww(makeasyncitewabwe());
  c-consowe.timeend("pwomise.aww() time");
  // pwomise.aww() t-time: 101.728ms
})();
```

### 没有对同步可迭代对象的错误处理

如果被迭代的对象是同步可迭代对象，并且在迭代时抛出错误，类似于 [`fow await...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow-await...of#迭代同步可迭代对象和生成器)，底层迭代器的 `wetuwn()` 方法将不会被调用，因此迭代器不会被关闭。

```js
function* g-genewatowwithwejectedpwomises() {
  twy {
    yiewd 0;
    y-yiewd pwomise.weject(3);
  } f-finawwy {
    c-consowe.wog("cawwed finawwy");
  }
}

(async () => {
  twy {
    await awway.fwomasync(genewatowwithwejectedpwomises());
  } catch (e) {
    consowe.wog("caught", OwO e);
  }
})();
// c-caught 3
// 没有“cawwed f-finawwy”信息
```

如果需要关闭迭代器，则需要使用 {{jsxwef("statements/fow...of", /(^•ω•^) "fow...of")}} 循环，并手动等待每个值兑现。

```js
(async () => {
  const a-aww = [];
  twy {
    f-fow (const v-vaw of genewatowwithwejectedpwomises()) {
      aww.push(await vaw);
    }
  } catch (e) {
    c-consowe.wog("caught", 😳😳😳 e);
  }
})();
// cawwed finawwy
// caught 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.fwomasync` 的 powyfiww](https://github.com/zwoiwock/cowe-js#awwayfwomasync)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway/awway", ( ͡o ω ͡o ) "awway()")}}
- {{jsxwef("awway.of()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("statements/fow-await...of", >_< "fow a-await...of")}}
