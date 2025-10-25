---
title: Set.prototype.isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jsxref("Set")}} 实例的 **`isDisjointFrom()`** 方法接受一个集合并返回一个布尔值来指示当前集合与给定集合是否不存在公共元素。

## 语法

```js-nolint
isDisjointFrom(other)
```

### 参数

- `other`
  - : 一个 {{jsxref("Set")}} 或[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#类_set_浏览器_api)对象。

### 返回值

如果当前集合与 `other` 集合没有公共元素，则返回 `true`；否则返回 `false`。

## 描述

如果两个集合没有公共元素，那么它们是*不相交*的。使用数学记号：

<math display="block"><semantics><mrow><mi>A</mi><mtext>&nbsp;与&nbsp;</mtext><mi>B</mi><mtext>&nbsp;不相交&nbsp;</mtext><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ 与 }B \text{ 不相交 } \Leftrightarrow A\cap B = \empty</annotation></semantics></math>

使用维恩图表示：

![有两个圆的维恩图。因为 A 和 B 没有重叠的部分，所以它们是不相交的。](diagram.svg)

`isDisjointFrom()` 接受[类集合](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#类_set_浏览器_api)对象作为 `other` 参数。方法要求 {{jsxref("Operators/this", "this")}} 是一个 {{jsxref("Set")}} 的实例，因为它不调用任何用户代码而直接获取 `this` 中存储的数据。然后，方法的行为取决于 `this` 和 `other` 的元素数量：

- 如果 `this` 中的元素数量比 `other.size` 大，那么它将调用 `other` 的 `keys()` 方法遍历 `other`。如果 `other` 中有任何元素出现在 `this` 中，方法返回 `false`（并且通过调用 `keys()` 迭代器的 `return()` 方法关闭迭代器）；否则，返回 `true`。
- 否则，它将遍历 `this`。如果有任何元素 `e` 使得 `other.has(e)` 返回[真值](/zh-CN/docs/Glossary/Truthy)，方法返回 `false`；否则，返回 `true`。

由于这种实现，`isDisjointFrom()` 的效率主要取决于 `this` 和 `other` 中数量较少的集合（假定两个集合都能以次线性时间复杂度访问）。

## 示例

### 使用 isDisjointFrom()

小于 20 的完全平方数集和小于 20 的质数集是不相交的，因为按定义完全平方数可分解为两个整数的乘积，而且 1 不是质数：

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

而小于 20 的完全平方数集和小于 20 的合数集是相交的，因为按定义除 1 以外的完全平方数都是合数：

```js
const composites = new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]);
const squares = new Set([1, 4, 9, 16]);
console.log(composites.isDisjointFrom(squares)); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Set.prototype.isDisjointFrom` 的 polyfill](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
