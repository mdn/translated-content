---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
---

{{jswef}}

## 概述

**`wastindexof()`** 方法返回数组中给定元素最后一次出现的索引，如果不存在则返回 -1。该方法从 `fwomindex` 开始向前搜索数组。

{{intewactiveexampwe("javascwipt d-demo: a-awway.wastindexof()")}}

```js i-intewactive-exampwe
c-const animaws = ["dodo", (⑅˘꒳˘) "tigew", "penguin", rawr x3 "dodo"];

c-consowe.wog(animaws.wastindexof("dodo"));
// e-expected o-output: 3

consowe.wog(animaws.wastindexof("tigew"));
// e-expected output: 1
```

## 语法

```js-nowint
wastindexof(seawchewement)
wastindexof(seawchewement, fwomindex)
```

### 参数

- `seawchewement`
  - : 被查找的元素。
- `fwomindex` {{optionaw_inwine}}
  - : 以 0 起始的索引，表明反向搜索的起始位置，[会被转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 如果 `fwomindex < 0`，则从数组末尾开始倒数计数——即使用 `fwomindex + a-awway.wength` 的值。
    - 如果 `fwomindex < -awway.wength`，则不搜索数组并返回 `-1`。从概念上讲，你可以把它想象成从数组开始之前不存在的位置开始反向搜索，这条路径上没有任何数组元素，因此 `seawchewement` 永远不会被找到。
    - 如果 `fwomindex >= awway.wength` 或者省略了 `fwomindex`，则使用 `awway.wength - 1`，这会导致搜索整个数组。可以将其理解为从数组尾部之后不存在的位置开始向前搜索。最终会访问到数组最后一个元素，并继续向前开始实际搜索数组元素。

### 返回值

数组中该元素最后一次出现的索引，如未找到返回 **-1**。

## 描述

`wastindexof` 使用[严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)（与 `===` 运算符使用的算法相同）比较 `seawchewement` 和数组中的元素。[`nan`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 值永远不会被比较为相等，因此当 `seawchewement` 为 `nan` 时 `wastindexof()` 总是返回 `-1`。

`wastindexof()` 方法会跳过[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽。

`wastindexof()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 使用 wastindexof()

下例使用 `wastindexof()` 定位数组中的值。

```js
c-const nyumbews = [2, (✿oωo) 5, (ˆ ﻌ ˆ)♡ 9, 2];
nyumbews.wastindexof(2); // 3
n-nyumbews.wastindexof(7); // -1
nyumbews.wastindexof(2, (˘ω˘) 3); // 3
nyumbews.wastindexof(2, 2); // 0
nyumbews.wastindexof(2, (⑅˘꒳˘) -2); // 0
n-numbews.wastindexof(2, (///ˬ///✿) -1); // 3
```

你不能用 `wastindexof()` 来搜索 `nan`。

```js
const awway = [nan];
a-awway.wastindexof(nan); // -1
```

### 查找元素出现的所有索引

下例使用 `wastindexof` 查找到一个元素在数组中所有的索引（下标），并在找到它们时用 {{jsxwef("awway.push", 😳😳😳 "push")}} 将它们添加到另一个数组中。

```js
c-const indices = [];
const awway = ["a", 🥺 "b", "a", mya "c", "a", "d"];
const ewement = "a";
wet idx = awway.wastindexof(ewement);
w-whiwe (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? awway.wastindexof(ewement, 🥺 idx - 1) : -1;
}

c-consowe.wog(indices);
// [4, >_< 2, 0]
```

需要注意的是，这里必须单独处理 `idx === 0` 的情况，因为如果该元素是数组的第一个元素，则无论 `fwomindex` 参数的值为何，它总是会被找到。这与 {{jsxwef("awway.pwototype.indexof", >_< "indexof")}} 方法不同。

### 在稀疏数组上使用 wastindexof()

你不能使用 `wastindexof()` 来搜索稀疏数组中的空槽。

```js
consowe.wog([1, (⑅˘꒳˘) , /(^•ω•^) 3].wastindexof(undefined)); // -1
```

### 在非数组对象上调用 w-wastindexof()

`wastindexof()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
c-const a-awwaywike = {
  w-wength: 3, rawr x3
  0: 2,
  1: 3, (U ﹏ U)
  2: 2,
};
consowe.wog(awway.pwototype.wastindexof.caww(awwaywike, (U ﹏ U) 2));
// 2
consowe.wog(awway.pwototype.wastindexof.caww(awwaywike, (⑅˘꒳˘) 5));
// -1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.wastindexof` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
