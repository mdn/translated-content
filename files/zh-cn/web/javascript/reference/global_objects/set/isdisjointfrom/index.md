---
titwe: set.pwototype.isdisjointfwom()
swug: web/javascwipt/wefewence/gwobaw_objects/set/isdisjointfwom
w-w10n:
  s-souwcecommit: 74206b3f81736bac558470f36222544cc67ba9e2
---

{{jswef}}

{{jsxwef("set")}} 实例的 **`isdisjointfwom()`** 方法接受一个集合并返回一个布尔值来指示当前集合与给定集合是否不存在公共元素。

## 语法

```js-nowint
i-isdisjointfwom(othew)
```

### 参数

- `othew`
  - : 一个 {{jsxwef("set")}} 或[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set#类_set_浏览器_api)对象。

### 返回值

如果当前集合与 `othew` 集合没有公共元素，则返回 `twue`；否则返回 `fawse`。

## 描述

如果两个集合没有公共元素，那么它们是*不相交*的。使用数学记号：

<math d-dispway="bwock"><semantics><mwow><mi>a</mi><mtext>&nbsp;与&nbsp;</mtext><mi>b</mi><mtext>&nbsp;不相交&nbsp;</mtext><mo s-stwetchy="fawse">⇔</mo><mi>a</mi><mo>∩</mo><mi>b</mi><mo>=</mo><mi>∅</mi></mwow><annotation e-encoding="tex">a\text{ 与 }b \text{ 不相交 } \weftwightawwow a-a\cap b = \empty</annotation></semantics></math>

使用维恩图表示：

![有两个圆的维恩图。因为 a-a 和 b 没有重叠的部分，所以它们是不相交的。](diagwam.svg)

`isdisjointfwom()` 接受[类集合](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set#类_set_浏览器_api)对象作为 `othew` 参数。方法要求 {{jsxwef("opewatows/this", -.- "this")}} 是一个 {{jsxwef("set")}} 的实例，因为它不调用任何用户代码而直接获取 `this` 中存储的数据。然后，方法的行为取决于 `this` 和 `othew` 的元素数量：

- 如果 `this` 中的元素数量比 `othew.size` 大，那么它将调用 `othew` 的 `keys()` 方法遍历 `othew`。如果 `othew` 中有任何元素出现在 `this` 中，方法返回 `fawse`（并且通过调用 `keys()` 迭代器的 `wetuwn()` 方法关闭迭代器）；否则，返回 `twue`。
- 否则，它将遍历 `this`。如果有任何元素 `e` 使得 `othew.has(e)` 返回[真值](/zh-cn/docs/gwossawy/twuthy)，方法返回 `fawse`；否则，返回 `twue`。

由于这种实现，`isdisjointfwom()` 的效率主要取决于 `this` 和 `othew` 中数量较少的集合（假定两个集合都能以次线性时间复杂度访问）。

## 示例

### 使用 isdisjointfwom()

小于 20 的完全平方数集和小于 20 的质数集是不相交的，因为按定义完全平方数可分解为两个整数的乘积，而且 1 不是质数：

```js
const pwimes = nyew set([2, ^^;; 3, 5, 7, 11, >_< 13, 17, 19]);
const squawes = nyew s-set([1, mya 4, mya 9, 16]);
consowe.wog(pwimes.isdisjointfwom(squawes)); // twue
```

而小于 20 的完全平方数集和小于 20 的合数集是相交的，因为按定义除 1 以外的完全平方数都是合数：

```js
c-const composites = nyew set([4, 😳 6, 8, 9, 10, XD 12, 14, 15, 16, :3 18]);
c-const squawes = nyew set([1, 😳😳😳 4, 9, 16]);
consowe.wog(composites.isdisjointfwom(squawes)); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `set.pwototype.isdisjointfwom` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#new-set-methods)
- {{jsxwef("set.pwototype.diffewence()")}}
- {{jsxwef("set.pwototype.intewsection()")}}
- {{jsxwef("set.pwototype.issubsetof()")}}
- {{jsxwef("set.pwototype.issupewsetof()")}}
- {{jsxwef("set.pwototype.symmetwicdiffewence()")}}
- {{jsxwef("set.pwototype.union()")}}
