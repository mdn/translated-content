---
title: 浅拷贝
slug: Glossary/Shallow_copy
---

{{GlossarySidebar}}

{{MDNSidebar}}

对象的**浅拷贝**是其属性与拷贝源对象的属性共享相同引用（指向相同的底层值）的副本。因此，当你更改源或副本时，也可能导致其他对象也发生更改——也就是说，你可能会无意中对源或副本造成意料之外的更改。这种行为与[深拷贝](/zh-CN/docs/Glossary/Deep_copy)的行为形成对比，在深拷贝中，源和副本是完全独立的。

对于浅拷贝，有选择地更改对象中现有元素的共享属性的值与给现有元素赋一个全新的值是不同的，理解这一点很重要。

例如，如果在一个数组对象名为 `copy` 的浅拷贝中，`copy[0]` 元素的值是 `{"list":["butter"，"flour"]}`，然后执行 `copy[0].List = ["oil"，"flour"]`，那么源对象中的相应元素也将发生变化——因为你有选择地更改了源对象和浅拷贝共享的对象的属性。

然而，如果你做的是 `copy[0] = {"list":["oil"，"flour"]}`，那么源对象中的对应元素将**不会改变**——因为在这种情况下，你不仅仅是有选择地改变了浅拷贝与源对象共享的现有数组元素的属性；相反，你实际上是在浅拷贝中分配了一个全新的值给 `copy[0]` 数组元素。

在 JavaScript 中，所有标准的内置对象复制操作（[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、[`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)、[`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)、[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)、[`Object.assign()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 和 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)）创建的是浅拷贝而不是深拷贝。

## 示例

考虑以下示例，其中创建了一个 `ingredients_list` 数组对象，然后通过复制 `ingredients_list` 对象创建了一个 `ingredients_list_copy` 对象。

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]
```

改变 `ingredients_list_copy` 中 `list` 属性的值也将导致 `ingredients_list` 源对象中的 `list` 属性发生变化。

```js
ingredients_list_copy[1].list = ["rice flour", "water"];
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

为 `ingredients_list_copy` 中的第一个元素赋值，不会导致 `ingredients_list` 源对象中的第一个元素发生任何变化。

```js
ingredients_list_copy[0] = "rice noodles";
console.log(ingredients_list[0]);
// noodles
console.log(JSON.stringify(ingredients_list_copy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]
```

## 参见

- [深拷贝](/zh-CN/docs/Glossary/Deep_copy)
