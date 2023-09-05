---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
---

{{JSRef}} {{SeeCompatTable}}

> **备注：** 在某些浏览器的某些版本中，此方法被实现为 `Array.prototype.group()` 方法。由于 web 兼容性问题，它现在以静态方法实现。参见[浏览器兼容性表格](#浏览器兼容性)以获取更多信息。

**`Object.groupBy()`** 静态方法根据提供的回调函数返回的字符串值对给定可迭代对象中的元素进行分组。返回的对象具有每个组的单独属性，其中包含组中的元素的数组。

当分组名称可以用字符串表示时，应使用此方法。如果你需要使用某个任意值作为键来对元素进行分组，请改用 {{jsxref("Map.groupBy()")}} 方法。

<!-- {{EmbedInteractiveExample("pages/js/object-groupby.html")}} -->

## 语法

```js-nolint
Object.groupBy(items, callbackFn)
```

### 参数

- `items`
  - : 一个将进行元素分组的[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)（例如 {{jsxref("Array")}}）。
- `callbackFn`
  - : 对可迭代对象中的每个元素执行的函数。它应该返回一个值，可以被强制转换成属性键（字符串或 [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)），用于指示当前元素所属的分组。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。

### 返回值

一个带有所有分组属性的 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)，每个属性都分配了一个包含相关组元素的数组。

## 描述

`Object.groupBy()` 为可迭代对象中的每个元素调用一次提供的 `callbackFn` 函数。回调函数应返回一个字符串或 symbol（不属于这两种类型的值会被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)），用于指示元素所属的分组。`callbackFn` 的返回值会被用作 `Map.groupBy()` 返回的对象的键。每个键都有一个相关联的数组，其中包含回调函数返回相同值的所有元素。

返回的对象中的元素和原始可迭代对象中的元素相同（不是{{glossary("deep copy","深拷贝")}}）。更改元素的内部结构将反映在原始可迭代对象和返回的对象中。

## 示例

### 使用 Object.groupBy()

首先，我们定义一个包含代表各种食品库存的对象的数组。每种食品都有一个 `type` 和一个 `quantity` 属性。

```js
const inventory = [
  { name: "芦笋", type: "蔬菜", quantity: 5 },
  { name: "香蕉", type: "水果", quantity: 0 },
  { name: "山羊", type: "肉", quantity: 23 },
  { name: "樱桃", type: "水果", quantity: 5 },
  { name: "鱼", type: "肉", quantity: 22 },
];
```

下面的代码根据元素的 `type` 属性的值对元素进行分组。

<!-- autocorrect-disable -->

```js
const result = inventory.group(({ type }) => type);

/* 结果是：
{
  蔬菜: [
    { name: "芦笋", type: "蔬菜", quantity: 5 },
  ],
  水果: [
    { name: "香蕉", type: "水果", quantity: 0 },
    { name: "樱桃", type: "水果", quantity: 5 }
  ],
  肉: [
    { name: "山羊", type: "肉", quantity: 23 },
    { name: "鱼", type: "肉", quantity: 22 }
  ]
}
*/
```

<!-- autocorrect-enable -->

箭头函数每次被调用时都只返回每个数组元素的 `type` 属性。请注意，函数参数 `{ type }` 是一个[函数参数的对象解构语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#从作为函数参数传递的对象中提取属性)的基本示例。这会解构传递为参数的对象的 `type` 属性，并将其赋值给函数体中名为 `type` 的变量。这是一种非常简洁的访问函数中相关元素的值的方式。

我们还可以创建根据元素的一个或多个属性中的值推断的分组。下面是一个非常类似的示例，根据 `quantity` 字段的值将项目分为 `ok` 或 `restock` 组。

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = inventory.group(myCallback);

/* 结果是：
{
  restock: [
    { name: "芦笋", type: "蔬菜", quantity: 5 },
    { name: "香蕉", type: "水果", quantity: 0 },
    { name: "樱桃", type: "水果", quantity: 5 }
  ],
  ok: [
    { name: "山羊", type: "肉", quantity: 23 },
    { name: "鱼", type: "肉", quantity: 22 }
  ]
}
*/
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.groupBy` 的 polyfill](https://github.com/zloirock/core-js#array-grouping)
- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
