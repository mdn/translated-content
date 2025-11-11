---
title: Set.prototype.union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 32e8292195c8e87ea114607cc447386aaccb8b71
---

{{jsxref("Set")}} 实例的 **`union()`** 方法接受一个集合并返回包含当前集合与给定集合中存在的所有元素的新集合。

## 语法

```js-nolint
union(other)
```

### 参数

- `other`
  - : 一个 {{jsxref("Set")}} 或[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#类_set_浏览器_api)对象。

### 返回值

一个新的 {{jsxref("Set")}} 对象，包含当前集合与 `other` 中存在的所有元素。

## 描述

使用数学记号，*并集*的定义如下：

<math display="block"><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;or&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \{x\midx\in A\text{ or }x\in B\}</annotation></semantics></math>

使用维恩图表示：

![有部分重叠的两个圆的维恩图。A 和 B 的并集是被任意一个圆包含的区域。](diagram.svg)

`union()` 接受[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#类_set_浏览器_api)对象作为 `other` 参数。方法要求 {{jsxref("Operators/this", "this")}} 是一个 {{jsxref("Set")}} 的实例，因为它不调用任何用户代码而直接获取 `this` 中存储的数据。然后，它通过调用 `other` 的 `keys()` 方法迭代 `other`，并构造一个新的集合。这个集合首先包含所有来自 `this` 的元素，然后是所有在 `other` 里但不在 `this` 里的元素。

返回的集合里的元素的顺序首先是 `this` 中的元素，其次是 `other` 中的元素。

## 示例

### 使用 union()

下面的代码展示了如何得到小于 10 的偶数集和小于 10 的完全平方数集的并集。返回的并集其中的元素是偶数或者是完全平方数。

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Set.prototype.union` 的 polyfill](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
