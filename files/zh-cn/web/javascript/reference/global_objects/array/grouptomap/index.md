---
title: Array.prototype.groupToMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/groupToMap
---

{{JSRef}} {{SeeCompatTable}}

**`groupToMap()`** 方法根据提供的测试函数返回的值对调用数组的元素进行分组。最终返回的 {{jsxref("Map")}} 使用测试函数返回的唯一值作为键，可以用于获取每个组中的元素数组。

<!-- {{EmbedInteractiveExample("pages/js/array-groupbytomap.html")}} -->

该方法主要用于分组与对象相关的元素，特别是当该对象可能随时间而变化时。如果对象不变，你可以使用字符串表示它，并使用 {{jsxref("Array.prototype.group()")}} 分组元素。

## 语法

```js-nolint
groupToMap(callbackFn)
groupToMap(callbackFn, thisArg)
```

### 参数

- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个值（{{Glossary("object", "对象")}}或{{Glossary("primitive", "基本类型")}}）来指示当前元素的组。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `groupToMap()` 的数组本身。
- `thisArg` {{optional_inline}}
  - : 执行 `callbackFn` 时用作 `this` 的值。参见[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 返回值

一个为每个组分配了键的 {{jsxref("Map")}} 对象，每个键都分配了一个包含相关组元素的数组。

## 描述

`groupToMap()` 方法是一个[迭代方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它为数组中的每个元素调用一次提供的 `callbackFn` 函数一次。该回调函数返回一个值，用以指示相关元素所属的组。`callbackFn` 返回的值用作 `groupToMap()` 返回的 {{jsxref("Map")}} 的键。每个键都有一个相关联的数组，其中包含回调返回相同值的所有元素。

`callbackFn` 函数会被数组中的*每个*索引调用，而不仅仅是那些具有赋值的索引。在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)中，空槽的行为表现与 `undefined` 相同。

`groupToMap()` 方法是一个[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)。它不会改变 `this`，而是返回一个包含与原始数组相同元素的数组映射。但是，作为 `callbackFn` 提供的函数可以改变数组。请注意，在第一次调用 `callbackFn` _之前_，数组的长度已经被保存。因此：

- 当开始调用 `groupToMap()` 时，`callbackFn` 将不会访问超出数组初始长度的任何元素。
- 对已访问索引的更改不会导致再次在这些元素上调用 `callbackFn`。
- 如果数组中一个现有的、尚未访问的元素被 `callbackFn` 更改，则它传递给 `callbackFn` 的值将是该元素被修改后的值。被[删除](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)的元素将被当作 `undefined` 而被访问。

> **警告：** 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

返回的 {{jsxref("Map")}} 中的元素和原始数组中的元素相同（不是{{glossary("deep copy","深拷贝")}}）。更改元素的内部结构将反映在原始数组和返回的 {{jsxref("Map")}} 中。

`groupToMap()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键的属性。

当你需要分组与特定对象相关的信息时，此方法非常有用，因为即使对象被修改，它仍将作为返回的 `Map` 的键继续工作。如果你改为为对象创建字符串表示形式，并在 {{jsxref("Array.prototype.group()")}} 中将其用作分组键，则必须在对象更改时维护原始对象和其表示之间的映射。

> **备注：** 要访问返回的 `Map` 中的组，必须使用最初用作 `Map` 键的相同对象（尽管你可以修改其属性）。你不能使用另一个恰好具有相同名称和属性的对象。

## 示例

### 使用 groupToMap()

首先，我们定义一个包含代表各种食品库存的对象的数组。每种食品都有一个 `type` 和一个 `quantity` 属性。

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

下面的代码使用带有箭头函数的 `groupToMap()`，该函数返回名为 `restock` 或 `sufficient` 的对象键，具体取决于元素是否具有 `quantity < 6`。返回的 `result` 对象是一个 `Map`，因此我们需要使用键调用 `get()` 来获取数组。

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = inventory.groupToMap(({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

请注意，函数参数 `{ quantity }` 是一个[函数参数的对象解构语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#从作为函数参数传递的对象中提取属性)的基本示例。这会解构传递为参数的对象的 `quantity` 属性，并将其赋值给函数体中名为 `quantity` 的变量。这是一种非常简洁的访问函数中相关元素的值的方式。

`Map` 的键在修改后仍可以使用。但是，你不能重新创建键并仍然使用它。因此，任何需要使用映射的内容都保留对其键的引用是非常重要的。

```js
// 键被修改后仍可以使用
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// 不能使用新的键，即使它具有相同的结构！
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

### 在稀疏数组上使用 groupToMap()

当在[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)上使用 `groupToMap()` 方法时，它会对空槽调用，并将其作为 `undefined` 值进行处理。

```js
console.log([1, , 3].groupToMap((x) => x));
// Map { 1 => [1], undefined => [undefined], 3 => [3] }
```

### 在非数组对象上调用 group()

`groupToMap()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.groupToMap.call(arrayLike, (x) => x % 2));
// Map { 0 => [2, 4], 1 => [3] }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Array.prototype.group` 的 polyfill](https://github.com/zloirock/core-js#array-grouping)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.group()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
