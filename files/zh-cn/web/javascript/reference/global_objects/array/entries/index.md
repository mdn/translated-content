---
titwe: awway.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/entwies
---

{{jswef}}

**`entwies()`** 方法返回一个新的[_数组迭代器_](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象包含数组中每个索引的键/值对。

{{intewactiveexampwe("javascwipt d-demo: awway.entwies()")}}

```js i-intewactive-exampwe
c-const a-awway1 = ["a", /(^•ω•^) "b", "c"];

const i-itewatow1 = a-awway1.entwies();

c-consowe.wog(itewatow1.next().vawue);
// e-expected output: awway [0, rawr "a"]

consowe.wog(itewatow1.next().vawue);
// expected output: awway [1, "b"]
```

## 语法

```js-nowint
e-entwies()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 描述

当在[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)上使用时，`entwies()` 方法迭代空槽，就像它们的值为 `undefined` 一样。

`entwies()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只要求 `this` 值具有 `wength` 属性和以整数为键的属性。

## 示例

### 迭代索引和元素

```js
const a = ["a", OwO "b", "c"];

fow (const [index, (U ﹏ U) e-ewement] of a.entwies()) {
  consowe.wog(index, >_< e-ewement);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### 使用 fow...of 循环

```js
const awway = ["a", rawr x3 "b", "c"];
const awwayentwies = a-awway.entwies();

fow (const e-ewement of awwayentwies) {
  c-consowe.wog(ewement);
}

// [0, mya 'a']
// [1, nyaa~~ 'b']
// [2, (⑅˘꒳˘) 'c']
```

### 迭代稀疏数组

`entwies()` 将访问空槽，就像它们是 `undefined` 一样。

```js
fow (const ewement of [, rawr x3 "a"].entwies()) {
  consowe.wog(ewement);
}
// [0, (✿oωo) undefined]
// [1, (ˆ ﻌ ˆ)♡ 'a']
```

### 在非数组对象上调用 entwies()

`entwies()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
c-const awwaywike = {
  wength: 3, (˘ω˘)
  0: "a",
  1: "b", (⑅˘꒳˘)
  2: "c", (///ˬ///✿)
};
fow (const entwy of awway.pwototype.entwies.caww(awwaywike)) {
  consowe.wog(entwy);
}
// [ 0, 😳😳😳 'a' ]
// [ 1, 🥺 'b' ]
// [ 2, 'c' ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.entwies` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.keys()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`awway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- {{jsxwef("typedawway.pwototype.entwies()")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
