---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
---

{{JSRef}} {{SeeCompatTable}}

> **备注：** 在某些浏览器的某些版本中，此方法被实现为 `Array.prototype.groupToMap()` 方法。由于 web 兼容性问题，它现在以静态方法实现。参见[浏览器兼容性表格](#浏览器兼容性)以获取更多信息。

**`Map.groupBy()`** 静态方法使用提供的回调函数返回的值对给定可迭代对象中的元素进行分组。最终返回的 {{jsxref("Map")}} 使用测试函数返回的唯一值作为键，可用于获取每个组中的元素组成的数组。

该方法主要用于对与对象相关的元素进行分组，特别是当该对象可能随时间而变化时。如果对象不变，你可以使用字符串表示它，并使用 {{jsxref("Object.groupBy()")}} 分组元素。

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

## 语法

```js-nolint
Map.groupBy(items, callbackFn)
```

### 参数

- `items`
  - : 一个将进行元素分组的[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)（例如 {{jsxref("Array")}}）。
- `callbackFn`
  - : 对可迭代对象中的每个元素执行的函数。它应该返回一个值（{{Glossary("object", "对象")}}或{{Glossary("primitive", "原始类型")}}）来表示当前元素的分组。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。

### 返回值

一个包含了每一个组的键的 {{jsxref("Map")}} 对象，每个键都分配了一个包含关联组元素的数组。

## 描述

`Map.groupBy()` 为可迭代对象中的每个元素调用一次提供的 `callbackFn` 函数。该回调函数应返回一个值，用以表示相关元素的分组。`callbackFn` 返回的值会被用作 `Map.groupBy()` 返回的 {{jsxref("Map")}} 的键。每个键都有一个相关联的数组，其中包含回调函数返回相同值的所有元素。

返回的 {{jsxref("Map")}} 中的元素和原始可迭代对象中的元素相同（不是{{glossary("deep copy","深拷贝")}}）。更改元素的内部结构将反映在原始可迭代对象和返回的 {{jsxref("Map")}} 中。

当你需要分组与特定对象相关的信息时，此方法非常有用。因为即使对象被修改，它仍将作为返回的 `Map` 的键继续工作。如果你改为为对象创建字符串表示形式，并在 {{jsxref("Object.groupBy()")}} 中将其用作分组键，则必须在对象改变时维护原始对象和其表示之间的映射。

> **备注：** 要访问返回的 `Map` 中的分组，必须使用最初用作 `Map` 键的相同对象（尽管你可以修改其属性）。你不能使用另一个恰好具有相同名称和属性的对象。

`Map.groupBy` 不会读取 `this` 值。它可以在任何对象上调用，并返回一个新的 {{jsxref("Map")}} 实例。

## 示例

### 使用 Map.groupBy()

首先，我们定义一个包含代表各种食品库存的对象的数组。每种食品都有一个 `type` 和一个 `quantity` 属性。

```js
const inventory = [
  { name: "芦笋", type: "蔬菜", quantity: 9 },
  { name: "香蕉", type: "水果", quantity: 5 },
  { name: "山羊", type: "肉", quantity: 23 },
  { name: "樱桃", type: "水果", quantity: 12 },
  { name: "鱼", type: "肉", quantity: 22 },
];
```

下面的代码使用箭头函数（函数返回名为 `restock` 或 `sufficient` 的对象键，具体取决于元素是否满足 `quantity < 6`）来调用 `Map.groupBy()`。返回的 `result` 对象是一个 `Map`，因此我们需要使用键调用 `get()` 来获取数组。

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "香蕉", type: "水果", quantity: 5 }]
```

请注意，函数参数 `{ quantity }` 是[函数参数的对象解构语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#从作为函数参数传递的对象中提取属性)的一个基本示例。这会解构作为参数传递的对象的 `quantity` 属性，并将其赋值给函数体中名为 `quantity` 的变量。这是一种非常简洁的访问函数中相关元素的值的方式。

`Map` 的键在修改后仍可以使用。但是，你不能重新创建键并仍然使用它。因此，任何需要使用映射的内容都保留对其键的引用是非常重要的。

```js
// 键被修改后仍可以使用
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "香蕉", type: "水果", quantity: 5 }]

// 不能使用新的键，即使它具有相同的结构！
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Map.groupBy` 的 polyfill](https://github.com/zloirock/core-js#array-grouping)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
