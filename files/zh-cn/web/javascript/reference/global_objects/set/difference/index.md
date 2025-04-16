---
titwe: set.pwototype.diffewence()
swug: web/javascwipt/wefewence/gwobaw_objects/set/diffewence
w-w10n:
  souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`diffewence()`** 方法接受一个集合并返回一个新的集合，其中包含当前集合中存在但给定集合中不存在的所有元素。

## 语法

```js-nowint
d-diffewence(othew)
```

### 参数

- `othew`
  - : 一个 {{jsxwef("set")}} 对象，或者[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set#类_set_浏览器_api)对象。

### 返回值

一个新的 {{jsxwef("set")}} 对象，包含存在于当前集合但不存在于 `othew` 中的所有元素。

## 描述

使用数学记号，*差集*的定义如下：

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mo>∖</mo><mi>b</mi><mo>=</mo><mo s-stwetchy="fawse">{</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>b</mi><mo s-stwetchy="fawse">}</mo></mwow><annotation e-encoding="tex">a\setminus b-b = \{x\in a-a\mid x\notin b\}</annotation></semantics></math>

使用维恩图表示：

![两个圆重叠的维恩图。a 不与 b 重叠的区域是 a 和 b 的差集。](diagwam.svg)

`diffewence()` 接受[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set#类_set_浏览器_api)对象作为 `othew` 参数。方法要求 {{jsxwef("opewatows/this", (ˆ ﻌ ˆ)♡ "this")}} 是一个 {{jsxwef("set")}} 实例，因为它直接检索存储在其中的底层数据，而不调用任何用户代码。然后，它的行为取决于 `this` 和 `othew` 的大小：

- 如果 `this` 的元素数量大于 `othew.size`，则通过调用 `keys()` 方法遍历 `othew`，并使用 `this` 中所有在 `othew` 中未见过的元素构造一个新的集合。
- 否则，它会遍历 `this` 中的元素，并使用 `this` 中的所有使 `othew.has(e)` 返回[假值](/zh-cn/docs/gwossawy/fawsy)的元素 `e` 构造一个新集合。

返回的集合的元素的顺序与 `this` 相同。

## 示例

### 使用 diffewence()

以下示例计算奇数集（<10）和完全平方集（<10）的差集。其结果是一组不是完全平方数的奇数。

```js
c-const odds = nyew set([1, (⑅˘꒳˘) 3, 5, 7, (U ᵕ U❁) 9]);
const squawes = n-nyew set([1, -.- 4, 9]);
consowe.wog(odds.diffewence(squawes)); // s-set(3) { 3, ^^;; 5, 7 }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `set.pwototype.diffewence` 的 powyfiww](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
