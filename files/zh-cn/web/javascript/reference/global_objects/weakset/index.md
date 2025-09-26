---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---

{{JSRef}}

**`WeakSet`** 是可被垃圾回收的值的集合，包括对象和[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)。`WeakSet` 中的值只能出现一次。它在 `WeakSet` 的集合中是唯一的。

## 描述

WeakSet 中的值一定是可被垃圾回收的值。大多数{{Glossary("Primitive", "原始数据类型")}}可以被任意地创建，并且没有生命周期，所以它们不能被存储。对象和[非全局注册的符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)可以被存储，因为它们是可被垃圾回收的值。

它和 {{jsxref("Set")}} 对象的主要区别有：

- `WeakSet` **只能是对象和符号**的集合，它不能像 {{jsxref("Set")}} 那样包含任何类型的任意值。
- `WeakSet` 持*弱引用*：`WeakSet` 中对象的引用为*弱*引用。如果没有其他的对 `WeakSet` 中对象的引用存在，那么这些对象会被垃圾回收。

  > [!NOTE]
  > 这也意味着集合中没有存储当前值的列表。`WeakSet` 是不可枚举的。

### 用例：检测循环引用

递归调用自身的函数需要一种通过跟踪哪些对象已被处理，来应对循环数据结构的方法。

为此，`WeakSet` 非常适合处理这种情况：

```js
// 对传入的 subject 对象内部存储的所有内容执行回调
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

## 实例属性

这些属性在 `WeakSet.prototype` 上定义，并且由所有 `WeakSet` 实例所共享。

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : 创建了该实例对象的构造函数。对于 `WeakSet` 实例，初始值是 {{jsxref("WeakSet/WeakSet", "WeakSet")}} 构造函数。
- `WeakSet.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"WeakSet"`。该属性被 {{jsxref("Object.prototype.toString()")}} 所使用。

## 实例方法

- {{jsxref("WeakSet.prototype.add()")}}
  - : 将 `value` 追加到 `WeakSet` 对象。
- {{jsxref("WeakSet.prototype.delete()")}}
  - : 从 `WeakSet` 中移除 `value`。此后调用 `WeakSet.prototype.has(value)` 将返回 `false`。
- {{jsxref("WeakSet.prototype.has()")}}
  - : 返回一个表示 `value` 是否存在于 `WeakSet` 对象中的布尔值。

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

注意，`foo !== bar`。尽管它们是相似的对象，_但是它们不是**同一个对象**_。因此，它们都可以被加入到集合中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `WeakSet` 的 Polyfill](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
