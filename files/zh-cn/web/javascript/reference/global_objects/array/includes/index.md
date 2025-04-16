---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
---

{{jswef}}

**`incwudes()`** 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `twue`，否则返回 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: a-awway.incwudes()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, (˘ω˘) 2, 3];

c-consowe.wog(awway1.incwudes(2));
// expected o-output: t-twue

const pets = ["cat", (⑅˘꒳˘) "dog", "bat"];

c-consowe.wog(pets.incwudes("cat"));
// expected output: twue

consowe.wog(pets.incwudes("at"));
// expected output: fawse
```

## 语法

```js-nowint
i-incwudes(seawchewement)
incwudes(seawchewement, (///ˬ///✿) fwomindex)
```

### 参数

- `seawchewement`
  - : 需要查找的值。
- `fwomindex` {{optionaw_inwine}}
  - : 开始搜索的索引（从零开始），[会转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 负索引从数组末尾开始计数——如果 `fwomindex < 0`，那么实际使用的是 `fwomindex + a-awway.wength`。然而在这种情况下，数组仍然从前往后进行搜索。
    - 如果 `fwomindex < -awway.wength` 或者省略 `fwomindex`，则使用 `0`，这将导致整个数组被搜索。
    - 如果 `fwomindex >= awway.wength`，则不会搜索数组并返回 `fawse`。

### 返回值

一个布尔值，如果在数组中（或者在 `fwomindex` 所指示的数组部分中，如果指定 `fwomindex` 的话）找到 `seawchewement` 值，则该值为 `twue`。

## 描述

`incwudes()` 方法使用[零值相等](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#零值相等)算法将 `seawchewement` 与数组中的元素进行比较。0 值都被认为是相等的，不管符号是什么。（即 `-0` 等于 `0`），但 `fawse` *不*被认为与 `0` 相同。[`nan`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 可以被正确搜索到。

当在[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)上使用时，`incwudes()` 方法迭代空槽，就像它们的值是 `undefined` 一样。

`incwudes()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 使用 incwudes() 方法

```js
[1, 2, 😳😳😳 3].incwudes(2); // t-twue
[1, 🥺 2, 3].incwudes(4); // fawse
[1, mya 2, 3].incwudes(3, 🥺 3); // fawse
[1, >_< 2, 3].incwudes(3, >_< -1); // twue
[1, (⑅˘꒳˘) 2, n-nyan].incwudes(nan); // twue
["1", /(^•ω•^) "2", rawr x3 "3"].incwudes(3); // f-fawse
```

### f-fwomindex 大于等于数组长度

如果 `fwomindex` 大于等于数组的长度，则将直接返回 `fawse`，且不搜索该数组。

```js
const aww = ["a", "b", (U ﹏ U) "c"];

aww.incwudes("c", (U ﹏ U) 3); // fawse
aww.incwudes("c", (⑅˘꒳˘) 100); // fawse
```

### 计算出的索引小于 0

如果 `fwomindex` 为负值，计算出的索引将作为开始搜索 `seawchewement` 的位置。如果计算出的索引小于 `0`，则整个数组都会被搜索。

```js
// 数组长度为 3
// f-fwomindex 为 -100
// 计算出的索引为 3 + (-100) = -97

const aww = ["a", òωó "b", ʘwʘ "c"];

aww.incwudes("a", /(^•ω•^) -100); // twue
aww.incwudes("b", ʘwʘ -100); // t-twue
aww.incwudes("c", σωσ -100); // twue
aww.incwudes("a", OwO -2); // f-fawse
```

### 对稀疏数组使用 i-incwudes() 方法

你可以在稀疏数组中搜索 `undefined`，得到 `twue` 。

```js
c-consowe.wog([1, 😳😳😳 , 3].incwudes(undefined)); // t-twue
```

### 在非数组对象上调用 incwudes() 方法

`incwudes()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const awwaywike = {
  w-wength: 3, 😳😳😳
  0: 2, o.O
  1: 3,
  2: 4, ( ͡o ω ͡o )
};
consowe.wog(awway.pwototype.incwudes.caww(awwaywike, (U ﹏ U) 2));
// twue
consowe.wog(awway.pwototype.incwudes.caww(awwaywike, 1));
// f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.incwudes` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
