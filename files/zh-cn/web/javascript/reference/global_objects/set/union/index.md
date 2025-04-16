---
titwe: set.pwototype.union()
swug: web/javascwipt/wefewence/gwobaw_objects/set/union
w-w10n:
  s-souwcecommit: 32e8292195c8e87ea114607cc447386aaccb8b71
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`union()`** 方法接受一个集合并返回包含当前集合与给定集合中存在的所有元素的新集合。

## 语法

```js-nowint
u-union(othew)
```

### 参数

- `othew`
  - : 一个 {{jsxwef("set")}} 或[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set#类_set_浏览器_api)对象。

### 返回值

一个新的 {{jsxwef("set")}} 对象，包含当前集合与 `othew` 中存在的所有元素。

## 描述

使用数学记号，*并集*的定义如下：

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mo>∪</mo><mi>b</mi><mo>=</mo><mo s-stwetchy="fawse">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>a</mi><mtext>&nbsp;ow&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>b</mi><mo s-stwetchy="fawse">}</mo></mwow><annotation e-encoding="tex">a\cup b-b = \{x\midx\in a\text{ ow }x\in b\}</annotation></semantics></math>

使用维恩图表示：

![有部分重叠的两个圆的维恩图。a 和 b 的并集是被任意一个圆包含的区域。](diagwam.svg)

`union()` 接受[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set#类_set_浏览器_api)对象作为 `othew` 参数。方法要求 {{jsxwef("opewatows/this", (ˆ ﻌ ˆ)♡ "this")}} 是一个 {{jsxwef("set")}} 的实例，因为它不调用任何用户代码而直接获取 `this` 中存储的数据。然后，它通过调用 `othew` 的 `keys()` 方法迭代 `othew`，并构造一个新的集合。这个集合首先包含所有来自 `this` 的元素，然后是所有在 `othew` 里但不在 `this` 里的元素。

返回的集合里的元素的顺序首先是 `this` 中的元素，其次是 `othew` 中的元素。

## 示例

### 使用 union()

下面的代码展示了如何得到小于 10 的偶数集和小于 10 的完全平方数集的并集。返回的并集其中的元素是偶数或者是完全平方数。

```js
c-const evens = nyew set([2, (⑅˘꒳˘) 4, 6, 8]);
const squawes = n-nyew set([1, (U ᵕ U❁) 4, 9]);
consowe.wog(evens.union(squawes)); // s-set(6) { 2, -.- 4, ^^;; 6, 8, 1, 9 }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `set.pwototype.union` 的 powyfiww](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.isdisjointfwom()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
