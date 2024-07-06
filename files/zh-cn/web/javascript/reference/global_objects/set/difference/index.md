---
title: Set.prototype.difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{JSRef}}

{{jsxref("Set")}} 实例的 **`difference()`** 方法接受一个集合并返回一个新的集合，其中包含当前集合中存在但给定集合中不存在的所有元素。

## 语法

```js-nolint
difference(other)
```

### 参数

- `other`
  - : 一个 {{jsxref("Set")}} 对象，或者[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#类_set_浏览器_api)对象。

### 返回值

一个新的 {{jsxref("Set")}} 对象，包含存在于当前集合但不存在于 `other` 中的所有元素。

## 描述

使用数学记号，*差集*的定义如下：

<math display="block"><semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \{x\in A\mid x\notin B\}</annotation></semantics></math>

使用维恩图表示：

![两个圆重叠的维恩图。A 不与 B 重叠的区域是 A 和 B 的差集。](diagram.svg)

`difference()` 接受[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#类_set_浏览器_api)对象作为 `other` 参数。方法要求 {{jsxref("Operators/this", "this")}} 是一个 {{jsxref("Set")}} 实例，因为它直接检索存储在其中的底层数据，而不调用任何用户代码。然后，它的行为取决于 `this` 和 `other` 的大小：

- 如果 `this` 的元素数量大于 `other.size`，则通过调用 `keys()` 方法遍历 `other`，并使用 `this` 中所有在 `other` 中未见过的元素构造一个新的集合。
- 否则，它会遍历 `this` 中的元素，并使用 `this` 中的所有使 `other.has(e)` 返回[假值](/zh-CN/docs/Glossary/Falsy)的元素 `e` 构造一个新集合。

返回的集合的元素的顺序与 `this` 相同。

## 示例

### 使用 difference()

以下示例计算奇数集（<10）和完全平方集（<10）的差集。其结果是一组不是完全平方数的奇数。

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Set.prototype.difference` 的 polyfill](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
