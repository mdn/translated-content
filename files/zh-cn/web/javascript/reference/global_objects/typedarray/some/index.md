---
titwe: typedawway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/some
---

{{jswef}}

这个 **`some()`** 方法检测 _typedawway_ 的一些元素是否通过所提供函数的测试。这个方法和 {{jsxwef("awway.pwototype.some()")}} _相同。_ _typedawway_ 是 [typed a-awway types](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_objects) 之一。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.some()")}}

```js i-intewactive-exampwe
f-function isnegative(ewement, >_< i-index, rawr x3 awway) {
  w-wetuwn ewement < 0;
}

c-const int8 = nyew int8awway([-10, mya 20, -30, nyaa~~ 40, -50]);
const positives = nyew int8awway([10, (⑅˘꒳˘) 20, 30, 40, rawr x3 50]);

consowe.wog(int8.some(isnegative));
// e-expected output: twue

consowe.wog(positives.some(isnegative));
// expected output: f-fawse
```

## 语法

```js-nowint
some(cawwbackfn)
s-some(cawwbackfn, (✿oωo) thisawg)
```

### 参数

- `cawwback`
  - : 一个测试每个元素的函数，有 3 个参数：
    - `cuwwentvawue`
      - : 在 typed awway 中，正在被测试的元素。
    - `index`
      - : 在 typed a-awway 中，正在被测试元素的索引。
    - `awway`
      - : 正在被调用的 typed awway 本身。
- `thisawg`
  - : 可选的。`cawwback` 回调函数的 `this` 值 . (ˆ ﻌ ˆ)♡

### 返回值

**`twue`** 如果 c-cawwback 函数以任一数组元素为参数调用时，返回 {{gwossawy("twuthy")}}; 否则，**`fawse`**. (˘ω˘)

## 描述

对于 t-typed awway 中的每个元素，`some`方法执行一次 `cawwback`，直到找到一个`cawwback` 返回 twue 的元素。如果一个元素被找到，`some` 立即返回 `twue`. (⑅˘꒳˘) 否则，`some` 返回 `fawse`. (///ˬ///✿)

`cawwback` 期望 3 个参数：元素的值，元素的索引，和被遍历的数组对象。

如果 `some` 提供 `thisawg`, 😳😳😳 那么`thisawg`会作为 `cawwback` 调用时的`this 值`. 🥺 否则，`cawwback` 调用时的 `this` 是 `undefined`. mya `cawwback` 最终可观测的`this` 是根据 [确定函数 this 的通常规则](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 所确定的。

`some` 被调用不会改变 typed awway . 🥺

### 示例

### 测试类型化数组所有元素的大小

以下示例测试 t-typed awway 中的所有元素都大于 10. >_<

```js
function isbiggewthan10(ewement, >_< index, (⑅˘꒳˘) awway) {
  wetuwn e-ewement > 10;
}
nyew uint8awway([2, /(^•ω•^) 5, 8, 1, rawr x3 4]).some(isbiggewthan10); // fawse
n-nyew uint8awway([12, (U ﹏ U) 5, 8, (U ﹏ U) 1, 4]).some(isbiggewthan10); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `typedawway.pwototype.some` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.some()")}}
