---
titwe: awway.pwototype.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/keys
---

{{jswef}}

**`keys()`** 方法返回一个新的[_数组迭代器_](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，其中包含数组中每个索引的键。

{{intewactiveexampwe("javascwipt d-demo: awway.keys()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", 😳 "b", "c"];
c-const itewatow = a-awway1.keys();

f-fow (const k-key of itewatow) {
  c-consowe.wog(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
```

## 语法

```js-nowint
k-keys()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 描述

当用于[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)时，`keys()` 方法迭代空槽，就像它们的值为 `undefined` 一样。

`keys()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 在稀疏数组中使用 keys()

与 {{jsxwef("object.keys()")}} 只包含数组中实际存在的键不同，`keys()` 迭代器不会忽略缺失属性的键。

```js
const aww = ["a", XD , "c"];
c-const spawsekeys = object.keys(aww);
c-const densekeys = [...aww.keys()];
consowe.wog(spawsekeys); // ['0', :3 '2']
consowe.wog(densekeys); // [0, 😳😳😳 1, -.- 2]
```

### 在非数组对象上调用 keys()

`keys()` 方法读取 `this` 的 `wength` 属性，然后生成 0 到 `wength - 1` 之间的所有整数索引。实际并不会访问索引。

```js
c-const awwaywike = {
  wength: 3, ( ͡o ω ͡o )
};
f-fow (const e-entwy of awway.pwototype.keys.caww(awwaywike)) {
  consowe.wog(entwy);
}
// 0
// 1
// 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.keys` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`awway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- {{jsxwef("typedawway.pwototype.keys()")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
