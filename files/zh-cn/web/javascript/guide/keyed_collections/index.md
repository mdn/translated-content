---
title: 带键的集合
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_objects")}}

本章将介绍由键索引的数据集合；`Map` 和 `Set` 对象包含可按插入顺序迭代的元素。

## Map

### Map 对象

{{jsxref("Map")}} 对象就是一个简单的键/值对映射集合，可以按照数据插入时的顺序遍历所有的元素。

下面的代码演示了使用 `Map` 进行的一些基本操作。请参考 {{jsxref("Map")}} 以获取更多的样例和完整的 API。你可以使用 {{jsxref("Statements/for...of","for...of")}} 循环来在每一次迭代中得到 `[key, value]` 数组。

```js
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### Object 和 Map 的比较

一般地，{{jsxref("Object", "object", "", 1)}} 会被用于将字符串类型映射到值。`Object` 允许设置键值对、根据键获取值、删除键、检测某个键是否存在。不过，`Map` 对象还有一些优点，可以更好地应用于映射关系表示中。

- `Object` 的键均为[字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)或 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 类型，在 `Map` 里键可以是任意类型。
- 必须手动计算 `Object` 的大小，但是可以很容易地获取 `Map` 的大小（`size`）。
- `Map` 的遍历遵循元素的插入顺序。
- `Object` 有原型，所以映射中有一些缺省的键。（可以用 `map = Object.create(null)` 回避）。

这三条提示可以帮你决定用 `Map` 还是 `Object`：

- 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用 `Map`。
- 如果需要将原始值存储为键，则使用 `Map`，因为 `Object` 将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
- 如果存在需要对个别元素进行操作的逻辑，使用 `Object`。

### WeakMap 对象

{{jsxref("WeakMap")}} 是键/值对的集合，其键必须是对象或[非注册符号](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，其值为任意 [JavaScript 类型](/zh-CN/docs/Web/JavaScript/Data_structures)，并且不会对其键创建强引用。也就是说，一个对象作为键出现在 `WeakMap` 中并不会阻止该对象被垃圾回收。一旦作为键的对象被收集，其在任何 `WeakMap` 中的相应值也会被垃圾收集，只要它们没有在其他地方被强引用。唯一可用作 `WeakMap` 键的原始类型类型是 symbol，更具体地说，是[非注册 symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)，因为非注册 symbol 保证是唯一的，并且不能被重新创建。

`WeakMap` API 与 `Map` API 基本相同。不过，`WeakMap` 不允许观察其键的有效性，这也是它不允许枚举的原因。因此，没有任何方法可以获取 `WeakMap` 中的键的列表。如果有的话，该列表将取决于垃圾回收的状态，从而引入非确定性。

可以在 {{jsxref("WeakMap")}} 参考页的“为什么使用 WeakMap”小节查看更多信息和示例。

`WeakMap` 对象的一个用例是存储一个对象的私有数据或隐藏实现细节。Nick Fitzgerald 的博文[“使用 ECMAScript 6 WeakMap 隐藏实现细节”](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)提供了一个例子。对象内部的私有数据和方法被存储在 `WeakMap` 类型的 `privates` 变量中。所有暴露出的原型和实例都是公开的，而其他内容都是外界不可访问的，因为模块并未导出 `privates` 对象。

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // 这里是私有数据
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // 处理 `me` 中的私有数据
  // …
};

module.exports = Public;
```

## Set

### Set 对象

{{jsxref("Set")}} 对象是一组唯一值的集合，可以按照添加顺序来遍历。`Set` 中的值只能出现一次；它在集合 `Set` 中是唯一的。

以下代码演示了 `Set` 的基本操作，更多示例和完整 API 可以参考 {{jsxref("Set")}}。

```js
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"
```

### 数组和 Set 之间的转换

可以使用 {{jsxref("Array.from")}} 或[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)来完成集合到数组的转换。同样，`Set` 的构造函数接受数组作为参数，可以完成从 `Array` 到 `Set` 的转换。

> **备注：** `Set` 对象存储*唯一值*，所以数组转换为 Set 时，任何重复值将会被删除！

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### 数组和 Set 的对比

一般情况下，在 JavaScript 中使用数组来存储一组元素，而新的 `Set` 对象有这些优势：

- 根据值（`arr.splice(arr.indexOf(val), 1)`）删除数组元素效率低下。
- `Set` 对象允许根据值删除元素，而数组中必须使用基于元素下标的 `splice` 方法。
- 数组的 `indexOf` 方法无法找到 {{jsxref("NaN")}} 值。
- `Set` 对象存储唯一值，所以不需要手动处理包含重复值的情况。

### WeakSet 对象

{{jsxref("WeakSet")}} 对象是可收集垃圾值的集合，包括对象和[非注册 symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#全局共享的_symbol)。`WeakSet` 中的值只能出现一次。它在 `WeakSet` 的集合中是唯一的。

与 {{jsxref("Set")}} 对象的主要区别有：

- 与 `Set` 相反，`WeakSet` 是**对象或 symbol 的集合**，而不是任何类型的任意值的集合。
- `WeakSet` 的*弱*是指集合中的对象是弱引用的。如果 `WeakSet` 中存储的一个对象不存在其他的引用，那么它就会被垃圾回收。这也意味着集合中不再存储当前对象。
- `WeakSet` 不可枚举。

`WeakSet` 对象的用例有限。它们不会泄露内存，因此可以安全地使用 DOM 元素作为键，并将其标记用于跟踪等目的。

## Map 和 Set 的键值相等

`Map` 对象和 `Set` 对象的键和值的等值判断都基于 [SameValueZero 算法](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#零值相等)：

- 等价的作用类似于严格相等运算符 `===`。
- `-0` 和 `+0` 相等。
- {{jsxref("NaN")}} 与自身相等（与 `===` 有所不同）。

{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_objects")}}
