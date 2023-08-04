---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---

{{JSRef}}

**`WeakSet`** 对象允许你将弱保持*对象*存储在一个集合中。

## 描述

`WeakSet` 对象是一些对象值的集合。且其与 {{jsxref("Set")}} 类似，`WeakSet` 中的每个对象值都只能出现一次。在 `WeakSet` 的集合中，所有对象都是唯一的。

它和 {{jsxref("Set")}} 对象的主要区别有：

- `WeakSet` **只能是对象**的集合，而不能像 {{jsxref("Set")}} 那样，可以是任何类型的任意值。
- `WeakSet` 持*弱引用*：集合中对象的引用为*弱*引用。如果没有其他的对 `WeakSet` 中对象的引用，那么这些对象会被当成垃圾回收掉。

> **备注：** 这也意味着 `WeakSet` 中没有存储当前对象的列表。正因为这样，`WeakSet` 是不可枚举的。

### 用例：检测循环引用

递归调用自身的函数需要一种通过跟踪哪些对象已被处理，来应对循环数据结构的方法。

为此，`WeakSet` 非常适合处理这种情况：

```js
// 对 传入的 subject 对象 内部存储的所有内容执行回调
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // 避免无限递归
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object") {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // 循环引用！
execRecursively((obj) => console.log(obj), foo);
```

在此，在第一次运行时创建 `WeakSet`，并将其与每个后续函数调用一起传递（使用内部参数 `_refs`）。

对象的数量或它们的遍历顺序无关紧要，因此，`WeakSet` 比 {{jsxref("Set")}} 更适合（和执行）跟踪对象引用，尤其是在涉及大量对象时。

## 构造函数

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : 创建一个新的 `WeakSet` 对象。

## 实例方法

- {{jsxref("WeakSet.add", "WeakSet.prototype.add(<var>value</var>)")}}
  - : 将 `value` 添加到 `WeakSet` 对象最后一个元素的后面。
- {{jsxref("WeakSet.delete", "WeakSet.prototype.delete(<var>value</var>)")}}
  - : 从 `WeakSet` 中移除 `value`。此后调用 `WeakSet.prototype.has(value)` 将返回 `false`。
- {{jsxref("WeakSet.has", "WeakSet.prototype.has(<var>value</var>)")}}
  - : 返回一个布尔值，表示 `value` 是否存在于 `WeakSet` 对象中。

## 示例

### 使用 WeakSet 对象

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // 从 set 中删除 foo 对象
ws.has(foo); // false，foo 对象已经被删除了
ws.has(bar); // true，bar 依然存在
```

注意，`foo !== bar`。尽管它们是相似的对象，但是它们不是**_同一个对象_**。因此，它们都可以被加入到 set 中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `WeakSet` 的 Polyfill](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
