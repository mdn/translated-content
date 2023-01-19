---
title: 深拷贝
slug: Glossary/Deep_copy
---

{{MDNSidebar}}

对象的**深拷贝**是指其属性与其拷贝的源对象的属性不共享相同的引用（指向相同的底层值）的副本。因此，当你更改源或副本时，可以确保不会导致其他对象也发生更改；也就是说，你不会无意中对源或副本造成意料之外的更改。这种行为与[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)的行为形成对比，在浅拷贝中，对源或副本的更改可能也会导致其他对象的更改（因为两个对象共享相同的引用）。

在 JavaScript 中，标准的内置对象复制操作（[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)、[`Array.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)、[`Array.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)、[`Array.from()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)、[`Object.assign()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 和 [`Object.create()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)）不创建深拷贝（相反，它们创建浅拷贝）。

如果一个 JavaScript 对象可以被[序列化](/zh-CN/docs/Glossary/Serialization)，则存在一种创建深拷贝的方式：使用 {{jsxref("JSON.stringify()")}} 将该对象转换为 JSON 字符串，然后使用 {{jsxref("JSON.parse()")}} 将该字符串转换回（全新的）JavaScript 对象：

```js
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

从上面的代码可以看出，因为深拷贝与其源对象不共享引用，所以对深拷贝所做的任何更改都不会影响源对象。

然而，虽然上面代码中的对象足够简单，可以[序列化](/zh-CN/docs/Glossary/Serialization)，但许多 JavaScript 对象根本不能序列化——例如，[函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)（带有闭包）、[Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)、在 [HTML DOM API](/zh-CN/docs/Web/API/HTML_DOM_API) 中表示 HTML 元素的对象、递归数据以及许多其他情况。在这种情况下，调用 `JSON.stringify()` 来序列化对象将会失败。所以没有办法对这些对象进行深拷贝。

对于*可*序列化的对象，你也可以使用 [`structuredClone()`](/zh-CN/docs/Web/API/structuredClone) 方法来创建深拷贝。`structuredClone()` 的优点是允许源代码中的[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)被*转移*到新的副本，而不仅仅是克隆。但是请注意，`structuredClone()` 不是 JavaScript 语言本身的特性——相反，它是浏览器和任何其他实现了 [`window`](/zh-CN/docs/Web/API/Window) 这样全局对象的 JavaScript 运行时的一个特性。调用 `structuredClone()` 来克隆一个不可序列化的对象会失败，与调用 `JSON.stringify()` 来序列化它会失败相同。

## 参见

- [浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)
- [`window.structuredClone()`](/zh-CN/docs/Web/API/structuredClone)
