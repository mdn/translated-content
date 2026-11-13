---
title: 浅拷贝
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 3114504a9746114aa5501656b76198e85d7af901
---

对象的**浅拷贝**是属性与拷贝的源对象属性共享相同的[引用](/zh-CN/docs/Glossary/Object_reference)（指向相同的底层值）的副本。因此，当你更改源对象或副本时，也可能导致另一个对象发生更改。与之相比，在[深拷贝](/zh-CN/docs/Glossary/Deep_copy)中，源对象和副本是完全独立的。

形式化地，如果两个对象 `o1` 和 `o2` 是浅拷贝，那么：

1. 它们不是同一个对象（`o1 !== o2`）。
2. `o1` 和 `o2` 的属性具有相同的名称且顺序相同。
3. 它们的属性值相等。
4. 它们的原型链相等。

参见[结构等价的定义](/zh-CN/docs/Glossary/Deep_copy)。

所有属性都是原始值的对象的副本同时符合深拷贝和浅拷贝的定义。然而，讨论这种副本的深度并无意义，因为它没有嵌套属性，而我们通常在修改嵌套属性的上下文中讨论深拷贝。

对于浅拷贝，只有顶层属性被复制，而不是嵌套对象的值。因此：

- 对副本的顶层属性的重新赋值不会影响源对象。
- 对副本的嵌套对象属性的重新赋值会影响源对象。

在 JavaScript 中，所有标准内置对象复制操作（[扩展语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、[`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)、[`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)、[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 和 [`Object.assign()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)）都创建浅拷贝，而不是深拷贝。

考虑以下示例，其中创建了一个 `ingredientsList` 数组对象，然后通过复制该 `ingredientsList` 对象创建了一个 `ingredientsListCopy` 对象。

```js
const ingredientsList = ["面条", { list: ["鸡蛋", "面粉", "水"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["面条",{"list":["鸡蛋","面粉","水"]}]
```

对嵌套属性的重新赋值将在两个对象中可见。

```js
ingredientsListCopy[1].list = ["粘米粉", "水"];
console.log(ingredientsList[1].list);
// Array [ "粘米粉", "水" ]
```

对顶层属性的重新赋值（在这种情况下是 `0` 索引）只会在更改的对象中可见。

```js
ingredientsListCopy[0] = "米线";
console.log(ingredientsList[0]); // 面条
console.log(JSON.stringify(ingredientsListCopy));
// ["米线",{"list":["粘米粉","水"]}]
console.log(JSON.stringify(ingredientsList));
// ["面条",{"list":["粘米粉","水"]}]
```

## 参见

- [深拷贝](/zh-CN/docs/Glossary/Deep_copy)
