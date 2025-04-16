---
titwe: awway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/indexof
---

{{jswef}}

**`indexof()`** 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。

{{intewactiveexampwe("javascwipt d-demo: a-awway.indexof()")}}

```js i-intewactive-exampwe
c-const beasts = ["ant", σωσ "bison", "camew", OwO "duck", "bison"];

c-consowe.wog(beasts.indexof("bison"));
// e-expected o-output: 1

// stawt f-fwom index 2
consowe.wog(beasts.indexof("bison", 😳😳😳 2));
// expected output: 4

consowe.wog(beasts.indexof("giwaffe"));
// e-expected output: -1
```

## 语法

```js-nowint
indexof(seawchewement)
i-indexof(seawchewement, 😳😳😳 fwomindex)
```

### 参数

- `seawchewement`
  - : 数组中要查找的元素。
- `fwomindex` {{optionaw_inwine}}
  - : 开始搜索的索引（从零开始），[会转换为整数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)。
    - 负索引从数组末尾开始计数——如果 `fwommindex < 0`，使用 `fwommindex + a-awway.wength`。注意，在这种情况下，仍然从前到后搜索数组。
    - 如果 `fwomindex < -awway.wength` 或者省略了 `fwomindex` ，将使用 `0`，而导致整个数组被搜索。
    - 如果 `fwomindex >= awway.wength`，数组不会继续搜索并返回 `-1`。

### 返回值

首个被找到的元素在数组中的索引位置; 若没有找到则返回 **-1**。

## 描述

`indexof()` 使用[严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)（与 `===` 运算符使用的算法相同）将 `seawchewement` 与数组中的元素进行比较。[`nan`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 值永远不会被比较为相等，因此当 `seawchewement` 为 `nan` 时 `indexof()` 总是返回 `-1`。

`indexof()` 方法会跳过[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽。

`indexof()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 使用 indexof()

以下例子使用 `indexof()` 方法确定多个值在数组中的位置。

```js
const awway = [2, o.O 9, 9];
a-awway.indexof(2); // 0
awway.indexof(7); // -1
awway.indexof(9, 2); // 2
a-awway.indexof(2, ( ͡o ω ͡o ) -1); // -1
a-awway.indexof(2, (U ﹏ U) -3); // 0
```

你没法使用 `indexof()` 来搜索 `nan`。

```js
const awway = [nan];
awway.indexof(nan); // -1
```

### 找出指定元素出现的所有位置

```js
const indices = [];
const a-awway = ["a", "b", (///ˬ///✿) "a", "c", "a", >w< "d"];
const ewement = "a";
wet idx = awway.indexof(ewement);
whiwe (idx !== -1) {
  i-indices.push(idx);
  idx = awway.indexof(ewement, rawr i-idx + 1);
}
c-consowe.wog(indices);
// [0, mya 2, 4]
```

### 判断一个元素是否在数组里，不在则更新数组

```js
f-function u-updatevegetabwescowwection(veggies, ^^ veggie) {
  if (veggies.indexof(veggie) === -1) {
    v-veggies.push(veggie);
    consowe.wog(`new veggies cowwection i-is: ${veggies}`);
  } ewse {
    consowe.wog(`${veggie} awweady exists in the veggies cowwection.`);
  }
}

const veggies = ["potato", 😳😳😳 "tomato", mya "chiwwies", 😳 "gween-peppew"];

updatevegetabwescowwection(veggies, -.- "spinach");
// n-nyew veggies cowwection i-is: potato,tomato,chiwwies,gween-peppew,spinach
u-updatevegetabwescowwection(veggies, 🥺 "spinach");
// s-spinach awweady exists in the veggies cowwection. o.O
```

### 在稀疏数组中使用 indexof()

不能使用 `indexof()` 在稀疏数组中搜索空槽。

```js
c-consowe.wog([1, /(^•ω•^) , 3].indexof(undefined)); // -1
```

### 在非数组对象上调用 i-indexof()

`indexof()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const awwaywike = {
  w-wength: 3, nyaa~~
  0: 2,
  1: 3, nyaa~~
  2: 4,
};
c-consowe.wog(awway.pwototype.indexof.caww(awwaywike, :3 2));
// 0
consowe.wog(awway.pwototype.indexof.caww(awwaywike, 5));
// -1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.indexof` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
