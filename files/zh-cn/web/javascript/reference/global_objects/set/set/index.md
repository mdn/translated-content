---
title: Set() constructor
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
---
{{JSRef}}

**`Set` 构造函数**能让你创建 `Set` 对象，其可以存储任意类型的唯一值，无论是 [primitive values](/en-US/docs/Glossary/Primitive) 或者对象引用。

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Syntax

```plain
new Set([iterable])
```

### Parameters

- _`iterable`_ {{optional_inline}}
  - : 如果传递一个[可迭代对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)，它的所有元素将不重复地被添加到新的 **Set**中。如果不指定此参数或其值为`null`，则新的 **Set**为空。

### Return value

A new `Set` object.

## Examples

### Using the `Set` object

```js
let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
